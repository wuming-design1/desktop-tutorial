<script setup lang="ts">
import { NPopover, NButton, NBadge } from 'naive-ui'
import { useNotificationStore } from '@/stores/notification'

const store = useNotificationStore()

const typeColors: Record<string, string> = {
  info: 'var(--info)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  error: 'var(--danger)',
}
</script>

<template>
  <NPopover trigger="click" placement="bottom-end" :width="320">
    <template #trigger>
      <button class="bell-btn">
        <NBadge :value="store.unreadCount" :max="99" :show="store.unreadCount > 0">
          <span class="bell-icon">🔔</span>
        </NBadge>
      </button>
    </template>
    <div class="notif-popover">
      <div class="notif-header">
        <span class="notif-title">通知</span>
        <NButton text size="tiny" @click="store.markAllRead()">全部已读</NButton>
      </div>
      <div class="notif-list">
        <div
          v-for="item in store.notifications"
          :key="item.id"
          class="notif-item"
          :class="{ unread: !item.read }"
          @click="store.markRead(item.id)"
        >
          <span class="notif-dot" :style="{ background: typeColors[item.type] }"></span>
          <div class="notif-body">
            <div class="notif-item-title">{{ item.title }}</div>
            <div class="notif-item-message">{{ item.message }}</div>
            <div class="notif-item-time">{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </NPopover>
</template>

<style scoped>
.bell-btn {
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
.bell-btn:hover {
  border-color: var(--primary);
  box-shadow: 0 0 12px rgba(108, 92, 231, 0.15);
}
.bell-icon {
  font-size: 1rem;
}
.notif-popover {
  padding: 4px 0;
}
.notif-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px 8px;
  border-bottom: 1px solid var(--border);
}
.notif-title {
  font-weight: 600;
  font-size: 0.9rem;
}
.notif-list {
  max-height: 300px;
  overflow-y: auto;
}
.notif-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  cursor: pointer;
  transition: background var(--transition);
  border-bottom: 1px solid var(--border-light);
}
.notif-item:hover {
  background: var(--bg-hover);
}
.notif-item.unread {
  background: rgba(108, 92, 231, 0.03);
}
.notif-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 5px;
  flex-shrink: 0;
}
.notif-body {
  flex: 1;
  min-width: 0;
}
.notif-item-title {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary);
}
.notif-item-message {
  font-size: 0.78rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.notif-item-time {
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-top: 2px;
}
</style>