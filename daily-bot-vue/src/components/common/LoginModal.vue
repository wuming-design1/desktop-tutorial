<script setup lang="ts">
import { ref } from 'vue'
import { NModal, NInput, NButton, NSpace, NDivider, NTabs, NTabPane, NTag, NCheckbox } from 'naive-ui'
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

interface PlatformSection {
  key: string
  label: string
  icon: string
  guide: string
  link: string
  linkLabel: string
  permissions: { label: string; desc: string; required: boolean }[]
  fields: { id: string; label: string; placeholder: string; type: string }[]
}

const platformSections: PlatformSection[] = [
  {
    key: 'github',
    label: 'GitHub',
    icon: '🐙',
    guide: '创建 Personal Access Token (Classic)，用于拉取仓库代码动态、提交记录和 PR 状态。',
    link: 'https://github.com/settings/tokens',
    linkLabel: '→ 前往 GitHub Token 页面',
    permissions: [
      { label: 'repo', desc: '访问仓库信息、代码、提交记录、PR、分支', required: true },
      { label: 'read:org', desc: '读取组织成员和团队信息', required: false },
      { label: 'read:user', desc: '读取用户个人资料', required: false },
      { label: 'workflow', desc: '读取 CI/CD Actions 工作流状态', required: false },
    ],
    fields: [
      { id: 'gh-token', label: 'Token', placeholder: 'ghp_xxxxxxxxxxxxxxxxxxxx', type: 'password' },
      { id: 'gh-repo', label: '仓库路径', placeholder: 'owner/repo 如: torvalds/linux', type: 'text' },
    ],
  },
  {
    key: 'feishu',
    label: '飞书',
    icon: '🐦',
    guide: '在飞书开放平台创建企业自建应用，获取凭证后还需在「权限管理」中开启以下权限。',
    link: 'https://open.feishu.cn/app',
    linkLabel: '→ 前往飞书开放平台',
    permissions: [
      { label: 'contact:user:readonly', desc: '获取用户信息（用于显示头像和名称）', required: false },
      { label: 'task:task:readonly', desc: '读取任务列表和任务详情', required: true },
      { label: 'task:task:write', desc: '完成/修改任务状态', required: false },
      { label: 'approval:instance:readonly', desc: '读取审批实例列表', required: false },
      { label: 'im:message:send', desc: '发送消息到群聊（Webhook 推送）', required: false },
    ],
    fields: [
      { id: 'fs-app-id', label: 'App ID', placeholder: 'cli_a7xxxxxxxxxxxx', type: 'text' },
      { id: 'fs-app-secret', label: 'App Secret', placeholder: 'xxxxxxxxxxxxxxxxxxxxxxxx', type: 'password' },
    ],
  },
  {
    key: 'weather',
    label: '天气',
    icon: '🌤️',
    guide: '输入城市名称即可获取实时天气，无需额外 API Key，由系统内置天气服务提供。',
    link: '',
    linkLabel: '',
    permissions: [],
    fields: [
      { id: 'w-city', label: '城市', placeholder: '上海 / 北京 / 深圳', type: 'text' },
    ],
  },
  {
    key: 'ai',
    label: 'AI 助手',
    icon: '🤖',
    guide: '接入 OpenAI 兼容的 AI 服务，用于智能摘要生成、代码审查建议等。',
    link: '',
    linkLabel: '',
    permissions: [
      { label: 'models:read', desc: '调用 Chat Completions 等模型接口', required: true },
    ],
    fields: [
      { id: 'ai-api-key', label: 'API Key', placeholder: 'sk-xxxxxxxxxxxxxxxxxxxxxxxx', type: 'password' },
      { id: 'ai-base-url', label: 'Base URL', placeholder: 'https://api.openai.com/v1', type: 'text' },
      { id: 'ai-model', label: '模型名称', placeholder: 'gpt-4o / deepseek-chat', type: 'text' },
    ],
  },
  {
    key: 'webhook',
    label: 'Webhook',
    icon: '🔗',
    guide: '在飞书群聊中添加自定义机器人，获取 Webhook 地址用于消息推送通知。',
    link: '',
    linkLabel: '',
    permissions: [
      { label: 'im:message:send', desc: '飞书机器人消息发送权限', required: true },
    ],
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
    title="🔑 管理凭证"
    style="width: 720px; max-width: 95vw;"
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
            {{ section.linkLabel }}
          </a>

          <!-- 权限清单 -->
          <div v-if="section.permissions.length > 0" class="permissions-box">
            <div class="permissions-title">📋 需要开启的权限</div>
            <div v-for="perm in section.permissions" :key="perm.label" class="permission-item">
              <div class="perm-header">
                <NTag :type="perm.required ? 'error' : 'info'" size="tiny">
                  {{ perm.required ? '必选' : '建议' }}
                </NTag>
                <code class="perm-code">{{ perm.label }}</code>
              </div>
              <span class="perm-desc">{{ perm.desc }}</span>
            </div>
          </div>

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
        <NButton type="primary" @click="handleSave">保存凭证</NButton>
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
  margin-bottom: 8px;
}

/* 权限清单 */
.permissions-box {
  background: var(--bg-input);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  margin-top: 12px;
  margin-bottom: 4px;
}
.permissions-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}
.permission-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-light);
}
.permission-item:last-child {
  border-bottom: none;
}
.perm-header {
  display: flex;
  align-items: center;
  gap: 8px;
}
.perm-code {
  font-size: 0.82rem;
  font-family: 'SF Mono', 'Consolas', monospace;
  color: var(--primary);
}
.perm-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
  padding-left: 4px;
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