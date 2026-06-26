"use client"

import Image from "next/image"
import { Logo } from "./logo"
import { useLanguage } from "./language-context"

const footerCols = {
  en: [
    {
      title: "Products",
      links: [
        { label: "Fangcun Guard", href: "/blog/fangcunguard" },
        { label: "Fangcun Observer", href: "/blog/observer" },
        { label: "SkillWard", href: "/blog/skillward" },
        { label: "Fangcun RedTeam", href: "/solutions#redteam" },
        { label: "AgentPlugin", href: "/blog/plugin" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Data Leakage Protection", href: "/solutions#guard" },
        { label: "Agent Privilege Protection", href: "/solutions#observer" },
        { label: "Supply Chain Security Scanning", href: "/solutions#skillward" },
        { label: "Automated Red Team Testing", href: "/solutions#redteam" },
      ],
    },
    {
      title: "Developers",
      links: [
        { label: "Quick Start", href: "/documentation" },
        { label: "GitHub", href: "https://github.com/Fangcun-AI" },
        { label: "SkillWard Demo", href: "https://skillward.fangcunleap.com" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Compliance & Security",
      links: [
        { label: "Security Practices", href: "/security" },
        { label: "Compliance Info", href: "/compliance" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  zh: [
    {
      title: "产品",
      links: [
        { label: "方寸 Guard", href: "/blog/fangcunguard" },
        { label: "方寸 Observer", href: "/blog/observer" },
        { label: "SkillWard", href: "/blog/skillward" },
        { label: "方寸 RedTeam", href: "/solutions#redteam" },
        { label: "AgentPlugin", href: "/blog/plugin" },
      ],
    },
    {
      title: "解决方案",
      links: [
        { label: "数据泄露防护", href: "/solutions#guard" },
        { label: "智能体越权防护", href: "/solutions#observer" },
        { label: "供应链安全扫描", href: "/solutions#skillward" },
        { label: "自动红队测试", href: "/solutions#redteam" },
      ],
    },
    {
      title: "开发者",
      links: [
        { label: "快速开始", href: "/documentation" },
        { label: "GitHub", href: "https://github.com/Fangcun-AI" },
        { label: "SkillWard 在线体验", href: "https://skillward.fangcunleap.com" },
      ],
    },
    {
      title: "公司",
      links: [
        { label: "关于我们", href: "/about" },
        { label: "博客", href: "/blog" },
        { label: "加入我们", href: "/careers" },
        { label: "定价", href: "/pricing" },
      ],
    },
    {
      title: "合规与安全",
      links: [
        { label: "安全实践", href: "/security" },
        { label: "合规信息", href: "/compliance" },
        { label: "隐私政策", href: "/privacy" },
        { label: "服务条款", href: "/terms" },
      ],
    },
  ],
}

export function Footer() {
  const { lang } = useLanguage()
  const cols = footerCols[lang]

  return (
    <footer id="contact" className="bg-[oklch(0.16_0.02_285)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Logo light />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs leading-relaxed text-white/60 transition-colors hover:text-white"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {lang === "zh" ? "方寸跃迁" : "Fangcun Leap"} FANGCUN LEAP. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="#" className="hover:text-white">冀ICP备2026005892号</a>
            <a href="#" className="hover:text-white">冀公网安备13310202000276号</a>
            <a href="/privacy" className="hover:text-white">{lang === "zh" ? "隐私政策" : "Privacy Policy"}</a>
            <a href="/terms" className="hover:text-white">{lang === "zh" ? "服务条款" : "Terms of Service"}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
