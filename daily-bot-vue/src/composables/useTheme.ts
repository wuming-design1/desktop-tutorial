import { useDark, useToggle } from '@vueuse/core'

export function useTheme() {
  const isDark = useDark({ storageKey: 'wfbot_theme' })
  const toggleTheme = useToggle(isDark)

  return { isDark, toggleTheme }
}