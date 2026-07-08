"""日报生成模块：将聚合数据通过 AI 生成结构化日报摘要。"""

import json
import logging
from typing import Any

from api_clients import AIClient
from utils import get_today_str

logger = logging.getLogger(__name__)

SYSTEM_PROMPT = """你是一个专业的技术团队日报助手。请根据以下数据生成一份结构清晰、简洁的团队日报。

要求：
1. 使用 Markdown 格式输出
2. 包含以下板块：
   - 📅 日期和天气概况
   - 📝 代码提交摘要（按提交者分组，简要说明改动内容）
   - 🔀 Pull Request 动态（新建/合并/关闭的 PR，标注状态）
   - ✅ 任务/审批进展（列出关键任务和状态）
   - 📊 今日总结（用 2-3 句话概括团队今日工作）
3. 如果某一板块没有数据，直接写"今日无相关动态"
4. 语言简洁专业，不要冗长
5. 直接输出报告内容，不要加额外的解释说明"""


def build_report_prompt(
    weather: dict[str, Any],
    commits: list[dict[str, Any]],
    pulls: list[dict[str, Any]],
    tasks: list[dict[str, Any]],
) -> str:
    """构建发送给 AI 的用户提示词，包含所有聚合数据。

    Args:
        weather: 天气信息字典。
        commits: GitHub 提交记录列表。
        pulls: GitHub PR 列表。
        tasks: 飞书任务/审批列表。

    Returns:
        格式化后的用户提示词字符串。
    """
    today = get_today_str()

    # 组装提交信息
    commit_lines: list[str] = []
    for c in commits:
        sha = c.get("sha", "")[:7]
        author = (c.get("commit", {}).get("author", {}).get("name", "unknown")) if isinstance(c.get("commit"), dict) else "unknown"
        message = (c.get("commit", {}).get("message", "").split("\n")[0]) if isinstance(c.get("commit"), dict) else str(c.get("html_url", ""))
        commit_lines.append(f"  - [{sha}] {author}: {message}")

    # 组装 PR 信息
    pr_lines: list[str] = []
    for pr in pulls:
        title = pr.get("title", "")
        state = pr.get("state", "")
        user = pr.get("user", {}).get("login", "unknown") if isinstance(pr.get("user"), dict) else "unknown"
        html_url = pr.get("html_url", "")
        pr_lines.append(f"  - [{state.upper()}] #{pr.get('number', '?')} {title} by {user} ({html_url})")

    # 组装任务信息
    task_lines: list[str] = []
    for t in tasks:
        instance_code = t.get("instance_code", "")
        instance_name = t.get("instance_name", "未知审批")
        status = t.get("status", "UNKNOWN")
        task_lines.append(f"  - [{status}] {instance_name} ({instance_code})")

    prompt = f"""日期: {today}

天气信息:
{json.dumps(weather, ensure_ascii=False, indent=2)}

今日代码提交 ({len(commits)} 条):
{chr(10).join(commit_lines) if commit_lines else '  (无)'}

今日 Pull Request 动态 ({len(pulls)} 条):
{chr(10).join(pr_lines) if pr_lines else '  (无)'}

今日任务/审批进展 ({len(tasks)} 条):
{chr(10).join(task_lines) if task_lines else '  (无)'}

请根据以上数据生成今日团队日报。"""
    return prompt


def generate_report(
    ai_client: AIClient,
    weather: dict[str, Any],
    commits: list[dict[str, Any]],
    pulls: list[dict[str, Any]],
    tasks: list[dict[str, Any]],
) -> str:
    """使用 AI 生成结构化日报。

    Args:
        ai_client: AI 客户端实例。
        weather: 天气信息。
        commits: 提交记录。
        pulls: PR 列表。
        tasks: 任务列表。

    Returns:
        生成的日报 Markdown 文本。失败时返回降级文本。
    """
    user_prompt = build_report_prompt(weather, commits, pulls, tasks)
    report = ai_client.chat(SYSTEM_PROMPT, user_prompt)
    if not report:
        logger.warning("AI 生成失败，使用降级摘要")
        return _build_fallback_report(weather, commits, pulls, tasks)
    return report


def _build_fallback_report(
    weather: dict[str, Any],
    commits: list[dict[str, Any]],
    pulls: list[dict[str, Any]],
    tasks: list[dict[str, Any]],
) -> str:
    """当 AI 调用失败时，构建简单的降级日报。

    Args:
        weather: 天气信息。
        commits: 提交记录。
        pulls: PR 列表。
        tasks: 任务列表。

    Returns:
        降级日报 Markdown 文本。
    """
    today = get_today_str()
    weather_desc = weather.get("description", "未知")
    weather_temp = weather.get("temp", "--")
    lines = [
        f"## 📅 团队日报 - {today}",
        "",
        f"🌤 **天气**: {weather_desc}，{weather_temp}°C",
        "",
        f"### 📝 代码提交（{len(commits)} 条）",
    ]
    for c in commits[:10]:
        sha = c.get("sha", "")[:7]
        author = (c.get("commit", {}).get("author", {}).get("name", "unknown")) if isinstance(c.get("commit"), dict) else "unknown"
        msg = (c.get("commit", {}).get("message", "").split("\n")[0]) if isinstance(c.get("commit"), dict) else ""
        lines.append(f"- [{sha}] {author}: {msg}")
    if not commits:
        lines.append("今日无相关动态")

    lines.append("")
    lines.append(f"### 🔀 Pull Request 动态（{len(pulls)} 条）")
    for pr in pulls:
        state = pr.get("state", "?")
        title = pr.get("title", "")
        user = pr.get("user", {}).get("login", "unknown") if isinstance(pr.get("user"), dict) else "unknown"
        lines.append(f"- [{state.upper()}] #{pr.get('number', '?')} {title} by {user}")
    if not pulls:
        lines.append("今日无相关动态")

    lines.append("")
    lines.append(f"### ✅ 任务/审批进展（{len(tasks)} 条）")
    for t in tasks:
        lines.append(f"- [{t.get('status', '?')}] {t.get('instance_name', '未知')}")
    if not tasks:
        lines.append("今日无相关动态")

    lines.append("")
    lines.append("> ⚠️ AI 摘要生成失败，以上为基础数据汇总。")
    return "\n".join(lines)