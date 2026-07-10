import { Router } from 'express'
import { authMiddleware, adminOnly } from '../middleware/auth'
import * as authService from '../services/authService'

const router = Router()

// 所有用户管理路由需要管理员权限
router.use(authMiddleware, adminOnly)

// 获取所有用户列表
router.get('/', (_req, res) => {
  const users = authService.listUsers()
  res.json(users)
})

// 删除用户
router.delete('/:email', (req, res, next) => {
  try {
    authService.deleteUser(req.params.email)
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// 重置用户密码
router.post('/:email/reset-password', (req, res, next) => {
  try {
    const { password } = req.body
    if (!password || password.length < 6) {
      res.status(400).json({ error: '密码长度不能少于 6 位' })
      return
    }
    authService.resetPassword(req.params.email, password)
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// 修改用户角色
router.patch('/:email/role', (req, res, next) => {
  try {
    const { role } = req.body
    if (!['admin', 'member', 'viewer'].includes(role)) {
      res.status(400).json({ error: '无效的角色' })
      return
    }
    const user = authService.changeRole(req.params.email, role)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

export default router