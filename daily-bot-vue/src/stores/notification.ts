import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface NotificationItem {
  id: number
  title: string
  message: string
  time: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
}

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<NotificationItem[]>([
    { id: 1, title: '代码推送', message: 'GitHub 仓库 main 分支有新的提交', time: '5 分钟前', type: 'info', read: false },
    { id: 2, title: '任务完成', message: '飞书任务 "日报生成" 已自动完成', time: '30 分钟前', type: 'success', read: false },
    { id: 3, title: '天气预警', message: '上海今日高温黄色预警，请注意防暑', time: '2 小时前', type: 'warning', read: true },
  ])

  const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

  const markAllRead = () => {
    notifications.value.forEach(n => { n.read = true })
  }

  const markRead = (id: number) => {
    const n = notifications.value.find(n => n.id === id)
    if (n) n.read = true
  }

  return { notifications, unreadCount, markAllRead, markRead }
})