import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getStorage, setStorage } from '@/utils/storage'
import type { SummaryData } from '@/api/types'

export const useSummaryStore = defineStore('summary', () => {
  const data = ref<SummaryData | null>(getStorage('summary_data'))
  const loading = ref(false)
  const error = ref<string | null>(null)
  const lastUpdated = ref<string | null>(getStorage('summary_time'))
  const stats = computed(() => data.value?.stats)
  const updates = computed(() => data.value?.updates || [])
  const hasData = computed(() => data.value !== null)

  async function loadData() {
    if (loading.value) return
    loading.value = true; error.value = null
    try {
      const { fetchSummary } = await import('@/api/summary')
      const result = await fetchSummary()
      data.value = result; lastUpdated.value = new Date().toISOString()
      setStorage('summary_data', result); setStorage('summary_time', lastUpdated.value)
    } catch (e: any) { error.value = e?.message || '加载失败' }
    finally { loading.value = false }
  }
  async function refresh() {
    loading.value = true; error.value = null
    try {
      const { fetchSummary } = await import('@/api/summary')
      const result = await fetchSummary()
      data.value = result; lastUpdated.value = new Date().toISOString()
      setStorage('summary_data', result); setStorage('summary_time', lastUpdated.value)
    } catch (e: any) { error.value = e?.message || '刷新失败' }
    finally { loading.value = false }
  }
  return { data, loading, error, lastUpdated, stats, updates, hasData, loadData, refresh }
})