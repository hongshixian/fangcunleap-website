export type NavChild = { label: string; desc?: string; href: string }
export type NavItem = { label: string; href?: string; children?: NavChild[] }

type Language = "en" | "zh"

export const getNavItems = (lang: Language): NavItem[] => {
  if (lang === "zh") {
    return [
      {
        label: "解决方案",
        href: "/solutions",
      },
      {
        label: "产品与服务",
        children: [
          { label: "方寸 Guard", desc: "实时内容护栏，F1 91.1，p99 8ms", href: "/blog/fangcunguard" },
          { label: "方寸 Observer", desc: "零代码接入的运行时监控与审计", href: "/blog/observer" },
          { label: "SkillWard", desc: "开源 Skill 安全扫描，Apache 2.0", href: "/blog/skillward" },
          { label: "方寸 RedTeam", desc: "自动生成越狱样本，输出安全报告", href: "/solutions#redteam" },
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
    ]
  } else {
    return [
      {
        label: "Solutions",
        href: "/solutions",
      },
      {
        label: "Products & Services",
        children: [
          { label: "Fangcun Guard", desc: "Real-time content guardrail, F1 91.1, p99 8ms", href: "/blog/fangcunguard" },
          { label: "Fangcun Observer", desc: "Zero-code runtime monitoring & audit", href: "/blog/observer" },
          { label: "SkillWard", desc: "Open-source Skill security scan, Apache 2.0", href: "/blog/skillward" },
          { label: "Fangcun RedTeam", desc: "Auto-generate jailbreak samples & security reports", href: "/solutions#redteam" },
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
    ]
  }
}
