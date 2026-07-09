<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { NCard, NTag, NButton, NSpin, useMessage } from 'naive-ui'
import axios from 'axios'
import { useCredStore } from '@/stores/credStore'

const credStore = useCredStore()
const message = useMessage()

const token = computed(() => credStore.getCred('GITHUB_TOKEN') || '')
const repo = computed(() => credStore.getCred('GITHUB_REPO') || '')
const connected = computed(() => credStore.isConnected('github'))

const testing = ref(false)
const loadingCommits = ref(false)
const loadingPRs = ref(false)
const commits = ref<any[]>([])
const prs = ref<any[]>([])

// Gitee trending
const giteeLoading = ref(false)
const giteeRepos = ref<any[]>([])
const giteeError = ref(false)

const fallbackGitee = [
  { full_name: 'mindspore/mindspore', html_url: 'https://gitee.com/mindspore/mindspore', description: 'MindSpore is a new open source deep learning training/inference framework that could be used for mobile, edge and cloud scenarios.', stargazers_count: 9078, language: 'Python', forks_count: 1200 },
  { full_name: 'HimitZH/HOJ', html_url: 'https://gitee.com/HimitZH/HOJ', description: 'HOJ 是一个分布式、可扩展的在线评测系统。', stargazers_count: 1005, language: 'Java', forks_count: 320 },
  { full_name: 'soloncode/solon', html_url: 'https://gitee.com/soloncode/solon', description: 'Solon 是一个高效的 Java 应用开发框架：更快、更小、更简单。', stargazers_count: 143, language: 'Java', forks_count: 56 },
]

const rankBadges = ['🥇', '🥈', '🥉']

async function testConnection() {
  if (!token.value || !repo.value) {
    message.warning('请先填写 Token 和仓库名称')
    return
  }
  testing.value = true
  try {
    const [owner, repoName] = repo.value.split('/')
    await axios.get(`https://api.github.com/repos/${owner}/${repoName}`, {
      headers: { Authorization: `Bearer ${token.value}` },
    })
    message.success('连接成功')
  } catch (e: any) {
    message.error(`连接失败: ${e?.response?.data?.message || e.message}`)
  } finally {
    testing.value = false
  }
}

async function fetchCommits() {
  if (!token.value || !repo.value) return
  loadingCommits.value = true
  try {
    const [owner, repoName] = repo.value.split('/')
    const since = new Date()
    since.setHours(0, 0, 0, 0)
    const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repoName}/commits`, {
      headers: { Authorization: `Bearer ${token.value}` },
      params: { since: since.toISOString(), per_page: 20 },
    })
    commits.value = data.map((c: any) => ({
      sha: c.sha?.slice(0, 7),
      message: c.commit?.message?.split('\n')[0] || '',
      author: c.commit?.author?.name || '',
      date: c.commit?.author?.date || '',
      avatar: c.author?.avatar_url || '',
    }))
  } catch (e: any) {
    message.error(`获取提交失败: ${e?.response?.data?.message || e.message}`)
  } finally {
    loadingCommits.value = false
  }
}

async function fetchPRs() {
  if (!token.value || !repo.value) return
  loadingPRs.value = true
  try {
    const [owner, repoName] = repo.value.split('/')
    const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repoName}/pulls`, {
      headers: { Authorization: `Bearer ${token.value}` },
      params: { state: 'all', per_page: 20, sort: 'updated', direction: 'desc' },
    })
    prs.value = data.map((p: any) => ({
      number: p.number,
      title: p.title,
      state: p.state,
      user: p.user?.login || '',
      created_at: p.created_at,
      html_url: p.html_url,
    }))
  } catch (e: any) {
    message.error(`获取 PR 失败: ${e?.response?.data?.message || e.message}`)
  } finally {
    loadingPRs.value = false
  }
}

async function fetchGiteeTrending() {
  giteeLoading.value = true
  giteeError.value = false
  try {
    const { data } = await axios.get('https://gitee.com/api/v5/search/repositories', {
      params: { q: 'stars:>100', sortby: 'stars', order: 'desc', per_page: 3 },
    })
    if (data && Array.isArray(data) && data.length > 0) {
      giteeRepos.value = data.slice(0, 3)
    } else {
      giteeRepos.value = fallbackGitee
    }
  } catch {
    giteeError.value = true
    giteeRepos.value = fallbackGitee
  } finally {
    giteeLoading.value = false
  }
}

function openGitee(url: string) {
  window.open(url, '_blank')
}

onMounted(() => {
  if (connected.value) {
    fetchCommits()
    fetchPRs()
  }
  fetchGiteeTrending()
})
</script>

<template>
  <div class="github-view">
    <h2 class="page-title">🔗 代码动态</h2>

    <!-- Repo Config -->
    <NCard title="仓库配置" class="config-card">
      <div class="config-row">
        <div class="config-item">
          <span class="config-label">Token 状态</span>
          <NTag :type="connected ? 'success' : 'error'" size="small">
            {{ connected ? '已配置' : '未配置' }}
          </NTag>
        </div>
        <div class="config-item">
          <span class="config-label">仓库名称</span>
          <span class="config-value">{{ repo || '未设置' }}</span>
        </div>
        <NButton type="primary" :loading="testing" @click="testConnection" size="small">
          测试连接
        </NButton>
      </div>
    </NCard>

    <!-- CommitPanel -->
    <NCard title="📝 今日提交" class="content-card">
      <NSpin :show="loadingCommits">
        <div v-if="!connected" class="empty-hint">请先配置 GitHub Token 和仓库名称</div>
        <div v-else-if="commits.length === 0" class="empty-hint">暂无提交记录</div>
        <div v-else class="commit-list">
          <div v-for="c in commits" :key="c.sha" class="commit-item">
            <img v-if="c.avatar" :src="c.avatar" class="commit-avatar" alt="" />
            <div class="commit-info">
              <span class="commit-message">{{ c.message }}</span>
              <span class="commit-meta">{{ c.author }} · {{ c.sha }}</span>
            </div>
            <span class="commit-date">{{ c.date?.slice(0, 10) }}</span>
          </div>
        </div>
      </NSpin>
    </NCard>

    <!-- PR Panel -->
    <NCard title="🔀 拉取请求" class="content-card">
      <NSpin :show="loadingPRs">
        <div v-if="!connected" class="empty-hint">请先配置 GitHub Token 和仓库名称</div>
        <div v-else-if="prs.length === 0" class="empty-hint">暂无 PR 记录</div>
        <div v-else class="pr-list">
          <div v-for="p in prs" :key="p.number" class="pr-item">
            <div class="pr-info">
              <a :href="p.html_url" target="_blank" class="pr-title">#{{ p.number }} {{ p.title }}</a>
              <span class="pr-meta">{{ p.user }}</span>
            </div>
            <NTag :type="p.state === 'open' ? 'success' : 'default'" size="small">
              {{ p.state === 'open' ? 'Open' : 'Closed' }}
            </NTag>
          </div>
        </div>
      </NSpin>
    </NCard>

    <!-- Gitee Trending -->
    <NCard title="🔥 Gitee 热门仓库" class="content-card">
      <NSpin :show="giteeLoading">
        <div class="gitee-list">
          <div
            v-for="(repo, i) in giteeRepos"
            :key="repo.full_name"
            class="gitee-item"
            @click="openGitee(repo.html_url)"
          >
            <span class="gitee-rank">{{ rankBadges[i] || `#${i + 1}` }}</span>
            <div class="gitee-info">
              <span class="gitee-name">{{ repo.full_name }}</span>
              <span class="gitee-desc">{{ repo.description }}</span>
              <div class="gitee-meta">
                <span class="gitee-stars">⭐ {{ repo.stargazers_count }}</span>
                <span v-if="repo.language" class="gitee-lang">{{ repo.language }}</span>
                <span class="gitee-forks">🍴 {{ repo.forks_count }}</span>
              </div>
            </div>
          </div>
        </div>
      </NSpin>
    </NCard>
  </div>
</template>

<style scoped>
.github-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
}
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  padding-top: 20px;
}
.config-card {
  border: 1px solid var(--primary) !important;
  border-left: 4px solid var(--primary) !important;
}
.config-row {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.config-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.config-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}
.config-value {
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 500;
}
.empty-hint {
  text-align: center;
  color: var(--text-muted);
  padding: 24px 0;
  font-size: 0.9rem;
}

/* Commits */
.commit-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.commit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  background: var(--bg-input);
  transition: background var(--transition);
}
.commit-item:hover {
  background: var(--bg-hover);
}
.commit-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.commit-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.commit-message {
  font-size: 0.9rem;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.commit-meta {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.commit-date {
  font-size: 0.78rem;
  color: var(--text-muted);
  white-space: nowrap;
}

/* PRs */
.pr-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pr-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  background: var(--bg-input);
}
.pr-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.pr-title {
  font-size: 0.9rem;
  color: var(--primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pr-meta {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Gitee */
.gitee-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.gitee-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px;
  border-radius: var(--radius-sm);
  background: var(--bg-input);
  cursor: pointer;
  transition: all var(--transition);
}
.gitee-item:hover {
  background: var(--bg-hover);
  transform: translateX(4px);
}
.gitee-rank {
  font-size: 1.5rem;
  flex-shrink: 0;
}
.gitee-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.gitee-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}
.gitee-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.gitee-meta {
  display: flex;
  gap: 14px;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 4px;
}
.gitee-stars {
  color: var(--warning);
}
.gitee-lang {
  padding: 1px 8px;
  border-radius: 8px;
  background: var(--border);
  font-size: 0.72rem;
}
</style>