import http from './index'
import type { User, AuthResponse, LoginRequest, RegisterRequest, SummaryData, ReportData, DashboardStats } from './types'

// ========== 认证 ==========

export async function apiRegister(req: RegisterRequest): Promise<AuthResponse> {
  const res = await http.post<AuthResponse>('/auth/register', req)
  return res.data
}

export async function apiLogin(req: LoginRequest): Promise<AuthResponse> {
  const res = await http.post<AuthResponse>('/auth/login', req)
  return res.data
}

export async function apiLogout(): Promise<void> {
  await http.post('/auth/logout')
}

export async function apiMe(): Promise<User> {
  const res = await http.get<User>('/auth/me')
  return res.data
}

export async function apiRefreshToken(): Promise<{ token: string }> {
  const res = await http.post<{ token: string }>('/auth/refresh')
  return res.data
}

export async function apiUpdateSettings(settings: Partial<User['settings']>): Promise<User> {
  const res = await http.patch<User>('/auth/settings', settings)
  return res.data
}

// ========== 用户管理（管理员） ==========

export async function apiListUsers(): Promise<User[]> {
  const res = await http.get<User[]>('/users')
  return res.data
}

export async function apiDeleteUser(email: string): Promise<{ success: boolean }> {
  await http.delete(`/users/${email}`)
  return { success: true }
}

export async function apiResetPassword(email: string, password: string): Promise<{ success: boolean }> {
  await http.post(`/users/${email}/reset-password`, { password })
  return { success: true }
}

export async function apiUpdateUserRole(email: string, role: User['role']): Promise<User> {
  const res = await http.patch<User>(`/users/${email}/role`, { role })
  return res.data
}

// ========== 凭证管理 ==========

export async function apiGetCredentials(platform?: string): Promise<{
  credentials: Record<string, string>
  platforms?: Record<string, { connected: boolean }>
}> {
  const url = platform ? `/credentials/${platform}` : '/credentials'
  const res = await http.get(url)
  return res.data
}

export async function apiSaveCredentials(platform: string, creds: Record<string, string>): Promise<{ success: boolean }> {
  await http.put(`/credentials/${platform}`, creds)
  return { success: true }
}

export async function apiDeleteCredential(platform: string, key: string): Promise<{ success: boolean }> {
  await http.delete(`/credentials/${platform}/${key}`)
  return { success: true }
}

export async function apiDeletePlatform(platform: string): Promise<{ success: boolean }> {
  await http.delete(`/credentials/${platform}`)
  return { success: true }
}

// ========== 仪表板数据 ==========

export async function apiGetSummary(): Promise<SummaryData> {
  const res = await http.get<SummaryData>('/dashboard/summary')
  return res.data
}

export async function apiGetReports(): Promise<ReportData> {
  const res = await http.get<ReportData>('/dashboard/reports')
  return res.data
}

// ========== 健康检查 ==========

export async function apiHealthCheck(): Promise<{
  status: string
  uptime: number
  timestamp: string
}> {
  const res = await http.get('/health')
  return res.data
}

// ========== 消息推送 ==========

export async function apiPushTest(): Promise<{ success: boolean }> {
  const res = await http.post('/push/test')
  return res.data
}

export async function apiPushSend(): Promise<{
  success: boolean
  preview: {
    date: string
    stats: { label: string; value: string }[]
    summary: string
    highlights: string[]
  } | null
  error?: string
}> {
  const res = await http.post('/push/send')
  return res.data
}