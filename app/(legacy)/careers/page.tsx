"use client"

import MarketingPage, { MPSection } from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


// ============================================================
// Job posting
// ============================================================


const RESPONSIBILITIES_ZH = [
  "负责大模型全链路安全攻防技术研究,包括 Prompt 注入、越狱攻击、对抗样本、模型投毒等,设计并实施相应的防护方案",
  "参与大模型训练全流程,包括数据采集与清洗、预训练(PT)、有监督微调(SFT)、强化学习(RLHF、DPO 等),具备端到端的模型训练与迭代能力",
  "负责训练数据质量管理,包括数据标注体系搭建、数据去重与脱敏、高质量语料筛选与构建,持续优化数据管线效率",
  "负责 AI 安全评估基准(Benchmark)的构建与维护,设计系统化的安全红队测试集,持续迭代测试覆盖度",
  "参与 AI 安全护栏系统的设计与开发,涵盖内容安全、数据脱敏、行为约束、多模态检测等核心能力,并持续优化检测性能与推理延迟",
  "跟踪国内外 AI 安全法规与前沿算法(如对齐技术、可解释性、模型鲁棒性等),将研究成果转化落地到产品中",
];

const RESPONSIBILITIES_EN = [
  "Research full-stack LLM security attack and defense — prompt injection, jailbreak attacks, adversarial examples, model poisoning, etc. — and design corresponding mitigations.",
  "Participate in the full LLM training pipeline: data collection, cleaning, pretraining, supervised fine-tuning (SFT), and reinforcement learning (RLHF / DPO). Own end-to-end model iteration.",
  "Drive training-data quality: build an annotation system, deduplication and desensitization, high-quality corpus filtering and construction, ongoing pipeline-efficiency improvements.",
  "Build and maintain AI safety evaluation benchmarks. Design systematic red-team test sets, iterate on coverage.",
  "Design and ship AI guardrail systems covering content safety, data redaction, behavioral constraints, multimodal detection. Optimize detection quality and inference latency continuously.",
  "Track domestic and international AI safety regulation and frontier algorithms (alignment, interpretability, robustness, etc.). Translate research outputs into shippable product features.",
];

const REQUIREMENTS_ZH = [
  "人工智能、计算机科学、数学、信息安全、网络安全等相关专业,硕士及以上学历优先",
  "1 年以上大模型算法、AI 安全或 NLP 相关工作经验,优秀应届生及实习生亦可",
  "熟练掌握 Python,熟悉 PyTorch / DeepSpeed / Megatron 等主流深度学习与分布式训练框架,具备扎实的机器学习与深度学习理论基础",
  "熟悉大模型训练全流程(预训练、SFT、RLHF / DPO),有实际参与过模型微调或训练的经验,了解 LoRA、QLoRA 等参数高效微调方法",
  "具备数据工程能力,熟悉大规模语料采集、清洗、去重、标注等数据处理流程,有高质量数据集构建经验",
  "了解当前主流 AI Agent 架构与工作流(如 ReAct、Tool Use、Multi-Agent 等),理解 Agent 场景下的安全挑战",
  "熟练使用 Claude Code、Cursor 等 AI 辅助编程工具进行日常开发,能高效利用 AI 工具加速研发流程",
  "有系统工程能力:熟悉 Linux 环境,有 Docker / K8s 容器化部署及 CI/CD 经验",
];

const REQUIREMENTS_EN = [
  "Master's or above preferred. Major in AI, Computer Science, Mathematics, Information Security, or Cybersecurity.",
  "1+ year of experience in LLM research, AI safety, or NLP. Outstanding new grads and interns considered.",
  "Solid Python; comfortable with PyTorch / DeepSpeed / Megatron and other mainstream training frameworks. Strong ML / DL fundamentals.",
  "Familiar with the full LLM training pipeline (pretraining, SFT, RLHF / DPO). Hands-on fine-tuning or training experience. Familiar with LoRA / QLoRA and other parameter-efficient methods.",
  "Data-engineering chops: large-scale corpus collection, cleaning, deduplication, annotation pipelines. Proven dataset-building track record.",
  "Familiar with mainstream AI agent architectures and workflows (ReAct, Tool Use, Multi-Agent, etc.). Understands the security challenges agents introduce.",
  "Daily-driver use of Claude Code, Cursor, or similar AI-assisted coding tools — comfortable leveraging AI to accelerate engineering velocity.",
  "Systems-engineering capability: Linux fluency; Docker / Kubernetes deployment + CI/CD experience.",
];

const BONUS_ZH = [
  "有大模型从零预训练或大规模 SFT / RLHF 调优的实战经验",
  "有模型安全对齐(Alignment)、红队测试、安全评估相关项目经验",
  "在 AI 安全、NLP、机器学习等方向的高水平会议或期刊发表过论文(如 ACL、NeurIPS、ICLR、USENIX Security 等)",
  "有信息安全竞赛(CTF)、AI 安全竞赛获奖经历",
  "熟悉模型量化、蒸馏、剪枝等模型压缩与部署优化技术",
  "有大规模数据标注平台搭建或管理经验",
];

const BONUS_EN = [
  "Hands-on experience with from-scratch LLM pretraining or large-scale SFT / RLHF tuning.",
  "Past project work in alignment, red-teaming, or safety evaluation.",
  "Publications at top AI / NLP / security venues — ACL, NeurIPS, ICLR, USENIX Security, etc.",
  "Awards in CTF or AI-security competitions.",
  "Familiar with model compression — quantization, distillation, pruning — and deployment optimization.",
  "Built or operated a large-scale data-annotation platform.",
];


const JobPosting = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <div className="rounded-2xl ring-1 ring-purple-200/60 bg-white/80 px-6 py-6 shadow-[0_4px_24px_-12px_rgba(120,80,200,0.15)]">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <h3 className="font-semibold text-gray-900 text-[19px]">
          {isZh ? "AI 安全工程师(大模型方向)" : "AI Safety Engineer (LLM track)"}
        </h3>
        <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-emerald-700 ring-1 ring-emerald-200">
          {isZh ? "招聘中" : "Hiring"}
        </span>
      </div>

      <Block label={isZh ? "岗位职责" : "Responsibilities"}>
        {(isZh ? RESPONSIBILITIES_ZH : RESPONSIBILITIES_EN).map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </Block>

      <Block label={isZh ? "任职要求" : "Requirements"}>
        {(isZh ? REQUIREMENTS_ZH : REQUIREMENTS_EN).map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </Block>

      <Block label={isZh ? "加分项" : "Bonus"}>
        {(isZh ? BONUS_ZH : BONUS_EN).map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </Block>
    </div>
  );
};

const Block = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mt-6">
    <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-purple-700 mb-2">{label}</div>
    <ul className="list-disc pl-5 space-y-2 text-[14px] leading-relaxed text-gray-700">
      {children}
    </ul>
  </div>
);


// ============================================================
// Working at Fangcun
// ============================================================


const WorkingAtFangcun = () => {
  const { lang } = useLanguage();
  if (lang === "zh") {
    return (
      <>
        <p>
          我们相信,<strong className="text-gray-900">创新源于自主与无后顾之忧</strong>。作为一家扁平化的 AI 公司,我们以结果为导向,注重实际贡献与持续成长——没有层级内耗与无效加班,只有清晰的产出与坦诚的协作。
        </p>
        <p>
          我们提供:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[14px] leading-relaxed text-gray-700">
          <li>六险一金(含补充医疗)</li>
          <li>交通补贴 · 运动补贴 · 高温补贴</li>
          <li>年度体检</li>
          <li>每周三 "跃迁星期三" happy hour</li>
          <li>生日及节日礼品</li>
          <li>年度团建旅游</li>
        </ul>
        <p>
          我们不希望你为琐事分心,只愿你专注创造价值——<strong className="text-gray-900">在扁平中快速成长,用成果定义自己</strong>。
        </p>
      </>
    );
  }
  return (
    <>
      <p>
        We believe <strong className="text-gray-900">innovation comes from autonomy and freedom from distraction</strong>. As a flat AI company, we measure people on results — actual contribution and sustained growth — not on hierarchy or hours. No politics, no performative late nights; just clear output and honest collaboration.
      </p>
      <p>What we offer:</p>
      <ul className="list-disc pl-5 space-y-1.5 text-[14px] leading-relaxed text-gray-700">
        <li>Statutory five-insurance + housing fund (with supplemental medical)</li>
        <li>Commute / fitness / heat-allowance subsidies</li>
        <li>Annual health check-up</li>
        <li>"Leap Wednesday" weekly happy hour</li>
        <li>Birthday and holiday gifts</li>
        <li>Annual team retreat</li>
      </ul>
      <p>
        We don't want you distracted by friction. We want you focused on building things that matter — <strong className="text-gray-900">grow fast in a flat structure, let your results speak</strong>.
      </p>
    </>
  );
};


// ============================================================
// How to apply
// ============================================================


const HowToApply = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <p>
      {isZh ? "简历发送至 " : "Send your résumé to "}
      <a
        href="mailto:hr@fangcunleap.com"
        className="font-medium text-purple-700 hover:text-purple-900 underline underline-offset-2 decoration-purple-300"
      >
        hr@fangcunleap.com
      </a>
      {isZh
        ? "。我们通常 5 个工作日内回复——觉得对的话会直接安排技术面,没有冗长的初筛流程。"
        : ". We typically respond within 5 business days — if your background fits, you go straight to a technical interview, no long pre-screen rounds."}
    </p>
  );
};


// ============================================================
// Page
// ============================================================


const Careers = () => (
  <MarketingPage
    eyebrow={{ en: "Careers", zh: "招聘" }}
    title={{ en: "Join us", zh: "加入我们" }}
    subtitle={{
      en: "We're hiring researchers and engineers who care about making AI safe at scale.",
      zh: "我们在招研究员与工程师,欢迎对 AI 安全有热情的你加入。",
    }}
  >
    <MPSection title={{ en: "Open roles", zh: "在招职位" }}>
      <JobPosting />
    </MPSection>
    <MPSection title={{ en: "Working at Fangcun", zh: "工作环境" }}>
      <WorkingAtFangcun />
    </MPSection>
    <MPSection title={{ en: "How to apply", zh: "投递方式" }}>
      <HowToApply />
    </MPSection>
  </MarketingPage>
);

export default Careers;
