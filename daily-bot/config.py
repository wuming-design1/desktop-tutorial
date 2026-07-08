"""配置管理模块。

通过 dotenv 加载环境变量，集中管理所有配置项。
"""

import os
from dataclasses import dataclass

from dotenv import load_dotenv

# 加载 .env 文件（如果存在）
load_dotenv()


class ConfigError(Exception):
    """配置缺失时抛出的异常。"""

    pass


def _require_env(key: str) -> str:
    """获取必需的环境变量，若缺失则抛出异常。

    Args:
        key: 环境变量名。

    Returns:
        环境变量值。

    Raises:
        ConfigError: 环境变量未设置时抛出。
    """
    value = os.getenv(key, "").strip()
    if not value:
        raise ConfigError(f"缺少必需的环境变量: {key}")
    return value


@dataclass(frozen=True)
class Config:
    """应用全局配置。"""

    # GitHub
    github_token: str
    github_repo: str

    # 飞书
    feishu_app_id: str
    feishu_app_secret: str

    # 天气
    weather_api_key: str
    weather_city: str

    # AI
    ai_api_key: str
    ai_base_url: str
    ai_model: str

    # 通知
    feishu_webhook_url: str

    # 调度
    schedule_time: str

    # 日志
    log_level: str

    @classmethod
    def from_env(cls) -> "Config":
        """从环境变量构建配置实例。

        Returns:
            Config 实例。
        """
        return cls(
            github_token=_require_env("GITHUB_TOKEN"),
            github_repo=_require_env("GITHUB_REPO"),
            feishu_app_id=_require_env("FEISHU_APP_ID"),
            feishu_app_secret=_require_env("FEISHU_APP_SECRET"),
            weather_api_key=_require_env("WEATHER_API_KEY"),
            weather_city=_require_env("WEATHER_CITY"),
            ai_api_key=_require_env("AI_API_KEY"),
            ai_base_url=_require_env("AI_BASE_URL"),
            ai_model=_require_env("AI_MODEL"),
            feishu_webhook_url=_require_env("FEISHU_WEBHOOK_URL"),
            schedule_time=os.getenv("SCHEDULE_TIME", "09:00").strip(),
            log_level=os.getenv("LOG_LEVEL", "INFO").strip().upper(),
        )