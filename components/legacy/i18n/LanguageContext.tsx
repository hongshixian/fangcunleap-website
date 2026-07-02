"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "zh";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = "fangcun_lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "zh";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    // localStorage may throw in private mode; fall through to browser detection
  }
  const nav =
    window.navigator.language ||
    (window.navigator as Navigator & { userLanguage?: string }).userLanguage ||
    "";
  return nav.toLowerCase().startsWith("zh") ? "zh" : "en";
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.solutions": { en: "Solutions", zh: "解决方案" },
  "nav.products": { en: "Products", zh: "产品" },
  "nav.about": { en: "About", zh: "关于我们" },
  "nav.blog": { en: "Blog", zh: "博客" },
  "nav.research": { en: "Research", zh: "研究" },
  "nav.demo": { en: "Book a Demo", zh: "预约演示" },
  "nav.login": { en: "Log in", zh: "登录" },
  "nav.console": { en: "Console", zh: "进入控制台" },

  // Hero
  "hero.title1": { en: "Securing the future of", zh: "守护人工智能的" },
  "hero.title2": { en: "artificial intelligence", zh: "安全未来" },
  "hero.desc": {
    en: "We build defense systems that protect AI models, LLMs, and autonomous agents from adversarial threats — so you can innovate fearlessly.",
    zh: "我们构建防御系统，保护 AI 模型、大语言模型和自主智能体免受对抗性威胁——让您无畏创新。",
  },
  "hero.cta1": { en: "Get Protected", zh: "立即防护" },
  "hero.cta2": { en: "Our Solutions", zh: "我们的方案" },

  // Partner intro
  "partners.intro": {
    en: "Trusted by leading institutions. Our team comes from world-class universities and top-tier tech companies.",
    zh: "受顶尖机构信赖，团队成员来自世界一流高校与领先科技企业。",
  },

  // Stats
  "stats.detection": { en: "Threat Detection", zh: "危险检测率" },
  "stats.response": { en: "Response Time", zh: "响应时间" },
  "stats.monitoring": { en: "Active Monitoring", zh: "全天候监控" },
  "stats.team": { en: "Team with Master's/PhD", zh: "团队硕博率" },

  // Problem section
  "problem.label": { en: "The Problem", zh: "核心挑战" },
  "problem.title1": { en: "AI systems are powerful.", zh: "AI 系统无比强大。" },
  "problem.title2": { en: "But ", zh: "但" },
  "problem.title2_accent": { en: "unchecked", zh: "失控" },
  "problem.title3": { en: ", they're", zh: "之后，它们是" },
  "problem.title4": { en: "a liability.", zh: "巨大隐患。" },
  "problem.cta": { en: "Get Protected", zh: "立即防护" },

  "problem.card1.title": { en: "Data Leakage", zh: "数据泄露" },
  "problem.card1.text": {
    en: "LLMs hallucinate, leak data, and follow adversarial instructions — silently.",
    zh: "大语言模型会产生幻觉、泄露数据，并默默执行对抗性指令。",
  },
  "problem.card2.title": { en: "Agent Overreach", zh: "智能体越权" },
  "problem.card2.text": {
    en: "Autonomous agents act beyond their permissions without audit trails or kill switches.",
    zh: "自主智能体超越权限行动，缺乏审计追踪和紧急终止机制。",
  },
  "problem.card3.title": { en: "Supply Chain Risk", zh: "供应链风险" },
  "problem.card3.text": {
    en: "AI supply chains introduce hidden dependencies — poisoned models, compromised plugins, and unvetted third-party tools.",
    zh: "AI 供应链引入隐藏依赖——被污染的模型、受损的插件和未审查的第三方工具。",
  },

  // Shield section
  "shield.label": { en: "Our Framework", zh: "安全框架" },
  "shield.title1": { en: "Building ", zh: "构建 AI 与人类之间的" },
  "shield.title_accent": { en: "trust", zh: "信任" },
  "shield.title2": { en: " between AI & humans", zh: "" },
  "shield.desc": {
    en: "A layered security architecture that protects every dimension of AI interaction.",
    zh: "多层安全架构，全方位保护 AI 交互的每一个维度。",
  },

  // Shield products
  "shield.layer0": { en: "Human–AI Safety", zh: "人机交互安全" },
  "shield.layer1": { en: "Agent Safety", zh: "智能体安全" },
  "shield.layer2": { en: "Model Safety", zh: "模型安全" },
  "shield.guard.title": { en: "Fangcun Guard", zh: "方寸 Guard" },
  "shield.guard.desc": { en: "Real-time content guardrail for AI agents — F1 91.1, p99 8 ms, 10-class risk taxonomy.", zh: "面向 AI Agent 的实时内容护栏 —— F1 91.1, p99 8 ms, 10 类风险细分。" },
  "shield.observer.title": { en: "Fangcun Observer", zh: "方寸 Observer" },
  "shield.observer.desc": { en: "Runtime monitoring + audit trail: tool calls, network egress, sensitive file access, full session replay.", zh: "Agent 运行时监控与审计：工具调用、出网请求、敏感文件读写全留痕，会话可回放。" },
  "shield.redteam.title": { en: "Fangcun RedTeam", zh: "方寸 RedTeam" },
  "shield.redteam.desc": { en: "Automated adversarial testing — generates jailbreak corpora targeted at your guardrail config.", zh: "自动化红队测试 —— 按你的护栏配置生成定向越狱样本。" },
  "shield.skillward.title": { en: "SkillWard", zh: "SkillWard" },
  "shield.skillward.desc": { en: "Three-stage skill safety scanner: static analysis + LLM evaluation + Docker sandbox verification.", zh: "三阶段 Skill 安全扫描：静态分析 + LLM 研判 + Docker 沙箱验证。" },
  "shield.learn_more": { en: "Learn more", zh: "了解更多" },

  // Product section
  "product.title1": { en: "AI-native protection that fits ", zh: "AI 原生防护，融入" },
  "product.title_accent": { en: "the workflow", zh: "工作流" },
  "product.desc": {
    en: "Contextual understanding, customized defense, and engagement-first placement so every layer feels part of the system.",
    zh: "上下文理解、定制化防御、交互优先的部署，让每一层防护都浑然一体。",
  },
  "product.label": { en: "Product Suite", zh: "产品套件" },
  "product.subtitle1": { en: "Reinventing Security", zh: "重新定义安全" },
  "product.subtitle2": { en: "for the AI Era", zh: "迎接 AI 时代" },
  "product.text": {
    en: "Fangcun Leap delivers AI-native protection inside your existing stack — from model training to production inference. We match threats to real-time context so defenses feel seamless, not intrusive.",
    zh: "方寸跃迁在您现有技术栈中提供 AI 原生防护——从模型训练到生产推理。我们将威胁与实时上下文匹配，让防御无缝衔接而非突兀干扰。",
  },
  "product.cta1": { en: "Start Now", zh: "立即开始" },
  "product.cta2": { en: "Read the guide", zh: "阅读指南" },

  // Blog
  "blog.label": { en: "Blog", zh: "博客" },
  "blog.title1": { en: "Latest ", zh: "最新" },
  "blog.title_accent": { en: "insights", zh: "洞察" },
  "blog.viewall": { en: "View all", zh: "查看全部" },
  "blog.read": { en: "Read", zh: "阅读" },
  "blog.post1.tag": { en: "Engineering", zh: "工程" },
  "blog.post1.title": {
    en: "Fangcun Guard: a lightweight guardrail built for agents",
    zh: "方寸 Guard：为 Agent 而生的轻量安全护栏",
  },
  "blog.post2.tag": { en: "Engineering", zh: "工程" },
  "blog.post2.title": {
    en: "How We Built a Sub-50ms Threat Detection Pipeline",
    zh: "我们如何构建亚 50 毫秒威胁检测管道",
  },
  "blog.post3.tag": { en: "Industry", zh: "行业" },
  "blog.post3.title": {
    en: "New EU AI Act Compliance: What Security Teams Need to Know",
    zh: "欧盟 AI 法案合规：安全团队须知",
  },

  // CTA
  "cta.title1": { en: "Experience Enterprise AI", zh: "体验企业级 AI" },
  "cta.title2": { en: "Observability", zh: "可观测性" },
  "cta.demo": { en: "Request demo", zh: "申请演示" },
  "cta.free": { en: "Run free guardrails", zh: "免费试用护栏" },

  // Footer
  "footer.desc": {
    en: "Defending AI systems against adversarial threats. Built by researchers, trusted by enterprises.",
    zh: "防御 AI 系统对抗性威胁。由研究者构建，受企业信赖。",
  },
  "footer.product": { en: "Product", zh: "产品" },
  "footer.company": { en: "Company", zh: "公司" },
  "footer.legal": { en: "Legal", zh: "法律" },
  "footer.solutions": { en: "Solutions", zh: "解决方案" },
  "footer.pricing": { en: "Pricing", zh: "定价" },
  "footer.documentation": { en: "Quick start", zh: "快速开始" },
  "footer.changelog": { en: "Changelog", zh: "更新日志" },
  "footer.about": { en: "About", zh: "关于" },
  "footer.careers": { en: "Careers", zh: "招聘" },
  "footer.blog": { en: "Blog", zh: "博客" },
  "footer.press": { en: "Press", zh: "新闻" },
  "footer.privacy": { en: "Privacy", zh: "隐私政策" },
  "footer.terms": { en: "Terms", zh: "服务条款" },
  "footer.security": { en: "Security", zh: "安全" },
  "footer.compliance": { en: "Compliance", zh: "合规" },
  "footer.rights": { en: "© 2026 Fangcun Leap. All rights reserved.", zh: "© 2026 方寸跃迁 版权所有" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(detectInitialLang);
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore localStorage write errors
    }
  }, [lang]);
  const t = (key: string) => translations[key]?.[lang] ?? key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
