"use client"

import { useState } from "react"
import { KeyRound, Eye, ShieldCheck, ScanSearch, Network, Radar, Swords, Users } from "lucide-react"
import { useLanguage } from "./language-context"

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

export function CoreTech() {
  const { lang } = useLanguage()
  const [expandedLines, setExpandedLines] = useState<Record<string, boolean>>({})

  const toggleLine = (lineKey: string) => {
    setExpandedLines((prev) => ({
      ...prev,
      [lineKey]: !prev[lineKey],
    }))
  }

  return (
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

        <div className="mt-16 space-y-20">
          {lines.map((line) => (
            <div key={line.key}>
              <h3 className="text-balance text-center text-2xl font-bold md:text-3xl">
                {line.title[lang]}
              </h3>

              <div className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card p-4 md:p-8">
                <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    onContextMenu={(e) => e.preventDefault()}
                    className="h-full w-full object-cover pointer-events-none"
                    style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)", maskComposite: "intersect", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)", WebkitMaskComposite: "source-in" }}
                  >
                    <source src={line.video} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className={`mt-8 grid gap-5 ${line.key === 'runtime-security' ? 'md:grid-cols-2 lg:grid-cols-5' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                {line.cards.map((c) => {
                  const Icon = c.icon
                  const isExpanded = expandedLines[line.key]
                  return (
                    <button
                      key={c.title[lang]}
                      onClick={() => toggleLine(line.key)}
                      className="rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md overflow-hidden flex flex-col text-left w-full"
                    >
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="mt-4 text-lg font-bold">{c.title[lang]}</h4>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {c.desc[lang]}
                          </p>
                        </div>
                      </div>
                      {c.video && (
                        <div className="relative w-full overflow-hidden bg-card" style={{ aspectRatio: '4/3' }}>
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            disablePictureInPicture
                            disableRemotePlayback
                            onContextMenu={(e) => e.preventDefault()}
                            className="h-full w-full object-contain pointer-events-none"
                            style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)", maskComposite: "intersect", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)", WebkitMaskComposite: "source-in" }}
                          >
                            <source src={c.video} type="video/mp4" />
                          </video>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
