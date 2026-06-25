export type NavChild = { label: string; desc?: string }
export type NavItem = { label: string; children?: NavChild[] }

export const navItems: NavItem[] = [
  {
    label: "解决方案",
    children: [
      { label: "方寸 Guard", desc: "面向 AI Agent 的实时内容护栏" },
      { label: "方寸 Observer", desc: "Agent 运行时监控与审计" },
      { label: "SkillWard", desc: "三阶段 Skill 安全扫描" },
      { label: "方寸 RedTeam", desc: "自动红队测试" },
      { label: "AgentPlugin", desc: "给 OpenClaw 装上运行时护栏" },
    ],
  },
  {
    label: "产品",
    children: [
      { label: "方寸 Guard", desc: "实时内容护栏，F1 91.1，p99 8ms" },
      { label: "方寸 Observer", desc: "零代码接入的运行时监控与审计" },
      { label: "SkillWard", desc: "开源 Skill 安全扫描，Apache 2.0" },
      { label: "方寸 RedTeam", desc: "自动生成越狱样本，输出安全报告" },
    ],
  },
  { label: "关于我们" },
  { label: "博客" },
]
