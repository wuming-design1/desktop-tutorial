<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  NTabs,
  NTabPane,
  NInput,
  NButton,
  NSpace,
  NForm,
  NFormItem,
  useMessage,
} from 'naive-ui'
import axios from 'axios'

const props = defineProps<{
  token: string
  repo: string
}>()

const message = useMessage()

// ── Tab state ──
const activeTab = ref('remote')

// ── Remote file hosting ──
const remotePath = ref('')
const remoteContent = ref('')
const remoteCommitMsg = ref('')
const remoteBranch = ref('main')

// ── Local file upload ──
const localPath = ref('')
const localCommitMsg = ref('')
const localBranch = ref('main')
const dragOver = ref(false)
const uploadedFile = ref<File | null>(null)
const uploadedFileName = ref('')

// ── Common ──
const submitting = ref(false)
const resultMessage = ref<{ type: 'success' | 'error'; text: string } | null>(null)

const repoParts = computed(() => {
  const [owner, repo] = props.repo.split('/')
  return { owner: owner?.trim(), repo: repo?.trim() }
})

const apiBase = computed(() => {
  const { owner, repo } = repoParts.value
  return `https://api.github.com/repos/${owner}/${repo}/contents`
})

// ── Remote submit ──
async function submitRemote() {
  if (!remotePath.value || !remoteContent.value || !remoteCommitMsg.value) {
    message.warning('请填写完整信息')
    return
  }
  resultMessage.value = null
  submitting.value = true
  try {
    const content = btoa(unescape(encodeURIComponent(remoteContent.value)))
    const url = `${apiBase.value}/${remotePath.value.replace(/^\//, '')}`
    const body: Record<string, string> = {
      message: remoteCommitMsg.value,
      content,
      branch: remoteBranch.value || 'main',
    }
    // Try to get sha for existing file
    try {
      const getRes = await axios.get(url, {
        headers: { Authorization: `Bearer ${props.token}` },
        params: { ref: remoteBranch.value || 'main' },
      })
      if (getRes.data?.sha) body.sha = getRes.data.sha
    } catch { /* file doesn't exist, create new */ }

    const res = await axios.put(url, body, {
      headers: { Authorization: `Bearer ${props.token}` },
    })
    resultMessage.value = {
      type: 'success',
      text: `文件已提交: ${res.data.content?.path ?? remotePath.value}`,
    }
    remotePath.value = ''
    remoteContent.value = ''
    remoteCommitMsg.value = ''
  } catch (e: any) {
    resultMessage.value = {
      type: 'error',
      text: e?.response?.data?.message ?? e?.message ?? '提交失败',
    }
  } finally {
    submitting.value = false
  }
}

// ── Local file upload ──
function onDragOver(e: DragEvent) {
  e.preventDefault()
  dragOver.value = true
}

function onDragLeave() {
  dragOver.value = false
}

function onDrop(e: DragEvent) {
  e.preventDefault()
  dragOver.value = false
  const file = e.dataTransfer?.files?.[0]
  if (file) {
    uploadedFile.value = file
    uploadedFileName.value = file.name
    if (!localPath.value) {
      localPath.value = file.name
    }
  }
}

function onFileInput(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    uploadedFile.value = file
    uploadedFileName.value = file.name
    if (!localPath.value) {
      localPath.value = file.name
    }
  }
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      // Remove data:...;base64, prefix
      const base64 = result.split(',')[1]
      resolve(base64)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

async function submitLocal() {
  if (!uploadedFile.value || !localPath.value || !localCommitMsg.value) {
    message.warning('请上传文件并填写完整信息')
    return
  }
  resultMessage.value = null
  submitting.value = true
  try {
    const content = await readFileAsBase64(uploadedFile.value)
    const url = `${apiBase.value}/${localPath.value.replace(/^\//, '')}`
    const body: Record<string, string> = {
      message: localCommitMsg.value,
      content,
      branch: localBranch.value || 'main',
    }
    try {
      const getRes = await axios.get(url, {
        headers: { Authorization: `Bearer ${props.token}` },
        params: { ref: localBranch.value || 'main' },
      })
      if (getRes.data?.sha) body.sha = getRes.data.sha
    } catch { /* file doesn't exist */ }

    const res = await axios.put(url, body, {
      headers: { Authorization: `Bearer ${props.token}` },
    })
    resultMessage.value = {
      type: 'success',
      text: `文件已提交: ${res.data.content?.path ?? localPath.value}`,
    }
    uploadedFile.value = null
    uploadedFileName.value = ''
    localPath.value = ''
    localCommitMsg.value = ''
  } catch (e: any) {
    resultMessage.value = {
      type: 'error',
      text: e?.response?.data?.message ?? e?.message ?? '提交失败',
    }
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="commit-panel">
    <NTabs v-model:value="activeTab" type="segment" animated>
      <NTabPane name="remote" tab="远程文件托管">
        <div class="tab-content">
          <NForm label-placement="top" size="medium">
            <NFormItem label="文件路径" required>
              <NInput
                v-model:value="remotePath"
                placeholder="例如: src/index.ts 或 docs/readme.md"
              />
            </NFormItem>
            <NFormItem label="文件内容" required>
              <NInput
                v-model:value="remoteContent"
                type="textarea"
                placeholder="输入文件内容..."
                :autosize="{ minRows: 6, maxRows: 16 }"
              />
            </NFormItem>
            <NFormItem label="提交信息" required>
              <NInput
                v-model:value="remoteCommitMsg"
                placeholder="例如: feat: 添加新功能"
              />
            </NFormItem>
            <NFormItem label="分支">
              <NInput v-model:value="remoteBranch" placeholder="main" />
            </NFormItem>
          </NForm>

          <div class="panel-actions">
            <NButton
              type="primary"
              :loading="submitting"
              :disabled="submitting"
              @click="submitRemote"
            >
              提交文件
            </NButton>
          </div>
        </div>
      </NTabPane>

      <NTabPane name="local" tab="本地文件上传">
        <div class="tab-content">
          <div
            class="drop-zone"
            :class="{ 'drag-over': dragOver }"
            @dragover="onDragOver"
            @dragleave="onDragLeave"
            @drop="onDrop"
          >
            <div class="drop-zone-content">
              <span class="drop-icon">📁</span>
              <p v-if="uploadedFileName" class="file-name">{{ uploadedFileName }}</p>
              <p v-else>拖放文件到此处，或点击选择文件</p>
              <input
                type="file"
                class="file-input"
                @change="onFileInput"
              />
            </div>
          </div>

          <NForm label-placement="top" size="medium" style="margin-top: 16px;">
            <NFormItem label="目标路径" required>
              <NInput
                v-model:value="localPath"
                placeholder="例如: assets/images/photo.png"
              />
            </NFormItem>
            <NFormItem label="提交信息" required>
              <NInput
                v-model:value="localCommitMsg"
                placeholder="例如: docs: 上传文档"
              />
            </NFormItem>
            <NFormItem label="分支">
              <NInput v-model:value="localBranch" placeholder="main" />
            </NFormItem>
          </NForm>

          <div class="panel-actions">
            <NButton
              type="primary"
              :loading="submitting"
              :disabled="submitting"
              @click="submitLocal"
            >
              提交文件
            </NButton>
          </div>
        </div>
      </NTabPane>
    </NTabs>

    <div
      v-if="resultMessage"
      class="result-message"
      :class="resultMessage.type"
    >
      <span v-if="resultMessage.type === 'success'">✅</span>
      <span v-else>❌</span>
      {{ resultMessage.text }}
    </div>
  </div>
</template>

<style scoped>
.commit-panel {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}

.tab-content {
  padding-top: 16px;
}

.drop-zone {
  border: 2px dashed var(--border);
  border-radius: var(--radius-sm);
  padding: 40px 20px;
  text-align: center;
  transition: all var(--transition);
  cursor: pointer;
  position: relative;
}

.drop-zone:hover,
.drop-zone.drag-over {
  border-color: var(--primary);
  background: rgba(108, 92, 231, 0.04);
}

.drop-zone-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.drop-icon {
  font-size: 2rem;
}

.file-name {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.95rem;
}

.file-input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.panel-actions {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
}

.result-message {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: fadeIn 0.3s ease-out;
}

.result-message.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22C55E;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.result-message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #EF4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}
</style>