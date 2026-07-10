<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import { useRouter } from 'vue-router'
import { NCard, NTag, NButton, NSpin, NDataTable, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { apiAdminGetUsers, type AdminUser } from '@/api/backend'
import http from '@/api/index'

const router = useRouter()
const message = useMessage()

const ADMIN_STORAGE_KEY = 'wfbot_admin_token'

const loading = ref(false)
const users = ref<AdminUser[]>([])
const total = ref(0)

const roleLabels: Record<string, string> = { admin: '管理员', member: '成员', viewer: '观察者' }
const roleTypes: Record<string, 'success' | 'warning' | 'default'> = {
  admin: 'success', member: 'warning', viewer: 'default',
}

const columns: DataTableColumns<AdminUser> = [
  { title: '用户名', key: 'username', width: 120, ellipsis: { tooltip: true } },
  { title: '邮箱', key: 'email', width: 200, ellipsis: { tooltip: true } },
  {
    title: '角色', key: 'role', width: 80,
    render(row) {
      return h(NTag, { type: roleTypes[row.role] || 'default', size: 'small' }, () => roleLabels[row.role] || row.role)
    },
  },
  {
    title: '注册时间', key: 'createdAt', width: 170,
    render(row) {
      return h('span', { style: 'font-size:0.82rem;color:var(--text-muted)' }, new Date(row.createdAt).toLocaleString('zh-CN'))
    },
  },
  {
    title: '最后登录', key: 'lastLoginAt', width: 170,
    render(row) {
      return h('span', { style: 'font-size:0.82rem;color:var(--text-muted)' }, new Date(row.lastLoginAt).toLocaleString('zh-CN'))
    },
  },
]

async function loadUsers() {
  loading.value = true
  const token = localStorage.getItem(ADMIN_STORAGE_KEY)
  if (!token) {
    router.push('/admin/login')
    return
  }
  // 设置 admin token 到请求头
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`

  try {
    const result = await apiAdminGetUsers()
    users.value = result.users
    total.value = result.total
  } catch (e: any) {
    if (e?.response?.status === 401) {
      message.error('登录已过期，请重新登录')
      localStorage.removeItem(ADMIN_STORAGE_KEY)
      router.push('/admin/login')
    } else {
      message.error('获取用户列表失败')
    }
  } finally {
    loading.value = false
  }
}

function logout() {
  localStorage.removeItem(ADMIN_STORAGE_KEY)
  // 恢复原来的 auth token（如果存在）
  const userToken = localStorage.getItem('wfbot_token')
  if (userToken) {
    http.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
  } else {
    delete http.defaults.headers.common['Authorization']
  }
  router.push('/admin/login')
}

onMounted(() => {
  loadUsers()
})
</script>

<template>
  <div class="admin-dashboard">
    <header class="admin-header glass">
      <div class="header-inner">
        <div class="header-left">
          <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
            <rect x="3" y="14" width="6" height="16" rx="2" fill="url(#adh1)"/>
            <rect x="12" y="8" width="6" height="22" rx="2" fill="url(#adh2)"/>
            <rect x="21" y="3" width="6" height="27" rx="2" fill="url(#adh3)"/>
            <defs>
              <linearGradient id="adh1"><stop stop-color="#E17055"/><stop offset="1" stop-color="#FAB1A0"/></linearGradient>
              <linearGradient id="adh2"><stop stop-color="#D63031"/><stop offset="1" stop-color="#FF7675"/></linearGradient>
              <linearGradient id="adh3"><stop stop-color="#FDCB6E"/><stop offset="1" stop-color="#FFEAA7"/></linearGradient>
            </defs>
          </svg>
          <span class="header-title">审计面板</span>
          <NTag type="error" size="small" :bordered="false">只读模式</NTag>
        </div>
        <div class="header-right">
          <NButton text size="small" @click="logout">退出</NButton>
        </div>
      </div>
    </header>

    <div class="dashboard-content">
      <NCard title="注册用户列表" class="users-card">
        <template #header-extra>
          <span class="user-count">共 {{ total }} 个用户</span>
        </template>
        <NSpin :show="loading">
          <NDataTable
            :columns="columns"
            :data="users"
            :bordered="false"
            :single-line="false"
            size="small"
            max-height="calc(100vh - 180px)"
            virtual-scroll
          />
        </NSpin>
      </NCard>
    </div>
  </div>
</template>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background: var(--bg-base);
}
.admin-header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 56px;
  border-bottom: 1px solid rgba(214, 48, 49, 0.15);
  background: rgba(214, 48, 49, 0.03);
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header-title {
  font-size: 1rem;
  font-weight: 700;
  color: #D63031;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}
.users-card {
  border: 1px solid var(--border) !important;
}
.user-count {
  font-size: 0.82rem;
  color: var(--text-muted);
}
</style>