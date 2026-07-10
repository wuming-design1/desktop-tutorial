import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getStorage, setStorage } from '@/utils/storage'
import { useAuthStore } from '@/stores/auth'
import { apiGetSummary } from '@/api/backend'
import type { SummaryData } from '@/api/types'

function dataKey() {
  const uid = useAuthStore().user?.id || 'anonymous'
  return `wfbot_summary_${uid}`
}
function timeKey() {
  const uid = useAuthStore().user?.id || 'anonymous'
  return `wfbot_summary_time_${uid}`
}

export const useSummaryStore = defineStore('summary', () => {
  const data = ref<SummaryData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const lastUpdated = ref<string | null>(null)
  const stats = computed(() => data.value?.stats)
  const updates = computed(() => data.value?.updates || [])
  const hasData = computed(() => data.value !== null)

  function reload() {
    const d = getStorage<SummaryData>(dataKey())
    const t = getStorage<string>(timeKey())
    if (d) data.value = d
    if (t) lastUpdated.value = t
  }

  // 加载演示数据（mock）
  async function loadDemoData() {
    if (loading.value) return
    loading.value = true; error.value = null
    try {
      const { fetchSummary } = await import('@/api/summary')
      const result = await fetchSummary()
      data.value = result
      lastUpdated.value = new Date().toISOString()
      setStorage(dataKey(), result)
      setStorage(timeKey(), lastUpdated.value)
    } catch (e: any) {
      error.value = e?.message || '加载失败'
    } finally {
      loading.value = false
    }
  }

  // 加载真实数据（从后端 API）
  async function loadRealData() {
    if (loading.value) return
    loading.value = true; error.value = null
    try {
      const realData = await apiGetSummary()
      data.value = realData
      lastUpdated.value = new Date().toISOString()
      setStorage(dataKey(), realData)
      setStorage(timeKey(), lastUpdated.value)
    } catch (e: any) {
      error.value = e?.message || '真实数据加载失败'
      data.value = null
    } finally {
      loading.value = false
    }
  }

  function clearData() {
    data.value = null
    lastUpdated.value = null
    error.value = null
  }

  return {
    data, loading, error, lastUpdated, stats, updates, hasData,
    loadDemoData, loadRealData, reload, clearData,
  }
})