"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, Globe } from "lucide-react"
import { Logo } from "./logo"
import { getNavItems, type NavItem } from "./nav-data"
import { useLanguage } from "./language-context"

const PLATFORM_URL =
  process.env.NEXT_PUBLIC_PLATFORM_URL || "https://platform.fangcunleap.com"
const PLATFORM_LOGIN_URL = `${PLATFORM_URL}/platform/login`
const PLATFORM_CONSOLE_URL = `${PLATFORM_URL}/platform/`

type Language = "en" | "zh"

interface HeaderViewProps {
  lang: Language
  toggleLang: () => void
  navItems: NavItem[]
  /** true = 浮在首页深色 hero 上（透明→滚动变实心）；false = 普通页面，始终实心浅色 */
  overHero?: boolean
}

/**
 * 纯展示型导航栏。首页与所有子页共用同一个组件以保证外观完全一致，
 * 语言状态由各自的 context 通过 props 传入（首页用 site context，子页用 legacy context）。
 */
export function HeaderView({ lang, toggleLang, navItems, overHero = false }: HeaderViewProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!overHero) return
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [overHero])

  // 仅在首页 hero 之上且未滚动时用浅色（白字透明）；子页始终深色实心
  const light = overHero && !scrolled && !mobileOpen
  const solid = !overHero || scrolled || mobileOpen

  return (
    <header
      className={`${overHero ? "fixed" : "sticky"} inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-background/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1450px] items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" aria-label="方寸跃迁首页">
          <Logo light={light} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              {item.children ? (
                <button
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    light
                      ? "text-white/90 hover:text-white"
                      : "text-gray-900 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    light
                      ? "text-white/90 hover:text-white"
                      : "text-gray-900 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              )}
              {item.children && (
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-border bg-popover p-2 shadow-xl">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block rounded-lg px-3 py-2 transition-colors hover:bg-accent"
                      >
                        <span className="block text-sm font-medium text-popover-foreground">
                          {c.label}
                        </span>
                        {c.desc && (
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {c.desc}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="切换语言"
            className={`hidden items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-colors sm:flex ${
              light
                ? "text-white/60 hover:bg-white/10 hover:text-white"
                : "text-gray-700 hover:bg-accent hover:text-gray-900"
            }`}
          >
            <Globe className="h-4 w-4" />
            {lang === "zh" ? "EN" : "中文"}
          </button>

          {/* Login link */}
          <a
            href={PLATFORM_LOGIN_URL}
            className={`hidden rounded-full px-4 py-2 text-sm font-light transition-colors sm:inline-block ${
              light ? "text-white/70 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {lang === "zh" ? "登录" : "Login"}
          </a>

          {/* Console button */}
          <a
            href={PLATFORM_CONSOLE_URL}
            className={`hidden rounded-full px-6 py-2.5 text-sm font-medium transition-all sm:inline-block ${
              light
                ? "bg-white text-purple-900 hover:scale-[1.02]"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            {lang === "zh" ? "进入控制台" : "Console"}
          </a>

          {/* Mobile menu toggle */}
          <button
            aria-label="菜单"
            onClick={() => setMobileOpen((v) => !v)}
            className={`rounded-md p-2 lg:hidden ${
              light ? "text-white" : "text-gray-900"
            }`}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-border bg-background px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-border/60 py-2">
              <Link
                href={item.href ?? "#"}
                className="block px-1 py-1.5 text-sm font-semibold text-foreground"
              >
                {item.label}
              </Link>
              {item.children?.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="block px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground"
            >
              <Globe className="h-4 w-4" />
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <a
              href={PLATFORM_LOGIN_URL}
              className="block rounded-full border border-border px-5 py-2.5 text-center text-sm font-medium text-foreground"
            >
              {lang === "zh" ? "登录" : "Login"}
            </a>
            <a
              href={PLATFORM_CONSOLE_URL}
              className="block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              {lang === "zh" ? "进入控制台" : "Console"}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

/** 首页导航栏：浮在深色 hero 之上，使用 site 语言 context。 */
export function Header() {
  const { lang, toggleLang } = useLanguage()
  return <HeaderView lang={lang} toggleLang={toggleLang} navItems={getNavItems(lang)} overHero />
}
