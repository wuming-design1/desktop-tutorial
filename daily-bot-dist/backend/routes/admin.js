import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { signToken, verifyToken, extractToken } from '../utils/jwt';
import { env } from '../config/env';
import { listAllUsers, rowToUser } from '../models/userModel';
const router = Router();
// 管理员的 JWT 使用不同的 role 标识
const ADMIN_ROLE = 'super_admin';
function adminAuthMiddleware(req, res, next) {
    const token = extractToken(req.headers.authorization);
    if (!token) {
        res.status(401).json({ error: '未提供认证令牌' });
        return;
    }
    const payload = verifyToken(token);
    if (!payload || payload.role !== ADMIN_ROLE) {
        res.status(401).json({ error: '认证令牌无效或已过期' });
        return;
    }
    req.user = payload;
    next();
}
// 管理员登录
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: '缺少邮箱或密码' });
            return;
        }
        if (email !== env.ADMIN_EMAIL) {
            res.status(401).json({ error: '账号或密码错误' });
            return;
        }
        const valid = await bcrypt.compare(password, await bcrypt.hash(env.ADMIN_PASSWORD, 10));
        // 直接比较明文（env 中的密码是明文，需要 hash 后比较）
        const passwordMatch = password === env.ADMIN_PASSWORD;
        if (!passwordMatch) {
            res.status(401).json({ error: '账号或密码错误' });
            return;
        }
        const token = signToken({
            userId: 'admin_super',
            email: env.ADMIN_EMAIL,
            role: ADMIN_ROLE,
        });
        res.json({
            token,
            admin: {
                email: env.ADMIN_EMAIL,
                role: 'super_admin',
            },
        });
    }
    catch (err) {
        next(err);
    }
});
// 管理员登出
router.post('/logout', (_req, res) => {
    res.json({ success: true });
});
// 获取用户列表（只读，不返回任何凭证信息）
router.get('/users', adminAuthMiddleware, (_req, res) => {
    const rows = listAllUsers();
    const users = rows.map(rowToUser).map(u => ({
        id: u.id,
        username: u.username,
        email: u.email,
        avatar: u.avatar,
        role: u.role,
        createdAt: u.createdAt,
        lastLoginAt: u.lastLoginAt,
        // 不返回 settings、凭证等敏感信息
    }));
    res.json({ total: users.length, users });
});
export default router;
//# sourceMappingURL=admin.js.map