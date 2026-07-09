import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/AuthView.vue'),
    meta: { title: '登录', guest: true },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/AuthView.vue'),
    meta: { title: '注册', guest: true },
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '总览看板', requiresAuth: true },
  },
  {
    path: '/github',
    name: 'github',
    component: () => import('@/views/GitHubView.vue'),
    meta: { title: '代码动态', requiresAuth: true },
  },
  {
    path: '/feishu',
    name: 'feishu',
    component: () => import('@/views/FeishuView.vue'),
    meta: { title: '任务管理', requiresAuth: true },
  },
  {
    path: '/weather',
    name: 'weather',
    component: () => import('@/views/WeatherView.vue'),
    meta: { title: '天气预报', requiresAuth: true },
  },
  {
    path: '/ai',
    name: 'ai',
    component: () => import('@/views/AIView.vue'),
    meta: { title: 'AI助手', requiresAuth: true },
  },
  {
    path: '/push',
    name: 'push',
    component: () => import('@/views/PushView.vue'),
    meta: { title: '消息推送', requiresAuth: true },
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import('@/views/ReportsView.vue'),
    meta: { title: '数据报表', requiresAuth: true },
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/SettingsView.vue'),
    meta: { title: '系统设置', requiresAuth: true },
  },
  {
    path: '/admin/users',
    name: 'admin_users',
    component: () => import('@/views/UsersAdminView.vue'),
    meta: { title: '用户管理', requiresAuth: true, requiresAdmin: true },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// 路由守卫：每次进入网站必须登录，不依赖 localStorage 持久化
router.beforeEach((to, _from) => {
  const authStore = useAuthStore()

  // 需要认证的路由 → 未登录则跳转登录页
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  // 需要管理员权限
  if (to.meta.requiresAuth && to.meta.requiresAdmin && !authStore.isAdmin) {
    return { name: 'dashboard' }
  }

  return true
})

export default router