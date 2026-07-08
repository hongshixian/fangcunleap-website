"use client"

import { ArrowRight } from "lucide-react"
import { useLanguage } from "./language-context"
import { MeshGradientBackground } from "./mesh-gradient-background"

export function Hero() {
  const { lang } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden bg-[#00000e] min-h-screen flex items-center">
      {/* Procedurally rendered mesh-gradient background (replaces static hero image) */}
      <MeshGradientBackground />

      {/* Fallback gradient shown before WebGL is ready */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f06bff_0%,#9222d8_34%,#2d0055_66%,#00000e_100%)]"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" aria-hidden />
      <div className="absolute inset-0 grid-mask opacity-40" aria-hidden />

      <div className="relative w-full py-16">
        <div className="relative mx-auto grid max-w-[1450px] items-center gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="text-white">
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
