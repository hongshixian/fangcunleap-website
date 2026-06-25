"use client"

import { useEffect, useState } from "react"
import { Headphones, QrCode, ArrowUp } from "lucide-react"

export function SideTools() {
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
          立即咨询
        </button>
        <div className="h-px bg-border" />
        <button className="flex w-16 flex-col items-center gap-1 px-2 py-3 text-[11px] text-muted-foreground transition-colors hover:text-primary">
          <QrCode className="h-5 w-5" />
          公众号
        </button>
      </div>
      {show && (
        <button
          aria-label="返回顶部"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-12 w-16 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-lg transition-colors hover:text-primary"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
