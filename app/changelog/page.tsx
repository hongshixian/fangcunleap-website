import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { SideTools } from "@/components/site/side-tools"
import Link from "next/link"

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 grid-mask" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              更新日志
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              发布时间线
            </h1>
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <section className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30" />

          <div className="space-y-12">
            {/* Release 1: Fangcun Observer */}
            <div className="relative pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-[26px] top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />

              <div className="group rounded-2xl border border-primary/30 bg-white shadow-lg p-8 hover:border-primary hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-sm font-mono text-foreground/60">
                    2026-05-06
                  </time>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    Fangcun Observer
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  方寸 Observer 公开发布
                </h3>

                <ul className="space-y-2 text-foreground/80 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>运行时监控：命令执行、文件访问、网络出站、敏感资源访问</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>行为链分析 — 将孤立事件串联为可审查的运行时证据</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>实时干预 — 允许 / 暂停 / 审批 / 阻断</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>本地优先审计日志留存</span>
                  </li>
                </ul>

                <Link
                  href="/blog/observer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  看博客 →
                </Link>
              </div>
            </div>

            {/* Release 2: Fangcun AgentPlugin */}
            <div className="relative pl-20">
              <div className="absolute left-[26px] top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />

              <div className="group rounded-2xl border border-primary/30 bg-white shadow-lg p-8 hover:border-primary hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-sm font-mono text-foreground/60">
                    2026-05-01
                  </time>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    Fangcun AgentPlugin
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  OpenClaw 运行时护栏
                </h3>

                <ul className="space-y-2 text-foreground/80 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>4 个能力面：prompt 风险检测 · 工具执行拦截 · 响应审查 · 技能扫描</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>两种模式：adaptive（默认）和 full_defense（高权限场景）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>一行安装：npm pack + openclaw plugins install</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>开源 — Apache 2.0</span>
                  </li>
                </ul>

                <Link
                  href="/blog/plugin"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  看博客 →
                </Link>
              </div>
            </div>

            {/* Release 3: Fangcun Guard */}
            <div className="relative pl-20">
              <div className="absolute left-[26px] top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />

              <div className="group rounded-2xl border border-primary/30 bg-white shadow-lg p-8 hover:border-primary hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-sm font-mono text-foreground/60">
                    2026-04-24
                  </time>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    Fangcun Guard
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  方寸 Guard 公开发布
                </h3>

                <ul className="space-y-2 text-foreground/80 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>综合 F1 91.1，覆盖 6 个公开基准 — 领先竞品 3–21 个百分点</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>p99 推理延迟 8 ms — 比最慢基线快 30 倍</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>10 个细粒度风险类别，租户级可调</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>中文优化 — 医疗 / 编程 / 百科类查询误拒率更低</span>
                  </li>
                </ul>

                <Link
                  href="/blog/fangcunguard"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  看博客 →
                </Link>
              </div>
            </div>

            {/* Release 4: SkillWard */}
            <div className="relative pl-20">
              <div className="absolute left-[26px] top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />

              <div className="group rounded-2xl border border-primary/30 bg-white shadow-lg p-8 hover:border-primary hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-sm font-mono text-foreground/60">
                    2026-04-10
                  </time>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    SkillWard
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  SkillWard 公开发布
                </h3>

                <ul className="space-y-2 text-foreground/80 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>三阶段扫描：静态分析 + LLM 评估 + Docker 沙箱</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>5,000 个真实技能：~38% 路由至沙箱；其中约 1/3 暴露出纯审查遗漏的运行时威胁</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Web UI + CLI + CI 集成</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>开源 — Apache 2.0</span>
                  </li>
                </ul>

                <Link
                  href="/blog/skillward"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  看博客 →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="mt-16 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            想第一时间收到下次发布？
          </h3>
          <a
            href="mailto:info@fangcunleap.com?subject=Subscribe%20to%20Fangcun%20Leap%20release%20notes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            订阅发布通知
          </a>
        </section>
      </div>

      <Footer />
      <SideTools />
    </main>
  )
}
