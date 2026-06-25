import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

type Status = "shipping" | "beta" | "preview"

interface Product {
  name: string
  blurb: string
  status: Status
  href?: string
}

const PRODUCTS: Product[] = [
  {
    name: "方寸 Guard",
    blurb:
      "面向 AI Agent 的实时内容护栏。6 项 benchmark 综合 F1 91.1，p99 8 ms ——中文专项优化，10 类风险细分，按租户独立配阈值。",
    status: "shipping",
    href: "/blog/fangcunguard",
  },
  {
    name: "方寸 Observer",
    blurb:
      "Agent 运行时监控与审计：工具调用、出网请求、敏感文件读写全留痕。任意会话可回放，事后追责能拿到证据链。",
    status: "beta",
    href: "/blog/observer",
  },
  {
    name: "SkillWard",
    blurb:
      "三阶段 Skill 安全扫描：静态分析 + LLM 研判 + Docker 沙箱。揪出纯审阅流水线看不见的运行时威胁。",
    status: "shipping",
    href: "/blog/skillward",
  },
  {
    name: "方寸 RedTeam",
    blurb:
      "面向 AI 应用的自动红队测试。根据你的护栏策略生成定向越狱样本，跑完出一份可验证的安全报告。",
    status: "preview",
  },
]

const STATUS_TONE: Record<Status, string> = {
  shipping: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  beta: "bg-amber-100 text-amber-700 ring-amber-200",
  preview: "bg-purple-100 text-purple-700 ring-purple-200",
}

const STATUS_LABEL: Record<Status, string> = {
  shipping: "已上线",
  beta: "Beta",
  preview: "研究预览",
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-32">
        <div className="text-center">
          <div className="inline-block rounded-full bg-purple-100/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-purple-700 ring-1 ring-purple-200/60">
            解决方案
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            端到端的 AI 应用安全方案
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-gray-600 md:text-lg">
            从实时护栏、运行时监控、Skill 扫描，到红队测试 —— 按需选用，也可全栈组合。
          </p>
        </div>

        <section className="mt-12">
          <p className="text-[15px] leading-relaxed text-gray-600 max-w-2xl">
            四条产品线、一个安全底层 ——
            从实时护栏到红队测试，覆盖从开发、上线到运行时的全链路 AI 安全。每一条都可独立采购，也可全栈组合。
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {PRODUCTS.map((p) => {
              const Card = p.href ? "a" : "div"
              return (
                <Card
                  key={p.name}
                  {...(p.href ? { href: p.href } : {})}
                  className={`group rounded-2xl px-6 py-5 ring-1 ring-purple-200/60 bg-white/80 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.15)] transition-all ${
                    p.href ? "hover:ring-purple-400 hover:-translate-y-0.5" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-gray-900 text-[17px]">{p.name}</h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] ring-1 ${STATUS_TONE[p.status]}`}
                    >
                      {STATUS_LABEL[p.status]}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-gray-600">{p.blurb}</p>
                  {p.href && (
                    <div className="mt-3 text-[12px] font-medium text-purple-700 group-hover:text-purple-900 transition-colors">
                      了解更多 →
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
