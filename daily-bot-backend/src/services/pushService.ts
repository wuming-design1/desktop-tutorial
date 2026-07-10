import { getCredentialsForUser } from './credentialService'
import { getDashboardSummary } from './dashboardService'

interface PushPreview {
  date: string
  stats: { label: string; value: string }[]
  summary: string
  highlights: string[]
}

/** 发送飞书 Webhook 消息 */
async function sendWebhook(webhookUrl: string, content: unknown): Promise<boolean> {
  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content),
  })
  return res.ok
}

/** 从真实数据生成推送预览 */
export async function buildPushPreview(userId: string): Promise<PushPreview> {
  const summary = await getDashboardSummary(userId)
  const stats = summary.stats

  const statsList = [
    { label: '今日提交', value: `${stats.commits} 次` },
    { label: '活跃成员', value: `${stats.members || stats.activeMembers} 人` },
    { label: '活跃仓库', value: `${stats.activeRepos || 0} 个` },
    { label: '新增 Issue', value: `${stats.newIssues || 0} 个` },
  ]

  const highlights = summary.updates.slice(0, 5).map(u => u.content)

  return {
    date: new Date().toLocaleDateString('zh-CN', {
      year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',
    }),
    stats: statsList,
    summary: summary.summary,
    highlights,
  }
}

/** 测试连接：发送一条简单的测试消息 */
export async function testPush(userId: string): Promise<{ success: boolean; error?: string }> {
  const creds = getCredentialsForUser(userId, 'webhook')
  const webhookUrl = creds['FEISHU_WEBHOOK_URL']

  if (!webhookUrl) {
    return { success: false, error: '未配置 Webhook URL' }
  }

  try {
    const ok = await sendWebhook(webhookUrl, {
      msg_type: 'text',
      content: { text: '🔔 连接测试 - 团队工作流智能看板' },
    })

    if (!ok) {
      return { success: false, error: 'Webhook 请求失败' }
    }
    return { success: true }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}

/** 推送每日报告到飞书群 */
export async function pushDailyReport(userId: string): Promise<{ success: boolean; preview: PushPreview | null; error?: string }> {
  const creds = getCredentialsForUser(userId, 'webhook')
  const webhookUrl = creds['FEISHU_WEBHOOK_URL']

  if (!webhookUrl) {
    return { success: false, preview: null, error: '未配置 Webhook URL' }
  }

  const preview = await buildPushPreview(userId)

  const statsText = preview.stats.map(s => `${s.label}: ${s.value}`).join(' | ')
  const highlightsText = preview.highlights.length > 0
    ? preview.highlights.map(h => `• ${h}`).join('\n')
    : '• 暂无亮点数据'

  try {
    const ok = await sendWebhook(webhookUrl, {
      msg_type: 'interactive',
      card: {
        header: {
          title: { tag: 'plain_text', content: '📊 每日工作流报告' },
          template: 'blue',
        },
        elements: [
          {
            tag: 'div',
            text: {
              tag: 'lark_md',
              content: `**日期:** ${preview.date}\n\n${statsText}\n\n---\n**🔥 亮点:**\n${highlightsText}`,
            },
          },
        ],
      },
    })

    if (!ok) {
      return { success: false, preview, error: '飞书推送请求失败' }
    }
    return { success: true, preview }
  } catch (e: any) {
    return { success: false, preview, error: e.message }
  }
}