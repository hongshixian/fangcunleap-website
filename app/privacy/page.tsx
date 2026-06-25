import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32">
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#C8853F]">
            法律
          </p>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            隐私政策
          </h1>
          <p className="text-lg text-gray-600">
            你使用方寸跃迁服务时，我们如何处理数据。最后更新：2026-04-15。
          </p>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="mt-10 text-[14px] leading-relaxed text-gray-700">
            Fangcun Leap（方寸跃迁，下称"我们"）非常重视用户隐私。本政策说明你使用 fangcunleap.com 及关联子域名（platform.* / guard.* / skillward.* / observer.*）时，我们收集、使用和保护信息的方式。继续使用我们的服务即视为同意本政策。
          </p>

          <Section title="1. 我们收集的信息">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>账号信息：邮箱、加密后的密码哈希、企业名称（如填写）。</li>
              <li>使用元数据：API 调用时间戳、来源 IP、调用路径、tokens 数量、命中风险类型——用于计费、限流、风控。</li>
              <li>支付信息：通过支付宝 / 微信支付完成支付，我们仅保留订单号 + 金额，完整支付凭证由支付方留存。</li>
              <li>通讯记录：你主动通过邮箱（info / hr / privacy@fangcunleap.com）发给我们的内容。</li>
              <li>我们不会在请求体内容（messages / content）中保留可识别个人身份的信息超过完成本次检测所需的时长。</li>
            </ul>
          </Section>

          <Section title="2. 信息使用方式">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>提供服务：登录认证、API 鉴权、按 token 计费、调用统计。</li>
              <li>安全审计：识别异常调用 / 防止滥用、防爬虫、防止盗刷计费。</li>
              <li>产品改进：聚合后的脱敏指标（QPS、延迟分布、风险类目分布等）用于工程优化，不涉及单条请求内容。</li>
              <li>法定要求：按中国法律及相关监管要求配合调查。</li>
              <li>我们不会把你的请求内容用于训练我们的检测模型，除非你明示授权。</li>
            </ul>
          </Section>

          <Section title="3. 数据共享">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>我们不会向第三方出售你的数据。</li>
              <li>服务必要的第三方处理者：阿里云（基础设施）、支付宝 / 微信（支付通道）。这些方在合同约束下只能为我们处理数据。</li>
              <li>法律要求：仅在收到合法有效的中国监管或司法机关要求时配合披露。</li>
            </ul>
          </Section>

          <Section title="4. 数据保护">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>传输与存储均按行业标准加密。</li>
              <li>密码与 API key 仅以哈希形式留存，不保存明文。</li>
              <li>内部访问按最小必要原则授权，操作留审计日志。</li>
              <li>账号信息保留至账号注销 + 法定保留期；其余数据保留时长按服务等级有所不同。</li>
            </ul>
          </Section>

          <Section title="5. 你的权利">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>查阅：你可登录控制台查看账号信息、调用记录、计费记录。</li>
              <li>更正：账号信息可在「账号设置」内修改。</li>
              <li>删除：发送邮件至 privacy@fangcunleap.com 申请删除账号；除法定保留要求外的数据将在 30 日内清除。</li>
              <li>撤回授权：你随时可以暂停或销毁 API key 停止数据传入。</li>
            </ul>
          </Section>

          <Section title="6. 政策更新">
            <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-gray-700">
              <li>若本政策发生重大变更，我们会通过邮件 / 站内通知的方式提前 14 日告知。继续使用服务即视为同意更新。</li>
            </ul>
          </Section>

          <Section title="联系方式">
            <p className="text-[14px] leading-relaxed text-gray-700">
              对本政策有疑问，请联系{" "}
              <a
                href="mailto:info@fangcunleap.com"
                className="text-[#C8853F] underline decoration-[#F0E3D0] underline-offset-2 transition-colors hover:text-[#A86B2C]"
              >
                info@fangcunleap.com
              </a>
              （隐私相关请用 privacy@ 子地址，会自动转到同一收件箱）
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
