<script setup lang="ts">
import { ref, computed } from 'vue'
import { NCard, NTag, NButton, useMessage } from 'naive-ui'
import axios from 'axios'
import { useCredStore } from '@/stores/credStore'

const credStore = useCredStore()
const message = useMessage()

const webhookUrl = computed(() => credStore.getCred('FEISHU_WEBHOOK_URL') || '')
const connected = computed(() => credStore.isConnected('webhook'))

const testing = ref(false)
const pushing = ref(false)
const pushResult = ref<'idle' | 'success' | 'error'>('idle')
const pushPreview = ref<any>(null)

async function testConnection() {
  if (!webhookUrl.value) {
    message.warning('请先填写 Webhook URL')
    return
  }
  testing.value = true
  try {
    await axios.post(webhookUrl.value, {
      msg_type: 'text',
      content: { text: '🔔 连接测试 - 团队工作流智能看板' },
    })
    message.success('连接成功，测试消息已发送')
  } catch (e: any) {
    message.error(`连接失败: ${e?.response?.data?.msg || e.message}`)
  } finally {
    testing.value = false
  }
}

async function simulatePush() {
  if (!webhookUrl.value) {
    message.warning('请先填写 Webhook URL')
    return
  }
  pushing.value = true
  pushResult.value = 'idle'
  pushPreview.value = null

  const previewCard = {
    title: '📊 每日工作流报告',
    date: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }),
    stats: [
      { label: '今日提交', value: '24 次' },
      { label: '任务完成', value: '85%' },
      { label: '活跃成员', value: '8 人' },
      { label: '代码审查', value: '12 次' },
    ],
    highlights: [
      '张三 完成了 dashboard 模块重构',
      'PR #128 已合并到 main 分支',
      '飞书审批单 #20240709-001 已通过',
    ],
  }

  try {
    await axios.post(webhookUrl.value, {
      msg_type: 'interactive',
      card: {
        header: {
          title: { tag: 'plain_text', content: '📊 每日工作流报告' },
          template: 'blue',
        },
        elements: [
          {
            tag: 'div',
            text: { tag: 'lark_md', content: `**日期:** ${previewCard.date}\n\n**今日提交:** 24 次 | **任务完成率:** 85%\n**活跃成员:** 8 人 | **代码审查:** 12 次\n\n---\n**🔥 亮点:**\n• 张三 完成了 dashboard 模块重构\n• PR #128 已合并到 main 分支\n• 飞书审批单 #20240709-001 已通过` },
          },
        ],
      },
    })
    pushResult.value = 'success'
    pushPreview.value = previewCard
    message.success('推送模拟成功')
  } catch (e: any) {
    pushResult.value = 'error'
    pushPreview.value = previewCard
    message.error(`推送失败: ${e?.response?.data?.msg || e.message}`)
  } finally {
    pushing.value = false
  }
}
</script>

<template>
  <div class="push-view">
    <h2 class="page-title">📨 消息推送</h2>

    <!-- Webhook Config -->
    <NCard title="Webhook 配置" class="config-card">
      <div class="config-row">
        <div class="config-item">
          <span class="config-label">连接状态</span>
          <NTag :type="connected ? 'success' : 'error'" size="small">
            {{ connected ? '已配置' : '未配置' }}
          </NTag>
        </div>
        <div class="config-item">
          <span class="config-label">Webhook URL</span>
          <span class="config-value">{{ webhookUrl ? webhookUrl.slice(0, 30) + '***' : '未设置' }}</span>
        </div>
        <NButton type="primary" :loading="testing" @click="testConnection" size="small">
          测试连接
        </NButton>
      </div>
    </NCard>

    <!-- Simulate Push -->
    <NCard class="action-card">
      <div class="action-row">
        <span class="action-desc">模拟推送每日工作流报告到飞书群</span>
        <NButton
          type="primary"
          :loading="pushing"
          @click="simulatePush"
          size="large"
        >
          {{ pushing ? '推送中...' : '📤 模拟推送' }}
        </NButton>
      </div>
    </NCard>

    <!-- Push Preview Card -->
    <NCard v-if="pushPreview" title="📋 推送预览" class="preview-card">
      <NTag :type="pushResult === 'success' ? 'success' : 'error'" size="small" class="result-tag">
        {{ pushResult === 'success' ? '推送成功' : '推送失败 (预览如下)' }}
      </NTag>

      <div class="preview-body">
        <div class="preview-header">
          <span class="preview-title">{{ pushPreview.title }}</span>
          <span class="preview-date">{{ pushPreview.date }}</span>
        </div>

        <div class="preview-stats">
          <div v-for="s in pushPreview.stats" :key="s.label" class="preview-stat">
            <span class="stat-label">{{ s.label }}</span>
            <span class="stat-value">{{ s.value }}</span>
          </div>
        </div>

        <div class="preview-highlights">
          <span class="highlights-title">🔥 亮点</span>
          <ul>
            <li v-for="(h, i) in pushPreview.highlights" :key="i">{{ h }}</li>
          </ul>
        </div>
      </div>
    </NCard>
  </div>
</template>

<style scoped>
.push-view {
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
  font-size: 0.82rem;
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

/* Preview */
.preview-card {
  border: 1px solid var(--primary) !important;
}
.result-tag {
  margin-bottom: 16px;
}
.preview-body {
  background: var(--bg-input);
  border-radius: var(--radius-sm);
  padding: 20px;
}
.preview-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}
.preview-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}
.preview-date {
  font-size: 0.82rem;
  color: var(--text-muted);
}
.preview-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}
.preview-stat {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
}
.stat-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}
.preview-highlights {
  border-top: 1px solid var(--border);
  padding-top: 12px;
}
.highlights-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--warning);
  display: block;
  margin-bottom: 6px;
}
.preview-highlights ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.preview-highlights li {
  font-size: 0.85rem;
  color: var(--text-secondary);
  padding-left: 12px;
  position: relative;
}
.preview-highlights li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary);
}

@media (max-width: 500px) {
  .preview-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>