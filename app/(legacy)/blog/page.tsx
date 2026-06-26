'use client';

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { MarketingFooter } from "@/components/MarketingPage";
import SiteHeader from "@/components/SiteHeader";


type Post = {
  slug: string;
  href: string;
  external?: boolean;
  tag: { en: string; zh: string };
  title: { en: string; zh: string };
  excerpt: { en: string; zh: string };
  date: string;
  readTime: { en: string; zh: string };
  img: string;
  author: { name: string; role: { en: string; zh: string } };
  featured?: boolean;
};

// Display order: newest first. Featured = the first item in the array
// (Blog.tsx falls back to POSTS[0] when no entry has `featured: true`).
const POSTS: Post[] = [
  {
    slug: "observer",
    href: "/blog/observer",
    tag: { en: "Engineering", zh: "工程" },
    title: {
      en: "Fangcun Observer: runtime safety for AI agents",
      zh: "方寸 Observer：AI Agent 的运行时安全",
    },
    excerpt: {
      en: "Commands, files, network, behavior chains — four runtime evidence dimensions, zero code change to adopt. See what your agent actually did, not what it chose to report.",
      zh: "命令 · 文件 · 网络 · 行为链 —— 四个运行时证据维度，零代码改造接入。看见 Agent 真实做了什么，而不是它选择告诉你的内容。",
    },
    date: "May 6, 2026",
    readTime: { en: "8 min read", zh: "约 8 分钟阅读" },
    img: "/images/blog-observer-side-effect.png",
    author: { name: "Fangcun Leap", role: { en: "Engineering", zh: "工程团队" } },
    featured: true,
  },
  {
    slug: "plugin",
    href: "/blog/plugin",
    tag: { en: "Engineering", zh: "工程" },
    title: {
      en: "Fangcun AgentPlugin: a runtime guardrail for OpenClaw",
      zh: "Fangcun AgentPlugin：给 OpenClaw 装上运行时护栏",
    },
    excerpt: {
      en: "Drops into OpenClaw's runtime hooks. Four capability surfaces (prompt, tool, output, skill), two modes (adaptive / full_defense), local interception + backend review — one-line install.",
      zh: "直接接入 OpenClaw 运行链路。4 大能力面（Prompt / Tool / Output / Skill）+ 双模式（adaptive / full_defense）+ 本地拦截与后端复核协同——一行命令装完。",
    },
    date: "May 1, 2026",
    readTime: { en: "7 min read", zh: "约 7 分钟阅读" },
    img: "/images/blog-plugin-architecture.png",
    author: { name: "Fangcun Leap", role: { en: "Engineering", zh: "工程团队" } },
  },
  {
    slug: "fangcunguard",
    href: "/blog/fangcunguard",
    tag: { en: "Engineering", zh: "工程" },
    title: {
      en: "Fangcun Guard: guarding the safety floor of every agent",
      zh: "方寸 Guard：守护 Agent 的安全底线",
    },
    excerpt: {
      en: "F1 91.1 across 6 benchmarks, p99 8ms inference. 3 to 21 points clear of the field, 30× faster than the slowest baseline — fastest and most accurate at the same time.",
      zh: "6 项 benchmark 综合 F1 91.1, p99 推理 8ms。把同行整体甩开 3 到 21 个百分点, 速度比最慢的 baseline 快 30 倍——最准的同时也最快。",
    },
    date: "April 24, 2026",
    readTime: { en: "8 min read", zh: "约 8 分钟阅读" },
    img: "/images/blog-fangcunguard-overview.png",
    author: { name: "Fangcun Leap", role: { en: "Engineering", zh: "工程团队" } },
  },
  {
    slug: "skillward",
    href: "/blog/skillward",
    tag: { en: "Research", zh: "研究" },
    title: {
      en: "SkillWard: trading uncertain warnings for runtime evidence",
      zh: "SkillWard：把不确定的告警换成沙箱里的实证",
    },
    excerpt: {
      en: "Static + LLM + sandbox, three stages. On 5,000 real skills, ~38% entered the sandbox; ~one third of those exposed runtime threats review-only pipelines couldn't catch.",
      zh: "静态 + LLM + 沙箱，三阶段。5,000 个真实 Skill 中 ~38% 进入沙箱；其中约三分之一暴露了纯审阅看不见的运行时威胁。",
    },
    date: "April 10, 2026",
    readTime: { en: "6 min read", zh: "约 6 分钟阅读" },
    img: "/images/skillward-architecture.png",
    author: { name: "Fangcun Research", role: { en: "Research Team", zh: "研究团队" } },
  },
];

export default function BlogPage() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const rest = POSTS.filter((p) => p !== featured);

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
          {isZh ? "博客" : "Blog"}
        </p>
        <h1 className="mt-5 text-3xl md:text-[56px] leading-[1.05] tracking-tight">
          {isZh ? (
            <>
              <span className="font-light text-gray-900">最新</span>
              <span className="font-noto-serif font-bold text-gradient-purple">洞察</span>
              <span className="font-light text-gray-900"> 与思考</span>
            </>
          ) : (
            <>
              <span className="font-light text-gray-900">Latest </span>
              <span className="font-instrument-serif italic text-gradient-purple">insights</span>
              <span className="font-light text-gray-900"> & ideas</span>
            </>
          )}
        </h1>
        <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-gray-600">
          {isZh
            ? "来自方寸跃迁团队的研究、工程实践与行业观察。我们写下这些,是为了让 AI 安全的边界更清楚一点。"
            : "Research, engineering practice, and industry notes from the Fangcun Leap team — written so the edges of AI security feel a little less blurry."}
        </p>
      </section>

      {/* Featured post */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <Link
          href={featured.href}
          className="group grid grid-cols-1 gap-8 rounded-3xl overflow-hidden ring-1 ring-purple-200/60 hover:ring-purple-300 transition-all md:grid-cols-2 bg-white shadow-[0_8px_32px_-12px_rgba(120,80,200,0.18)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
            <img src={featured.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-transparent" />
            <span className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-purple-800 ring-1 ring-purple-200">
              {isZh ? "精选" : "Featured"} · {featured.tag[lang]}
            </span>
          </div>
          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime[lang]}</span>
              </div>
              <h2 className={`mt-4 text-2xl md:text-[32px] leading-[1.15] ${isZh ? "font-semibold" : "font-light"} text-gray-900 group-hover:text-purple-900 transition-colors`}>
                {featured.title[lang]}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
                {featured.excerpt[lang]}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-400 to-amber-300 ring-1 ring-purple-200" />
                <div>
                  <div className="text-sm text-gray-800">{featured.author.name}</div>
                  <div className="text-xs text-gray-500">{featured.author.role[lang]}</div>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-sm text-purple-700 group-hover:text-purple-900 transition-colors">
                {isZh ? "阅读全文" : "Read"} <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />
      </div>

      {/* Grid of remaining posts */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => {
            const isExternal = post.href === "#";
            const Wrapper: React.ElementType = isExternal ? "div" : Link;
            const wrapperProps = isExternal ? {} : { href: post.href };
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`group block h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-500 ring-1 ring-purple-200/50 bg-white shadow-[0_4px_20px_-8px_rgba(120,80,200,0.12)] ${
                    isExternal ? "opacity-80 cursor-default" : "hover:cursor-pointer hover:ring-purple-300 hover:translate-y-[-4px] hover:shadow-[0_12px_32px_-8px_rgba(120,80,200,0.2)]"
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={post.img} alt={post.title[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-purple-800 ring-1 ring-purple-200">
                      {post.tag[lang]}
                    </span>
                    {isExternal && (
                      <span className="absolute top-4 right-4 rounded-full bg-amber-100 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium tracking-wider text-amber-800 ring-1 ring-amber-300">
                        {isZh ? "即将发布" : "Coming soon"}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="text-[17px] leading-snug font-semibold text-gray-900 group-hover:text-purple-900 transition-colors">
                        {post.title[lang]}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3">
                        {post.excerpt[lang]}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {post.date} · {post.readTime[lang]}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-purple-700 transition-colors">
                        {isZh ? "阅读" : "Read"} <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
