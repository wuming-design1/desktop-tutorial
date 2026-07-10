import { z } from 'zod';
import dotenv from 'dotenv';
// 环境变量模式验证
const envSchema = z.object({
    PORT: z.coerce.number().default(3001),
    JWT_SECRET: z.string().min(16),
    JWT_EXPIRES_IN: z.string().default('7d'),
    DB_PATH: z.string().default('./data/app.db'),
    ENCRYPTION_KEY: z.string().length(64),
    CORS_ORIGIN: z.string().default('http://localhost:5173'),
    LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
    ADMIN_EMAIL: z.string().default('admin@audit.local'),
    ADMIN_PASSWORD: z.string().default('admin123456'),
});
dotenv.config();
const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
    console.error('❌ 环境变量验证失败:', parsed.error.format());
    process.exit(1);
}
export const env = parsed.data;
//# sourceMappingURL=env.js.map