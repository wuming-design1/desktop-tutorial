import { Router } from 'express';
import { db } from '../config/database';
const router = Router();
// 健康检查
router.get('/', (_req, res) => {
    try {
        // 检查数据库连接
        db.prepare('SELECT 1').get();
        res.json({
            status: 'healthy',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            services: {
                database: 'connected',
            },
        });
    }
    catch {
        res.status(503).json({
            status: 'unhealthy',
            timestamp: new Date().toISOString(),
            services: {
                database: 'disconnected',
            },
        });
    }
});
// 就绪检查
router.get('/ready', (_req, res) => {
    res.json({ ready: true });
});
export default router;
//# sourceMappingURL=health.js.map