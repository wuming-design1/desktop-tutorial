import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { apiGetCredentials, apiSaveCredentials } from '@/api/backend'

export const PLATFORM_KEYS: Record<string, { ids: string[]; envKeys: string[] }> = {
  github: { ids: ['gh-token','gh-repo'], envKeys: ['GITHUB_TOKEN','GITHUB_REPO'] },
  feishu: { ids: ['fs-app-id','fs-app-secret'], envKeys: ['FEISHU_APP_ID','FEISHU_APP_SECRET'] },
  weather: { ids: ['w-city'], envKeys: ['WEATHER_CITY'] },
  ai: { ids: ['ai-api-key','ai-base-url','ai-model'], envKeys: ['AI_API_KEY','AI_BASE_URL','AI_MODEL'] },
  webhook: { ids: ['fs-webhook'], envKeys: ['FEISHU_WEBHOOK_URL'] },
}

export const useCredStore = defineStore('cred', () => {
  const creds = ref<Record<string,string>>({})
  const showLogin = ref(false)
  const hasAnyCredential = computed(() => Object.values(creds.value).some(v => v && v.trim()))

  // 从后端加载凭证
  async function reload() {
    try {
      const result = await apiGetCredentials()
      creds.value = result.credentials || {}
      showLogin.value = !Object.values(creds.value).some(v => v)
    } catch {
      creds.value = {}
      showLogin.value = true
    }
  }

  function saveCreds(c: Record<string, string>) {
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

  async function saveFromForm(fd: Record<string, string>) {
    const nc: Record<string, string> = {}
    for (const [platform, cfg] of Object.entries(PLATFORM_KEYS)) {
      const platformCreds: Record<string, string> = {}
      cfg.ids.forEach((id, i) => {
        if (fd[id] && fd[id].trim()) {
          platformCreds[cfg.envKeys[i]] = fd[id].trim()
          nc[cfg.envKeys[i]] = fd[id].trim()
        }
      })
      // 保存到后端
      if (Object.keys(platformCreds).length > 0) {
        try {
          await apiSaveCredentials(platform, platformCreds)
        } catch {
          // 后端保存失败，暂存到本地
        }
      }
    }
    saveCreds(nc)
    showLogin.value = false
  }

  return {
    creds, showLogin, hasAnyCredential, platformStatus,
    saveCreds, getCred, isConnected, saveFromForm, reload,
  }
})