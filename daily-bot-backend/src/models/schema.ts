import { db } from '../config/database'

export function initDatabase(): void {
  console.log('📦 初始化数据库表...')

  db.exec(`
    -- 用户表
    CREATE TABLE IF NOT EXISTS users (
      id          TEXT PRIMARY KEY,
      username    TEXT NOT NULL,
      email       TEXT NOT NULL UNIQUE,
      password    TEXT NOT NULL,
      avatar      TEXT,
      role        TEXT NOT NULL DEFAULT 'member' CHECK(role IN ('admin','member','viewer')),
      settings    TEXT NOT NULL DEFAULT '{}',
      created_at   TEXT NOT NULL DEFAULT (datetime('now')),
      last_login_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- 用户凭证表（加密存储各个平台的 API Key/Token）
    CREATE TABLE IF NOT EXISTS credentials (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id      TEXT NOT NULL,
      platform    TEXT NOT NULL,           -- github, feishu, weather, ai, webhook
      key         TEXT NOT NULL,           -- 环境变量名，如 GITHUB_TOKEN
      value       TEXT NOT NULL,           -- 加密后的值
      created_at   TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at   TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      UNIQUE(user_id, platform, key)
    );

    -- 索引
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    CREATE INDEX IF NOT EXISTS idx_credentials_user ON credentials(user_id);
    CREATE INDEX IF NOT EXISTS idx_credentials_platform ON credentials(user_id, platform);
  `)

  console.log('✅ 数据库表初始化完成')
}