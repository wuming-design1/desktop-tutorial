import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import * as credentialService from '../services/credentialService'
import { PLATFORM_KEYS } from '../services/credentialService'

const router = Router()

router.use(authMiddleware)

// 获取单个平台凭证
router.get('/:platform', (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: '未认证' })
    return
  }
  const creds = credentialService.getCredentialsForUser(req.user.userId, req.params.platform)
  res.json({ platform: req.params.platform, credentials: creds })
})

// 获取所有平台凭证
router.get('/', (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: '未认证' })
    return
  }
  const creds = credentialService.getCredentialsForUser(req.user.userId)
  const platforms = credentialService.getPlatforms(req.user.userId)
  const result: Record<string, { connected: boolean }> = {}

  for (const p of Object.keys(PLATFORM_KEYS)) {
    result[p] = { connected: platforms.includes(p) }
  }

  res.json({ credentials: creds, platforms: result })
})

// 保存平台凭证
router.put('/:platform', (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: '未认证' })
    return
  }

  const { platform } = req.params
  if (!PLATFORM_KEYS[platform]) {
    res.status(400).json({ error: '不支持的平台' })
    return
  }

  credentialService.saveCredentials(req.user.userId, platform, req.body)
  res.json({ success: true, platform })
})

// 删除单个凭证
router.delete('/:platform/:key', (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: '未认证' })
    return
  }
  credentialService.removeCredential(req.user.userId, req.params.platform, req.params.key)
  res.json({ success: true })
})

// 删除整个平台凭证
router.delete('/:platform', (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: '未认证' })
    return
  }
  credentialService.removePlatform(req.user.userId, req.params.platform)
  res.json({ success: true })
})

export default router