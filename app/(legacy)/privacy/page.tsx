"use client"

import MarketingPage, { MPSection } from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


const Privacy = () => (
  <MarketingPage
    eyebrow={{ en: "Legal", zh: "法律" }}
    title={{ en: "Privacy policy", zh: "隐私政策" }}
    subtitle={{
      en: "How we handle data when you use Fangcun Leap. Last updated: 2026-04-15.",
      zh: "你使用方寸跃迁服务时,我们如何处理数据。最后更新:2026-04-15。",
    }}
  >
    <Effective />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Contact />
  </MarketingPage>
);

const Effective = () => {
  const { lang } = useLanguage();
  return (
    <p className="mt-10 text-[14px] leading-relaxed text-gray-700 max-w-3xl">
      {lang === "zh"
        ? "Fangcun Leap(方寸跃迁,下称\"我们\")非常重视用户隐私。本政策说明你使用 fangcunleap.com 及关联子域名(platform.* / guard.* / skillward.* / observer.*)时,我们收集、使用和保护信息的方式。继续使用我们的服务即视为同意本政策。"
        : "Fangcun Leap (\"we\") takes user privacy seriously. This policy describes what information we collect, how we use it, and how we protect it across fangcunleap.com and its subdomains (platform.* / guard.* / skillward.* / observer.*). Continued use of our services constitutes acceptance of this policy."}
    </p>
  );
};

const Section1 = () => (
  <MPSection title={{ en: "1. Information we collect", zh: "1. 我们收集的信息" }}>
    <Bilingual
      zh={[
        "账号信息:邮箱、加密后的密码哈希、企业名称(如填写)。",
        "使用元数据:API 调用时间戳、来源 IP、调用路径、tokens 数量、命中风险类型——用于计费、限流、风控。",
        "支付信息:通过支付宝 / 微信支付完成支付,我们仅保留订单号 + 金额,完整支付凭证由支付方留存。",
        "通讯记录:你主动通过邮箱(info / hr / privacy@fangcunleap.com)发给我们的内容。",
        "我们不会在请求体内容(messages / content)中保留可识别个人身份的信息超过完成本次检测所需的时长。",
      ]}
      en={[
        "Account info: email, hashed password, organization name (if provided).",
        "Usage metadata: API call timestamps, source IPs, route paths, token counts, hit risk categories — used for billing, rate-limiting, and abuse prevention.",
        "Payment info: payments are processed via Alipay / WeChat Pay; we only retain the order ID and amount. Full payment records sit with the payment processor.",
        "Communications: any content you send to info / hr / privacy@fangcunleap.com.",
        "We do not retain personally identifiable information from request bodies (messages / content) beyond the time needed to perform the safety scan.",
      ]}
    />
  </MPSection>
);

const Section2 = () => (
  <MPSection title={{ en: "2. How we use information", zh: "2. 信息使用方式" }}>
    <Bilingual
      zh={[
        "提供服务:登录认证、API 鉴权、按 token 计费、调用统计。",
        "安全审计:识别异常调用 / 防止滥用、防爬虫、防止盗刷计费。",
        "产品改进:聚合后的脱敏指标(QPS、延迟分布、风险类目分布等)用于工程优化,不涉及单条请求内容。",
        "法定要求:按中国法律及相关监管要求配合调查。",
        "我们不会把你的请求内容用于训练我们的检测模型,除非你明示授权。",
      ]}
      en={[
        "Service operation: login, API auth, per-token billing, usage analytics.",
        "Security: detect abusive calls, scraping, billing fraud.",
        "Product improvement: aggregated and de-identified metrics (QPS, latency distribution, risk-category distribution) inform engineering decisions; never per-request content.",
        "Legal: comply with applicable Chinese law and regulator requests.",
        "We do NOT use your request content to train our detection models unless you explicitly opt in.",
      ]}
    />
  </MPSection>
);

const Section3 = () => (
  <MPSection title={{ en: "3. Data sharing", zh: "3. 数据共享" }}>
    <Bilingual
      zh={[
        "我们不会向第三方出售你的数据。",
        "服务必要的第三方处理者:阿里云(基础设施)、支付宝 / 微信(支付通道)。这些方在合同约束下只能为我们处理数据。",
        "法律要求:仅在收到合法有效的中国监管或司法机关要求时配合披露。",
      ]}
      en={[
        "We do not sell your data to third parties.",
        "Necessary processors: Alibaba Cloud (infrastructure), Alipay / WeChat Pay (payment rails). These parties act on our instructions under contract.",
        "Legal: we disclose only in response to valid Chinese regulatory or judicial requests.",
      ]}
    />
  </MPSection>
);

const Section4 = () => (
  <MPSection title={{ en: "4. Data protection", zh: "4. 数据保护" }}>
    <Bilingual
      zh={[
        "传输与存储均按行业标准加密。",
        "密码与 API key 仅以哈希形式留存,不保存明文。",
        "内部访问按最小必要原则授权,操作留审计日志。",
        "账号信息保留至账号注销 + 法定保留期;其余数据保留时长按服务等级有所不同。",
      ]}
      en={[
        "Encryption applied in transit and at rest, following industry-standard practices.",
        "Passwords and API keys are stored only as hashes — never in cleartext.",
        "Least-privilege internal access; operations are audit-logged.",
        "Account info retained until deletion plus statutory retention; other data retention varies by service tier.",
      ]}
    />
  </MPSection>
);

const Section5 = () => (
  <MPSection title={{ en: "5. Your rights", zh: "5. 你的权利" }}>
    <Bilingual
      zh={[
        "查阅:你可登录控制台查看账号信息、调用记录、计费记录。",
        "更正:账号信息可在「账号设置」内修改。",
        "删除:发送邮件至 privacy@fangcunleap.com 申请删除账号;除法定保留要求外的数据将在 30 日内清除。",
        "撤回授权:你随时可以暂停或销毁 API key 停止数据传入。",
      ]}
      en={[
        "Access: see your account info, usage records, and billing records inside the Console.",
        "Correction: edit your account info under \"Account settings\".",
        "Deletion: email privacy@fangcunleap.com to request account deletion; non-legally-required data is purged within 30 days.",
        "Withdraw consent: pause or rotate API keys at any time to stop data ingress.",
      ]}
    />
  </MPSection>
);

const Section6 = () => (
  <MPSection title={{ en: "6. Updates to this policy", zh: "6. 政策更新" }}>
    <Bilingual
      zh={[
        "若本政策发生重大变更,我们会通过邮件 / 站内通知的方式提前 14 日告知。继续使用服务即视为同意更新。",
      ]}
      en={[
        "Material changes will be notified by email / in-app message at least 14 days before effect. Continued use after the change constitutes acceptance.",
      ]}
    />
  </MPSection>
);

const Contact = () => {
  const { lang } = useLanguage();
  return (
    <MPSection title={{ en: "Contact", zh: "联系方式" }}>
      <p>
        {lang === "zh" ? "对本政策有疑问,请联系 " : "Questions about this policy: "}
        <a href="mailto:info@fangcunleap.com" className="text-purple-700 hover:text-purple-900 underline underline-offset-2 decoration-purple-300">
          info@fangcunleap.com
        </a>
        {lang === "zh" ? "(隐私相关请用 privacy@ 子地址,会自动转到同一收件箱)" : " (privacy-specific inquiries can use privacy@, routes to the same inbox)"}
      </p>
    </MPSection>
  );
};


// Helper: render two parallel zh/en bullet lists, only one shown based on lang
const Bilingual = ({ zh, en }: { zh: string[]; en: string[] }) => {
  const { lang } = useLanguage();
  const items = lang === "zh" ? zh : en;
  return (
    <ul className="list-disc pl-5 space-y-2 text-[14px] leading-relaxed text-gray-700">
      {items.map((s, i) => <li key={i}>{s}</li>)}
    </ul>
  );
};


export default Privacy;
