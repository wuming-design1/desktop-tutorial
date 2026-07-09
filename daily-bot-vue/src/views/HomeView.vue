<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { NCard, NTag, NGrid, NGi, NCollapse, NCollapseItem, NProgress, NSpin, NSwitch, NAlert } from 'naive-ui'
import { useSummaryStore } from '@/stores/summary'
import { useAppStore } from '@/stores/app'
import { useCredStore } from '@/stores/credStore'

const summaryStore = useSummaryStore()
const appStore = useAppStore()
const credStore = useCredStore()

// 数据模式: demo = 虚拟演示数据, real = 真实 API 数据
const STORAGE_KEY = 'wfbot_data_mode'
const dataMode = ref<'demo' | 'real'>(
  (localStorage.getItem(STORAGE_KEY) as 'demo' | 'real') || 'demo'
)

watch(dataMode, (val) => {
  localStorage.setItem(STORAGE_KEY, val)
})

const isDemo = computed(() => dataMode.value === 'demo')
const hasCreds = computed(() => credStore.hasAnyCredential)
const showRealWarning = computed(() => dataMode.value === 'real' && !hasCreds.value)

// ====== 虚拟演示数据 ======
const demoMetrics = [
  { label: '今日提交', value: 12, unit: '次', icon: '📝', color: 'var(--primary)' },
  { label: '任务完成率', value: 78, unit: '%', icon: '✅', color: 'var(--success)' },
  { label: '活跃成员', value: 8, unit: '人', icon: '👥', color: 'var(--info)' },
  { label: '代码变更', value: 2840, unit: '行', icon: '📊', color: 'var(--warning)' },
]

const demoSummaryRows = [
  { label: '活跃仓库', value: 3 },
  { label: '新增 Issue', value: 7 },
  { label: '已关闭 Issue', value: 5 },
  { label: '代码审查', value: 12 },
  { label: '发布版本', value: 2 },
]

const demoTimelineItems = [
  { time: '10:30', text: '张三 提交了 dashboard 模块更新', type: 'commit' },
  { time: '09:45', text: '李四 合并了 PR #128 feature/user-auth', type: 'pr' },
  { time: '09:00', text: '飞书审批单 #20240709-001 已通过', type: 'approval' },
  { time: '08:30', text: '每日站会纪要已自动生成', type: 'meeting' },
]

const demoChartTrend = [
  { name: '周一', commits: 12, prs: 5 },
  { name: '周二', commits: 18, prs: 8 },
  { name: '周三', commits: 15, prs: 6 },
  { name: '周四', commits: 22, prs: 10 },
  { name: '周五', commits: 16, prs: 7 },
  { name: '周六', commits: 8, prs: 3 },
  { name: '周日', commits: 4, prs: 1 },
]

const demoChartPie = [
  { name: '前端', value: 35, color: '#6C5CE7' },
  { name: '后端', value: 28, color: '#00B894' },
  { name: 'DevOps', value: 15, color: '#FDCB6E' },
  { name: '测试', value: 12, color: '#FF7675' },
  { name: '文档', value: 10, color: '#74B9FF' },
]

const demoChartBar = [
  { name: '张三', commits: 24, prs: 6 },
  { name: '李四', commits: 18, prs: 8 },
  { name: '王五', commits: 15, prs: 4 },
  { name: '赵六', commits: 12, prs: 3 },
  { name: '孙七', commits: 9, prs: 2 },
]

const demoHealth = [
  { name: 'GitHub 连接', status: 'ok' as const, value: '正常', detail: 'API 响应时间 120ms' },
  { name: '飞书连接', status: 'ok' as const, value: '正常', detail: 'Token 有效期至 2026-08-01' },
  { name: '天气服务', status: 'warning' as const, value: '延迟', detail: 'API 响应时间 2.3s' },
  { name: 'AI 服务', status: 'ok' as const, value: '正常', detail: '模型 DeepSeek-V4 可用' },
]

// ====== 真实数据 ======
const realMetrics = computed(() => [
  { label: '今日提交', value: summaryStore.stats?.commits ?? 0, unit: '次', icon: '📝', color: 'var(--primary)' },
  { label: '任务完成率', value: summaryStore.stats?.taskRate ?? 0, unit: '%', icon: '✅', color: 'var(--success)' },
  { label: '活跃成员', value: summaryStore.stats?.members ?? 0, unit: '人', icon: '👥', color: 'var(--info)' },
  { label: '代码变更', value: summaryStore.stats?.changes ?? 0, unit: '行', icon: '📊', color: 'var(--warning)' },
])

const realSummaryRows = computed(() => [
  { label: '活跃仓库', value: summaryStore.stats?.activeRepos ?? 0 },
  { label: '新增 Issue', value: summaryStore.stats?.newIssues ?? 0 },
  { label: '已关闭 Issue', value: summaryStore.stats?.closedIssues ?? 0 },
  { label: '代码审查', value: summaryStore.stats?.reviews ?? 0 },
  { label: '发布版本', value: summaryStore.stats?.releases ?? 0 },
])

const realTimelineItems = computed(() => {
  const updates = summaryStore.updates
  if (updates.length === 0) return []
  return updates.slice(0, 6).map(u => ({
    time: u.time ? new Date(u.time).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '--',
    text: `${u.author} ${u.content}`,
    type: u.source,
  }))
})

// 当前使用的数据
const metrics = computed(() => isDemo.value ? demoMetrics : realMetrics.value)
const summaryRows = computed(() => isDemo.value ? demoSummaryRows : realSummaryRows.value)
const timelineItems = computed(() => isDemo.value ? demoTimelineItems : realTimelineItems.value)
const chartTrendData = computed(() => isDemo.value ? demoChartTrend : demoChartTrend) // 真实图表待后续接入
const chartPieData = computed(() => isDemo.value ? demoChartPie : demoChartPie)
const chartBarData = computed(() => isDemo.value ? demoChartBar : demoChartBar)
const healthStatus = computed(() => isDemo.value ? demoHealth : demoHealth)

const healthExpanded = ref(false)

const systemStatus = computed(() => {
  if (isDemo.value) return { type: 'success' as const, text: '演示模式运行中' }
  if (!hasCreds.value) return { type: 'warning' as const, text: '未配置凭证，请先配置连接' }
  return { type: 'success' as const, text: '系统运行中' }
})

onMounted(async () => {
  await summaryStore.loadData()
  appStore.updateTime()
})
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">团队工作流智能看板</h1>
        <p class="hero-subtitle">实时追踪团队动态，智能分析开发效能</p>
        <div class="hero-status">
          <NTag :type="systemStatus.type" round size="large">
            <template #icon><span class="status-dot" :class="systemStatus.type" /></template>
            {{ systemStatus.text }}
          </NTag>
          <span v-if="appStore.lastUpdateTime" class="update-time">
            最后更新: {{ appStore.lastUpdateTime }}
          </span>
        </div>
      </div>
    </section>

    <!-- 数据模式切换 -->
    <div class="mode-switch-bar">
      <div class="mode-switch-inner">
        <div class="mode-left">
          <span class="mode-label">数据模式</span>
          <NSwitch
            :value="dataMode === 'real'"
            @update:value="(v: boolean) => dataMode = v ? 'real' : 'demo'"
          >
            <template #checked>
              <span style="font-size:0.75rem;padding:0 4px">真实</span>
            </template>
            <template #unchecked>
              <span style="font-size:0.75rem;padding:0 4px">虚拟</span>
            </template>
          </NSwitch>
        </div>
        <div class="mode-right">
          <NTag :type="isDemo ? 'info' : 'success'" size="small" round>
            {{ isDemo ? '📺 虚拟演示数据' : '🔗 真实 API 数据' }}
          </NTag>
          <span class="mode-desc">
            {{ isDemo ? '展示预设的模拟数据，用于预览和演示' : '连接已配置的平台 API，拉取真实数据' }}
          </span>
        </div>
      </div>
    </div>

    <!-- 真实模式未配置凭证警告 -->
    <NAlert
      v-if="showRealWarning"
      type="warning"
      :bordered="false"
      closable
      class="cred-warning"
    >
      <template #header>
        尚未配置平台凭证，请点击右上角头像 →「管理凭证」配置 GitHub、飞书等平台连接。
      </template>
    </NAlert>

    <!-- Metric Cards -->
    <div class="metric-grid">
      <NCard v-for="m in metrics" :key="m.label" class="metric-card card-hover">
        <div class="metric-inner">
          <span class="metric-icon">{{ m.icon }}</span>
          <div class="metric-info">
            <span class="metric-label">{{ m.label }}</span>
            <span class="metric-value" :style="{ color: m.color }">
              {{ summaryStore.loading && !isDemo ? '--' : m.value }}
              <small>{{ m.unit }}</small>
            </span>
          </div>
        </div>
      </NCard>
    </div>

    <!-- Summary + Timeline 7:5 Grid -->
    <NGrid :cols="12" :x-gap="20" :y-gap="20">
      <NGi :span="7">
        <NCard title="📋 今日概览" class="summary-card">
          <NSpin :show="summaryStore.loading && !isDemo">
            <div class="summary-body">
              <div v-for="r in summaryRows" :key="r.label" class="summary-row">
                <span class="summary-label">{{ r.label }}</span>
                <span class="summary-value">{{ r.value }}</span>
              </div>
              <div v-if="summaryRows.length === 0 && !isDemo" class="empty-hint">
                暂无数据，请确认已配置平台凭证
              </div>
            </div>
          </NSpin>
        </NCard>
      </NGi>
      <NGi :span="5">
        <NCard title="🕐 动态时间线" class="timeline-card">
          <div class="timeline-list">
            <div v-for="(item, i) in timelineItems" :key="i" class="timeline-item">
              <span class="timeline-time">{{ item.time }}</span>
              <span class="timeline-dot" />
              <span class="timeline-text">{{ item.text }}</span>
            </div>
            <div v-if="timelineItems.length === 0 && !isDemo" class="empty-hint">
              暂无动态
            </div>
          </div>
        </NCard>
      </NGi>
    </NGrid>

    <!-- 3-Column Chart Grid -->
    <NGrid :cols="3" :x-gap="20" :y-gap="20" class="chart-grid">
      <NGi>
        <NCard title="📈 提交趋势 (本周)">
          <div class="chart-trend">
            <div class="trend-bars">
              <div
                v-for="d in chartTrendData"
                :key="d.name"
                class="trend-bar-group"
              >
                <div class="bar-wrapper">
                  <div class="bar bar-commits" :style="{ height: (d.commits / 22) * 120 + 'px' }" />
                  <div class="bar bar-prs" :style="{ height: (d.prs / 10) * 120 + 'px' }" />
                </div>
                <span class="bar-label">{{ d.name }}</span>
              </div>
            </div>
            <div class="chart-legend">
              <span class="legend-item"><span class="legend-dot" style="background:#6C5CE7" /> 提交</span>
              <span class="legend-item"><span class="legend-dot" style="background:#A29BFE" /> PR</span>
            </div>
          </div>
        </NCard>
      </NGi>
      <NGi>
        <NCard title="🍩 任务分布">
          <div class="chart-pie">
            <svg viewBox="0 0 160 160" class="pie-svg">
              <circle cx="80" cy="80" r="60" fill="none" stroke="#eee" stroke-width="20" />
              <circle
                v-for="(d, i) in chartPieData"
                :key="d.name"
                cx="80" cy="80" r="60" fill="none"
                :stroke="d.color" stroke-width="20"
                :stroke-dasharray="`${(d.value / 100) * 377} 377`"
                :stroke-dashoffset="chartPieData.slice(0, i).reduce((a, c) => a - (c.value / 100) * 377, 0)"
                transform="rotate(-90 80 80)"
              />
            </svg>
            <div class="pie-legend">
              <span v-for="d in chartPieData" :key="d.name" class="pie-legend-item">
                <span class="pie-dot" :style="{ background: d.color }" /> {{ d.name }} {{ d.value }}%
              </span>
            </div>
          </div>
        </NCard>
      </NGi>
      <NGi>
        <NCard title="👤 成员活跃度">
          <div class="chart-bar">
            <div
              v-for="d in chartBarData"
              :key="d.name"
              class="bar-row"
            >
              <span class="bar-row-name">{{ d.name }}</span>
              <NProgress
                :percentage="Math.round((d.commits / 24) * 100)"
                :height="20"
                :border-radius="10"
                :color="'#6C5CE7'"
                :rail-color="'var(--bg-input)'"
                :show-indicator="false"
              />
              <span class="bar-row-val">{{ d.commits }}次</span>
            </div>
          </div>
        </NCard>
      </NGi>
    </NGrid>

    <!-- Collapsible Health Section -->
    <NCollapse :expanded-names="healthExpanded ? ['health'] : []" @update:expanded-names="healthExpanded = ($event as string[]).includes('health')">
      <NCollapseItem name="health">
        <template #header>
          <span class="health-header">🏥 系统健康检查</span>
        </template>
        <div class="health-grid">
          <NCard v-for="h in healthStatus" :key="h.name" size="small" class="health-card">
            <div class="health-item">
              <div class="health-left">
                <span class="health-name">{{ h.name }}</span>
                <span class="health-detail">{{ h.detail }}</span>
              </div>
              <NTag
                :type="h.status === 'ok' ? 'success' : h.status === 'warning' ? 'warning' : 'error'"
                size="small"
                round
              >
                {{ h.value }}
              </NTag>
            </div>
          </NCard>
        </div>
      </NCollapseItem>
    </NCollapse>
  </div>
</template>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Hero */
.hero-section {
  padding: 40px 0 20px;
}
.hero-content {
  text-align: center;
}
.hero-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 16px;
}
.hero-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  animation: breathe 2s ease-in-out infinite;
}
.status-dot.success { background: var(--success); }
.status-dot.warning { background: var(--warning); }
.update-time {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* 模式切换 */
.mode-switch-bar {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  padding: 14px 20px;
}
.mode-switch-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.mode-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.mode-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}
.mode-right {
  display: flex;
  align-items: center;
  gap: 10px;
}
.mode-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.cred-warning {
  margin: 0;
  border-radius: var(--radius);
}

/* Metric Grid */
.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.metric-card {
  cursor: default;
}
.metric-inner {
  display: flex;
  align-items: center;
  gap: 16px;
}
.metric-icon {
  font-size: 2rem;
}
.metric-info {
  display: flex;
  flex-direction: column;
}
.metric-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}
.metric-value {
  font-size: 1.8rem;
  font-weight: 700;
}
.metric-value small {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--text-muted);
}

/* Summary */
.summary-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-light);
}
.summary-row:last-child {
  border-bottom: none;
}
.summary-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
.summary-value {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

/* Timeline */
.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 4px;
}
.timeline-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
}
.timeline-time {
  color: var(--text-muted);
  font-size: 0.78rem;
  min-width: 38px;
}
.timeline-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  flex-shrink: 0;
}
.timeline-text {
  color: var(--text-secondary);
}

.empty-hint {
  text-align: center;
  color: var(--text-muted);
  padding: 20px 0;
  font-size: 0.85rem;
}

/* Chart Trend */
.chart-trend {
  padding: 8px 0;
}
.trend-bars {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 160px;
  padding-bottom: 8px;
}
.trend-bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.bar-wrapper {
  display: flex;
  gap: 4px;
  align-items: flex-end;
}
.bar {
  width: 18px;
  border-radius: 6px 6px 0 0;
  transition: height 0.4s ease;
}
.bar-commits {
  background: var(--primary);
}
.bar-prs {
  background: var(--primary-light);
}
.bar-label {
  font-size: 0.72rem;
  color: var(--text-muted);
}
.chart-legend {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 8px;
}
.legend-item {
  font-size: 0.78rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 4px;
}
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  display: inline-block;
}

/* Chart Pie */
.chart-pie {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.pie-svg {
  width: 160px;
  height: 160px;
}
.pie-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.pie-legend-item {
  font-size: 0.75rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 4px;
}
.pie-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

/* Chart Bar */
.chart-bar {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 4px 0;
}
.bar-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.bar-row-name {
  font-size: 0.8rem;
  color: var(--text-secondary);
  min-width: 36px;
}
.bar-row-val {
  font-size: 0.78rem;
  color: var(--text-muted);
  min-width: 36px;
  text-align: right;
}

/* Health */
.health-header {
  font-weight: 600;
  color: var(--text-primary);
}
.health-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.health-card {
  cursor: default;
}
.health-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.health-left {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.health-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
}
.health-detail {
  font-size: 0.78rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .metric-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .health-grid {
    grid-template-columns: 1fr;
  }
}
</style>