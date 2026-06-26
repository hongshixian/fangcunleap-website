"use client"

import MarketingPage, { MPSection } from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


const Compliance = () => (
  <MarketingPage
    eyebrow={{ en: "Trust", zh: "信任中心" }}
    title={{ en: "Compliance", zh: "合规" }}
    subtitle={{
      en: "What we follow today and what we're working toward. Last updated: 2026-04-15.",
      zh: "我们当前遵循的合规框架,以及正在对齐的方向。最后更新:2026-04-15。",
    }}
  >
    <Lede />
    <Following />
    <WorkingOn />
    <NotClaiming />
    <Disclaim />
  </MarketingPage>
);

const Lede = () => {
  const { lang } = useLanguage();
  return (
    <p className="mt-10 text-[14px] leading-relaxed text-gray-700 max-w-3xl">
      {lang === "zh"
        ? "我们处于公开发布的早期阶段。本页如实标注我们目前已遵循的、正在对齐的、还未声明的合规事项。"
        : "We're in the early stage of public release. This page is honest about what we already follow, what we're working toward, and what we don't yet claim."}
    </p>
  );
};

const Following = () => (
  <MPSection title={{ en: "What we follow today", zh: "当前已遵循" }}>
    <Bilingual
      zh={[
        "中华人民共和国相关法律法规,包括《个人信息保护法》、《数据安全法》与《网络安全法》。",
        "OWASP LLM 安全最佳实践(Top 10),我们的检测产品对照这套清单组织能力覆盖。",
        "ICP 备案 / 公网安备:相关备案号公示在网站底部。",
      ]}
      en={[
        "Applicable laws of the People's Republic of China, including PIPL, the Data Security Law, and the Cybersecurity Law.",
        "OWASP LLM security best practices (Top 10) — our detection products align coverage to this checklist.",
        "ICP / public-network-security filings: numbers are published in the site footer.",
      ]}
    />
  </MPSection>
);

const WorkingOn = () => (
  <MPSection title={{ en: "What we're working toward", zh: "正在对齐" }}>
    <Bilingual
      zh={[
        "ISO/IEC 27001 信息安全管理体系。",
        "SOC 2 Type II(针对面向海外客户的服务范围)。",
        "等保三级(针对企业版 / 私有部署客户)。",
      ]}
      en={[
        "ISO/IEC 27001 ISMS.",
        "SOC 2 Type II (scoped to services aimed at overseas customers).",
        "MLPS Level 3 (Multi-Level Protection Scheme, scoped to Enterprise / private deployments).",
      ]}
    />
  </MPSection>
);

const NotClaiming = () => (
  <MPSection title={{ en: "What we don't claim", zh: "我们不声明的事" }}>
    <Bilingual
      zh={[
        "我们目前不持有 GDPR / EU AI Act 合规声明,服务面向中国境内客户。",
        "我们目前不做 HIPAA 合规声明;如有 PHI(受保护健康信息)相关需求,请通过私有部署 + 单独签合规附录的方式联系我们。",
        "我们目前不持有任何已颁发的安全审计报告,相关证书在路上。",
      ]}
      en={[
        "We don't claim GDPR / EU AI Act conformity today; our services target customers in China.",
        "We don't claim HIPAA today; for PHI use cases, talk to us about private deployment with a separate compliance addendum.",
        "We don't currently hold any completed third-party security audit certifications; they're on the way.",
      ]}
    />
  </MPSection>
);

const Disclaim = () => {
  const { lang } = useLanguage();
  return (
    <MPSection title={{ en: "Compliance questionnaires", zh: "合规问卷" }}>
      <p className="text-[14px] leading-relaxed text-gray-700">
        {lang === "zh"
          ? "采购方需要我们填 vendor 安全 / 合规问卷(CAIQ、SIG、自定义模板等),请联系 "
          : "If your procurement team needs us to fill out a vendor security / compliance questionnaire (CAIQ, SIG, custom template), email "}
        <a href="mailto:info@fangcunleap.com?subject=Vendor%20security%20questionnaire" className="text-purple-700 hover:text-purple-900 underline underline-offset-2 decoration-purple-300">
          info@fangcunleap.com
        </a>
        {lang === "zh"
          ? ",标注 [Vendor Questionnaire],5 个工作日内回。"
          : " with subject [Vendor Questionnaire]. We respond within 5 business days."}
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


export default Compliance;
