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
      en: ["Real-time filtering", "Adaptive policies", "Low latency", "Multi-language support", "Custom rules", "API integration"],
      zh: ["实时过滤", "自适应策略", "低延迟", "多语言支持", "自定义规则", "API 集成"],
    },
  },
  {
    key: "observer",
    icon: Eye,
    title: { en: "Fangcun Observer", zh: "方寸 Observer" },
    subtitle: { en: "Agent Runtime Monitoring and Audit Trail", zh: "Agent 运行时监控与审计追踪" },
    video: "/videos/media-ob-1080p.mp4",
    features: {
      en: ["Full trace", "Anomaly detection", "Compliance audit", "Real-time alerts", "Behavior analysis", "Report export"],
      zh: ["全链路追踪", "异常检测", "合规审计", "实时告警", "行为分析", "报告导出"],
    },
  },
  {
    key: "iam",
    icon: KeyRound,
    title: { en: "Agent IAM", zh: "Agent IAM" },
    subtitle: { en: "Identity Authentication and Access Management for AI Agents", zh: "面向 AI Agent 的身份认证与权限管理" },
    video: "/videos/media-iam-1080p.mp4",
    features: {
      en: ["Identity verification", "Fine-grained access", "Role management", "Token lifecycle", "Audit logging", "SSO integration"],
      zh: ["身份验证", "细粒度权限", "角色管理", "令牌生命周期", "审计日志", "SSO 集成"],
    },
  },
  {
    key: "skillward",
    icon: ScanSearch,
    title: { en: "SkillWard", zh: "方寸 SkillWard" },
    subtitle: { en: "Supply Chain Security Scanning for AI Skills", zh: "AI Skill 供应链安全扫描" },
    video: "/videos/media-sw-1080p.mp4",
    features: {
      en: ["Vulnerability scan", "Dependency check", "Malware detection", "License compliance", "Version tracking", "Auto remediation"],
      zh: ["漏洞扫描", "依赖检查", "恶意代码检测", "许可证合规", "版本追踪", "自动修复"],
    },
  },
  {
    key: "steward",
    icon: Network,
    title: { en: "Steward Agent", zh: "Steward Agent" },
    subtitle: { en: "Centralized Supervision and Management for Multi-Agent Systems", zh: "多 Agent 系统的中控监督与管理" },
    video: "/videos/media-super-1080p.mp4",
    features: {
      en: ["Multi-agent supervision", "Task coordination", "Permission boundary", "Risk intervention", "Policy enforcement", "Cross-agent audit"],
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
      en: ["Automated attacks", "Multi-vector testing", "Vulnerability discovery", "Coverage analysis", "Continuous testing", "Detailed reports"],
      zh: ["自动化攻击", "多向量测试", "漏洞发现", "覆盖分析", "持续测试", "详细报告"],
    },
  },
  {
    key: "multiagent",
    icon: Users,
    title: { en: "Multi-Agent Automated Attack", zh: "Multi-Agent 自动化攻击" },
    subtitle: { en: "Coordinated Multi-Agent Attacks for Deep Vulnerability Discovery", zh: "多智能体协同攻击，挖掘深层漏洞" },
    video: "/videos/media-ma-1080p.mp4",
    features: {
      en: ["Coordinated attacks", "Deep vulnerability discovery", "Complex scenarios", "Strategic planning", "Attack pattern learning", "Impact analysis"],
      zh: ["协同攻击", "深层漏洞发现", "复杂场景模拟", "策略规划", "攻击模式学习", "影响分析"],
    },
  },
  {
    key: "redteamplatform",
    icon: Target,
    title: { en: "Automated Red Team Platform", zh: "自动化红队平台" },
    subtitle: { en: "Continuous and Scalable Red Team Testing for AI Models", zh: "持续、规模化的模型红队对抗测试" },
    video: "/videos/media-rp-1080p.mp4",
    features: {
      en: ["Continuous testing", "Scalable infrastructure", "Model coverage", "Automation pipeline", "Performance metrics", "Compliance reports"],
      zh: ["持续测试", "可扩展基础设施", "模型覆盖", "自动化流水线", "性能指标", "合规报告"],
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

/**
 * 单个产品分组：左侧可折叠卡片列表，右侧视频容器。
 * 布局参考 Solutions 组件的折叠模式：
 * - 左右列 grid 1:1
 * - 右列固定 4:3 视频比例
 * - 左列高度与右列一致，展开卡片占 50%，其余平均分剩余 50%
 * - 悬停切换展开项，ChevronDown 旋转指示状态
 */
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
  // 展开卡片占 50%，其余平分剩余 50%
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

      {/* 1:1 两列；右列锁定 4:3 视频比例，左列高度跟随 */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {/* 左侧：可折叠卡片列表 */}
        <div className="flex flex-col h-[560px] lg:h-auto">
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

        {/* 右侧：4:3 视频容器，视频叠层用 opacity 切换 */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card aspect-[4/3] w-full">
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
            {lang === "zh" ? "产品与服务" : "Products & Services"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {lang === "zh"
              ? "覆盖 Agent 运行时安全与大模型安全评测两大方向。"
              : "Covering Agent Runtime Security and LLM Security Evaluation."}
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
