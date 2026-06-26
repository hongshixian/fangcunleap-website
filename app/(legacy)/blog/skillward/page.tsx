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

const SKILLWARD_REPO_URL = "https://github.com/Fangcun-AI/SkillWard";
const SKILLWARD_LIVE_URL = "https://skillward.fangcunleap.com";

const BlogSkillWard = () => {
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isZh = lang === "zh";

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isZh ? "font-noto-sans" : "font-barlow"
      } bg-[#F4F2F8] min-h-screen text-gray-800`}
    >
      {/* Soft halos */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute top-[40%] right-[-10%] -z-0 h-[500px] w-[500px] rounded-full bg-amber-200/40 blur-3xl" />

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
            {isZh ? "研究" : "Research"}
          </span>
          <span>{isZh ? "2026 年 4 月 10 日" : "April 10, 2026"}</span>
          <span>·</span>
          <span>{isZh ? "约 6 分钟阅读" : "6 min read"}</span>
        </div>

        <h1 className="mt-6 text-3xl md:text-[44px] leading-[1.08] tracking-tight">
          {isZh ? (
            <>
              <span className="font-light text-gray-900">SkillWard：</span>
              <span className="font-noto-serif font-bold text-gradient-purple">
                把不确定的告警换成沙箱里的实证
              </span>
            </>
          ) : (
            <>
              <span className="font-light text-gray-900">SkillWard: </span>
              <span className="font-instrument-serif italic text-gradient-purple">
                trading uncertain warnings for runtime evidence
              </span>
            </>
          )}
        </h1>

        <p className="mt-7 border-l-2 border-purple-400 pl-5 text-lg leading-relaxed text-gray-700">
          {isZh ? (
            <>
              <strong className="text-gray-900">三阶段：静态分析 + LLM 研判 + 沙箱执行。</strong>
              <br />
              5,000 个真实 Skills 评测中，~25% 被判不安全；其中 ~38% 进入沙箱后，<strong className="text-gray-900">约三分之一暴露了纯静态扫描根本看不见的运行时威胁</strong>。
            </>
          ) : (
            <>
              <strong className="text-gray-900">Three stages: static analysis + LLM evaluation + sandbox execution.</strong>
              <br />
              On 5,000 real-world Skills, ~25% were flagged unsafe; of the ~38% suspicious ones that entered the sandbox, <strong className="text-gray-900">~one in three exposed runtime threats that review-only pipelines couldn't catch</strong>.
            </>
          )}
        </p>

        {/* Hero stats */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { v: "3", l: isZh ? "扫描阶段" : "stages" },
            { v: "5,000", l: isZh ? "真实 Skills" : "real skills" },
            { v: "~38%", l: isZh ? "进入沙箱" : "to sandbox" },
            { v: "99%", l: isZh ? "沙箱部署成功率" : "sandbox success" },
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
            {isZh ? "在线试一下，或者直接拉源码" : "Try it online, or grab the source"}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600">
            {isZh
              ? "SkillWard 完全开源，Apache 2.0。Web UI 已部署在 skillward.fangcunleap.com 可以直接试。"
              : "SkillWard is fully open-source under Apache 2.0. A live UI is deployed at skillward.fangcunleap.com."}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={SKILLWARD_LIVE_URL}
              className="rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white text-center transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              {isZh ? "试用 Live UI" : "Open Live UI"}
            </a>
            <a
              href={SKILLWARD_REPO_URL}
              className="liquid-glass-btn rounded-full px-7 py-3 text-sm font-medium text-purple-900 text-center"
            >
              GitHub
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

const ImgPair = ({ leftSrc, rightSrc, leftAlt, rightAlt, caption }: {
  leftSrc: string; rightSrc: string; leftAlt: string; rightAlt: string; caption: string;
}) => (
  <figure className="my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <img src={leftSrc} alt={leftAlt} loading="lazy"
        className="w-full rounded-2xl ring-1 ring-purple-200/60 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.18)] bg-white" />
      <img src={rightSrc} alt={rightAlt} loading="lazy"
        className="w-full rounded-2xl ring-1 ring-purple-200/60 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.18)] bg-white" />
    </div>
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
    <H2>问题：现有 Skill 扫描器结论高度不一致</H2>
    <p className="rounded-2xl border-l-4 border-purple-500 bg-purple-50 py-4 px-6 text-gray-800">
      "5 个扫描器扫了 238,180 个 Skill，结论高度不一致——只有 0.12% 是 5 个工具一致认为有问题的，单个工具的命中率从 3.79% 到 41.93% 不等。"
      <span className="block mt-2 text-xs text-gray-500">— Holzbauer et al., <i>Malicious Or Not: Adding Repository Context to Agent Skill Classification</i>, 2026</span>
    </p>
    <p>
      Skill 是 AI Agent 生态的"插件"——但和应用商店不一样，目前没有像样的安全审核。<strong className="text-gray-900">SkillWard</strong> 的核心思路就一句话：把不确定的告警，换成沙箱里实际跑出来的实证。
    </p>

    <H2>架构：三阶段静态 + 动态分析</H2>
    <ImgFigure
      src="/images/skillward-architecture.png"
      alt="SkillWard 架构图"
      caption="三阶段：Stage A 静态秒过 → Stage B LLM 研判 → Stage C 沙箱执行验证。"
    />
    <ul className="my-5 list-none space-y-4 pl-0">
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Stage A · 静态分析（秒级）：</strong>
        YARA 规则 + 正则扫描，识别已知恶意 pattern（凭据偷取、代码注入等），校验 Skill 声明的权限和实际行为是否对得上，检测隐藏文件 / 编码混淆 / Prompt 投毒等可疑特征。
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Stage B · LLM 研判：</strong>
        在静态信号之上做语义推理，判断意图。能高置信度分类的 Skill 在这一步收口；剩下不确定的进 Stage C。
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Stage C · 沙箱执行：</strong>
        容器里跑一个 Agent 把 Skill 完整执行一遍，自研 Guard 全程监控；提前埋好的"蜜罐诱饵"会引诱恶意 Skill 暴露凭据偷取、数据外泄、供应链攻击等运行时行为。
      </li>
    </ul>

    <H2>真实评测：5,000 个 Skill</H2>
    <p>
      数据集来自 <a href="https://clawhub.ai" className="text-purple-700 hover:underline">ClawHub</a> 真实 Skill + 安全社区收集的已知恶意样本。
    </p>

    <H3>Stage A + B：静态 + LLM 三段分流</H3>
    <p>所有 Skill 经过 YARA 规则、正则静态分析 + LLM 语义研判，被快速分流：</p>
    <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-3">
      {[
        { v: "~49%", l: "安全", tone: "emerald" as const },
        { v: "~13%", l: "不安全", tone: "rose" as const },
        { v: "~38%", l: "可疑（升 Stage C）", tone: "amber" as const },
      ].map((s) => (
        <div key={s.l} className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70 text-center">
          <div className={`text-[28px] font-light ${
            s.tone === "emerald" ? "text-emerald-700" :
            s.tone === "rose" ? "text-rose-700" : "text-amber-700"
          }`}>{s.v}</div>
          <div className="mt-1 text-xs text-gray-500">{s.l}</div>
        </div>
      ))}
    </div>

    <H3>Stage C：沙箱实证</H3>
    <p>
      把这批"可疑"Skill 在隔离 Docker 沙箱里端到端跑一遍，<strong className="text-gray-900">大约三分之一暴露了纯静态扫描和 LLM 研判都看不出来的潜在威胁</strong>，包括：
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>只在执行路径上才出现的<strong className="text-gray-900">凭据外泄</strong></li>
      <li>通过 <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">crontab</code> / <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">SSH</code> / 启动脚本设置的<strong className="text-gray-900">持久化后门</strong></li>
      <li>包安装期触发的<strong className="text-gray-900">postinstall 供应链攻击</strong></li>
      <li>串起多步操作才能识别的<strong className="text-gray-900">外联数据外泄链</strong></li>
    </ul>

    <p>对这批可疑 Skill 经沙箱判定后的分布：</p>
    <div className="my-6 overflow-x-auto rounded-2xl ring-1 ring-gray-200 bg-white shadow-[0_4px_24px_-12px_rgba(120,80,200,0.12)]">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left font-medium">沙箱判定</th>
            <th className="px-4 py-3 text-left font-medium">含义</th>
            <th className="px-4 py-3 text-left font-medium">占比（可疑 Skill 中）</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            ["safe", "经沙箱验证后确实安全", "~69%"],
            ["medium risk", "中等风险（未声明的外部请求、env 偷取等）", "~17%"],
            ["high risk", "高风险（凭据偷取、持久化后门、远程代码执行等）", "~14%"],
          ].map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-gray-50/40" : ""}>
              <td className="px-4 py-3 font-mono font-semibold text-purple-800">{row[0]}</td>
              <td className="px-4 py-3 text-gray-700">{row[1]}</td>
              <td className="px-4 py-3 text-gray-700">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <H3>常见威胁模式（在不安全 Skill 中的占比）</H3>
    <div className="my-6 overflow-x-auto rounded-2xl ring-1 ring-gray-200 bg-white shadow-[0_4px_24px_-12px_rgba(120,80,200,0.12)]">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left font-medium">模式</th>
            <th className="px-4 py-3 text-left font-medium">占比</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            ["凭据偷取（API key、密码、私钥）", "36%"],
            ["未声明的外部网络请求", "24%"],
            ["env / .env 偷取", "15%"],
            ["远程代码下载与执行", "9%"],
            ["持久化后门（crontab / SSH / 启动脚本）", "8%"],
            ["供应链与提权", "8%"],
          ].map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-gray-50/40" : ""}>
              <td className="px-4 py-3 text-gray-800">{row[0]}</td>
              <td className="px-4 py-3 font-semibold text-purple-800">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <H2>Web UI：单 / 批量扫，三种扫描深度</H2>
    <p>
      自带的 Web UI 已经部署在 <a href={SKILLWARD_LIVE_URL} className="text-purple-700 hover:underline">skillward.fangcunleap.com</a>，可以直接试。支持单个或批量提交 Skill，三种扫描模式：
      <strong className="text-gray-900">Quick Scan</strong>（只跑 A+B）、<strong className="text-gray-900">Sandbox Scan</strong>（A+B+C）、<strong className="text-gray-900">Deep Trace</strong>（带完整执行 trace）。
    </p>
    <ImgPair
      leftSrc="/images/skillward-demo.webp"
      rightSrc="/images/skillward-batch-demo.webp"
      leftAlt="Single scan demo"
      rightAlt="Batch scan demo"
      caption="左：单个 Skill 扫描。右：批量扫描。"
    />

    <H3>详细扫描报告</H3>
    <ImgPair
      leftSrc="/images/skillward-screenshot-detail.png"
      rightSrc="/images/skillward-screenshot-detail2.png"
      leftAlt="Report overview"
      rightAlt="Report threats and recommendations"
      caption="左：报告总览 + 三阶段判定。右：威胁详情 + 检测证据 + 修复建议。"
    />
    <p>
      每份报告包含：<strong className="text-gray-900">分析结果</strong>（三阶段判定、置信度、威胁等级）、<strong className="text-gray-900">问题位置</strong>（文件路径、行号、高亮代码片段）、<strong className="text-gray-900">修复建议</strong>（可执行的安全建议）。
    </p>

    <H2>5 个亮点</H2>
    <ul className="my-5 list-none space-y-3 pl-0">
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">三阶段安全覆盖：</strong>
        把"明显威胁"和"模糊告警"都变成高置信度的判定。
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">沙箱自治执行：</strong>
        容器内 Agent 自己装环境、装依赖、修常见报错、跑完 Skill——<strong className="text-gray-900">部署成功率高达 99%</strong>。
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">运行时安全 Guard：</strong>
        专门做的 Guard 监控 Agent 运行时行为，对外泄、可疑网络访问、敏感写入、隐藏凭据风险给出明确证据。
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">开箱即用、按需扩展：</strong>
        单 Skill / 批量、Quick / Sandbox / Deep Trace 三档，env / LLM provider / Docker 设置全可调。
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">证据丰富的结果：</strong>
        实时日志、三阶段 finding、威胁证据、修复建议——安全 / 平台团队拿到就能用。
      </li>
    </ul>

    <H2>开箱即用</H2>
    <pre className="my-6 overflow-x-auto rounded-2xl bg-gray-900 p-5 text-[13px] leading-relaxed text-purple-100 ring-1 ring-gray-800">
{`# clone + 装依赖
git clone https://github.com/Fangcun-AI/SkillWard.git
cd SkillWard
pip install -r requirements.txt && pip install -e ./skill-scanner

# 拉沙箱镜像
docker pull fangcunai/skillward:amd64    # Intel/AMD
docker pull fangcunai/skillward:arm64    # Apple Silicon

# 配 .env 后启动
cp guardian-api/.env.example guardian-api/.env
# 填好 LLM provider 等，然后 docker compose up`}
    </pre>

    <p className="mt-10 text-xs text-gray-400">
      * 数据来自真实 ClawHub Skill + 安全社区收集的已知恶意样本；详细 case study 见仓库 <code className="font-mono">docs/cases/</code>。
    </p>
  </>
);


// ============================================================
// English content
// ============================================================


const ContentEn = () => (
  <>
    <H2>The problem: existing skill scanners disagree wildly</H2>
    <p className="rounded-2xl border-l-4 border-purple-500 bg-purple-50 py-4 px-6 text-gray-800">
      "Five scanners on 238,180 Skills showed highly inconsistent results, only 0.12% were flagged by all five, with individual flag rates ranging from 3.79% to 41.93%."
      <span className="block mt-2 text-xs text-gray-500">— Holzbauer et al., <i>Malicious Or Not: Adding Repository Context to Agent Skill Classification</i>, 2026</span>
    </p>
    <p>
      Skills are the "plugins" of the AI agent ecosystem — but unlike app stores, there's no real security review pipeline. <strong className="text-gray-900">SkillWard</strong>'s core idea is one sentence: trade uncertain warnings for sandbox-runtime evidence.
    </p>

    <H2>Architecture: three-stage static + dynamic analysis</H2>
    <ImgFigure
      src="/images/skillward-architecture.png"
      alt="SkillWard architecture diagram"
      caption="Stage A: seconds-fast static scan → Stage B: LLM evaluation → Stage C: sandbox execution."
    />
    <ul className="my-5 list-none space-y-4 pl-0">
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Stage A · Static analysis (seconds):</strong>{" "}
        YARA rules + regex scans for known malicious patterns (credential theft, code injection, …), validates that a Skill's declared permissions match its actual code behavior, detects hidden files, encoding obfuscation, prompt poisoning.
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Stage B · LLM evaluation:</strong>{" "}
        Semantic reasoning on top of static signals. High-confidence verdicts close out here; the uncertain rest go to Stage C.
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Stage C · Sandbox execution:</strong>{" "}
        An in-container Agent runs the Skill end-to-end with a custom Guard monitoring throughout. Pre-planted honeypot decoys lure malicious Skills into revealing credential theft, data exfiltration, supply-chain attacks at runtime.
      </li>
    </ul>

    <H2>Benchmark: 5,000 real Skills</H2>
    <p>
      Dataset: real Skills from <a href="https://clawhub.ai" className="text-purple-700 hover:underline">ClawHub</a> + known-malicious samples curated from security communities.
    </p>

    <H3>Stage A + B: static + LLM triage</H3>
    <p>All Skills are quickly triaged by YARA rules, regex-based static analysis, and LLM semantic evaluation:</p>
    <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-3">
      {[
        { v: "~49%", l: "safe", tone: "emerald" as const },
        { v: "~13%", l: "unsafe", tone: "rose" as const },
        { v: "~38%", l: "suspicious (→ Stage C)", tone: "amber" as const },
      ].map((s) => (
        <div key={s.l} className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70 text-center">
          <div className={`text-[28px] font-light ${
            s.tone === "emerald" ? "text-emerald-700" :
            s.tone === "rose" ? "text-rose-700" : "text-amber-700"
          }`}>{s.v}</div>
          <div className="mt-1 text-xs text-gray-500">{s.l}</div>
        </div>
      ))}
    </div>

    <H3>Stage C: sandbox-grade evidence</H3>
    <p>
      Running the suspicious batch end-to-end inside isolated Docker sandboxes, <strong className="text-gray-900">~one third revealed potential threats neither static analysis nor LLM evaluation could catch</strong> — including:
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li><strong className="text-gray-900">Credential exfiltration</strong> that only surfaces along the execution path</li>
      <li><strong className="text-gray-900">Persistence backdoors</strong> via <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">crontab</code> / <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">SSH</code> / startup scripts</li>
      <li><strong className="text-gray-900">Postinstall supply-chain attacks</strong> triggered during package install</li>
      <li><strong className="text-gray-900">Outbound exfiltration chains</strong> identifiable only after correlating multi-step operations</li>
    </ul>

    <p>Stage C verdict breakdown for those suspicious Skills:</p>
    <div className="my-6 overflow-x-auto rounded-2xl ring-1 ring-gray-200 bg-white shadow-[0_4px_24px_-12px_rgba(120,80,200,0.12)]">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Verdict</th>
            <th className="px-4 py-3 text-left font-medium">Meaning</th>
            <th className="px-4 py-3 text-left font-medium">% of suspicious</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            ["safe", "Confirmed safe after sandbox verification", "~69%"],
            ["medium risk", "Undeclared external requests, env-var harvesting, etc.", "~17%"],
            ["high risk", "Credential theft, persistence, RCE, etc.", "~14%"],
          ].map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-gray-50/40" : ""}>
              <td className="px-4 py-3 font-mono font-semibold text-purple-800">{row[0]}</td>
              <td className="px-4 py-3 text-gray-700">{row[1]}</td>
              <td className="px-4 py-3 text-gray-700">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <H3>Common threat patterns (% of unsafe Skills)</H3>
    <div className="my-6 overflow-x-auto rounded-2xl ring-1 ring-gray-200 bg-white shadow-[0_4px_24px_-12px_rgba(120,80,200,0.12)]">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Pattern</th>
            <th className="px-4 py-3 text-left font-medium">%</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            ["Credential theft (API keys, passwords, private keys)", "36%"],
            ["Undeclared external network requests", "24%"],
            ["env / .env harvesting", "15%"],
            ["Remote code download and execution", "9%"],
            ["Persistence backdoors (crontab / SSH / startup)", "8%"],
            ["Supply chain and privilege escalation", "8%"],
          ].map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-gray-50/40" : ""}>
              <td className="px-4 py-3 text-gray-800">{row[0]}</td>
              <td className="px-4 py-3 font-semibold text-purple-800">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <H2>Web UI: single + batch, three depths</H2>
    <p>
      The bundled web UI is live at <a href={SKILLWARD_LIVE_URL} className="text-purple-700 hover:underline">skillward.fangcunleap.com</a>. Single or batch submission; three modes:
      <strong className="text-gray-900"> Quick Scan</strong> (A+B only), <strong className="text-gray-900">Sandbox Scan</strong> (A+B+C), <strong className="text-gray-900">Deep Trace</strong> (with full execution trace).
    </p>
    <ImgPair
      leftSrc="/images/skillward-demo.webp"
      rightSrc="/images/skillward-batch-demo.webp"
      leftAlt="Single scan demo"
      rightAlt="Batch scan demo"
      caption="Left: single skill scan. Right: batch scan."
    />

    <H3>Detailed analysis report</H3>
    <ImgPair
      leftSrc="/images/skillward-screenshot-detail.png"
      rightSrc="/images/skillward-screenshot-detail2.png"
      leftAlt="Report overview"
      rightAlt="Threat details and recommendations"
      caption="Left: overview + three-stage analysis. Right: threat details + detection evidence + remediation."
    />

    <H2>5 highlights</H2>
    <ul className="my-5 list-none space-y-3 pl-0">
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Three-stage security coverage:</strong>{" "}
        Obvious threats AND ambiguous warnings turn into high-confidence decisions.
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Autonomous sandbox execution:</strong>{" "}
        An in-container Agent provisions environments, installs deps, repairs common failures — <strong className="text-gray-900">99% deployment success</strong>.
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Runtime security Guard:</strong>{" "}
        Purpose-built Guard monitors Agent runtime, capturing clear evidence for exfiltration, suspicious network access, sensitive writes, hidden credentials.
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Ready out of the box, extensible on demand:</strong>{" "}
        Single / batch, Quick / Sandbox / Deep Trace; tunable via env, LLM provider config, Docker settings.
      </li>
      <li className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
        <strong className="text-gray-900">Evidence-rich results:</strong>{" "}
        Real-time logs, three-stage findings, threat evidence, remediation — security and platform teams can act immediately.
      </li>
    </ul>

    <H2>Quick start</H2>
    <pre className="my-6 overflow-x-auto rounded-2xl bg-gray-900 p-5 text-[13px] leading-relaxed text-purple-100 ring-1 ring-gray-800">
{`# clone + install
git clone https://github.com/Fangcun-AI/SkillWard.git
cd SkillWard
pip install -r requirements.txt && pip install -e ./skill-scanner

# pull sandbox image
docker pull fangcunai/skillward:amd64    # Intel/AMD
docker pull fangcunai/skillward:arm64    # Apple Silicon

# configure .env, then run
cp guardian-api/.env.example guardian-api/.env
# fill in LLM provider, then docker compose up`}
    </pre>

    <p className="mt-10 text-xs text-gray-400">
      * Data: real ClawHub Skills + curated known-malicious samples. Detailed case studies in the repo <code className="font-mono">docs/cases/</code>.
    </p>
  </>
);


export default BlogSkillWard;
