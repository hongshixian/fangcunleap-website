"use client"

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


// Per-deployment platform host. Same env override pattern as the rest of
// the site so dev / staging can point at a different platform install.
const PLATFORM_URL =
  process.env.NEXT_PUBLIC_PLATFORM_URL ||
  "https://platform.fangcunleap.com";
const PLATFORM_LOGIN_URL = `${PLATFORM_URL}/platform/login`;
const PLATFORM_CONSOLE_URL = `${PLATFORM_URL}/platform/`;


interface SiteHeaderProps {
  /** "dark" = on top of the homepage hero (white text, inverted logo). "light" = on the lighter MarketingPage / Blog. */
  theme: "light" | "dark";
}

const navItems = (t: (k: string) => string) => [
  // Routes: all navigation items link to dedicated pages to match main site header
  { key: "solutions", label: t("nav.solutions"), to: "/solutions" },
  { key: "products", label: t("nav.products"),  to: "/#products"  },
  { key: "about",    label: t("nav.about"),     to: "/about"      },
  { key: "blog",     label: t("nav.blog"),      to: "/blog"       },
  { key: "research", label: t("nav.research"),  to: "/research"   },
];


const SiteHeader = ({ theme }: SiteHeaderProps) => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === "dark";
  const items = navItems(t);

  // Theme-dependent classes pulled into objects to keep the JSX tidy.
  const navPillClass = isDark ? "liquid-glass" : "liquid-glass-light";
  const linkClass = isDark
    ? "rounded-full px-5 py-2 text-sm font-light text-white/80 transition-all hover:bg-white/10 hover:text-white"
    : "rounded-full px-5 py-2 text-sm font-light text-gray-700 transition-all hover:bg-purple-500/10 hover:text-gray-900";
  const langBtnClass = isDark
    ? "flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-white/60 transition-all hover:bg-white/10 hover:text-white"
    : "liquid-glass-light flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-light text-gray-700 transition-all hover:text-gray-900";
  const loginLinkClass = isDark
    ? "rounded-full px-4 py-2 text-sm font-light text-white/70 transition-all hover:text-white"
    : "rounded-full px-4 py-2 text-sm font-light text-gray-700 transition-all hover:text-gray-900";
  const consoleBtnClass = isDark
    ? "rounded-full bg-white px-6 py-2.5 text-sm font-medium text-purple-900 transition-all hover:scale-[1.02]"
    : "liquid-glass-btn rounded-full px-6 py-2.5 text-sm font-medium text-purple-900";
  const hamburgerClass = isDark
    ? "rounded-full p-2 text-white/80 hover:bg-white/10"
    : "rounded-full p-2 text-gray-700 hover:bg-purple-500/10";
  const logoTextClass = isDark
    ? "text-xl font-medium tracking-tight text-white"
    : "text-xl font-medium tracking-tight text-gray-900";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-30 w-full px-6 pt-5"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.png"
            alt="Fangcun Leap"
            className={`h-12 w-auto md:h-14 ${isDark ? "brightness-0 invert" : ""}`}
          />
          <span className={logoTextClass}>{lang === "zh" ? "方寸跃迁" : "Fangcun Leap"}</span>
        </Link>

        {/* ── Desktop nav (md+) ── */}
        <nav className={`hidden md:flex items-center gap-0.5 rounded-full px-2 py-1.5 ${navPillClass}`}>
          {items.map((item) => (
            <Link key={item.key} href={item.to} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop right-side actions (md+) ── */}
        <div className="hidden md:flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className={langBtnClass}
            aria-label="toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "en" ? "中" : "EN"}
          </button>
          <a href={PLATFORM_LOGIN_URL} className={loginLinkClass}>
            {t("nav.login")}
          </a>
          <a href={PLATFORM_CONSOLE_URL} className={consoleBtnClass}>
            {t("nav.console")}
          </a>
        </div>

        {/* ── Mobile hamburger toggle (< md) ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`md:hidden ${hamburgerClass}`}
          aria-label="toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden mt-3 mx-2 rounded-2xl px-5 py-4 ring-1 ${
              isDark
                ? "bg-[#0d0817]/95 ring-white/10 backdrop-blur-md"
                : "bg-white/95 ring-purple-200/60 backdrop-blur-md shadow-[0_8px_32px_-12px_rgba(120,80,200,0.15)]"
            }`}
          >
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.key}
                  href={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isDark
                      ? "text-white/85 hover:bg-white/10"
                      : "text-gray-800 hover:bg-purple-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div
                className={`mt-2 pt-3 border-t ${isDark ? "border-white/10" : "border-gray-200"} flex flex-col gap-2`}
              >
                <button
                  onClick={() => setLang(lang === "en" ? "zh" : "en")}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                    isDark ? "text-white/70 hover:bg-white/10" : "text-gray-700 hover:bg-purple-50"
                  }`}
                >
                  <Globe className="h-3.5 w-3.5" />
                  {lang === "en" ? "中文" : "EN"}
                </button>
                <a
                  href={PLATFORM_LOGIN_URL}
                  className={`rounded-lg px-3 py-2 text-sm ${
                    isDark ? "text-white/70 hover:bg-white/10" : "text-gray-700 hover:bg-purple-50"
                  }`}
                >
                  {t("nav.login")}
                </a>
                <a
                  href={PLATFORM_CONSOLE_URL}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium text-center ${
                    isDark ? "bg-white text-purple-900" : "bg-gray-900 text-white"
                  }`}
                >
                  {t("nav.console")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SiteHeader;
