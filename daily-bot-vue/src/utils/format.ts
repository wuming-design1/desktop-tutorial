import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export function formatTime(date: string | Date): string {
  return dayjs(date).format('HH:mm:ss')
}

export function formatDate(date: string | Date): string {
  return dayjs(date).format('YYYY-MM-DD')
}

export function formatRelative(date: string | Date): string {
  return dayjs(date).fromNow()
}

export function formatNumber(value: number): string {
  if (value >= 10000) {
    return (value / 10000).toFixed(1) + 'w'
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'k'
  }
  return String(value)
}

export function formatPercent(value: number): string {
  return value.toFixed(1) + '%'
}

export function formatLatency(ms: number): string {
  if (ms < 1000) {
    return ms + 'ms'
  }
  return (ms / 1000).toFixed(2) + 's'
}