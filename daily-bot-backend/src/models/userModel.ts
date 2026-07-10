import { db } from '../config/database'
import type { User } from '../utils/types'

export interface UserRow {
  id: string
  username: string
  email: string
  password: string
  avatar: string | null
  role: 'admin' | 'member' | 'viewer'
  settings: string
  created_at: string
  last_login_at: string
}

export function rowToUser(row: UserRow): User {
  return {
    id: row.id,
    username: row.username,
    email: row.email,
    avatar: row.avatar || undefined,
    role: row.role,
    createdAt: row.created_at,
    lastLoginAt: row.last_login_at,
    settings: JSON.parse(row.settings || '{}'),
  }
}

export function findUserByEmail(email: string): UserRow | undefined {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email) as UserRow | undefined
}

export function findUserById(id: string): UserRow | undefined {
  return db.prepare('SELECT * FROM users WHERE id = ?').get(id) as UserRow | undefined
}

export function insertUser(user: UserRow): void {
  db.prepare(`
    INSERT INTO users (id, username, email, password, avatar, role, settings, created_at, last_login_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(user.id, user.username, user.email, user.password, user.avatar, user.role, user.settings, user.created_at, user.last_login_at)
}

export function updateLastLogin(email: string): void {
  db.prepare("UPDATE users SET last_login_at = datetime('now') WHERE email = ?").run(email)
}

export function updateUserSettings(email: string, settings: string): void {
  db.prepare('UPDATE users SET settings = ? WHERE email = ?').run(settings, email)
}

export function updateUserRole(email: string, role: string): void {
  db.prepare('UPDATE users SET role = ? WHERE email = ?').run(role, email)
}

export function updateUserPassword(email: string, passwordHash: string): void {
  db.prepare('UPDATE users SET password = ? WHERE email = ?').run(passwordHash, email)
}

export function deleteUserByEmail(email: string): void {
  db.prepare('DELETE FROM users WHERE email = ?').run(email)
}

export function listAllUsers(): UserRow[] {
  return db.prepare('SELECT * FROM users ORDER BY created_at DESC').all() as UserRow[]
}

export function countAdmins(): number {
  return db.prepare("SELECT COUNT(*) as count FROM users WHERE role = 'admin'").get() as { count: number } as unknown as number
}