const logos = Array.from({ length: 24 }, (_, i) => `/partners/p${i + 1}.png`)
const row1 = logos.slice(0, 12)
const row2 = logos.slice(12, 24)

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-pause flex w-full overflow-hidden">
      <div
        className="animate-marquee flex shrink-0 items-center gap-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 transition-colors hover:border-primary/50 hover:bg-white/[0.06]"
          >
            <img
              src={src || "/placeholder.svg"}
              alt="生态合作伙伴"
              className="max-h-12 w-auto max-w-[140px] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Partners() {
  return (
    <section className="hero-gradient relative overflow-hidden py-20">
      <div className="grid-mask pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
          ECOSYSTEM PARTNERS
        </p>
        <h2 className="mt-3 text-balance text-center text-2xl font-bold text-primary-foreground md:text-3xl">
          携手芯片、模型与行业伙伴，共建 AGI 基础设施
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-center text-sm leading-relaxed text-primary-foreground/70">
          已与数十家芯片厂商、大模型团队及行业客户深度协同，构建开放繁荣的智能生态
        </p>
        <div className="mt-12 flex flex-col gap-5">
          <Marquee items={row1} />
          <Marquee items={row2} reverse />
        </div>
      </div>
    </section>
  )
}
