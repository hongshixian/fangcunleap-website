import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { SideTools } from "@/components/site/side-tools"

export default function AboutPage() {
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
              关于我们
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              构建 AI 与人类之间的信任
            </h1>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        {/* Vision Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">公司愿景</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground/80">
              以 AI 治 AI，建立人与 AI 之间的信任中间层。
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">团队</h2>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-foreground/80">
              方寸跃迁背靠清华大学交叉信息研究院（IIIS），核心成员来自清华大学和加州大学伯克利分校，曾就职于百度、中国电信等企业。
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">联系我们</h2>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-foreground/80">
              邮箱：{" "}
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
