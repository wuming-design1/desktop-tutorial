<script setup lang="ts">
</script>

<template>
  <div class="weather-widget">
    <span class="weather-icon">☀️</span>
    <span class="weather-temp">32°C</span>
    <span class="weather-city">上海</span>
  </div>
</template>

<style scoped>
.weather-widget {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--border);
  font-size: 0.85rem;
  color: var(--text-secondary);
}
.weather-icon {
  font-size: 1.1rem;
}
.weather-temp {
  font-weight: 600;
  color: var(--text-primary);
}
.weather-city {
  color: var(--text-muted);
}
</style>