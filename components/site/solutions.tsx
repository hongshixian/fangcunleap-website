"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

const solutions = [
  {
    title: "AI 原生企业解决方案",
    desc: "为 AI 原生企业提供从模型开发到规模化商用的一站式 AI 基础设施平台与工程技术服务",
    tags: ["企业级智能体部署", "数据安全合规", "业务流程自动化", "降低 AI 应用门槛", "提升运营效率", "保障数据安全"],
  },
  {
    title: "智能制造解决方案",
    desc: "面向制造业的质检、排产与设备预测性维护场景，提供端到端的智能化升级方案",
    tags: ["缺陷检测", "智能排产", "预测性维护", "工艺优化"],
  },
  {
    title: "AIGC 行业解决方案",
    desc: "为内容创作、营销与设计行业提供高并发、低成本的多模态生成能力",
    tags: ["文生图/视频", "营销内容生成", "多模态创作", "成本优化"],
  },
  {
    title: "智能终端解决方案",
    desc: "面向智能硬件与具身智能终端，提供端云协同的模型部署与推理优化方案",
    tags: ["端侧推理", "端云协同", "模型压缩", "具身智能"],
  },
]

export function Solutions() {
  const [open, setOpen] = useState(0)

  return (
    <section id="solutions" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
            助力 AI 时代
            <br className="hidden sm:block" />
            各行各业的智能革命
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {solutions.map((s, i) => {
              const active = open === i
              return (
                <div
                  key={s.title}
                  className={`rounded-2xl border transition-colors ${
                    active ? "border-primary/40 bg-card shadow-md" : "border-border bg-card"
                  }`}
                >
                  <button
                    onClick={() => setOpen(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={active}
                  >
                    <span className="text-lg font-bold">{s.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                        active ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {active && (
                    <div className="px-6 pb-6">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                      <a
                        href="#contact"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                      >
                        查看详情 <ArrowRight className="h-4 w-4" />
                      </a>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-xs text-secondary-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6">
            <Image
              src="/illustrations/solution.png"
              alt="企业级 AI 解决方案示意图"
              width={680}
              height={560}
              className="mx-auto w-full max-w-lg"
            />
            <a
              href="#contact"
              className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background"
            >
              了解更多 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
