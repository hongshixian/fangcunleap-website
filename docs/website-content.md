# 网站文案与页面结构

## 导航菜单

- Solutions（解决方案）
- Products/Research（产品）
- About（关于我们）
- Blog（博客）
- Book a Demo（预约演示）
- Log in / Console（登录）

## Hero 区文案

| 位置 | 英文 | 中文 |
|------|------|------|
| 主标题 | Securing the future of artificial intelligence | 守护人工智能的安全未来 |
| 副标题 | We build defense systems that protect AI models, LLMs, and autonomous agents from adversarial threats — so you can innovate fearlessly. | 我们构建防御系统，保护 AI 模型、大语言模型和自主智能体免受对抗性威胁——让您无畏创新。 |
| CTA1 | Get Protected | 立即防护 |
| CTA2 | Our Solutions | 我们的方案 |

## 核心问题部分（Problem Section）

**标题**：AI systems are powerful. But unchecked, they're a liability. / AI 系统无比强大。但失控之后，它们是巨大隐患。

**三大风险卡片**：

1. **Data Leakage / 数据泄露**
   - LLMs hallucinate, leak data, and follow adversarial instructions — silently.
   - 大语言模型会产生幻觉、泄露数据，并默默执行对抗性指令。

2. **Agent Overreach / 智能体越权**
   - Autonomous agents act beyond their permissions without audit trails or kill switches.
   - 自主智能体超越权限行动，缺乏审计追踪和紧急终止机制。

3. **Supply Chain Risk / 供应链风险**
   - AI supply chains introduce hidden dependencies — poisoned models, compromised plugins, and unvetted third-party tools.
   - AI 供应链引入隐藏依赖——被污染的模型、受损的插件和未审查的第三方工具。

## 框架部分（Shield/Framework）

- **标题**：Building trust between AI & humans / 构建 AI 与人类之间的信任
- **描述**：A layered security architecture that protects every dimension of AI interaction. / 多层安全架构，全方位保护 AI 交互的每一个维度。

## CTA 区文案

- **标题**：Experience Enterprise AI Observability / 体验企业级 AI 可观测性
- **按钮1**：Request demo / 申请演示
- **按钮2**：Run free guardrails / 免费试用护栏

## 主要页面路由

| 路由 | 内容 |
|------|------|
| `/` | 主页（Hero + 问题陈述 + 产品展示） |
| `/solutions` | 解决方案（产品网格） |
| `/about` | 关于我们 |
| `/pricing` | 定价表 |
| `/quick-start` | 快速开始文档 |
| `/blog` | 博客列表 |
| `/blog/fangcunguard` | Guard 产品详解 |
| `/blog/observer` | Observer 产品详解 |
| `/blog/skillward` | SkillWard 产品详解 |
| `/blog/plugin` | AgentPlugin 产品详解 |
| `/careers` | 招聘页面 |
| `/security` | 安全实践 |
| `/compliance` | 合规信息 |
| `/privacy` | 隐私政策 |
| `/terms` | 服务条款 |
| `/changelog` | 更新日志 |

## 新闻与媒体动态

### 官方新闻

1. **智能助理智能体（Claw）可信能力技术规范发布**
   - 来源：人工智能产业发展联盟 AIIA
   - 日期：2026-04-13

2. **OpenClaw 类智能体部署使用安全指引征求意见**
   - 来源：全国网安标委
   - 日期：2026-03-31

### 媒体报道

1. **"细思极恐！Agent 暗藏风险，清华团队打出组合拳，全链路一网打尽"**
   - 媒体：新智元（Xinzhiyuan）
   - 日期：2026-05-07

## 已发布博客文章

| 标题 | 日期 | 标签 |
|------|------|------|
| Fangcun Observer: runtime safety for AI agents | 2026-05-06 | Engineering |
| Fangcun AgentPlugin: a runtime guardrail for OpenClaw | 2026-05-01 | Engineering |
| Fangcun Guard: guarding the safety floor of every agent | 2026-04-24 | Engineering |
| SkillWard: trading uncertain warnings for runtime evidence | 2026-04-10 | Research |

## 合规与安全

### 当前遵循
- 《个人信息保护法》、《数据安全法》、《网络安全法》
- OWASP LLM 安全最佳实践（Top 10）
- ICP 备案 / 公网安备

### 正在对齐
- ISO/IEC 27001 信息安全管理体系
- SOC 2 Type II（海外客户）
- 等保三级（企业版/私有部署客户）

### 安全实践
- **存储**：敏感字段静态加密，密码与 API key 仅以哈希方式留存
- **访问**：最小必要原则授权，操作留审计日志
- **数据处理**：请求体内容仅用于完成本次检测，不会被持久化保留
- **监控与响应**：持续监控服务异常/滥用行为，安全事件 72 小时内通知
