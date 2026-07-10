<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NCard, NForm, NFormItem, NInput, NButton, NAlert } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { useAuthStore } from '@/stores/auth'
import { apiLogin, apiRegister } from '@/api/backend'
import type { LoginRequest, RegisterRequest } from '@/api/types'

const router = useRouter()
const route = useRoute()
const message = useMessage()
const authStore = useAuthStore()

const isLogin = computed(() => route.name === 'login')
const title = computed(() => isLogin.value ? '登录' : '注册')

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
      const result = await apiLogin({ email: form.value.email, password: form.value.password })
      authStore.setAuth(result.token, result.user)
      message.success(`欢迎回来，${result.user.username}`)
    } else {
      const result = await apiRegister({
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
    <!-- 浮动几何装饰 -->
    <div class="floating-shapes">
      <div class="shape shape-1" />
      <div class="shape shape-2" />
      <div class="shape shape-3" />
      <div class="shape shape-4" />
      <div class="shape shape-5" />
      <div class="shape shape-6" />
    </div>
    <!-- 背景光晕 -->
    <div class="bg-glow bg-glow-1" />
    <div class="bg-glow bg-glow-2" />
    <div class="bg-glow bg-glow-3" />

    <div class="auth-container">
      <!-- 品牌 -->
      <div class="auth-brand">
        <div class="brand-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="20" width="8" height="24" rx="2" fill="url(#g1)" />
            <rect x="16" y="12" width="8" height="32" rx="2" fill="url(#g2)" />
            <rect x="28" y="4" width="8" height="40" rx="2" fill="url(#g3)" />
            <rect x="40" y="16" width="4" height="28" rx="2" fill="url(#g4)" />
            <defs>
              <linearGradient id="g1" x1="4" y1="20" x2="12" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6C5CE7"/><stop offset="1" stop-color="#A29BFE"/>
              </linearGradient>
              <linearGradient id="g2" x1="16" y1="12" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6C5CE7"/><stop offset="1" stop-color="#74B9FF"/>
              </linearGradient>
              <linearGradient id="g3" x1="28" y1="4" x2="36" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="#00B894"/><stop offset="1" stop-color="#55EFC4"/>
              </linearGradient>
              <linearGradient id="g4" x1="40" y1="16" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A29BFE"/><stop offset="1" stop-color="#6C5CE7"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 class="brand-title">FlowBoard</h1>
        <p class="brand-desc">轻量团队工作流看板</p>
      </div>

      <!-- 登录卡片 -->
      <NCard class="auth-card glass-card">
        <h2 class="auth-title">{{ title }}</h2>
        <p class="auth-subtitle">{{ isLogin ? '欢迎回来，请登录你的账号' : '创建一个新账号开始使用' }}</p>

        <NAlert v-if="error" type="error" :bordered="false" style="margin-bottom: 20px">
          {{ error }}
        </NAlert>

        <NForm ref="formRef" :model="form" :rules="rules" label-placement="top">
          <NFormItem v-if="!isLogin" label="用户名" path="username">
            <NInput
              v-model:value="form.username"
              placeholder="你的名字"
              :maxlength="20"
              clearable
              size="large"
            />
          </NFormItem>

          <NFormItem label="邮箱" path="email">
            <NInput
              v-model:value="form.email"
              placeholder="your@email.com"
              type="email"
              clearable
              size="large"
            />
          </NFormItem>

          <NFormItem label="密码" path="password">
            <NInput
              v-model:value="form.password"
              placeholder="••••••••"
              type="password"
              show-password-on="click"
              clearable
              size="large"
            />
          </NFormItem>

          <NFormItem v-if="!isLogin" label="确认密码" path="confirmPassword">
            <NInput
              v-model:value="form.confirmPassword"
              placeholder="再次输入密码"
              type="password"
              show-password-on="click"
              clearable
              size="large"
            />
          </NFormItem>

          <NButton
            type="primary"
            block
            :loading="loading"
            @click="handleSubmit"
            size="large"
            class="submit-btn"
          >
            {{ isLogin ? '登 录' : '注 册' }}
          </NButton>

          <div class="auth-switch">
            <span>{{ isLogin ? '还没有账号？' : '已有账号？' }}</span>
            <NButton text type="primary" @click="switchMode">
              {{ isLogin ? '立即注册' : '去登录' }}
            </NButton>
          </div>

          <div class="admin-entry">
            <router-link to="/admin/login" class="admin-link">管理员审计入口</router-link>
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
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 25%, #f8f9fc 50%, #eef2ff 75%, #f5f3ff 100%);
}

/* 浮动几何装饰 */
.floating-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.06;
}
.shape-1 {
  width: 300px; height: 300px;
  background: var(--primary);
  top: -80px; left: -60px;
  animation: floatShape 12s ease-in-out infinite;
}
.shape-2 {
  width: 200px; height: 200px;
  background: var(--info);
  top: 20%; right: -40px;
  animation: floatShape 15s ease-in-out infinite reverse;
}
.shape-3 {
  width: 140px; height: 140px;
  background: var(--success);
  bottom: 15%; left: 10%;
  border-radius: 30%;
  animation: floatShape 10s ease-in-out infinite 2s;
}
.shape-4 {
  width: 100px; height: 100px;
  background: var(--warning);
  top: 10%; left: 25%;
  border-radius: 20%;
  animation: floatShape 8s ease-in-out infinite 1s;
}
.shape-5 {
  width: 180px; height: 180px;
  background: var(--danger);
  bottom: 5%; right: 20%;
  opacity: 0.04;
  animation: floatShape 14s ease-in-out infinite 3s;
}
.shape-6 {
  width: 80px; height: 80px;
  background: var(--primary-light);
  top: 50%; left: 60%;
  border-radius: 16px;
  animation: floatShape 9s ease-in-out infinite 4s;
}

@keyframes floatShape {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  25% { transform: translate(20px, -30px) rotate(5deg) scale(1.1); }
  50% { transform: translate(-15px, 20px) rotate(-3deg) scale(0.95); }
  75% { transform: translate(25px, 10px) rotate(7deg) scale(1.05); }
}

/* 背景光晕 */
.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.bg-glow-1 {
  width: 400px; height: 400px;
  top: -100px; left: -100px;
  background: rgba(108, 92, 231, 0.08);
}
.bg-glow-2 {
  width: 350px; height: 350px;
  bottom: -80px; right: -80px;
  background: rgba(116, 185, 255, 0.06);
}
.bg-glow-3 {
  width: 250px; height: 250px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 184, 148, 0.04);
}

.auth-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

/* Brand */
.auth-brand {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.brand-icon {
  width: 56px;
  height: 56px;
  padding: 8px;
  border-radius: 16px;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 4px 20px rgba(108, 92, 231, 0.1);
}
.brand-icon svg {
  width: 100%;
  height: 100%;
}
.brand-title {
  font-size: 1.6rem;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.5px;
}
.brand-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin: 0;
  letter-spacing: 0.5px;
}

/* Card */
.auth-card {
  width: 400px;
  max-width: 90vw;
  padding: 4px;
}

.auth-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 4px;
  text-align: center;
}
.auth-subtitle {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin: 0 0 12px;
  text-align: center;
}

.submit-btn {
  margin-top: 4px;
  height: 44px;
  font-size: 0.95rem;
  letter-spacing: 2px;
}

.auth-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-top: 20px;
  font-size: 0.82rem;
  color: var(--text-muted);
}

.admin-entry {
  text-align: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}
.admin-link {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.admin-link:hover {
  color: #D63031;
}

.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  box-shadow: 0 8px 40px rgba(108, 92, 231, 0.08), 0 2px 8px rgba(0,0,0,0.04);
}
</style>