export interface SummaryData {
  date: string
  summary: string
  highlights: string[]
  blockers: string[]
  stats: DashboardStats
  updates: TimelineItem[]
}

export interface DashboardStats {
  commits: number
  commitsChange: number
  tasks: number
  urgentTasks: number
  activeMembers: number
  totalMembers: number
  coverage: number
  // 真实 API 模式扩展字段
  taskRate?: number
  members?: number
  changes?: number
  activeRepos?: number
  newIssues?: number
  closedIssues?: number
  reviews?: number
  releases?: number
}

export interface TimelineItem {
  id: string
  time: string
  source: 'github' | 'feishu' | 'ai' | 'system'
  author: string
  avatar?: string
  content: string
  detail?: string
  status?: 'pending' | 'done' | 'review' | 'closed'
  url?: string
}

export interface HealthStatus {
  service: string
  status: 'healthy' | 'degraded' | 'down'
  latency: number
  uptime: number
  lastChecked: string
}

export interface TrendPoint {
  date: string
  value: number
}

export interface PieSlice {
  name: string
  value: number
  color?: string
}

export interface BarItem {
  name: string
  value: number
  avatar?: string
}

// 飞书任务管理
export interface FeishuTask {
  id: string
  summary: string
  description?: string
  status: 'not_started' | 'in_progress' | 'completed'
  completedAt: string | null
  createdAt: string
  updatedAt: string
  creator: { id: string; name: string; avatar?: string }
  assignees: { id: string; name: string; avatar?: string }[]
  followers: { id: string; name: string; avatar?: string }[]
  origin?: { platform: string; url: string; custom_complete?: boolean }
  dueDate?: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
}

export interface FeishuTaskList {
  total: number
  tasks: FeishuTask[]
}

// 用户认证
export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  role: 'admin' | 'member' | 'viewer'
  createdAt: string
  lastLoginAt: string
  settings: UserSettings
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'system'
  refreshInterval: 30 | 60 | 120 | 0
  cardLayout: string[]
  notifications: {
    email: boolean
    browser: boolean
    sound: boolean
  }
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  username: string
  email: string
  password: string
}

export interface AuthResponse {
  user: User
  token: string
}