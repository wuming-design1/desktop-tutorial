import type { FeishuTask, FeishuTaskList } from './types'

export interface FeishuAccessToken {
  token: string
  expireAt: number
}

// 获取租户 access_token
export async function getFeishuAccessToken(appId: string, appSecret: string): Promise<string> {
  const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret })
  })
  const data = await response.json()
  if (data.code === 0 && data.tenant_access_token) {
    return data.tenant_access_token
  }
  throw new Error(data.msg || '获取飞书 Token 失败')
}

// 获取任务列表
// API: GET /task/v2/tasks
export async function fetchFeishuTasks(
  accessToken: string,
  params?: {
    page_size?: number
    page_token?: string
    status?: 'not_started' | 'in_progress' | 'completed'
  }
): Promise<FeishuTaskList> {
  const queryParams = new URLSearchParams()
  if (params?.page_size) queryParams.append('page_size', String(params.page_size))
  if (params?.page_token) queryParams.append('page_token', params.page_token)
  // 根据飞书文档: completed_at 字段 "0" 表示未完成, 实际时间表示已完成
  // 这里由后端转换为 status 字段

  const url = `https://open.feishu.cn/open-apis/task/v2/tasks?${queryParams.toString()}`
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  const data = await response.json()

  if (data.code !== 0) {
    throw new Error(data.msg || '获取任务列表失败')
  }

  // 转换飞书 API 响应到内部类型
  const items = data.data?.items || []
  const tasks: FeishuTask[] = items.map((item: any) => {
    // completed_at: "0" = 未完成, else ISO 时间
    const completedAt = item.completed_at === '0' || !item.completed_at
      ? null
      : new Date(Number(item.completed_at) * 1000).toISOString()

    let status: FeishuTask['status'] = 'not_started'
    if (completedAt) {
      status = 'completed'
    } else if (item.started_at && item.started_at !== '0') {
      status = 'in_progress'
    }

    return {
      id: String(item.task_id),
      summary: item.summary || '无标题',
      description: item.description,
      status,
      completedAt,
      createdAt: item.created_at ? new Date(Number(item.created_at) * 1000).toISOString() : new Date().toISOString(),
      updatedAt: item.updated_at ? new Date(Number(item.updated_at) * 1000).toISOString() : new Date().toISOString(),
      creator: {
        id: item.creator?.id || '',
        name: item.creator?.display_name || '创建者'
      },
      assignees: (item.assignees || []).map((a: any) => ({
        id: a.id || '',
        name: a.display_name || '负责人'
      })),
      followers: (item.followers || []).map((f: any) => ({
        id: f.id || '',
        name: f.display_name || '关注人'
      })),
      origin: item.origin ? {
        platform: item.origin.platform || '',
        url: item.origin.url || '',
        custom_complete: item.origin.custom_complete
      } : undefined,
      dueDate: item.due_date ? new Date(Number(item.due_date) * 1000).toISOString() : undefined,
      priority: mapPriority(item.priority)
    }
  })

  return {
    total: data.data?.total || tasks.length,
    tasks
  }
}

// 完成任务
export async function completeFeishuTask(
  accessToken: string,
  taskId: string
): Promise<boolean> {
  const response = await fetch(`https://open.feishu.cn/open-apis/task/v2/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      completed_at: Math.floor(Date.now() / 1000)
    })
  })
  const data = await response.json()
  return data.code === 0
}

function mapPriority(p: number): FeishuTask['priority'] {
  switch (p) {
    case 1: return 'urgent'
    case 2: return 'high'
    case 3: return 'medium'
    default: return 'low'
  }
}

// Mock 数据用于演示
export function getMockFeishuTasks(): FeishuTaskList {
  const today = new Date().toISOString()
  return {
    total: 5,
    tasks: [
      {
        id: '1001',
        summary: '完成每日看板前端重构',
        description: '按照新设计规范重构，去掉侧边栏，使用玻璃态卡片风格',
        status: 'completed',
        completedAt: today,
        createdAt: today,
        updatedAt: today,
        creator: { id: 'u1', name: '张三' },
        assignees: [{ id: 'u1', name: '张三' }],
        followers: [{ id: 'u2', name: '李四' }],
        origin: { platform: 'github', url: 'https://github.com/example/project/pull/123' },
        priority: 'high'
      },
      {
        id: '1002',
        summary: '对接飞书任务开放平台 API',
        description: '实现任务列表拉取、状态展示、完成任务功能',
        status: 'in_progress',
        completedAt: null,
        createdAt: today,
        updatedAt: today,
        creator: { id: 'u2', name: '李四' },
        assignees: [{ id: 'u1', name: '张三' }],
        followers: [{ id: 'u3', name: '王五' }, { id: 'u4', name: '赵六' }],
        priority: 'urgent'
      },
      {
        id: '1003',
        summary: '优化玻璃态卡片光效和呼吸动画',
        description: '调整光影参数，提升视觉层次感',
        status: 'not_started',
        completedAt: null,
        createdAt: today,
        updatedAt: today,
        creator: { id: 'u3', name: '王五' },
        assignees: [{ id: 'u3', name: '王五' }],
        followers: [{ id: 'u1', name: '张三' }],
        priority: 'medium'
      },
      {
        id: '1004',
        summary: '编写单元测试覆盖核心组件',
        description: '为关键组件编写测试用例，保证代码质量',
        status: 'in_progress',
        completedAt: null,
        createdAt: today,
        updatedAt: today,
        creator: { id: 'u2', name: '李四' },
        assignees: [{ id: 'u4', name: '赵六' }],
        followers: [],
        priority: 'low'
      },
      {
        id: '1005',
        summary: '准备明日站会分享材料',
        description: '整理本周进展，准备汇报材料',
        status: 'not_started',
        completedAt: null,
        createdAt: today,
        updatedAt: today,
        creator: { id: 'u1', name: '张三' },
        assignees: [{ id: 'u1', name: '张三' }],
        followers: [{ id: 'u2', name: '李四' }, { id: 'u3', name: '王五' }],
        priority: 'medium'
      }
    ]
  }
}
