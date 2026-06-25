"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Newspaper, Radio } from "lucide-react"

const newsData = {
  动态: [
    {
      img: "/news/n1.png",
      tag: "Engineering",
      date: "2026年05月",
      title: "Fangcun Observer: runtime safety for AI agents — 运行时监控与审计正式发布",
      href: "/blog/observer",
    },
    {
      img: "/news/n2.png",
      tag: "Engineering",
      date: "2026年05月",
      title: "Fangcun AgentPlugin: a runtime guardrail for OpenClaw — 一行命令装完的护栏 SDK",
      href: "/blog/plugin",
    },
    {
      img: "/news/n3.png",
      tag: "Engineering",
      date: "2026年04月",
      title: "Fangcun Guard: guarding the safety floor of every agent — 实时内容护栏正式上线",
      href: "/blog/fangcunguard",
    },
    {
      img: "/news/n4.png",
      tag: "Research",
      date: "2026年04月",
      title: "SkillWard: trading uncertain warnings for runtime evidence — 开源 Skill 安全扫描工具发布",
      href: "/blog/skillward",
    },
    {
      img: "/news/n5.jpg",
      tag: "新闻动态",
      date: "2026年04月",
      title: "智能助理智能体（Claw）可信能力技术规范发布 — 人工智能产业发展联盟 AIIA",
      href: "/news",
    },
    {
      img: "/news/n6.png",
      tag: "新闻动态",
      date: "2026年03月",
      title: "OpenClaw 类智能体部署使用安全指引征求意见 — 全国网安标委",
      href: "/news",
    },
  ],
  媒体: [
    {
      img: "/media/m1.png",
      tag: "新智元",
      date: "2026年05月",
      title: "细思极恐！Agent 暗藏风险，清华团队打出组合拳，全链路一网打尽",
      href: "/news",
    },
    {
      img: "/media/m2.png",
      tag: "媒体报道",
      date: "2026年04月",
      title: "SkillWard 开源发布：5000 个真实 Skill 评测，25% 被判不安全",
      href: "/blog/skillward",
    },
    {
      img: "/media/m3.png",
      tag: "媒体报道",
      date: "2026年04月",
      title: "方寸跃迁方寸 Guard 上线：AI Agent 实时内容护栏，p99 8ms，F1 91.1",
      href: "/blog/fangcunguard",
    },
    {
      img: "/media/m4.png",
      tag: "媒体报道",
      date: "2026年05月",
      title: "方寸 Observer 发布 Beta：零代码接入 Agent 运行时监控与审计追踪",
      href: "/blog/observer",
    },
    {
      img: "/media/m5.webp",
      tag: "媒体报道",
      date: "2026年05月",
      title: "AgentPlugin 发布：给 OpenClaw 装上运行时护栏，单行命令完成部署",
      href: "/blog/plugin",
    },
  ],
}

const tabs = [
  { key: "动态" as const, label: "最新动态", icon: Newspaper },
  { key: "媒体" as const, label: "媒体报道", icon: Radio },
]

export function News() {
  const [tab, setTab] = useState<"动态" | "媒体">("动态")
  const items = newsData[tab]

  return (
    <section id="news" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-balance text-3xl font-bold md:text-4xl">
          方寸跃迁动态 守护 AI 安全前沿
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex gap-1 rounded-full border border-border bg-card p-1">
            {tabs.map((t) => {
              const Icon = t.icon
              const active = tab === t.key
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <a
              key={n.title}
              href={n.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={n.img}
                  alt={n.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-3 flex-1 text-sm font-semibold leading-relaxed transition-colors group-hover:text-primary">
                  {n.title}
                </h3>
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="rounded bg-accent px-2 py-1 font-medium text-accent-foreground">
                    {n.tag}
                  </span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50"
          >
            查看所有动态 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
