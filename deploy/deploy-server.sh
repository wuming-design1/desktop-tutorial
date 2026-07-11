#!/bin/bash
# ============================================
# 阿里云 ECS 一键部署脚本（PM2 + Nginx）
# 在服务器上执行: bash deploy-server.sh
# ============================================
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  团队工作流智能看板 - 服务器部署${NC}"
echo -e "${GREEN}========================================${NC}"

# 1. 下载部署包
echo -e "${YELLOW}[1/6] 下载部署包...${NC}"
cd /home/user
if [ -f "daily-bot-dist.zip" ]; then
  echo "已存在，跳过下载"
else
  curl -L -o daily-bot-dist.zip "https://github.com/wuming-design1/desktop-tutorial/raw/refs/heads/trae/agent-52JKNP/daily-bot-dist.zip"
fi
unzip -o daily-bot-dist.zip -d /home/user/
cd /home/user/daily-bot-dist

# 2. 安装 Node.js（如未安装）
echo -e "${YELLOW}[2/6] 检查 Node.js 环境...${NC}"
if ! command -v node &>/dev/null; then
  echo "安装 Node.js 22..."
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi
echo "Node.js $(node -v)"

# 3. 安装 PM2
echo -e "${YELLOW}[3/6] 安装 PM2...${NC}"
if ! command -v pm2 &>/dev/null; then
  sudo npm install -g pm2
fi
echo "PM2 $(pm2 -v)"

# 4. 安装后端依赖
echo -e "${YELLOW}[4/6] 安装后端依赖...${NC}"
cd backend
npm install --production

# 创建 .env 文件
if [ ! -f ".env" ]; then
  cat > .env << 'EOF'
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
  echo ".env 已创建（请修改 JWT_SECRET 和 ENCRYPTION_KEY）"
fi

# 5. 启动后端
echo -e "${YELLOW}[5/6] 启动后端服务...${NC}"
pm2 delete workflow-backend 2>/dev/null || true
pm2 start dist/index.js --name workflow-backend --time
pm2 save
pm2 startup systemd 2>/dev/null || true
echo "后端已启动: http://localhost:3001/api/health"

# 6. 配置 Nginx
echo -e "${YELLOW}[6/6] 配置 Nginx 反向代理...${NC}"
sudo tee /etc/nginx/conf.d/workflow.conf > /dev/null << 'NGINX'
server {
    listen 80;
    server_name _;

    root /home/user/daily-bot-dist/frontend;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /avatars/ {
        proxy_pass http://localhost:3001/avatars/;
        proxy_set_header Host $host;
    }
}
NGINX

sudo nginx -t && sudo nginx -s reload || sudo systemctl restart nginx

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  部署完成！${NC}"
echo -e "${GREEN}  访问地址: http://101.37.170.66${NC}"
echo -e "${GREEN}  测试账号: admin@demo.com / 123456${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "常用命令:"
echo "  pm2 status          # 查看服务状态"
echo "  pm2 logs workflow   # 查看日志"
echo "  pm2 restart all     # 重启服务"