"""飞书机器人通知模块：通过 Webhook 将日报推送到飞书群组。"""

import json
import logging
from typing import Any

import requests

from utils import create_http_session, retry_on_failure

logger = logging.getLogger(__name__)


class FeishuNotifier:
    """飞书机器人 Webhook 通知器。

    通过飞书自定义机器人 Webhook 发送消息。
    """

    def __init__(self, webhook_url: str, timeout: int = 30) -> None:
        """初始化通知器。

        Args:
            webhook_url: 飞书机器人 Webhook 地址。
            timeout: 请求超时时间（秒）。
        """
        self.webhook_url = webhook_url
        self.session = create_http_session(timeout=timeout)

    @retry_on_failure(max_retries=3, logger=logger)
    def send_markdown(self, title: str, content: str) -> bool:
        """发送 Markdown 格式消息到飞书群组。

        飞书 Webhook 的 Markdown 消息会先尝试使用富文本方式，
        若内容超过 4096 字符则自动截断。

        Args:
            title: 消息标题。
            content: Markdown 格式的正文内容。

        Returns:
            发送成功返回 True，失败返回 False。
        """
        # 飞书 Webhook 富文本卡片消息
        payload = self._build_card_message(title, content)
        try:
            resp = self.session.post(self.webhook_url, json=payload)
            resp.raise_for_status()
            result = resp.json()
            if result.get("code") == 0:
                logger.info("飞书通知: 消息发送成功")
                return True
            else:
                logger.error("飞书通知返回错误: code=%s, msg=%s", result.get("code"), result.get("msg"))
                return False
        except Exception as e:
            logger.error("飞书通知发送失败: %s", e)
            return False

    def _build_card_message(self, title: str, content: str) -> dict[str, Any]:
        """构建飞书卡片消息体。

        使用飞书消息卡片模板，支持 Markdown 渲染。

        Args:
            title: 卡片标题。
            content: Markdown 正文。

        Returns:
            飞书 Webhook 消息字典。
        """
        # 截断过长的内容（飞书卡片单字段限制）
        max_len = 30000
        if len(content) > max_len:
            content = content[:max_len] + "\n\n> ⚠️ 内容过长已自动截断"

        return {
            "msg_type": "interactive",
            "card": {
                "header": {
                    "title": {"tag": "plain_text", "content": title},
                    "template": "blue",
                },
                "elements": [
                    {
                        "tag": "markdown",
                        "content": content,
                    }
                ],
            },
        }

    def send_text(self, text: str) -> bool:
        """发送纯文本消息（备用方案）。

        Args:
            text: 纯文本内容。

        Returns:
            发送成功返回 True，失败返回 False。
        """
        payload = {
            "msg_type": "text",
            "content": {"text": text},
        }
        try:
            resp = self.session.post(self.webhook_url, json=payload)
            resp.raise_for_status()
            result = resp.json()
            return result.get("code") == 0
        except Exception as e:
            logger.error("飞书文本通知发送失败: %s", e)
            return False