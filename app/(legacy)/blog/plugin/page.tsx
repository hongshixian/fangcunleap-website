"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { MarketingFooter } from "@/components/MarketingPage";
import SiteHeader from "@/components/SiteHeader";

const PLATFORM_URL =
  (process.env.NEXT_PUBLIC_PLATFORM_URL as string | undefined) ||
  "https://platform.fangcunleap.com";
const PLATFORM_LOGIN_URL = `${PLATFORM_URL}/platform/login`;
const PLATFORM_CONSOLE_URL = `${PLATFORM_URL}/platform/`;

const REPO_URL = "https://github.com/Fangcun-AI/FangcunAgent-Plugin";


const BlogPlugin = () => {
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
            {isZh ? "工程" : "Engineering"}
          </span>
          <span>{isZh ? "2026 年 5 月 1 日" : "May 1, 2026"}</span>
          <span>·</span>
          <span>{isZh ? "约 7 分钟阅读" : "7 min read"}</span>
          <span>·</span>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900 underline underline-offset-2 decoration-purple-300">
            GitHub
          </a>
        </div>

        <h1 className="mt-6 text-3xl md:text-[44px] leading-[1.08] tracking-tight">
          {isZh ? (
            <>
              <span className="font-light text-gray-900">Fangcun AgentPlugin：</span>
              <span className="font-noto-serif font-bold text-gradient-purple">
                给 OpenClaw 装上运行时护栏
              </span>
            </>
          ) : (
            <>
              <span className="font-light text-gray-900">Fangcun AgentPlugin: </span>
              <span className="font-instrument-serif italic text-gradient-purple">
                a runtime guardrail for OpenClaw
              </span>
            </>
          )}
        </h1>

        <p className="mt-7 border-l-2 border-purple-400 pl-5 text-lg leading-relaxed text-gray-700">
          {isZh ? (
            <>
              <strong className="text-gray-900">直接接入 OpenClaw 运行链路 · 4 大能力面 · 双模式 · 一行装上。</strong>
              <br />
              专为 OpenClaw 设计的安全插件，覆盖 Prompt 输入、Tool 执行、Response 输出、Skill 安装四个最关键的运行时阶段——本地拦截 + 后端复核协同工作。
            </>
          ) : (
            <>
              <strong className="text-gray-900">Drops into OpenClaw's runtime · 4 capability surfaces · 2 modes · one-line install.</strong>
              <br />
              A safety plugin built specifically for OpenClaw, covering the four critical runtime stages — prompt intake, tool execution, response review, skill install — with local enforcement plus backend review.
            </>
          )}
        </p>

        {/* Hero stats strip */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { v: "4", l: isZh ? "能力面" : "surfaces" },
            { v: "2", l: isZh ? "运行模式" : "modes" },
            { v: "5", l: isZh ? "决策动作" : "decisions" },
            { v: isZh ? "一键" : "1-line", l: isZh ? "安装" : "install" },
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
              ? "想给你的 OpenClaw Agent 装上同款护栏？"
              : "Want the same guardrails on your OpenClaw agent?"}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600">
            {isZh
              ? "Fangcun AgentPlugin 已开源，一行 npm pack + openclaw plugins install 装完。"
              : "Fangcun AgentPlugin is open source — one npm pack + openclaw plugins install away."}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white text-center transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              {isZh ? "查看 GitHub" : "View on GitHub"}
            </a>
            <a
              href="mailto:info@fangcunleap.com"
              className="liquid-glass-btn rounded-full px-7 py-3 text-sm font-medium text-purple-900 text-center"
            >
              {isZh ? "联系我们" : "Contact us"}
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

const VideoFigure = ({ src, caption }: { src: string; caption: string }) => (
  <figure className="my-10">
    <video
      controls
      muted
      playsInline
      preload="metadata"
      className="w-full rounded-2xl ring-1 ring-purple-200/60 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.18)] bg-white"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
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

const Code = ({ children }: { children: React.ReactNode }) => (
  <pre className="my-6 overflow-x-auto rounded-2xl bg-gray-900 p-5 text-[13px] leading-relaxed text-purple-100 ring-1 ring-gray-800">
    <code>{children}</code>
  </pre>
);


// ============================================================
// Chinese content
// ============================================================


const ContentZh = () => (
  <>
    <H2>为什么 OpenClaw 需要专属运行时护栏</H2>
    <p>
      OpenClaw 是个非常强大的 agent 宿主——它能执行 shell 命令、读写文件、装 npm / pip 包、调用第三方 API、管理 Skill。
      <strong className="text-gray-900">能力越大，运行时风险面就越大</strong>：恶意 prompt 注入、危险工具参数、不安全的 skill 包、模型输出泄密……每一种风险只要在运行时真发生一次，就可能造成不可挽回的损失。
    </p>
    <p>
      Fangcun AgentPlugin 直接接入 OpenClaw 的 native plugin hook 系统，
      <strong className="text-gray-900">在危险动作真正发生前介入</strong>——不是事后审计、也不是只看应用层日志，而是在 OpenClaw 运行时的关键检查点上做实时拦截。
    </p>

    <ImgFigure
      src="/images/blog-plugin-architecture.png"
      alt="Fangcun AgentPlugin architecture overview"
      caption="本地执行层（Local Enforcement）做低延迟拦截 + 后端决策引擎（Backend Review）做深度分析。"
    />

    <H2>4 大能力面</H2>
    <p>同一个 plugin 包覆盖 OpenClaw 运行链路的 4 个关键阶段：</p>
    <div className="my-8 grid grid-cols-1 gap-3 md:grid-cols-2">
      {[
        {
          t: "Prompt Risk Screening",
          d: "Prompt Injection / 危险指令检测；自适应安全提示注入；可选后端复核处理更复杂的 prompt 风险",
        },
        {
          t: "Tool Execution Control",
          d: "工具调用前检查；本地命令、路径、参数约束；高风险操作触发审批",
        },
        {
          t: "Response Review",
          d: "输出侧风险筛查；幻觉与 groundedness 复核；按配置执行 DLP 审查与动作路由",
        },
        {
          t: "Skill Scanner",
          d: "Stage 1 本地规则扫描 → Stage 2 OpenClaw 模型语义审查 → 可选 Stage 3 后端审计",
        },
      ].map((p, i) => (
        <div key={i} className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
          <div className="font-semibold text-gray-900 text-[15px] mb-1.5">{p.t}</div>
          <div className="text-[13px] text-gray-600 leading-relaxed">{p.d}</div>
        </div>
      ))}
    </div>
    <p>
      返回给 OpenClaw 的决策可以是 <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">allow</code>、
      <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">block</code>、
      <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">replace</code>、
      <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">anonymize</code>，或者
      <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">require approval</code>——取决于检查类型和宿主能力。
    </p>

    <H2>装上 Guard 之后的能力增强</H2>
    <p>
      Plugin 自身已经能做大量本地拦截。<strong className="text-gray-900">接上 Fangcun Guard 后端后，护栏的质量从"够用"跃迁到"达到生产级"</strong>：模型负责处理那些规则匹配不出来的灰色案例（深度伪装的 prompt 注入、跨语种攻击、长尾误拒等）。下面这段 demo 展示了同一个 OpenClaw 会话，在装上 Plugin + Guard 之后行为差异：
    </p>

    <VideoFigure
      src="/videos/blog-plugin-demo.mp4"
      caption="OpenClaw + Fangcun AgentPlugin + Fangcun Guard ——同一个会话装上 Guard 前后，运行时拦截能力的对比 demo。"
    />

    <H2>工作方式：本地 + 后端协同</H2>
    <p>Plugin 采用三层架构：</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>
        <strong className="text-gray-900">OpenClaw Runtime Hooks</strong>：暴露 prompt 构建、tool 调用、模型输出、skill 安装等运行时检查点
      </li>
      <li>
        <strong className="text-gray-900">Local Enforcement Layer</strong>：runtime interception、pre-execution blocking、context injection、parameter / path enforcement、approval triggering、output normalization、pre-install skill review——全部本地完成，毫秒级响应
      </li>
      <li>
        <strong className="text-gray-900">Backend Review and Decision Engine</strong>：DLP 集中检测、幻觉复核、Agent 安全复核、Stage 3 skill audit——只在本地拿不准时上送
      </li>
    </ul>
    <p>
      <strong className="text-gray-900">这条架构的核心是"本地优先"</strong>——99% 的拦截不出 OpenClaw 进程，延迟感知不到；只有 1% 真需要深度判断的样本才走后端，平摊到全链路依然非常快。
    </p>

    <H2>双运行模式</H2>
    <H3>adaptive — 自适应模式</H3>
    <p>
      <strong className="text-gray-900">推荐给大多数 OpenClaw 部署</strong>。低风险流量保持顺畅，可疑行为升级检查 + 审批：
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>Prompt / Tool / Output / Skill 检查全开但摩擦更低</li>
      <li>本地拦截优先做低延迟决策</li>
      <li>需要深度判断时升级到后端复核</li>
    </ul>

    <H3>full_defense — 全面防护模式</H3>
    <p>
      <strong className="text-gray-900">推荐给高权限 Agent / 生产自动化 / 高敏环境</strong>：
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>整条执行链路上护栏行为更严格</li>
      <li>更强调 blocking、replacement、approval 检查点</li>
      <li>适合有 filesystem / shell / 部署 / secret 访问能力的 Agent</li>
    </ul>

    <H2>一行装完</H2>
    <p>前置：OpenClaw 已装好、Node.js ≥ 22.19。</p>
    <Code>
{`cd plugin-openclaw
TARBALL="$(npm pack)"
openclaw plugins install "$(pwd)/$TARBALL"`}
    </Code>
    <p>然后在 <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">~/.openclaw/openclaw.json</code> 里配置：</p>
    <Code>
{`{
  "plugins": {
    "entries": {
      "fangcunagent": {
        "enabled": true,
        "config": {
          "mode": "adaptive",
          "guardrailsUrl": "https://api.fangcunguard.com/v1/guardrails",
          "apiKey": "sk-...",
          "logging": true,
          "enableHumanApproval": true
        }
      }
    }
  }
}`}
    </Code>
    <p>跑两条命令验证：</p>
    <Code>
{`openclaw config validate
openclaw plugins list`}
    </Code>
    <p>
      看到 <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">fangcunagent</code> 在已启用列表里，就说明装好了。运行 OpenClaw 跑你日常工作流，Plugin 会在背后默默介入每一次 prompt / tool / output / skill 检查点。
    </p>
  </>
);


// ============================================================
// English content
// ============================================================


const ContentEn = () => (
  <>
    <H2>Why OpenClaw needs a dedicated runtime guardrail</H2>
    <p>
      OpenClaw is a powerful agent host — it executes shell commands, reads and writes files, installs npm / pip packages, calls third-party APIs, and manages skills.
      <strong className="text-gray-900"> The bigger the capability surface, the bigger the runtime risk surface</strong>: malicious prompt injection, dangerous tool parameters, unsafe skill packages, leaky model outputs. Each risk only needs to land at runtime once to cause damage that can't be undone.
    </p>
    <p>
      Fangcun AgentPlugin plugs straight into OpenClaw's native plugin-hook system to{" "}
      <strong className="text-gray-900">intervene before the risky step actually runs</strong> — not post-hoc audit, not just application-layer logs, but real-time interception at OpenClaw's runtime checkpoints.
    </p>

    <ImgFigure
      src="/images/blog-plugin-architecture.png"
      alt="Fangcun AgentPlugin architecture overview"
      caption="Local Enforcement Layer handles low-latency interception; Backend Review and Decision Engine handles deeper analysis."
    />

    <H2>Four capability surfaces</H2>
    <p>One plugin package covers all four critical stages of OpenClaw's runtime:</p>
    <div className="my-8 grid grid-cols-1 gap-3 md:grid-cols-2">
      {[
        {
          t: "Prompt Risk Screening",
          d: "Prompt-injection and unsafe-instruction checks; adaptive safety-guidance injection; optional backend review for harder prompt cases.",
        },
        {
          t: "Tool Execution Control",
          d: "Pre-execution inspection for tool calls; local command, path, and parameter enforcement; approval triggering for high-risk actions.",
        },
        {
          t: "Response Review",
          d: "Output-side risk screening; hallucination and groundedness review; DLP-oriented review and action routing where configured.",
        },
        {
          t: "Skill Scanner",
          d: "Stage 1 local rule scan → Stage 2 local semantic review with the active OpenClaw model → optional Stage 3 backend audit.",
        },
      ].map((p, i) => (
        <div key={i} className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
          <div className="font-semibold text-gray-900 text-[15px] mb-1.5">{p.t}</div>
          <div className="text-[13px] text-gray-600 leading-relaxed">{p.d}</div>
        </div>
      ))}
    </div>
    <p>
      The decision returned to OpenClaw can be <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">allow</code>,{" "}
      <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">block</code>,{" "}
      <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">replace</code>,{" "}
      <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">anonymize</code>, or{" "}
      <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">require approval</code>, depending on the check and host capability.
    </p>

    <H2>Capability boost when paired with Fangcun Guard</H2>
    <p>
      The plugin alone already does a lot of local interception. <strong className="text-gray-900">Once you wire it through to the Fangcun Guard backend, guardrail quality jumps from "good enough" to production-grade</strong> — the model handles the gray-area cases that rules can't (deeply disguised injections, cross-lingual attacks, long-tail false-refusals). The demo below shows the same OpenClaw session before and after enabling Plugin + Guard:
    </p>

    <VideoFigure
      src="/videos/blog-plugin-demo.mp4"
      caption="OpenClaw + Fangcun AgentPlugin + Fangcun Guard — runtime interception capability before vs after enabling Guard."
    />

    <H2>How it works: local + backend, two-layer</H2>
    <p>Three layers stack to make this work:</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>
        <strong className="text-gray-900">OpenClaw Runtime Hooks</strong> — surface checkpoints around prompt build, tool call, model output, and skill install
      </li>
      <li>
        <strong className="text-gray-900">Local Enforcement Layer</strong> — runtime interception, pre-execution blocking, context injection, parameter / path enforcement, approval triggering, output normalization, pre-install skill review — all local, millisecond response
      </li>
      <li>
        <strong className="text-gray-900">Backend Review and Decision Engine</strong> — DLP central detection, hallucination review, agent safety review, Stage 3 skill audit — only escalates the cases the local layer can't decide on its own
      </li>
    </ul>
    <p>
      <strong className="text-gray-900">The architecture's core is "local-first"</strong> — 99% of decisions never leave the OpenClaw process, latency is imperceptible; only the 1% that genuinely needs deep judgment goes to the backend, so the end-to-end stays fast.
    </p>

    <H2>Two operating modes</H2>
    <H3>adaptive</H3>
    <p>
      <strong className="text-gray-900">Recommended for general OpenClaw deployments.</strong> Low-risk traffic stays light; suspicious behavior triggers stronger checks and approvals:
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>Prompt / Tool / Output / Skill checks all enabled, with lower default friction</li>
      <li>Local interception remains on for fast decisions</li>
      <li>Backend review is invoked when deeper judgment is needed</li>
    </ul>

    <H3>full_defense</H3>
    <p>
      <strong className="text-gray-900">Recommended for privileged agents, production automation, and high-sensitivity environments:</strong>
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>Stricter guardrail behavior across the entire execution path</li>
      <li>Stronger emphasis on blocking, replacement, and approval checkpoints</li>
      <li>Better fit for agents with filesystem, shell, deployment, or secret access</li>
    </ul>

    <H2>One-line install</H2>
    <p>Prereq: OpenClaw installed; Node.js ≥ 22.19.</p>
    <Code>
{`cd plugin-openclaw
TARBALL="$(npm pack)"
openclaw plugins install "$(pwd)/$TARBALL"`}
    </Code>
    <p>Then configure <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">~/.openclaw/openclaw.json</code>:</p>
    <Code>
{`{
  "plugins": {
    "entries": {
      "fangcunagent": {
        "enabled": true,
        "config": {
          "mode": "adaptive",
          "guardrailsUrl": "https://api.fangcunguard.com/v1/guardrails",
          "apiKey": "sk-...",
          "logging": true,
          "enableHumanApproval": true
        }
      }
    }
  }
}`}
    </Code>
    <p>Two commands to verify:</p>
    <Code>
{`openclaw config validate
openclaw plugins list`}
    </Code>
    <p>
      If <code className="rounded bg-purple-100 px-1.5 py-0.5 text-purple-800">fangcunagent</code> shows up in the enabled list, you're done. Run OpenClaw on your normal workflow — the plugin sits silently behind every prompt / tool / output / skill checkpoint.
    </p>
  </>
);


export default BlogPlugin;
