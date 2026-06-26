"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Shield, Eye } from "lucide-react"
import { useLanguage } from "./language-context"

const products = [
  {
    key: "guard",
    tab: { en: "Fangcun Guard Real-time Guardrails", zh: "方寸 Guard 实时内容护栏" },
    icon: Shield,
    title: { en: "Fangcun Guard", zh: "方寸 Guard" },
    subtitle: { en: "Real-time Content Guardrails for AI Agents", zh: "面向 AI Agent 的实时内容护栏" },
    image: "/images/pic-guard.png",
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
    image: "/images/pic-ob.png",
    features: {
      en: ["Zero-code Integration", "Full Tool Call Logging", "Network Request Tracking", "Sensitive File Access Logs", "Session Replay", "Local-first Evidence Storage"],
      zh: ["零代码改造接入", "工具调用全留痕", "出网请求追踪", "敏感文件访问记录", "任意会话可回放", "本地优先证据留存"],
    },
  },
]

export function Products() {
  const { lang } = useLanguage()
  const [active, setActive] = useState(0)
  const product = products[active]

  return (
    <section id="products" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
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

        <div className="mt-10 grid items-center gap-8 rounded-3xl border border-border bg-card p-6 md:p-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Image
              src={product.image}
              alt={product.title[lang]}
              width={620}
              height={520}
              className="mx-auto w-full max-w-lg"
            />
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
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              {lang === "zh" ? "查看详情" : "Learn More"} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
