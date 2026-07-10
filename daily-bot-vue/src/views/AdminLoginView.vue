<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NButton, NInput, NForm, NFormItem, useMessage } from 'naive-ui'
import { apiAdminLogin } from '@/api/backend'

const router = useRouter()
const message = useMessage()

const form = ref({ email: '', password: '' })
const loading = ref(false)

const ADMIN_STORAGE_KEY = 'wfbot_admin_token'

async function handleLogin() {
  if (!form.value.email || !form.value.password) {
    message.warning('请填写完整信息')
    return
  }
  loading.value = true
  try {
    const result = await apiAdminLogin(form.value)
    localStorage.setItem(ADMIN_STORAGE_KEY, result.token)
    message.success('管理员登录成功')
    router.push('/admin/dashboard')
  } catch (e: any) {
    message.error(e?.response?.data?.error || '登录失败')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="admin-login">
    <div class="login-bg">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="login-card glass">
      <div class="card-header">
        <div class="logo-icon">
          <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
            <rect x="4" y="18" width="7" height="18" rx="2" fill="url(#al1)"/>
            <rect x="14" y="10" width="7" height="26" rx="2" fill="url(#al2)"/>
            <rect x="24" y="4" width="7" height="32" rx="2" fill="url(#al3)"/>
            <defs>
              <linearGradient id="al1" x1="4" y1="18" x2="11" y2="36"><stop stop-color="#E17055"/><stop offset="1" stop-color="#FAB1A0"/></linearGradient>
              <linearGradient id="al2" x1="14" y1="10" x2="21" y2="36"><stop stop-color="#D63031"/><stop offset="1" stop-color="#FF7675"/></linearGradient>
              <linearGradient id="al3" x1="24" y1="4" x2="31" y2="36"><stop stop-color="#E17055"/><stop offset="1" stop-color="#FDCB6E"/></linearGradient>
            </defs>
          </svg>
        </div>
        <h1>管理员审计入口</h1>
        <p class="subtitle">仅可查看注册用户列表，无法访问用户数据</p>
      </div>

      <NForm class="login-form">
        <NFormItem>
          <NInput
            v-model:value="form.email"
            placeholder="管理员邮箱"
            size="large"
            clearable
          />
        </NFormItem>
        <NFormItem>
          <NInput
            v-model:value="form.password"
            type="password"
            placeholder="管理员密码"
            size="large"
            show-password-on="click"
            @keyup.enter="handleLogin"
          />
        </NFormItem>
        <NFormItem>
          <NButton
            type="error"
            block
            size="large"
            :loading="loading"
            @click="handleLogin"
          >
            {{ loading ? '验证中...' : '进入审计面板' }}
          </NButton>
        </NFormItem>
      </NForm>

      <div class="card-footer">
        <router-link to="/login" class="back-link">返回用户登录</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--bg-base);
}
.login-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}
.shape-1 {
  width: 400px; height: 400px;
  background: #E17055;
  top: -100px; right: -100px;
}
.shape-2 {
  width: 300px; height: 300px;
  background: #D63031;
  bottom: -80px; left: -80px;
}
.shape-3 {
  width: 200px; height: 200px;
  background: #FDCB6E;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

.login-card {
  position: relative;
  width: 400px;
  max-width: 90vw;
  padding: 40px 32px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  box-shadow: 0 8px 40px rgba(0,0,0,0.12);
}
.card-header {
  text-align: center;
  margin-bottom: 28px;
}
.logo-icon {
  margin-bottom: 16px;
  display: inline-flex;
}
h1 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #D63031;
  margin: 0 0 6px;
}
.subtitle {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
}
.login-form {
  margin-top: 8px;
}
.card-footer {
  text-align: center;
  margin-top: 16px;
}
.back-link {
  font-size: 0.82rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.back-link:hover {
  color: var(--primary);
}
</style>