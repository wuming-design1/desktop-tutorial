<script setup lang="ts">
</script>

<template>
  <footer class="app-footer">
    <span>© {{ new Date().getFullYear() }} WorkflowBot. All rights reserved.</span>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--border);
  padding: 12px 24px;
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: center;
}
</style>