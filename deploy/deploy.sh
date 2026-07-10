#!/bin/bash
# ============================================
# 团队工作流智能看板 - 阿里云一键部署脚本
# ============================================
# 用法:
#   chmod +x deploy.sh
#   ./deploy.sh          # 自动部署（Docker 模式）
#   ./deploy.sh pm2      # PM2 + Nginx 模式
# ============================================

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

MODE=${1:-docker}

echo -e "${GREEN}============================================${NC}"
echo -e "${GREEN}  团队工作流智能看板 - 部署脚本${NC}"
echo -e "${GREEN}============================================${NC}"
echo ""

# ──────────────────────────────────────────
# Docker 模式
# ──────────────────────────────────────────
deploy_docker() {
  echo -e "${YELLOW}[1/4] 检查 Docker 环境...${NC}"
  if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker 未安装，请先安装 Docker${NC}"
    echo "   CentOS: yum install -y docker"
    echo "   Ubuntu: apt install -y docker.io docker-compose-v2"
    exit 1
  fi
  if ! docker compose version &> /dev/null; then
    echo -e "${RED}❌ Docker Compose 未安装${NC}"
    exit 1
  fi
  echo -e "${GREEN}✅ Docker 环境就绪${NC}"

  echo -e "${YELLOW}[2/4] 创建 .env 配置...${NC}"
  if [ ! -f ".env" ]; then
    cat > .env << 'EOF'
JWT_SECRET=change-me-to-a-strong-random-string-32chars
JWT_EXPIRES_IN=7d
ENCRYPTION_KEY=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
ADMIN_EMAIL=admin@audit.local
ADMIN_PASSWORD=admin123456
EOF
    echo -e "${YELLOW}⚠️  已生成默认 .env，请修改 JWT_SECRET 和 ENCRYPTION_KEY！${NC}"
  fi

  echo -e "${YELLOW}[3/4] 构建并启动容器...${NC}"
  docker compose build
  docker compose up -d

  echo -e "${YELLOW}[4/4] 等待服务启动...${NC}"
  sleep 5
  if curl -s http://localhost/api/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ 服务启动成功！${NC}"
    echo -e "${GREEN}   访问地址: http://$(curl -s ifconfig.me 2>/dev/null || echo 'YOUR_IP')${NC}"
  else
    echo -e "${RED}⚠️  服务可能未就绪，请检查: docker compose logs${NC}"
  fi
}

# ──────────────────────────────────────────
# PM2 + Nginx 模式
# ──────────────────────────────────────────
deploy_pm2() {
  echo -e "${YELLOW}[1/6] 检查 Node.js 环境...${NC}"
  if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js 未安装，请先安装 Node.js 22+${NC}"
    echo "   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash -"
    echo "   sudo apt-get install -y nodejs"
    exit 1
  fi
  echo -e "${GREEN}✅ Node.js $(node -v)${NC}"

  echo -e "${YELLOW}[2/6] 安装 PM2...${NC}"
  npm install -g pm2 2>/dev/null || true
  echo -e "${GREEN}✅ PM2 就绪${NC}"

  echo -e "${YELLOW}[3/6] 安装后端依赖...${NC}"
  cd backend
  npm install --production
  cd ..

  echo -e "${YELLOW}[4/6] 创建 .env 配置...${NC}"
  if [ ! -f "backend/.env" ]; then
    cat > backend/.env << 'EOF'
PORT=3001
JWT_SECRET=change-me-to-a-strong-random-string-32chars
JWT_EXPIRES_IN=7d
DB_PATH=./data/app.db
ENCRYPTION_KEY=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
CORS_ORIGIN=http://localhost
LOG_LEVEL=info
ADMIN_EMAIL=admin@audit.local
ADMIN_PASSWORD=admin123456
EOF
    echo -e "${YELLOW}⚠️  已生成默认 .env，请修改密钥！${NC}"
  fi

  echo -e "${YELLOW}[5/6] 启动后端服务...${NC}"
  cd backend
  pm2 delete workflow-backend 2>/dev/null || true
  pm2 start dist/index.js --name workflow-backend --time
  pm2 save
  cd ..
  echo -e "${GREEN}✅ 后端已启动${NC}"

  echo -e "${YELLOW}[6/6] 配置 Nginx...${NC}"
  if command -v nginx &> /dev/null; then
    sudo cp nginx.conf /etc/nginx/conf.d/workflow.conf
    sudo sed -i 's|root /app/frontend|root '"$(pwd)/frontend"'|g' /etc/nginx/conf.d/workflow.conf
    sudo sed -i 's|proxy_pass http://backend:3001|proxy_pass http://localhost:3001|g' /etc/nginx/conf.d/workflow.conf
    sudo nginx -t && sudo nginx -s reload
    echo -e "${GREEN}✅ Nginx 配置完成${NC}"
  else
    echo -e "${YELLOW}⚠️  Nginx 未安装，后端运行在 http://localhost:3001${NC}"
    echo "   安装 Nginx: sudo apt install nginx"
  fi

  echo -e "${GREEN}============================================${NC}"
  echo -e "${GREEN}  部署完成！${NC}"
  echo -e "${GREEN}  后端: http://localhost:3001/api/health${NC}"
  echo -e "${GREEN}  前端: http://localhost/${NC}"
  echo -e "${GREEN}============================================${NC}"
}

# ──────────────────────────────────────────
# 入口
# ──────────────────────────────────────────
case "$MODE" in
  docker)
    deploy_docker
    ;;
  pm2)
    deploy_pm2
    ;;
  *)
    echo "用法: ./deploy.sh [docker|pm2]"
    echo "  docker  - Docker Compose 部署（推荐）"
    echo "  pm2     - PM2 + Nginx 传统部署"
    exit 1
    ;;
esac