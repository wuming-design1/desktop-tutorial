<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts'
import { useChart } from '@/composables/useChart'

use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer])

const { chartRef: _chartRef, option, setOption } = useChart()

const dates = ['07-03', '07-04', '07-05', '07-06', '07-07', '07-08', '07-09']
const values = [8, 12, 6, 15, 10, 18, 12]

const chartOption = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'var(--bg-card-solid)',
    borderColor: 'var(--border)',
    textStyle: { color: 'var(--text-primary)', fontSize: 13 },
    formatter: (params: any) => {
      const p = Array.isArray(params) ? params[0] : params
      return `${p.axisValue}<br/><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#4F6EF7;margin-right:6px;"></span>提交数: <b>${p.value}</b>`
    },
  },
  grid: {
    left: 0,
    right: 0,
    top: 10,
    bottom: 0,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: dates,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: 'var(--text-muted)',
      fontSize: 11,
    },
    boundaryGap: false,
  },
  yAxis: {
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
  series: [
    {
      type: 'line',
      data: values,
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      showSymbol: false,
      lineStyle: {
        color: '#4F6EF7',
        width: 2.5,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(79,110,247,0.25)' },
            { offset: 1, color: 'rgba(79,110,247,0.02)' },
          ],
        },
      },
      itemStyle: {
        color: '#4F6EF7',
      },
    },
  ],
}))

setOption(chartOption.value)
</script>

<template>
  <div class="chart-trend card-hover">
    <div class="chart-header">
      <h3>7日提交趋势</h3>
    </div>
    <div class="chart-body">
      <VChart
        ref="_chartRef"
        :option="option"
        autoresize
        style="height: 220px; width: 100%;"
      />
    </div>
  </div>
</template>

<style scoped>
.chart-trend {
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