"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

const solutions = [
  {
    title: "数据泄露防护",
    desc: "大语言模型会产生幻觉、泄露数据，并默默执行对抗性指令。方寸 Guard 提供实时内容护栏，在输出层拦截风险，F1 91.1，p99 8ms，让每一次 AI 交互都可信。",
    tags: ["内容护栏", "实时拦截", "风险分类", "中文优化"],
    image: "/images/pic-m1.png",
  },
  {
    title: "智能体越权防护",
    desc: "自主智能体超越权限行动，缺乏审计追踪和紧急终止机制。方寸 Observer 零代码接入，对工具调用、出网请求、敏感文件访问全程留痕，任意会话可回放，事后追责有据可查。",
    tags: ["运行时监控", "审计追踪", "会话回放", "零代码接入"],
    image: "/images/pic-m2.png",
  },
  {
    title: "供应链安全扫描",
    desc: "AI 供应链引入隐藏依赖——被污染的模型、受损的插件和未审查的第三方工具。SkillWard 通过静态分析 + LLM 研判 + Docker 沙箱三阶段扫描，揪出纯审阅流水线看不见的运行时威胁。",
    tags: ["静态分析", "LLM 研判", "Docker 沙箱", "开源 Apache 2.0"],
    image: "/images/pic-m3.png",
  },
  {
    title: "自动红队测试",
    desc: "方寸 RedTeam 面向 AI 应用进行自动化对抗测试，根据你的护栏策略生成定向越狱样本，输出可验证的安全报告，帮助企业在上线前发现护栏盲区。",
    tags: ["越狱样本生成", "安全报告", "定向测试", "研究预览"],
    image: "/images/pic-m4.png",
  },
]

export function Solutions() {
  const [open, setOpen] = useState(0)

  return (
    <section id="solutions" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
            AI 系统无比强大
            <br className="hidden sm:block" />
            但失控之后，它们是巨大隐患
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {solutions.map((s, i) => {
              const active = open === i
              return (
                <div
                  key={s.title}
                  onMouseEnter={() => setOpen(i)}
                  className={`rounded-2xl border transition-colors ${
                    active ? "border-primary/40 bg-card shadow-md" : "border-border bg-card"
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-4 px-6 py-5">
                    <span className="text-lg font-bold">{s.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                        active ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </div>
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

          <div className="relative flex items-center overflow-hidden rounded-3xl border border-border bg-card p-6 lg:self-stretch">
            <Image
              key={open}
              src={solutions[open].image}
              alt={solutions[open].title}
              width={680}
              height={560}
              className="mx-auto w-full max-w-lg transition-opacity duration-300"
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
