"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { useLanguage } from "./language-context"

const footerCols = {
  en: [
    {
      title: "Products & Services",
      links: [
        { label: "Agent Runtime Security", href: "/#runtime-security" },
        { label: "LLM Security Evaluation", href: "/#model-evaluation" },
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
  ],
  zh: [
    {
      title: "产品与服务",
      links: [
        { label: "Agent Runtime 安全", href: "/#runtime-security" },
        { label: "大模型安全评测", href: "/#model-evaluation" },
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
  ],
}

type Language = "en" | "zh"

/** 纯展示型页脚，首页与所有子页共用以保证外观一致；语言由各自 context 传入。 */
export function FooterView({ lang }: { lang: Language }) {
  const cols = footerCols[lang]

  return (
    <footer id="contact" className="bg-[oklch(0.16_0.02_285)] text-white">
      <div className="mx-auto max-w-[1450px] px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Logo light />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => {
                    const isExternal = link.href.startsWith('http')
                    return (
                      <li key={link.label}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            className="text-xs leading-relaxed text-white/60 transition-colors hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-xs leading-relaxed text-white/60 transition-colors hover:text-white"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    )
                  })}
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
            <Link href="/privacy" className="hover:text-white">{lang === "zh" ? "隐私政策" : "Privacy Policy"}</Link>
            <Link href="/terms" className="hover:text-white">{lang === "zh" ? "服务条款" : "Terms of Service"}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/** 首页页脚：使用 site 语言 context。 */
export function Footer() {
  const { lang } = useLanguage()
  return <FooterView lang={lang} />
}
