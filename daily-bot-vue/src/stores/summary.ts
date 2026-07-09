import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getStorage, setStorage } from '@/utils/storage'
import { useAuthStore } from '@/stores/auth'
import type { SummaryData } from '@/api/types'

function dataKey() {
  const uid = useAuthStore().user?.id || 'anonymous'
  return `wfbot_summary_${uid}`
}
function timeKey() {
  const uid = useAuthStore().user?.id || 'anonymous'
  return `wfbot_summary_time_${uid}`
}

export const useSummaryStore = defineStore('summary', () => {
  const data = ref<SummaryData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const lastUpdated = ref<string | null>(null)
  const stats = computed(() => data.value?.stats)
  const updates = computed(() => data.value?.updates || [])
  const hasData = computed(() => data.value !== null)

  function reload() {
    const d = getStorage(dataKey())
    const t = getStorage(timeKey())
    if (d) data.value = d
    if (t) lastUpdated.value = t
  }

  // 加载演示数据（mock）
  async function loadDemoData() {
    if (loading.value) return
    loading.value = true; error.value = null
    try {
      const { fetchSummary } = await import('@/api/summary')
      const result = await fetchSummary()
      data.value = result
      lastUpdated.value = new Date().toISOString()
      setStorage(dataKey(), result)
      setStorage(timeKey(), lastUpdated.value)
    } catch (e: any) {
      error.value = e?.message || '加载失败'
    } finally {
      loading.value = false
    }
  }

  // 加载真实数据（从 API）
  async function loadRealData() {
    if (loading.value) return
    loading.value = true; error.value = null
    try {
      // 尝试从真实 API 获取数据
      const realData = await fetchRealData()
      data.value = realData
      lastUpdated.value = new Date().toISOString()
      setStorage(dataKey(), realData)
      setStorage(timeKey(), lastUpdated.value)
    } catch (e: any) {
      error.value = e?.message || '真实数据加载失败'
      // 降级：显示空数据而非 mock
      data.value = null
    } finally {
      loading.value = false
    }
  }

  function clearData() {
    data.value = null
    lastUpdated.value = null
    error.value = null
  }

  return {
    data, loading, error, lastUpdated, stats, updates, hasData,
    loadDemoData, loadRealData, reload, clearData,
  }
})

// 获取真实数据：尝试调用已配置平台的 API
async function fetchRealData(): Promise<SummaryData> {
  const now = new Date().toISOString()
  const today = now.slice(0, 10)

  // 从 localStorage 读取当前用户的凭证
  const authStore = useAuthStore()
  const uid = authStore.user?.id || 'anonymous'
  const credsStr = localStorage.getItem(`wfbot_creds_${uid}`)
  const creds = credsStr ? JSON.parse(credsStr) : {}

  let commits = 0
  let activeMembers = 0
  let activeRepos = 0
  let newIssues = 0
  let closedIssues = 0
  let reviews = 0
  let releases = 0
  const realUpdates: SummaryData['updates'] = []

  // 尝试从 GitHub API 获取数据
  if (creds['GITHUB_TOKEN'] && creds['GITHUB_REPO']) {
    try {
      const [owner, repo] = creds['GITHUB_REPO'].split('/')
      // 获取今日提交
      const commitsRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/commits?since=${today}T00:00:00Z&per_page=100`,
        { headers: { Authorization: `Bearer ${creds['GITHUB_TOKEN']}` } }
      )
      if (commitsRes.ok) {
        const commitsData = await commitsRes.json()
        commits = Array.isArray(commitsData) ? commitsData.length : 0
        if (commitsData.length > 0) {
          realUpdates.push({
            id: 'gh-1',
            time: now,
            source: 'github',
            author: owner,
            content: `今日 ${commits} 次提交`,
            detail: `仓库 ${owner}/${repo} 今日有 ${commits} 次新提交`,
            url: `https://github.com/${owner}/${repo}`,
          })
        }
      }

      // 获取仓库基础信息
      const repoRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`,
        { headers: { Authorization: `Bearer ${creds['GITHUB_TOKEN']}` } }
      )
      if (repoRes.ok) {
        const repoData = await repoRes.json()
        activeRepos = 1
        activeMembers = repoData.watchers_count ? Math.min(repoData.watchers_count, 50) : 0
      }

      // 获取 Issues
      const issuesRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=100`,
        { headers: { Authorization: `Bearer ${creds['GITHUB_TOKEN']}` } }
      )
      if (issuesRes.ok) {
        newIssues = Array.isArray(await issuesRes.clone().json()) ? (await issuesRes.json()).length : 0
      }
    } catch {
      // GitHub API 调用失败，保持 0
    }
  }

  // 尝试从飞书 API 获取数据
  if (creds['FEISHU_APP_ID'] && creds['FEISHU_APP_SECRET']) {
    try {
      // 获取飞书 token
      const tokenRes = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ app_id: creds['FEISHU_APP_ID'], app_secret: creds['FEISHU_APP_SECRET'] }),
      })
      if (tokenRes.ok) {
        const tokenData = await tokenRes.json()
        if (tokenData.code === 0) {
          const token = tokenData.tenant_access_token
          // 获取任务列表
          const tasksRes = await fetch(
            'https://open.feishu.cn/open-apis/task/v2/tasks?page_size=50',
            { headers: { Authorization: `Bearer ${token}` } }
          )
          if (tasksRes.ok) {
            const tasksData = await tasksRes.json()
            if (tasksData.code === 0 && tasksData.data?.items) {
              const taskCount = tasksData.data.items.length
              realUpdates.push({
                id: 'fs-1',
                time: now,
                source: 'feishu',
                author: '飞书',
                content: `飞书任务 ${taskCount} 个`,
                detail: `当前飞书任务列表中共 ${taskCount} 个任务`,
              })
            }
          }
        }
      }
    } catch {
      // 飞书 API 调用失败
    }
  }

  return {
    date: today,
    summary: realUpdates.length > 0
      ? `已连接 ${commits > 0 ? 'GitHub' : ''}${commits > 0 && realUpdates.some(u => u.source === 'feishu') ? ' + ' : ''}${realUpdates.some(u => u.source === 'feishu') ? '飞书' : ''}，正在拉取实时数据`
      : '未配置数据源，请前往「管理凭证」配置 GitHub 或飞书连接',
    highlights: [],
    blockers: [],
    stats: {
      commits,
      commitsChange: 0,
      tasks: 0,
      urgentTasks: 0,
      activeMembers,
      totalMembers: activeMembers,
      coverage: 0,
      taskRate: 0,
      members: activeMembers,
      changes: 0,
      activeRepos,
      newIssues,
      closedIssues,
      reviews,
      releases,
    },
    updates: realUpdates,
  }
}