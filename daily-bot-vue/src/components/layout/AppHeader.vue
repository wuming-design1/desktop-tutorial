<script setup lang="ts">
import { inject, h, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { NDropdown, NAvatar, NButton, NTag } from 'naive-ui'
import type { DropdownOption } from 'naive-ui'
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'
import ThemeToggle from '@/components/common/ThemeToggle.vue'
import NotificationBell from '@/components/common/NotificationBell.vue'

const router = useRouter()
const app = useAppStore()
const authStore = useAuthStore()
const openLogin = inject<() => void>('openLogin', () => {})

// 实时时钟
const now = ref('')
let timer: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  const update = () => {
    now.value = new Date().toLocaleTimeString('zh-CN', { hour12: false })
  }
  update()
  timer = setInterval(update, 1000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const moreMenuOptions: DropdownOption[] = [
  { label: '天气', key: '/weather' },
  { label: 'AI', key: '/ai' },
  { label: '推送', key: '/push' },
  { type: 'divider', key: 'd1' },
  { label: '系统设置', key: '/settings' },
]

const userMenuOptions = computed<DropdownOption[]>(() => {
  const opts: DropdownOption[] = [
    {
      label: () => h('div', { style: 'padding:4px 0' }, [
        h('div', { style: 'font-weight:600;font-size:0.9rem' }, authStore.displayName),
        h('div', { style: 'font-size:0.78rem;color:var(--text-muted)' }, [
          authStore.user?.email || '',
          ' · ',
          authStore.user?.role === 'admin' ? '管理员' : authStore.user?.role === 'viewer' ? '观察者' : '成员',
        ]),
      ]),
      key: 'user-info',
      disabled: true,
    },
    { type: 'divider', key: 'd0' },
    { label: '管理凭证', key: 'credentials' },
    { label: '系统设置', key: 'settings' },
  ]
  if (authStore.isAdmin) {
    opts.push({ label: '用户管理', key: 'admin_users' })
  }
  opts.push({ type: 'divider', key: 'd2' })
  opts.push({ label: '退出登录', key: 'logout' })
  return opts
})

const handleMoreSelect = (key: string) => {
  router.push(key)
}

const handleUserSelect = (key: string) => {
  if (key === 'credentials') {
    openLogin()
  } else if (key === 'settings') {
    router.push('/settings')
  } else if (key === 'admin_users') {
    router.push('/admin/users')
  } else if (key === 'logout') {
    authStore.clearAuth()
    router.push({ name: 'login' })
  }
}

const doRefresh = () => {
  app.updateTime()
}
</script>

<template>
  <header class="glass app-header">
    <div class="header-inner">
      <div class="header-left">
        <RouterLink to="/" class="logo-link">
          <svg class="logo-svg" viewBox="0 0 32 32" fill="none">
            <rect x="2" y="14" width="6" height="16" rx="2" fill="url(#hl1)" />
            <rect x="11" y="8" width="6" height="22" rx="2" fill="url(#hl2)" />
            <rect x="20" y="3" width="6" height="27" rx="2" fill="url(#hl3)" />
            <rect x="29" y="11" width="2" height="18" rx="1" fill="url(#hl4)" />
            <defs>
              <linearGradient id="hl1" x1="2" y1="14" x2="8" y2="30"><stop stop-color="#6C5CE7"/><stop offset="1" stop-color="#A29BFE"/></linearGradient>
              <linearGradient id="hl2" x1="11" y1="8" x2="17" y2="30"><stop stop-color="#6C5CE7"/><stop offset="1" stop-color="#74B9FF"/></linearGradient>
              <linearGradient id="hl3" x1="20" y1="3" x2="26" y2="30"><stop stop-color="#00B894"/><stop offset="1" stop-color="#55EFC4"/></linearGradient>
              <linearGradient id="hl4" x1="29" y1="11" x2="31" y2="29"><stop stop-color="#A29BFE"/><stop offset="1" stop-color="#6C5CE7"/></linearGradient>
            </defs>
          </svg>
          <span class="logo-text">FlowBoard</span>
        </RouterLink>
      </div>

      <nav class="header-center">
        <RouterLink to="/" class="nav-link" exact-active-class="active">总览</RouterLink>
        <RouterLink to="/github" class="nav-link" active-class="active">代码动态</RouterLink>
        <RouterLink to="/feishu" class="nav-link" active-class="active">任务管理</RouterLink>
        <RouterLink to="/reports" class="nav-link" active-class="active">数据报表</RouterLink>
        <NDropdown trigger="hover" :options="moreMenuOptions" :on-select="handleMoreSelect">
          <button class="nav-link more-btn">更多 ▾</button>
        </NDropdown>
      </nav>

      <div class="header-right">
        <span class="time-display">
          <span class="status-dot"></span>
          {{ now || '--:--' }}
        </span>
        <button class="icon-btn refresh-btn" :class="{ spinning: false }" @click="doRefresh" title="刷新">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
        </button>
        <ThemeToggle />
        <NotificationBell />
        <NDropdown trigger="click" :options="userMenuOptions" :on-select="handleUserSelect" placement="bottom-end">
          <div class="user-trigger">
            <NAvatar size="small" class="user-avatar" :style="{ background: 'var(--primary-gradient)', cursor: 'pointer' }">
              <span style="font-size: 14px;font-weight:600">{{ authStore.avatarLetter }}</span>
            </NAvatar>
            <span class="user-name">{{ authStore.displayName }}</span>
          </div>
        </NDropdown>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 56px;
  border-bottom: 1px solid var(--border);
}
.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 24px;
}
.header-left {
  flex-shrink: 0;
}
.logo-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--text-primary);
}
.logo-svg {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.logo-text {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.header-center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.nav-link {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition);
  font-family: inherit;
}
.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}
.nav-link.active {
  color: var(--primary);
  background: rgba(108, 92, 231, 0.08);
}
.more-btn {
  font-family: inherit;
}
.header-right {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.time-display {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--text-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.time-display .status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--success);
  flex-shrink: 0;
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--bg-card);
  cursor: pointer;
  transition: all var(--transition);
  padding: 0;
}
.icon-btn:hover {
  border-color: var(--primary);
  box-shadow: 0 0 12px rgba(108, 92, 231, 0.15);
}
.icon-svg {
  width: 16px;
  height: 16px;
  color: var(--text-secondary);
}
.icon-btn:hover .icon-svg {
  color: var(--primary);
}
.refresh-btn:active .icon-svg {
  animation: spin 0.6s linear;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* User */
.user-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 10px;
  transition: all var(--transition);
}
.user-trigger:hover {
  background: var(--bg-hover);
}
.user-avatar {
  transition: transform var(--transition);
}
.user-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary);
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>