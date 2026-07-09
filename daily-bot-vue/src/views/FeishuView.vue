<script setup lang="ts">
import { ref, computed } from 'vue'
import { NCard, NTag, NButton, NSpin, useMessage } from 'naive-ui'
import axios from 'axios'
import { useCredStore } from '@/stores/credStore'

const credStore = useCredStore()
const message = useMessage()

const appId = computed(() => credStore.getCred('FEISHU_APP_ID') || '')
const appSecret = computed(() => credStore.getCred('FEISHU_APP_SECRET') || '')
const connected = computed(() => credStore.isConnected('feishu'))

const testing = ref(false)
const loadingApprovals = ref(false)
const approvals = ref<any[]>([])
const accessToken = ref('')

async function testConnection() {
  if (!appId.value || !appSecret.value) {
    message.warning('请先填写 App ID 和 App Secret')
    return
  }
  testing.value = true
  try {
    const { data } = await axios.post('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
      app_id: appId.value,
      app_secret: appSecret.value,
    })
    if (data.tenant_access_token) {
      accessToken.value = data.tenant_access_token
      message.success('连接成功')
    } else {
      message.error('获取 Token 失败')
    }
  } catch (e: any) {
    message.error(`连接失败: ${e?.response?.data?.msg || e.message}`)
  } finally {
    testing.value = false
  }
}

async function fetchApprovals() {
  if (!accessToken.value) {
    message.warning('请先测试连接')
    return
  }
  loadingApprovals.value = true
  try {
    const { data } = await axios.get('https://open.feishu.cn/open-apis/approval/v4/instances', {
      headers: { Authorization: `Bearer ${accessToken.value}` },
      params: { page_size: 20 },
    })
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
    message.error(`获取审批失败: ${e?.response?.data?.msg || e.message}`)
  } finally {
    loadingApprovals.value = false
  }
}

const statusMap: Record<string, { type: 'success' | 'warning' | 'info' | 'default'; label: string }> = {
  APPROVED: { type: 'success', label: '已通过' },
  REJECTED: { type: 'default', label: '已拒绝' },
  PENDING: { type: 'warning', label: '审批中' },
  CANCELED: { type: 'default', label: '已取消' },
}
</script>

<template>
  <div class="feishu-view">
    <h2 class="page-title">📋 任务管理</h2>

    <!-- App Config -->
    <NCard title="飞书应用配置" class="config-card">
      <div class="config-row">
        <div class="config-item">
          <span class="config-label">连接状态</span>
          <NTag :type="connected ? 'success' : 'error'" size="small">
            {{ connected ? '已配置' : '未配置' }}
          </NTag>
        </div>
        <div class="config-item">
          <span class="config-label">App ID</span>
          <span class="config-value">{{ appId ? appId.slice(0, 8) + '***' : '未设置' }}</span>
        </div>
        <NButton type="primary" :loading="testing" @click="testConnection" size="small">
          测试连接
        </NButton>
        <NButton
          v-if="accessToken"
          type="default"
          :loading="loadingApprovals"
          @click="fetchApprovals"
          size="small"
        >
          获取审批实例
        </NButton>
      </div>
    </NCard>

    <!-- Approval Instances -->
    <NCard title="📝 审批实例列表" class="content-card">
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
    </NCard>
  </div>
</template>

<style scoped>
.feishu-view {
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
.empty-hint {
  text-align: center;
  color: var(--text-muted);
  padding: 24px 0;
  font-size: 0.9rem;
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
</style>