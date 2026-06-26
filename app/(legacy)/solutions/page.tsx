"use client";

import MarketingPage from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";

// ============================================================
// Product family — the four flagship services
//
// Mirrors the shield diagram on the homepage (#products) and the
// product names referenced across blog posts. Fangcun AgentPlugin
// (the SDK) is intentionally not on this list — Solutions presents
// the four customer-facing services; the SDK is a developer tool
// surfaced separately on Quick Start / blog/plugin.
// ============================================================

type Status = "shipping" | "beta" | "preview";

interface Product {
  name: { en: string; zh: string };
  blurb: { en: string; zh: string };
  status: Status;
  href?: string;
}

const PRODUCTS: Product[] = [
  {
    name: { en: "Fangcun Guard", zh: "方寸 Guard" },
    blurb: {
      en: "Real-time content guardrail for AI agents. F1 91.1 across 6 benchmarks, p99 8 ms — Chinese-tuned, 10-class risk taxonomy, per-tenant thresholds.",
      zh: "面向 AI Agent 的实时内容护栏。6 项 benchmark 综合 F1 91.1，p99 8 ms ——中文专项优化，10 类风险细分，按租户独立配阈值。",
    },
    status: "shipping",
    href: "/blog/fangcunguard",
  },
  {
    name: { en: "Fangcun Observer", zh: "方寸 Observer" },
    blurb: {
      en: "Runtime monitoring + audit trail for agent execution: tool calls, network egress, sensitive file access. Replay any session for forensics.",
      zh: "Agent 运行时监控与审计：工具调用、出网请求、敏感文件读写全留痕。任意会话可回放，事后追责能拿到证据链。",
    },
    status: "beta",
    href: "/blog/observer",
  },
  {
    name: { en: "SkillWard", zh: "SkillWard" },
    blurb: {
      en: "Three-stage skill safety scanner: static analysis + LLM evaluation + Docker sandbox. Catches runtime threats review-only pipelines miss.",
      zh: "三阶段 Skill 安全扫描：静态分析 + LLM 研判 + Docker 沙箱。揪出纯审阅流水线看不见的运行时威胁。",
    },
    status: "shipping",
    href: "/blog/skillward",
  },
  {
    name: { en: "Fangcun RedTeam", zh: "方寸 RedTeam" },
    blurb: {
      en: "Automated adversarial testing for AI applications. Generates jailbreak corpora targeted at your guardrail config; produces a verifiable safety report.",
      zh: "面向 AI 应用的自动红队测试。根据你的护栏策略生成定向越狱样本，跑完出一份可验证的安全报告。",
    },
    status: "preview",
  },
];

const STATUS_TONE: Record<Status, string> = {
  shipping: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  beta:     "bg-amber-100 text-amber-700 ring-amber-200",
  preview:  "bg-purple-100 text-purple-700 ring-purple-200",
};

const STATUS_LABEL: Record<Status, { en: string; zh: string }> = {
  shipping: { en: "Shipping",         zh: "已上线" },
  beta:     { en: "Beta",             zh: "Beta" },
  preview:  { en: "Research preview", zh: "研究预览" },
};


const ProductGrid = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <section className="mt-12">
      <p className="text-[15px] leading-relaxed text-gray-600 max-w-2xl">
        {isZh
          ? "四条产品线、一个安全底层 —— 从实时护栏到红队测试，覆盖从开发、上线到运行时的全链路 AI 安全。每一条都可独立采购，也可全栈组合。"
          : "Four product lines, one safety foundation — from real-time guardrails to red-team testing, covering the full lifecycle of AI safety from build to runtime. Buy each independently or stack them all."}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {PRODUCTS.map((p) => {
          const Card = p.href ? "a" : "div";
          return (
            <Card
              key={p.name.en}
              {...(p.href ? { href: p.href } : {})}
              className={`group rounded-2xl px-6 py-5 ring-1 ring-purple-200/60 bg-white/80 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.15)] transition-all ${
                p.href ? "hover:ring-purple-400 hover:-translate-y-0.5" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-gray-900 text-[17px]">{p.name[lang]}</h3>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] ring-1 ${STATUS_TONE[p.status]}`}>
                  {STATUS_LABEL[p.status][lang]}
                </span>
              </div>
              <p className="mt-2.5 text-[14px] leading-relaxed text-gray-600">
                {p.blurb[lang]}
              </p>
              {p.href && (
                <div className="mt-3 text-[12px] font-medium text-purple-700 group-hover:text-purple-900 transition-colors">
                  {isZh ? "了解更多 →" : "Learn more →"}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
};


const Solutions = () => (
  <MarketingPage
    eyebrow={{ en: "Solutions", zh: "解决方案" }}
    title={{ en: "End-to-end safety for AI applications", zh: "端到端的 AI 应用安全方案" }}
    subtitle={{
      en: "From real-time guardrails to runtime monitoring to skill scanning to red-team testing — pick what you need, stack them as one.",
      zh: "从实时护栏、运行时监控、Skill 扫描，到红队测试 —— 按需选用，也可全栈组合。",
    }}
  >
    <ProductGrid />
  </MarketingPage>
);

export default Solutions;
