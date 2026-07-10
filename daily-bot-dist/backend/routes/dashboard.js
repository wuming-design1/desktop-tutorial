import { Router } from 'express';
import { authMiddleware } from '../middleware/auth';
import { getDashboardSummary, getReports } from '../services/dashboardService';
const router = Router();
router.use(authMiddleware);
// 获取仪表板总览数据
router.get('/summary', async (req, res, next) => {
    try {
        if (!req.user) {
            res.status(401).json({ error: '未认证' });
            return;
        }
        const data = await getDashboardSummary(req.user.userId);
        res.json(data);
    }
    catch (err) {
        next(err);
    }
});
// 获取报表数据（图表数据）
router.get('/reports', async (req, res, next) => {
    try {
        if (!req.user) {
            res.status(401).json({ error: '未认证' });
            return;
        }
        const data = await getReports(req.user.userId);
        res.json(data);
    }
    catch (err) {
        next(err);
    }
});
export default router;
//# sourceMappingURL=dashboard.js.map