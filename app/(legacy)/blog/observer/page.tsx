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

const BlogObserver = () => {
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
          <span>{isZh ? "2026 年 5 月 6 日" : "May 6, 2026"}</span>
          <span>·</span>
          <span>{isZh ? "约 8 分钟阅读" : "8 min read"}</span>
        </div>

        <h1 className="mt-6 text-3xl md:text-[44px] leading-[1.08] tracking-tight">
          {isZh ? (
            <>
              <span className="font-light text-gray-900">方寸 Observer：</span>
              <span className="font-noto-serif font-bold text-gradient-purple">
                AI Agent 的运行时安全
              </span>
            </>
          ) : (
            <>
              <span className="font-light text-gray-900">Fangcun Observer: </span>
              <span className="font-instrument-serif italic text-gradient-purple">
                runtime safety for AI agents
              </span>
            </>
          )}
        </h1>

        <p className="mt-7 border-l-2 border-purple-400 pl-5 text-lg leading-relaxed text-gray-700">
          {isZh ? (
            <>
              <strong className="text-gray-900">命令 · 文件 · 网络 · 行为链——四个维度的运行时证据，零代码改造接入。</strong>
              <br />
              你知道 Agent 真实做了什么，还是只知道它选择告诉你的内容？Prompt 可以被塑造、日志可能不完整、框架回调可能缺失，但真实动作仍然会在运行时层留下证据。
            </>
          ) : (
            <>
              <strong className="text-gray-900">Commands · files · network · behavior chains — four runtime evidence dimensions, zero code change to adopt.</strong>
              <br />
              Do you know what your agent actually did, or only what it chose to report? Prompts can be shaped, logs can be incomplete, framework callbacks can be missing — but real actions still leave evidence at the runtime layer.
            </>
          )}
        </p>

        {/* Hero stats strip */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { v: "0", l: isZh ? "代码改造" : "code change" },
            { v: "4", l: isZh ? "证据维度" : "evidence dims" },
            { v: isZh ? "实时" : "Real-time", l: isZh ? "策略响应" : "intervention" },
            { v: isZh ? "本地" : "Local-first", l: isZh ? "证据留存" : "evidence" },
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
              ? "看见 Agent 真实做了什么，而不是它选择告诉你的内容。"
              : "See what your agent actually did — not just what it chose to report."}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600">
            {isZh
              ? "联系我们获取方寸 Observer 私有部署 / API 接入。"
              : "Contact us for private deployment or API access."}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href="mailto:info@fangcunleap.com"
              className="rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white text-center transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              {isZh ? "申请 Demo" : "Request Demo"}
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
    <H2>为什么运行时可见性很重要</H2>
    <p>
      AI Agent 已经不再只是被动的聊天界面，它们会执行命令、读写文件、调用 API、安装依赖包，并与其他 Agent 协作。一旦 Agent 具备行动能力，安全用户需要的就不只是对话记录或框架日志。
    </p>
    <p>
      大多数 Agent 监控都从应用层开始：工具调用回调、SDK 集成、框架或 LLM trace。这些信号有价值，但还不够——它们依赖具体 Agent 框架、开发者埋点，以及 Agent 自身的上报路径。<strong className="text-gray-900">方寸 Observer 关注的是 Agent 决定行动之后真实发生了什么</strong>。
    </p>
    <p>它帮助用户看见：</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>命令执行</li>
      <li>文件访问与修改</li>
      <li>出站网络活动</li>
      <li>敏感资源访问</li>
      <li>多步骤中的可疑序列</li>
      <li>偏离预期任务边界的行为</li>
    </ul>
    <p>
      这种方式可以跨不同 Agent 技术栈工作。无论用户使用 Codex、Hermes、OpenClaw 还是自研 harness，始终有同一个关键问题：<strong className="text-gray-900">Agent 真实做了什么？</strong>
    </p>
    <ImgFigure
      src="/images/blog-observer-side-effect.png"
      alt="Runtime side effect observation"
      caption="Observer 把 Agent 真实动作（命令 / 文件 / 网络）汇聚成可复核的运行时证据流。"
    />

    <H2>围绕真实 side effect 设计的产品</H2>
    <p>
      方寸 Observer 的设计目标很明确：理解并控制高风险 side effect，避免它们酿成安全事故。它围绕<strong className="text-gray-900">四个产品原则</strong>构建：
    </p>
    <div className="my-8 grid grid-cols-1 gap-3 md:grid-cols-2">
      {[
        { t: "零代码改造接入", d: "把 Agent CLI 和 runtime 放入可观测环境，而不需要重写 Agent 应用。" },
        { t: "框架无关", d: "不强依赖某个 harness、SDK、模型供应商或 Agent 框架。" },
        { t: "实时风险响应", d: "在造成损害之前，提示、暂停或阻断危险行为。" },
        { t: "本地证据留存", d: "运行时证据、事件复核数据和组织行为基线保留在本地控制范围内。" },
      ].map((p, i) => (
        <div key={i} className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
          <div className="font-semibold text-gray-900 text-[15px] mb-1.5">{p.t}</div>
          <div className="text-[13px] text-gray-600 leading-relaxed">{p.d}</div>
        </div>
      ))}
    </div>
    <p>
      与其要求每个 Agent 框架都完美上报真相，方寸 Observer 选择<strong className="text-gray-900">观察 Agent 在真实系统上产生的效果</strong>。
    </p>

    <H2>实际使用体验</H2>
    <p>
      从用户角度看，Agent 可以在方寸 Observer 中启动，并像普通 CLI Agent 一样使用。不同之处在于，外层环境会记录有意义的运行时证据，并以安全视角呈现出来。
    </p>
    <p>一次被观测的会话可以帮助用户回答：</p>
    <ol className="my-5 list-decimal space-y-2 pl-6">
      <li>Agent 执行了哪些命令？</li>
      <li>它读取或修改了哪些文件？</li>
      <li>它是否访问了外部服务？</li>
      <li>它是否触碰了敏感资源？</li>
      <li>是否出现了一个风险步骤紧跟另一个风险步骤的情况？</li>
      <li>这些行为应该被允许、复核，还是阻断？</li>
    </ol>
    <p>
      界面可以展示实时事件流、运行计数器、风险趋势、会话摘要和策略结果。<strong className="text-gray-900">这使 Agent 执行从黑盒变成可以复核的运行记录</strong>。
    </p>

    <H2>零代码改造的观测</H2>
    <p>
      Agent 生态变化很快。一个与某个 SDK 或框架强绑定的安全系统，一旦用户迁移工具、重新封装 Agent 或采用第三方 runtime，就会变得脆弱。
    </p>
    <p>
      方寸 Observer 避免这种耦合。它的设计目标是<strong className="text-gray-900">让用户把现有 Agent 工作流带入观测环境，而不需要重写 prompt、工具注册或模型调用路径</strong>。这带来两个好处：
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li><strong className="text-gray-900">工程简单性</strong>：现有 Agent 工作流可以用更低的集成成本被评估。</li>
      <li><strong className="text-gray-900">安全完整性</strong>：运行时证据比应用层上报更难被选择性遗漏。</li>
    </ul>
    <p>这对多种 Agent 技术栈并存的企业环境尤其重要。</p>

    <H2>从孤立事件到行为链</H2>
    <p>
      单个命令或网络请求很少能说明完整问题。<strong className="text-gray-900">风险往往体现在一系列行为中</strong>。例如：
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>读取敏感文件可能可疑</li>
      <li>访问外部 endpoint 是正常行为</li>
      <li><strong className="text-gray-900">而两者连续发生时，就可能意味着一次严重安全事故</strong></li>
    </ul>
    <p>
      方寸 Observer 的设计目标是把这些步骤连接成<strong className="text-gray-900">行为链</strong>。这样用户不仅能复核单个动作，也能理解动作前后的上下文。
    </p>
    <p>
      这对 Agent 安全非常关键，因为很多失败并不是单步失败，而是决策、工具调用、文件访问、网络请求和跨 Agent 影响共同构成的链路。
    </p>

    <H2>实时干预</H2>
    <p>
      当 Agent 能在毫秒级时间内修改状态或发送数据时，事后复盘远远不够。方寸 Observer 面向<strong className="text-gray-900">主动运行时响应</strong>而设计。
    </p>
    <p>根据策略，用户可以用它来：</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>允许正常行为</li>
      <li>对可疑行为通知复核人员</li>
      <li>暂停执行，等待人工确认</li>
      <li>在高风险行为完成前进行阻断</li>
    </ul>
    <p>可能需要干预的行为包括：</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>破坏性 shell 命令</li>
      <li>访问 secret 或私钥</li>
      <li>在预期 workspace 外进行异常写入</li>
      <li>异常出站网络请求</li>
      <li>敏感文件访问后紧跟外部通信等可疑链路</li>
    </ul>
    <p className="rounded-2xl border-l-4 border-purple-500 bg-purple-50 py-4 px-6 text-gray-800">
      <strong className="text-gray-900">我们的目标不只是在事后理解一次事故，而是在可避免的事故落地前阻止它。</strong>
    </p>

    <H2>多 Agent 风险需要归因</H2>
    <p>
      在多 Agent 系统中，风险未必来自最终执行危险动作的那个 Agent。一个 Agent 可能引入受污染信息，另一个 Agent 可能采纳它，第三个 Agent 才执行最终步骤。<strong className="text-gray-900">如果没有归因，我们只能看到最后动作，而看不到上游影响路径</strong>。
    </p>
    <ImgFigure
      src="/images/blog-observer-multi-agent.png"
      alt="Multi-agent attribution"
      caption="多 Agent 协作中，风险会跨 Agent 传播——Observer 把上游影响路径和最终动作连起来。"
    />
    <p>
      方寸 Observer 面向这种现实设计。它帮助用户把 Agent 协作、运行时行为和事件证据连接起来，理解风险如何在系统中传播。这很重要，因为<strong className="text-gray-900">企业级 Agent 部署很少是孤立的单 Agent demo，而是由工具、角色、prompt 和委派任务组成的网络</strong>。
    </p>

    <H2>本地审计</H2>
    <p>
      安全证据往往包含敏感的运行信息。方寸 Observer 采用 <strong className="text-gray-900">local-first 设计</strong>，让企业可以把运行时证据、复核记录和策略学习数据保留在自己的边界内。
    </p>
    <p>随着时间积累，这些证据可以帮助用户理解不同 Agent 角色的正常行为：</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>coding agent 通常会执行什么</li>
      <li>file-management agent 通常会读写什么</li>
      <li>web-search agent 通常会访问哪些目标</li>
      <li>哪些工作流会稳定产生特定 side effect</li>
      <li>哪些偏移应触发复核或阻断</li>
    </ul>
    <p>
      这为用户提供了一条<strong className="text-gray-900">从静态规则走向企业专属运行时防御</strong>的路径。
    </p>

    <H2>Agent 的新安全边界</H2>
    <p>方寸 Observer 改变了 Agent 安全开始的位置。</p>
    <p>
      用户不再只依赖 Agent 说了什么，而是<strong className="text-gray-900">可以看见 Agent 真实做了什么</strong>。不再只复核应用日志，而是<strong className="text-gray-900">可以基于运行时证据做判断</strong>。不再只等事故结束后复盘，而是<strong className="text-gray-900">可以在高风险 side effect 完成前进行干预</strong>。
    </p>
  </>
);


// ============================================================
// English content (translated from Chinese)
// ============================================================


const ContentEn = () => (
  <>
    <H2>Why runtime visibility matters</H2>
    <p>
      AI agents are no longer passive chat interfaces. They execute commands, read and write files, call APIs, install packages, and coordinate with other agents. Once an agent can act, security users need more than conversation history or framework logs.
    </p>
    <p>
      Most agent monitoring starts from the application layer: tool-call callbacks, SDK integrations, framework or LLM traces. Those signals are useful, but they are not enough — they depend on the chosen agent framework, developer instrumentation, and the agent's own reporting path. <strong className="text-gray-900">Fangcun Observer focuses on what actually happens after the agent decides to act.</strong>
    </p>
    <p>It gives users visibility into:</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>command execution</li>
      <li>file access and modification</li>
      <li>outbound network activity</li>
      <li>sensitive-resource access</li>
      <li>suspicious sequences across multiple steps</li>
      <li>behavior that deviates from the expected task boundary</li>
    </ul>
    <p>
      This approach works across different agent stacks. Whether users run Codex, Hermes, OpenClaw, or a custom harness, the important question is the same: <strong className="text-gray-900">what did the agent actually do?</strong>
    </p>
    <ImgFigure
      src="/images/blog-observer-side-effect.png"
      alt="Runtime side effect observation"
      caption="Observer aggregates real agent actions — commands, files, network — into a reviewable runtime evidence stream."
    />

    <H2>A product designed around real side effects</H2>
    <p>
      Fangcun Observer is designed around a practical security goal: understand and control risky side effects before they become incidents. It is built around <strong className="text-gray-900">four product principles</strong>:
    </p>
    <div className="my-8 grid grid-cols-1 gap-3 md:grid-cols-2">
      {[
        { t: "Zero-code-change adoption", d: "Bring agent CLIs and runtimes into an observed environment without rewriting the agent application." },
        { t: "Framework independence", d: "No hard dependency on a specific harness, SDK, model provider, or agent framework." },
        { t: "Real-time risk response", d: "Surface, pause, or block dangerous behavior before damage is done." },
        { t: "Local evidence", d: "Runtime evidence, incident review data, and organizational baselines stay under local control." },
      ].map((p, i) => (
        <div key={i} className="rounded-2xl px-5 py-4 ring-1 ring-purple-200/60 bg-white/70">
          <div className="font-semibold text-gray-900 text-[15px] mb-1.5">{p.t}</div>
          <div className="text-[13px] text-gray-600 leading-relaxed">{p.d}</div>
        </div>
      ))}
    </div>
    <p>
      Instead of asking every agent framework to report the truth perfectly, Fangcun Observer <strong className="text-gray-900">observes the effects agents produce when they operate on real systems</strong>.
    </p>

    <H2>How it feels in practice</H2>
    <p>
      From the user's perspective, an agent can be launched inside Fangcun Observer and used much like a normal CLI agent. The difference is that the surrounding environment now records meaningful runtime evidence and presents it in a security-focused view.
    </p>
    <p>A typical observed session answers questions like:</p>
    <ol className="my-5 list-decimal space-y-2 pl-6">
      <li>Which commands did the agent run?</li>
      <li>Which files did it read or modify?</li>
      <li>Did it contact external services?</li>
      <li>Did it touch sensitive resources?</li>
      <li>Did one risky step follow another risky step?</li>
      <li>Should the behavior be allowed, reviewed, or blocked?</li>
    </ol>
    <p>
      The interface shows live event streams, runtime counters, risk trends, session summaries, and policy outcomes. <strong className="text-gray-900">Agent execution turns from a black box into a reviewable operating record.</strong>
    </p>

    <H2>Zero-code-change observation</H2>
    <p>
      Agent ecosystems change quickly. A security system tightly coupled to one SDK or framework becomes fragile as soon as users migrate tools, wrap agents differently, or adopt a third-party runtime.
    </p>
    <p>
      Fangcun Observer avoids that coupling — <strong className="text-gray-900">existing agent workflows come into the observed environment without rewriting prompts, tool registration, or model-call paths</strong>. Two benefits:
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li><strong className="text-gray-900">Engineering simplicity</strong>: existing agent workflows are evaluated with less integration work.</li>
      <li><strong className="text-gray-900">Security integrity</strong>: runtime evidence is harder to selectively omit than application-layer reporting.</li>
    </ul>
    <p>This is especially important where multiple agent stacks coexist inside one enterprise.</p>

    <H2>From isolated events to behavior chains</H2>
    <p>
      A single command or network request rarely tells the full story. <strong className="text-gray-900">Risk often appears in the sequence.</strong> For example:
    </p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>reading a sensitive file may be suspicious</li>
      <li>contacting an external endpoint may be normal</li>
      <li><strong className="text-gray-900">doing both in sequence can be a serious incident</strong></li>
    </ul>
    <p>
      Fangcun Observer connects these steps into <strong className="text-gray-900">behavior chains</strong>, so users can review not only individual actions but also the surrounding context.
    </p>
    <p>
      This matters because many agent failures are not single-step failures — they are chains of decisions, tool calls, file access, network calls, and cross-agent influence.
    </p>

    <H2>Real-time intervention</H2>
    <p>
      Post-incident review is not enough when an agent can modify state or send data in milliseconds. Fangcun Observer is designed for <strong className="text-gray-900">active runtime response</strong>.
    </p>
    <p>Depending on policy, users can:</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>allow normal behavior</li>
      <li>notify reviewers about suspicious behavior</li>
      <li>pause execution for human review</li>
      <li>block high-risk behavior before it completes</li>
    </ul>
    <p>Examples of behavior that may need intervention:</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>destructive shell commands</li>
      <li>access to secrets or private keys</li>
      <li>unexpected writes outside the intended workspace</li>
      <li>unusual outbound network calls</li>
      <li>suspicious chains such as sensitive file access followed by external communication</li>
    </ul>
    <p className="rounded-2xl border-l-4 border-purple-500 bg-purple-50 py-4 px-6 text-gray-800">
      <strong className="text-gray-900">The goal is not just to understand incidents after the fact. The goal is to stop avoidable incidents before they land.</strong>
    </p>

    <H2>Multi-agent risk needs attribution</H2>
    <p>
      In multi-agent systems, risk may not originate from the agent that performs the final dangerous action. One agent may introduce poisoned information; another may adopt it; a third may execute the final step. <strong className="text-gray-900">Without attribution, we only see the last action, not the upstream influence path.</strong>
    </p>
    <ImgFigure
      src="/images/blog-observer-multi-agent.png"
      alt="Multi-agent attribution"
      caption="In multi-agent collaboration, risk propagates across agents — Observer connects the upstream influence path to the final action."
    />
    <p>
      Fangcun Observer is designed for this reality. It connects agent collaboration, runtime behavior, and incident evidence so users can reason about how risk moved through the system. This matters because <strong className="text-gray-900">enterprise agent deployments are rarely isolated single-agent demos — they are networks of tools, roles, prompts, and delegated work</strong>.
    </p>

    <H2>Local audit</H2>
    <p>
      Security evidence often contains sensitive operational information. Fangcun Observer is <strong className="text-gray-900">local-first</strong>, so enterprises can retain runtime evidence, review records, and policy learning data inside their own boundary.
    </p>
    <p>Over time, this evidence helps users understand what normal looks like for different agent roles:</p>
    <ul className="my-5 list-disc space-y-2 pl-6">
      <li>what a coding agent normally executes</li>
      <li>what a file-management agent normally reads and writes</li>
      <li>what a web-search agent normally calls</li>
      <li>which workflows routinely produce specific side effects</li>
      <li>which deviations should trigger review or blocking</li>
    </ul>
    <p>
      This provides a <strong className="text-gray-900">path from static rules toward organization-specific runtime defense</strong>.
    </p>

    <H2>A new security boundary for agents</H2>
    <p>Fangcun Observer changes where agent safety begins.</p>
    <p>
      Instead of relying only on what the agent says, users can <strong className="text-gray-900">observe what the agent actually does</strong>. Instead of reviewing only application logs, they can <strong className="text-gray-900">reason from runtime evidence</strong>. Instead of waiting for incidents to finish, they can <strong className="text-gray-900">intervene before risky side effects complete</strong>.
    </p>
  </>
);


export default BlogObserver;
