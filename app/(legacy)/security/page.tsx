"use client"

import MarketingPage, { MPSection } from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


const Security = () => (
  <MarketingPage
    eyebrow={{ en: "Trust", zh: "信任中心" }}
    title={{ en: "Security at Fangcun Leap", zh: "方寸跃迁的安全实践" }}
    subtitle={{
      en: "We're an AI safety company — security is the product. Last updated: 2026-04-15.",
      zh: "我们是一家做 AI 安全的公司,安全就是产品本身。最后更新:2026-04-15。",
    }}
  >
    <S1 />
    <S2 />
    <S3 />
    <Disclose />
  </MarketingPage>
);

const S1 = () => (
  <MPSection title={{ en: "Encryption & access", zh: "加密与访问" }}>
    <Bilingual
      zh={[
        "存储:敏感字段静态加密,密码与 API key 仅以哈希方式留存。",
        "访问:内部按最小必要原则授权,操作留审计日志。",
      ]}
      en={[
        "At rest: sensitive fields encrypted; passwords and API keys retained only as hashes.",
        "Access: least-privilege internally; operations are audit-logged.",
      ]}
    />
  </MPSection>
);

const S2 = () => (
  <MPSection title={{ en: "Data handling", zh: "数据处理" }}>
    <Bilingual
      zh={[
        "请求体内容(messages / content)只用于完成本次检测,不会被持久化保留。",
        "用于产品优化的指标仅来自聚合后的脱敏数据,不涉及单条请求内容。",
      ]}
      en={[
        "Request body content (messages / content) is used only to perform the scan, and is not persisted.",
        "Product analytics rely on aggregated, de-identified metrics — never per-request content.",
      ]}
    />
  </MPSection>
);

const S3 = () => (
  <MPSection title={{ en: "Monitoring & response", zh: "监控与响应" }}>
    <Bilingual
      zh={[
        "我们对服务异常 / 滥用行为持续监控,并保留事件审计记录。",
        "发生影响用户的安全事件时,我们承诺在 72 小时内通知受影响用户并通报处置进度。",
      ]}
      en={[
        "We continuously monitor for anomalies and abuse, and retain incident audit records.",
        "If a security incident affects users, we commit to notifying affected users within 72 hours with a status update.",
      ]}
    />
  </MPSection>
);

const Disclose = () => {
  const { lang } = useLanguage();
  return (
    <MPSection title={{ en: "Vulnerability disclosure", zh: "漏洞披露" }}>
      <p className="text-[14px] leading-relaxed text-gray-700">
        {lang === "zh"
          ? "如果你发现疑似安全漏洞,请联系 "
          : "If you suspect a security issue, email "}
        <a href="mailto:info@fangcunleap.com?subject=Security%20vulnerability%20disclosure" className="text-purple-700 hover:text-purple-900 underline underline-offset-2 decoration-purple-300">
          info@fangcunleap.com
        </a>
        {lang === "zh"
          ? ",邮件主题加 [Security]。我们承诺:5 个工作日内首次回应;不追究负责任披露的研究者法律责任。请在我们修复完成前不要公开披露。"
          : " with subject [Security]. We commit to a first response within 5 business days, and won't pursue legal action against good-faith researchers practicing responsible disclosure. Please refrain from public disclosure until we've shipped a fix."}
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


export default Security;
