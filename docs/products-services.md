# 方寸跃迁产品与服务

## 四大核心产品

### 1. 方寸 Guard（Fangcun Guard）

**定位**：面向 AI Agent 的实时内容护栏

**核心指标**：
- F1 91.1（6 项 benchmark 综合）
- p99 8ms
- 10 类风险细分
- 中文专项优化

**功能**：实时内容检测，按租户独立配阈值

**状态**：已上线（Shipping）

---

### 2. 方寸 Observer（Fangcun Observer）

**定位**：Agent 运行时监控与审计

**核心能力**：
- 工具调用监控
- 出网请求追踪
- 敏感文件访问记录
- 任意会话回放

**特点**：
- 零代码改造接入
- 本地拦截 + 后端复核协同
- 实时策略响应
- 本地优先证据留存

**状态**：Beta

---

### 3. SkillWard

**定位**：Skill 安全扫描（三阶段）

**扫描流程**：
1. 静态分析（Static Analysis）
2. LLM 研判（LLM Evaluation）
3. Docker 沙箱验证（Docker Sandbox）

**评测数据**：
- 5,000 个真实 Skills 评测
- 约 25% 被判不安全
- 沙箱部署成功率 99%

**开源信息**：
- 许可证：Apache 2.0
- GitHub：https://github.com/Fangcun-AI/SkillWard
- 在线体验：https://skillward.fangcunleap.com
- 发布日期：2026年4月10日

**状态**：已上线（Shipping）

---

### 4. 方寸 RedTeam（Fangcun RedTeam）

**定位**：自动红队测试

**功能**：
- 根据护栏策略生成定向越狱样本
- 输出可验证的安全报告

**状态**：研究预览（Preview）

---

### 5. Fangcun AgentPlugin（SDK 工具）

**定位**：给 OpenClaw 装上运行时护栏

**四大能力面**：Prompt / Tool / Output / Skill

**双模式**：
- adaptive（自适应）
- full_defense（全防守）

**GitHub**：https://github.com/Fangcun-AI/FangcunAgent-Plugin

**发布日期**：2026年5月1日

**状态**：已发布（Released）

---

## 定价模式

### 免费体验
- 价格：¥0
- 额度：100 calls/month

### 标准版
- 价格：¥0.4 per 1M scanned tokens
- 月用量超 100M 后降到 ¥0.3 / 1M
- 无月最低消费
- 持续 50 QPS
- 99.9% SLA
- 邮件支持，≤24 小时响应

### 企业版
- 定制价格
- 私有化部署
- 年度合约
- 专属 Slack 频道 + solutions 工程师
- 99.99% SLA
- 合规审计协助
