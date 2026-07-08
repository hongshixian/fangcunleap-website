"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronDown, Shield, Eye, ScanSearch, Swords, KeyRound, Network, Users, Target } from "lucide-react"
import { useLanguage } from "./language-context"
import { LazyVideo } from "./lazy-video"

type Bilingual = { en: string; zh: string }

type Product = {
  key: string
  icon: typeof Shield
  title: Bilingual
  subtitle: Bilingual
  video: string
  features: { en: string[]; zh: string[] }
}

// Agent Runtime 安全（5 个）
const runtimeProducts: Product[] = [
  {
    key: "guard",
    icon: Shield,
    title: { en: "Fangcun Guard", zh: "方寸 Guard" },
    subtitle: { en: "Real-time Content Guardrails for AI Agents", zh: "面向 AI Agent 的实时内容护栏" },
    video: "/videos/media-gd-1080p.mp4",
    features: {
      en: ["F1 91.1 Overall Score", "p99 8ms Low Latency", "10 Risk Categories", "Chinese Optimized", "Per-tenant Threshold Config", "6 Benchmark Aligned"],
      zh: ["F1 91.1 综合评分", "p99 8ms 低延迟", "10 类风险细分", "中文专项优化", "按租户独立配阈值", "6 项 benchmark 对齐"],
    },
  },
  {
    key: "observer",
    icon: Eye,
    title: { en: "Fangcun Observer", zh: "方寸 Observer" },
    subtitle: { en: "Agent Runtime Monitoring and Audit Trail", zh: "Agent 运行时监控与审计追踪" },
    video: "/videos/media-ob-1080p.mp4",
    features: {
      en: ["Zero-code Integration", "Full Tool Call Logging", "Network Request Tracking", "Sensitive File Access Logs", "Session Replay", "Local-first Evidence Storage"],
      zh: ["零代码改造接入", "工具调用全留痕", "出网请求追踪", "敏感文件访问记录", "任意会话可回放", "本地优先证据留存"],
    },
  },
  {
    key: "iam",
    icon: KeyRound,
    title: { en: "Agent IAM", zh: "Agent IAM" },
    subtitle: { en: "Identity Authentication and Access Management for AI Agents", zh: "面向 AI Agent 的身份认证与权限管理" },
    video: "/videos/media-iam-1080p.mp4",
    features: {
      en: ["Agent Identity Management", "Task-level Authorization", "Tool Permission Control", "Least Privilege Policy", "Permission Audit Trail", "Unauthorized Access Detection"],
      zh: ["Agent 身份标识", "任务级授权", "工具级权限控制", "最小权限策略", "权限调用审计", "越权行为检测"],
    },
  },
  {
    key: "skillward",
    icon: ScanSearch,
    title: { en: "SkillWard", zh: "方寸 SkillWard" },
    subtitle: { en: "Supply Chain Security Scanning for AI Skills", zh: "AI Skill 供应链安全扫描" },
    video: "/videos/media-sw-1080p.mp4",
    features: {
      en: ["Three-stage Scan Pipeline", "Static Analysis + LLM Review", "Docker Sandbox Verification", "99% Deployment Success", "Open Source Apache 2.0", "Automated Risk Reports"],
      zh: ["三阶段扫描流程", "静态分析 + LLM 研判", "Docker 沙箱验证", "99% 部署成功率", "开源 Apache 2.0", "自动化风险报告"],
    },
  },
  {
    key: "steward",
    icon: Network,
    title: { en: "Steward Agent", zh: "Steward Agent" },
    subtitle: { en: "Centralized Supervision and Management for Multi-Agent Systems", zh: "多 Agent 系统的中控监督与管理" },
    video: "/videos/media-super-1080p.mp4",
    features: {
      en: ["Multi-Agent Supervision", "Task Coordination", "Permission Management", "Risk Alert & Intervention", "Policy Enforcement", "Cross-Agent Audit Trail"],
      zh: ["多 Agent 统一监督", "任务分配协调", "权限边界管理", "风险告警与干预", "策略更新执行", "跨 Agent 行为审计"],
    },
  },
]

// 大模型安全评测（3 个）
const evaluationProducts: Product[] = [
  {
    key: "redteam",
    icon: Swords,
    title: { en: "Fangcun RedTeam", zh: "方寸 RedTeam" },
    subtitle: { en: "Automated Red Team Testing for AI Systems", zh: "AI 系统自动化红队测试" },
    video: "/videos/media-rt-1080p.mp4",
    features: {
      en: ["Auto Jailbreak Generation", "Adversarial Test Scenarios", "Comprehensive Security Reports", "Defense Validation", "Continuous Attack Simulation", "Multi-vector Testing"],
      zh: ["自动越狱样本生成", "对抗性测试场景", "完整安全报告输出", "防御能力验证", "持续攻击模拟", "多向量攻击测试"],
    },
  },
  {
    key: "multiagent",
    icon: Users,
    title: { en: "Multi-Agent Automated Attack", zh: "Multi-Agent 自动化攻击" },
    subtitle: { en: "Coordinated Multi-Agent Attacks for Deep Vulnerability Discovery", zh: "多智能体协同攻击，挖掘深层漏洞" },
    video: "/videos/media-ma-1080p.mp4",
    features: {
      en: ["Multi-Agent Coordination", "Complex Attack Patterns", "Deep Vulnerability Mining", "Attack-Defense-Evaluation Loop", "Emerging Model Testing", "Scalable Attack Scenarios"],
      zh: ["多智能体协同", "复杂攻击路径", "深层漏洞挖掘", "攻防评闭环", "前沿模型测试", "可扩展攻击场景"],
    },
  },
  {
    key: "redteamplatform",
    icon: Target,
    title: { en: "Automated Red Team Platform", zh: "自动化红队平台" },
    subtitle: { en: "Continuous and Scalable Red Team Testing for AI Models", zh: "持续、规模化的模型红队对抗测试" },
    video: "/videos/media-rp-1080p.mp4",
    features: {
      en: ["Auto Attack Case Generation", "Continuous Red Team Testing", "Scalable Adversarial Testing", "High Coverage Testing", "Reproducible Security Tests", "Comprehensive Test Reports"],
      zh: ["自动生成攻击用例", "持续红队对抗", "规模化安全测试", "高覆盖率测试", "可复现测试场景", "完整测试报告"],
    },
  },
]

const productLinks: Record<string, string> = {
  guard: "/blog/fangcunguard",
  observer: "/blog/observer",
  iam: "/solutions#iam",
  skillward: "/blog/skillward",
  steward: "/solutions#steward",
  redteam: "/solutions#redteam",
  multiagent: "/solutions#multiagent",
  redteamplatform: "/solutions#redteamplatform",
}

type Language = "en" | "zh"

// 单个产品分组：左侧可折叠卡片列表，右侧视频容器（沿用 Solutions 的交互与结构）
function ProductGroup({
  id,
  eyebrow,
  title,
  items,
  lang,
}: {
  id: string
  eyebrow: Bilingual
  title: Bilingual
  items: Product[]
  lang: Language
}) {
  const [open, setOpen] = useState(0)
  const count = items.length
  // 展开卡片占约 50%，其余平均分剩余 50%
  const collapsedPct = 50 / Math.max(1, count - 1)

  return (
    <div id={id} className="scroll-mt-24">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow[lang]}
        </p>
        <h3 className="mt-3 text-balance text-2xl font-bold md:text-3xl">
          {title[lang]}
        </h3>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_2fr] lg:min-h-[560px]">
        {/* 左侧：可折叠卡片列表 */}
        <div className="flex flex-col h-full min-h-[560px] lg:min-h-0">
          {items.map((p, i) => {
            const active = open === i
            const isLast = i === count - 1
            const height = active
              ? "calc(50% - 4px)"
              : `calc(${collapsedPct}% - 4px)`
            const Icon = p.icon
            return (
              <div
                key={p.key}
                onMouseEnter={() => setOpen(i)}
                style={{
                  height,
                  transition: "height 0.35s ease, border-color 0.3s, box-shadow 0.3s",
                }}
                className={`flex flex-col rounded-2xl border overflow-hidden cursor-pointer ${
                  active
                    ? "border-primary/40 bg-card shadow-md"
                    : "border-border bg-card"
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
                      {p.title[lang]}
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
                    {p.subtitle[lang]}
                  </p>
                  <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                    {p.features[lang].map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={productLinks[p.key] || "#contact"}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
                  >
                    {lang === "zh" ? "查看详情" : "Learn More"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* 右侧：视频容器 */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card min-h-[400px] lg:min-h-0">
          {items.map((p, i) => (
            <LazyVideo
              key={p.video}
              src={p.video}
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

export function Products() {
  const { lang } = useLanguage()

  return (
    <section id="products" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1450px] px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            {lang === "zh" ? "构建 AI 与人类之间的信任" : "Building Trust Between AI and Humans"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            {lang === "zh"
              ? "多层安全架构，全方位保护 AI 交互的每一个维度"
              : "Multi-layered security architecture, protecting every dimension of AI interaction"}
          </p>
        </div>

        <div className="mt-16 space-y-20 md:space-y-24">
          <ProductGroup
            id="runtime-security"
            eyebrow={{ en: "Products & Services", zh: "产品与服务" }}
            title={{ en: "Agent Runtime Security", zh: "Agent Runtime 安全" }}
            items={runtimeProducts}
            lang={lang}
          />
          <ProductGroup
            id="model-evaluation"
            eyebrow={{ en: "Products & Services", zh: "产品与服务" }}
            title={{ en: "LLM Security Evaluation", zh: "大模型安全评测" }}
            items={evaluationProducts}
            lang={lang}
          />
        </div>
      </div>
    </section>
  )
}
