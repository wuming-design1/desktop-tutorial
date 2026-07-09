<script setup lang="ts">
import { ref } from 'vue'
import { NModal, NInput, NButton, NSpace, NDivider, NTabs, NTabPane } from 'naive-ui'
import { useCredStore, PLATFORM_KEYS } from '@/stores/credStore'

const credStore = useCredStore()
const visible = ref(false)

const formData = ref<Record<string, string>>({
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

const platformSections = [
  {
    key: 'github',
    label: 'GitHub',
    icon: '🐙',
    guide: '前往 GitHub Settings → Developer settings → Personal access tokens 生成 Token，权限勾选 repo。',
    link: 'https://github.com/settings/tokens',
    fields: [
      { id: 'gh-token', label: 'Token', placeholder: 'ghp_xxxxxxxxxxxx', type: 'password' },
      { id: 'gh-repo', label: '仓库', placeholder: 'owner/repo', type: 'text' },
    ],
  },
  {
    key: 'feishu',
    label: '飞书',
    icon: '🐦',
    guide: '进入飞书开放平台 → 创建应用 → 凭证与基础信息 获取 App ID 和 App Secret。',
    link: 'https://open.feishu.cn/app',
    fields: [
      { id: 'fs-app-id', label: 'App ID', placeholder: 'cli_xxxxxxxxxxxx', type: 'text' },
      { id: 'fs-app-secret', label: 'App Secret', placeholder: 'xxxxxxxxxxxx', type: 'password' },
    ],
  },
  {
    key: 'weather',
    label: '天气',
    icon: '🌤️',
    guide: '输入你想要获取天气的城市名称，支持中文城市名。',
    link: '',
    fields: [
      { id: 'w-city', label: '城市', placeholder: '上海', type: 'text' },
    ],
  },
  {
    key: 'ai',
    label: 'AI',
    icon: '🤖',
    guide: '填写 AI API 的 Key、Base URL 和模型名称（如 gpt-4o、deepseek-chat 等）。',
    link: '',
    fields: [
      { id: 'ai-api-key', label: 'API Key', placeholder: 'sk-xxxxxxxxxxxx', type: 'password' },
      { id: 'ai-base-url', label: 'Base URL', placeholder: 'https://api.openai.com/v1', type: 'text' },
      { id: 'ai-model', label: '模型', placeholder: 'gpt-4o', type: 'text' },
    ],
  },
  {
    key: 'webhook',
    label: 'Webhook',
    icon: '🔗',
    guide: '进入飞书群聊 → 设置 → 群机器人 → 添加机器人 → 自定义机器人 → 复制 Webhook 地址。',
    link: '',
    fields: [
      { id: 'fs-webhook', label: 'Webhook URL', placeholder: 'https://open.feishu.cn/open-apis/bot/v2/hook/xxxxx', type: 'text' },
    ],
  },
]

const activeTab = ref('github')

const open = () => {
  visible.value = true
}

const handleSave = () => {
  credStore.saveFromForm(formData.value)
  visible.value = false
}

defineExpose({ open, visible })
</script>

<template>
  <NModal
    v-model:show="visible"
    :mask-closable="false"
    preset="card"
    title="管理凭证"
    style="width: 600px; max-width: 90vw;"
    :bordered="false"
  >
    <NTabs v-model:value="activeTab" type="line" animated>
      <NTabPane v-for="section in platformSections" :key="section.key" :name="section.key" :tab="section.label">
        <div class="platform-section">
          <div class="platform-header">
            <span class="platform-icon">{{ section.icon }}</span>
            <span class="platform-name">{{ section.label }}</span>
          </div>
          <p class="guide-text">{{ section.guide }}</p>
          <a v-if="section.link" :href="section.link" target="_blank" class="guide-link">
            → 前往配置页面
          </a>
          <NDivider />
          <NSpace vertical :size="16">
            <div v-for="field in section.fields" :key="field.id" class="form-field">
              <label class="field-label">{{ field.label }}</label>
              <NInput
                v-model:value="formData[field.id]"
                :placeholder="field.placeholder"
                :type="field.type === 'password' ? 'password' : 'text'"
                show-password-on="click"
                clearable
              />
            </div>
          </NSpace>
        </div>
      </NTabPane>
    </NTabs>
    <template #footer>
      <div class="modal-footer">
        <NButton @click="visible = false">取消</NButton>
        <NButton type="primary" @click="handleSave">保存</NButton>
      </div>
    </template>
  </NModal>
</template>

<style scoped>
.platform-section {
  padding: 4px 0;
}
.platform-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.platform-icon {
  font-size: 1.2rem;
}
.platform-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}
.guide-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 4px;
}
.guide-link {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--primary);
  margin-bottom: 4px;
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>