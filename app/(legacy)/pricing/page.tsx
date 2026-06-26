"use client";

import MarketingPage from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


// ============================================================
// Tier definitions
// ============================================================

interface Tier {
  name: { en: string; zh: string };
  highlight: { en: string; zh: string };
  unit?: { en: string; zh: string };
  features: Array<{ en: string; zh: string }>;
  cta: { en: string; zh: string };
  ctaHref: string;
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    name: { en: "Trial", zh: "免费体验" },
    highlight: { en: "¥0", zh: "¥0" },
    unit: { en: "100 calls / month, ergonomics check", zh: "每月 100 次调用，体验用" },
    features: [
      { en: "100 scan-input or scan-output calls per month", zh: "每月 100 次 scan-input / scan-output 调用额度" },
      { en: "scan-input + scan-output endpoints both enabled", zh: "scan-input + scan-output 两个端点都能用" },
      { en: "All 10 risk classes, all admin-tunable thresholds", zh: "10 类风险全启用，阈值后台随便调" },
      { en: "Community Slack — best-effort response", zh: "社区 Slack 答疑（best-effort）" },
    ],
    cta: { en: "Start trial", zh: "申请体验" },
    ctaHref: "https://platform.fangcunleap.com/platform/register",
  },
  {
    name: { en: "Standard", zh: "标准版" },
    highlight: { en: "¥0.4", zh: "¥0.4" },
    unit: { en: "per 1M scanned tokens · prepay wallet", zh: "每 1M scanned tokens · 钱包预充值" },
    features: [
      { en: "Pay-as-you-go, no monthly minimum", zh: "按量付费，无月最低消费" },
      { en: "Sustained 50 QPS · 99.9% SLA", zh: "持续 50 QPS · 99.9% SLA" },
      { en: "Volume discount: ¥0.3 / 1M after 100M / month", zh: "月用量超 100M 后降到 ¥0.3 / 1M" },
      { en: "Email support, ≤24 h response", zh: "邮件支持，≤24 小时响应" },
    ],
    cta: { en: "Top up wallet", zh: "充值开通" },
    ctaHref: "https://platform.fangcunleap.com/platform/wallet",
    featured: true,
  },
  {
    name: { en: "Enterprise", zh: "企业版" },
    highlight: { en: "Custom", zh: "定制" },
    unit: { en: "private deploy · annual contract", zh: "私有化部署 · 年度合约" },
    features: [
      { en: "Private deployment in your VPC / on-prem k8s", zh: "私有化部署到你的 VPC 或自建 k8s" },
      { en: "Dedicated model fine-tuning on your domain corpus", zh: "针对你业务语料的专项模型微调" },
      { en: "Slack channel + dedicated solutions engineer", zh: "专属 Slack 频道 + solutions 工程师" },
      { en: "99.99% SLA, signed terms, compliance audit support", zh: "99.99% SLA，签合同，合规审计协助" },
    ],
    cta: { en: "Contact sales", zh: "联系商务" },
    ctaHref: "mailto:info@fangcunleap.com",
  },
];


// ============================================================
// Page
// ============================================================


const Pricing = () => {
  return (
    <MarketingPage
      eyebrow={{ en: "Pricing", zh: "定价" }}
      title={{ en: "Pay only for what you scan", zh: "按扫描量计费，明明白白" }}
      subtitle={{
        en: "Wallet-based prepay, transparent per-token billing, no per-seat tax. Pricing below is for the public hosted endpoint; private deployment runs on a yearly contract.",
        zh: "钱包预充值，按 scanned token 透明计费，不按用户数收费。下面是公网托管端点的价格，私有部署走年度合约。",
      }}
    >
      <Tiers />
      <Faq />
    </MarketingPage>
  );
};


const Tiers = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.name.en}
            className={`relative rounded-2xl px-6 py-7 bg-white/85 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.18)] flex flex-col ${
              t.featured
                ? "ring-2 ring-purple-500 md:scale-[1.02]"
                : "ring-1 ring-purple-200/60"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-purple-600 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
                {isZh ? "推荐" : "Recommended"}
              </span>
            )}
            <h3 className="text-[15px] font-semibold uppercase tracking-[0.1em] text-purple-700">
              {t.name[lang]}
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl md:text-[40px] leading-none font-semibold text-gray-900">
                {t.highlight[lang]}
              </span>
            </div>
            {t.unit && (
              <p className="mt-2 text-[12px] text-gray-500 leading-relaxed">
                {t.unit[lang]}
              </p>
            )}
            <ul className="mt-5 space-y-2.5 text-[13px] leading-relaxed text-gray-700">
              {t.features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <span>{f[lang]}</span>
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
              {t.cta[lang]}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};


const Faq = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const items: Array<{ q: { en: string; zh: string }; a: { en: string; zh: string } }> = [
    {
      q: { en: "How does the wallet work?", zh: "钱包怎么用？" },
      a: {
        en: "Top up via Alipay or WeChat Pay; the balance auto-deducts on each scan. When the balance hits zero, the API returns 402 (or fail-open passes the request — your choice in admin settings).",
        zh: "支付宝 / 微信扫码充值，每次 scan 自动扣余额。余额为 0 时 API 返回 402（或走 fail-open 放行——admin 后台可选）。",
      },
    },
    {
      q: { en: "Trial — does the 100 calls reset every month?", zh: "免费体验的 100 次额度每月重置吗？" },
      a: {
        en: "Yes. 100 calls reset on the 1st of each month. Unused calls don't roll over. Trial is for ergonomics check; ship to production on Standard.",
        zh: "是。每月 1 号重置到 100 次，没用完不结转。免费体验只用来跑通流程，正式用走 Standard。",
      },
    },
    {
      q: { en: "How is private deployment priced?", zh: "私有部署多少钱？" },
      a: {
        en: "Annual contract — depends on QPS / replicas / fine-tuning scope. Email info@fangcunleap.com with your scale and we'll get back within 1 business day.",
        zh: "走年度合约——按 QPS / 副本数 / 微调规模定价。把你的量级发到 info@fangcunleap.com，1 个工作日内回。",
      },
    },
  ];
  return (
    <section className="mt-20">
      <h2 className="text-[24px] leading-tight tracking-tight font-semibold text-gray-900">
        {isZh ? "常见问题" : "FAQ"}
      </h2>
      <div className="mt-6 space-y-3">
        {items.map((it, i) => (
          <details
            key={i}
            className="group rounded-2xl ring-1 ring-purple-200/60 bg-white/70 px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="cursor-pointer text-[15px] font-medium text-gray-900 flex items-center justify-between">
              <span>{it.q[lang]}</span>
              <span className="text-purple-500 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-[14px] leading-relaxed text-gray-700">
              {it.a[lang]}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};


export default Pricing;
