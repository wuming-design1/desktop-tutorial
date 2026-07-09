import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

export const useAppStore = defineStore('app', () => {
  const isDark = useDark({ storageKey: 'wfbot_theme', valueDark: 'dark', valueLight: 'light' })
  const toggleTheme = useToggle(isDark)
  const searchVisible = ref(false)
  const searchQuery = ref('')
  const lastUpdateTime = ref('')
  const openSearch = () => { searchVisible.value = true }
  const closeSearch = () => { searchVisible.value = false; searchQuery.value = '' }
  const updateTime = () => { lastUpdateTime.value = new Date().toLocaleTimeString('zh-CN', { hour12: false }) }
  return { isDark, toggleTheme, searchVisible, searchQuery, lastUpdateTime, openSearch, closeSearch, updateTime }
})