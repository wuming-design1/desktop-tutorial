<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import { NCard, NTable, NButton, NInput, NSpace, NModal, NTag, NAlert, useMessage } from 'naive-ui'
import { useAuthStore } from '@/stores/auth'
import { listUsers, deleteUser, resetUserPassword } from '@/api/auth'
import type { User } from '@/api/types'

const authStore = useAuthStore()
const message = useMessage()

const loading = ref(false)
const users = ref<User[]>([])
const showDeleteModal = ref(false)
const showResetModal = ref(false)
const deletingUser = ref<User | null>(null)
const resettingUser = ref<User | null>(null)
const newPassword = ref('')

const roleTags: Record<string, { label: string; type: 'error' | 'primary' | 'default' }> = {
  admin: { label: '管理员', type: 'error' },
  member: { label: '成员', type: 'primary' },
  viewer: { label: '观察者', type: 'default' },
}

const columns = [
  { key: 'id', title: 'ID', width: 120 },
  { key: 'username', title: '用户名', width: 120 },
  { key: 'email', title: '邮箱', width: 180 },
  {
    key: 'role',
    title: '角色',
    width: 100,
    render(row: User) {
      const t = roleTags[row.role] || { label: row.role, type: 'default' as const }
      return h(NTag, { type: t.type, size: 'small' }, () => t.label)
    },
  },
  {
    key: 'actions',
    title: '操作',
    width: 200,
    render(row: User) {
      return h('div', { class: 'actions' }, [
        h(NButton, {
          size: 'small',
          type: 'default',
          onClick: () => {
            resettingUser.value = row
            showResetModal.value = true
          },
        }, () => '重置密码'),
        h(NButton, {
          size: 'small',
          type: 'error',
          style: { marginLeft: '8px' },
          onClick: () => {
            deletingUser.value = row
            showDeleteModal.value = true
          },
        }, () => '删除'),
      ])
    },
  },
]

async function loadUsers() {
  loading.value = true
  try {
    users.value = await listUsers()
  } catch (e: any) {
    message.error(e.message)
  } finally {
    loading.value = false
  }
}

function confirmDelete() {
  if (!deletingUser.value) return
  doDelete(deletingUser.value.email)
}

async function doDelete(email: string) {
  try {
    await deleteUser(email)
    message.success(`用户 ${email} 已删除`)
    await loadUsers()
  } catch (e: any) {
    message.error(e.message)
  } finally {
    showDeleteModal.value = false
    deletingUser.value = null
  }
}

function confirmResetPassword() {
  if (!resettingUser.value || !newPassword.value.trim()) {
    message.warning('请填写新密码')
    return
  }
  doResetPassword(resettingUser.value.email, newPassword.value)
}

async function doResetPassword(email: string, pwd: string) {
  try {
    await resetUserPassword(email, pwd)
    message.success(`用户 ${email} 密码已重置`)
    newPassword.value = ''
    await loadUsers()
  } catch (e: any) {
    message.error(e.message)
  } finally {
    showResetModal.value = false
    resettingUser.value = null
  }
}

onMounted(() => {
  loadUsers()
})
</script>

<template>
  <div class="users-view">
    <h2 class="page-title">👥 用户管理 (管理员)</h2>

    <NAlert type="info" :bordered="false" style="margin-bottom: 20px">
      <template #header>
        当前登录：{{ authStore.user?.username }} ({{ authStore.user?.role === 'admin' ? '管理员' : authStore.user?.role === 'member' ? '成员' : '观察者' }})
      </template>
    </NAlert>

    <NCard class="users-card">
      <NTable :columns="columns" :data="users" :loading="loading" />
    </NCard>

    <!-- 删除确认 -->
    <NModal v-model:show="showDeleteModal" preset="confirm" title="确认删除用户" content="此操作不可撤销，请确认删除？" @positive-click="confirmDelete" />

    <!-- 重置密码 -->
    <NModal v-model:show="showResetModal" preset="card" title="重置用户密码">
      <div class="reset-content">
        <div class="reset-info">
          <b>{{ resettingUser?.email }}</b>
        </div>
        <NInput
          v-model:value="newPassword"
          type="password"
          placeholder="输入新密码"
          show-password-on="click"
        />
      </div>
      <template #footer>
        <NSpace justify="end">
          <NButton @click="confirmResetPassword" type="primary">确认重置</NButton>
        </NSpace>
      </template>
    </NModal>
  </div>
</template>

<style scoped>
.users-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  padding-top: 20px;
}

.users-card {
  border-radius: var(--radius);
}

.actions {
  display: flex;
  gap: 8px;
}

.reset-content {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 8px 0;
}

.reset-info {
  padding: 4px 0;
}
</style>
