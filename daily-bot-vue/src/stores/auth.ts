import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, UserSettings } from '@/api/types'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const user = ref<User | null>(null)
  const isLoading = ref(false)

  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  const displayName = computed(() => user.value?.username || '用户')
  const avatarLetter = computed(() => (user.value?.username || 'U').charAt(0).toUpperCase())

  function setAuth(authToken: string, authUser: User) {
    token.value = authToken
    user.value = authUser
  }

  function clearAuth() {
    token.value = null
    user.value = null
    // 清除所有用户相关数据（凭证和汇总）
    const keysToRemove = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && (key.startsWith('wfbot_creds_') || key.startsWith('wfbot_summary_') || key === 'wfbot_data_mode')) {
        keysToRemove.push(key)
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key))
  }

  function updateUser(updated: Partial<User>) {
    if (user.value) {
      user.value = { ...user.value, ...updated }
    }
  }

  function updateSettings(settings: Partial<UserSettings>) {
    if (user.value) {
      user.value.settings = { ...user.value.settings, ...settings }
    }
  }

  async function refreshToken(): Promise<boolean> {
    try {
      if (!token.value) return false
      const { refreshToken: doRefresh } = await import('@/api/auth')
      const result = await doRefresh(token.value)
      if (result) {
        token.value = result.token
        return true
      }
    } catch {
      clearAuth()
    }
    return false
  }

  return {
    token, user, isLoading, isAuthenticated, isAdmin, displayName, avatarLetter,
    setAuth, clearAuth, updateUser, updateSettings, refreshToken
  }
})