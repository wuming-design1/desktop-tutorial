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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// 路由守卫
router.beforeEach((to, _from) => {
  const authStore = useAuthStore()

  // 需要认证的路由
  if (to.meta.requiresAuth) {
    if (!authStore.isAuthenticated) {
      // 检查 localStorage 中是否有 token
      const token = localStorage.getItem('wfbot_auth_token')
      if (token) {
        const user = JSON.parse(localStorage.getItem('wfbot_auth_user') || 'null')
        if (user) {
          authStore.setAuth(token, user)
          return true
        }
      }
      return { name: 'login', query: { redirect: to.fullPath } }
    }
  }

  // 已登录用户访问登录/注册页，重定向到首页
  if (to.meta.guest && authStore.isAuthenticated) {
    return { name: 'dashboard' }
  }

  return true
})

export default router