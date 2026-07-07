# Docker 开发环境配置完成 ✅

## 文件结构

```
docker/
├── Dockerfile              # 生产环境 Dockerfile
├── Dockerfile.dev          # 开发环境 Dockerfile
├── docker-compose.yml      # 生产环境配置
├── docker-compose.dev.yml  # 开发环境配置
├── nginx.conf              # Nginx 配置
├── dev.sh                  # 开发环境快捷脚本 ⭐
├── README.md               # 生产环境文档
└── README.dev.md           # 开发环境文档 ⭐
```

## 快速开始

### 使用快捷脚本（推荐）

```bash
cd docker

# 首次启动（构建镜像）
./dev.sh build

# 后台启动
./dev.sh up

# 前台启动（查看实时日志）
./dev.sh start

# 停止
./dev.sh down

# 查看日志
./dev.sh logs

# 进入容器
./dev.sh shell
```

### 直接使用 docker compose

```bash
cd docker

# 启动
docker compose -f docker-compose.dev.yml up -d

# 停止
docker compose -f docker-compose.dev.yml down

# 查看日志
docker compose -f docker-compose.dev.yml logs -f
```

## 访问地址

- **开发服务器**: http://localhost:3002
- **网络访问**: http://192.168.31.103:3002

## 核心特性

### ✅ 代码热重载
- 本地代码实时映射到容器
- 修改代码后浏览器自动刷新
- 无需重建镜像

### ✅ 快速启动
- 依赖已安装在镜像中
- 启动只需几秒钟
- 容器间完全隔离

### ✅ 智能卷管理
```yaml
volumes:
  - ..:/app                 # 映射整个项目
  - /app/node_modules       # 隔离 node_modules
  - /app/.next              # 隔离构建缓存
```

## 开发工作流

1. **启动开发环境**
   ```bash
   ./dev.sh up
   ```

2. **编辑代码**
   - 在本地 IDE 中修改文件
   - 保存后自动触发热重载

3. **查看效果**
   - 浏览器自动刷新
   - 访问 http://localhost:3002

4. **调试问题**
   ```bash
   # 查看实时日志
   ./dev.sh logs
   
   # 进入容器调试
   ./dev.sh shell
   ```

5. **停止环境**
   ```bash
   ./dev.sh down
   ```

## 常见问题

### Q: 修改 package.json 后如何更新依赖？

```bash
# 方法 1: 重建镜像
./dev.sh build

# 方法 2: 在容器内安装
./dev.sh install
```

### Q: 端口被占用怎么办？

修改 `docker-compose.dev.yml` 中的端口映射：
```yaml
ports:
  - "3003:3000"  # 改为其他端口
```

### Q: 如何清理容器和镜像？

```bash
# 停止并删除容器
./dev.sh down

# 删除镜像
docker rmi docker-fangcunleap-dev
```

## 生产部署

开发完成后，使用生产配置部署：

```bash
cd docker
docker compose up -d --build
```

访问地址: http://localhost:8081

详见 [README.md](./README.md)

## 技术说明

### 文件监听
- `WATCHPACK_POLLING=true` 确保 Docker 环境中文件监听正常工作
- Next.js Turbopack 提供快速的增量编译

### 性能优化
- node_modules 在容器内，避免平台差异
- .next 构建缓存在容器内，避免权限问题
- 卷映射只包含源代码，体积小速度快

### 容器配置
- `stdin_open: true` + `tty: true` 支持交互式调试
- `restart: unless-stopped` 自动重启
- Alpine Linux 基础镜像，体积小

---

**当前状态**: ✅ 开发环境已启动并运行在 http://localhost:3002
