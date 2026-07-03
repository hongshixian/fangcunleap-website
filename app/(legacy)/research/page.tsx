'use client';

import { useEffect } from "react";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";
import { MarketingFooter } from "@/components/legacy/MarketingPage";
import SiteHeader from "@/components/legacy/SiteHeader";
import { PAPERS, PAPER_IMAGES, type Paper } from "./papers_data";

// Company team members whose names should be bolded
const TARGET_AUTHORS = ["Wei Xu", "Yinpeng Dong", "Rongwu Xu", "Yu Wang", "Xiaojian Li"];

// Helper function to format authors with target names bolded
function formatAuthors(authorsStr: string): JSX.Element[] {
  const authors = authorsStr.split(/;\s*/);
  return authors.map((author, idx) => {
    const isBold = TARGET_AUTHORS.includes(author.trim());
    return (
      <span key={idx}>
        {isBold ? <strong>{author}</strong> : author}
        {idx < authors.length - 1 && '; '}
      </span>
    );
  });
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
            ? "方寸跃迁团队成员在国际顶级会议上发表的 AI 安全研究成果。"
            : "AI safety research from Fangcun Leap team members published at top-tier international conferences."}
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
                            href={paper.paperURL || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl hover:border-purple-300 hover:z-50 transition-all pointer-events-auto ${isLeft ? 'mr-4' : 'ml-4'} ${paper.paperURL ? 'cursor-pointer' : 'cursor-default'}`}
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
