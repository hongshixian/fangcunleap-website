"use client"

import MarketingPage from "@/components/legacy/MarketingPage";
import Link from "next/link";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


// ============================================================
// Release timeline — dates align with the 4 product blog posts.
// Newest first; each entry links to the corresponding blog post.
// ============================================================

interface Release {
  date: { en: string; zh: string };
  product: string;
  title: { en: string; zh: string };
  highlights: Array<{ en: string; zh: string }>;
  href: string;
}

const RELEASES: Release[] = [
  {
    date: { en: "May 6, 2026", zh: "2026 年 5 月 6 日" },
    product: "Fangcun Observer",
    title: {
      en: "Fangcun Observer — public release",
      zh: "方寸 Observer 公开发布",
    },
    highlights: [
      { en: "Runtime monitoring across commands, files, network egress, sensitive-resource access", zh: "运行时监控覆盖:命令执行、文件读写、出站网络、敏感资源访问" },
      { en: "Behavior chains — connect isolated events into reviewable runtime evidence", zh: "行为链 —— 孤立事件串成可复核的运行时证据" },
      { en: "Real-time intervention — allow / pause / approve / block on policy", zh: "实时干预 —— 按策略 allow / pause / approve / block" },
      { en: "Local-first audit log retention", zh: "Local-first 审计日志,证据留在企业边界内" },
    ],
    href: "/blog/observer",
  },
  {
    date: { en: "May 1, 2026", zh: "2026 年 5 月 1 日" },
    product: "Fangcun AgentPlugin",
    title: {
      en: "Fangcun AgentPlugin — runtime guardrail for OpenClaw",
      zh: "Fangcun AgentPlugin 发布 —— OpenClaw 运行时护栏",
    },
    highlights: [
      { en: "4 capability surfaces: prompt risk · tool execution · response review · skill scanner", zh: "4 大能力面:Prompt 风险 / Tool 执行控制 / Response 审查 / Skill 扫描" },
      { en: "Two operating modes: adaptive (default) and full_defense (high-privilege)", zh: "双模式:adaptive(默认)和 full_defense(高权限场景)" },
      { en: "One-line install via npm pack + openclaw plugins install", zh: "一行命令装完:npm pack + openclaw plugins install" },
      { en: "Open source — Apache 2.0", zh: "Apache 2.0 开源" },
    ],
    href: "/blog/plugin",
  },
  {
    date: { en: "April 24, 2026", zh: "2026 年 4 月 24 日" },
    product: "Fangcun Guard",
    title: {
      en: "Fangcun Guard — public release",
      zh: "方寸 Guard 公开发布",
    },
    highlights: [
      { en: "Composite F1 91.1 across 6 public benchmarks — top of the field, 3-21 points clear", zh: "6 项公开 benchmark 综合 F1 91.1,业内最高,把同行整体甩开 3-21 个百分点" },
      { en: "p99 inference latency 8 ms — fastest in class, 30× faster than the slowest baseline", zh: "p99 推理延时 8 ms,业内最快,比最慢 baseline 快 30 倍" },
      { en: "10 fine-grained risk classes, all per-tenant tunable", zh: "10 类细分风险,每类阈值按租户独立配置" },
      { en: "Chinese-tuned — markedly lower false-refusal on med / coding / Wikipedia-style queries", zh: "中文专项优化 —— 医学 / 编程 / 维基百科类正常请求误拒率显著降低" },
    ],
    href: "/blog/fangcunguard",
  },
  {
    date: { en: "April 10, 2026", zh: "2026 年 4 月 10 日" },
    product: "SkillWard",
    title: {
      en: "SkillWard — public release",
      zh: "SkillWard 公开发布",
    },
    highlights: [
      { en: "Three-stage skill scanner: static + LLM evaluation + Docker sandbox", zh: "三阶段 Skill 扫描:静态分析 + LLM 研判 + Docker 沙箱" },
      { en: "On 5,000 real-world skills, ~38% routed to sandbox; ~1/3 of those exposed runtime threats review-only pipelines miss", zh: "5,000 个真实 Skill 中 ~38% 进入沙箱;其中约三分之一暴露纯审阅看不见的运行时威胁" },
      { en: "Web UI + CLI + CI integration", zh: "Web UI + CLI + CI 集成全支持" },
      { en: "Open source — Apache 2.0", zh: "Apache 2.0 开源" },
    ],
    href: "/blog/skillward",
  },
];


// ============================================================
// Page
// ============================================================


const Changelog = () => (
  <MarketingPage
    eyebrow={{ en: "Changelog", zh: "更新日志" }}
    title={{ en: "Release timeline", zh: "发布时间线" }}
    subtitle={{
      en: "Each entry below maps to a public release of one of our products. Click through for the full technical writeup.",
      zh: "下面每一条对应我们某个产品的公开发布。点进去看完整的技术介绍。",
    }}
  >
    <Timeline />
    <NotifyCTA />
  </MarketingPage>
);


// ─── Timeline ──────────────────────────────────────────────────


const Timeline = () => {
  const { lang } = useLanguage();
  return (
    <section className="mt-12 relative">
      {/* vertical guide line — sits behind the dots */}
      <div className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px bg-purple-300/50 hidden md:block" />

      <ol className="space-y-8">
        {RELEASES.map((r) => (
          <li key={r.href} className="relative md:pl-10">
            {/* dot */}
            <div className="hidden md:block absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-purple-500 ring-4 ring-purple-100" />

            <Link
              href={r.href}
              className="group block rounded-2xl px-6 py-5 ring-1 ring-purple-200/60 bg-white/85 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.15)] hover:ring-purple-400 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-baseline gap-3">
                  <span className="text-[12px] font-mono text-gray-500">
                    {r.date[lang]}
                  </span>
                  <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-purple-700 ring-1 ring-purple-200">
                    {r.product}
                  </span>
                </div>
                <span className="text-[12px] font-medium text-purple-700 group-hover:text-purple-900 transition-colors">
                  {lang === "zh" ? "看博客 →" : "Read post →"}
                </span>
              </div>

              <h3 className="mt-3 text-[18px] font-semibold text-gray-900 leading-snug">
                {r.title[lang]}
              </h3>

              <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-gray-700">
                {r.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-purple-600 mt-0.5">·</span>
                    <span>{h[lang]}</span>
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};


// ─── Notify CTA ────────────────────────────────────────────────


const NotifyCTA = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <section className="mt-16">
      <div className="rounded-2xl px-6 py-6 ring-1 ring-purple-200/60 bg-purple-50/40 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-[16px] font-semibold text-gray-900">
            {isZh ? "想第一时间收到下次发布?" : "Want to hear about the next release first?"}
          </h3>
          <p className="mt-1 text-[13px] text-gray-600">
            {isZh
              ? "邮件订阅,新版本上线时我们直接推给你 — 不发其他营销内容。"
              : "Email subscription — we ping you when a new release ships, nothing else."}
          </p>
        </div>
        <a
          href="mailto:info@fangcunleap.com?subject=Subscribe%20to%20Fangcun%20Leap%20release%20notes"
          className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors shrink-0"
        >
          {isZh ? "订阅" : "Subscribe"}
        </a>
      </div>
    </section>
  );
};


export default Changelog;
