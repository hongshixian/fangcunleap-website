import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif, Noto_Serif_SC } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  style: 'italic',
  weight: '400',
})
const notoSerifSC = Noto_Serif_SC({
  variable: '--font-noto-serif',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: '守护人工智能的安全未来 | 方寸跃迁 FANGCUN LEAP',
  description:
    '方寸跃迁是一家研究驱动的 AI 安全公司，构建防御系统，保护 AI 模型、大语言模型和自主智能体免受对抗性威胁，让企业无畏创新。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/fangcun-favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/fangcun-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${notoSerifSC.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
