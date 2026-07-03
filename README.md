# 方寸跃迁官网 / Fangcun Leap Website

方寸跃迁（Fangcun Leap）官方网站，基于 Next.js 16 + React 19 + Tailwind CSS 4 构建。

## 技术栈

- **框架：** Next.js 16.2.6 (App Router + Turbopack)
- **UI：** React 19 + Tailwind CSS 4.2
- **组件库：** Radix UI + Shadcn
- **动画：** Framer Motion
- **包管理：** pnpm
- **语言：** TypeScript 5.7

## 快速开始

### 前置要求

- **Node.js：** >= 18.17 (推荐 20.x LTS)
- **pnpm：** >= 8.0

如果没有安装 pnpm，可以通过 npm 安装：

```bash
npm install -g pnpm
```

### 1. 克隆仓库

```bash
git clone git@github.com:hongshixian/fangcunleap-website.git
cd fangcunleap-website
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

开发服务器将在 http://localhost:3000 启动。

- 支持热更新（Hot Module Replacement）
- 使用 Turbopack 作为打包工具（比 Webpack 更快）

### 4. 构建生产版本

```bash
pnpm build
```

构建产物将输出到 `.next/` 目录。

### 5. 启动生产服务器

```bash
pnpm start
```

生产服务器将在 http://localhost:3000 启动。

## 项目结构

```
.
├── app/                      # Next.js App Router 页面
│   ├── (legacy)/            # 旧官网内容（隔离路由组）
│   │   ├── about/           # 关于我们
│   │   ├── blog/            # 博客文章
│   │   ├── careers/         # 招聘
│   │   ├── research/        # 研究成果
│   │   └── ...
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页
│   └── legacy.css           # 旧版样式
├── components/
│   ├── site/                # 首页组件
│   │   ├── hero.tsx         # Hero 区域
│   │   ├── header.tsx       # 顶部导航
│   │   ├── footer.tsx       # 页脚
│   │   └── ...
│   └── legacy/              # 旧官网组件
│       ├── ui/              # Shadcn UI 组件
│       └── ...
├── public/                  # 静态资源
│   ├── images/              # 图片
│   ├── videos/              # 视频
│   └── research/            # 研究成果图片
├── docs/                    # 项目文档（迁移参考）
├── next.config.mjs          # Next.js 配置
├── tailwind.config.ts       # Tailwind CSS 配置
├── tsconfig.json            # TypeScript 配置
└── package.json             # 项目依赖
```

## 可用脚本

```bash
# 开发
pnpm dev          # 启动开发服务器 (localhost:3000)

# 构建
pnpm build        # 构建生产版本

# 生产
pnpm start        # 启动生产服务器（需先 build）

# 代码检查
pnpm lint         # ESLint 代码检查
```

## 部署

### Vercel（推荐）

本项目针对 Vercel 平台优化，可一键部署：

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入仓库
3. Vercel 自动检测 Next.js 并完成构建部署

**环境变量：** 本项目目前无需额外环境变量。

### 其他平台（Docker / VPS）

#### 使用 Node.js 部署

```bash
# 1. 构建
pnpm install --prod=false
pnpm build

# 2. 启动（生产模式）
pnpm start
```

默认端口 3000，可通过环境变量 `PORT` 修改：

```bash
PORT=8080 pnpm start
```

#### 使用 Standalone 模式（推荐用于容器化）

在 `next.config.mjs` 中启用 standalone 输出：

```js
export default {
  output: 'standalone',
};
```

构建后 `.next/standalone/` 包含完整的可执行应用，体积更小：

```bash
node .next/standalone/server.js
```

#### 使用 Nginx 反向代理

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 静态导出（可选）

如果不需要服务端渲染，可以导出为纯静态站点：

```bash
# next.config.mjs 中设置
export default {
  output: 'export',
};

pnpm build
# 输出到 out/ 目录，可部署到任何静态托管服务
```

⚠️ **注意：** 静态导出不支持某些 Next.js 特性（如 ISR、SSR、动态路由等）。

## 双语支持

网站支持中英文双语切换：

- 实现方式：客户端上下文（`components/site/language-context.tsx`）
- 语言状态存储在 `localStorage`
- 默认语言：中文

## 开发注意事项

### WebGL 背景渲染

首页 Hero 区域使用 WebGL2 程序化渲染 mesh gradient 背景（`components/site/mesh-gradient-background.tsx`），若在不支持 WebGL2 的环境（如部分无头浏览器）会回退到 CSS 渐变。

### 构建缓存

- `.next/` 目录包含构建产物，不要提交到 git
- `tsconfig.tsbuildinfo` 是 TypeScript 增量构建缓存，已被 `.gitignore` 忽略
- 清理缓存：`rm -rf .next tsconfig.tsbuildinfo`

### 图片优化

`public/` 下的图片会被 Next.js Image 组件自动优化。原始图片尽量使用：

- **格式：** WebP / AVIF（回退到 PNG/JPG）
- **尺寸：** 按实际显示尺寸提供 1x / 2x 版本

### 视频资源

`public/videos/` 下的视频文件体积较大（~4-24MB），如果通过 git 管理导致仓库膨胀，可考虑使用 Git LFS 或 CDN。

## 常见问题

### pnpm 安装依赖时出现警告

```
[WARN] The "pnpm" field in package.json is no longer read by pnpm
```

这是 pnpm 新版本废弃 `pnpm.overrides` 字段导致的，不影响使用。可以将 `package.json` 中的 `pnpm` 字段改为 `pnpm.peerDependencyRules` 或 `pnpm.packageExtensions`。

### Turbopack 提示检测到多个 lockfile

```
⚠ Warning: Next.js inferred your workspace root...
```

如果 `/home/lihao/git/` 下有其他项目的 lockfile，Next.js 可能误判 workspace root。可以在 `next.config.mjs` 中设置：

```js
export default {
  turbopack: {
    root: process.cwd(),
  },
};
```

### 构建时内存不足

Next.js 16 + React 19 构建可能占用较多内存。可以增加 Node.js 内存限制：

```bash
NODE_OPTIONS="--max-old-space-size=4096" pnpm build
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交改动 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

## 许可证

本项目为方寸跃迁科技有限公司所有，未经授权不得用于商业用途。

---

## 联系方式

- **官网：** https://fangcunleap.com (待部署)
- **GitHub：** https://github.com/hongshixian/fangcunleap-website

如有问题或建议，欢迎提交 Issue。
