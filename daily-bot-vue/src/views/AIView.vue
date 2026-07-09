<script setup lang="ts">
import { ref, computed } from 'vue'
import { NCard, NTag, NButton, NSpin, useMessage } from 'naive-ui'
import axios from 'axios'
import { useCredStore } from '@/stores/credStore'

const credStore = useCredStore()
const message = useMessage()

const apiKey = computed(() => credStore.getCred('AI_API_KEY') || '')
const baseUrl = computed(() => credStore.getCred('AI_BASE_URL') || '')
const model = computed(() => credStore.getCred('AI_MODEL') || '')
const connected = computed(() => credStore.isConnected('ai'))

const testing = ref(false)
const generating = ref(false)
const report = ref('')

async function testConnection() {
  if (!apiKey.value || !baseUrl.value) {
    message.warning('请先填写 API Key 和 Base URL')
    return
  }
  testing.value = true
  try {
    const url = baseUrl.value.replace(/\/$/, '') + '/models'
    await axios.get(url, {
      headers: { Authorization: `Bearer ${apiKey.value}` },
    })
    message.success('连接成功')
  } catch (e: any) {
    message.error(`连接失败: ${e?.response?.data?.error?.message || e.message}`)
  } finally {
    testing.value = false
  }
}

async function generateReport() {
  generating.value = true
  report.value = ''
  await new Promise(r => setTimeout(r, 1500))

  const mock = `╔══════════════════════════════════════════╗
║        📊 团队工作流智能分析报告          ║
║          生成时间: ${new Date().toLocaleString('zh-CN')}  ║
╚══════════════════════════════════════════╝

【📈 总体概览】
• 今日代码提交: 24 次 (↑12% vs 昨日)
• 活跃仓库: 3 个
• Pull Request: 8 个 (4 open / 4 merged)
• 代码审查覆盖: 92%

【👥 成员贡献 TOP 3】
1. 张三 — 8 commits, 2 PRs merged
2. 李四 — 6 commits, 1 PR merged
3. 王五 — 5 commits, 3 reviews

【🔍 代码质量分析】
• 新增代码行数: 1,250 行
• 删除代码行数: 340 行
• 平均审查时间: 2.3 小时
• 测试覆盖率: 87.5%

【⚠️ 风险提示】
• 前端模块 dashboard 近期改动频繁，建议关注
• PR #128 已开放 3 天，建议优先审查
• 依赖库 @vueuse/core 有可用更新

【✅ 建议】
• 建议加强代码审查流程，缩短审查周期
• 考虑引入自动化测试提升覆盖率至 90%+
• 安排技术分享会，分享本周最佳实践
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           报告由 AI 自动生成
`

  report.value = mock
  generating.value = false
  message.success('报告生成完毕')
}
</script>

<template>
  <div class="ai-view">
    <h2 class="page-title">🤖 AI 助手</h2>

    <!-- AI Config -->
    <NCard title="AI 配置" class="config-card">
      <div class="config-row">
        <div class="config-item">
          <span class="config-label">连接状态</span>
          <NTag :type="connected ? 'success' : 'error'" size="small">
            {{ connected ? '已配置' : '未配置' }}
          </NTag>
        </div>
        <div class="config-item">
          <span class="config-label">模型</span>
          <span class="config-value">{{ model || '未设置' }}</span>
        </div>
        <NButton type="primary" :loading="testing" @click="testConnection" size="small">
          测试连接
        </NButton>
      </div>
    </NCard>

    <!-- Generate Report -->
    <NCard class="action-card">
      <div class="action-row">
        <span class="action-desc">生成团队工作流智能分析报告</span>
        <NButton
          type="primary"
          :loading="generating"
          @click="generateReport"
          size="large"
        >
          {{ generating ? '生成中...' : '🚀 生成报告' }}
        </NButton>
      </div>
    </NCard>

    <!-- Report Display -->
    <NCard v-if="report" title="📄 分析报告" class="report-card">
      <pre class="report-content">{{ report }}</pre>
    </NCard>

    <div v-if="generating" class="loading-hint">
      <NSpin :show="true" />
      <span>AI 正在分析团队数据，请稍候...</span>
    </div>
  </div>
</template>

<style scoped>
.ai-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
}
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  padding-top: 20px;
}
.config-card {
  border: 1px solid var(--primary) !important;
  border-left: 4px solid var(--primary) !important;
}
.config-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.config-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.config-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}
.config-value {
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 500;
}

/* Action */
.action-card {
  text-align: center;
}
.action-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
}
.action-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

/* Report */
.report-card {
  border: 1px solid var(--primary) !important;
}
.report-content {
  font-family: 'Courier New', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--text-primary);
  white-space: pre-wrap;
  word-break: break-all;
  background: var(--bg-input);
  padding: 20px;
  border-radius: var(--radius-sm);
  overflow-x: auto;
}

.loading-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 0.9rem;
}
</style>