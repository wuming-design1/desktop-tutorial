import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getStorage, setStorage } from '@/utils/storage'
import { useAuthStore } from '@/stores/auth'
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
  const data = ref<SummaryData | null>(getStorage(dataKey()))
  const loading = ref(false)
  const error = ref<string | null>(null)
  const lastUpdated = ref<string | null>(getStorage(timeKey()))
  const stats = computed(() => data.value?.stats)
  const updates = computed(() => data.value?.updates || [])
  const hasData = computed(() => data.value !== null)

  function reload() {
    data.value = getStorage(dataKey())
    lastUpdated.value = getStorage(timeKey())
  }

  async function loadData() {
    if (loading.value) return
    loading.value = true; error.value = null
    try {
      const { fetchSummary } = await import('@/api/summary')
      const result = await fetchSummary()
      data.value = result; lastUpdated.value = new Date().toISOString()
      setStorage(dataKey(), result); setStorage(timeKey(), lastUpdated.value)
    } catch (e: any) { error.value = e?.message || '加载失败' }
    finally { loading.value = false }
  }

  async function refresh() {
    loading.value = true; error.value = null
    try {
      const { fetchSummary } = await import('@/api/summary')
      const result = await fetchSummary()
      data.value = result; lastUpdated.value = new Date().toISOString()
      setStorage(dataKey(), result); setStorage(timeKey(), lastUpdated.value)
    } catch (e: any) { error.value = e?.message || '刷新失败' }
    finally { loading.value = false }
  }

  return { data, loading, error, lastUpdated, stats, updates, hasData, loadData, refresh, reload }
})