<script setup lang="ts">
import { ref, computed } from 'vue'
import { NButton, NTag } from 'naive-ui'
import { useSummaryStore } from '@/stores/summary'

const store = useSummaryStore()

interface TimelineItem {
  time: string
  source: string
  author: string
  content: string
  status?: string
}

const INITIAL_COUNT = 8
const LOAD_MORE_COUNT = 10

const visibleCount = ref(INITIAL_COUNT)
const expandedId = ref<number | null>(null)

const allItems = computed<TimelineItem[]>(() => store.updates)
const items = computed(() => allItems.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < allItems.value.length)

const sourceColors: Record<string, string> = {
  github: '#4F6EF7',
  feishu: '#22C55E',
  ai: '#8B5CF6',
  weather: '#F59E0B',
  webhook: '#EF4444',
}

function sourceColor(source: string): string {
  return sourceColors[source] ?? '#8B9AAB'
}

function sourceLabel(source: string): string {
  const labels: Record<string, string> = {
    github: 'GitHub',
    feishu: '飞书',
    ai: 'AI',
    weather: '天气',
    webhook: 'Webhook',
  }
  return labels[source] ?? source
}

function toggleExpand(idx: number) {
  expandedId.value = expandedId.value === idx ? null : idx
}

function loadMore() {
  visibleCount.value += LOAD_MORE_COUNT
}

function statusType(status: string): 'success' | 'warning' | 'error' | 'info' | 'default' {
  const map: Record<string, 'success' | 'warning' | 'error' | 'info' | 'default'> = {
    completed: 'success',
    done: 'success',
    merged: 'success',
    in_progress: 'info',
    pending: 'warning',
    review: 'warning',
    blocked: 'error',
    failed: 'error',
  }
  return map[status] ?? 'default'
}

function statusLabel(status: string): string {
  const labels: Record<string, string> = {
    completed: '已完成',
    done: '已完成',
    merged: '已合并',
    in_progress: '进行中',
    pending: '待处理',
    review: '待评审',
    blocked: '已阻塞',
    failed: '失败',
  }
  return labels[status] ?? status
}
</script>

<template>
  <div class="timeline-card card-hover">
    <div class="timeline-header">
      <h3>今日动态</h3>
      <span class="timeline-count">{{ allItems.length }} 条更新</span>
    </div>

    <div v-if="!items.length" class="timeline-empty">
      暂无动态
    </div>

    <div v-else class="timeline-list">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="timeline-item"
        :class="{ expanded: expandedId === idx }"
        @click="toggleExpand(idx)"
      >
        <div class="timeline-dot-wrapper">
          <span
            class="timeline-dot"
            :style="{ background: sourceColor(item.source) }"
          ></span>
          <span v-if="idx < items.length - 1" class="timeline-line"></span>
        </div>

        <div class="timeline-content">
          <div class="timeline-meta">
            <span class="timeline-time">{{ item.time }}</span>
            <span class="timeline-source" :style="{ color: sourceColor(item.source) }">
              {{ sourceLabel(item.source) }}
            </span>
            <span class="timeline-author">{{ item.author }}</span>
          </div>
          <div class="timeline-text" :class="{ 'line-clamp': expandedId !== idx }">
            {{ item.content }}
          </div>
          <div class="timeline-tags">
            <NTag
              v-if="item.status"
              :type="statusType(item.status)"
              size="small"
              round
            >
              {{ statusLabel(item.status) }}
            </NTag>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hasMore" class="timeline-footer">
      <NButton text type="primary" @click="loadMore">
        加载更多
      </NButton>
    </div>
  </div>
</template>

<style scoped>
.timeline-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}

.timeline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.timeline-header h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}

.timeline-count {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.timeline-empty {
  text-align: center;
  padding: 32px 0;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.timeline-list {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: flex;
  gap: 14px;
  cursor: pointer;
  padding: 4px 0;
  transition: background var(--transition);
}

.timeline-item:hover {
  background: var(--bg-hover);
  border-radius: 8px;
  margin: 0 -8px;
  padding: 4px 8px;
}

.timeline-dot-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 10px;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.timeline-line {
  width: 2px;
  flex: 1;
  background: var(--border);
  margin-top: 4px;
}

.timeline-content {
  flex: 1;
  min-width: 0;
  padding-bottom: 16px;
}

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.timeline-time {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-family: monospace;
}

.timeline-source {
  font-size: 0.75rem;
  font-weight: 600;
}

.timeline-author {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.timeline-text {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  transition: all var(--transition);
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.timeline-tags {
  margin-top: 6px;
}

.timeline-footer {
  margin-top: 8px;
  text-align: center;
  padding-top: 8px;
  border-top: 1px solid var(--border);
}
</style>