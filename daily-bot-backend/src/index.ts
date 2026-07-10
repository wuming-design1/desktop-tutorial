import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { env } from './config/env'
import { initDatabase } from './models/schema'
import { seedAdmin } from './services/authService'
import { errorHandler } from './middleware/errorHandler'
import authRoutes from './routes/auth'
import userRoutes from './routes/users'
import credentialRoutes from './routes/credentials'
import dashboardRoutes from './routes/dashboard'
import pushRoutes from './routes/push'
import githubRoutes from './routes/github'
import healthRoutes from './routes/health'

const app = express()

// ====== 全局中间件 ======
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }))
app.use(express.json({ limit: '1mb' }))
app.use(morgan(env.LOG_LEVEL === 'debug' ? 'dev' : 'combined'))

// ====== 路由 ======
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/credentials', credentialRoutes)
app.use('/api/dashboard', dashboardRoutes)
app.use('/api/push', pushRoutes)
app.use('/api/github', githubRoutes)
app.use('/api/health', healthRoutes)

// ====== 错误处理 ======
app.use(errorHandler)

// ====== 启动 ======
async function start() {
  // 初始化数据库
  initDatabase()

  // 创建管理员种子数据
  seedAdmin()

  // 启动 HTTP 服务
  app.listen(env.PORT, () => {
    console.log('')
    console.log('🚀 团队工作流后端服务已启动')
    console.log(`   📡 地址: http://localhost:${env.PORT}`)
    console.log(`   📖 API 文档: http://localhost:${env.PORT}/api/health`)
    console.log(`   🌐 CORS 允许: ${env.CORS_ORIGIN}`)
    console.log('')
  })
}

start().catch((err) => {
  console.error('❌ 启动失败:', err)
  process.exit(1)
})