"""工具模块：日志配置、HTTP 重试、时间处理等通用工具。"""

import functools
import logging
import sys
import time
from datetime import datetime, timedelta
from typing import Any, Callable, TypeVar

import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

F = TypeVar("F", bound=Callable[..., Any])

# 上海时区偏移量
CST_OFFSET = timedelta(hours=8)


def setup_logging(level: str = "INFO") -> None:
    """配置全局日志格式和级别。

    Args:
        level: 日志级别字符串，如 "DEBUG"、"INFO"。
    """
    fmt = "%(asctime)s [%(levelname)s] %(name)s - %(message)s"
    logging.basicConfig(
        level=getattr(logging, level.upper(), logging.INFO),
        format=fmt,
        stream=sys.stdout,
    )


def get_today_str() -> str:
    """获取今日日期字符串（上海时区）。

    Returns:
        格式为 YYYY-MM-DD 的日期字符串。
    """
    return (datetime.utcnow() + CST_OFFSET).strftime("%Y-%m-%d")


def get_today_start_iso() -> str:
    """获取今日零点的 ISO 8601 时间戳（上海时区）。

    Returns:
        ISO 8601 格式的时间字符串。
    """
    today = datetime.utcnow() + CST_OFFSET
    start = today.replace(hour=0, minute=0, second=0, microsecond=0)
    return (start - CST_OFFSET).isoformat() + "Z"


def retry_on_failure(
    max_retries: int = 3,
    backoff: float = 1.0,
    logger: logging.Logger | None = None,
) -> Callable[[F], F]:
    """装饰器：为函数调用添加自动重试机制。

    Args:
        max_retries: 最大重试次数（不含首次调用）。
        backoff: 退避因子，每次重试等待时间 = backoff * (2 ** retry_count)。
        logger: 日志记录器，若为 None 则使用默认 logger。

    Returns:
        装饰后的函数。
    """

    def decorator(func: F) -> F:
        @functools.wraps(func)
        def wrapper(*args: Any, **kwargs: Any) -> Any:
            _logger = logger or logging.getLogger(func.__module__)
            last_exception: Exception | None = None
            for attempt in range(max_retries + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    last_exception = e
                    if attempt < max_retries:
                        wait = backoff * (2**attempt)
                        _logger.warning(
                            "%s 第 %d/%d 次调用失败: %s，%0.1f 秒后重试",
                            func.__name__,
                            attempt + 1,
                            max_retries + 1,
                            e,
                            wait,
                        )
                        time.sleep(wait)
            raise last_exception  # type: ignore[misc]

        return wrapper  # type: ignore[return-value]

    return decorator


def create_http_session(
    timeout: int = 30,
    total_retries: int = 3,
) -> requests.Session:
    """创建带重试和超时配置的 HTTP 会话。

    Args:
        timeout: 请求超时时间（秒）。
        total_retries: 连接级重试次数。

    Returns:
        配置好的 requests.Session 实例。
    """
    session = requests.Session()
    retry_strategy = Retry(
        total=total_retries,
        backoff_factor=0.5,
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["GET", "POST"],
    )
    adapter = HTTPAdapter(max_retries=retry_strategy)
    session.mount("https://", adapter)
    session.mount("http://", adapter)
    session.timeout = timeout  # type: ignore[attr-defined]
    return session