import { db } from '../config/database'
import { encrypt, decrypt } from '../utils/encryption'

export interface CredentialRow {
  id: number
  user_id: string
  platform: string
  key: string
  value: string // encrypted
  created_at: string
  updated_at: string
}

export function saveCredential(userId: string, platform: string, key: string, plainValue: string): void {
  const encrypted = encrypt(plainValue)
  db.prepare(`
    INSERT INTO credentials (user_id, platform, key, value, updated_at)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, platform, key) DO UPDATE SET
      value = excluded.value,
      updated_at = datetime('now')
  `).run(userId, platform, key, encrypted)
}

export function saveCredentialsBatch(userId: string, platform: string, creds: Record<string, string>): void {
  const save = db.prepare(`
    INSERT INTO credentials (user_id, platform, key, value, updated_at)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, platform, key) DO UPDATE SET
      value = excluded.value,
      updated_at = datetime('now')
  `)

  const txn = db.transaction(() => {
    for (const [key, plainValue] of Object.entries(creds)) {
      if (plainValue && plainValue.trim()) {
        save.run(userId, platform, key, encrypt(plainValue.trim()))
      }
    }
  })
  txn()
}

export function getCredentials(userId: string, platform?: string): Record<string, string> {
  let rows: CredentialRow[]
  if (platform) {
    rows = db.prepare('SELECT * FROM credentials WHERE user_id = ? AND platform = ?')
      .all(userId, platform) as CredentialRow[]
  } else {
    rows = db.prepare('SELECT * FROM credentials WHERE user_id = ?')
      .all(userId) as CredentialRow[]
  }

  const result: Record<string, string> = {}
  for (const row of rows) {
    try {
      result[row.key] = decrypt(row.value)
    } catch {
      // 解密失败，跳过
    }
  }
  return result
}

export function deleteCredential(userId: string, platform: string, key: string): void {
  db.prepare('DELETE FROM credentials WHERE user_id = ? AND platform = ? AND key = ?')
    .run(userId, platform, key)
}

export function deletePlatformCredentials(userId: string, platform: string): void {
  db.prepare('DELETE FROM credentials WHERE user_id = ? AND platform = ?')
    .run(userId, platform)
}

export function getUserPlatforms(userId: string): string[] {
  const rows = db.prepare('SELECT DISTINCT platform FROM credentials WHERE user_id = ?')
    .all(userId) as { platform: string }[]
  return rows.map(r => r.platform)
}