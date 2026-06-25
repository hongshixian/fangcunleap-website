"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Layers, Boxes } from "lucide-react"

const products = [
  {
    key: "infra",
    tab: "Agentic Infra 自主式基础设施平台",
    icon: Layers,
    title: "Agentic Infra 自主式基础设施平台",
    subtitle: "面向 AI 原生企业的大规模模型训练推理一体化平台",
    image: "/illustrations/product-infra.png",
    features: ["多元异构算力基座", "万卡级大模型训练服务", "大规模模型推理服务", "Agent 智能化服务体系"],
  },
  {
    key: "maas",
    tab: "Agentic MaaS 大模型服务平台",
    icon: Boxes,
    title: "Agentic MaaS 大模型服务平台",
    subtitle: "面向企业与开发者输出大规模 AI 智力的“Token 工厂”",
    image: "/illustrations/product-maas.png",
    features: ["模型生态与兼容", "统一接入与流量治理", "推理执行与性能优化", "资源调度与编排", "灵活计费与订阅管理", "智能服务运维"],
  },
]

export function Products() {
  const [active, setActive] = useState(0)
  const product = products[active]

  return (
    <section id="products" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            M 种模型 x N 种芯片技术新范式
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            实现多种模型算法与多种芯片硬件间的极致效率与成本优化
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <button
                key={p.key}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors ${
                  active === i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {p.tab}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid items-center gap-8 rounded-3xl border border-border bg-card p-6 md:p-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Image
              src={product.image}
              alt={product.title}
              width={620}
              height={520}
              className="mx-auto w-full max-w-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold md:text-3xl">{product.title}</h3>
            <p className="mt-3 text-muted-foreground">{product.subtitle}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
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
              查看详情 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
