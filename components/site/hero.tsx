import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative pb-20 pt-16">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-bg-loop.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" aria-hidden />
        <div className="absolute inset-0 grid-mask opacity-40" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-16 md:px-6 lg:grid-cols-2">
          <div className="text-white">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
              Securing the future of artificial intelligence
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              守护人工智能
              <br />
              的安全未来
            </h1>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/80">
              我们构建防御系统，保护 AI 模型、大语言模型和自主智能体免受对抗性威胁——让您无畏创新。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                立即防护 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                我们的方案
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
