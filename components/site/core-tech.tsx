import Image from "next/image"
import { ArrowRight, ShieldCheck, ScanSearch, Bot } from "lucide-react"

const cards = [
  {
    icon: ShieldCheck,
    title: "实时内容护栏",
    desc: "方寸 Guard 在 AI 输出层提供实时拦截，10 类风险细分，中文专项优化，p99 8ms，F1 91.1 跨 6 项 benchmark。",
  },
  {
    icon: ScanSearch,
    title: "运行时监控审计",
    desc: "方寸 Observer 零代码接入，对工具调用、出网请求、敏感文件访问全程留痕，任意会话可回放，构建可信证据链。",
  },
  {
    icon: Bot,
    title: "供应链安全扫描",
    desc: "SkillWard 通过静态分析 + LLM 研判 + Docker 沙箱三阶段扫描，完全开源（Apache 2.0），沙箱部署成功率 99%。",
  },
]

export function CoreTech() {
  return (
    <section id="tech" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
            研究驱动 全链路覆盖的
            <br className="hidden sm:block" />
            AI 安全防护核心技术
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card p-4 md:p-8">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl">
            <Image
              src="/illustrations/core-tech.png"
              alt="方寸跃迁 AI 安全架构示意图"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 pb-2 md:absolute md:bottom-8 md:right-8 md:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              申请演示 <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#news"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50"
            >
              查看技术报道
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
