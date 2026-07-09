<script setup lang="ts">
import { inject } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { NDropdown, NAvatar, NButton } from 'naive-ui'
import type { DropdownOption } from 'naive-ui'
import { useAppStore } from '@/stores/app'
import ThemeToggle from '@/components/common/ThemeToggle.vue'
import NotificationBell from '@/components/common/NotificationBell.vue'

const router = useRouter()
const app = useAppStore()
const openLogin = inject<() => void>('openLogin', () => {})

const moreMenuOptions: DropdownOption[] = [
  { label: '天气', key: '/weather' },
  { label: 'AI', key: '/ai' },
  { label: '推送', key: '/push' },
  { type: 'divider', key: 'd1' },
  { label: '系统设置', key: '/settings' },
]

const userMenuOptions: DropdownOption[] = [
  { label: '管理凭证', key: 'credentials' },
  { label: '系统设置', key: 'settings' },
  { label: '切换主题', key: 'theme' },
  { type: 'divider', key: 'd2' },
  { label: '退出登录', key: 'logout' },
]

const handleMoreSelect = (key: string) => {
  router.push(key)
}

const handleUserSelect = (key: string) => {
  if (key === 'credentials') {
    openLogin()
  } else if (key === 'settings') {
    router.push('/settings')
  } else if (key === 'theme') {
    app.toggleTheme()
  } else if (key === 'logout') {
    // logout logic placeholder
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
          <span class="logo-icon">🍌</span>
          <span class="logo-text">WorkflowBot</span>
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
          {{ app.lastUpdateTime || '--:--' }}
        </span>
        <button class="icon-btn refresh-btn" :class="{ spinning: false }" @click="doRefresh" title="刷新">
          <span class="refresh-icon">🔄</span>
        </button>
        <ThemeToggle />
        <NotificationBell />
        <NDropdown trigger="click" :options="userMenuOptions" :on-select="handleUserSelect" placement="bottom-end">
          <NAvatar size="small" class="user-avatar" :style="{ background: 'var(--primary-gradient)', cursor: 'pointer' }">
            <span style="font-size: 14px;">👤</span>
          </NAvatar>
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
.logo-icon {
  font-size: 1.3rem;
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
  font-size: 0.9rem;
}
.icon-btn:hover {
  border-color: var(--primary);
  box-shadow: 0 0 12px rgba(108, 92, 231, 0.15);
}
.refresh-btn:active .refresh-icon {
  animation: spin 0.6s linear;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.user-avatar {
  transition: transform var(--transition);
}
.user-avatar:hover {
  transform: scale(1.05);
}
</style>