import type { Request, Response, NextFunction } from 'express'
import { extractToken, verifyToken } from '../utils/jwt'
import type { JwtPayload } from '../utils/jwt'

// 扩展 Express Request 类型
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
    }
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = extractToken(req.headers.authorization)

  if (!token) {
    res.status(401).json({ error: '未提供认证令牌' })
    return
  }

  const payload = verifyToken(token)
  if (!payload) {
    res.status(401).json({ error: '认证令牌无效或已过期' })
    return
  }

  req.user = payload
  next()
}

export function adminOnly(req: Request, res: Response, next: NextFunction): void {
  if (!req.user || req.user.role !== 'admin') {
    res.status(403).json({ error: '需要管理员权限' })
    return
  }
  next()
}