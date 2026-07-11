import { Router } from 'express';
import multer from 'multer';
import { authMiddleware } from '../middleware/auth';
import { createPRFromFiles, createPRFromStaging } from '../services/githubService';
const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });
router.use(authMiddleware);
// 模式一：上传文件创建 PR
router.post('/pr/upload', upload.array('files', 20), async (req, res, next) => {
    try {
        if (!req.user) {
            res.status(401).json({ error: '未认证' });
            return;
        }
        const { title, body, branch } = req.body;
        if (!title) {
            res.status(400).json({ error: '请输入 PR 标题' });
            return;
        }
        // 处理上传的文件
        const files = req.files || [];
        const fileData = files.map((f) => ({
            path: f.originalname,
            content: f.buffer.toString('utf-8'),
        }));
        // 也支持通过 body 传入文本文件内容
        // 例如: body.files = JSON.stringify([{path: "a.txt", content: "hello"}])
        if (fileData.length === 0 && req.body.fileContent) {
            try {
                const parsed = JSON.parse(req.body.fileContent);
                if (Array.isArray(parsed)) {
                    fileData.push(...parsed);
                }
            }
            catch {
                // 单个文本内容
                fileData.push({
                    path: req.body.filePath || 'file.txt',
                    content: req.body.fileContent,
                });
            }
        }
        if (fileData.length === 0) {
            res.status(400).json({ error: '请上传至少一个文件或输入文件内容' });
            return;
        }
        const result = await createPRFromFiles(req.user.userId, { title, body: body || '', branch: branch || '', files: fileData });
        res.json({ success: true, ...result });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// 模式二：Git 暂存区创建 PR
router.post('/pr/staging', async (req, res, next) => {
    try {
        if (!req.user) {
            res.status(401).json({ error: '未认证' });
            return;
        }
        const { title, body, branch, repoPath } = req.body;
        if (!title) {
            res.status(400).json({ error: '请输入 PR 标题' });
            return;
        }
        if (!repoPath) {
            res.status(400).json({ error: '请输入本地仓库路径' });
            return;
        }
        const result = await createPRFromStaging(req.user.userId, {
            title,
            body: body || '',
            branch: branch || '',
            repoPath,
        });
        res.json({ success: true, ...result });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
export default router;
