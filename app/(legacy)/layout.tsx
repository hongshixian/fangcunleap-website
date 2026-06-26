"use client"

import { LanguageProvider } from "@/components/legacy/i18n/LanguageContext"
import "@/app/legacy.css"

export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <div data-zone="legacy">
        {children}
      </div>
    </LanguageProvider>
  )
}
