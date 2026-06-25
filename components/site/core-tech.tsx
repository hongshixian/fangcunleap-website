import Image from "next/image"
import { ArrowRight, Network, Cpu, Sparkles } from "lucide-react"

const cards = [
  {
    icon: Network,
    title: "多元异构",
    desc: "统一调度不同架构的芯片，实现对多样化算力的高效整合与协同",
  },
  {
    icon: Cpu,
    title: "软硬协同",
    desc: "通过跨越软件与硬件的深度优化与联合设计，极致挖掘潜在芯片应用算力",
  },
  {
    icon: Sparkles,
    title: "自主式 AI",
    desc: "以 AI 深度赋能 AI，结合基础设施智能体集群，让基础设施具备环境感知、决策行动与自进化能力",
  },
]

export function CoreTech() {
  return (
    <section id="tech" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
            全球领先 全栈贯通的
            <br className="hidden sm:block" />
            自主式人工智能基础设施核心技术
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
              alt="多元异构算力互联网络示意图"
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
              了解更多 <ArrowRight className="h-4 w-4" />
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
