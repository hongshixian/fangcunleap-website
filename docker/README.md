# Docker 部署指南

## 快速开始

### 使用 Docker Compose（推荐）

```bash
cd docker
docker-compose up -d
```

访问：http://localhost:8080

### 使用 Docker 命令

```bash
# 构建镜像
docker build -f docker/Dockerfile -t fangcunleap-website .

# 运行容器
docker run -d -p 8080:80 --name fangcunleap-website fangcunleap-website
```

## 管理命令

```bash
# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 重新构建并启动
docker-compose up -d --build
```

## 架构说明

- **构建阶段**：使用 Node.js 24 Alpine 镜像构建静态网站
- **生产阶段**：使用 Nginx Alpine 镜像提供静态文件服务
- **端口**：容器内部 80 端口映射到主机 8080 端口
- **优化**：
  - 多阶段构建，减小最终镜像大小
  - Gzip 压缩
  - 静态资源缓存（图片/CSS/JS 缓存 1 年，视频缓存 30 天）
  - SPA 路由支持
  - 安全响应头

## 自定义配置

### 修改端口

编辑 `docker-compose.yml`，修改 ports 配置：

```yaml
ports:
  - "3000:80"  # 改为你想要的端口
```

### 修改 Nginx 配置

编辑 `nginx.conf` 文件，修改缓存策略、gzip 设置等。

## 注意事项

- 首次构建可能需要较长时间（需要下载依赖和构建）
- 确保 Docker 和 Docker Compose 已正确安装
- 确保目标端口未被占用
