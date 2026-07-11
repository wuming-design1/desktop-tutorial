import { db } from '../config/database';
import { encrypt, decrypt } from '../utils/encryption';
export function saveCredential(userId, platform, key, plainValue) {
    const encrypted = encrypt(plainValue);
    db.prepare(`
    INSERT INTO credentials (user_id, platform, key, value, updated_at)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, platform, key) DO UPDATE SET
      value = excluded.value,
      updated_at = datetime('now')
  `).run(userId, platform, key, encrypted);
}
export function saveCredentialsBatch(userId, platform, creds) {
    const save = db.prepare(`
    INSERT INTO credentials (user_id, platform, key, value, updated_at)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, platform, key) DO UPDATE SET
      value = excluded.value,
      updated_at = datetime('now')
  `);
    const txn = db.transaction(() => {
        for (const [key, plainValue] of Object.entries(creds)) {
            if (plainValue && plainValue.trim()) {
                save.run(userId, platform, key, encrypt(plainValue.trim()));
            }
        }
    });
    txn();
}
export function getCredentials(userId, platform) {
    let rows;
    if (platform) {
        rows = db.prepare('SELECT * FROM credentials WHERE user_id = ? AND platform = ?')
            .all(userId, platform);
    }
    else {
        rows = db.prepare('SELECT * FROM credentials WHERE user_id = ?')
            .all(userId);
    }
    const result = {};
    for (const row of rows) {
        try {
            result[row.key] = decrypt(row.value);
        }
        catch {
            // 解密失败，跳过
        }
    }
    return result;
}
export function deleteCredential(userId, platform, key) {
    db.prepare('DELETE FROM credentials WHERE user_id = ? AND platform = ? AND key = ?')
        .run(userId, platform, key);
}
export function deletePlatformCredentials(userId, platform) {
    db.prepare('DELETE FROM credentials WHERE user_id = ? AND platform = ?')
        .run(userId, platform);
}
export function getUserPlatforms(userId) {
    const rows = db.prepare('SELECT DISTINCT platform FROM credentials WHERE user_id = ?')
        .all(userId);
    return rows.map(r => r.platform);
}
