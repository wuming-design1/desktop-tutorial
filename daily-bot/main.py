#!/usr/bin/env python3
"""每日团队工作流摘要机器人 - 主入口。

通过 APScheduler 实现每日定时运行，依次调用各 API 客户端获取数据，
经 AI 聚合生成日报后，通过飞书机器人 Webhook 推送到群组。
"""

import logging
import signal
from datetime import datetime

from apscheduler.schedulers.background import BackgroundScheduler

from api_clients import AIClient, FeishuTaskClient, GitHubClient, WeatherClient
from config import Config, ConfigError
from notifier import FeishuNotifier
from report_generator import generate_report
from utils import get_today_str, setup_logging

logger = logging.getLogger(__name__)


def collect_and_send_report(config: Config) -> None:
    """日报核心流程：收集数据 → 生成摘要 → 推送通知。

    单次 API 调用失败不会影响整体流程，缺失的数据会以空列表/降级信息替代。

    Args:
        config: 应用配置实例。
    """
    today = get_today_str()
    logger.info("========== 开始生成 %s 日报 ==========", today)

    # 1. 初始化所有客户端
    github = GitHubClient(token=config.github_token, repo=config.github_repo)
    feishu_task = FeishuTaskClient(app_id=config.feishu_app_id, app_secret=config.feishu_app_secret)
    weather = WeatherClient(api_key=config.weather_api_key, city=config.weather_city)
    ai = AIClient(api_key=config.ai_api_key, base_url=config.ai_base_url, model=config.ai_model)
    notifier = FeishuNotifier(webhook_url=config.feishu_webhook_url)

    # 2. 并行获取数据（各 API 独立，任一失败不影响其他）
    logger.info("正在获取数据...")
    weather_data = weather.get_weather()
    commits = github.get_today_commits()
    pulls = github.get_today_pulls()
    tasks = feishu_task.get_today_tasks()

    # 3. 生成日报
    if weather_data.get("error"):
        logger.warning("天气数据缺失，使用默认值")
        weather_data = {"description": "未知", "temp": "--", "city": config.weather_city}

    logger.info("正在生成 AI 日报摘要...")
    report = generate_report(ai, weather_data, commits, pulls, tasks)

    # 4. 推送日报
    title = f"📋 团队日报 - {today}"
    success = notifier.send_markdown(title=title, content=report)
    if success:
        logger.info("日报推送成功！")
    else:
        logger.error("日报推送失败！")
        # 尝试发送纯文本降级通知
        notifier.send_text(f"⚠️ 日报推送失败，请检查日志。日期: {today}")

    logger.info("========== %s 日报流程结束 ==========", today)


def main() -> None:
    """程序入口：加载配置，设置定时任务，启动守护进程。"""
    try:
        config = Config.from_env()
    except ConfigError as e:
        print(f"配置错误: {e}")
        print("请确保 .env 文件已正确配置，参考 .env.example")
        return

    setup_logging(config.log_level)
    logger.info("每日团队工作流摘要机器人启动")
    logger.info("定时执行时间: %s (上海时间)", config.schedule_time)

    # 解析定时时间
    try:
        hour, minute = map(int, config.schedule_time.split(":"))
    except ValueError:
        logger.error("SCHEDULE_TIME 格式错误，应为 HH:MM，当前值: %s", config.schedule_time)
        return

    scheduler = BackgroundScheduler(timezone="Asia/Shanghai")

    # 添加每日定时任务
    scheduler.add_job(
        collect_and_send_report,
        trigger="cron",
        hour=hour,
        minute=minute,
        args=[config],
        id="daily_report",
        name="每日团队日报",
        misfire_grace_time=600,  # 10 分钟宽限期
    )

    scheduler.start()
    logger.info("调度器已启动，等待定时触发...")

    # 优雅退出
    def shutdown(signum, frame):
        logger.info("收到退出信号，正在关闭...")
        scheduler.shutdown(wait=False)
        logger.info("已退出")

    signal.signal(signal.SIGINT, shutdown)
    signal.signal(signal.SIGTERM, shutdown)

    try:
        # 保持主线程存活
        signal.pause()
    except AttributeError:
        # Windows 不支持 signal.pause()
        import time
        while True:
            time.sleep(60)


if __name__ == "__main__":
    main()