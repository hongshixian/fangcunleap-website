#!/bin/bash
# 开发环境快捷脚本

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

case "$1" in
  start)
    echo "🚀 启动开发环境..."
    docker compose -f docker-compose.dev.yml up
    ;;
  up)
    echo "🚀 后台启动开发环境..."
    docker compose -f docker-compose.dev.yml up -d
    echo "✅ 开发服务器已启动: http://localhost:3002"
    ;;
  build)
    echo "🔨 重建并启动开发环境..."
    docker compose -f docker-compose.dev.yml up --build
    ;;
  down|stop)
    echo "🛑 停止开发环境..."
    docker compose -f docker-compose.dev.yml down
    ;;
  restart)
    echo "🔄 重启开发环境..."
    docker compose -f docker-compose.dev.yml restart
    ;;
  logs)
    echo "📋 查看日志（Ctrl+C 退出）..."
    docker compose -f docker-compose.dev.yml logs -f
    ;;
  shell)
    echo "🐚 进入容器..."
    docker exec -it fangcunleap-dev sh
    ;;
  install)
    echo "📦 安装依赖..."
    docker exec -it fangcunleap-dev npm install
    ;;
  *)
    echo "用法: $0 {start|up|build|down|stop|restart|logs|shell|install}"
    echo ""
    echo "命令说明："
    echo "  start   - 前台启动开发服务器（显示实时日志）"
    echo "  up      - 后台启动开发服务器"
    echo "  build   - 重建镜像并启动（修改 package.json 后使用）"
    echo "  down    - 停止并删除容器"
    echo "  stop    - 停止容器（同 down）"
    echo "  restart - 重启容器"
    echo "  logs    - 查看实时日志"
    echo "  shell   - 进入容器 shell"
    echo "  install - 在容器内安装 npm 依赖"
    exit 1
    ;;
esac
