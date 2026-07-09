import { ref, shallowRef } from 'vue'
import type { EChartsOption } from 'echarts'

export function useChart() {
  const chartRef = shallowRef<InstanceType<typeof import('vue-echarts').default> | null>(null)
  const option = ref<EChartsOption>({})
  const loading = ref(false)

  function setOption(opt: EChartsOption) {
    option.value = opt
  }

  function showLoading() {
    loading.value = true
  }

  function hideLoading() {
    loading.value = false
  }

  function resize() {
    chartRef.value?.resize()
  }

  return { chartRef, option, loading, setOption, showLoading, hideLoading, resize }
}