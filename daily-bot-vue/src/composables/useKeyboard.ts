import { onMounted, onUnmounted } from 'vue'

export interface KeyboardShortcut {
  key: string
  handler: (e: KeyboardEvent) => void
  ctrl?: boolean
  meta?: boolean
  shift?: boolean
}

export function useKeyboard(shortcuts: KeyboardShortcut[]) {
  function onKeydown(e: KeyboardEvent) {
    for (const s of shortcuts) {
      const matchKey = e.key.toLowerCase() === s.key.toLowerCase()
      if (!matchKey) continue

      if (s.ctrl !== undefined && !(e.ctrlKey || e.metaKey)) continue
      if (s.meta !== undefined && !e.metaKey) continue
      if (s.shift !== undefined && e.shiftKey !== s.shift) continue

      e.preventDefault()
      s.handler(e)
      return
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
  })
}