"use client"

import { useState } from "react"
import { ChevronDown, KeyRound, Eye, ShieldCheck, ScanSearch, Network, Radar, Swords, Users } from "lucide-react"
import { useLanguage } from "./language-context"
import { LazyVideo } from "./lazy-video"

const lines = [
  {
    key: "runtime-security",
    video: "/videos/lines-1-1080p.mp4",
    title: { en: "Agent Runtime Security", zh: "Agent Runtime 安全" },
    cards: [
      {
        icon: KeyRound,
        title: { en: "Agent IAM: Identity & Access Management", zh: "Agent IAM：身份认证与权限管理" },
        desc: {
          en: "Establishes independent identity and permission boundaries for different agents, tasks, and tool calls, using agent identity, task-level authorization, tool-level permission control, and least-privilege policies to prevent unrestricted access to sensitive resources.",
          zh: "为不同 Agent、不同任务、不同工具调用建立独立身份与权限边界，通过 Agent 身份标识、任务级授权、工具级权限控制、最小权限策略等机制，避免 Agent 无限制访问敏感资源。",
        },
        video: "/videos/media-iam-1080p.mp4",
      },
      {
        icon: Eye,
        title: { en: "Runtime Observation & System-level Side Effects", zh: "运行时观测与系统层副作用监控" },
        desc: {
          en: "Captures and analyzes an agent's key behavior trails during execution, including file access, network requests, process and command execution, tool calls, and browser operations, reconstructing complete agent trajectories for threat modeling.",
          zh: "采集和分析 Agent 在执行过程中的关键行为轨迹，包括文件读写、网络访问、进程执行、命令调用、工具调用、浏览器操作等系统层副作用，还原完整 Agent 轨迹，为威胁建模提供数据支撑。",
        },
        video: "/videos/media-ob-1080p.mp4",
      },
      {
        icon: ShieldCheck,
        title: { en: "Runtime Guardrails: Low-latency Detection & Blocking", zh: "运行时护栏：低时延安全检测与阻断" },
        desc: {
          en: "Performs low-latency security checks before an agent acts or calls a tool, at around 8ms, identifying high-risk operations, unauthorized calls, and dangerous tool chains, then allowing, alerting, blocking, or downgrading based on policy.",
          zh: "在 Agent 执行动作前或工具调用前进行低时延安全检测，时延约 8ms 级别，识别高风险操作、越权调用、危险工具链组合等行为，并根据策略进行放行、告警、阻断或降级处理。",
        },
        video: "/videos/media-gd-1080p.mp4",
      },
      {
        icon: ScanSearch,
        title: { en: "Skill / MCP Security Scanner", zh: "Skill / MCP 安全检测器" },
        desc: {
          en: "Analyzes tool descriptions, call interfaces, permission declarations, code logic, and external dependencies to identify hidden instructions, excessive permissions, and dangerous system calls before external skills or MCP servers are connected.",
          zh: "面向工具描述、调用接口、权限声明、代码逻辑、外部依赖等进行分析，识别隐蔽指令、过度权限、危险系统调用等风险，在工具接入前降低恶意 Skill 或 MCP Server 造成破坏的可能性。",
        },
        video: "/videos/media-sw-1080p.mp4",
      },
      {
        icon: Network,
        title: { en: "Steward Agent: Central Supervision & Multi-Agent Management", zh: "Steward Agent：中控监督与多 Agent 管理" },
        desc: {
          en: "A governing agent that observes the running status, task goals, permission boundaries, and tool-call behavior of other agents, enabling centralized task coordination, permission arbitration, risk alerting, and cross-agent audit trails.",
          zh: "作为上层治理智能体，观察各类 Agent 的运行状态、任务目标、权限边界和工具调用行为，支持任务分配协调、权限协调、风险告警与跨 Agent 行为审计。",
        },
        video: "/videos/media-super-1080p.mp4",
      },
    ],
  },
  {
    key: "model-evaluation",
    video: "/videos/lines-2-1080p.mp4",
    title: { en: "LLM Security Evaluation", zh: "大模型安全评测" },
    cards: [
      {
        icon: Radar,
        title: { en: "LLM Red Team Testing", zh: "大模型红队测试" },
        desc: {
          en: "Systematic security testing and adversarial validation for frontier large models, covering cybersecurity, bio-chemical safety, loss-of-control risk, model deception, and agentic behavior to identify potential vulnerabilities and capability boundaries in complex high-risk scenarios.",
          zh: "面向前沿大模型开展系统化安全测试与人工对抗验证，覆盖网络安全、生化安全、失控风险、模型欺骗、智能体行为等前沿安全维度，识别模型在复杂高风险场景下的潜在安全漏洞与能力边界。",
        },
        video: "/videos/media-rt-1080p.mp4",
      },
      {
        icon: Users,
        title: { en: "Multi-Agent Automated Attack", zh: "Multi-Agent 自动化攻击" },
        desc: {
          en: "Coordinates multiple agents to launch complex, multi-stage attacks against the latest models, uncovering deep vulnerabilities that single-point testing tends to miss; integrates attack strategies, risk analysis, and defense mechanisms to close the attack-defense-evaluation loop.",
          zh: "通过多智能体协同对最新模型发起复杂、多阶段攻击，挖掘单点测试难以发现的深层漏洞；同时联动攻击策略、风险分析与防御机制，形成「攻—防—评」闭环。",
        },
        video: "/videos/media-ma-1080p.mp4",
      },
      {
        icon: Swords,
        title: { en: "Automated Red Team Evaluation Platform", zh: "自动化红队评测平台" },
        desc: {
          en: "Automatically generates attack cases and executes continuous large-scale red team testing, supporting multi-risk scenario coverage, test orchestration, result reproduction, risk attribution, and evaluation reports to improve efficiency, coverage, and sustainability of model security assessment.",
          zh: "自动生成攻击用例并持续执行规模化红队对抗测试，支持多类风险场景覆盖、测试任务编排、结果复现、风险归因与评测报告输出，提升模型安全评测的效率、覆盖度与可持续性。",
        },
        video: "/videos/media-rp-1080p.mp4",
      },
    ],
  },
]

type Line = (typeof lines)[number]
type Card = Line["cards"][number]

/**
 * 单个技术分组的折叠卡片布局。
 * - 左右 1:1 网格；右侧视频固定 4:3 比例，左侧列表 stretch 跟随高度。
 * - 左侧列表：hover 展开当前项，展开占 50% 高度，其余平分剩余 50%。
 * - 右侧视频叠层，opacity 切换保证瞬时响应。
 */
function TechGroup({ line, lang }: { line: Line; lang: "en" | "zh" }) {
  const [open, setOpen] = useState(0)
  const count = line.cards.length
  const collapsedPct = 50 / Math.max(1, count - 1)

  return (
    <div id={line.key} className="scroll-mt-24">
      <h3 className="text-balance text-center text-2xl font-bold md:text-3xl">
        {line.title[lang]}
      </h3>

      <div className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card p-4 md:p-8">
        <div
          className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl mx-auto"
          style={{ maxHeight: "var(--section-banner-max)" }}
        >
          <LazyVideo src={line.video} className="h-full w-full object-cover pointer-events-none" />
        </div>
      </div>

      {/* 1:1 两列；右列锁定 4:3 视频比例并受视口 max-height cap，左列高度 stretch 跟随 */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {/* 左侧：可折叠卡片列表 */}
        <div className="flex flex-col h-[560px] lg:h-auto lg:min-h-0">
          {line.cards.map((c: Card, i) => {
            const active = open === i
            const isLast = i === count - 1
            const height = active
              ? "calc(50% - 4px)"
              : `calc(${collapsedPct}% - 4px)`
            const Icon = c.icon
            return (
              <div
                key={c.title[lang]}
                onMouseEnter={() => setOpen(i)}
                style={{
                  height,
                  transition: "height 0.35s ease, border-color 0.3s, box-shadow 0.3s",
                }}
                className={`flex flex-col rounded-2xl border overflow-hidden cursor-pointer ${
                  active ? "border-primary/40 bg-card shadow-md" : "border-border bg-card"
                } ${!isLast ? "mb-2" : ""}`}
              >
                <div className="flex items-center justify-between gap-4 px-5 py-3.5 shrink-0">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon
                      className={`h-5 w-5 shrink-0 ${
                        active ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <span className="text-base font-bold truncate">
                      {c.title[lang]}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      active ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </div>
                <div
                  className={`flex-1 min-h-0 overflow-hidden px-5 pb-4 transition-opacity duration-300 ${
                    active ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.desc[lang]}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* 右侧：4:3 视频容器，视频叠层用 opacity 切换 */}
        <div
          className="relative overflow-hidden rounded-3xl border border-border bg-card aspect-[4/3] w-full mx-auto"
          style={{ maxHeight: "var(--section-media-max)" }}
        >
          {line.cards.map((c: Card, i) => (
            <LazyVideo
              key={c.video}
              src={c.video}
              className={`absolute inset-0 h-full w-full object-contain p-6 transition-opacity duration-500 pointer-events-none ${
                open === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function CoreTech() {
  const { lang } = useLanguage()

  return (
    <>
      {/* 第一区块：伞状标题 + Agent Runtime 安全分组 */}
      <section id="tech" className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1450px] px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
              {lang === "zh" ? (
                <>
                  研究驱动 全链路覆盖的
                  <br className="hidden sm:block" />
                  AI 安全防护核心技术
                </>
              ) : (
                <>
                  Research-Driven Full-Chain
                  <br className="hidden sm:block" />
                  AI Security Core Technologies
                </>
              )}
            </h2>
          </div>

          <div className="mt-16">
            <TechGroup line={lines[0]} lang={lang} />
          </div>
        </div>
      </section>

      {/* 第二区块：大模型安全评测分组，独立成 section 便于滚动吸附 */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1450px] px-4 md:px-6">
          <TechGroup line={lines[1]} lang={lang} />
        </div>
      </section>
    </>
  )
}
