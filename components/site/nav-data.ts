export type NavChild = { label: string; desc?: string; href: string }
export type NavItem = { label: string; href?: string; children?: NavChild[] }

export const navItems: NavItem[] = [
  {
    label: "解决方案",
    href: "/solutions",
    children: [
      { label: "方寸 Guard", desc: "面向 AI Agent 的实时内容护栏", href: "/blog/fangcunguard" },
      { label: "方寸 Observer", desc: "Agent 运行时监控与审计", href: "/blog/observer" },
      { label: "SkillWard", desc: "三阶段 Skill 安全扫描", href: "/blog/skillward" },
      { label: "方寸 RedTeam", desc: "自动红队测试", href: "/solutions#redteam" },
      { label: "AgentPlugin", desc: "给 OpenClaw 装上运行时护栏", href: "/blog/plugin" },
    ],
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
  { label: "定价", href: "/pricing" },
]
