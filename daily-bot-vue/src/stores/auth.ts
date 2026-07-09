import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, UserSettings } from '@/api/types'

const TOKEN_KEY = 'wfbot_auth_token'
const USER_KEY = 'wfbot_auth_user'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem(TOKEN_KEY))
  const user = ref<User | null>(JSON.parse(localStorage.getItem(USER_KEY) || 'null'))
  const isLoading = ref(false)

  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  const displayName = computed(() => user.value?.username || '用户')
  const avatarLetter = computed(() => (user.value?.username || 'U').charAt(0).toUpperCase())

  function setAuth(authToken: string, authUser: User) {
    token.value = authToken
    user.value = authUser
    localStorage.setItem(TOKEN_KEY, authToken)
    localStorage.setItem(USER_KEY, JSON.stringify(authUser))
  }

  function clearAuth() {
    token.value = null
    user.value = null
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  function updateUser(updated: Partial<User>) {
    if (user.value) {
      user.value = { ...user.value, ...updated }
      localStorage.setItem(USER_KEY, JSON.stringify(user.value))
    }
  }

  function updateSettings(settings: Partial<UserSettings>) {
    if (user.value) {
      user.value.settings = { ...user.value.settings, ...settings }
      localStorage.setItem(USER_KEY, JSON.stringify(user.value))
    }
  }

  async function refreshToken(): Promise<boolean> {
    try {
      const { refreshToken: doRefresh } = await import('@/api/auth')
      const result = await doRefresh()
      if (result) {
        token.value = result.token
        localStorage.setItem(TOKEN_KEY, result.token)
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