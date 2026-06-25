import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

type TrialStatus = "ready" | "soon"

interface TrialItem {
  name: string
  blurb: string
  status: TrialStatus
  href?: string
}

const TRIAL_ITEMS: TrialItem[] = [
  {
    name: "方寸 Guard",
    blurb:
      "实时内容护栏。在控制台 Playground 直接试 scan-input / scan-output，也可以用开源 SDK 接入。",
    status: "ready",
    href: "/blog/fangcunguard",
  },
  {
    name: "方寸 Observer",
    blurb:
      "运行时监控 + 行为审计：命令 / 文件 / 网络 / 行为链全留痕，看见 Agent 真实做了什么。",
    status: "ready",
    href: "/blog/observer",
  },
  {
    name: "SkillWard",
    blurb: "三阶段 Skill 扫描：静态 + LLM + Docker 沙箱。开源。",
    status: "ready",
    href: "/blog/skillward",
  },
  {
    name: "方寸 RedTeam",
    blurb: "自动化的大模型安全检测平台 —— 按你的护栏策略生成定向越狱样本。",
    status: "soon",
  },
]

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-32">
        <div className="text-center">
          <div className="inline-block rounded-full bg-purple-100/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-purple-700 ring-1 ring-purple-200/60">
            快速开始
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            注册账号，进控制台体验
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-gray-600 md:text-lg">
            一个账号、每月 100 次免费调用，可以试我们已上线的所有产品。控制台里有安装命令、API key、在线
            Playground。
          </p>
        </div>

        <section className="mt-12">
          <div className="rounded-3xl px-8 py-10 ring-1 ring-purple-200 bg-gradient-to-br from-purple-100/60 via-white to-amber-50/60 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-[28px] leading-tight tracking-tight font-semibold text-gray-900">
                1. 注册账号
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-600 max-w-xl">
                邮箱验证一下就开通，无需信用卡。注册后立刻拿到一把 sk-xxai- 开头的 API
                key，可以马上跑通流程。
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://platform.fangcunleap.com/platform/register"
                className="rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
              >
                免费注册
              </a>
              <a
                href="https://platform.fangcunleap.com/platform/login"
                className="rounded-full ring-1 ring-purple-300 bg-white/80 px-7 py-3 text-sm font-medium text-purple-900 hover:bg-purple-50 transition-colors"
              >
                已有账号？登录
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-[28px] leading-tight tracking-tight font-semibold text-gray-900">
            2. 你可以体验的服务
          </h2>
          <p className="mt-2 text-[14px] text-gray-600 max-w-2xl">
            免费体验额度（每月 100 次调用）共享给下面这些产品。控制台 Playground 可以零代码点点试，要接进真实应用就装
            fangcun-hook-sdk。
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {TRIAL_ITEMS.map((item) => {
              const isReady = item.status === "ready"
              const Card = item.href ? "a" : "div"
              return (
                <Card
                  key={item.name}
                  {...(item.href ? { href: item.href } : {})}
                  className={`group rounded-2xl px-6 py-5 ring-1 ring-purple-200/60 bg-white/80 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.15)] transition-all ${
                    item.href ? "hover:ring-purple-400 hover:-translate-y-0.5" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-gray-900 text-[17px]">{item.name}</h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] ring-1 ${
                        isReady
                          ? "bg-emerald-100 text-emerald-700 ring-emerald-200"
                          : "bg-purple-100 text-purple-700 ring-purple-200"
                      }`}
                    >
                      {isReady ? "可体验" : "敬请期待"}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-gray-600">{item.blurb}</p>
                  {item.href && (
                    <div className="mt-3 text-[12px] font-medium text-purple-700 group-hover:text-purple-900 transition-colors">
                      了解更多 →
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-[28px] leading-tight tracking-tight font-semibold text-gray-900">
            3. 下一步
          </h2>
          <p className="mt-2 text-[14px] text-gray-600 max-w-2xl">
            进控制台后，左侧栏 Quick Start / Playground 是最直接的入口。详细的 SDK 用法、Hook
            协议、各 framework 集成范例都在控制台内的 Integrations 页面里。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/pricing"
              className="rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-purple-300 text-purple-800 hover:bg-purple-50 transition-colors"
            >
              看定价
            </a>
            <a
              href="/blog"
              className="rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-purple-300 text-purple-800 hover:bg-purple-50 transition-colors"
            >
              技术博客
            </a>
            <a
              href="mailto:info@fangcunleap.com"
              className="rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-purple-300 text-purple-800 hover:bg-purple-50 transition-colors"
            >
              有问题问我们
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
