<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts'
import { useChart } from '@/composables/useChart'

use([BarChart, GridComponent, TooltipComponent, CanvasRenderer])

const { chartRef, option, setOption } = useChart()

const names = ['张三', '李四', '王五', '赵六', '孙七', '周八']
const values = [28, 22, 18, 15, 10, 7]

const chartOption = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    backgroundColor: 'var(--bg-card-solid)',
    borderColor: 'var(--border)',
    textStyle: { color: 'var(--text-primary)', fontSize: 13 },
    formatter: (params: any) => {
      const p = Array.isArray(params) ? params[0] : params
      return `${p.name}: <b>${p.value} 次提交</b>`
    },
  },
  grid: {
    left: 0,
    right: 40,
    top: 0,
    bottom: 0,
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    splitLine: {
      lineStyle: { color: 'var(--border)', type: 'dashed' },
    },
    axisLabel: {
      color: 'var(--text-muted)',
      fontSize: 11,
    },
    minInterval: 1,
  },
  yAxis: {
    type: 'category',
    data: names,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: 'var(--text-secondary)',
      fontSize: 12,
      fontWeight: 500,
    },
    inverse: true,
  },
  series: [
    {
      type: 'bar',
      data: values.map((v, i) => ({
        value: v,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 1, y2: 0,
            colorStops: [
              { offset: 0, color: 'rgba(79,110,247,0.6)' },
              { offset: 1, color: '#4F6EF7' },
            ],
          },
          borderRadius: [0, 6, 6, 0],
        },
      })),
      barWidth: 16,
      label: {
        show: true,
        position: 'right',
        color: 'var(--text-muted)',
        fontSize: 11,
        fontWeight: 600,
        formatter: '{c}',
      },
      emphasis: {
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 1, y2: 0,
            colorStops: [
              { offset: 0, color: 'rgba(79,110,247,0.8)' },
              { offset: 1, color: '#6C5CE7' },
            ],
          },
        },
      },
    },
  ],
}))

setOption(chartOption.value)
</script>

<template>
  <div class="chart-bar card-hover">
    <div class="chart-header">
      <h3>成员贡献排行</h3>
    </div>
    <div class="chart-body">
      <VChart
        ref="chartRef"
        :option="option"
        autoresize
        style="height: 250px; width: 100%;"
      />
    </div>
  </div>
</template>

<style scoped>
.chart-bar {
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