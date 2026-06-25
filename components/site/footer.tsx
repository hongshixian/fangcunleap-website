import Image from "next/image"
import { Logo } from "./logo"

const footerCols = [
  {
    title: "产品",
    links: [
      "方寸 Guard",
      "方寸 Observer",
      "SkillWard",
      "方寸 RedTeam",
      "AgentPlugin",
    ],
  },
  {
    title: "解决方案",
    links: ["数据泄露防护", "智能体越权防护", "供应链安全扫描", "自动红队测试"],
  },
  { title: "开发者", links: ["快速开始", "API 文档", "GitHub", "SkillWard 在线体验"] },
  { title: "公司", links: ["关于我们", "博客", "加入我们", "定价"] },
  { title: "合规与安全", links: ["安全实践", "合规信息", "隐私政策", "服务条款"] },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[oklch(0.16_0.02_285)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Logo light />
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p>业务咨询：contact@fangcunleap.com</p>
              <p>通用邮箱：info@fangcunleap.com</p>
            </div>
            <div className="mt-5 space-y-1 text-sm leading-relaxed text-white/70">
              <p>控制台：platform.fangcunleap.com</p>
              <p>SkillWard：skillward.fangcunleap.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-xs leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 方寸跃迁 FANGCUN LEAP. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="#" className="hover:text-white">冀ICP备2026005892号</a>
            <a href="#" className="hover:text-white">冀公网安备13310202000276号</a>
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
