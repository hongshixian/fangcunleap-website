import Image from "next/image"
import { ArrowRight } from "lucide-react"

const heroNews = [
  { tag: "新闻动态", date: "2026年03月", title: "2026 中关村论坛实录 | 谈“Token 经济学”与通用人工智能基础设施的未来" },
  { tag: "新闻动态", date: "2025年12月", title: "智能体生态论坛圆满举办！无问芯穹发布企业级智能体服务平台" },
  { tag: "新闻动态", date: "2025年10月", title: "从视 Agent 为工具，到视 Agent 为协作者，Agentic AI 是一场系统性革命" },
  { tag: "新闻动态", date: "2026年05月", title: "无问芯穹再获超 7 亿融资，首发 AI 生产力公式 跻身 Token 经济枢纽" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-gradient relative pb-40 pt-16">
        <div className="absolute inset-0 grid-mask opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-16 md:px-6 lg:grid-cols-2">
          <div className="text-white">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
              AI Infrastructure Service Provider
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              通用人工智能
              <br />
              基础设施服务商
            </h1>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/80">
              软硬件协同、M 种模型 x N 种芯片，让通用人工智能的算力更高效、更普惠、更自主。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                立即咨询 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                了解更多
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/illustrations/hero-isometric.png"
              alt="人工智能基础设施等距示意图"
              width={760}
              height={620}
              priority
              className="mx-auto w-full max-w-xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
