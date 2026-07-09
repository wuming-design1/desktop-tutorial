<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { NModal, NInput } from 'naive-ui'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const app = useAppStore()

const searchInput = ref('')

const mockResults = [
  { label: '总览看板', path: '/', desc: '查看今日工作概览' },
  { label: '代码动态', path: '/github', desc: 'GitHub 仓库动态' },
  { label: '任务管理', path: '/feishu', desc: '飞书任务管理' },
  { label: '天气预报', path: '/weather', desc: '查看天气信息' },
  { label: 'AI 助手', path: '/ai', desc: 'AI 对话与问答' },
  { label: '消息推送', path: '/push', desc: '推送消息管理' },
  { label: '数据报表', path: '/reports', desc: '数据统计报表' },
  { label: '系统设置', path: '/settings', desc: '管理凭证与配置' },
]

const filtered = computed(() => {
  const q = searchInput.value.trim().toLowerCase()
  if (!q) return []
  return mockResults.filter(r => r.label.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q))
})

const navigate = (path: string) => {
  router.push(path)
  app.closeSearch()
}
</script>

<template>
  <NModal
    :show="app.searchVisible"
    :on-update:show="(v: boolean) => { if (!v) app.closeSearch() }"
    :mask-closable="true"
    transform-origin="center"
  >
    <div class="search-modal">
      <div class="search-header">
        <NInput
          ref="searchInput"
          v-model:value="searchInput"
          placeholder="搜索页面、功能..."
          size="large"
          clearable
          :autofocus="true"
        >
          <template #prefix>
            <span>🔍</span>
          </template>
        </NInput>
      </div>
      <div v-if="filtered.length" class="search-results">
        <div
          v-for="r in filtered"
          :key="r.path"
          class="search-result-item"
          @click="navigate(r.path)"
        >
          <span class="result-label">{{ r.label }}</span>
          <span class="result-desc">{{ r.desc }}</span>
        </div>
      </div>
      <div v-else-if="searchInput.trim()" class="search-empty">
        未找到相关结果
      </div>
    </div>
  </NModal>
</template>

<style scoped>
.search-modal {
  width: 480px;
  max-width: 90vw;
  background: var(--bg-card-solid);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}
.search-header {
  padding: 16px;
  border-bottom: 1px solid var(--border);
}
.search-results {
  max-height: 360px;
  overflow-y: auto;
  padding: 8px;
}
.search-result-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background var(--transition);
}
.search-result-item:hover {
  background: var(--bg-hover);
}
.result-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
}
.result-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-empty {
  padding: 32px;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}
</style>