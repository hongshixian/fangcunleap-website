"use client"

import MarketingPage, { MPSection } from "@/components/legacy/MarketingPage";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


type Article = {
  url: string;
  title: string;
  account: string;
  date: string;
  cover?: string;   // image path under /public
  badge?: string;   // text shown in the blue tile placeholder when no real cover
};


const COMPANY_NEWS: Article[] = [
  {
    url: "https://mp.weixin.qq.com/s/zWgguOI2aMwXRrJVEmi8oQ",
    title: "智能助理智能体(Claw)可信能力技术规范正式发布",
    account: "人工智能产业发展联盟 AIIA",
    date: "2026-04-13",
    badge: "权威发布",
  },
  {
    url: "https://mp.weixin.qq.com/s/z36I4c7Pv1Zt58EbRxRu5w",
    title: "关于对《网络安全标准实践指南——OpenClaw 类智能体部署使用安全指引(征求意见稿)》公开征求意见的通知",
    account: "全国网安标委",
    date: "2026-03-31",
    badge: "重磅发布",
  },
];


const MEDIA_COVERAGE: Article[] = [
  {
    url: "https://mp.weixin.qq.com/s/BKZLh5x1QyLsQISedMBr1Q",
    title: "细思极恐!Agent 暗藏风险,清华团队打出组合拳,全链路一网打尽",
    account: "新智元",
    date: "2026-05-07",
    cover: "/images/news-xinzhiyuan.webp",
  },
];


// Blue tile placeholder used in lieu of a real cover image —
// matches the WeChat-style "重磅发布 / 权威发布" badge.
const BadgeTile = ({ label, size = "h-20 w-20 text-[13px]" }: { label: string; size?: string }) => (
  <div
    className={`shrink-0 ${size} flex items-center justify-center rounded-md text-center text-white bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]`}
  >
    <span className="px-1 font-bold tracking-wide leading-tight">{label}</span>
  </div>
);


const ArticleFooter = ({ article }: { article: Article }) => (
  <div className="flex items-center justify-between text-xs">
    <div className="flex items-center gap-2 text-gray-600 min-w-0">
      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[8px] font-bold text-purple-700">
        {article.account.charAt(0)}
      </div>
      <span className="truncate">{article.account}</span>
    </div>
    <span className="shrink-0 text-gray-400">{article.date}</span>
  </div>
);


// Compact card: title + small badge/cover side-by-side, footer below.
// Cover thumbnails get a wider rectangle (h-20 w-30) than the square
// badge tiles so wide banner images stay legible.
const CompactCard = ({ article }: { article: Article }) => (
  <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-2xl bg-white p-5 ring-1 ring-purple-200/50 transition-all hover:ring-purple-300 hover:shadow-[0_8px_24px_-12px_rgba(120,80,200,0.2)]"
  >
    <div className="flex items-start gap-4">
      <h3 className="flex-1 text-[16px] font-semibold leading-snug text-gray-900 line-clamp-4 transition-colors group-hover:text-purple-900">
        {article.title}
      </h3>
      {article.badge ? (
        <BadgeTile label={article.badge} />
      ) : article.cover ? (
        <div className="shrink-0 h-20 w-[120px] rounded-md overflow-hidden ring-1 ring-gray-100">
          <img src={article.cover} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
      ) : null}
    </div>
    <div className="mt-4 border-t border-gray-100 pt-3">
      <ArticleFooter article={article} />
    </div>
  </a>
);


const News = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <MarketingPage
      eyebrow={{ en: "Press", zh: "新闻" }}
      title={{ en: "News & press", zh: "公司新闻与媒体报道" }}
      subtitle={{
        en: "Company announcements, standards, and selected media coverage.",
        zh: "公司公告、标准发布以及媒体报道精选。",
      }}
    >
      <MPSection title={{ en: "Company news", zh: "公司新闻" }}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {COMPANY_NEWS.map((a) => (
            <CompactCard key={a.url} article={a} />
          ))}
        </div>
      </MPSection>

      <MPSection title={{ en: "Media coverage", zh: "媒体报道" }}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {MEDIA_COVERAGE.map((a) => (
            <CompactCard key={a.url} article={a} />
          ))}
        </div>
      </MPSection>

      <MPSection title={{ en: "Press contact", zh: "媒体联系" }}>
        <p>
          {isZh ? "媒体咨询请联系:" : "For press inquiries, please contact "}
          <a href="mailto:info@fangcunleap.com" className="text-purple-700 hover:underline">
            info@fangcunleap.com
          </a>
          {isZh ? "。" : "."}
        </p>
      </MPSection>
    </MarketingPage>
  );
};

export default News;
