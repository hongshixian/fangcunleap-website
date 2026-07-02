"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "./language-context"

export function Hero() {
  const { lang } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative pb-20 pt-16">
        {/* Image background */}
        <Image
          src="/hero-1.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" aria-hidden />
        <div className="absolute inset-0 grid-mask opacity-40" aria-hidden />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-4 pt-16 md:px-6 lg:grid-cols-2">
          <div className="text-white">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
              {lang === "zh" ? "守护人工智能的安全未来" : "Securing the future of artificial intelligence"}
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {lang === "zh" ? (
                <>
                  守护人工智能
                  <br />
                  的安全未来
                </>
              ) : (
                <>
                  Securing the Future
                  <br />
                  of Artificial Intelligence
                </>
              )}
            </h1>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/80">
              {lang === "zh"
                ? "我们构建防御系统，保护 AI 模型、大语言模型和自主智能体免受对抗性威胁——让您无畏创新。"
                : "We build defense systems to protect AI models, large language models, and autonomous agents from adversarial threats — empowering fearless innovation."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                {lang === "zh" ? "立即防护" : "Get Protected"} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {lang === "zh" ? "我们的方案" : "Our Solutions"}
              </a>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            {/* Right side can be empty or contain overlay content */}
          </div>
        </div>
      </div>
    </section>
  )
}
