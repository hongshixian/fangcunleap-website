"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Shield, Eye, ScanSearch, Swords } from "lucide-react"
import { useLanguage } from "./language-context"

const products = [
  {
    key: "guard",
    tab: { en: "Fangcun Guard Real-time Guardrails", zh: "方寸 Guard 实时内容护栏" },
    icon: Shield,
    title: { en: "Fangcun Guard", zh: "方寸 Guard" },
    subtitle: { en: "Real-time Content Guardrails for AI Agents", zh: "面向 AI Agent 的实时内容护栏" },
    video: "/videos/media-gd-1080p.mp4",
    features: {
      en: ["F1 91.1 Overall Score", "p99 8ms Low Latency", "10 Risk Categories", "Chinese Optimized", "Per-tenant Threshold Config", "6 Benchmark Aligned"],
      zh: ["F1 91.1 综合评分", "p99 8ms 低延迟", "10 类风险细分", "中文专项优化", "按租户独立配阈值", "6 项 benchmark 对齐"],
    },
  },
  {
    key: "observer",
    tab: { en: "Fangcun Observer Runtime Monitoring", zh: "方寸 Observer 运行时监控" },
    icon: Eye,
    title: { en: "Fangcun Observer", zh: "方寸 Observer" },
    subtitle: { en: "Agent Runtime Monitoring and Audit Trail", zh: "Agent 运行时监控与审计追踪" },
    video: "/videos/media-ob-1080p.mp4",
    features: {
      en: ["Zero-code Integration", "Full Tool Call Logging", "Network Request Tracking", "Sensitive File Access Logs", "Session Replay", "Local-first Evidence Storage"],
      zh: ["零代码改造接入", "工具调用全留痕", "出网请求追踪", "敏感文件访问记录", "任意会话可回放", "本地优先证据留存"],
    },
  },
  {
    key: "skillward",
    tab: { en: "SkillWard Supply Chain Security", zh: "方寸 SkillWard 供应链安全" },
    icon: ScanSearch,
    title: { en: "SkillWard", zh: "方寸 SkillWard" },
    subtitle: { en: "Supply Chain Security Scanning for AI Skills", zh: "AI Skill 供应链安全扫描" },
    video: "/videos/media-sw-1080p.mp4",
    features: {
      en: ["Three-stage Scan Pipeline", "Static Analysis + LLM Review", "Docker Sandbox Verification", "99% Deployment Success", "Open Source Apache 2.0", "Automated Risk Reports"],
      zh: ["三阶段扫描流程", "静态分析 + LLM 研判", "Docker 沙箱验证", "99% 部署成功率", "开源 Apache 2.0", "自动化风险报告"],
    },
  },
  {
    key: "redteam",
    tab: { en: "Fangcun RedTeam Adversarial Testing", zh: "方寸 RedTeam 自动红队测试" },
    icon: Swords,
    title: { en: "Fangcun RedTeam", zh: "方寸 RedTeam" },
    subtitle: { en: "Automated Red Team Testing for AI Systems", zh: "AI 系统自动化红队测试" },
    video: "/videos/media-rt-1080p.mp4",
    features: {
      en: ["Auto Jailbreak Generation", "Adversarial Test Scenarios", "Comprehensive Security Reports", "Defense Validation", "Continuous Attack Simulation", "Multi-vector Testing"],
      zh: ["自动越狱样本生成", "对抗性测试场景", "完整安全报告输出", "防御能力验证", "持续攻击模拟", "多向量攻击测试"],
    },
  },
]

export function Products() {
  const { lang } = useLanguage()
  const [active, setActive] = useState(0)
  const product = products[active]

  const getProductLink = (key: string) => {
    const links: Record<string, string> = {
      guard: "/blog/fangcunguard",
      observer: "/blog/observer",
      skillward: "/blog/skillward",
      redteam: "/solutions#redteam",
    }
    return links[key] || "#contact"
  }

  return (
    <section id="products" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1450px] px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            {lang === "zh" ? "构建 AI 与人类之间的信任" : "Building Trust Between AI and Humans"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            {lang === "zh"
              ? "多层安全架构，全方位保护 AI 交互的每一个维度"
              : "Multi-layered security architecture, protecting every dimension of AI interaction"}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <button
                key={p.key}
                onMouseEnter={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors ${
                  active === i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {p.tab[lang]}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid items-center gap-8 rounded-3xl border border-border bg-card p-6 md:p-10 lg:grid-cols-2 lg:min-h-[580px]">
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <video
              key={product.video}
              autoPlay
              loop
              muted
              playsInline
              className="mx-auto w-full max-w-lg object-contain"
              style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)", maskComposite: "intersect", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)", WebkitMaskComposite: "source-in" }}
            >
              <source src={product.video} type="video/mp4" />
            </video>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold md:text-3xl">{product.title[lang]}</h3>
            <p className="mt-3 text-muted-foreground">{product.subtitle[lang]}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features[lang].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href={getProductLink(product.key)}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              {lang === "zh" ? "查看详情" : "Learn More"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
