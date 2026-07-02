"use client"

import { ArrowRight, ShieldCheck, ScanSearch, Bot, Swords } from "lucide-react"
import { useLanguage } from "./language-context"

const cards = [
  {
    icon: ShieldCheck,
    title: { en: "Real-time Content Guardrails", zh: "实时内容护栏" },
    desc: {
      en: "Fangcun Guard provides real-time interception at the AI output layer, 10 risk categories, Chinese optimized, p99 8ms, F1 91.1 across 6 benchmarks.",
      zh: "方寸 Guard 在 AI 输出层提供实时拦截，10 类风险细分，中文专项优化，p99 8ms，F1 91.1 跨 6 项 benchmark。",
    },
  },
  {
    icon: ScanSearch,
    title: { en: "Runtime Monitoring & Audit", zh: "运行时监控审计" },
    desc: {
      en: "Fangcun Observer integrates with zero code changes, tracking tool calls, network requests, and sensitive file access with full session replay, building a trustworthy evidence chain.",
      zh: "方寸 Observer 零代码接入，对工具调用、出网请求、敏感文件访问全程留痕，任意会话可回放，构建可信证据链。",
    },
  },
  {
    icon: Bot,
    title: { en: "Supply Chain Security Scanning", zh: "供应链安全扫描" },
    desc: {
      en: "SkillWard uses a three-stage scan (static analysis + LLM evaluation + Docker sandbox), fully open source (Apache 2.0), with 99% sandbox deployment success rate.",
      zh: "SkillWard 通过静态分析 + LLM 研判 + Docker 沙箱三阶段扫描，完全开源（Apache 2.0），沙箱部署成功率 99%。",
    },
  },
  {
    icon: Swords,
    title: { en: "Automated Red Team Testing", zh: "自动红队测试" },
    desc: {
      en: "Fangcun RedTeam automatically generates jailbreak samples, performs adversarial testing, and produces comprehensive security reports to continuously validate AI system defenses.",
      zh: "方寸 RedTeam 自动生成越狱样本，执行对抗性测试，输出完整安全报告，持续验证 AI 系统防御能力。",
    },
  },
]

export function CoreTech() {
  const { lang } = useLanguage()

  return (
    <section id="tech" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
            {lang === "zh" ? (
              <>
                研究驱动 全链路覆盖的
                <br className="hidden sm:block" />
                AI 安全防护核心技术
              </>
            ) : (
              <>
                Research-Driven Full-Chain
                <br className="hidden sm:block" />
                AI Security Core Technologies
              </>
            )}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title[lang]}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{c.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.desc[lang]}
                </p>
              </div>
            )
          })}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card p-4 md:p-8">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%), linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)", maskComposite: "intersect", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%), linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)", WebkitMaskComposite: "source-in" }}
            >
              <source src="/videos/media-1-1080p.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
