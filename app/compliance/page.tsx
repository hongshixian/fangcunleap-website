import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32">
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#C8853F]">
            信任中心
          </p>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            合规
          </h1>
          <p className="text-lg text-gray-600">
            我们当前遵循的合规框架，以及正在对齐的方向。最后更新：2026-04-15。
          </p>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="mt-10 text-[14px] leading-relaxed text-gray-700">
            我们处于公开发布的早期阶段。本页如实标注我们目前已遵循的、正在对齐的、还未声明的合规事项。
          </p>

          <Section title="当前已遵循">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>中华人民共和国相关法律法规，包括《个人信息保护法》、《数据安全法》与《网络安全法》。</li>
              <li>OWASP LLM 安全最佳实践（Top 10），我们的检测产品对照这套清单组织能力覆盖。</li>
              <li>ICP 备案 / 公网安备：相关备案号公示在网站底部。</li>
            </ul>
          </Section>

          <Section title="正在对齐">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>ISO/IEC 27001 信息安全管理体系。</li>
              <li>SOC 2 Type II（针对面向海外客户的服务范围）。</li>
              <li>等保三级（针对企业版 / 私有部署客户）。</li>
            </ul>
          </Section>

          <Section title="我们不声明的事">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>我们目前不持有 GDPR / EU AI Act 合规声明，服务面向中国境内客户。</li>
              <li>我们目前不做 HIPAA 合规声明；如有 PHI（受保护健康信息）相关需求，请通过私有部署 + 单独签合规附录的方式联系我们。</li>
              <li>我们目前不持有任何已颁发的安全审计报告，相关证书在路上。</li>
            </ul>
          </Section>

          <Section title="合规问卷">
            <p className="text-[14px] leading-relaxed text-gray-700">
              采购方需要我们填 vendor 安全 / 合规问卷（CAIQ、SIG、自定义模板等），请联系{" "}
              <a
                href="mailto:info@fangcunleap.com?subject=Vendor%20security%20questionnaire"
                className="text-[#C8853F] underline decoration-[#F0E3D0] underline-offset-2 transition-colors hover:text-[#A86B2C]"
              >
                info@fangcunleap.com
              </a>
              ，标注 [Vendor Questionnaire]，5 个工作日内回。
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
