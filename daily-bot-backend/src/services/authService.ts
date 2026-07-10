import bcrypt from 'bcryptjs'
import { findUserByEmail, findUserById, insertUser, updateLastLogin, updateUserSettings, updateUserRole, updateUserPassword, deleteUserByEmail, listAllUsers, rowToUser, countAdmins } from '../models/userModel'
import { signToken } from '../utils/jwt'
import { AppError } from '../middleware/errorHandler'
import type { User, AuthResponse, LoginRequest, RegisterRequest } from '../utils/types'

function generateId(): string {
  return 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
}

export async function register(req: RegisterRequest): Promise<AuthResponse> {
  const existing = findUserByEmail(req.email)
  if (existing) {
    throw new AppError(409, '该邮箱已被注册')
  }

  const now = new Date().toISOString()
  const passwordHash = await bcrypt.hash(req.password, 10)

  const user: User = {
    id: generateId(),
    username: req.username,
    email: req.email,
    role: 'member',
    createdAt: now,
    lastLoginAt: now,
    settings: {
      theme: 'system',
      refreshInterval: 60,
      cardLayout: ['metrics', 'summary', 'timeline', 'charts', 'health'],
      notifications: { email: true, browser: true, sound: false },
    },
  }

  insertUser({
    id: user.id,
    username: user.username,
    email: user.email,
    password: passwordHash,
    avatar: user.avatar || null,
    role: user.role,
    settings: JSON.stringify(user.settings),
    created_at: user.createdAt,
    last_login_at: user.lastLoginAt,
  })

  const token = signToken({ userId: user.id, email: user.email, role: user.role })

  return { user, token }
}

export async function login(req: LoginRequest): Promise<AuthResponse> {
  const row = findUserByEmail(req.email)
  if (!row) {
    throw new AppError(401, '账号或密码错误')
  }

  const valid = await bcrypt.compare(req.password, row.password)
  if (!valid) {
    throw new AppError(401, '账号或密码错误')
  }

  updateLastLogin(req.email)
  const user = rowToUser({ ...row, last_login_at: new Date().toISOString() })

  const token = signToken({ userId: user.id, email: user.email, role: user.role })

  return { user, token }
}

export function getMe(userId: string): User | null {
  const row = findUserById(userId)
  if (!row) return null
  return rowToUser(row)
}

export function refreshTokenInternal(userId: string, email: string, role: string): { token: string } {
  const token = signToken({ userId, email, role })
  return { token }
}

export function updateSettings(email: string, settings: Record<string, unknown>): User | null {
  const row = findUserByEmail(email)
  if (!row) return null

  const current = JSON.parse(row.settings || '{}')
  const merged = { ...current, ...settings }
  updateUserSettings(email, JSON.stringify(merged))
  return rowToUser({ ...row, settings: JSON.stringify(merged) })
}

// 管理员功能
export function listUsers(): User[] {
  return listAllUsers().map(rowToUser)
}

export function deleteUser(email: string): void {
  const row = findUserByEmail(email)
  if (!row) throw new AppError(404, '用户不存在')

  if (row.role === 'admin') {
    const adminCount = countAdmins()
    if (adminCount <= 1) throw new AppError(400, '不能删除唯一的管理员账号')
  }

  deleteUserByEmail(email)
}

export function resetPassword(email: string, newPassword: string): void {
  const row = findUserByEmail(email)
  if (!row) throw new AppError(404, '用户不存在')

  const hash = bcrypt.hashSync(newPassword, 10)
  updateUserPassword(email, hash)
}

export function changeRole(email: string, role: string): User | null {
  const row = findUserByEmail(email)
  if (!row) throw new AppError(404, '用户不存在')

  if (role !== 'admin' && row.role === 'admin') {
    const adminCount = countAdmins() as unknown as number
    if (adminCount <= 1) throw new AppError(400, '不能移除唯一的管理员权限')
  }

  updateUserRole(email, role)
  return rowToUser({ ...row, role: role as User['role'] })
}

// 初始化种子数据（首次启动时创建管理员账号）
export async function seedAdmin(): Promise<void> {
  const existing = findUserByEmail('admin@demo.com')
  if (existing) return

  console.log('🔧 创建默认管理员账号: admin@demo.com / 123456')
  const passwordHash = await bcrypt.hash('123456', 10)
  const now = new Date().toISOString()

  insertUser({
    id: 'admin_seed_001',
    username: 'Admin',
    email: 'admin@demo.com',
    password: passwordHash,
    avatar: null,
    role: 'admin',
    settings: JSON.stringify({
      theme: 'system',
      refreshInterval: 60,
      cardLayout: ['metrics', 'summary', 'timeline', 'charts', 'health'],
      notifications: { email: true, browser: true, sound: false },
    }),
    created_at: now,
    last_login_at: now,
  })
}