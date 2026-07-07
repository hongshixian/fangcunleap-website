"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "./language-context"
import { LazyVideo } from "./lazy-video"

const solutions = [
  {
    title: { en: "Data Leakage", zh: "数据泄露" },
    desc: {
      en: "LLMs hallucinate, leak data, and follow adversarial instructions — silently.",
      zh: "大语言模型会产生幻觉、泄露数据，并默默执行对抗性指令。",
    },
    video: "/videos/adv-data-1080p.mp4",
  },
  {
    title: { en: "Agent Overreach", zh: "智能体越权" },
    desc: {
      en: "Autonomous agents act beyond their permissions without audit trails or kill switches.",
      zh: "自主智能体超越权限行动，缺乏审计追踪和紧急终止机制。",
    },
    video: "/videos/adv-agent-1080p.mp4",
  },
  {
    title: { en: "Supply Chain Risk", zh: "供应链风险" },
    desc: {
      en: "AI supply chains introduce hidden dependencies — poisoned models, compromised plugins, and unvetted third-party tools.",
      zh: "AI 供应链引入隐藏依赖——被污染的模型、受损的插件和未审查的第三方工具。",
    },
    video: "/videos/adv-skill-1080p.mp4",
  },
]

export function Solutions() {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(0)

  return (
    <section id="solutions" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1450px] px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
            {lang === "zh" ? (
              <>
                AI 系统无比强大
                <br className="hidden sm:block" />
                但失控之后，它们是巨大隐患
              </>
            ) : (
              <>
                AI Systems Are Immensely Powerful
                <br className="hidden sm:block" />
                But Out of Control, They Are Massive Risks
              </>
            )}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_4fr]" style={{ height: "460px" }}>
          <div className="flex flex-col h-full">
            {solutions.map((s, i) => {
              const active = open === i
              const isLast = i === solutions.length - 1
              // 展开占50%, 折叠各占25% (减去间距后实际略小)
              const height = active ? "calc(50% - 4px)" : "calc(25% - 4px)"
              return (
                <div
                  key={s.title[lang]}
                  onMouseEnter={() => setOpen(i)}
                  style={{ height, transition: "height 0.35s ease, border-color 0.3s, box-shadow 0.3s" }}
                  className={`flex flex-col rounded-2xl border overflow-hidden cursor-pointer ${
                    active ? "border-primary/40 bg-card shadow-md" : "border-border bg-card"
                  } ${!isLast ? "mb-2" : ""}`}
                >
                  <div className="flex items-center justify-between gap-4 px-6 py-4 shrink-0">
                    <span className="text-lg font-bold">{s.title[lang]}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${active ? "rotate-180 text-primary" : ""}`} />
                  </div>
                  <div className={`px-6 pb-4 transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.desc[lang]}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card h-full">
            {solutions.map((s, i) => (
              <LazyVideo
                key={s.video}
                src={s.video}
                className={`absolute inset-0 h-full w-full object-contain p-6 transition-opacity duration-500 pointer-events-none ${open === i ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
