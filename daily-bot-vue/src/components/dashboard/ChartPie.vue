<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts'
import { useChart } from '@/composables/useChart'

use([PieChart, TooltipComponent, LegendComponent, CanvasRenderer])

const { chartRef, option, setOption } = useChart()

const data = [
  { name: '进行中', value: 12 },
  { name: '已完成', value: 18 },
  { name: '待评审', value: 5 },
  { name: '已关闭', value: 8 },
]

const colors = ['#4F6EF7', '#22C55E', '#8B5CF6', '#8B9AAB']

const chartOption = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'var(--bg-card-solid)',
    borderColor: 'var(--border)',
    textStyle: { color: 'var(--text-primary)', fontSize: 13 },
    formatter: '{b}: {c} ({d}%)',
  },
  legend: {
    bottom: 0,
    textStyle: {
      color: 'var(--text-secondary)',
      fontSize: 12,
    },
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 16,
  },
  color: colors,
  series: [
    {
      type: 'pie',
      radius: ['55%', '78%'],
      center: ['50%', '46%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: 'var(--bg-card)',
        borderWidth: 3,
        borderRadius: 4,
      },
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold',
        },
        scaleSize: 8,
      },
      data,
    },
  ],
}))

setOption(chartOption.value)
</script>

<template>
  <div class="chart-pie card-hover">
    <div class="chart-header">
      <h3>任务状态分布</h3>
    </div>
    <div class="chart-body">
      <VChart
        ref="chartRef"
        :option="option"
        autoresize
        style="height: 260px; width: 100%;"
      />
    </div>
  </div>
</template>

<style scoped>
.chart-pie {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}

.chart-header {
  margin-bottom: 8px;
}

.chart-header h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}

.chart-body {
  width: 100%;
}
</style>