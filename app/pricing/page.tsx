import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

interface Tier {
  name: string
  highlight: string
  unit?: string
  features: string[]
  cta: string
  ctaHref: string
  featured?: boolean
}

const TIERS: Tier[] = [
  {
    name: "免费体验",
    highlight: "¥0",
    unit: "每月 100 次调用，体验用",
    features: [
      "每月 100 次 scan-input / scan-output 调用额度",
      "scan-input + scan-output 两个端点都能用",
      "10 类风险全启用，阈值后台随便调",
      "社区 Slack 答疑（best-effort）",
    ],
    cta: "申请体验",
    ctaHref: "https://platform.fangcunleap.com/platform/register",
  },
  {
    name: "标准版",
    highlight: "¥0.4",
    unit: "每 1M scanned tokens · 钱包预充值",
    features: [
      "按量付费，无月最低消费",
      "持续 50 QPS · 99.9% SLA",
      "月用量超 100M 后降到 ¥0.3 / 1M",
      "邮件支持，≤24 小时响应",
    ],
    cta: "充值开通",
    ctaHref: "https://platform.fangcunleap.com/platform/wallet",
    featured: true,
  },
  {
    name: "企业版",
    highlight: "定制",
    unit: "私有化部署 · 年度合约",
    features: [
      "私有化部署到你的 VPC 或自建 k8s",
      "针对你业务语料的专项模型微调",
      "专属 Slack 频道 + solutions 工程师",
      "99.99% SLA，签合同，合规审计协助",
    ],
    cta: "联系商务",
    ctaHref: "mailto:info@fangcunleap.com",
  },
]

const FAQ_ITEMS = [
  {
    q: "钱包怎么用？",
    a: "支付宝 / 微信扫码充值，每次 scan 自动扣余额。余额为 0 时 API 返回 402（或走 fail-open 放行——admin 后台可选）。",
  },
  {
    q: "免费体验的 100 次额度每月重置吗？",
    a: "是。每月 1 号重置到 100 次，没用完不结转。免费体验只用来跑通流程，正式用走 Standard。",
  },
  {
    q: "私有部署多少钱？",
    a: "走年度合约——按 QPS / 副本数 / 微调规模定价。把你的量级发到 info@fangcunleap.com，1 个工作日内回。",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-32">
        <div className="text-center">
          <div className="inline-block rounded-full bg-purple-100/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-purple-700 ring-1 ring-purple-200/60">
            定价
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            按扫描量计费，明明白白
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-gray-600 md:text-lg">
            钱包预充值，按 scanned token
            透明计费，不按用户数收费。下面是公网托管端点的价格，私有部署走年度合约。
          </p>
        </div>

        <section className="mt-16">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl px-6 py-7 bg-white/85 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.18)] flex flex-col ${
                  t.featured
                    ? "ring-2 ring-purple-500 md:scale-[1.02]"
                    : "ring-1 ring-purple-200/60"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-purple-600 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
                    推荐
                  </span>
                )}
                <h3 className="text-[15px] font-semibold uppercase tracking-[0.1em] text-purple-700">
                  {t.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl md:text-[40px] leading-none font-semibold text-gray-900">
                    {t.highlight}
                  </span>
                </div>
                {t.unit && <p className="mt-2 text-[12px] text-gray-500 leading-relaxed">{t.unit}</p>}
                <ul className="mt-5 space-y-2.5 text-[13px] leading-relaxed text-gray-700">
                  {t.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-purple-600 font-bold mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.ctaHref}
                  className={`mt-6 rounded-full px-5 py-2.5 text-sm font-medium text-center transition-all ${
                    t.featured
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "ring-1 ring-purple-300 text-purple-800 hover:bg-purple-50"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-[24px] leading-tight tracking-tight font-semibold text-gray-900">
            常见问题
          </h2>
          <div className="mt-6 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl ring-1 ring-purple-200/60 bg-white/70 px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer text-[15px] font-medium text-gray-900 flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-purple-500 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
