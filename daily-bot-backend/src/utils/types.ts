// 与前端共享的类型定义

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

export interface AuthResponse {
  user: User
  token: string
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

// 仪表板统计
export interface DashboardStats {
  commits: number
  commitsChange: number
  tasks: number
  urgentTasks: number
  activeMembers: number
  totalMembers: number
  coverage: number
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

export interface SummaryData {
  date: string
  summary: string
  highlights: string[]
  blockers: string[]
  stats: DashboardStats
  updates: TimelineItem[]
}

export interface HealthStatus {
  service: string
  status: 'healthy' | 'degraded' | 'down'
  latency: number
  uptime: number
  lastChecked: string
}

// 报表数据
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

export interface ReportData {
  commitTrend: TrendPoint[]
  prTrend: TrendPoint[]
  taskDistribution: PieSlice[]
  memberActivity: BarItem[]
  healthStatus: HealthStatus[]
}

// 凭证管理
export interface Credential {
  platform: string
  key: string
  value: string
  createdAt: string
  updatedAt: string
}

export interface CredentialSet {
  platform: string
  credentials: Record<string, string>
}