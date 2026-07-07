"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";
import { MarketingFooter } from "@/components/legacy/MarketingPage";
import SiteHeader from "@/components/legacy/SiteHeader";

const PLATFORM_URL =
  (process.env.NEXT_PUBLIC_PLATFORM_URL as string | undefined) ||
  "https://platform.fangcunleap.com";
const PLATFORM_LOGIN_URL = `${PLATFORM_URL}/platform/login`;
const PLATFORM_CONSOLE_URL = `${PLATFORM_URL}/platform/`;

const BlogFangcunGuard = () => {
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isZh = lang === "zh";

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isZh ? "font-noto-sans" : "font-barlow"
      } bg-secondary/40 min-h-screen text-gray-800`}
    >
      {/* Soft halos */}

      <SiteHeader theme="light" />

      {/* Article */}
      <article className="relative z-10 mx-auto max-w-3xl px-6 pt-16 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-purple-700 hover:text-purple-900 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          {isZh ? "返回博客" : "Back to blog"}
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs text-gray-500">
          <span className="rounded-full bg-purple-100 px-3 py-1 font-medium uppercase tracking-[0.15em] text-purple-700 ring-1 ring-purple-200">
            {isZh ? "工程" : "Engineering"}
          </span>
          <span>{isZh ? "2026 年 4 月 24 日" : "April 24, 2026"}</span>
          <span>·</span>
          <span>{isZh ? "约 8 分钟阅读" : "8 min read"}</span>
        </div>

        <h1 className="mt-6 text-3xl md:text-[44px] leading-[1.08] tracking-tight">
          {isZh ? (
            <>
              <span className="font-light text-gray-900">方寸 Guard：</span>
              <span className="font-noto-serif font-bold text-gradient-purple">
                守护 Agent 的安全底线
              </span>
            </>
          ) : (
            <>
              <span className="font-light text-gray-900">Fangcun Guard: </span>
              <span className="font-instrument-serif italic text-gradient-purple">
                guarding the safety floor of every agent
              </span>
            </>
          )}
        </h1>

        <p className="mt-7 border-l-2 border-purple-400 pl-5 text-lg leading-relaxed text-gray-700">
          {isZh ? (
            <>
              <strong className="text-gray-900">综合 F1 91.1 · p99 推理 8 ms · 6 项 benchmark 全栈对齐 · 中文场景专项优化。</strong>
              <br />
              一个企业级 Agent 安全护栏到底应该满足够快、够准、够灵活——把这三件事同时做到顶尖的,业内还没有出现过。直到方寸 Guard。
            </>
          ) : (
            <>
              <strong className="text-gray-900">F1 91.1 · p99 8 ms · 6-benchmark aligned · Chinese-tuned.</strong>
              <br />
              An enterprise-grade agent guardrail has to be fast, accurate, and flexible — at the same time. Nobody had pulled all three off at the top of every leaderboard. Until Fangcun Guard.
            </>
          )}
        </p>

        {/* Hero stats strip */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { v: "91.1", l: "F1" },
            { v: "8ms", l: isZh ? "p99 推理" : "p99 latency" },
            { v: "6", l: isZh ? "Benchmark" : "benchmarks" },
            { v: "7", l: isZh ? "对照模型" : "baselines" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.15)]"
            >
              <div className="text-[28px] font-light text-gray-900">{s.v}</div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="mt-14 max-w-none text-gray-700 leading-[1.85]">
          {isZh ? <ContentZh /> : <ContentEn />}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl px-8 py-10 text-center ring-1 ring-purple-200 bg-gradient-to-br from-purple-100/60 via-white to-amber-50/60">
          <h3 className="text-2xl font-light text-gray-900">
            {isZh
              ? "如果你的 Agent 还卡在 8B 安全模型 130 ms 的延迟里——"
              : "Still stuck behind an 8B guardrail's 130ms tax?"}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600">
            {isZh
              ? "是时候换一个能 8 ms 搞定的护栏了。"
              : "Time to switch to one that ships in 8."}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href="https://fangcunleap.com"
              className="rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white text-center transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              {isZh ? "申请 Guard 试用" : "Request Demo"}
            </a>
            <a
              href={PLATFORM_CONSOLE_URL}
              className="liquid-glass-btn rounded-full px-7 py-3 text-sm font-medium text-purple-900 text-center"
            >
              {isZh ? "立即试用" : "Try it free"}
            </a>
          </div>
        </div>
      </article>

      <MarketingFooter />
    </div>
  );
};


// ============================================================
// Reusable bits
// ============================================================


const ImgFigure = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure className="my-10">
    <img
      src={src}
      alt={alt}
      className="w-full rounded-2xl ring-1 ring-purple-200/60 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.18)] bg-white"
      loading="lazy"
    />
    <figcaption className="mt-3 text-center text-xs text-gray-500 italic">
      {caption}
    </figcaption>
  </figure>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-16 mb-5 text-[28px] leading-tight font-semibold text-gray-900 border-l-4 border-purple-500 pl-4">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-10 mb-3 text-[20px] font-medium text-gray-900">{children}</h3>
);


// ============================================================
// Chinese content
// ============================================================


const ContentZh = () => (
  <>
    <H2>一个好的企业级 Agent 安全护栏，应该满足哪些条件？</H2>
    <ul className="my-5 list-none space-y-4 pl-0">
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">够快：</strong>
        一次完整的 Agent 对话要过 2 到 4 道审核（用户输入、Function Call 入参、模型输出、工具返回），每一道都不能拖慢用户体验。
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">够准：</strong>
        综合判定能力要在所有主流场景上稳定输出，不能某一类强、某一类崩——要同时做到漏检少、误拒低。
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">够灵活：</strong>
        真实业务场景的风险结构千差万别（金融、医疗、教育、游戏），跨语言、跨领域、跨用户群体——护栏不能用一套固定阈值或者固定策略打天下，必须能按业务场景自调每一类风险的拦截标准。
      </li>
    </ul>
    <p>
      业内的主流开源安全大模型——Llama Guard、NVIDIA Nemotron、Qwen3Guard、xGuard 等——都在这三件事上各自做到了不错的水平。但<strong className="text-gray-900">同时把这三项都做到顶尖</strong>的 Agent 安全护栏，业内还没有出现过。
    </p>
    <p>
      直到方寸 Guard。
    </p>

    <H2>数据怎么样，直接看图</H2>
    <p>
      我们在业界主流的 6 项公开 benchmarks 上，与 7 款最常被使用的开源安全模型，在同条件下做了对齐评测。
    </p>

    <H3>6 项 benchmarks 覆盖的能力维度</H3>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li><strong className="text-gray-900">S-Eval</strong>：中文综合安全（违法犯罪、伦理边界、隐私泄露等）</li>
      <li><strong className="text-gray-900">JailbreakBench</strong>：精心构造的越狱攻击样本</li>
      <li><strong className="text-gray-900">OR-Bench</strong>：看似敏感但实际正常的请求，衡量护栏是否会"过度拒绝"</li>
      <li><strong className="text-gray-900">Aegis 2.0</strong>：NVIDIA 发布的对话场景安全 benchmark</li>
      <li><strong className="text-gray-900">WildGuard</strong>：真实场景中采集的有害对话样本</li>
      <li><strong className="text-gray-900">SimpleSafety</strong>：极简的明显有害内容，基础能力地基</li>
    </ul>

    <H3>7 个开源 Guard 大模型</H3>
    <p>
      NVIDIA Nemotron-4B、Llama Guard 3-8B、Llama Guard 4-12B、Qwen3Guard 8B / 0.6B、xGuard Reasoning 8B / 0.6B。
    </p>

    <ImgFigure
      src="/images/blog-fangcunguard-overview.png"
      alt="综合 F1 vs p99 推理延时对比图"
      caption="左：综合 F1 = 91.1，业内最高。右：p99 推理延时 = 8 ms，业内最快。"
    />

    <p>
      <strong className="text-gray-900">先看左边：综合 F1 = 91.1，业内最高。</strong>
      第二名 xGuard Reasoning-8B 87.8、第三名 87.2、再往下 Qwen3Guard-8B 82.1……最后一名 Llama Guard 4-12B 跌到 70.3。同样的 6 项 benchmarks、同样的评测协议，方寸 Guard 把同行整体甩开 <strong className="text-gray-900">3 到 21 个百分点</strong>。
    </p>
    <p>
      <strong className="text-gray-900">再看右边：p99 推理延时 = 8 ms，业内最快。</strong>
      最慢的 Qwen3Guard-8B 单次推理要 238 ms，<strong className="text-gray-900">一次响应方寸 Guard 能跑完它的 30 次</strong>。同行里最快的两款都是 0.6B 的小模型，勉强压到 50 ms 以内，但综合 F1 还是不如方寸 Guard。
    </p>
    <p className="rounded-2xl border-l-4 border-purple-500 bg-purple-50 py-4 px-6 text-gray-800">
      把两张图叠起来看：方寸 Guard 站在右上角——<strong className="text-gray-900">最准的那一档，同时也是最快的那一档。</strong>
    </p>

    <H2>但综合 F1 91.1 不是某一项压倒带来的虚高</H2>
    <p>
      Agent 安全模型的可靠性，从来不是某一个 benchmark 的分数，而是<strong className="text-gray-900">跨场景的综合表现</strong>。
    </p>

    <ImgFigure
      src="/images/blog-fangcunguard-bench.png"
      alt="6 项 benchmark 逐项对比图"
      caption="6 项 benchmark 逐项 F1 对比 —— 方寸 Guard 在 4 项站第一梯队，2 项把同行甩开。"
    />

    <p>逐项看——</p>
    <div className="my-8 overflow-x-auto rounded-2xl ring-1 ring-gray-200 bg-white shadow-[0_4px_24px_-12px_rgba(120,80,200,0.12)]">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Benchmark</th>
            <th className="px-4 py-3 text-left font-medium text-purple-700">方寸 Guard</th>
            <th className="px-4 py-3 text-left font-medium">同档第二名</th>
            <th className="px-4 py-3 text-left font-medium">差距</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            ["S-Eval（中文综合安全）", "97.4", "xGuard Reasoning-8B 89.3", "+8.1"],
            ["JailbreakBench（越狱攻击）", "89.8", "Llama Guard 3 第一梯队", "持平第一"],
            ["OR-Bench（过度拒绝）", "83.2", "xGuard Reasoning-8B 同列", "持平第一"],
            ["Aegis 2.0（多轮对话）", "89.1", "—", "第一梯队"],
            ["WildGuard（真实有害对话）", "88.2", "Qwen3Guard-8B 同列", "持平"],
            ["SimpleSafety（基础有害内容）", "99.0", "全员 98+", "饱和区"],
          ].map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-gray-50/40" : ""}>
              <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
              <td className="px-4 py-3 font-semibold text-purple-800">{row[1]}</td>
              <td className="px-4 py-3 text-gray-700">{row[2]}</td>
              <td className="px-4 py-3 text-gray-700">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      <strong className="text-gray-900">4 项站在第一梯队、2 项把同行甩开</strong>，综合 F1 91.1 不是某一项的压倒性领先，而是逐项都站得住的均衡能力分布。
    </p>

    <H2>5 项差异化能力</H2>

    <H3>🏆 综合判定能力不偏科</H3>
    <p>
      从一般有害内容到精心构造的越狱攻击，从直白的违法诱导到深度伪装的灰区话术——都能给出稳定可靠的判定。<strong className="text-gray-900">这种全场景的稳定性，是真正能放进生产环境的关键</strong>。
    </p>

    <H3>⚡ 毫秒级响应，让安全审核成为基础设施</H3>
    <p>
      即便在 Agent 链路里叠加 4 次审核，总耗时也只在 30 ms 量级，用户完全感知不到。安全检查从需要被精打细算的"性能税"，<strong className="text-gray-900">正式变成默认开启、随处都可加的"基础设施"</strong>。
    </p>

    <H3>🇨🇳 中文场景表现突出</H3>
    <p>
      通用安全大模型常常把全世界的语言一锅炖进同一个训练集——结果是英文场景表现亮眼、中文长尾被频繁滑过。方寸 Guard <strong className="text-gray-900">重点提升了中文能力</strong>，风险细分成 10 个独立类别，每一类都基于中文场景做了专项数据合成与对齐训练。
    </p>
    <p>
      针对跨语种攻击（混入小语种、code-switching）、口语化越狱、长尾边缘案例都能保持稳定召回；同时对医学问答、编程报错、维基百科类正常请求，<strong className="text-gray-900">误拒率明显低于主流同类方案</strong>——业务流程不再被安全护栏频繁卡住。
    </p>

    <H3>🎛️ 企业级可定制策略，按业务场景自调阈值</H3>
    <p>
      通用安全模型只给"开 / 关"两档，所有风险类目用同一套阈值/同一套策略。但真实业务场景的风险结构完全不同：
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li><strong className="text-gray-900">金融场景</strong>：严管隐私、放宽医疗咨询</li>
      <li><strong className="text-gray-900">医疗场景</strong>：必须严管自残诱导、放宽金融法律</li>
      <li><strong className="text-gray-900">教育平台</strong>：拉满未成年人保护、宽松日常不当建议</li>
      <li><strong className="text-gray-900">游戏社区</strong>：容忍玩笑式恐吓、零容忍极端主义诱导</li>
    </ul>
    <p>
      方寸 Guard 把 10 类风险作为独立维度暴露给企业，<strong className="text-gray-900">每一类的拦截阈值都可以单独配置</strong>，可在 Web 控制台或 API 中按业务自调。
    </p>

    <H3>🔌 主流 Agent 生态一键接入，业务代码零改动</H3>
    <p>
      LangChain / LangGraph、AutoGen、OpenAI Agents SDK、MCP Server、Dify / Coze——主流 Agent 框架全部一键集成。<strong className="text-gray-900">企业不动业务逻辑、不重构调用链路</strong>，即可在用户输入、模型输出、工具调用等关键节点立即接入安全护栏。
    </p>

    <p className="mt-12 rounded-2xl border-l-4 border-purple-500 bg-purple-50 py-4 px-6 text-gray-800">
      如果你的 Agent 还卡在 8B 安全模型 130 ms 的延迟里——<strong className="text-gray-900">是时候换一个能 8 ms 搞定的护栏了</strong>。
    </p>

    <p className="mt-10 text-xs text-gray-400">
      * 本文中所有 benchmark 结果均在公开数据集上做对齐评测；延时数字基于 NVIDIA L20 单卡 batch=1, seq_len=128 测得。
    </p>
  </>
);


// ============================================================
// English content (translated from Chinese)
// ============================================================


const ContentEn = () => (
  <>
    <H2>What does an enterprise-grade agent guardrail actually need?</H2>
    <ul className="my-5 list-none space-y-4 pl-0">
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Fast enough.</strong>{" "}
        A full agent turn passes through 2–4 safety checks (user input, function-call args, model output, tool return). Each one has to vanish into the response budget.
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Accurate enough.</strong>{" "}
        Verdict quality has to hold across every mainstream scenario — no spiking on one category and crashing on another. Both miss-rate and false-refusal stay low at the same time.
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Flexible enough.</strong>{" "}
        Real business risk surfaces vary wildly (finance, healthcare, education, gaming) across language, domain, and user base. A one-size-fits-all threshold strategy doesn't ship — operators need per-category, per-business knobs.
      </li>
    </ul>
    <p>
      The mainstream open-source guardrails — Llama Guard, NVIDIA Nemotron, Qwen3Guard, xGuard — each do parts of this well. But <strong className="text-gray-900">no agent guardrail had topped all three at once</strong>.
    </p>
    <p>
      Until Fangcun Guard.
    </p>

    <H2>The numbers — just look at the chart</H2>
    <p>
      We aligned-evaluated Fangcun Guard against 7 of the most-used open-source safety models on 6 standard public benchmarks, under the same protocol.
    </p>

    <H3>The 6 benchmarks</H3>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li><strong className="text-gray-900">S-Eval</strong> — Chinese composite safety (illegal acts, ethics, privacy, …)</li>
      <li><strong className="text-gray-900">JailbreakBench</strong> — adversarial jailbreak attempts</li>
      <li><strong className="text-gray-900">OR-Bench</strong> — sensitive-looking but normal requests; measures over-refusal</li>
      <li><strong className="text-gray-900">Aegis 2.0</strong> — NVIDIA's dialog-context safety benchmark</li>
      <li><strong className="text-gray-900">WildGuard</strong> — harmful conversations harvested from real traffic</li>
      <li><strong className="text-gray-900">SimpleSafety</strong> — minimal obvious-harm baseline</li>
    </ul>

    <H3>The 7 open-source baselines</H3>
    <p>
      NVIDIA Nemotron-4B, Llama Guard 3-8B, Llama Guard 4-12B, Qwen3Guard 8B / 0.6B, xGuard Reasoning 8B / 0.6B.
    </p>

    <ImgFigure
      src="/images/blog-fangcunguard-overview.png"
      alt="Composite F1 vs p99 inference latency"
      caption="Left: composite F1 = 91.1, the highest in the field. Right: p99 latency = 8 ms, the fastest."
    />

    <p>
      <strong className="text-gray-900">Left chart: composite F1 = 91.1, top of the field.</strong>{" "}
      Second-place xGuard Reasoning-8B at 87.8, then 87.2, Qwen3Guard-8B at 82.1, all the way down to Llama Guard 4-12B at 70.3. Same benchmarks, same protocol — Fangcun Guard pulls <strong className="text-gray-900">3 to 21 points clear of the field</strong>.
    </p>
    <p>
      <strong className="text-gray-900">Right chart: p99 latency = 8 ms, fastest in class.</strong>{" "}
      The slowest model, Qwen3Guard-8B, takes 238 ms per call — <strong className="text-gray-900">Fangcun Guard runs 30 times for every one of those</strong>. The two next-fastest baselines are 0.6B small models that scrape under 50 ms but still trail Fangcun Guard on F1.
    </p>
    <p className="rounded-2xl border-l-4 border-purple-500 bg-purple-50 py-4 px-6 text-gray-800">
      Overlaid: Fangcun Guard sits in the upper-right corner — <strong className="text-gray-900">the most accurate and the fastest at the same time</strong>.
    </p>

    <H2>91.1 isn't a one-benchmark spike</H2>
    <p>
      Reliability for an agent guardrail is never a single benchmark score — it's how it holds across all of them.
    </p>

    <ImgFigure
      src="/images/blog-fangcunguard-bench.png"
      alt="Per-benchmark F1 breakdown"
      caption="Per-benchmark F1 breakdown — top tier on 4, breakaway leader on 2."
    />

    <p>Going one by one —</p>
    <div className="my-8 overflow-x-auto rounded-2xl ring-1 ring-gray-200 bg-white shadow-[0_4px_24px_-12px_rgba(120,80,200,0.12)]">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Benchmark</th>
            <th className="px-4 py-3 text-left font-medium text-purple-700">Fangcun Guard</th>
            <th className="px-4 py-3 text-left font-medium">Runner-up</th>
            <th className="px-4 py-3 text-left font-medium">Gap</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            ["S-Eval (Chinese composite)", "97.4", "xGuard Reasoning-8B 89.3", "+8.1"],
            ["JailbreakBench", "89.8", "tied with Llama Guard 3", "tied first"],
            ["OR-Bench (over-refusal)", "83.2", "tied with xGuard-8B", "tied first"],
            ["Aegis 2.0 (multi-turn)", "89.1", "—", "top tier"],
            ["WildGuard (real harmful chat)", "88.2", "tied with Qwen3Guard-8B", "tied"],
            ["SimpleSafety", "99.0", "all 98+", "saturated"],
          ].map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-gray-50/40" : ""}>
              <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
              <td className="px-4 py-3 font-semibold text-purple-800">{row[1]}</td>
              <td className="px-4 py-3 text-gray-700">{row[2]}</td>
              <td className="px-4 py-3 text-gray-700">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      <strong className="text-gray-900">Top tier on 4 benchmarks, breakaway leader on 2</strong>. The 91.1 composite isn't a single-axis spike — it's an evenly-distributed capability surface.
    </p>

    <H2>5 things that set Fangcun Guard apart</H2>

    <H3>🏆 Verdict quality without weak spots</H3>
    <p>
      From obvious harm to carefully-crafted jailbreaks, from blunt illicit prompts to deeply-disguised gray-area phrasing — Fangcun Guard returns a stable, reliable verdict everywhere. <strong className="text-gray-900">That cross-scenario stability is what makes it actually deployable.</strong>
    </p>

    <H3>⚡ Millisecond response — safety checks become infrastructure</H3>
    <p>
      Stack 4 safety checks into one agent turn, total cost is around 30 ms. Users feel zero of it. Safety inspection moves from a "performance tax you budget for" into <strong className="text-gray-900">infrastructure that's on by default and goes anywhere</strong>.
    </p>

    <H3>🇨🇳 First-class Chinese coverage</H3>
    <p>
      General-purpose safety models tend to throw every language into one training pot — English looks great, Chinese long-tail gets skipped. Fangcun Guard <strong className="text-gray-900">specifically over-invests in Chinese</strong>: 10 fine-grained risk classes, each with synthesis and alignment training tailored to Chinese context.
    </p>
    <p>
      Cross-lingual attacks (mixed minor languages, code-switching), colloquial jailbreaks, and long-tail edge cases all stay reliably caught; meanwhile, <strong className="text-gray-900">false-refusal on medical Q&amp;A, programming errors, Wikipedia-style queries is markedly lower than peers</strong> — your business flow doesn't get tripped up by the guardrail.
    </p>

    <H3>🎛️ Per-business policy knobs</H3>
    <p>
      Generic guardrails offer "on / off" with one global threshold. Real businesses don't work that way:
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li><strong className="text-gray-900">Finance</strong>: tight on PII, looser on health questions</li>
      <li><strong className="text-gray-900">Healthcare</strong>: zero tolerance on self-harm, looser on finance / legal</li>
      <li><strong className="text-gray-900">Education</strong>: max on minor protection, looser on everyday inappropriate advice</li>
      <li><strong className="text-gray-900">Gaming</strong>: tolerant of joke-threats, zero tolerance on extremist incitement</li>
    </ul>
    <p>
      Fangcun Guard exposes the 10 risk classes as independent dimensions — <strong className="text-gray-900">every threshold is configurable per tenant</strong> via web console or API.
    </p>

    <H3>🔌 One-line integration with the major agent stacks</H3>
    <p>
      LangChain / LangGraph, AutoGen, OpenAI Agents SDK, MCP Server, Dify / Coze — every mainstream agent framework integrates in one line. <strong className="text-gray-900">No business-logic refactor, no call-chain rewrite</strong>; drop the guardrail in at user-input, model-output, and tool-call boundaries instantly.
    </p>

    <p className="mt-12 rounded-2xl border-l-4 border-purple-500 bg-purple-50 py-4 px-6 text-gray-800">
      If your agent is still stuck behind an 8B guardrail's 130 ms tax — <strong className="text-gray-900">it's time to switch to one that ships in 8</strong>.
    </p>

    <p className="mt-10 text-xs text-gray-400">
      * All benchmark numbers measured on aligned public datasets; latency on NVIDIA L20, batch=1, seq_len=128.
    </p>
  </>
);


export default BlogFangcunGuard;
