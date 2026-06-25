import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32">
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#C8853F]">
            信任中心
          </p>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            方寸跃迁的安全实践
          </h1>
          <p className="text-lg text-gray-600">
            我们是一家做 AI 安全的公司，安全就是产品本身。最后更新：2026-04-15。
          </p>
        </div>

        <div className="prose prose-sm max-w-none">
          <Section title="加密与访问">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>存储：敏感字段静态加密，密码与 API key 仅以哈希方式留存。</li>
              <li>访问：内部按最小必要原则授权，操作留审计日志。</li>
            </ul>
          </Section>

          <Section title="数据处理">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>请求体内容（messages / content）只用于完成本次检测，不会被持久化保留。</li>
              <li>用于产品优化的指标仅来自聚合后的脱敏数据，不涉及单条请求内容。</li>
            </ul>
          </Section>

          <Section title="监控与响应">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>我们对服务异常 / 滥用行为持续监控，并保留事件审计记录。</li>
              <li>发生影响用户的安全事件时，我们承诺在 72 小时内通知受影响用户并通报处置进度。</li>
            </ul>
          </Section>

          <Section title="漏洞披露">
            <p className="text-[14px] leading-relaxed text-gray-700">
              如果你发现疑似安全漏洞，请联系{" "}
              <a
                href="mailto:info@fangcunleap.com?subject=Security%20vulnerability%20disclosure"
                className="text-[#C8853F] underline decoration-[#F0E3D0] underline-offset-2 transition-colors hover:text-[#A86B2C]"
              >
                info@fangcunleap.com
              </a>
              ，邮件主题加 [Security]。我们承诺：5 个工作日内首次回应；不追究负责任披露的研究者法律责任。请在我们修复完成前不要公开披露。
            </p>
          </Section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 mt-12">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">{title}</h2>
      {children}
    </section>
  )
}
