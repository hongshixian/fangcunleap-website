"use client"

import MarketingPage, { MPSection } from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


const About = () => (
  <MarketingPage
    eyebrow={{ en: "About", zh: "关于我们" }}
    title={{ en: "Building trust between AI and humans", zh: "构建 AI 与人类之间的信任" }}
    subtitle={{
      en: "Fangcun Leap is a research-driven AI safety company. We build the guardrails that make the next generation of AI usable in production.",
      zh: "方寸跃迁是一家研究驱动的 AI 安全公司，我们构建让下一代 AI 真正能在生产环境跑起来的护栏。",
    }}
  >
    <MPSection title={{ en: "Our vision", zh: "公司愿景" }}>
      <Vision />
    </MPSection>
    <MPSection title={{ en: "Team", zh: "团队" }}>
      <Team />
    </MPSection>
    <MPSection title={{ en: "Contact", zh: "联系我们" }}>
      <Contact />
    </MPSection>
  </MarketingPage>
);


const Vision = () => {
  const { lang } = useLanguage();
  return (
    <p>
      {lang === "zh"
        ? "以 AI 治 AI，建立人与 AI 之间的信任中间层。"
        : "Govern AI with AI — build the trust layer between humans and AI."}
    </p>
  );
};

const Team = () => {
  const { lang } = useLanguage();
  return (
    <p>
      {lang === "zh"
        ? "依托清华大学交叉信息研究院在 AI 安全领域的技术积累，我们提供全面的 AI 安全解决方案与咨询服务。核心成员来自清华大学和加州大学伯克利分校，具备丰富的 AI 安全研发与工程化落地经验，曾就职于百度、中国电信等机构。"
        : "Backed by AI safety research from Tsinghua University's Institute for Interdisciplinary Information Sciences, we deliver end-to-end AI safety solutions and consulting. Core team members come from Tsinghua and UC Berkeley, with substantial AI-safety R&D and production-engineering experience, including prior positions at Baidu and China Telecom."}
    </p>
  );
};

const Contact = () => {
  const { lang } = useLanguage();
  return (
    <p>
      {lang === "zh" ? "可以联系我们：" : "Reach us at "}
      <a
        href="mailto:info@fangcunleap.com"
        className="text-purple-700 hover:text-purple-900 underline underline-offset-2 decoration-purple-300"
      >
        info@fangcunleap.com
      </a>
    </p>
  );
};


export default About;
