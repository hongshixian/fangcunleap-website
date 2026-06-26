"use client"

import MarketingPage, { MPSection } from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


const Terms = () => (
  <MarketingPage
    eyebrow={{ en: "Legal", zh: "法律" }}
    title={{ en: "Terms of service", zh: "服务条款" }}
    subtitle={{
      en: "Please read these terms carefully. Last updated: 2026-04-15.",
      zh: "请仔细阅读以下条款。最后更新:2026-04-15。",
    }}
  >
    <Lede />
    <T1 />
    <T2 />
    <T3 />
    <T4 />
    <T5 />
    <T6 />
    <T7 />
    <ContactT />
  </MarketingPage>
);

const Lede = () => {
  const { lang } = useLanguage();
  return (
    <p className="mt-10 text-[14px] leading-relaxed text-gray-700 max-w-3xl">
      {lang === "zh"
        ? "以下条款规范你使用 Fangcun Leap(方寸跃迁,下称\"我们\")所提供服务的行为。注册、付费或调用 API 即视为接受本条款。"
        : "These terms govern your use of services provided by Fangcun Leap (\"we\"). Registering, paying, or calling our APIs constitutes acceptance of these terms."}
    </p>
  );
};

const T1 = () => (
  <MPSection title={{ en: "1. Service", zh: "1. 服务" }}>
    <Bilingual
      zh={[
        "我们提供 AI 安全相关的 SaaS 服务,按量计费;具体定价以官网公示为准。",
        "我们保留升级或调整服务的权利;重大变更将提前通知。",
      ]}
      en={[
        "We provide AI-safety SaaS, billed on usage; pricing is published on the website.",
        "We may upgrade or adjust services; material changes are announced in advance.",
      ]}
    />
  </MPSection>
);

const T2 = () => (
  <MPSection title={{ en: "2. Account", zh: "2. 账号" }}>
    <Bilingual
      zh={[
        "请使用真实有效的邮箱注册。账号下的所有操作由账号持有人负责。",
        "API key 视为账号持有人的身份凭证,请妥善保管。如有泄漏请立刻轮换并告知我们。",
      ]}
      en={[
        "Register with a valid email. The account holder is responsible for all activity under their account.",
        "API keys are bearer credentials — keep them secret. If leaked, rotate them and notify us immediately.",
      ]}
    />
  </MPSection>
);

const T3 = () => (
  <MPSection title={{ en: "3. Acceptable use", zh: "3. 可接受使用" }}>
    <Bilingual
      zh={[
        "不得用于违反中华人民共和国法律法规的用途。",
        "不得对我们的服务实施未授权扫描、压力测试或反向工程。",
        "不得绕过计费、限流、配额机制。",
        "我们有权暂停或终止违规账号。",
      ]}
      en={[
        "No use for any purpose that violates applicable law.",
        "No unauthorized scanning, load testing, or reverse engineering.",
        "No circumventing billing, rate-limiting, or quota mechanisms.",
        "We may suspend or terminate accounts that violate these terms.",
      ]}
    />
  </MPSection>
);

const T4 = () => (
  <MPSection title={{ en: "4. Billing", zh: "4. 计费" }}>
    <Bilingual
      zh={[
        "服务按使用量计费,详见官网定价。",
        "钱包余额为预充值,不退现;终止服务后未消费部分可申请等值代金券。",
        "对计费有异议请在产生争议费用 30 日内联系我们。",
      ]}
      en={[
        "Pay-as-you-go; see pricing page for current rates.",
        "Wallet balance is prepaid and non-refundable in cash; unused balance can be converted to credit on termination.",
        "Dispute charges within 30 days by emailing us.",
      ]}
    />
  </MPSection>
);

const T5 = () => (
  <MPSection title={{ en: "5. Intellectual property", zh: "5. 知识产权" }}>
    <Bilingual
      zh={[
        "我们的服务及其相关知识产权归 Fangcun Leap 所有。",
        "你保留对自有数据 / 内容的全部权利。",
      ]}
      en={[
        "Our services and related intellectual property belong to Fangcun Leap.",
        "You retain all rights to your own data and content.",
      ]}
    />
  </MPSection>
);

const T6 = () => (
  <MPSection title={{ en: "6. Disclaimers", zh: "6. 免责声明" }}>
    <Bilingual
      zh={[
        "服务按\"现状\"提供。我们尽合理商业努力维持服务质量,但不对调用结果做绝对保证。",
        "因不可抗力、第三方原因或用户违规使用导致的损失,我们不承担责任。",
        "在法律允许范围内,我们不对间接或附带损失承担责任,累计赔偿不超过你过去 12 个月内向我们实际支付的费用。",
      ]}
      en={[
        "Services are provided \"as is\". We use commercial best-efforts but make no absolute guarantees about call outcomes.",
        "We disclaim liability for losses caused by force majeure, third-party causes, or user misuse.",
        "To the extent permitted by law, we disclaim indirect or incidental damages; aggregate liability is capped at fees you paid us in the preceding 12 months.",
      ]}
    />
  </MPSection>
);

const T7 = () => (
  <MPSection title={{ en: "7. Governing law", zh: "7. 适用法律" }}>
    <Bilingual
      zh={[
        "本条款适用中华人民共和国法律。争议先友好协商;协商不成的,提交我们公司所在地有管辖权的人民法院诉讼解决。",
      ]}
      en={[
        "Governed by the laws of the People's Republic of China. Disputes are resolved by good-faith negotiation, failing which by competent courts where our company is registered.",
      ]}
    />
  </MPSection>
);

const ContactT = () => {
  const { lang } = useLanguage();
  return (
    <MPSection title={{ en: "Contact", zh: "联系方式" }}>
      <p>
        {lang === "zh" ? "对本条款有疑问,联系 " : "Questions: "}
        <a href="mailto:info@fangcunleap.com" className="text-purple-700 hover:text-purple-900 underline underline-offset-2 decoration-purple-300">
          info@fangcunleap.com
        </a>
      </p>
    </MPSection>
  );
};

const Bilingual = ({ zh, en }: { zh: string[]; en: string[] }) => {
  const { lang } = useLanguage();
  const items = lang === "zh" ? zh : en;
  return (
    <ul className="list-disc pl-5 space-y-2 text-[14px] leading-relaxed text-gray-700">
      {items.map((s, i) => <li key={i}>{s}</li>)}
    </ul>
  );
};


export default Terms;
