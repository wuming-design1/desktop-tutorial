<script setup lang="ts">
import { ref, reactive } from 'vue'
import { NCard, NButton, NSelect, NSwitch, NInput, useMessage } from 'naive-ui'
import { useAppStore } from '@/stores/app'
import { useCredStore } from '@/stores/credStore'

const appStore = useAppStore()
const credStore = useCredStore()
const message = useMessage()

// Theme
const theme = ref<'light' | 'dark' | 'system'>(
  localStorage.getItem('wfbot_theme') === 'dark' ? 'dark' : 'light'
)
const themeOptions = [
  { label: '浅色', value: 'light' },
  { label: '深色', value: 'dark' },
  { label: '跟随系统', value: 'system' },
]

// Refresh interval
const refreshInterval = ref(Number(localStorage.getItem('wfbot_refresh') || '30'))
const refreshOptions = [
  { label: '15 分钟', value: 15 },
  { label: '30 分钟', value: 30 },
  { label: '60 分钟', value: 60 },
  { label: '120 分钟', value: 120 },
]

// Toggles
const cacheEnabled = ref(localStorage.getItem('wfbot_cache') !== 'false')
const notificationsEnabled = ref(localStorage.getItem('wfbot_notify') !== 'false')
const soundEnabled = ref(localStorage.getItem('wfbot_sound') === 'true')

// API tokens
const formData = reactive<Record<string, string>>({
  'gh-token': credStore.getCred('GITHUB_TOKEN') || '',
  'gh-repo': credStore.getCred('GITHUB_REPO') || '',
  'fs-app-id': credStore.getCred('FEISHU_APP_ID') || '',
  'fs-app-secret': credStore.getCred('FEISHU_APP_SECRET') || '',
  'w-city': credStore.getCred('WEATHER_CITY') || '',
  'ai-api-key': credStore.getCred('AI_API_KEY') || '',
  'ai-base-url': credStore.getCred('AI_BASE_URL') || '',
  'ai-model': credStore.getCred('AI_MODEL') || '',
  'fs-webhook': credStore.getCred('FEISHU_WEBHOOK_URL') || '',
})

// Card layout toggles
const cardLayout = reactive({
  github: JSON.parse(localStorage.getItem('wfbot_card_github') || 'true'),
  feishu: JSON.parse(localStorage.getItem('wfbot_card_feishu') || 'true'),
  weather: JSON.parse(localStorage.getItem('wfbot_card_weather') || 'true'),
  ai: JSON.parse(localStorage.getItem('wfbot_card_ai') || 'true'),
  push: JSON.parse(localStorage.getItem('wfbot_card_push') || 'true'),
})

const cardLabels: Record<string, string> = {
  github: 'GitHub 代码动态',
  feishu: '飞书任务管理',
  weather: '天气预报',
  ai: 'AI 助手',
  push: '消息推送',
}

function applyTheme(val: 'light' | 'dark' | 'system') {
  theme.value = val
  if (val === 'dark') {
    localStorage.setItem('wfbot_theme', 'dark')
    document.documentElement.classList.add('dark')
  } else if (val === 'light') {
    localStorage.setItem('wfbot_theme', 'light')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('wfbot_theme', 'system')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', prefersDark)
  }
  appStore.isDark = val === 'dark' || (val === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
}

function saveSettings() {
  localStorage.setItem('wfbot_refresh', String(refreshInterval.value))
  localStorage.setItem('wfbot_cache', String(cacheEnabled.value))
  localStorage.setItem('wfbot_notify', String(notificationsEnabled.value))
  localStorage.setItem('wfbot_sound', String(soundEnabled.value))

  Object.entries(cardLayout).forEach(([k, v]) => {
    localStorage.setItem(`wfbot_card_${k}`, String(v))
  })

  credStore.saveFromForm(formData)
  applyTheme(theme.value)
  message.success('设置已保存')
}

function resetSettings() {
  theme.value = 'light'
  refreshInterval.value = 30
  cacheEnabled.value = true
  notificationsEnabled.value = true
  soundEnabled.value = false
  Object.keys(cardLayout).forEach(k => (cardLayout as any)[k] = true)
  Object.keys(formData).forEach(k => (formData as any)[k] = '')
  message.info('已重置为默认设置')
}
</script>

<template>
  <div class="settings-view">
    <h2 class="page-title">⚙️ 系统设置</h2>

    <!-- Theme -->
    <NCard title="🎨 主题设置" class="settings-card">
      <div class="setting-row">
        <span class="setting-label">外观主题</span>
        <NSelect
          v-model:value="theme"
          :options="themeOptions"
          size="small"
          style="width: 140px"
          @update:value="applyTheme"
        />
      </div>
    </NCard>

    <!-- Refresh -->
    <NCard title="🔄 数据刷新" class="settings-card">
      <div class="setting-row">
        <span class="setting-label">自动刷新间隔</span>
        <NSelect
          v-model:value="refreshInterval"
          :options="refreshOptions"
          size="small"
          style="width: 140px"
        />
      </div>
    </NCard>

    <!-- Toggles -->
    <NCard title="🔧 功能开关" class="settings-card">
      <div class="toggle-list">
        <div class="toggle-row">
          <div class="toggle-info">
            <span class="toggle-label">本地缓存</span>
            <span class="toggle-desc">启用本地数据缓存以加速加载</span>
          </div>
          <NSwitch v-model:value="cacheEnabled" />
        </div>
        <div class="toggle-row">
          <div class="toggle-info">
            <span class="toggle-label">桌面通知</span>
            <span class="toggle-desc">接收重要事件推送通知</span>
          </div>
          <NSwitch v-model:value="notificationsEnabled" />
        </div>
        <div class="toggle-row">
          <div class="toggle-info">
            <span class="toggle-label">提示音效</span>
            <span class="toggle-desc">操作完成时播放提示音</span>
          </div>
          <NSwitch v-model:value="soundEnabled" />
        </div>
      </div>
    </NCard>

    <!-- API Config -->
    <NCard title="🔑 API 配置" class="settings-card">
      <div class="api-section">
        <h4 class="api-section-title">GitHub</h4>
        <div class="api-row">
          <NInput v-model:value="formData['gh-token']" type="password" placeholder="GitHub Token" show-password-on="click" />
          <NInput v-model:value="formData['gh-repo']" placeholder="仓库 (owner/repo)" />
        </div>
      </div>
      <div class="api-section">
        <h4 class="api-section-title">飞书</h4>
        <div class="api-row">
          <NInput v-model:value="formData['fs-app-id']" placeholder="App ID" />
          <NInput v-model:value="formData['fs-app-secret']" type="password" placeholder="App Secret" show-password-on="click" />
        </div>
      </div>
      <div class="api-section">
        <h4 class="api-section-title">天气</h4>
        <div class="api-row">
          <NInput v-model:value="formData['w-city']" placeholder="城市名称 (如 Beijing)" />
        </div>
      </div>
      <div class="api-section">
        <h4 class="api-section-title">AI</h4>
        <div class="api-row">
          <NInput v-model:value="formData['ai-api-key']" type="password" placeholder="API Key" show-password-on="click" />
          <NInput v-model:value="formData['ai-base-url']" placeholder="Base URL (如 https://api.openai.com/v1)" />
          <NInput v-model:value="formData['ai-model']" placeholder="模型名称 (如 gpt-4)" />
        </div>
      </div>
      <div class="api-section">
        <h4 class="api-section-title">Webhook</h4>
        <div class="api-row">
          <NInput v-model:value="formData['fs-webhook']" placeholder="飞书 Webhook URL" />
        </div>
      </div>
    </NCard>

    <!-- Card Layout -->
    <NCard title="📋 首页卡片布局" class="settings-card">
      <div class="toggle-list">
        <div v-for="(_enabled, key) in cardLayout" :key="key" class="toggle-row">
          <span class="toggle-label">{{ cardLabels[key] }}</span>
          <NSwitch v-model:value="(cardLayout as any)[key]" />
        </div>
      </div>
    </NCard>

    <!-- Actions -->
    <div class="action-row">
      <NButton type="primary" size="large" @click="saveSettings">
        💾 保存设置
      </NButton>
      <NButton size="large" @click="resetSettings">
        🔄 重置默认
      </NButton>
    </div>
  </div>
</template>

<style scoped>
.settings-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 40px;
}
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  padding-top: 20px;
}
.settings-card {
  border: 1px solid var(--border) !important;
}

.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.setting-label {
  font-size: 0.9rem;
  color: var(--text-primary);
}

/* Toggles */
.toggle-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggle-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.toggle-label {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
}
.toggle-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* API */
.api-section {
  margin-bottom: 16px;
}
.api-section:last-child {
  margin-bottom: 0;
}
.api-section-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border-light);
}
.api-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Actions */
.action-row {
  display: flex;
  gap: 14px;
  justify-content: flex-end;
  margin-top: 8px;
}
</style>