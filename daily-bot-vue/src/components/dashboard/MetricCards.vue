<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useSummaryStore } from '@/stores/summary'

const router = useRouter()
const store = useSummaryStore()

interface MetricCard {
  title: string
  value: number | string
  suffix: string
  trend: number
  icon: string
  route: string
  color: string
  bg: string
}

const cards = computed<MetricCard[]>(() => {
  const s = store.stats
  return [
    {
      title: '今日提交',
      value: s?.todayCommits ?? 0,
      suffix: s?.commitChangePercent != null
        ? `${s.commitChangePercent > 0 ? '+' : ''}${s.commitChangePercent}%`
        : '',
      trend: s?.commitChangePercent ?? 0,
      icon: '📝',
      route: '/github',
      color: '#4F6EF7',
      bg: 'rgba(79,110,247,0.08)',
    },
    {
      title: '待处理任务',
      value: s?.pendingTasks ?? 0,
      suffix: s?.urgentCount ? `${s.urgentCount} 紧急` : '',
      trend: (s?.urgentCount ?? 0) > 0 ? -1 : 0,
      icon: '📋',
      route: '/feishu',
      color: '#F59E0B',
      bg: 'rgba(245,158,11,0.08)',
    },
    {
      title: '活跃成员',
      value: s?.activeMembers ?? 0,
      suffix: s?.totalMembers ? `/${s.totalMembers}` : '',
      trend: 0,
      icon: '👥',
      route: '/reports',
      color: '#22C55E',
      bg: 'rgba(34,197,94,0.08)',
    },
    {
      title: '代码覆盖率',
      value: s?.codeCoverage ?? 0,
      suffix: '%',
      trend: 0,
      icon: '🛡️',
      route: '/reports',
      color: '#8B5CF6',
      bg: 'rgba(139,92,246,0.08)',
    },
  ]
})

function navigate(route: string) {
  router.push(route)
}
</script>

<template>
  <div class="metric-cards">
    <div
      v-for="(card, idx) in cards"
      :key="card.title"
      class="metric-card card-hover"
      :style="{
        animationDelay: `${idx * 0.1}s`,
        '--card-color': card.color,
        '--card-bg': card.bg,
      }"
      @click="navigate(card.route)"
    >
      <div class="card-header">
        <span class="card-icon" :style="{ background: card.bg }">{{ card.icon }}</span>
        <span class="card-title">{{ card.title }}</span>
      </div>
      <div class="card-body">
        <span class="card-value">{{ card.value }}</span>
        <span
          v-if="card.suffix"
          class="card-suffix"
          :class="{
            'suffix-up': card.trend > 0,
            'suffix-down': card.trend < 0,
          }"
        >
          {{ card.suffix }}
        </span>
      </div>
      <div class="card-footer">
        <span class="card-link">查看详情 →</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.metric-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.metric-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  cursor: pointer;
  animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  display: flex;
  flex-direction: column;
  gap: 16px;
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.card-title {
  font-size: 0.88rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.card-body {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.card-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}

.card-suffix {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}

.suffix-up {
  color: #22C55E;
}

.suffix-down {
  color: #EF4444;
}

.card-footer {
  margin-top: auto;
}

.card-link {
  font-size: 0.8rem;
  color: var(--text-muted);
  transition: color var(--transition);
}

.card-hover:hover .card-link {
  color: var(--primary);
}

@media (max-width: 900px) {
  .metric-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .metric-cards {
    grid-template-columns: 1fr;
  }
}
</style>