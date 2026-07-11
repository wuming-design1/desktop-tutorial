import Database from 'better-sqlite3';
import { env } from './env';
import { mkdirSync } from 'fs';
import { dirname } from 'path';
// 确保数据库目录存在
const dbDir = dirname(env.DB_PATH);
mkdirSync(dbDir, { recursive: true });
// 创建数据库连接
export const db = new Database(env.DB_PATH, {
    fileMustExist: false,
    timeout: 5000,
});
// 启用外键约束
db.pragma('foreign_keys = ON');
//  WAL 模式提升性能
db.pragma('journal_mode = WAL');
console.log('✅ 数据库连接已建立:', env.DB_PATH);
