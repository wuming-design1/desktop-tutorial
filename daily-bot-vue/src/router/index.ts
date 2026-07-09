import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  { path:'/', name:'dashboard', component:()=>import('@/views/HomeView.vue'), meta:{title:'总览看板'} },
  { path:'/github', name:'github', component:()=>import('@/views/GitHubView.vue'), meta:{title:'代码动态'} },
  { path:'/feishu', name:'feishu', component:()=>import('@/views/FeishuView.vue'), meta:{title:'任务管理'} },
  { path:'/weather', name:'weather', component:()=>import('@/views/WeatherView.vue'), meta:{title:'天气预报'} },
  { path:'/ai', name:'ai', component:()=>import('@/views/AIView.vue'), meta:{title:'AI助手'} },
  { path:'/push', name:'push', component:()=>import('@/views/PushView.vue'), meta:{title:'消息推送'} },
  { path:'/reports', name:'reports', component:()=>import('@/views/ReportsView.vue'), meta:{title:'数据报表'} },
  { path:'/settings', name:'settings', component:()=>import('@/views/SettingsView.vue'), meta:{title:'系统设置'} },
]
export default createRouter({ history: createWebHashHistory(), routes, scrollBehavior() { return { top: 0 } } })