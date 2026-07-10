import { extractToken, verifyToken } from '../utils/jwt';
export function authMiddleware(req, res, next) {
    const token = extractToken(req.headers.authorization);
    if (!token) {
        res.status(401).json({ error: '未提供认证令牌' });
        return;
    }
    const payload = verifyToken(token);
    if (!payload) {
        res.status(401).json({ error: '认证令牌无效或已过期' });
        return;
    }
    // 超级管理员 token 不能访问用户 API
    if (payload.role === 'super_admin') {
        res.status(403).json({ error: '审计账户无权访问用户数据' });
        return;
    }
    req.user = payload;
    next();
}
export function adminOnly(req, res, next) {
    if (!req.user || req.user.role !== 'admin') {
        res.status(403).json({ error: '需要管理员权限' });
        return;
    }
    next();
}
//# sourceMappingURL=auth.js.map