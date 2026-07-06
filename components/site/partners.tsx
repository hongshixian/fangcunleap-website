"use client"

import { useLanguage } from "./language-context"

const logos = [
  { src: "/partners-fangcun/tsinghua.png", alt: "清华大学" },
  { src: "/partners-fangcun/unisplendour.png", alt: "新紫光集团" },
  { src: "/partners-fangcun/cnaisda.png", alt: "CnAISDA" },
  { src: "/partners-fangcun/saif.svg", alt: "SAIF" },
  { src: "/partners-fangcun/logo-shuimuqinghua.png", alt: "水木清华" },
  { src: "/partners-fangcun/logo-xinglian.png", alt: "星联" },
  { src: "/partners-fangcun/logo-SEEFUND.png", alt: "SEEFUND" },
  { src: "/partners-fangcun/qizhilogo1.svg", alt: "启智" },
]

const row1 = logos
const row2 = [...logos].reverse()

function Marquee({ items, reverse = false }: { items: typeof logos; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-pause relative flex w-full overflow-hidden">
      <div
        className="animate-marquee flex shrink-0 items-center gap-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            className="flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-background px-6 transition-colors hover:border-primary/60"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 w-auto max-w-[140px] object-contain opacity-80 transition-opacity hover:opacity-100"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div
        className="animate-marquee flex shrink-0 items-center gap-4 ml-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
        aria-hidden="true"
      >
        {doubled.map((logo, i) => (
          <div
            key={`${logo.src}-${i}-dup`}
            className="flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-background px-6 transition-colors hover:border-primary/60"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 w-auto max-w-[140px] object-contain opacity-80 transition-opacity hover:opacity-100"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Partners() {
  const { lang } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20">
      <div className="relative mx-auto max-w-[1450px] px-4 md:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          RESEARCH & INDUSTRY PARTNERS
        </p>
        <h2 className="mt-3 text-balance text-center text-2xl font-bold text-foreground md:text-3xl">
          {lang === "zh"
            ? "携手学术机构与行业伙伴，共建可信 AI 生态"
            : "Partnering with Academic Institutions and Industry Leaders to Build a Trustworthy AI Ecosystem"}
        </h2>
      </div>
      <div className="relative mt-12 flex flex-col gap-5">
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>
    </section>
  )
}
