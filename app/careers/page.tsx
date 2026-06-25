import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { SideTools } from "@/components/site/side-tools"

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 grid-mask" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              招聘
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              加入我们
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              我们正在寻找对 AI 安全充满热情的研究者和工程师
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Open Roles Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">在招职位</h2>

          {/* Job Posting Card */}
          <div className="rounded-2xl border border-primary/30 bg-white shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  AI 安全工程师（大模型方向）
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 whitespace-nowrap">
                  招聘中
                </span>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3">
                  工作职责
                </h4>
                <ul className="space-y-2 text-foreground/80 list-disc list-inside">
                  <li>研究大模型攻击与防御技术（prompt injection、jailbreak、adversarial attack 等）</li>
                  <li>参与大模型训练全流程（数据处理、预训练、SFT、RLHF/DPO 等）</li>
                  <li>负责训练数据质量保障（标注质量控制、去重、脱敏等）</li>
                  <li>构建 AI 安全评估基准与测试集</li>
                  <li>设计并实现护栏系统（内容安全、脱敏、行为控制、多模态风控等）</li>
                  <li>追踪监管政策动态及前沿对齐（alignment）、可解释性（interpretability）研究</li>
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h4 className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3">
                  任职要求
                </h4>
                <ul className="space-y-2 text-foreground/80 list-disc list-inside">
                  <li>硕士及以上学历，人工智能、计算机科学、数学、信息安全、网络安全等相关专业</li>
                  <li>1 年以上大模型 / AI 安全 / NLP 相关工作经验（优秀在校生亦可）</li>
                  <li>熟练使用 Python，熟悉 PyTorch / DeepSpeed / Megatron 等框架</li>
                  <li>了解大模型训练全流程，熟悉 LoRA / QLoRA 等微调方法</li>
                  <li>具备数据工程能力（清洗、标注、ETL、质量评估等）</li>
                  <li>了解智能体架构（ReAct、Tool Use、Multi-Agent 等）</li>
                  <li>日常使用 Claude Code / Cursor 等 AI 辅助编程工具</li>
                  <li>熟悉 Linux 环境，了解 Docker / Kubernetes 及 CI/CD 流程</li>
                </ul>
              </div>

              {/* Bonus */}
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3">
                  加分项
                </h4>
                <ul className="space-y-2 text-foreground/80 list-disc list-inside">
                  <li>从零完整训练过大模型（预训练或大规模 SFT / RLHF）</li>
                  <li>参与过对齐（alignment）/ 红队（red team）/ 安全评估（safety eval）项目</li>
                  <li>在顶会（ACL、NeurIPS、ICLR、USENIX Security 等）发表过论文</li>
                  <li>CTF / AI 安全竞赛获奖经历</li>
                  <li>熟悉模型压缩技术（量化、蒸馏、剪枝等）</li>
                  <li>大规模数据标注平台搭建经验</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Working at Fangcun Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">工作环境</h2>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-6 text-lg font-medium text-foreground">
                创新源于自主与无后顾之忧
              </p>
              <p className="mb-6">
                方寸是一家扁平的 AI 公司，以结果为导向。我们提供：
              </p>
              <ul className="space-y-2 mb-6 list-disc list-inside">
                <li>六险一金（含补充医疗保险）</li>
                <li>交通补贴、运动补贴、高温补贴</li>
                <li>年度体检</li>
                <li>每周三「跃迁星期三」happy hour</li>
                <li>生日及节日礼品</li>
                <li>年度团建旅游</li>
              </ul>
              <p className="text-lg font-medium text-foreground">
                在扁平中快速成长，用成果定义自己
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">投递方式</h2>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-foreground/80 mb-4">
              请将简历发送至{" "}
              <a
                href="mailto:hr@fangcunleap.com"
                className="text-primary hover:underline font-medium"
              >
                hr@fangcunleap.com
              </a>
            </p>
            <p className="text-base text-foreground/70">
              我们通常 5 个工作日内回复——觉得对的话会直接安排技术面，没有冗长的初筛流程。
            </p>
          </div>
        </section>
      </div>

      <Footer />
      <SideTools />
    </main>
  )
}
