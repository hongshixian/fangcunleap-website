import { Metadata } from 'next';
import { ArticleLayout } from '@/components/blog/article-layout';
import { H2, H3 } from '@/components/blog/heading';
import { ImgFigure } from '@/components/blog/img-figure';
import { VideoFigure } from '@/components/blog/video-figure';
import { CodeBlock } from '@/components/blog/code-block';

export const metadata: Metadata = {
  title: 'AgentPlugin：一行代码为智能体添加运行时防护 - 方寸跃迁',
  description: '基于 OpenClaw 规范的运行时防护插件，支持四个拦截面、两种模式、五个决策点，一行安装即可使用。',
};

export default function PluginArticle() {
  const stats = [
    { value: '4', label: '拦截面' },
    { value: '2', label: '运行模式' },
    { value: '5', label: '决策点' },
    { value: '1 行', label: '安装代码' },
  ];

  return (
    <ArticleLayout
      title="AgentPlugin：一行代码为智能体添加运行时防护"
      date="2026年5月1日"
      stats={stats}
    >
      <p className="lead text-xl text-[#8A8A80]">
        为已有的 AI 智能体添加安全防护，往往需要大量代码重构。AgentPlugin 基于 OpenClaw 规范，通过一行安装代码即可实现四层拦截、五个决策点的完整运行时防护。
      </p>

      <H2>OpenClaw 规范简介</H2>
      <p>
        OpenClaw 是方寸跃迁提出的智能体运行时防护标准化规范，定义了：
      </p>
      <ul>
        <li><strong>拦截点（Intercept Points）</strong>：智能体生命周期中的关键拦截时机</li>
        <li><strong>证据格式（Evidence Format）</strong>：标准化的监控数据结构</li>
        <li><strong>决策协议（Decision Protocol）</strong>：拦截后的处理流程</li>
        <li><strong>插件接口（Plugin Interface）</strong>：统一的防护能力接入方式</li>
      </ul>

      <p className="mt-4 p-6 bg-[#F0E3D0] rounded-lg border border-[#C8853F]/20">
        <strong>核心理念：</strong> OpenClaw 让安全防护成为"即插即用"的能力，而非绑定特定框架的定制方案。
      </p>

      <H2>四个拦截面</H2>
      <p>
        AgentPlugin 在智能体的四个关键环节提供拦截能力：
      </p>

      <H3>1. Prompt 拦截（Prompt Intercept）</H3>
      <p>
        在用户输入发送给模型之前：
      </p>
      <ul>
        <li>检测 Prompt 注入攻击</li>
        <li>过滤敏感信息（PII、密钥）</li>
        <li>应用内容策略（合规审查）</li>
        <li>注入系统级安全指令</li>
      </ul>

      <H3>2. 工具调用拦截（Tool Call Intercept）</H3>
      <p>
        在智能体调用工具之前：
      </p>
      <ul>
        <li>验证工具调用权限</li>
        <li>检查参数合法性和范围</li>
        <li>应用速率限制和配额</li>
        <li>触发人工审批流程</li>
      </ul>

      <H3>3. 响应拦截（Response Intercept）</H3>
      <p>
        在模型输出返回给用户之前：
      </p>
      <ul>
        <li>检测有害内容生成</li>
        <li>脱敏敏感数据</li>
        <li>验证输出质量和一致性</li>
        <li>记录完整输出用于审计</li>
      </ul>

      <H3>4. 副作用拦截（Side Effect Intercept）</H3>
      <p>
        在工具执行产生系统副作用时：
      </p>
      <ul>
        <li>监控文件系统变更</li>
        <li>拦截危险的网络请求</li>
        <li>限制数据库操作范围</li>
        <li>隔离进程和资源使用</li>
      </ul>

      <ImgFigure
        src="/images/blog-plugin-architecture.png"
        alt="AgentPlugin 四层拦截架构"
        caption="AgentPlugin 在智能体生命周期的四个关键节点提供拦截和决策能力"
      />

      <H2>两种运行模式</H2>

      <H3>监控模式（Monitor Mode）</H3>
      <p>
        只记录不拦截，适合初期部署和测试阶段：
      </p>
      <CodeBlock language="typescript">
{`import { AgentPlugin } from '@fangcunleap/agent-plugin';

const plugin = new AgentPlugin({
  mode: 'monitor',  // 监控模式
  logLevel: 'verbose'
});

// 插件会记录所有拦截点的数据，但不阻止任何操作
agent.use(plugin);`}
      </CodeBlock>

      <H3>拦截模式（Enforce Mode）</H3>
      <p>
        主动拦截高风险操作，适合生产环境：
      </p>
      <CodeBlock language="typescript">
{`const plugin = new AgentPlugin({
  mode: 'enforce',  // 拦截模式
  policy: {
    promptInjection: 'block',      // 阻止 Prompt 注入
    sensitiveToolCall: 'approve',  // 需人工审批
    harmfulOutput: 'redact'        // 自动脱敏
  }
});`}
      </CodeBlock>

      <H2>五个决策点</H2>
      <p>
        每个拦截面触发后，AgentPlugin 支持五种决策：
      </p>

      <H3>1. ALLOW（放行）</H3>
      <p>
        操作安全，直接放行：
      </p>
      <CodeBlock language="typescript">
{`{
  decision: 'ALLOW',
  reason: 'Tool call within approved list',
  confidence: 0.98
}`}
      </CodeBlock>

      <H3>2. BLOCK（阻止）</H3>
      <p>
        操作危险，直接阻止：
      </p>
      <CodeBlock language="typescript">
{`{
  decision: 'BLOCK',
  reason: 'Prompt injection detected with high confidence',
  confidence: 0.95,
  evidence: {
    detector: 'FangcunGuard',
    pattern: 'ignore_previous_instructions'
  }
}`}
      </CodeBlock>

      <H3>3. REDACT（脱敏）</H3>
      <p>
        移除敏感内容后放行：
      </p>
      <CodeBlock language="typescript">
{`{
  decision: 'REDACT',
  reason: 'PII detected in prompt',
  redactions: [
    { type: 'email', value: '***@example.com', span: [45, 62] },
    { type: 'phone', value: '***-****-1234', span: [89, 101] }
  ]
}`}
      </CodeBlock>

      <H3>4. APPROVE（等待审批）</H3>
      <p>
        暂停执行，等待人工决策：
      </p>
      <CodeBlock language="typescript">
{`{
  decision: 'APPROVE',
  reason: 'High-risk database operation requires approval',
  approvalUrl: 'https://console.fangcunleap.com/approvals/xyz789',
  timeout: 300,  // 5分钟超时
  fallback: 'BLOCK'  // 超时后默认阻止
}`}
      </CodeBlock>

      <H3>5. SANDBOX（沙箱执行）</H3>
      <p>
        在隔离环境中执行，限制副作用：
      </p>
      <CodeBlock language="typescript">
{`{
  decision: 'SANDBOX',
  reason: 'Unknown tool requires sandboxed execution',
  constraints: {
    maxMemory: '512MB',
    maxCpu: '0.5',
    networkAccess: false,
    fileSystemMode: 'readonly'
  }
}`}
      </CodeBlock>

      <H2>一行安装</H2>
      <p>
        AgentPlugin 的设计目标是零学习成本，一行代码完成安装：
      </p>

      <H3>LangChain</H3>
      <CodeBlock language="python">
{`from langchain.agents import initialize_agent
from fangcun_plugin import FangcunPlugin

agent = initialize_agent(
    tools=[...],
    llm=llm,
    # 一行安装插件
    callbacks=[FangcunPlugin(api_key="your-key")]
)`}
      </CodeBlock>

      <H3>AutoGPT</H3>
      <CodeBlock language="python">
{`# 在 .env 文件中添加一行
FANGCUN_PLUGIN_ENABLED=true
FANGCUN_API_KEY=your-key

# AutoGPT 启动时自动加载`}
      </CodeBlock>

      <H3>Semantic Kernel</H3>
      <CodeBlock language="csharp">
{`using FangcunLeap.AgentPlugin;

var kernel = new KernelBuilder()
    .WithOpenAIChatCompletionService(...)
    // 一行安装插件
    .WithFangcunPlugin("your-api-key")
    .Build();`}
      </CodeBlock>

      <H3>自定义框架</H3>
      <CodeBlock language="typescript">
{`import { AgentPlugin } from '@fangcunleap/agent-plugin';

const plugin = new AgentPlugin({
  apiKey: process.env.FANGCUN_API_KEY
});

// 手动在四个拦截点调用
const checkedPrompt = await plugin.interceptPrompt(userInput);
const checkedTool = await plugin.interceptToolCall(toolName, args);
const checkedResponse = await plugin.interceptResponse(modelOutput);
await plugin.recordSideEffect(sideEffectData);`}
      </CodeBlock>

      <H2>配置策略文件</H2>
      <p>
        通过 YAML 配置文件定义详细的防护策略：
      </p>

      <CodeBlock language="yaml">
{`# fangcun-policy.yaml
version: "1.0"

prompt:
  injection:
    action: block
    confidence_threshold: 0.8
  pii:
    action: redact
    types: [email, phone, ssn, credit_card]

tool_call:
  whitelist:
    - search_web
    - calculator
  blacklist:
    - exec_shell
    - delete_file
  approval_required:
    - send_email
    - database_write

response:
  harmful_content:
    action: block
    categories: [violence, hate_speech, self_harm]
  pii:
    action: redact

side_effect:
  file_system:
    allowed_paths: ["/tmp", "/var/app/data"]
    readonly_paths: ["/etc", "/usr"]
  network:
    allowed_domains: ["*.example.com", "api.openai.com"]
    blocked_ips: ["169.254.0.0/16"]  # 阻止云元数据服务
  resource:
    max_memory: "1GB"
    max_cpu: "2.0"
    max_disk: "10GB"`}
      </CodeBlock>

      <H2>实时监控面板</H2>
      <p>
        AgentPlugin 配套提供可视化监控面板，实时查看拦截事件：
      </p>

      <VideoFigure
        src="/images/blog-plugin-demo.mp4"
        caption="AgentPlugin 实时监控面板演示：查看拦截事件、审批请求和统计数据"
      />

      <H2>开源与企业版</H2>

      <H3>开源版</H3>
      <ul>
        <li>四个拦截面的基础能力</li>
        <li>本地策略文件配置</li>
        <li>监控模式和拦截模式</li>
        <li>MIT 协议开源</li>
      </ul>

      <H3>企业版</H3>
      <ul>
        <li>云端策略管理和版本控制</li>
        <li>团队协作和审批工作流</li>
        <li>高级威胁检测（AI 驱动）</li>
        <li>合规审计和报告生成</li>
        <li>99.9% SLA 保障</li>
      </ul>

      <H2>性能基准</H2>
      <p>
        在标准 LangChain Agent 上的性能测试（M2 MacBook Pro）：
      </p>
      <ul>
        <li><strong>Prompt 拦截延迟</strong>：5-15ms（本地模型）</li>
        <li><strong>Tool Call 拦截延迟</strong>：&lt; 2ms（策略匹配）</li>
        <li><strong>Response 拦截延迟</strong>：10-30ms（内容检测）</li>
        <li><strong>内存开销</strong>：约 50MB（常驻进程）</li>
        <li><strong>吞吐量影响</strong>：&lt; 5%（监控模式）</li>
      </ul>

      <H2>社区与生态</H2>

      <H3>GitHub 仓库</H3>
      <p>
        开源版代码托管在 GitHub，欢迎贡献：
      </p>
      <p>
        <a
          href="https://github.com/Fangcun-AI/FangcunAgent-Plugin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C8853F] hover:underline font-mono"
        >
          github.com/Fangcun-AI/FangcunAgent-Plugin
        </a>
      </p>

      <H3>集成示例</H3>
      <p>
        我们维护了一系列主流框架的集成示例：
      </p>
      <ul>
        <li>LangChain + AgentPlugin + FastAPI</li>
        <li>AutoGPT + AgentPlugin + Docker</li>
        <li>Semantic Kernel + AgentPlugin + Azure</li>
        <li>CrewAI + AgentPlugin + Kubernetes</li>
      </ul>

      <H3>插件市场</H3>
      <p>
        开发者可以编写自定义检测器，发布到 AgentPlugin 市场：
      </p>
      <CodeBlock language="typescript">
{`// 自定义检测器示例
export class CustomDetector implements IDetector {
  async detect(context: InterceptContext): Promise<Decision> {
    // 自定义检测逻辑
    if (context.prompt.includes('敏感词')) {
      return {
        decision: 'BLOCK',
        reason: 'Custom rule triggered',
        confidence: 1.0
      };
    }
    return { decision: 'ALLOW' };
  }
}

// 注册到 AgentPlugin
plugin.registerDetector('custom', new CustomDetector());`}
      </CodeBlock>

      <H2>快速开始</H2>

      <H3>安装</H3>
      <CodeBlock language="bash">
{`# Python
pip install fangcun-agent-plugin

# Node.js
npm install @fangcunleap/agent-plugin

# .NET
dotnet add package FangcunLeap.AgentPlugin`}
      </CodeBlock>

      <H3>获取 API Key</H3>
      <p>
        访问{' '}
        <a href="https://console.fangcunleap.com" target="_blank" rel="noopener noreferrer">
          console.fangcunleap.com
        </a>{' '}
        注册账号并获取 API Key（开源版可选，企业版必需）。
      </p>

      <H3>5 分钟快速体验</H3>
      <CodeBlock language="bash">
{`# 克隆示例仓库
git clone https://github.com/Fangcun-AI/FangcunAgent-Plugin
cd examples/langchain-quickstart

# 配置 API Key
echo "FANGCUN_API_KEY=your-key" > .env

# 运行示例
python quickstart.py

# 访问监控面板
open http://localhost:3000`}
      </CodeBlock>

      <p className="mt-8 p-6 bg-[#F0E3D0] rounded-lg border border-[#C8853F]/20">
        <strong>加入社区：</strong> 访问{' '}
        <a href="https://github.com/Fangcun-AI/FangcunAgent-Plugin" target="_blank" rel="noopener noreferrer">
          GitHub 仓库
        </a>{' '}
        获取完整文档、示例代码和社区支持。企业版试用请联系{' '}
        <a href="mailto:business@fangcunleap.com">business@fangcunleap.com</a>。
      </p>
    </ArticleLayout>
  );
}
