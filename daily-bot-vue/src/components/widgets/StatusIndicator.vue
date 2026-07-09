<script setup lang="ts">
interface Props {
  status: 'healthy' | 'degraded' | 'down'
  showText?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showText: true,
})

const statusMap: Record<string, { color: string; label: string }> = {
  healthy: { color: 'var(--success)', label: '正常' },
  degraded: { color: 'var(--warning)', label: '降级' },
  down: { color: 'var(--danger)', label: '异常' },
}
</script>

<template>
  <span class="status-indicator">
    <span class="status-dot" :style="{ background: statusMap[props.status].color }"></span>
    <span v-if="props.showText" class="status-label">{{ statusMap[props.status].label }}</span>
  </span>
</template>

<style scoped>
.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.status-label {
  font-size: 0.82rem;
  color: var(--text-secondary);
}
</style>