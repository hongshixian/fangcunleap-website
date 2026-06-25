const logos = [
  { src: "/partners-fangcun/tsinghua.png", alt: "清华大学" },
  { src: "/partners-fangcun/mit.png", alt: "MIT" },
  { src: "/partners-fangcun/ucberkeley.png", alt: "UC Berkeley" },
  { src: "/partners-fangcun/uw.png", alt: "University of Washington" },
  { src: "/partners-fangcun/baidu.svg", alt: "百度" },
  { src: "/partners-fangcun/unisplendour.png", alt: "新紫光集团" },
  { src: "/partners-fangcun/cnaisda.png", alt: "CnAISDA" },
  { src: "/partners-fangcun/mats.svg", alt: "MATS" },
  { src: "/partners-fangcun/saif.svg", alt: "SAIF" },
]

const row1 = logos.slice(0, 5)
const row2 = logos.slice(4)

function Marquee({ items, reverse = false }: { items: typeof logos; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-pause flex w-full overflow-hidden">
      <div
        className="animate-marquee flex shrink-0 items-center gap-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            className="flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 transition-colors hover:border-primary/50 hover:bg-white/[0.06]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 w-auto max-w-[140px] object-contain grayscale invert brightness-[1.2] contrast-[1.1] opacity-80 transition-opacity hover:opacity-100"
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
          RESEARCH & INDUSTRY PARTNERS
        </p>
        <h2 className="mt-3 text-balance text-center text-2xl font-bold text-primary-foreground md:text-3xl">
          携手学术机构与行业伙伴，共建可信 AI 生态
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-center text-sm leading-relaxed text-primary-foreground/70">
          核心成员来自清华大学和加州大学伯克利分校，与全球顶级学术机构及企业深度合作
        </p>
        <div className="mt-12 flex flex-col gap-5">
          <Marquee items={row1} />
          <Marquee items={row2} reverse />
        </div>
      </div>
    </section>
  )
}
