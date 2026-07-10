import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import { testPush, pushDailyReport } from '../services/pushService'

const router = Router()

router.use(authMiddleware)

// 测试连接
router.post('/test', async (req, res, next) => {
  try {
    if (!req.user) {
      res.status(401).json({ error: '未认证' })
      return
    }
    const result = await testPush(req.user.userId)
    if (!result.success) {
      res.status(400).json({ error: result.error })
      return
    }
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// 推送每日报告
router.post('/send', async (req, res, next) => {
  try {
    if (!req.user) {
      res.status(401).json({ error: '未认证' })
      return
    }
    const result = await pushDailyReport(req.user.userId)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

export default router