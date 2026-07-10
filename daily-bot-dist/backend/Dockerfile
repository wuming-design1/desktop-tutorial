# 多阶段构建：构建阶段 + 运行阶段
FROM node:22-alpine AS builder

WORKDIR /app

# 安装 pnpm 加速依赖安装
RUN corepack enable && corepack prepare pnpm@latest --activate

# 复制依赖文件
COPY package.json pnpm-lock.yaml* ./

# 安装依赖
RUN pnpm install --frozen-lockfile --prod=false

# 复制源码
COPY tsconfig.json ./
COPY src/ ./src/

# 构建
RUN pnpm build

# ====== 运行阶段 ======
FROM node:22-alpine

WORKDIR /app

# 创建非 root 用户
RUN addgroup -g 1001 -S appgroup && adduser -u 1001 -S appuser -G appgroup

# 复制运行时依赖
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# 创建数据目录
RUN mkdir -p /app/data && chown -R appuser:appgroup /app

# 切换到非 root 用户
USER appuser

# 暴露端口
EXPOSE 3001

# 健康检查
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# 启动
CMD ["node", "dist/index.js"]