"use client"

import { useEffect } from "react"
import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Products } from "@/components/site/products"
import { CoreTech } from "@/components/site/core-tech"
import { Solutions } from "@/components/site/solutions"
import { Partners } from "@/components/site/partners"
import { News } from "@/components/site/news"
import { ContactCta } from "@/components/site/contact-cta"
import { Footer } from "@/components/site/footer"
import { LanguageProvider } from "@/components/site/language-context"

export default function Page() {
  // 仅在首页开启滚动吸附；离开时立即恢复原生滚动，避免影响子页面。
  useEffect(() => {
    document.documentElement.classList.add("snap-y-proximity")
    return () => {
      document.documentElement.classList.remove("snap-y-proximity")
    }
  }, [])

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Partners />
        <Solutions />
        <CoreTech />
        <Products />
        <News />
        <ContactCta />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
