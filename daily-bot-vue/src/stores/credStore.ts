import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

export const PLATFORM_KEYS: Record<string, { ids: string[]; envKeys: string[] }> = {
  github: { ids: ['gh-token','gh-repo'], envKeys: ['GITHUB_TOKEN','GITHUB_REPO'] },
  feishu: { ids: ['fs-app-id','fs-app-secret'], envKeys: ['FEISHU_APP_ID','FEISHU_APP_SECRET'] },
  weather: { ids: ['w-city'], envKeys: ['WEATHER_CITY'] },
  ai: { ids: ['ai-api-key','ai-base-url','ai-model'], envKeys: ['AI_API_KEY','AI_BASE_URL','AI_MODEL'] },
  webhook: { ids: ['fs-webhook'], envKeys: ['FEISHU_WEBHOOK_URL'] },
}

function getStorageKey(): string {
  const authStore = useAuthStore()
  const uid = authStore.user?.id || 'anonymous'
  return `wfbot_creds_${uid}`
}

export const useCredStore = defineStore('cred', () => {
  const storageKey = computed(() => getStorageKey())
  const creds = ref<Record<string,string>>(JSON.parse(localStorage.getItem(storageKey.value) || '{}'))

  const showLogin = ref(!Object.values(creds.value).some(v => v))
  const hasAnyCredential = computed(() => Object.values(creds.value).some(v => v && v.trim()))

  // 重新加载当前用户的凭证（切换用户后调用）
  function reload() {
    const key = storageKey.value
    const raw = localStorage.getItem(key)
    creds.value = raw ? JSON.parse(raw) : {}
    showLogin.value = !Object.values(creds.value).some(v => v)
  }

  function saveCreds(c: Record<string, string>) {
    const key = storageKey.value
    localStorage.setItem(key, JSON.stringify(c))
    creds.value = c
  }

  const getCred = (k: string) => creds.value[k] || ''

  const isConnected = (p: string) =>
    p === 'weather'
      ? true
      : PLATFORM_KEYS[p].envKeys.every(k => creds.value[k] && creds.value[k].trim())

  const platformStatus = computed(() => {
    const platforms = ['github', 'feishu', 'weather', 'ai', 'webhook']
    const labels: Record<string, string> = {
      github: 'GitHub', feishu: '飞书', weather: '天气', ai: 'AI', webhook: 'Webhook',
    }
    return platforms.map(p => ({ key: p, label: labels[p], connected: isConnected(p) }))
  })

  const saveFromForm = (fd: Record<string, string>) => {
    const nc: Record<string, string> = {}
    Object.entries(PLATFORM_KEYS).forEach(([, cfg]) =>
      cfg.ids.forEach((id, i) => {
        if (fd[id] && fd[id].trim()) nc[cfg.envKeys[i]] = fd[id].trim()
      })
    )
    saveCreds(nc)
    showLogin.value = false
  }

  return {
    creds, showLogin, hasAnyCredential, platformStatus,
    saveCreds, getCred, isConnected, saveFromForm, reload,
  }
})