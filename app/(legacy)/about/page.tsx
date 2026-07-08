"use client"

import MarketingPage, { MPSection } from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


type Bilingual = { zh: string; en: string };

const WHY_US: { title: Bilingual; desc: Bilingual }[] = [
  {
    title: { zh: "顶尖的技术背景和科研支撑", en: "Top-tier technical background & research" },
    desc: {
      zh: "公司依托清华大学交叉信息研究院团队在 AI 安全领域多年的深厚积累，技术成果源自顶级学术研究，确保您获得的安全方案具备理论先进性和实践可靠性。",
      en: "Backed by years of deep AI-safety work at Tsinghua University's Institute for Interdisciplinary Information Sciences, our technology stems from top-tier academic research — so the security solutions you get are both theoretically advanced and reliable in practice.",
    },
  },
  {
    title: { zh: "卓越的核心团队", en: "An exceptional core team" },
    desc: {
      zh: "团队核心成员毕业于清华大学和加州大学伯克利分校、伦敦大学学院、悉尼大学、莱斯大学等高校，并曾在百度、中国电信等头部企业担任职务，拥有丰富的 AI 安全研发和工程化落地经验，能为您的业务提供专家级护航。",
      en: "Core team members graduated from Tsinghua University, UC Berkeley, UCL, the University of Sydney, Rice University and other leading schools, and have held roles at major companies including Baidu and China Telecom — bringing deep AI-safety R&D and production-engineering experience to guide your business at an expert level.",
    },
  },
  {
    title: { zh: "专注且前沿的业务方向", en: "A focused, cutting-edge mission" },
    desc: {
      zh: "我们专注于大模型全生命周期的安全防护，覆盖 Prompt 注入、越狱攻击、对抗样本、模型投毒等新型威胁，并为企业量身打造 AI 安全评估基准（Benchmark）和红队测试服务，帮您提前发现隐藏风险。",
      en: "We focus on security across the full lifecycle of large models — covering emerging threats such as prompt injection, jailbreak attacks, adversarial examples and model poisoning — and build tailored AI security benchmarks and red-team testing services to surface hidden risks early.",
    },
  },
  {
    title: { zh: "快速的商业化落地能力", en: "Fast commercialization" },
    desc: {
      zh: "我们与多家国内头部数字化解决方案提供商建立了战略合作，我们的产品已经过市场验证，能够快速融入您的现有系统，减少磨合成本。",
      en: "We've formed strategic partnerships with several of China's leading digital-solution providers. Our products are market-proven and integrate quickly into your existing systems, reducing onboarding cost.",
    },
  },
  {
    title: { zh: "持续进化的安全韧性，为您的业务保驾护航", en: "Continuously evolving security resilience" },
    desc: {
      zh: "我们不仅提供当前的安全防护，更持续投入前沿攻防研究，构建了动态更新的威胁情报库和自动化红队演练体系。选择方寸跃迁，意味着您的 AI 系统将始终获得针对新型攻击（如对抗性样本、数据投毒等）的主动防御能力。无论攻击手段如何演变，我们都能提前布局，确保您的业务在快速变化的 AI 环境中长期稳定、合规、无后顾之忧——这是我们对客户最核心的承诺。",
      en: "We don't just provide today's protection — we invest continuously in frontier attack-and-defense research, with a dynamically updated threat-intelligence library and an automated red-team drill system. Choosing Fangcun Leap means your AI systems always have proactive defense against new attacks such as adversarial examples and data poisoning. However attack techniques evolve, we stay ahead — keeping your business stable, compliant, and worry-free in a fast-changing AI landscape. That is our core promise to customers.",
    },
  },
];

const WhyUs = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <div>
      <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-purple-700 mb-6">
        {isZh ? "选择方寸跃迁的五大理由" : "Five reasons to choose Fangcun Leap"}
      </p>
      <div className="space-y-4">
        {WHY_US.map((r, i) => (
          <div
            key={i}
            className="flex gap-4 rounded-2xl ring-1 ring-purple-200/60 bg-white/80 px-6 py-5 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.12)] transition-shadow hover:shadow-[0_8px_32px_-12px_rgba(120,80,200,0.22)]"
          >
            <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-[15px]">
              {i + 1}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-[16px] mb-1.5">{r.title[lang]}</h4>
              <p className="text-[14px] leading-relaxed text-gray-700">{r.desc[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const About = () => (
  <MarketingPage
    eyebrow={{ en: "About", zh: "关于我们" }}
    title={{ en: "Building trust between AI and humans", zh: "构建 AI 与人类之间的信任" }}
    subtitle={{
      en: "Fangcun Leap is a research-driven AI safety company. We build the guardrails that make the next generation of AI usable in production.",
      zh: "方寸跃迁是一家研究驱动的 AI 安全公司，我们构建让下一代 AI 真正能在生产环境跑起来的护栏。",
    }}
  >
    <MPSection title={{ en: "Why Fangcun Leap", zh: "为什么选择方寸跃迁" }}>
      <WhyUs />
    </MPSection>
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
