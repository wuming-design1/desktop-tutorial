import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, UserSettings } from '@/api/types'
import { apiRefreshToken } from '@/api/backend'

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
      const result = await apiRefreshToken()
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