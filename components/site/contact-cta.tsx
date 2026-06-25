import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ContactCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[280px] w-full md:h-[360px]">
        <Image
          src="/site/contact-banner.jpg"
          alt="释放无穹智能，让 AGI 触手可及"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.18_0.05_285)]/55" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center md:px-6">
          <h2 className="text-balance text-2xl font-bold text-primary-foreground md:text-4xl">
            释放无穹智能，让 AGI 触手可及
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-primary-foreground/80 md:text-base">
            无论您是企业、开发者还是合作伙伴，我们都期待与您一起，探索通用人工智能基础设施的无限可能
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 text-sm font-semibold text-[oklch(0.3_0.12_290)] transition-transform hover:scale-[1.03]"
          >
            立即咨询 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
