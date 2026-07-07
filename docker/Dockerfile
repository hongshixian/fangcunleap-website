# 多阶段构建 - 构建阶段
FROM node:24-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package 文件
COPY package*.json ./
COPY pnpm-lock.yaml ./

# 安装依赖（使用 npm，因为容器中可能没有 pnpm）
RUN npm ci --legacy-peer-deps

# 复制项目文件
COPY . .

# 构建静态网站
RUN npm run build

# 生产阶段 - 使用 Nginx 服务静态文件
FROM nginx:alpine

# 复制自定义 nginx 配置
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# 从构建阶段复制静态文件到 nginx 目录
COPY --from=builder --chown=nginx:nginx /app/out /usr/share/nginx/html

# 确保文件权限正确
RUN chmod -R 755 /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
