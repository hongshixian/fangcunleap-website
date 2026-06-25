import Image from “next/image”
import { ArrowRight, ChevronRight } from “lucide-react”

export function Hero() {
  return (
    <section id=”top” className=”relative overflow-hidden”>
      <div className=”hero-gradient relative pb-40 pt-16”>
        <div className=”absolute inset-0 grid-mask opacity-60” aria-hidden />
        <div className=”relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-16 md:px-6 lg:grid-cols-2”>
          <div className=”text-white”>
            <p className=”mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/70”>
              AI Security Company
            </p>
            <h1 className=”text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl”>
              守护人工智能的
              <br />
              安全未来
            </h1>
            <p className=”mt-6 max-w-md text-pretty text-base leading-relaxed text-white/80”>
              我们构建防御系统，保护 AI 模型、大语言模型和自主智能体免受对抗性威胁——让您无畏创新。
            </p>
            <div className=”mt-8 flex flex-wrap gap-4”>
              <a
                href=”#contact”
                className=”inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5”
              >
                立即防护 <ArrowRight className=”h-4 w-4” />
              </a>
              <a
                href=”#solutions”
                className=”inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10”
              >
                我们的方案 <ChevronRight className=”h-4 w-4” />
              </a>
            </div>
          </div>

          <div className=”relative”>
            <Image
              src=”/illustrations/hero-isometric.png”
              alt=”AI 安全基础设施示意图”
              width={760}
              height={620}
              priority
              className=”mx-auto w-full max-w-xl drop-shadow-2xl”
            />
          </div>
        </div>
      </div>
    </section>
  )
}
