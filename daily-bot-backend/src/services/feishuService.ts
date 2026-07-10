import { getCredentialsForUser } from './credentialService'

let cachedToken: { token: string; expiresAt: number } | null = null

async function getAccessToken(appId: string, appSecret: string): Promise<string | null> {
  // 缓存 token（飞书 tenant_access_token 有效期 2 小时）
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token
  }

  try {
    const res = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
    })

    if (!res.ok) return null
    const data = await res.json()
    if (data.code !== 0) return null

    cachedToken = {
      token: data.tenant_access_token,
      expiresAt: Date.now() + (data.expire - 300) * 1000, // 提前 5 分钟刷新
    }
    return cachedToken.token
  } catch {
    return null
  }
}

export async function fetchTasks(userId: string): Promise<{ total: number; tasks: unknown[] }> {
  const creds = getCredentialsForUser(userId, 'feishu')
  const appId = creds['FEISHU_APP_ID']
  const appSecret = creds['FEISHU_APP_SECRET']

  if (!appId || !appSecret) return { total: 0, tasks: [] }

  try {
    const token = await getAccessToken(appId, appSecret)
    if (!token) return { total: 0, tasks: [] }

    const res = await fetch(
      'https://open.feishu.cn/open-apis/task/v2/tasks?page_size=50',
      { headers: { Authorization: `Bearer ${token}` } }
    )

    if (!res.ok) return { total: 0, tasks: [] }
    const data = await res.json()
    if (data.code !== 0) return { total: 0, tasks: [] }

    return {
      total: data.data?.items?.length || 0,
      tasks: data.data?.items || [],
    }
  } catch {
    return { total: 0, tasks: [] }
  }
}