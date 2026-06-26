"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Newspaper, Radio } from "lucide-react"
import { useLanguage } from "./language-context"

const newsData = {
  动态: [
    {
      img: "/images/blog-observer-side-effect.png",
      tag: "Engineering",
      date: { en: "May 6, 2026", zh: "2026年5月6日" },
      title: {
        en: "Observer: Runtime Security Guardian for AI Agents",
        zh: "Observer：AI 智能体的运行时安全守护者",
      },
      href: "/blog/observer",
    },
    {
      img: "/images/blog-plugin-architecture.png",
      tag: "Engineering",
      date: { en: "May 1, 2026", zh: "2026年5月1日" },
      title: {
        en: "AgentPlugin: Add Runtime Protection to Agents with One Line of Code",
        zh: "AgentPlugin：一行代码为智能体添加运行时防护",
      },
      href: "/blog/plugin",
    },
    {
      img: "/images/blog-fangcunguard-overview.png",
      tag: "Engineering",
      date: { en: "Apr 24, 2026", zh: "2026年4月24日" },
      title: {
        en: "FangcunGuard: High-Performance Prompt Injection Detection Benchmark",
        zh: "FangcunGuard：高性能 Prompt 注入检测基准",
      },
      href: "/blog/fangcunguard",
    },
    {
      img: "/images/skillward-architecture.png",
      tag: "Research",
      date: { en: "Apr 10, 2026", zh: "2026年4月10日" },
      title: {
        en: "SkillWard: Three-Stage Scanner Guarding Skill Security",
        zh: "SkillWard：三阶段扫描器守护 Skill 安全",
      },
      href: "/blog/skillward",
    },
  ],
  媒体: [
    {
      img: "/images/news-xinzhiyuan.webp",
      tag: { en: "Synced", zh: "新智元" },
      date: { en: "May 7, 2026", zh: "2026年5月7日" },
      title: {
        en: "Chilling Risks Hidden in Agents! Tsinghua Team's Combo Punch Captures Full-Chain Threats",
        zh: "细思极恐！Agent 暗藏风险，清华团队打出组合拳，全链路一网打尽",
      },
      href: "/news",
      type: "image" as const,
    },
    {
      tag: { en: "AIIA", zh: "人工智能产业发展联盟 AIIA" },
      date: { en: "Apr 13, 2026", zh: "2026年4月13日" },
      title: {
        en: "Technical Specification for Trustworthy Capabilities of Intelligent Assistant Agents (Claw) Officially Released",
        zh: "智能助理智能体（Claw）可信能力技术规范正式发布",
      },
      href: "/news",
      type: "badge" as const,
      badge: { text: { en: "Official Release", zh: "权威发布" }, gradient: "from-blue-600 via-blue-700 to-indigo-800" },
    },
    {
      tag: { en: "TC260", zh: "全国网安标委" },
      date: { en: "Mar 31, 2026", zh: "2026年3月31日" },
      title: {
        en: "Public Consultation on Network Security Standard Practice Guide—OpenClaw Agent Deployment and Use Security Guidelines (Draft)",
        zh: "关于对《网络安全标准实践指南——OpenClaw 类智能体部署使用安全指引（征求意见稿）》公开征求意见的通知",
      },
      href: "/news",
      type: "badge" as const,
      badge: { text: { en: "Major Release", zh: "重磅发布" }, gradient: "from-red-600 via-red-700 to-rose-800" },
    },
  ],
}

const tabs = [
  { key: "媒体" as const, label: { en: "Press Coverage", zh: "媒体报道" }, icon: Radio },
  { key: "动态" as const, label: { en: "Latest Updates", zh: "最新动态" }, icon: Newspaper },
]

export function News() {
  const { lang } = useLanguage()
  const [tab, setTab] = useState<"动态" | "媒体">("媒体")
  const items = newsData[tab]

  return (
    <section id="news" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-balance text-3xl font-bold md:text-4xl">
          {lang === "zh"
            ? "方寸跃迁动态 守护 AI 安全前沿"
            : "Fangcun Leap Updates: Guarding the AI Security Frontier"}
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex gap-1 rounded-full border border-border bg-card p-1">
            {tabs.map((t) => {
              const Icon = t.icon
              const active = tab === t.key
              return (
                <button
                  key={t.key}
                  onMouseEnter={() => setTab(t.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t.label[lang]}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <a
              key={typeof n.title === "string" ? n.title : n.title[lang]}
              href={n.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {n.type === "badge" ? (
                  <div className={`h-full w-full bg-gradient-to-br ${n.badge.gradient} flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold text-center px-4 leading-tight">
                      {n.badge.text[lang]}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={n.img!}
                    alt={typeof n.title === "string" ? n.title : n.title[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-3 flex-1 text-sm font-semibold leading-relaxed transition-colors group-hover:text-primary">
                  {typeof n.title === "string" ? n.title : n.title[lang]}
                </h3>
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="rounded bg-accent px-2 py-1 font-medium text-accent-foreground">
                    {typeof n.tag === "string" ? n.tag : n.tag[lang]}
                  </span>
                  <span className="text-muted-foreground">
                    {typeof n.date === "string" ? n.date : n.date[lang]}
                  </span>
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
            {lang === "zh" ? "查看所有动态" : "View All Updates"} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
