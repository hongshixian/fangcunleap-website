"use client"

import { HeaderView } from "@/components/site/header"
import { getNavItems } from "@/components/site/nav-data"
import { useLanguage } from "@/components/legacy/i18n/LanguageContext"

interface SiteHeaderProps {
  /** 兼容旧调用签名；子页统一使用浅色实心样式，与首页导航栏保持一致外观 */
  theme?: "light" | "dark"
}

/**
 * 子页导航栏适配器：复用首页的 HeaderView（保证外观与首页完全一致），
 * 语言状态取自 legacy context，使导航与页面正文一起切换中英文。
 */
const SiteHeader = (_props: SiteHeaderProps) => {
  const { lang, setLang } = useLanguage()
  const toggleLang = () => setLang(lang === "en" ? "zh" : "en")

  return (
    <HeaderView
      lang={lang}
      toggleLang={toggleLang}
      navItems={getNavItems(lang)}
      overHero={false}
    />
  )
}

export default SiteHeader
