import { ReactNode } from 'react';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import Link from 'next/link';

interface ArticleLayoutProps {
  children: ReactNode;
  title: string;
  date: string;
  stats: { label: string; value: string }[];
}

export function ArticleLayout({ children, title, date, stats }: ArticleLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F6F1E8]">
        {/* Breadcrumb */}
        <div className="border-b border-[#E2D9C8] bg-white/50">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <nav className="flex items-center gap-2 text-sm text-[#8A8A80]">
              <Link href="/" className="hover:text-[#C8853F] transition-colors">
                首页
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#C8853F] transition-colors">
                博客
              </Link>
              <span>/</span>
              <span className="text-[#1F2421]">{title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-b from-white/80 to-transparent">
          <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
            <time className="text-sm text-[#8A8A80] font-medium">
              {date}
            </time>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#1F2421] leading-tight">
              {title}
            </h1>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-[#E2D9C8] p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl font-bold text-[#C8853F]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-[#8A8A80] leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none
            prose-headings:font-bold
            prose-p:text-[#1F2421] prose-p:leading-relaxed
            prose-li:text-[#1F2421]
            prose-strong:text-[#1F2421] prose-strong:font-semibold
            prose-a:text-[#C8853F] prose-a:no-underline hover:prose-a:underline
            prose-code:text-[#C8853F] prose-code:bg-[#F0E3D0] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          ">
            {children}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#2A2723] to-[#1F2421] rounded-xl border border-[#C8853F]/20">
            <h3 className="text-2xl font-bold text-white mb-3">
              准备好开始了吗？
            </h3>
            <p className="text-[#8A8A80] mb-6">
              联系我们，了解如何将方寸跃迁的产品集成到您的工作流程中。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:business@fangcunleap.com"
                className="px-6 py-3 bg-[#C8853F] hover:bg-[#A86B2C] text-white font-semibold rounded-lg transition-colors"
              >
                申请演示
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
              >
                查看定价
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
