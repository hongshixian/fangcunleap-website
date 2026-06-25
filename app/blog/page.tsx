import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';

export const metadata: Metadata = {
  title: '博客 - 方寸跃迁',
  description: '探索 AI 智能体安全、工具验证和运行时防护的最新洞见',
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    slug: 'observer',
    title: 'Observer：AI 智能体的运行时安全守护者',
    excerpt: '在 AI 智能体运行时实现零代码改动的安全防护，通过四个证据维度实时介入，确保本地优先的证据链追踪。',
    date: '2026年5月6日',
    image: '/images/blog-observer-side-effect.png',
    readTime: '8 分钟阅读',
  },
  {
    slug: 'plugin',
    title: 'AgentPlugin：一行代码为智能体添加运行时防护',
    excerpt: '基于 OpenClaw 规范的运行时防护插件，支持四个拦截面、两种模式、五个决策点，一行安装即可使用。',
    date: '2026年5月1日',
    image: '/images/blog-plugin-architecture.png',
    readTime: '6 分钟阅读',
  },
  {
    slug: 'fangcunguard',
    title: 'FangcunGuard：高性能 Prompt 注入检测基准',
    excerpt: '在 6 个基准测试中取得 91.1 F1 分数，p99 延迟仅 8ms，超越 7 个开源基线模型的检测性能。',
    date: '2026年4月24日',
    image: '/images/blog-fangcunguard-overview.png',
    readTime: '10 分钟阅读',
  },
  {
    slug: 'skillward',
    title: 'SkillWard：三阶段扫描器守护 Skill 安全',
    excerpt: '通过静态分析、LLM 推理和沙箱验证三个阶段，从 5000 个真实 Skill 中识别威胁，沙箱率约 38%，成功率达 99%。',
    date: '2026年4月10日',
    image: '/images/skillward-architecture.png',
    readTime: '12 分钟阅读',
  },
];

export default function BlogPage() {
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F6F1E8]">
        {/* Hero */}
        <div className="bg-gradient-to-b from-white/80 to-transparent border-b border-[#E2D9C8]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-[#1F2421] leading-tight">
                方寸跃迁<span className="text-[#C8853F]">博客</span>
              </h1>
              <p className="mt-6 text-xl text-[#8A8A80] leading-relaxed">
                探索 AI 智能体安全、工具验证和运行时防护的最新技术洞见与产品更新
              </p>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block group"
          >
            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl border border-[#E2D9C8] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#C8853F] text-white text-xs font-semibold rounded-full">
                  最新发布
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <time className="text-sm text-[#8A8A80] font-medium">
                  {featuredPost.date} · {featuredPost.readTime}
                </time>
                <h2 className="mt-3 text-3xl font-bold text-[#1F2421] group-hover:text-[#C8853F] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-[#8A8A80] leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[#C8853F] font-semibold">
                  阅读全文
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid Posts */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="h-full bg-white rounded-xl border border-[#E2D9C8] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-xs text-[#8A8A80] font-medium">
                      {post.date} · {post.readTime}
                    </time>
                    <h3 className="mt-2 text-xl font-bold text-[#1F2421] group-hover:text-[#C8853F] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#8A8A80] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
