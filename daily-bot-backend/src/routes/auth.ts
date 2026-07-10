import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import * as authService from '../services/authService'
import type { LoginRequest, RegisterRequest } from '../utils/types'

const router = Router()

// 注册
router.post('/register', async (req, res, next) => {
  try {
    const { username, email, password } = req.body as RegisterRequest
    if (!username || !email || !password) {
      res.status(400).json({ error: '缺少必填字段' })
      return
    }
    if (password.length < 6) {
      res.status(400).json({ error: '密码长度不能少于 6 位' })
      return
    }
    const result = await authService.register({ username, email, password })
    res.status(201).json(result)
  } catch (err) {
    next(err)
  }
})

// 登录
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body as LoginRequest
    if (!email || !password) {
      res.status(400).json({ error: '缺少邮箱或密码' })
      return
    }
    const result = await authService.login({ email, password })
    res.json(result)
  } catch (err) {
    next(err)
  }
})

// 退出（客户端清除 token 即可，服务端无需处理）
router.post('/logout', (_req, res) => {
  res.json({ success: true })
})

// 获取当前用户信息
router.get('/me', authMiddleware, (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: '未认证' })
    return
  }
  const user = authService.getMe(req.user.userId)
  if (!user) {
    res.status(404).json({ error: '用户不存在' })
    return
  }
  res.json(user)
})

// 刷新 Token
router.post('/refresh', authMiddleware, (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: '未认证' })
    return
  }
  const result = authService.refreshTokenInternal(req.user.userId, req.user.email, req.user.role)
  res.json(result)
})

// 更新用户设置
router.patch('/settings', authMiddleware, (req, res, next) => {
  try {
    if (!req.user) {
      res.status(401).json({ error: '未认证' })
      return
    }
    const user = authService.updateSettings(req.user.email, req.body)
    if (!user) {
      res.status(404).json({ error: '用户不存在' })
      return
    }
    res.json(user)
  } catch (err) {
    next(err)
  }
})

export default router