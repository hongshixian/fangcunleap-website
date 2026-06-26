"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "./language-context"

export function ContactCta() {
  const { lang } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[280px] w-full md:h-[360px]">
        <Image
          src="/site/contact-banner.jpg"
          alt={lang === "zh" ? "体验企业级 AI 安全防护" : "Experience Enterprise-Grade AI Security"}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center md:px-6">
          <h2 className="text-balance text-2xl font-bold text-gray-900 md:text-4xl">
            {lang === "zh"
              ? "体验企业级 AI 可观测性"
              : "Experience Enterprise-Grade AI Observability"}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-gray-800 md:text-base">
            {lang === "zh"
              ? "无论您是企业、开发者还是合作伙伴，我们都期待与您一起，构建可信赖的 AI 系统"
              : "Whether you're an enterprise, developer, or partner, we look forward to building trustworthy AI systems together"}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              {lang === "zh" ? "申请演示" : "Request Demo"} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-gray-900/30 bg-white/60 px-7 py-3 text-sm font-semibold text-gray-900 transition-transform hover:scale-[1.03]"
            >
              {lang === "zh" ? "免费试用护栏" : "Try Guardrails Free"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
