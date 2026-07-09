<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { NButton, NSpace, useMessage } from 'naive-ui'
import { useSummaryStore } from '@/stores/summary'
import dayjs from 'dayjs'

const message = useMessage()
const store = useSummaryStore()

const displayedText = ref('')
const isTyping = ref(false)
let typingTimer: ReturnType<typeof setInterval> | null = null

const dateTitle = computed(() => {
  const d = store.data?.date
  return d ? dayjs(d).format('YYYY年M月D日 日报') : '今日日报'
})

const summaryText = computed(() => store.data?.summary ?? '')
const highlights = computed(() => store.data?.highlights ?? [])
const blockers = computed(() => store.data?.blockers ?? [])

function startTypewriter() {
  stopTypewriter()
  const full = summaryText.value
  if (!full) return
  displayedText.value = ''
  isTyping.value = true
  let idx = 0
  typingTimer = setInterval(() => {
    if (idx < full.length) {
      displayedText.value += full[idx]
      idx++
    } else {
      stopTypewriter()
    }
  }, 30)
}

function stopTypewriter() {
  if (typingTimer) {
    clearInterval(typingTimer)
    typingTimer = null
  }
  isTyping.value = false
}

function copySummary() {
  if (!store.data) return
  const text = [
    `${dateTitle.value}\n`,
    summaryText.value,
    highlights.value.length ? '\n✨ 亮点:\n' + highlights.value.map((h: string) => `  • ${h}`).join('\n') : '',
    blockers.value.length ? '\n🚫 阻塞:\n' + blockers.value.map((b: string) => `  • ${b}`).join('\n') : '',
  ].filter(Boolean).join('\n')
  navigator.clipboard.writeText(text).then(() => {
    message.success('已复制到剪贴板')
  }).catch(() => {
    message.error('复制失败')
  })
}

function speakSummary() {
  if (!store.data) return
  const text = summaryText.value
  if (!text) return
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.rate = 1.0
    utterance.pitch = 1.0
    window.speechSynthesis.speak(utterance)
    message.success('正在播报')
  } else {
    message.warning('当前浏览器不支持语音播报')
  }
}

function shareSummary() {
  if (!store.data) return
  const text = `${dateTitle.value}\n${summaryText.value}`
  if (navigator.share) {
    navigator.share({ title: dateTitle.value, text }).catch(() => {})
  } else {
    copySummary()
  }
}

watch(summaryText, () => {
  if (summaryText.value) startTypewriter()
})

onMounted(() => {
  if (summaryText.value) startTypewriter()
})

</script>

<template>
  <div class="summary-card card-hover">
    <div class="summary-header">
      <h3 class="summary-title">{{ dateTitle }}</h3>
      <span class="ai-badge">AI 生成</span>
    </div>

    <div class="summary-body">
      <p class="summary-text">
        {{ displayedText }}
        <span v-if="isTyping" class="typing-cursor">|</span>
      </p>
      <p v-if="!summaryText" style="color: var(--text-muted); font-size: 0.9rem;">
        暂无摘要数据
      </p>
    </div>

    <div v-if="highlights.length" class="summary-highlights">
      <h4>✨ 亮点</h4>
      <ul>
        <li v-for="(h, i) in highlights" :key="i">
          <span class="dot dot-green"></span>
          {{ h }}
        </li>
      </ul>
    </div>

    <div v-if="blockers.length" class="summary-blockers">
      <h4>🚫 阻塞</h4>
      <ul>
        <li v-for="(b, i) in blockers" :key="i">
          <span class="dot dot-red"></span>
          {{ b }}
        </li>
      </ul>
    </div>

    <div class="summary-actions">
      <NSpace>
        <NButton size="small" @click="copySummary">
          <template #icon>📋</template>
          复制
        </NButton>
        <NButton size="small" @click="speakSummary">
          <template #icon>🔊</template>
          播报
        </NButton>
        <NButton size="small" @click="shareSummary">
          <template #icon>🔗</template>
          分享
        </NButton>
      </NSpace>
    </div>
  </div>
</template>

<style scoped>
.summary-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}

.summary-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.summary-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}

.ai-badge {
  font-size: 0.72rem;
  color: var(--primary);
  background: rgba(108, 92, 231, 0.1);
  padding: 2px 10px;
  border-radius: 20px;
  font-weight: 500;
}

.summary-body {
  margin-bottom: 16px;
}

.summary-text {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.8;
  min-height: 1.8em;
}

.typing-cursor {
  color: var(--primary);
  font-weight: 400;
  animation: breathe 1s ease-in-out infinite;
}

.summary-highlights,
.summary-blockers {
  margin-bottom: 14px;
}

.summary-highlights h4,
.summary-blockers h4 {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.summary-highlights ul,
.summary-blockers ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.summary-highlights li,
.summary-blockers li {
  font-size: 0.85rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dot-green {
  background: #22C55E;
}

.dot-red {
  background: #EF4444;
}

.summary-actions {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}
</style>