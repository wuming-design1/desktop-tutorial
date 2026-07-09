<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NCard, NForm, NFormItem, NInput, NButton, NAlert, NSpace, NDivider } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { useAuthStore } from '@/stores/auth'
import { login, register } from '@/api/auth'

const router = useRouter()
const route = useRoute()
const message = useMessage()
const authStore = useAuthStore()

const isLogin = computed(() => route.name === 'login')
const title = computed(() => isLogin.value ? '登录' : '注册')
const subtitle = computed(() => isLogin.value ? '欢迎回来' : '创建新账号')

const formRef = ref()
const loading = ref(false)
const error = ref('')

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 20, message: '用户名长度 2-20 个字符', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email' as const, message: '请输入有效的邮箱', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码至少 6 位', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (_: unknown, value: string) => value === form.value.password,
      message: '两次密码不一致',
      trigger: 'blur',
    },
  ],
}

async function handleSubmit() {
  error.value = ''
  try {
    await formRef.value?.validate()
  } catch {
    return
  }

  loading.value = true
  try {
    if (isLogin.value) {
      const result = await login({ email: form.value.email, password: form.value.password })
      authStore.setAuth(result.token, result.user)
      message.success(`欢迎回来，${result.user.username}`)
    } else {
      const result = await register({
        username: form.value.username,
        email: form.value.email,
        password: form.value.password,
      })
      authStore.setAuth(result.token, result.user)
      message.success(`注册成功，欢迎 ${result.user.username}`)
    }
    const redirect = (route.query.redirect as string) || '/'
    router.replace(redirect)
  } catch (e: any) {
    error.value = e.message || '操作失败，请重试'
  } finally {
    loading.value = false
  }
}

function switchMode() {
  error.value = ''
  if (isLogin.value) {
    router.push({ name: 'register', query: route.query })
  } else {
    router.push({ name: 'login', query: route.query })
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-bg">
      <div class="bg-glow bg-glow-1" />
      <div class="bg-glow bg-glow-2" />
    </div>
    <div class="auth-container">
      <div class="auth-brand">
        <h1 class="brand-title">📊 团队智能看板</h1>
        <p class="brand-desc">多源数据聚合 · 实时追踪 · 智能分析</p>
      </div>
      <NCard class="auth-card glass-card">
        <h2 class="auth-title">{{ title }}</h2>
        <p class="auth-subtitle">{{ subtitle }}</p>
        <NDivider style="margin: 12px 0" />

        <NAlert v-if="error" type="error" :bordered="false" style="margin-bottom: 16px">
          {{ error }}
        </NAlert>

        <NForm ref="formRef" :model="form" :rules="rules" label-placement="top">
          <NFormItem v-if="!isLogin" label="用户名" path="username">
            <NInput
              v-model:value="form.username"
              placeholder="请输入用户名"
              :maxlength="20"
              clearable
            >
              <template #prefix>👤</template>
            </NInput>
          </NFormItem>

          <NFormItem label="邮箱" path="email">
            <NInput
              v-model:value="form.email"
              placeholder="请输入邮箱"
              type="email"
              clearable
            >
              <template #prefix>📧</template>
            </NInput>
          </NFormItem>

          <NFormItem label="密码" path="password">
            <NInput
              v-model:value="form.password"
              placeholder="请输入密码"
              type="password"
              show-password-on="click"
              clearable
            >
              <template #prefix>🔒</template>
            </NInput>
          </NFormItem>

          <NFormItem v-if="!isLogin" label="确认密码" path="confirmPassword">
            <NInput
              v-model:value="form.confirmPassword"
              placeholder="请再次输入密码"
              type="password"
              show-password-on="click"
              clearable
            >
              <template #prefix>🔒</template>
            </NInput>
          </NFormItem>

          <NButton
            type="primary"
            block
            :loading="loading"
            @click="handleSubmit"
            size="large"
            style="margin-top: 8px"
          >
            {{ isLogin ? '登录' : '注册' }}
          </NButton>

          <div class="auth-switch">
            <span>{{ isLogin ? '没有账号？' : '已有账号？' }}</span>
            <NButton text type="primary" @click="switchMode">
              {{ isLogin ? '立即注册' : '去登录' }}
            </NButton>
          </div>
        </NForm>
      </NCard>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--bg-body);
}

.auth-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.bg-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
}
.bg-glow-1 {
  top: -100px;
  left: -100px;
  background: var(--primary);
}
.bg-glow-2 {
  bottom: -100px;
  right: -100px;
  background: var(--info);
}

.auth-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.auth-brand {
  text-align: center;
}
.brand-title {
  font-size: 2rem;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}
.brand-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 4px;
}

.auth-card {
  width: 420px;
  max-width: 90vw;
  padding: 8px;
}

.auth-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}
.auth-subtitle {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 4px 0 0;
}

.auth-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
}
</style>