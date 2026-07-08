"""API 客户端模块：封装 GitHub、飞书、天气、AI 等外部 API 调用。"""

import logging
from typing import Any

import requests

from utils import create_http_session, get_today_start_iso, get_today_str, retry_on_failure

logger = logging.getLogger(__name__)


# ──────────────────────────────────────────────
# 基类
# ──────────────────────────────────────────────


class BaseClient:
    """API 客户端基类，提供共享的 HTTP 会话和重试逻辑。"""

    def __init__(self, timeout: int = 30) -> None:
        self.session = create_http_session(timeout=timeout)


# ──────────────────────────────────────────────
# GitHub 客户端
# ──────────────────────────────────────────────


class GitHubClient(BaseClient):
    """GitHub REST API 客户端。

    获取指定仓库的今日提交记录和 Pull Request 动态。
    """

    BASE_URL = "https://api.github.com"

    def __init__(self, token: str, repo: str, timeout: int = 30) -> None:
        """初始化 GitHub 客户端。

        Args:
            token: GitHub Personal Access Token。
            repo: 仓库全名，格式 owner/repo。
            timeout: 请求超时时间（秒）。
        """
        super().__init__(timeout=timeout)
        self.token = token
        self.repo = repo
        self.session.headers.update(
            {
                "Authorization": f"Bearer {token}",
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
            }
        )

    @retry_on_failure(max_retries=3, logger=logger)
    def get_today_commits(self) -> list[dict[str, Any]]:
        """获取今日该仓库的所有提交。

        Returns:
            提交记录列表，每个元素为 GitHub Commit API 响应字典。
            失败时返回空列表。
        """
        since = get_today_start_iso()
        url = f"{self.BASE_URL}/repos/{self.repo}/commits"
        params: dict[str, str] = {"since": since, "per_page": "100"}
        try:
            resp = self.session.get(url, params=params)
            resp.raise_for_status()
            commits = resp.json()
            logger.info("GitHub: 获取到 %d 条今日提交", len(commits))
            return commits
        except Exception as e:
            logger.error("GitHub 获取提交失败: %s", e)
            return []

    @retry_on_failure(max_retries=3, logger=logger)
    def get_today_pulls(self) -> list[dict[str, Any]]:
        """获取今日该仓库的 Pull Request。

        Returns:
            PR 列表，每个元素为 GitHub Pulls API 响应字典。
            失败时返回空列表。
        """
        url = f"{self.BASE_URL}/repos/{self.repo}/pulls"
        params: dict[str, str] = {"state": "all", "sort": "updated", "direction": "desc", "per_page": "50"}
        today = get_today_str()
        today_pulls: list[dict[str, Any]] = []
        try:
            resp = self.session.get(url, params=params)
            resp.raise_for_status()
            pulls = resp.json()
            for pr in pulls:
                updated = pr.get("updated_at", "") or pr.get("created_at", "")
                if updated.startswith(today):
                    today_pulls.append(pr)
            logger.info("GitHub: 获取到 %d 条今日 PR", len(today_pulls))
            return today_pulls
        except Exception as e:
            logger.error("GitHub 获取 PR 失败: %s", e)
            return []


# ──────────────────────────────────────────────
# 飞书任务客户端
# ──────────────────────────────────────────────


class FeishuTaskClient(BaseClient):
    """飞书开放平台客户端。

    获取租户访问令牌，并查询今日任务 / 审批实例。
    """

    BASE_URL = "https://open.feishu.cn"

    def __init__(self, app_id: str, app_secret: str, timeout: int = 30) -> None:
        """初始化飞书客户端。

        Args:
            app_id: 飞书应用 App ID。
            app_secret: 飞书应用 App Secret。
            timeout: 请求超时时间（秒）。
        """
        super().__init__(timeout=timeout)
        self.app_id = app_id
        self.app_secret = app_secret
        self._tenant_access_token: str | None = None

    def _get_access_token(self) -> str:
        """获取 tenant_access_token，若已缓存则直接返回。

        Returns:
            租户访问令牌。
        """
        if self._tenant_access_token:
            return self._tenant_access_token

        url = f"{self.BASE_URL}/open-apis/auth/v3/tenant_access_token/internal"
        payload = {"app_id": self.app_id, "app_secret": self.app_secret}
        try:
            resp = self.session.post(url, json=payload)
            resp.raise_for_status()
            data = resp.json()
            self._tenant_access_token = data.get("tenant_access_token", "")
            if not self._tenant_access_token:
                raise ValueError("飞书返回的 tenant_access_token 为空")
            logger.info("飞书: 获取 tenant_access_token 成功")
            return self._tenant_access_token
        except Exception as e:
            logger.error("飞书获取 access_token 失败: %s", e)
            raise

    @retry_on_failure(max_retries=3, logger=logger)
    def get_today_tasks(self) -> list[dict[str, Any]]:
        """获取今日的审批实例列表（作为任务更新的代理）。

        Returns:
            审批实例列表，每个元素为飞书审批 API 响应字典。
            失败时返回空列表。
        """
        token = self._get_access_token()
        today = get_today_str()
        url = f"{self.BASE_URL}/open-apis/approval/v4/instances"
        headers = {"Authorization": f"Bearer {token}"}
        params: dict[str, str] = {
            "page_size": "50",
            "start_time": f"{today}T00:00:00+08:00",
            "end_time": f"{today}T23:59:59+08:00",
        }
        try:
            resp = self.session.get(url, headers=headers, params=params)
            resp.raise_for_status()
            data = resp.json()
            if data.get("code") != 0:
                logger.warning("飞书任务 API 返回错误: %s", data.get("msg"))
                return []
            instances = data.get("data", {}).get("instance_list", [])
            logger.info("飞书: 获取到 %d 条今日审批实例", len(instances))
            return instances
        except Exception as e:
            logger.error("飞书获取任务失败: %s", e)
            return []


# ──────────────────────────────────────────────
# 天气客户端
# ──────────────────────────────────────────────


class WeatherClient(BaseClient):
    """OpenWeatherMap API 客户端。"""

    BASE_URL = "https://api.openweathermap.org/data/2.5"

    def __init__(self, api_key: str, city: str, timeout: int = 30) -> None:
        """初始化天气客户端。

        Args:
            api_key: OpenWeatherMap API Key。
            city: 城市名称，如 "Shanghai"。
            timeout: 请求超时时间（秒）。
        """
        super().__init__(timeout=timeout)
        self.api_key = api_key
        self.city = city

    @retry_on_failure(max_retries=3, logger=logger)
    def get_weather(self) -> dict[str, Any]:
        """获取当前天气信息。

        Returns:
            天气信息字典，包含天气描述、温度、湿度等。
            失败时返回包含错误信息的字典。
        """
        url = f"{self.BASE_URL}/weather"
        params: dict[str, str] = {
            "q": self.city,
            "appid": self.api_key,
            "units": "metric",
            "lang": "zh_cn",
        }
        try:
            resp = self.session.get(url, params=params)
            resp.raise_for_status()
            data = resp.json()
            weather_info = {
                "city": data.get("name", self.city),
                "description": data["weather"][0]["description"],
                "temp": data["main"]["temp"],
                "feels_like": data["main"]["feels_like"],
                "humidity": data["main"]["humidity"],
                "wind_speed": data["wind"]["speed"],
            }
            logger.info("天气: %s 当前天气 %s，温度 %.1f°C", weather_info["city"], weather_info["description"], weather_info["temp"])
            return weather_info
        except Exception as e:
            logger.error("天气 API 调用失败: %s", e)
            return {"error": str(e)}


# ──────────────────────────────────────────────
# AI 客户端（DeepSeek / OpenAI 兼容）
# ──────────────────────────────────────────────


class AIClient(BaseClient):
    """AI API 客户端，兼容 OpenAI 和 DeepSeek 接口。"""

    def __init__(self, api_key: str, base_url: str, model: str, timeout: int = 60) -> None:
        """初始化 AI 客户端。

        Args:
            api_key: API 密钥。
            base_url: API 基础地址。
            model: 模型名称，如 "deepseek-chat"、"gpt-4"。
            timeout: 请求超时时间（秒），AI 调用通常较慢，默认 60 秒。
        """
        super().__init__(timeout=timeout)
        self.api_key = api_key
        self.base_url = base_url.rstrip("/")
        self.model = model
        self.session.headers.update(
            {
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            }
        )

    @retry_on_failure(max_retries=3, logger=logger)
    def chat(self, system_prompt: str, user_prompt: str) -> str:
        """调用 AI 模型进行对话补全。

        Args:
            system_prompt: 系统提示词。
            user_prompt: 用户提示词。

        Returns:
            AI 返回的文本内容。失败时返回空字符串。
        """
        url = f"{self.base_url}/v1/chat/completions"
        payload = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            "temperature": 0.7,
            "max_tokens": 2048,
        }
        try:
            resp = self.session.post(url, json=payload)
            resp.raise_for_status()
            data = resp.json()
            content = data["choices"][0]["message"]["content"]
            logger.info("AI: 摘要生成成功，长度 %d 字符", len(content))
            return content
        except Exception as e:
            logger.error("AI API 调用失败: %s", e)
            return ""