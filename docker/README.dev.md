# Docker 开发环境

这是一个用于本地开发的 Docker 配置，支持热重载和实时预览。

## 特点

- ✅ 代码卷映射：本地代码修改立即生效，无需重建镜像
- ✅ 热重载：Next.js 开发服务器自动检测文件变化并刷新
- ✅ 快速启动：只需安装一次依赖
- ✅ 隔离环境：避免本地 Node 版本冲突

## 快速开始

### 首次启动（构建镜像并安装依赖）

```bash
cd docker
docker compose -f docker-compose.dev.yml up --build
```

### 后续启动（直接启动，无需重建）

```bash
cd docker
docker compose -f docker-compose.dev.yml up
```

### 后台运行

```bash
cd docker
docker compose -f docker-compose.dev.yml up -d
```

## 访问地址

- 开发服务器：http://localhost:3002
- 网络访问：http://192.168.31.103:3002

## 查看日志

```bash
# 实时查看日志
docker compose -f docker-compose.dev.yml logs -f

# 查看最近 100 行
docker compose -f docker-compose.dev.yml logs --tail 100
```

## 停止服务

```bash
cd docker
docker compose -f docker-compose.dev.yml down
```

## 重新安装依赖

如果修改了 `package.json`，需要重建镜像来安装新依赖：

```bash
cd docker
docker compose -f docker-compose.dev.yml up --build
```

或者进入容器手动安装：

```bash
docker exec -it fangcunleap-dev npm install
```

## 进入容器

```bash
docker exec -it fangcunleap-dev sh
```

## 工作原理

1. **卷映射**：整个项目目录映射到容器的 `/app`，代码修改立即同步
2. **node_modules 隔离**：容器内的 `node_modules` 不会覆盖本地的，避免平台差异
3. **热重载**：Next.js 开发服务器监听文件变化，自动刷新浏览器
4. **文件监听**：`WATCHPACK_POLLING=true` 确保 Docker 环境中文件监听正常工作

## 注意事项

- 首次启动会比较慢（需要安装依赖）
- 修改 `package.json` 后需要重建镜像
- `.next` 目录在容器内生成，避免权限问题
- 容器停止后，`.next` 目录内容会丢失（下次启动重新生成）

## 生产部署

开发完成后，使用生产配置构建和部署：

```bash
cd docker
docker compose up -d --build
```

详见 [README.md](./README.md)
