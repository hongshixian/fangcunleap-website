import { Metadata } from 'next';
import { ArticleLayout } from '@/components/blog/article-layout';
import { H2, H3 } from '@/components/blog/heading';
import { ImgFigure } from '@/components/blog/img-figure';
import { CodeBlock } from '@/components/blog/code-block';

export const metadata: Metadata = {
  title: 'Observer：AI 智能体的运行时安全守护者 - 方寸跃迁',
  description: '在 AI 智能体运行时实现零代码改动的安全防护，通过四个证据维度实时介入，确保本地优先的证据链追踪。',
};

export default function ObserverArticle() {
  const stats = [
    { value: '0', label: '代码改动' },
    { value: '4', label: '证据维度' },
    { value: '实时', label: '介入时机' },
    { value: '本地优先', label: '证据存储' },
  ];

  return (
    <ArticleLayout
      title="Observer：AI 智能体的运行时安全守护者"
      date="2026年5月6日"
      stats={stats}
    >
      <p className="lead text-xl text-[#8A8A80]">
        AI 智能体在生产环境中运行时，如何在不修改一行代码的情况下，实时监控其行为、拦截危险操作、收集完整证据链？Observer 提供了一套零侵入的运行时安全解决方案。
      </p>

      <H2>为什么需要运行时监控？</H2>
      <p>
        传统的 AI 安全防护往往聚焦在输入侧（Prompt 注入检测）或输出侧（内容审核），但智能体的真正风险发生在运行时：
      </p>
      <ul>
        <li><strong>工具调用</strong>：智能体可能调用敏感 API、删除文件、修改数据库</li>
        <li><strong>多步推理</strong>：多个看似无害的操作串联后产生意外后果</li>
        <li><strong>副作用传播</strong>：一个工具的输出影响后续决策链</li>
        <li><strong>证据缺失</strong>：事后难以追溯智能体的完整决策路径</li>
      </ul>

      <ImgFigure
        src="/images/blog-observer-side-effect.png"
        alt="智能体副作用传播示意图"
        caption="智能体工具调用的副作用会在多步推理中累积和传播"
      />

      <H2>Observer 的四个证据维度</H2>
      <p>
        Observer 通过四个维度构建完整的运行时证据链：
      </p>

      <H3>1. 工具调用（Tool Invocation）</H3>
      <p>
        捕获智能体调用的每个工具及其参数，包括：
      </p>
      <ul>
        <li>工具名称和版本</li>
        <li>输入参数的完整快照</li>
        <li>调用时的上下文信息</li>
        <li>返回值和错误信息</li>
      </ul>

      <H3>2. 外部效应（Side Effects）</H3>
      <p>
        跟踪工具执行产生的实际副作用：
      </p>
      <ul>
        <li>文件系统变更（创建、修改、删除）</li>
        <li>网络请求（HTTP 调用、API 访问）</li>
        <li>数据库操作（读写、事务）</li>
        <li>系统资源使用（进程、内存）</li>
      </ul>

      <H3>3. 推理轨迹（Reasoning Trace）</H3>
      <p>
        记录智能体的完整思考过程：
      </p>
      <ul>
        <li>多轮对话历史</li>
        <li>中间推理步骤</li>
        <li>决策分支和回溯</li>
        <li>模型生成的 Token 流</li>
      </ul>

      <H3>4. 安全决策（Security Decisions）</H3>
      <p>
        记录 Observer 自身的介入行为：
      </p>
      <ul>
        <li>触发的安全规则</li>
        <li>拦截决策和理由</li>
        <li>风险评分和置信度</li>
        <li>人工复核的结果</li>
      </ul>

      <H2>零代码改动的实现原理</H2>
      <p>
        Observer 通过三层拦截机制实现零侵入监控：
      </p>

      <H3>1. SDK 层拦截</H3>
      <p>
        在智能体框架的 SDK 层注入观察者，拦截工具注册和调用：
      </p>
      <CodeBlock language="python">
{`# 原始代码无需修改
from langchain.agents import initialize_agent
from langchain.tools import Tool

agent = initialize_agent(
    tools=[search_tool, calculator_tool],
    llm=llm,
    agent="zero-shot-react-description"
)

# Observer 自动注入，无需修改上述代码
# 内部通过 Monkey Patch 拦截 Tool 类`}
      </CodeBlock>

      <H3>2. 系统调用拦截</H3>
      <p>
        通过 eBPF 或系统代理捕获底层系统调用：
      </p>
      <ul>
        <li>文件操作：<code>open()</code>、<code>write()</code>、<code>unlink()</code></li>
        <li>网络请求：<code>socket()</code>、<code>connect()</code>、<code>send()</code></li>
        <li>进程管理：<code>fork()</code>、<code>exec()</code>、<code>kill()</code></li>
      </ul>

      <H3>3. 网络层代理</H3>
      <p>
        部署透明代理捕获所有外部 API 调用：
      </p>
      <CodeBlock language="yaml">
{`# Observer 配置
proxy:
  mode: transparent
  capture:
    - method: ALL
      domains: ["*"]
  intercept:
    - pattern: "*.internal.company.com"
      action: require_approval`}
      </CodeBlock>

      <H2>实时介入与人工复核</H2>
      <p>
        Observer 不仅被动记录，还能主动介入：
      </p>

      <H3>自动拦截规则</H3>
      <ul>
        <li><strong>黑名单</strong>：禁止调用特定工具或 API</li>
        <li><strong>参数校验</strong>：检查工具参数是否符合安全策略</li>
        <li><strong>频率限制</strong>：限制同一工具的调用频率</li>
        <li><strong>资源配额</strong>：限制文件、网络、计算资源使用</li>
      </ul>

      <H3>人工复核流程</H3>
      <p>
        对于高风险操作，Observer 会暂停执行，等待人工决策：
      </p>
      <CodeBlock language="typescript">
{`// 智能体尝试删除生产数据库表
await db.execute("DROP TABLE users");

// Observer 拦截并触发人工复核
{
  "action": "PENDING_APPROVAL",
  "risk_score": 0.95,
  "reason": "尝试删除生产环境核心表",
  "approval_url": "https://observer.fangcunleap.com/review/abc123",
  "timeout": 300  // 5分钟内需人工决策
}`}
      </CodeBlock>

      <ImgFigure
        src="/images/blog-observer-multi-agent.png"
        alt="Observer 多智能体监控架构"
        caption="Observer 可同时监控多个智能体实例，统一管理证据和决策"
      />

      <H2>本地优先的证据存储</H2>
      <p>
        Observer 采用"本地优先，云端备份"的存储策略：
      </p>

      <H3>本地 SQLite 数据库</H3>
      <ul>
        <li>所有证据首先存储在本地 SQLite</li>
        <li>支持离线运行和快速查询</li>
        <li>数据完全在用户控制之下</li>
      </ul>

      <H3>可选云端同步</H3>
      <ul>
        <li>加密传输到 Observer Cloud</li>
        <li>支持团队协作和审计</li>
        <li>长期存档和合规要求</li>
      </ul>

      <H3>数据导出</H3>
      <p>
        支持多种格式导出完整证据链：
      </p>
      <CodeBlock language="bash">
{`# 导出为 JSON
observer export --session abc123 --format json > evidence.json

# 导出为审计报告
observer export --session abc123 --format pdf > audit.pdf

# 导出为可回放的轨迹文件
observer export --session abc123 --format replay > trace.replay`}
      </CodeBlock>

      <H2>与现有框架集成</H2>
      <p>
        Observer 支持主流智能体框架的一键集成：
      </p>

      <H3>LangChain</H3>
      <CodeBlock language="python">
{`from observer import ObserverCallback

agent = initialize_agent(
    tools=tools,
    llm=llm,
    callbacks=[ObserverCallback(
        session_id="prod-agent-001",
        policy="strict"
    )]
)`}
      </CodeBlock>

      <H3>AutoGPT</H3>
      <CodeBlock language="python">
{`from observer.autogpt import patch_autogpt

# 在 AutoGPT 启动前注入
patch_autogpt(policy_file="observer-policy.yaml")

# 正常启动 AutoGPT
autogpt.run()`}
      </CodeBlock>

      <H3>自定义框架</H3>
      <CodeBlock language="python">
{`from observer import Observer

obs = Observer(session_id="custom-001")

# 手动记录工具调用
with obs.tool_call("search_database", params={"query": "users"}):
    result = my_search_function(query)
    obs.record_side_effect("database_read", table="users", rows=len(result))
    return result`}
      </CodeBlock>

      <H2>实际应用场景</H2>

      <H3>1. 生产环境调试</H3>
      <p>
        智能体在生产环境出现异常行为时，通过 Observer 回放完整执行轨迹，快速定位问题。
      </p>

      <H3>2. 安全合规审计</H3>
      <p>
        满足金融、医疗等行业的合规要求，提供完整的智能体行为审计日志。
      </p>

      <H3>3. 多智能体协作</H3>
      <p>
        监控多个智能体的交互行为，发现协作中的安全风险和效率瓶颈。
      </p>

      <H3>4. A/B 测试与优化</H3>
      <p>
        对比不同 Prompt 或模型版本的实际执行效果，基于证据数据优化智能体性能。
      </p>

      <H2>性能开销</H2>
      <p>
        Observer 的设计目标是"监控不应成为瓶颈"：
      </p>
      <ul>
        <li><strong>工具调用延迟</strong>：&lt; 5ms（异步记录）</li>
        <li><strong>内存开销</strong>：每会话约 10-50 MB</li>
        <li><strong>磁盘占用</strong>：每小时约 100-500 MB（取决于活跃度）</li>
        <li><strong>CPU 占用</strong>：&lt; 3%（单核后台进程）</li>
      </ul>

      <H2>开始使用</H2>
      <p>
        Observer 目前处于公测阶段，支持 Python 和 Node.js 环境。
      </p>

      <H3>安装</H3>
      <CodeBlock language="bash">
{`# Python
pip install fangcun-observer

# Node.js
npm install @fangcunleap/observer`}
      </CodeBlock>

      <H3>快速启动</H3>
      <CodeBlock language="python">
{`from observer import Observer

# 初始化 Observer
obs = Observer.init(
    api_key="your-api-key",  # 可选，用于云端同步
    local_only=True          # 仅本地存储
)

# Observer 自动拦截智能体运行
# 无需修改现有代码`}
      </CodeBlock>

      <p className="mt-8 p-6 bg-[#F0E3D0] rounded-lg border border-[#C8853F]/20">
        <strong>了解更多：</strong> 访问{' '}
        <a href="https://observer.fangcunleap.com" target="_blank" rel="noopener noreferrer">
          observer.fangcunleap.com
        </a>{' '}
        查看完整文档和使用示例，或联系我们获取企业版试用。
      </p>
    </ArticleLayout>
  );
}
