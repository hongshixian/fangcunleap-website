"use client"

import MarketingPage from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


// ============================================================
// Services available for trial after registration
// (mirrors /solutions but framed for "try it" not "buy it")
// ============================================================

interface TrialItem {
  name: { en: string; zh: string };
  blurb: { en: string; zh: string };
  status: "ready" | "soon";
  href?: string;
}

const TRIAL_ITEMS: TrialItem[] = [
  {
    name: { en: "Fangcun Guard", zh: "方寸 Guard" },
    blurb: {
      en: "Real-time content guardrail. Try scan-input / scan-output via the in-console Playground or the open-source SDK.",
      zh: "实时内容护栏。在控制台 Playground 直接试 scan-input / scan-output,也可以用开源 SDK 接入。",
    },
    status: "ready",
    href: "/blog/fangcunguard",
  },
  {
    name: { en: "Fangcun Observer", zh: "方寸 Observer" },
    blurb: {
      en: "Runtime monitoring + audit trail. See what your agent actually did — commands, files, network, behavior chains.",
      zh: "运行时监控 + 行为审计:命令 / 文件 / 网络 / 行为链全留痕,看见 Agent 真实做了什么。",
    },
    status: "ready",
    href: "/blog/observer",
  },
  {
    name: { en: "SkillWard", zh: "SkillWard" },
    blurb: {
      en: "Three-stage skill safety scanner. Static + LLM + Docker sandbox. Open source.",
      zh: "三阶段 Skill 扫描:静态 + LLM + Docker 沙箱。开源。",
    },
    status: "ready",
    href: "/blog/skillward",
  },
  {
    name: { en: "Fangcun RedTeam", zh: "方寸 RedTeam" },
    blurb: {
      en: "Automated adversarial testing platform — generates targeted jailbreak corpora for your guardrail config.",
      zh: "自动化的大模型安全检测平台 —— 按你的护栏策略生成定向越狱样本。",
    },
    status: "soon",
  },
];


// ============================================================
// Page
// ============================================================


const Documentation = () => {
  return (
    <MarketingPage
      eyebrow={{ en: "Quick start", zh: "快速开始" }}
      title={{ en: "Register, then try the platform", zh: "注册账号,进控制台体验" }}
      subtitle={{
        en: "One free account unlocks 100 trial calls per month across every shipping product. The Console has the install commands, the API key, and the in-browser Playground.",
        zh: "一个账号、每月 100 次免费调用,可以试我们已上线的所有产品。控制台里有安装命令、API key、在线 Playground。",
      }}
    >
      <RegisterCTA />
      <TrialList />
      <NextSteps />
    </MarketingPage>
  );
};


// ─── 1. Register CTA ───────────────────────────────────────────


const RegisterCTA = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <section className="mt-12">
      <div className="rounded-3xl px-8 py-10 ring-1 ring-purple-200 bg-gradient-to-br from-purple-100/60 via-white to-amber-50/60 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-[28px] leading-tight tracking-tight font-semibold text-gray-900">
            {isZh ? "1. 注册账号" : "1. Register an account"}
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-gray-600 max-w-xl">
            {isZh
              ? "邮箱验证一下就开通,无需信用卡。注册后立刻拿到一把 sk-xxai- 开头的 API key,可以马上跑通流程。"
              : "Email verification only, no credit card required. You get an sk-xxai- API key the moment you sign in."}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://platform.fangcunleap.com/platform/register"
            className="rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
          >
            {isZh ? "免费注册" : "Sign up free"}
          </a>
          <a
            href="https://platform.fangcunleap.com/platform/login"
            className="liquid-glass-btn rounded-full px-7 py-3 text-sm font-medium text-purple-900"
          >
            {isZh ? "已有账号?登录" : "Have an account?"}
          </a>
        </div>
      </div>
    </section>
  );
};


// ─── 2. Trial list ─────────────────────────────────────────────


const TrialList = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <section className="mt-16">
      <h2 className="text-[28px] leading-tight tracking-tight font-semibold text-gray-900">
        {isZh ? "2. 你可以体验的服务" : "2. What you can try"}
      </h2>
      <p className="mt-2 text-[14px] text-gray-600 max-w-2xl">
        {isZh
          ? "免费体验额度(每月 100 次调用)共享给下面这些产品。控制台 Playground 可以零代码点点试,要接进真实应用就装 fangcun-hook-sdk。"
          : "The free trial quota (100 calls / month) covers all the products below. Try them point-and-click in the Console Playground, or wire them into your real app via fangcun-hook-sdk."}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {TRIAL_ITEMS.map((item) => {
          const isReady = item.status === "ready";
          const Card = item.href ? "a" : "div";
          return (
            <Card
              key={item.name.en}
              {...(item.href ? { href: item.href } : {})}
              className={`group rounded-2xl px-6 py-5 ring-1 ring-purple-200/60 bg-white/80 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.15)] transition-all ${
                item.href ? "hover:ring-purple-400 hover:-translate-y-0.5" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-gray-900 text-[17px]">{item.name[lang]}</h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] ring-1 ${
                    isReady
                      ? "bg-emerald-100 text-emerald-700 ring-emerald-200"
                      : "bg-purple-100 text-purple-700 ring-purple-200"
                  }`}
                >
                  {isReady
                    ? isZh
                      ? "可体验"
                      : "Try now"
                    : isZh
                      ? "敬请期待"
                      : "Coming soon"}
                </span>
              </div>
              <p className="mt-2.5 text-[14px] leading-relaxed text-gray-600">
                {item.blurb[lang]}
              </p>
              {item.href && (
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


// ─── 3. Next steps ─────────────────────────────────────────────


const NextSteps = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <section className="mt-16">
      <h2 className="text-[28px] leading-tight tracking-tight font-semibold text-gray-900">
        {isZh ? "3. 下一步" : "3. Next steps"}
      </h2>
      <p className="mt-2 text-[14px] text-gray-600 max-w-2xl">
        {isZh
          ? "进控制台后,左侧栏 Quick Start / Playground 是最直接的入口。详细的 SDK 用法、Hook 协议、各 framework 集成范例都在控制台内的 Integrations 页面里。"
          : "Inside the Console, the left sidebar's Quick Start / Playground are the fastest entry points. Detailed SDK usage, hook protocols, and per-framework integration recipes live in the Integrations page inside the Console."}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/pricing"
          className="rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-purple-300 text-purple-800 hover:bg-purple-50 transition-colors"
        >
          {isZh ? "看定价" : "See pricing"}
        </a>
        <a
          href="/blog"
          className="rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-purple-300 text-purple-800 hover:bg-purple-50 transition-colors"
        >
          {isZh ? "技术博客" : "Read the blog"}
        </a>
        <a
          href="mailto:info@fangcunleap.com"
          className="rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-purple-300 text-purple-800 hover:bg-purple-50 transition-colors"
        >
          {isZh ? "有问题问我们" : "Have a question?"}
        </a>
      </div>
    </section>
  );
};


export default Documentation;
