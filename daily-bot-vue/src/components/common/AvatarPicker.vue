<script setup lang="ts">
import { ref, computed } from 'vue'
import { NButton, NModal, NCard, useMessage } from 'naive-ui'
import { apiUploadAvatar, apiSetDefaultAvatar } from '@/api/backend'
import { useAuthStore } from '@/stores/auth'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'update:show', val: boolean): void
  (e: 'updated', avatar: string): void
}>()

const authStore = useAuthStore()
const message = useMessage()

const uploading = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

// 8 个默认 SVG 头像
const defaultAvatars = [
  { id: 'av1', label: '紫色', colors: ['#6C5CE7', '#A29BFE'] },
  { id: 'av2', label: '绿色', colors: ['#00B894', '#55EFC4'] },
  { id: 'av3', label: '橙色', colors: ['#E17055', '#FAB1A0'] },
  { id: 'av4', label: '蓝色', colors: ['#0984E3', '#74B9FF'] },
  { id: 'av5', label: '红色', colors: ['#D63031', '#FF7675'] },
  { id: 'av6', label: '青色', colors: ['#00CEC9', '#81ECEC'] },
  { id: 'av7', label: '金色', colors: ['#FDCB6E', '#FFEAA7'] },
  { id: 'av8', label: '粉色', colors: ['#E84393', '#FD79A8'] },
]

const currentAvatar = computed(() => authStore.user?.avatar || '')

function isDefaultAvatar(id: string) {
  return currentAvatar.value === id
}

function isUploadedAvatar() {
  return currentAvatar.value && currentAvatar.value.startsWith('/avatars/')
}

async function selectDefaultAvatar(id: string) {
  try {
    await apiSetDefaultAvatar(id)
    authStore.updateUser({ avatar: id })
    emit('updated', id)
    message.success('头像已更新')
  } catch {
    message.error('设置失败')
  }
}

function triggerFileInput() {
  fileInput.value?.click()
}

async function handleFileUpload(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  // 检查文件类型
  if (!file.type.startsWith('image/')) {
    message.warning('请选择图片文件')
    return
  }

  uploading.value = true
  try {
    const formData = new FormData()
    formData.append('avatar', file)
    const result = await apiUploadAvatar(formData)
    authStore.updateUser({ avatar: result.avatar })
    emit('updated', result.avatar)
    message.success('头像上传成功')
  } catch {
    message.error('上传失败')
  } finally {
    uploading.value = false
    input.value = ''
  }
}

function close() {
  emit('update:show', false)
}
</script>

<template>
  <NModal :show="show" :on-update:show="(val: boolean) => emit('update:show', val)" :mask-closable="true">
    <NCard title="选择头像" :bordered="false" style="width: 420px; max-width: 90vw;" role="dialog">
      <template #header-extra>
        <NButton text size="small" @click="close">✕</NButton>
      </template>

      <div class="avatar-picker">
        <!-- 当前头像预览 -->
        <div class="current-preview">
          <div class="avatar-large">
            <!-- 上传的图片 -->
            <img v-if="isUploadedAvatar()" :src="currentAvatar" class="avatar-img" alt="头像" />
            <!-- 默认 SVG -->
            <svg v-else-if="currentAvatar" viewBox="0 0 80 80" class="avatar-svg">
              <defs>
                <linearGradient :id="'grad-' + currentAvatar" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" :stop-color="defaultAvatars.find(a => a.id === currentAvatar)?.colors?.[0] || '#6C5CE7'" />
                  <stop offset="100%" :stop-color="defaultAvatars.find(a => a.id === currentAvatar)?.colors?.[1] || '#A29BFE'" />
                </linearGradient>
              </defs>
              <circle cx="40" cy="40" r="40" :fill="`url(#grad-${currentAvatar})`" />
              <text x="40" y="48" text-anchor="middle" fill="white" font-size="32" font-weight="bold" font-family="sans-serif">{{ authStore.avatarLetter }}</text>
            </svg>
            <!-- 无头像 -->
            <svg v-else viewBox="0 0 80 80" class="avatar-svg">
              <circle cx="40" cy="40" r="40" fill="#6C5CE7" />
              <text x="40" y="48" text-anchor="middle" fill="white" font-size="32" font-weight="bold" font-family="sans-serif">{{ authStore.avatarLetter }}</text>
            </svg>
          </div>
          <span class="preview-label">当前头像</span>
        </div>

        <div class="divider"></div>

        <!-- 默认头像网格 -->
        <div class="section-title">默认头像</div>
        <div class="avatar-grid">
          <button
            v-for="av in defaultAvatars"
            :key="av.id"
            :class="['avatar-option', { active: isDefaultAvatar(av.id) }]"
            @click="selectDefaultAvatar(av.id)"
            :title="av.label"
          >
            <svg viewBox="0 0 64 64" width="56" height="56">
              <defs>
                <linearGradient :id="'g-' + av.id" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" :stop-color="av.colors[0]" />
                  <stop offset="100%" :stop-color="av.colors[1]" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="32" :fill="`url(#g-${av.id})`" />
              <text x="32" y="39" text-anchor="middle" fill="white" font-size="26" font-weight="bold" font-family="sans-serif">{{ authStore.avatarLetter }}</text>
            </svg>
            <span v-if="isDefaultAvatar(av.id)" class="check-mark">✓</span>
          </button>
        </div>

        <div class="divider"></div>

        <!-- 本地上传 -->
        <div class="section-title">从相册选择</div>
        <div class="upload-section">
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            style="display: none"
            @change="handleFileUpload"
          />
          <NButton
            type="primary"
            :loading="uploading"
            @click="triggerFileInput"
            block
            size="large"
          >
            {{ uploading ? '上传中...' : '📷 选择照片' }}
          </NButton>
          <span class="upload-hint">支持 JPG、PNG、WebP、GIF，最大 2MB</span>
        </div>
      </div>
    </NCard>
  </NModal>
</template>

<style scoped>
.avatar-picker {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.current-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.avatar-large {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.avatar-svg {
  width: 100%;
  height: 100%;
}
.preview-label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.divider {
  height: 1px;
  background: var(--border);
  margin: 4px 0;
}

.section-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.avatar-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.avatar-option {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  transition: all 0.2s;
}
.avatar-option:hover {
  transform: scale(1.08);
  border-color: var(--primary);
}
.avatar-option.active {
  border-color: var(--primary);
}
.check-mark {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--bg-card);
}

.upload-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}
.upload-hint {
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>