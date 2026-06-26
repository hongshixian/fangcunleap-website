"use client"

import { useEffect, useState } from "react"
import { Headphones, QrCode, ArrowUp } from "lucide-react"
import { useLanguage } from "./language-context"

export function SideTools() {
  const { lang } = useLanguage()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed bottom-8 right-4 z-40 flex flex-col gap-3 md:right-6">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
        <button className="flex w-16 flex-col items-center gap-1 px-2 py-3 text-[11px] text-muted-foreground transition-colors hover:text-primary">
          <Headphones className="h-5 w-5" />
          {lang === "zh" ? "立即咨询" : "Contact"}
        </button>
        <div className="h-px bg-border" />
        <button className="flex w-16 flex-col items-center gap-1 px-2 py-3 text-[11px] text-muted-foreground transition-colors hover:text-primary">
          <QrCode className="h-5 w-5" />
          {lang === "zh" ? "公众号" : "WeChat"}
        </button>
      </div>
      {show && (
        <button
          aria-label={lang === "zh" ? "返回顶部" : "Back to top"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-12 w-16 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-lg transition-colors hover:text-primary"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
