import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { SideTools } from "@/components/site/side-tools"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 grid-mask" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              新闻
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              公司新闻与媒体报道
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              最新的产品发布、行业合作和媒体报道
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Company News Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">公司新闻</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* News Item 1 */}
            <a
              href="https://mp.weixin.qq.com/s/zWgguOI2aMwXRrJVEmi8oQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-4 group-hover:text-primary transition-colors">
                    智能助理智能体（Claw）可信能力技术规范正式发布
                  </h3>
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-3 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-medium">
                        A
                      </div>
                      <span className="truncate">人工智能产业发展联盟 AIIA</span>
                    </div>
                    <span>·</span>
                    <span>2026-04-13</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center">
                    <span className="text-white text-xs font-bold text-center px-2 leading-tight">
                      权威发布
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* News Item 2 */}
            <a
              href="https://mp.weixin.qq.com/s/z36I4c7Pv1Zt58EbRxRu5w"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-4 group-hover:text-primary transition-colors">
                    关于对《网络安全标准实践指南——OpenClaw 类智能体部署使用安全指引（征求意见稿）》公开征求意见的通知
                  </h3>
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-3 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-xs font-medium">
                        全
                      </div>
                      <span className="truncate">全国网安标委</span>
                    </div>
                    <span>·</span>
                    <span>2026-03-31</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-red-600 via-red-700 to-rose-800 flex items-center justify-center">
                    <span className="text-white text-xs font-bold text-center px-2 leading-tight">
                      重磅发布
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Media Coverage Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">媒体报道</h2>

          <a
            href="https://mp.weixin.qq.com/s/BKZLh5x1QyLsQISedMBr1Q"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-200 block"
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-4 group-hover:text-primary transition-colors">
                  细思极恐！Agent 暗藏风险，清华团队打出组合拳，全链路一网打尽
                </h3>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-xs font-medium">
                      新
                    </div>
                    <span className="truncate">新智元</span>
                  </div>
                  <span>·</span>
                  <span>2026-05-07</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative h-20 w-[120px] rounded-lg overflow-hidden bg-gray-100">
                  {/* NOTE: Image needs to be copied from old site */}
                  {/* Source: /home/lihao/git/fangcunai-platform-main/website/public/images/news-xinzhiyuan.webp */}
                  {/* Target: /home/lihao/git/fangcunleap-v0/public/images/news-xinzhiyuan.webp */}
                  <Image
                    src="/images/news-xinzhiyuan.webp"
                    alt="新智元报道"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Press Contact Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">媒体联系</h2>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-foreground/80">
              如需采访或了解更多信息，请联系：{" "}
              <a
                href="mailto:info@fangcunleap.com"
                className="text-primary hover:underline font-medium"
              >
                info@fangcunleap.com
              </a>
            </p>
          </div>
        </section>
      </div>

      <Footer />
      <SideTools />
    </main>
  )
}
