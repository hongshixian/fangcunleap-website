import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32">
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#C8853F]">
            法律
          </p>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            服务条款
          </h1>
          <p className="text-lg text-gray-600">
            请仔细阅读以下条款。最后更新：2026-04-15。
          </p>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="mt-10 text-[14px] leading-relaxed text-gray-700">
            以下条款规范你使用 Fangcun Leap（方寸跃迁，下称"我们"）所提供服务的行为。注册、付费或调用 API 即视为接受本条款。
          </p>

          <Section title="1. 服务">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>我们提供 AI 安全相关的 SaaS 服务，按量计费；具体定价以官网公示为准。</li>
              <li>我们保留升级或调整服务的权利；重大变更将提前通知。</li>
            </ul>
          </Section>

          <Section title="2. 账号">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>请使用真实有效的邮箱注册。账号下的所有操作由账号持有人负责。</li>
              <li>API key 视为账号持有人的身份凭证，请妥善保管。如有泄漏请立刻轮换并告知我们。</li>
            </ul>
          </Section>

          <Section title="3. 可接受使用">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>不得用于违反中华人民共和国法律法规的用途。</li>
              <li>不得对我们的服务实施未授权扫描、压力测试或反向工程。</li>
              <li>不得绕过计费、限流、配额机制。</li>
              <li>我们有权暂停或终止违规账号。</li>
            </ul>
          </Section>

          <Section title="4. 计费">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>服务按使用量计费，详见官网定价。</li>
              <li>钱包余额为预充值，不退现；终止服务后未消费部分可申请等值代金券。</li>
              <li>对计费有异议请在产生争议费用 30 日内联系我们。</li>
            </ul>
          </Section>

          <Section title="5. 知识产权">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>我们的服务及其相关知识产权归 Fangcun Leap 所有。</li>
              <li>你保留对自有数据 / 内容的全部权利。</li>
            </ul>
          </Section>

          <Section title="6. 免责声明">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>服务按"现状"提供。我们尽合理商业努力维持服务质量，但不对调用结果做绝对保证。</li>
              <li>因不可抗力、第三方原因或用户违规使用导致的损失，我们不承担责任。</li>
              <li>在法律允许范围内，我们不对间接或附带损失承担责任，累计赔偿不超过你过去 12 个月内向我们实际支付的费用。</li>
            </ul>
          </Section>

          <Section title="7. 适用法律">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>本条款适用中华人民共和国法律。争议先友好协商；协商不成的，提交我们公司所在地有管辖权的人民法院诉讼解决。</li>
            </ul>
          </Section>

          <Section title="联系方式">
            <p className="text-[14px] leading-relaxed text-gray-700">
              对本条款有疑问，联系{" "}
              <a
                href="mailto:info@fangcunleap.com"
                className="text-[#C8853F] underline decoration-[#F0E3D0] underline-offset-2 transition-colors hover:text-[#A86B2C]"
              >
                info@fangcunleap.com
              </a>
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
