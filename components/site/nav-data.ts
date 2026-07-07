export type NavChild = { label: string; desc?: string; href: string }
export type NavItem = { label: string; href?: string; children?: NavChild[] }

type Language = "en" | "zh"

export const getNavItems = (lang: Language): NavItem[] => {
  if (lang === "zh") {
    return [
      {
        label: "产品与服务",
        children: [
          { label: "Agent Runtime 安全", desc: "Agent 运行时身份、观测、护栏与中控全链路防护", href: "/#runtime-security" },
          { label: "大模型安全评测", desc: "自动化红队与大模型安全评测", href: "/#model-evaluation" },
        ],
      },
      {
        label: "关于我们",
        href: "/about",
        children: [
          { label: "公司介绍", desc: "了解方寸跃迁的使命与团队", href: "/about" },
          { label: "新闻动态", desc: "最新的公司新闻和媒体报道", href: "/news" },
          { label: "招聘", desc: "加入我们，共建 AI 安全", href: "/careers" },
        ],
      },
      { label: "博客", href: "/blog" },
      { label: "研究", href: "/research" },
    ]
  } else {
    return [
      {
        label: "Products & Services",
        children: [
          { label: "Agent Runtime Security", desc: "Full-chain runtime security for AI agents", href: "/#runtime-security" },
          { label: "LLM Security Evaluation", desc: "Automated red-teaming & LLM security evaluation", href: "/#model-evaluation" },
        ],
      },
      {
        label: "About Us",
        href: "/about",
        children: [
          { label: "Company", desc: "Learn about Fangcun Leap's mission & team", href: "/about" },
          { label: "News", desc: "Latest company news and media coverage", href: "/news" },
          { label: "Careers", desc: "Join us to build AI security", href: "/careers" },
        ],
      },
      { label: "Blog", href: "/blog" },
      { label: "Research", href: "/research" },
    ]
  }
}
