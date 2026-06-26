"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Menu, X, Globe } from "lucide-react"
import { Logo } from "./logo"
import { getNavItems } from "./nav-data"
import { useLanguage } from "./language-context"

const PLATFORM_URL =
  process.env.NEXT_PUBLIC_PLATFORM_URL || "https://platform.fangcunleap.com"
const PLATFORM_LOGIN_URL = `${PLATFORM_URL}/platform/login`
const PLATFORM_CONSOLE_URL = `${PLATFORM_URL}/platform/`

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggleLang } = useLanguage()
  const navItems = getNavItems(lang)

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 40
      console.log('Scroll Y:', window.scrollY, 'Scrolled:', isScrolled)
      setScrolled(isScrolled)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const light = !scrolled && !mobileOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "bg-background/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="/" aria-label="方寸跃迁首页">
          <Logo light={light} />
        </a>

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
                <a
                  href={item.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    light
                      ? "text-white/90 hover:text-white"
                      : "text-gray-900 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </a>
              )}
              {item.children && (
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-border bg-popover p-2 shadow-xl">
                    {item.children.map((c) => (
                      <a
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
                      </a>
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
              <a
                href={item.href ?? "#"}
                className="block px-1 py-1.5 text-sm font-semibold text-foreground"
              >
                {item.label}
              </a>
              {item.children?.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="block px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {c.label}
                </a>
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
