import { getCredentialsForUser } from './credentialService'
import type { TrendPoint } from '../utils/types'

interface GitHubCommit {
  commit: { author: { name: string; date: string } }
}

export async function fetchCommitTrend(userId: string): Promise<TrendPoint[]> {
  const creds = getCredentialsForUser(userId, 'github')
  const token = creds['GITHUB_TOKEN']
  const repo = creds['GITHUB_REPO']

  if (!token || !repo) return []

  try {
    const [owner, repoName] = repo.split('/')
    // 获取最近 7 天的提交
    const since = new Date(Date.now() - 7 * 86400000).toISOString()
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/commits?since=${since}&per_page=100`,
      { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' } }
    )

    if (!res.ok) return []

    const commits: GitHubCommit[] = await res.json()

    // 按天分组统计
    const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    const dailyCounts: Record<string, number> = {}

    for (const commit of commits) {
      const date = commit.commit.author.date.slice(0, 10)
      dailyCounts[date] = (dailyCounts[date] || 0) + 1
    }

    const result: TrendPoint[] = []
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000)
      const dateStr = d.toISOString().slice(0, 10)
      result.push({
        date: dateStr,
        value: dailyCounts[dateStr] || 0,
      })
    }

    return result
  } catch {
    return []
  }
}

export async function fetchTodayCommits(userId: string): Promise<number> {
  const creds = getCredentialsForUser(userId, 'github')
  const token = creds['GITHUB_TOKEN']
  const repo = creds['GITHUB_REPO']

  if (!token || !repo) return 0

  try {
    const [owner, repoName] = repo.split('/')
    const today = new Date().toISOString().slice(0, 10)
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/commits?since=${today}T00:00:00Z&per_page=100`,
      { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' } }
    )

    if (!res.ok) return 0
    const commits = await res.json()
    return Array.isArray(commits) ? commits.length : 0
  } catch {
    return 0
  }
}

export async function fetchRepoInfo(userId: string): Promise<{ openIssues: number; watchers: number }> {
  const creds = getCredentialsForUser(userId, 'github')
  const token = creds['GITHUB_TOKEN']
  const repo = creds['GITHUB_REPO']

  if (!token || !repo) return { openIssues: 0, watchers: 0 }

  try {
    const [owner, repoName] = repo.split('/')
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}`,
      { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' } }
    )

    if (!res.ok) return { openIssues: 0, watchers: 0 }
    const data = await res.json()
    return {
      openIssues: data.open_issues_count || 0,
      watchers: data.watchers_count || 0,
    }
  } catch {
    return { openIssues: 0, watchers: 0 }
  }
}