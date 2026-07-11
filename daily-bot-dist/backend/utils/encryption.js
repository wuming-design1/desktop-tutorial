import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import { env } from '../config/env';
// 将 hex 编码的密钥转为 Buffer
const KEY = Buffer.from(env.ENCRYPTION_KEY, 'hex');
const ALGORITHM = 'aes-256-cbc';
export function encrypt(plaintext) {
    const iv = randomBytes(16);
    const cipher = createCipheriv(ALGORITHM, KEY, iv);
    const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}
export function decrypt(encrypted) {
    const [ivHex, dataHex] = encrypted.split(':');
    if (!ivHex || !dataHex)
        throw new Error('Invalid encrypted format');
    const iv = Buffer.from(ivHex, 'hex');
    const data = Buffer.from(dataHex, 'hex');
    const decipher = createDecipheriv(ALGORITHM, KEY, iv);
    const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
    return decrypted.toString('utf8');
}
