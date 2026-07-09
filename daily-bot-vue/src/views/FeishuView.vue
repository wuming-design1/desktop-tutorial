<script setup lang="ts">
import { ref, computed } from 'vue'
import { NCard, NTag, NButton, NSpin, NTabs, NTabPane, NAvatar, useMessage } from 'naive-ui'
import dayjs from 'dayjs'
import { useCredStore } from '@/stores/credStore'
import {
  getFeishuAccessToken,
  fetchFeishuTasks,
  completeFeishuTask,
  getMockFeishuTasks
} from '@/api/feishu'
import type { FeishuTask } from '@/api/types'

const credStore = useCredStore()
const message = useMessage()

const appId = computed(() => credStore.getCred('FEISHU_APP_ID') || '')
const appSecret = computed(() => credStore.getCred('FEISHU_APP_SECRET') || '')
const connected = computed(() => credStore.isConnected('feishu'))

const activeTab = ref('tasks')
const testing = ref(false)
const loadingTasks = ref(false)
const loadingApprovals = ref(false)
const approvals = ref<any[]>([])
const tasks = ref<FeishuTask[]>([])
const accessToken = ref('')
const completingId = ref('')

async function testConnection() {
  if (!appId.value || !appSecret.value) {
    message.warning('请先填写 App ID 和 App Secret')
    return
  }
  testing.value = true
  try {
    const token = await getFeishuAccessToken(appId.value, appSecret.value)
    accessToken.value = token
    message.success('连接成功')
    // 连接成功后自动拉取任务
    if (activeTab.value === 'tasks') {
      await fetchTasks()
    }
  } catch (e: any) {
    message.error(`连接失败: ${e.message || '未知错误'}`)
  } finally {
    testing.value = false
  }
}

async function fetchTasks() {
  // 如果没有 access token，使用 Mock 数据
  if (!accessToken.value) {
    loadingTasks.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 400))
      const mock = getMockFeishuTasks()
      tasks.value = mock.tasks
      message.success('演示模式已加载模拟数据')
    } catch (e) {
      console.error(e)
      message.error('加载失败')
    } finally {
      loadingTasks.value = false
    }
    return
  }

  loadingTasks.value = true
  try {
    const result = await fetchFeishuTasks(accessToken.value, { page_size: 20 })
    tasks.value = result.tasks
    if (result.tasks.length === 0) {
      message.info('暂无任务，已加载演示数据')
      const mock = getMockFeishuTasks()
      tasks.value = mock.tasks
    } else {
      message.success(`加载完成，共 ${result.total} 个任务`)
    }
  } catch (e: any) {
    message.error(`获取任务失败: ${e.message || '未知错误'}\n将使用演示数据`)
    const mock = getMockFeishuTasks()
    tasks.value = mock.tasks
  } finally {
    loadingTasks.value = false
  }
}

async function handleCompleteTask(task: FeishuTask) {
  if (!accessToken.value) {
    message.warning('演示模式下无法操作，请先配置飞书应用')
    return
  }
  completingId.value = task.id
  try {
    const ok = await completeFeishuTask(accessToken.value, task.id)
    if (ok) {
      task.status = 'completed'
      task.completedAt = new Date().toISOString()
      message.success(`任务「${task.summary}」已标记为完成`)
    } else {
      message.error('操作失败，请重试')
    }
  } catch (e: any) {
    message.error(`操作失败: ${e.message}`)
  } finally {
    completingId.value = ''
  }
}

async function fetchApprovals() {
  if (!accessToken.value) {
    message.warning('请先测试连接')
    return
  }
  loadingApprovals.value = true
  try {
    const res = await fetch(`https://open.feishu.cn/open-apis/approval/v4/instances?page_size=20`, {
      headers: { Authorization: `Bearer ${accessToken.value}` }
    })
    const data = await res.json()
    if (data.code === 0) {
      approvals.value = (data.data?.instance_list || []).map((inst: any) => ({
        id: inst.instance_code || inst.instance_id,
        name: inst.instance_name || '审批实例',
        status: inst.status || 'PENDING',
        create_time: inst.create_time ? new Date(Number(inst.create_time)).toLocaleString('zh-CN') : '--',
        form_url: inst.form_url || '',
      }))
    } else {
      message.error(`获取审批失败: ${data.msg}`)
    }
  } catch (e: any) {
    message.error(`获取审批失败: ${e?.message || '未知错误'}`)
  } finally {
    loadingApprovals.value = false
  }
}

const statusMap: Record<string, { type: 'success' | 'warning' | 'info' | 'default' | 'error'; label: string }> = {
  APPROVED: { type: 'success', label: '已通过' },
  REJECTED: { type: 'error', label: '已拒绝' },
  PENDING: { type: 'warning', label: '审批中' },
  CANCELED: { type: 'default', label: '已取消' },
}

const taskStatusMap: Record<FeishuTask['status'], { type: 'success' | 'warning' | 'info' | 'default'; label: string }> = {
  not_started: { type: 'default', label: '未开始' },
  in_progress: { type: 'warning', label: '进行中' },
  completed: { type: 'success', label: '已完成' },
}

const priorityMap: Record<FeishuTask['priority'], { type: 'success' | 'warning' | 'error' | 'default'; label: string }> = {
  low: { type: 'default', label: '低' },
  medium: { type: 'info', label: '中' },
  high: { type: 'warning', label: '高' },
  urgent: { type: 'error', label: '紧急' },
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return '-'
  return dayjs(dateStr).format('MM-DD HH:mm')
}

function goToOrigin(task: FeishuTask) {
  if (task.origin?.url) {
    window.open(task.origin.url, '_blank')
  }
}
</script>

<template>
  <div class="feishu-view">
    <h2 class="page-title">📋 飞书任务管理</h2>

    <!-- App Config -->
    <NCard title="应用配置" class="config-card glass-card">
      <div class="config-row">
        <div class="config-item">
          <span class="config-label">连接状态</span>
          <NTag :type="connected ? 'success' : 'error'" size="small">
            {{ connected ? '已配置' : '未配置' }}
          </NTag>
        </div>
        <div class="config-item">
          <span class="config-label">App ID</span>
          <span class="config-value">{{ appId ? appId.value.slice(0, 8) + '***' : '未设置' }}</span>
        </div>
        <NButton type="primary" :loading="testing" @click="testConnection" size="small">
          {{ accessToken ? '重新连接' : '测试连接' }}
        </NButton>
        <span v-if="!accessToken" class="hint-text">当前为演示模式，显示模拟数据</span>
      </div>
    </NCard>

    <NTabs v-model:value="activeTab" class="main-tabs">
      <NTabPane name="tasks" tab="📝 任务列表">
        <NCard class="content-card glass-card">
          <template #header>
            <div class="card-header">
              <span>任务管理 ({{ tasks.length }})</span>
              <NButton type="primary" size="small" :loading="loadingTasks" @click="fetchTasks">
                🔄 刷新
              </NButton>
            </div>
          </template>
          <NSpin :show="loadingTasks">
            <div v-if="tasks.length === 0" class="empty-hint">
              {{ accessToken ? '暂无任务' : '请先点击测试连接加载数据' }}
            </div>
            <div v-else class="task-list">
              <div v-for="task in tasks" :key="task.id" class="task-card">
                <div class="task-main">
                  <div class="task-title-row">
                    <span class="task-summary" :class="{ completed: task.status === 'completed' }">
                      {{ task.summary }}
                    </span>
                    <div class="task-tags">
                      <NTag
                        :type="taskStatusMap[task.status]?.type"
                        size="small"
                      >
                        {{ taskStatusMap[task.status]?.label }}
                      </NTag>
                      <NTag
                        :type="priorityMap[task.priority]?.type"
                        size="small"
                      >
                        {{ priorityMap[task.priority]?.label }}优先级
                      </NTag>
                    </div>
                  </div>
                  <p v-if="task.description" class="task-desc">{{ task.description }}</p>
                  <div class="task-meta">
                    <div class="meta-left">
                      <span class="meta-label">创建者</span>
                      <NAvatar :size=24 :style="{ backgroundColor: 'var(--primary)' }">
                        {{ task.creator.name.charAt(0) }}
                      </NAvatar>
                      <span class="meta-value">{{ task.creator.name }}</span>
                      <span v-if="task.assignees.length > 0" class="meta-label">负责人</span>
                      <div class="avatar-group">
                        <NAvatar
                          v-for="a in task.assignees"
                          :key="a.id"
                          :size=24
                          :style="{ backgroundColor: 'var(--primary-light)' }"
                        >
                          {{ a.name.charAt(0) }}
                        </NAvatar>
                      </div>
                      <span v-if="task.followers.length > 0" class="meta-label">关注者 ({{ task.followers.length }})</span>
                    </div>
                    <div class="meta-right">
                      <span v-if="task.dueDate" class="due-date">
                        📅 {{ formatDate(task.dueDate) }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="task-actions">
                  <NButton
                    v-if="task.origin?.url"
                    size="small"
                    type="default"
                    @click="goToOrigin(task)"
                  >
                    🔗 查看来源
                  </NButton>
                  <NButton
                    v-if="task.status !== 'completed'"
                    size="small"
                    type="primary"
                    :loading="completingId === task.id"
                    @click="handleCompleteTask(task)"
                  >
                    ✅ 完成
                  </NButton>
                </div>
              </div>
            </div>
          </NSpin>
        </NCard>
      </NTabPane>

      <NTabPane name="approvals" tab="✅ 审批实例">
        <NCard title="审批实例列表" class="content-card glass-card">
          <NSpin :show="loadingApprovals">
            <div v-if="approvals.length === 0" class="empty-hint">
              {{ accessToken ? '暂无审批实例' : '请先测试连接并获取审批实例' }}
            </div>
            <div v-else class="approval-list">
              <div v-for="a in approvals" :key="a.id" class="approval-item">
                <div class="approval-info">
                  <span class="approval-name">{{ a.name }}</span>
                  <span class="approval-id">#{{ a.id }}</span>
                  <span class="approval-time">{{ a.create_time }}</span>
                </div>
                <NTag :type="statusMap[a.status]?.type || 'default'" size="small">
                  {{ statusMap[a.status]?.label || a.status }}
                </NTag>
              </div>
            </div>
          </NSpin>
          <template #footer>
            <div class="card-footer-actions">
              <NButton size="small" type="default" :loading="loadingApprovals" @click="fetchApprovals">
                刷新审批列表
              </NButton>
            </div>
          </template>
        </NCard>
      </NTabPane>
    </NTabs>
  </div>
</template>

<style scoped>
.feishu-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  padding-top: 20px;
}

.config-card {
  border-left: 4px solid var(--primary);
}

.config-row {
  display: flex;
  align-items: center;
  gap: 16px;
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

.hint-text {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-style: italic;
}

.main-tabs {
  border-radius: var(--radius);
}

.content-card {
  margin-top: 12px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.empty-hint {
  text-align: center;
  color: var(--text-muted);
  padding: 32px 0;
  font-size: 0.9rem;
}

/* 任务列表 */
.task-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.task-card {
  padding: 20px;
  border-radius: var(--radius);
  background: var(--bg-input);
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.task-card:hover {
  border-color: var(--primary-light);
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.task-main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.task-summary {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
}

.task-summary.completed {
  text-decoration: line-through;
  color: var(--text-muted);
}

.task-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.task-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.task-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.meta-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.meta-label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.meta-value {
  font-size: 0.85rem;
  color: var(--text-primary);
}

.avatar-group {
  display: flex;
  gap: -4px;
}

.due-date {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.task-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border-light);
}

/* Approvals */
.approval-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.approval-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  background: var(--bg-input);
}

.approval-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.approval-name {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
}

.approval-id {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.approval-time {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.card-footer-actions {
  display: flex;
  justify-content: flex-end;
  padding: 4px 0;
}

/* Glassmorphism */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
</style>
