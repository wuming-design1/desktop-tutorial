<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { NCard, NSelect, NGrid, NGi, NSwitch } from 'naive-ui'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, BarChart, PieChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components'

use([CanvasRenderer, LineChart, BarChart, PieChart, GridComponent, TooltipComponent, LegendComponent, TitleComponent])

// 数据模式: demo = 虚拟演示数据, real = 真实 API 数据
const STORAGE_KEY = 'wfbot_data_mode'
const dataMode = ref<'demo' | 'real'>(
  (localStorage.getItem(STORAGE_KEY) as 'demo' | 'real') || 'demo'
)
watch(dataMode, (val) => {
  localStorage.setItem(STORAGE_KEY, val)
})
const isDemo = computed(() => dataMode.value === 'demo')

const timeRange = ref('week')
const timeOptions = [
  { label: '本周', value: 'week' },
  { label: '本月', value: 'month' },
  { label: '本季度', value: 'quarter' },
  { label: '本年', value: 'year' },
]

// --- Mock data generators ---
function genCommitTrend(range: string) {
  const labels = range === 'week'
    ? ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    : range === 'month'
    ? Array.from({ length: 30 }, (_, i) => `${i + 1}日`)
    : range === 'quarter'
    ? ['1月', '2月', '3月']
    : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  const commits = labels.map(() => Math.floor(Math.random() * 30) + 5)
  const prs = labels.map(() => Math.floor(Math.random() * 15) + 2)
  return { labels, commits, prs }
}

function genTaskRate(range: string) {
  const labels = range === 'week'
    ? ['周一', '周二', '周三', '周四', '周五']
    : range === 'month'
    ? ['第1周', '第2周', '第3周', '第4周']
    : range === 'quarter'
    ? ['1月', '2月', '3月']
    : Array.from({ length: 12 }, (_, i) => `${i + 1}月`)
  const rates = labels.map(() => Math.floor(Math.random() * 30) + 60)
  return { labels, rates }
}

function genMemberActivity() {
  const members = ['张三', '李四', '王五', '赵六', '孙七', '周八']
  const commits = members.map(() => Math.floor(Math.random() * 40) + 10)
  const reviews = members.map(() => Math.floor(Math.random() * 20) + 5)
  return { members, commits, reviews }
}

function genCodeChanges() {
  const labels = ['前端', '后端', 'DevOps', '测试', '文档', '其他']
  const added = labels.map(() => Math.floor(Math.random() * 2000) + 200)
  const deleted = labels.map(() => Math.floor(Math.random() * 800) + 50)
  return { labels, added, deleted }
}

// --- Chart options (demo 模式使用, real 模式返回 null) ---
const commitTrendOption = computed(() => {
  if (!isDemo.value) return null
  const { labels, commits, prs } = genCommitTrend(timeRange.value)
  return {
    tooltip: { trigger: 'axis' },
    legend: { data: ['提交', 'PR'], bottom: 0, textStyle: { color: '#8A8AA8' } },
    grid: { left: 40, right: 20, top: 20, bottom: 40 },
    xAxis: { type: 'category', data: labels, axisLabel: { color: '#8A8AA8', fontSize: 11 } },
    yAxis: { type: 'value', axisLabel: { color: '#8A8AA8' } },
    series: [
      { name: '提交', type: 'line', data: commits, smooth: true, lineStyle: { color: '#6C5CE7', width: 2 }, itemStyle: { color: '#6C5CE7' }, areaStyle: { color: 'rgba(108,92,231,0.08)' } },
      { name: 'PR', type: 'line', data: prs, smooth: true, lineStyle: { color: '#00B894', width: 2 }, itemStyle: { color: '#00B894' }, areaStyle: { color: 'rgba(0,184,148,0.06)' } },
    ],
  }
})

const taskRateOption = computed(() => {
  if (!isDemo.value) return null
  const { labels, rates } = genTaskRate(timeRange.value)
  return {
    tooltip: { trigger: 'axis' },
    grid: { left: 50, right: 20, top: 20, bottom: 30 },
    xAxis: { type: 'category', data: labels, axisLabel: { color: '#8A8AA8', fontSize: 11 } },
    yAxis: { type: 'value', min: 0, max: 100, axisLabel: { color: '#8A8AA8', formatter: '{value}%' } },
    series: [{
      type: 'bar', data: rates, barWidth: '50%',
      itemStyle: { borderRadius: [6, 6, 0, 0], color: '#6C5CE7' },
      label: { show: true, position: 'top', color: '#8A8AA8', fontSize: 10, formatter: '{c}%' },
    }],
  }
})

const memberActivityOption = computed(() => {
  if (!isDemo.value) return null
  const { members, commits, reviews } = genMemberActivity()
  return {
    tooltip: { trigger: 'axis' },
    legend: { data: ['提交', '审查'], bottom: 0, textStyle: { color: '#8A8AA8' } },
    grid: { left: 40, right: 20, top: 20, bottom: 40 },
    xAxis: { type: 'category', data: members, axisLabel: { color: '#8A8AA8', fontSize: 11 } },
    yAxis: { type: 'value', axisLabel: { color: '#8A8AA8' } },
    series: [
      { name: '提交', type: 'bar', data: commits, itemStyle: { color: '#6C5CE7', borderRadius: [4, 4, 0, 0] } },
      { name: '审查', type: 'bar', data: reviews, itemStyle: { color: '#A29BFE', borderRadius: [4, 4, 0, 0] } },
    ],
  }
})

const codeChangesOption = computed(() => {
  if (!isDemo.value) return null
  const { labels, added, deleted } = genCodeChanges()
  return {
    tooltip: { trigger: 'axis' },
    legend: { data: ['新增', '删除'], bottom: 0, textStyle: { color: '#8A8AA8' } },
    grid: { left: 50, right: 20, top: 20, bottom: 40 },
    xAxis: { type: 'category', data: labels, axisLabel: { color: '#8A8AA8', fontSize: 11 } },
    yAxis: { type: 'value', axisLabel: { color: '#8A8AA8', formatter: (v: number) => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v } },
    series: [
      { name: '新增', type: 'bar', data: added, itemStyle: { color: '#00B894', borderRadius: [4, 4, 0, 0] } },
      { name: '删除', type: 'bar', data: deleted, itemStyle: { color: '#FF7675', borderRadius: [4, 4, 0, 0] } },
    ],
  }
})

</script>

<template>
  <div class="reports-view">
    <div class="reports-header">
      <h2 class="page-title">数据报表</h2>
      <div class="header-right">
        <div class="mode-switch-inline">
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
        <NSelect
          v-model:value="timeRange"
          :options="timeOptions"
          size="small"
          style="width: 120px"
        />
      </div>
    </div>

    <!-- 真实模式空状态 -->
    <div v-if="!isDemo" class="real-empty">
      <div class="empty-icon">
        <svg viewBox="0 0 64 64" fill="none" width="80" height="80">
          <rect x="8" y="32" width="8" height="24" rx="2" fill="rgba(108,92,231,0.15)"/>
          <rect x="20" y="24" width="8" height="32" rx="2" fill="rgba(108,92,231,0.2)"/>
          <rect x="32" y="12" width="8" height="44" rx="2" fill="rgba(108,92,231,0.25)"/>
          <rect x="44" y="20" width="8" height="36" rx="2" fill="rgba(108,92,231,0.18)"/>
        </svg>
      </div>
      <p class="empty-title">暂无报表数据</p>
      <p class="empty-desc">请配置 GitHub 凭证后切换到真实模式，系统将自动拉取真实数据生成报表</p>
    </div>

    <!-- 虚拟模式：2x2 Chart Grid -->
    <NGrid v-else :cols="2" :x-gap="20" :y-gap="20">
      <NGi>
        <NCard title="提交趋势" class="chart-card">
          <VChart v-if="commitTrendOption" :option="commitTrendOption" autoresize style="height: 300px" />
        </NCard>
      </NGi>
      <NGi>
        <NCard title="任务完成率" class="chart-card">
          <VChart v-if="taskRateOption" :option="taskRateOption" autoresize style="height: 300px" />
        </NCard>
      </NGi>
      <NGi>
        <NCard title="成员活跃度" class="chart-card">
          <VChart v-if="memberActivityOption" :option="memberActivityOption" autoresize style="height: 300px" />
        </NCard>
      </NGi>
      <NGi>
        <NCard title="代码变更量" class="chart-card">
          <VChart v-if="codeChangesOption" :option="codeChangesOption" autoresize style="height: 300px" />
        </NCard>
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped>
.reports-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 40px;
}
.reports-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 24px;
}
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.mode-switch-inline {
  display: flex;
  align-items: center;
  gap: 8px;
}
.mode-label {
  font-size: 0.82rem;
  color: var(--text-secondary);
  white-space: nowrap;
}
.chart-card {
  min-height: 380px;
}

/* 真实模式空状态 */
.real-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
}
.empty-icon {
  margin-bottom: 20px;
  opacity: 0.6;
}
.empty-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0 0 8px;
}
.empty-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
  max-width: 360px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .reports-view :deep(.n-grid) {
    grid-template-columns: 1fr !important;
  }
  .reports-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  .header-right {
    width: 100%;
    justify-content: space-between;
  }
}
</style>