import { db } from '../config/database';
export function rowToUser(row) {
    return {
        id: row.id,
        username: row.username,
        email: row.email,
        avatar: row.avatar || undefined,
        role: row.role,
        createdAt: row.created_at,
        lastLoginAt: row.last_login_at,
        settings: JSON.parse(row.settings || '{}'),
    };
}
export function findUserByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}
export function findUserById(id) {
    return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}
export function insertUser(user) {
    db.prepare(`
    INSERT INTO users (id, username, email, password, avatar, role, settings, created_at, last_login_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(user.id, user.username, user.email, user.password, user.avatar, user.role, user.settings, user.created_at, user.last_login_at);
}
export function updateLastLogin(email) {
    db.prepare("UPDATE users SET last_login_at = datetime('now') WHERE email = ?").run(email);
}
export function updateUserSettings(email, settings) {
    db.prepare('UPDATE users SET settings = ? WHERE email = ?').run(settings, email);
}
export function updateUserRole(email, role) {
    db.prepare('UPDATE users SET role = ? WHERE email = ?').run(role, email);
}
export function updateUserPassword(email, passwordHash) {
    db.prepare('UPDATE users SET password = ? WHERE email = ?').run(passwordHash, email);
}
export function updateUserAvatar(email, avatar) {
    db.prepare('UPDATE users SET avatar = ? WHERE email = ?').run(avatar, email);
}
export function deleteUserByEmail(email) {
    db.prepare('DELETE FROM users WHERE email = ?').run(email);
}
export function listAllUsers() {
    return db.prepare('SELECT * FROM users ORDER BY created_at DESC').all();
}
export function countAdmins() {
    return db.prepare("SELECT COUNT(*) as count FROM users WHERE role = 'admin'").get();
}
