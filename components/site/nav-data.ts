export type NavChild = { label: string; desc?: string }
export type NavItem = { label: string; children?: NavChild[] }

export const navItems: NavItem[] = [
  {
    label: "产品与服务",
    children: [
      { label: "Agentic Infra 自主式基础设施平台", desc: "面向 AI 原生企业的大规模训练推理一体化平台" },
      { label: "多元异构基座", desc: "统一调度不同架构的算力芯片" },
      { label: "大模型训练", desc: "万卡级大模型训练服务" },
      { label: "大模型推理", desc: "高吞吐、低成本的推理服务" },
      { label: "企业级智能体", desc: "企业级智能体服务平台" },
      { label: "具身智能工具链", desc: "面向具身智能的开发工具链" },
      { label: "Agentic MaaS 大模型服务平台", desc: "面向企业与开发者的 Token 工厂" },
    ],
  },
  {
    label: "解决方案",
    children: [
      { label: "AI 原生企业解决方案" },
      { label: "智能制造行业解决方案" },
      { label: "AIGC 企业解决方案" },
      { label: "智能硬件解决方案" },
    ],
  },
  {
    label: "技术与研究",
    children: [{ label: "核心技术" }],
  },
  {
    label: "新闻中心",
    children: [{ label: "新闻动态" }, { label: "媒体报道" }, { label: "视频报道" }],
  },
  {
    label: "关于我们",
    children: [
      { label: "公司介绍" },
      { label: "团队介绍" },
      { label: "荣誉资质" },
      { label: "联系我们" },
    ],
  },
  { label: "加入我们" },
]
