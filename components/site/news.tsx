"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Newspaper, Radio } from "lucide-react"

const newsData = {
  动态: [
    {
      img: "/news/n1.png",
      tag: "新闻动态",
      date: "2026年04月",
      title: "习近平总书记调研上海“模速空间”，无问芯穹首席执行官夏立雪向总书记作重点汇报",
    },
    {
      img: "/news/n2.png",
      tag: "新闻动态",
      date: "2026年03月",
      title: "2026 中关村论坛实录 | 杨植麟 / 张鹏 / 夏立雪 / 罗福莉 / 黄超，谈“Token 经济学”",
    },
    {
      img: "/news/n3.png",
      tag: "新闻动态",
      date: "2026年03月",
      title: "智能体生态论坛圆满举办！无问芯穹发布企业级智能体服务平台，共话智能体创新生态",
    },
    {
      img: "/news/n4.png",
      tag: "新闻动态",
      date: "2026年03月",
      title: "夏立雪：从视 Agent 为工具到视为协作者，Agentic AI 是基础设施必须跟上的系统性革命",
    },
    {
      img: "/news/n5.jpg",
      tag: "新闻动态",
      date: "2026年05月",
      title: "无问芯穹再获超 7 亿融资，首发 AI 生产力公式 跻身 Token 经济枢纽",
    },
    {
      img: "/news/n6.png",
      tag: "新闻动态",
      date: "2026年05月",
      title: "无问芯穹与 AMD 共建云边端全链路开源生态，赋能“AI 生产力”新纪元",
    },
  ],
  媒体: [
    {
      img: "/media/m1.png",
      tag: "人民日报",
      date: "2026年03月",
      title: "【人民日报】无问芯穹发布企业级智能体服务平台",
    },
    {
      img: "/media/m2.png",
      tag: "中国日报",
      date: "2026年03月",
      title: "【中国日报】首次公开！无问芯穹推出基础设施智能体蜂群，打造新一代 Agentic Infra",
    },
    {
      img: "/media/m3.png",
      tag: "中国新闻网",
      date: "2026年03月",
      title: "【中国新闻网】DeepSeek 国际舞台崭露头角，《麻省理工科技评论》点名四家中国 AI 初创企业",
    },
    {
      img: "/media/m4.png",
      tag: "极客公园",
      date: "2026年03月",
      title: "【极客公园】张鹏对话夏立雪：中国的 Scaling Law 是场景优势，异构算力解决落地难题",
    },
    {
      img: "/media/m5.webp",
      tag: "量子位",
      date: "2026年05月",
      title: "【量子位】Token 需求狂飙千倍，22 亿热钱涌向这家 AGI Infra 头号玩家",
    },
  ],
}

const tabs = [
  { key: "动态" as const, label: "新闻动态", icon: Newspaper },
  { key: "媒体" as const, label: "媒体报道", icon: Radio },
]

export function News() {
  const [tab, setTab] = useState<"动态" | "媒体">("动态")
  const items = newsData[tab]

  return (
    <section id="news" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-balance text-3xl font-bold md:text-4xl">
          精选无穹资讯 与 AI 共同进化
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
              href="#"
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
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50"
          >
            查看所有动态 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
