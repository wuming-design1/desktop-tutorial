<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const app = useAppStore()
</script>

<template>
  <button class="theme-toggle" @click="app.toggleTheme()" title="切换主题">
    <span class="theme-icon">🌙</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--bg-card);
  cursor: pointer;
  transition: all var(--transition);
  font-size: 1rem;
  line-height: 1;
  padding: 0;
}
.theme-toggle:hover {
  border-color: var(--primary);
  box-shadow: 0 0 12px rgba(108, 92, 231, 0.15);
}
.theme-toggle:active .theme-icon {
  animation: bounceIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes bounceIn {
  0% { transform: scale(1); }
  50% { transform: scale(1.4); }
  100% { transform: scale(1); }
}
</style>