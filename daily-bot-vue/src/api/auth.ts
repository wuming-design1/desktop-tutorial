import type { User, LoginRequest, RegisterRequest, AuthResponse } from './types'

// ====== Mock 认证服务 ======
// 模拟后端 API，数据存储在 localStorage

const USERS_KEY = 'wfbot_registered_users'
const JWT_SECRET = 'wfbot-demo-secret-key-2024'

// 简易 Base64 编解码（避免 jsonwebtoken 库在浏览器端的问题）
function b64Encode(str: string): string {
  return btoa(unescape(encodeURIComponent(str)))
}

function b64Decode(str: string): string {
  return decodeURIComponent(escape(atob(str)))
}

// 生成简易 JWT（Header.Payload.Signature）
function generateToken(payload: { userId: string; email: string; role: string; iat: number; exp: number }): string {
  const header = b64Encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const body = b64Encode(JSON.stringify(payload))
  const signature = b64Encode(JWT_SECRET + '.' + body) // 简易签名
  return `${header}.${body}.${signature}`
}

// 验证 Token
function verifyToken(tok: string): { userId: string; email: string; role: string } | null {
  try {
    const parts = tok.split('.')
    if (parts.length !== 3) return null
    const payload = JSON.parse(b64Decode(parts[1]))
    if (payload.exp < Date.now() / 1000) return null
    return { userId: payload.userId, email: payload.email, role: payload.role }
  } catch {
    return null
  }
}

// 获取存储的用户列表
function getUsers(): Record<string, { user: User; passwordHash: string }> {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveUsers(users: Record<string, { user: User; passwordHash: string }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

// 简易哈希（演示用）
async function hashPassword(password: string): Promise<string> {
  const { default: bcrypt } = await import('bcryptjs')
  return bcrypt.hashSync(password, 8)
}

async function comparePassword(password: string, hash: string): Promise<boolean> {
  const { default: bcrypt } = await import('bcryptjs')
  return bcrypt.compareSync(password, hash)
}

// 获取当前用户
export async function getMe(): Promise<User | null> {
  const token = localStorage.getItem('wfbot_auth_token')
  if (!token) return null
  const decoded = verifyToken(token)
  if (!decoded) return null
  const users = getUsers()
  const entry = users[decoded.email]
  return entry ? entry.user : null
}

// 注册
export async function register(req: RegisterRequest): Promise<AuthResponse> {
  await new Promise(r => setTimeout(r, 500)) // 模拟网络延迟

  const users = getUsers()
  if (users[req.email]) {
    throw new Error('该邮箱已被注册')
  }

  const now = new Date().toISOString()
  const passwordHash = await hashPassword(req.password)
  const user: User = {
    id: 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
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

  users[req.email] = { user, passwordHash }
  saveUsers(users)

  const token = generateToken({
    userId: user.id, email: user.email, role: user.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 86400 * 7, // 7天
  })

  return { user, token }
}

// 登录
export async function login(req: LoginRequest): Promise<AuthResponse> {
  await new Promise(r => setTimeout(r, 400))

  const users = getUsers()
  const entry = users[req.email]
  if (!entry) {
    throw new Error('账号或密码错误')
  }

  const valid = await comparePassword(req.password, entry.passwordHash)
  if (!valid) {
    throw new Error('账号或密码错误')
  }

  // 更新最后登录时间
  entry.user.lastLoginAt = new Date().toISOString()
  users[req.email] = entry
  saveUsers(users)

  const token = generateToken({
    userId: entry.user.id, email: entry.user.email, role: entry.user.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 86400 * 7,
  })

  return { user: entry.user, token }
}

// 退出
export async function logout(): Promise<void> {
  await new Promise(r => setTimeout(r, 200))
}

// 刷新 Token
export async function refreshToken(): Promise<{ token: string } | null> {
  const currentToken = localStorage.getItem('wfbot_auth_token')
  if (!currentToken) return null
  const decoded = verifyToken(currentToken)
  if (!decoded) return null

  const newToken = generateToken({
    userId: decoded.userId, email: decoded.email, role: decoded.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 86400 * 7,
  })

  return { token: newToken }
}

// 验证 Token 是否有效
export function isTokenValid(): boolean {
  const token = localStorage.getItem('wfbot_auth_token')
  if (!token) return false
  const decoded = verifyToken(token)
  return decoded !== null
}

// 更新用户设置
export async function updateUserSettings(
  email: string,
  settings: Record<string, unknown>
): Promise<User | null> {
  await new Promise(r => setTimeout(r, 300))
  const users = getUsers()
  const entry = users[email]
  if (!entry) return null
  entry.user.settings = { ...entry.user.settings, ...settings }
  users[email] = entry
  saveUsers(users)
  return entry.user
}