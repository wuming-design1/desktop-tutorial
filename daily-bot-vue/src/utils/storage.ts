const PREFIX = 'wfbot_'

export function getStorage<T = unknown>(key: string): T | null {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    if (raw === null) return null
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export function setStorage<T = unknown>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch {
    // 存储已满或不可用，静默失败
  }
}

export function removeStorage(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key)
  } catch {
    // 静默失败
  }
}