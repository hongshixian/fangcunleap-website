'use client';

import { useEffect } from "react";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";
import { MarketingFooter } from "@/components/legacy/MarketingPage";
import SiteHeader from "@/components/legacy/SiteHeader";
import { PAPER_URLS } from "./paper_urls";

// Company scientists whose names should be bolded
const TARGET_AUTHORS = ["Wei Xu", "Yinpeng Dong", "Rongwu Xu", "Yu Wang", "Xiaojian Li"];

type Paper = {
  year: number;
  title: string;
  authors: string;
  conference: string;
  aiSafetyRelated: boolean;
};

// Map paper titles to their image filenames
const PAPER_IMAGES: Record<string, string> = {
  "AICrypto: A Comprehensive Benchmark For Evaluating Cryptography Capabilities of Large Language Models": "_AICrypto_A_Comprehensive_Benchmark_For_Evaluating_.png",
  "Reverse-Engineering Model Editing on Language Models": "_Reverse_Engineering_Model_Editing_on_Language_Mode.png",
  "Jailbreak Large Vision-Language Models Through Multi-Modal Linkage": "_Jailbreak_Large_Vision_Language_Models_Through_Mul.png",
  "Nuclear Deployed!: Analyzing Catastrophic Risks in Decision-making of Autonomous LLM Agents": "_Nuclear_Deployed_Analyzing_Catastrophic_Risks_in_D.png",
  "Embodied Active Defense: Leveraging Recurrent Feedback to Counter Adversarial Patches": "_Embodied_Active_Defense_Leveraging_Recurrent_Feedb.png",
  "Efficient Black-box Adversarial Attacks via Bayesian Optimization Guided by a Function Prior": "_Efficient_Black_box_Adversarial_Attacks_via_Bayesi.png",
  "Exploring the Transferability of Visual Prompting for Multimodal Large Language Models": "_Exploring_the_Transferability_of_Visual_Prompting_.png",
  "Focus on Hiders: Exploring Hidden Threats for Enhancing Adversarial Training": "_Focus_on_Hiders_Exploring_Hidden_Threats_for_Enhan.png",
  "Machine Vision Therapy: Multimodal Large Language Models Can Enhance Visual Robustness via Denoising In-Context Learning": "_Machine_Vision_Therapy_Multimodal_Large_Language_M.png",
  "MR-BEN: A Comprehensive Meta-Reasoning Benchmark for Large Language Models": "_MR_BEN_A_Comprehensive_Meta_Reasoning_Benchmark_fo.png",
  "Preemptive Answer \"Attacks\" on Chain-of-Thought Reasoning": "_Preemptive_Answer_Attacks_on_Chain_of_Thought_Reas.png",
  "Rethinking Model Ensemble in Transfer-based Adversarial Attacks": "_Rethinking_Model_Ensemble_in_Transfer_based_Advers.png",
  "Robust Classification via a Single Diffusion Model": "_Robust_Classification_via_a_Single_Diffusion_Model.png",
  "The Earth is Flat because...: Investigating LLMs' Belief towards Misinformation via Persuasive Conversation": "_The_Earth_is_Flat_because_Investigating_LLMs_Belie.png",
  "Toward Availability Attacks in 3D Point Clouds": "_Toward_Availability_Attacks_in_3D_Point_Clouds.png",
  "Towards Transferable Targeted 3D Adversarial Attack in the Physical World": "_Towards_Transferable_Targeted_3D_Adversarial_Attac.png",
  "Benchmarking Robustness of 3D Object Detection to Common Corruptions in Autonomous Driving": "_Benchmarking_Robustness_of_3D_Object_Detection_to_.png",
  "Compacting Binary Neural Networks by Sparse Kernel Selection": "_Compacting_Binary_Neural_Networks_by_Sparse_Kernel.png",
  "GNOT: A General Neural Operator Transformer for Operator Learning": "_GNOT_A_General_Neural_Operator_Transformer_for_Ope.png",
  "Learning Sample Difficulty from Pre-trained Models for Reliable Prediction": "_Learning_Sample_Difficulty_from_Pre_trained_Models.png",
  "Exploring Memorization in Adversarial Training": "_Exploring_Memorization_in_Adversarial_Training.png",
  "GSmooth: Certified Robustness against Semantic Transformations via Generalized Randomized Smoothing": "_GSmooth_Certified_Robustness_against_Semantic_Tran.png",
  "Isometric 3D Adversarial Examples in the Physical World": "_Isometric_3D_Adversarial_Examples_in_the_Physical_.png",
  "Pre-trained Adversarial Perturbations": "_Pre_trained_Adversarial_Perturbations.png",
  "Two Coupled Rejection Metrics Can Tell Adversarial Examples Apart": "_Two_Coupled_Rejection_Metrics_Can_Tell_Adversarial.png",
  "ViewFool: Evaluating the Robustness of Visual Recognition to Adversarial Viewpoints": "_ViewFool_Evaluating_the_Robustness_of_Visual_Recog.png",
  "Accumulative Poisoning Attacks on Real-time Data": "_Accumulative_Poisoning_Attacks_on_Real_time_Data.png",
  "Bag of Tricks for Adversarial Training": "_Bag_of_Tricks_for_Adversarial_Training.png",
  "Improving Transferability of Adversarial Patches on Face Recognition with Generative Models": "_Improving_Transferability_of_Adversarial_Patches_o.png",
  "Adversarial Distributional Training for Robust Deep Learning": "_Adversarial_Distributional_Training_for_Robust_Dee.png",
  "Benchmarking Adversarial Robustness on Image Classification": "_Benchmarking_Adversarial_Robustness_on_Image_Class.png",
  "Boosting Adversarial Training with Hypersphere Embedding": "_Boosting_Adversarial_Training_with_Hypersphere_Emb.png",
  "Rethinking Softmax Cross-Entropy Loss for Adversarial Robustness": "_Rethinking_Softmax_Cross_Entropy_Loss_for_Adversar.png",
  "Composite Binary Decomposition Networks": "_Composite_Binary_Decomposition_Networks.png",
  "DIAG-NRE: A Neural Pattern Diagnosis Framework for Distantly Supervised Neural Relation Extraction": "_DIAG_NRE_A_Neural_Pattern_Diagnosis_Framework_for_.png",
  "Efficient Decision-based Black-box Adversarial Attacks on Face Recognition": "_Efficient_Decision_based_Black_box_Adversarial_Att.png",
  "Evading Defenses to Transferable Adversarial Examples by Translation-Invariant Attacks": "_Evading_Defenses_to_Transferable_Adversarial_Examp.png",
  "Improving Black-box Adversarial Attacks with a Transfer-based Prior": "_Improving_Black_box_Adversarial_Attacks_with_a_Tra.png",
  "Boosting Adversarial Attacks with Momentum": "_Boosting_Adversarial_Attacks_with_Momentum.png",
  "Learning Visual Knowledge Memory Networks for Visual Question Answering": "_Learning_Visual_Knowledge_Memory_Networks_for_Visu.png",
  "Towards Robust Detection of Adversarial Examples": "_Towards_Robust_Detection_of_Adversarial_Examples.png",
  "Improving Interpretability of Deep Neural Networks with Semantic Information": "_Improving_Interpretability_of_Deep_Neural_Networks.png",
  "Joint Training for Pivot-based Neural Machine Translation": "_Joint_Training_for_Pivot_based_Neural_Machine_Tran.png",
  "Semi-supervised Learning for Neural Machine Translation": "_Semi_supervised_Learning_for_Neural_Machine_Transl.png",
};

// Parsed from /public/research/papers.csv
const PAPERS: Paper[] = [
  { year: 2026, title: "AICrypto: A Comprehensive Benchmark For Evaluating Cryptography Capabilities of Large Language Models", authors: "Yu Wang; Yijian Liu; Liheng Ji; Han Luo; Wenjie Li; Xiaofei Zhou; Chiyun Feng; Puji Wang; Yuhan Cao; Geyuan Zhang; Xiaojian Li; Rongwu Xu; Yilei Chen; Tianxing He", conference: "ICML", aiSafetyRelated: false },
  { year: 2026, title: "Reverse-Engineering Model Editing on Language Models", authors: "Zhiyu Sun; Minrui Luo; Yu Wang; Zhili Chen; Tianxing He", conference: "ICML", aiSafetyRelated: true },
  { year: 2025, title: "Jailbreak Large Vision-Language Models Through Multi-Modal Linkage", authors: "Yu Wang; Xiaofei Zhou; Yichen Wang; Geyuan Zhang; Tianxing He", conference: "ACL", aiSafetyRelated: true },
  { year: 2025, title: "Nuclear Deployed!: Analyzing Catastrophic Risks in Decision-making of Autonomous LLM Agents", authors: "Rongwu Xu; Xiaojian Li; Shuo Chen; Wei Xu", conference: "ACL Findings", aiSafetyRelated: true },
  { year: 2024, title: "Embodied Active Defense: Leveraging Recurrent Feedback to Counter Adversarial Patches", authors: "Lingxuan Wu; Xiao Yang; Yinpeng Dong; Liuwei Xie; Hang Su; Jun Zhu", conference: "ICLR", aiSafetyRelated: true },
  { year: 2024, title: "Efficient Black-box Adversarial Attacks via Bayesian Optimization Guided by a Function Prior", authors: "Shuyu Cheng; Yibo Miao; Yinpeng Dong; Xiao Yang; Xiao-Shan Gao; Jun Zhu", conference: "ICML", aiSafetyRelated: true },
  { year: 2024, title: "Exploring the Transferability of Visual Prompting for Multimodal Large Language Models", authors: "Yichi Zhang; Yinpeng Dong; Siyuan Zhang; Tianzan Min; Hang Su; Jun Zhu", conference: "CVPR", aiSafetyRelated: true },
  { year: 2024, title: "Focus on Hiders: Exploring Hidden Threats for Enhancing Adversarial Training", authors: "Qian Li; Yuxiao Hu; Yinpeng Dong; Dongxiao Zhang; Yuntian Chen", conference: "CVPR", aiSafetyRelated: true },
  { year: 2024, title: "Machine Vision Therapy: Multimodal Large Language Models Can Enhance Visual Robustness via Denoising In-Context Learning", authors: "Zhuo Huang; Chang Liu; Yinpeng Dong; Hang Su; Shibao Zheng; Tongliang Liu", conference: "ICML", aiSafetyRelated: true },
  { year: 2024, title: "MR-BEN: A Comprehensive Meta-Reasoning Benchmark for Large Language Models", authors: "Zhongshen Zeng; Yinhong Liu; Yingjia Wan; Jingyao Li; Pengguang Chen; Jianbo Dai; Yuxuan Yao; Rongwu Xu; Zehan Qi; Wanru Zhao; Linling Shen; Jianqiao Lu; Haochen Tan; Yukang Chen; Hao Zhang; Zhan Shi; Bailin Wang; Zhijiang Guo; Jiaya Jia", conference: "NeurIPS", aiSafetyRelated: false },
  { year: 2024, title: "Preemptive Answer \"Attacks\" on Chain-of-Thought Reasoning", authors: "Rongwu Xu; Zehan Qi; Wei Xu", conference: "ACL Findings", aiSafetyRelated: true },
  { year: 2024, title: "Rethinking Model Ensemble in Transfer-based Adversarial Attacks", authors: "Huanran Chen; Yichi Zhang; Yinpeng Dong; Xiao Yang; Hang Su; Jun Zhu", conference: "ICLR", aiSafetyRelated: true },
  { year: 2024, title: "Robust Classification via a Single Diffusion Model", authors: "Huanran Chen; Yinpeng Dong; Zhengyi Wang; Xiao Yang; Chengqi Duan; Hang Su; Jun Zhu", conference: "ICML", aiSafetyRelated: false },
  { year: 2024, title: "The Earth is Flat because...: Investigating LLMs' Belief towards Misinformation via Persuasive Conversation", authors: "Rongwu Xu; Brian S. Lin; Shujian Yang; Tianqi Zhang; Weiyan Shi; Tianwei Zhang; Zhixuan Fang; Wei Xu; Han Qiu", conference: "ACL", aiSafetyRelated: true },
  { year: 2024, title: "Toward Availability Attacks in 3D Point Clouds", authors: "Yifan Zhu; Yibo Miao; Yinpeng Dong; Xiao-Shan Gao", conference: "ICML", aiSafetyRelated: true },
  { year: 2024, title: "Towards Transferable Targeted 3D Adversarial Attack in the Physical World", authors: "Yao Huang; Yinpeng Dong; Shouwei Ruan; Xiao Yang; Hang Su; Xingxing Wei", conference: "CVPR", aiSafetyRelated: true },
  { year: 2023, title: "Benchmarking Robustness of 3D Object Detection to Common Corruptions in Autonomous Driving", authors: "Yinpeng Dong; Caixin Kang; Jinlai Zhang; Zijian Zhu; Yikai Wang; Xiao Yang; Hang Su; Xingxing Wei; Jun Zhu", conference: "CVPR", aiSafetyRelated: true },
  { year: 2023, title: "Compacting Binary Neural Networks by Sparse Kernel Selection", authors: "Yikai Wang; Wenbing Huang; Yinpeng Dong; Fuchun Sun; Anbang Yao", conference: "CVPR", aiSafetyRelated: false },
  { year: 2023, title: "GNOT: A General Neural Operator Transformer for Operator Learning", authors: "Zhongkai Hao; Zhengyi Wang; Hang Su; Chengyang Ying; Yinpeng Dong; Songming Liu; Ze Cheng; Jian Song; Jun Zhu", conference: "ICML", aiSafetyRelated: false },
  { year: 2023, title: "Learning Sample Difficulty from Pre-trained Models for Reliable Prediction", authors: "Peng Cui; Dan Zhang; Zhijie Deng; Yinpeng Dong; Jun Zhu", conference: "NeurIPS", aiSafetyRelated: false },
  { year: 2023, title: "Understanding the Robustness of 3D Object Detectors with Bird's-Eye-View Representations in Autonomous Driving", authors: "Zijian Zhu; Yichi Zhang; Hai Chen; Yinpeng Dong; Shu Zhao; Wenbo Ding; Jiachen Zhong; Shibao Zheng", conference: "CVPR", aiSafetyRelated: true },
  { year: 2022, title: "Exploring Memorization in Adversarial Training", authors: "Yinpeng Dong; Ke Xu; Xiao Yang; Tianyu Pang; Zhijie Deng; Hang Su; Jun Zhu", conference: "ICLR", aiSafetyRelated: true },
  { year: 2022, title: "GSmooth: Certified Robustness against Semantic Transformations via Generalized Randomized Smoothing", authors: "Zhongkai Hao; Chengyang Ying; Yinpeng Dong; Hang Su; Jian Song; Jun Zhu", conference: "ICML", aiSafetyRelated: true },
  { year: 2022, title: "Isometric 3D Adversarial Examples in the Physical World", authors: "Yibo Miao; Yinpeng Dong; Jun Zhu; Xiao-Shan Gao", conference: "NeurIPS", aiSafetyRelated: true },
  { year: 2022, title: "Pre-trained Adversarial Perturbations", authors: "Yuanhao Ban; Yinpeng Dong", conference: "NeurIPS", aiSafetyRelated: true },
  { year: 2022, title: "Two Coupled Rejection Metrics Can Tell Adversarial Examples Apart", authors: "Tianyu Pang; Huishuai Zhang; Di He; Yinpeng Dong; Hang Su; Wei Chen; Jun Zhu; Tie-Yan Liu", conference: "CVPR", aiSafetyRelated: true },
  { year: 2022, title: "ViewFool: Evaluating the Robustness of Visual Recognition to Adversarial Viewpoints", authors: "Yinpeng Dong; Shouwei Ruan; Hang Su; Caixin Kang; Xingxing Wei; Jun Zhu", conference: "NeurIPS", aiSafetyRelated: true },
  { year: 2021, title: "Accumulative Poisoning Attacks on Real-time Data", authors: "Tianyu Pang; Xiao Yang; Yinpeng Dong; Hang Su; Jun Zhu", conference: "NeurIPS", aiSafetyRelated: true },
  { year: 2021, title: "Bag of Tricks for Adversarial Training", authors: "Tianyu Pang; Xiao Yang; Yinpeng Dong; Hang Su; Jun Zhu", conference: "ICLR", aiSafetyRelated: true },
  { year: 2021, title: "Improving Transferability of Adversarial Patches on Face Recognition with Generative Models", authors: "Zihao Xiao; Xianfeng Gao; Chilin Fu; Yinpeng Dong; Wei Gao; Xiaolu Zhang; Jun Zhou; Jun Zhu", conference: "CVPR", aiSafetyRelated: true },
  { year: 2020, title: "Adversarial Distributional Training for Robust Deep Learning", authors: "Yinpeng Dong; Zhijie Deng; Tianyu Pang; Hang Su; Jun Zhu", conference: "NeurIPS", aiSafetyRelated: true },
  { year: 2020, title: "Benchmarking Adversarial Robustness on Image Classification", authors: "Yinpeng Dong; Qi-An Fu; Xiao Yang; Tianyu Pang; Hang Su; Zihao Xiao; Jun Zhu", conference: "CVPR", aiSafetyRelated: true },
  { year: 2020, title: "Boosting Adversarial Training with Hypersphere Embedding", authors: "Tianyu Pang; Xiao Yang; Yinpeng Dong; Kun Xu; Hang Su; Jun Zhu", conference: "NeurIPS", aiSafetyRelated: true },
  { year: 2020, title: "Rethinking Softmax Cross-Entropy Loss for Adversarial Robustness", authors: "Tianyu Pang; Kun Xu; Yinpeng Dong; Chao Du; Ning Chen; Jun Zhu", conference: "ICLR", aiSafetyRelated: true },
  { year: 2020, title: "Understanding and Exploring the Network with Stochastic Architectures", authors: "Zhijie Deng; Yinpeng Dong; Shifeng Zhang; Jun Zhu", conference: "NeurIPS", aiSafetyRelated: false },
  { year: 2019, title: "Composite Binary Decomposition Networks", authors: "You Qiaoben; Zheng Wang; Jianguo Li; Yinpeng Dong; Yu-Gang Jiang; Jun Zhu", conference: "AAAI", aiSafetyRelated: false },
  { year: 2019, title: "DIAG-NRE: A Neural Pattern Diagnosis Framework for Distantly Supervised Neural Relation Extraction", authors: "Shun Zheng; Xu Han; Yankai Lin; Peilin Yu; Lu Chen; Ling Huang; Zhiyuan Liu; Wei Xu", conference: "ACL", aiSafetyRelated: false },
  { year: 2019, title: "Efficient Decision-based Black-box Adversarial Attacks on Face Recognition", authors: "Yinpeng Dong; Hang Su; Baoyuan Wu; Zhifeng Li; Wei Liu; Tong Zhang; Jun Zhu", conference: "CVPR", aiSafetyRelated: true },
  { year: 2019, title: "Evading Defenses to Transferable Adversarial Examples by Translation-Invariant Attacks", authors: "Yinpeng Dong; Tianyu Pang; Hang Su; Jun Zhu", conference: "CVPR", aiSafetyRelated: true },
  { year: 2019, title: "Improving Black-box Adversarial Attacks with a Transfer-based Prior", authors: "Shuyu Cheng; Yinpeng Dong; Tianyu Pang; Hang Su; Jun Zhu", conference: "NeurIPS", aiSafetyRelated: true },
  { year: 2019, title: "PrivPy: General and Scalable Privacy-Preserving Data Mining", authors: "Yi Li; Yitao Duan; Shuoyao Zhao; Yu Yu; Wei Xu", conference: "KDD", aiSafetyRelated: false },
  { year: 2018, title: "Boosting Adversarial Attacks with Momentum", authors: "Yinpeng Dong; Fangzhou Liao; Tianyu Pang; Hang Su; Jun Zhu; Xiaolin Hu; Jianguo Li", conference: "CVPR", aiSafetyRelated: true },
  { year: 2018, title: "Learning Visual Knowledge Memory Networks for Visual Question Answering", authors: "Zhou Su; Chen Zhu; Yinpeng Dong; Dongqi Cai; Yurong Chen; Jianguo Li", conference: "CVPR", aiSafetyRelated: false },
  { year: 2018, title: "Towards Robust Detection of Adversarial Examples", authors: "Tianyu Pang; Chao Du; Yinpeng Dong; Jun Zhu", conference: "NeurIPS", aiSafetyRelated: true },
  { year: 2017, title: "Forecast Plausible Paths in Crowd Scenes", authors: "Hang Su; Jun Zhu; Yinpeng Dong; Bo Zhang", conference: "IJCAI", aiSafetyRelated: false },
  { year: 2017, title: "Improving Interpretability of Deep Neural Networks with Semantic Information", authors: "Yinpeng Dong; Hang Su; Jun Zhu; Bo Zhang", conference: "CVPR", aiSafetyRelated: false },
  { year: 2017, title: "Joint Training for Pivot-based Neural Machine Translation", authors: "Yong Cheng; Qian Yang; Yang Liu; Maosong Sun; Wei Xu", conference: "IJCAI", aiSafetyRelated: false },
  { year: 2017, title: "Maximum Reconstruction Estimation for Generative Latent Variable Models", authors: "Yong Cheng; Yang Liu; Wei Xu", conference: "AAAI", aiSafetyRelated: false },
  { year: 2016, title: "Crowd Scene Understanding with Coherent Recurrent Neural Networks", authors: "Hang Su; Yinpeng Dong; Jun Zhu; Haibin Ling; Bo Zhang", conference: "IJCAI", aiSafetyRelated: false },
  { year: 2016, title: "Semi-supervised Learning for Neural Machine Translation", authors: "Yong Cheng; Wei Xu; Zhongjun He; Wei He; Hua Wu; Maosong Sun; Yang Liu", conference: "ACL", aiSafetyRelated: false },
  { year: 2010, title: "Using Machine Learning Techniques in Console Log Analysis", authors: "Wei Xu; Ling Huang; Armando Fox; David Patterson; Michael I. Jordan", conference: "ICML", aiSafetyRelated: false },
];

// Helper function to format authors (no bolding)
function formatAuthors(authorsStr: string): string {
  return authorsStr;
}

export default function ResearchPage() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group papers by year
  const papersByYear = PAPERS.reduce((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = [];
    }
    acc[paper.year].push(paper);
    return acc;
  }, {} as Record<number, Paper[]>);

  // Sort years descending (2026, 2025, ...)
  const years = Object.keys(papersByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isZh ? "font-noto-sans" : "font-barlow"
      } bg-[#F4F2F8] min-h-screen text-gray-800`}
    >
      {/* soft halos */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute top-[40%] right-[-10%] -z-0 h-[500px] w-[500px] rounded-full bg-amber-200/40 blur-3xl" />

      <SiteHeader theme="light" />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-12">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-purple-700">
          <span className="inline-block w-5 h-px bg-purple-400" />
          {isZh ? "研究" : "Research"}
        </p>
        <h1 className="mt-5 text-3xl md:text-[56px] leading-[1.05] tracking-tight">
          {isZh ? (
            <>
              <span className="font-light text-gray-900">顶会</span>
              <span className="font-noto-serif font-bold text-gradient-purple">论文</span>
              <span className="font-light text-gray-900"> 发表</span>
            </>
          ) : (
            <>
              <span className="font-light text-gray-900">Top-tier </span>
              <span className="font-instrument-serif italic text-gradient-purple">publications</span>
            </>
          )}
        </h1>
        <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-gray-600">
          {isZh
            ? "方寸跃迁团队科学家在国际顶级会议上发表的 AI 安全研究成果。"
            : "AI safety research from Fangcun Leap scientists published at top-tier international conferences."}
        </p>
      </section>

      {/* Publications timeline - grouped by year */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="space-y-20">
          {years.map((year) => {
            const yearPapers = papersByYear[year];

            // Calculate positions for cards with staggered layout
            const cardPositions: { top: number; height: number }[] = [];
            let leftBottom = 0;  // Track bottom position of last left card
            let rightBottom = 0; // Track bottom position of last right card

            // Estimate card heights (approximate based on content)
            yearPapers.forEach((paper, idx) => {
              const hasImage = !!PAPER_IMAGES[paper.title];
              // Rough height estimation: with image ~320px, without ~180px (will vary by content)
              const estimatedHeight = hasImage ? 320 : 180;

              const isLeft = idx % 2 === 0;
              let top: number;

              if (idx === 0) {
                // First card always starts at 0
                top = 0;
              } else {
                if (isLeft) {
                  // Left card: max of (rightBottom - estimatedHeight/2, leftBottom + 64)
                  const oppositeHalf = rightBottom - estimatedHeight / 2;
                  const afterPrevious = leftBottom + 64;
                  top = Math.max(oppositeHalf, afterPrevious);
                } else {
                  // Right card: max of (leftBottom - estimatedHeight/2, rightBottom + 64)
                  const oppositeHalf = leftBottom - estimatedHeight / 2;
                  const afterPrevious = rightBottom + 64;
                  top = Math.max(oppositeHalf, afterPrevious);
                }
              }

              cardPositions.push({ top, height: estimatedHeight });

              // Update bottom positions
              if (isLeft) {
                leftBottom = top + estimatedHeight;
              } else {
                rightBottom = top + estimatedHeight;
              }
            });

            // Calculate total height for this year's timeline
            const timelineHeight = Math.max(leftBottom, rightBottom);

            return (
              <div key={year} className="relative">
                {/* Year marker */}
                <div className="relative h-16 mb-8 flex items-start justify-center pt-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {year}
                  </div>
                </div>

                {/* Year timeline */}
                <div className="relative" style={{ height: `${timelineHeight}px` }}>
                  {/* Vertical timeline axis for this year */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-300 -translate-x-1/2" />

                  {/* Timeline items for this year */}
                  {yearPapers.map((paper, idx) => {
                    const isLeft = idx % 2 === 0;
                    const position = cardPositions[idx];

                    return (
                      <div
                        key={`${year}-${idx}`}
                        className="absolute w-full pointer-events-none"
                        style={{ top: `${position.top}px`, zIndex: idx + 1 }}
                      >
                        {/* Year dot on timeline */}
                        <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto">
                          <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-white shadow-lg" />
                        </div>

                        {/* Horizontal connector line */}
                        <div className={`absolute top-8 ${isLeft ? 'left-0 right-1/2' : 'left-1/2 right-0'} h-0.5 pointer-events-none`}>
                          <div className={`absolute top-0 h-full w-full bg-gradient-to-r ${isLeft ? 'from-purple-200 to-purple-400' : 'from-purple-400 to-purple-200'}`} />
                        </div>

                        {/* Paper card */}
                        <div className={`relative ${isLeft ? 'pr-[52%]' : 'pl-[52%]'} pointer-events-none`}>
                          <a
                            href={PAPER_URLS[paper.title] || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl hover:border-purple-300 hover:z-50 transition-all pointer-events-auto ${isLeft ? 'mr-4' : 'ml-4'} ${PAPER_URLS[paper.title] ? 'cursor-pointer' : 'cursor-default'}`}
                          >
                            {PAPER_IMAGES[paper.title] ? (
                              // Card with image
                              <div className="flex gap-4">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start gap-3 mb-3">
                                    <div className="shrink-0 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                                      {paper.year}
                                    </div>
                                    <div className="shrink-0 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200">
                                      {paper.conference}
                                    </div>
                                  </div>
                                  <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3">
                                    {paper.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {formatAuthors(paper.authors)}
                                  </p>
                                </div>
                                <div className="shrink-0 w-64 h-64">
                                  <img
                                    src={`/research/images/${PAPER_IMAGES[paper.title]}`}
                                    alt={paper.title}
                                    className="w-full h-full object-contain rounded-lg border border-gray-200"
                                  />
                                </div>
                              </div>
                            ) : (
                              // Card without image (original layout)
                              <>
                                <div className="flex items-start gap-3 mb-3">
                                  <div className="shrink-0 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                                    {paper.year}
                                  </div>
                                  <div className="shrink-0 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200">
                                    {paper.conference}
                                  </div>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3">
                                  {paper.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {formatAuthors(paper.authors)}
                                </p>
                              </>
                            )}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
