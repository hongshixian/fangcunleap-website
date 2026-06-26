"use client"

import { useEffect, ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";
import SiteHeader from "@/components/legacy/SiteHeader";

type Bilingual = { en: string; zh: string };

interface MarketingPageProps {
  eyebrow?: Bilingual;
  title: Bilingual;
  subtitle?: Bilingual;
  children?: ReactNode;
}

const FOOTER_COLS: { titleKey: string; links: { key: string; to: string }[] }[] = [
  {
    titleKey: "footer.product",
    links: [
      { key: "footer.solutions", to: "/solutions" },
      { key: "footer.pricing", to: "/pricing" },
      { key: "footer.documentation", to: "/quick-start" },
      { key: "footer.changelog", to: "/changelog" },
    ],
  },
  {
    titleKey: "footer.company",
    links: [
      { key: "footer.about", to: "/about" },
      { key: "footer.careers", to: "/careers" },
      { key: "footer.blog", to: "/blog" },
      { key: "footer.press", to: "/news" },
    ],
  },
];

const MarketingPage = ({ eyebrow, title, subtitle, children }: MarketingPageProps) => {
  const { lang, t } = useLanguage();
  const isZh = lang === "zh";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {eyebrow && (
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-purple-700">
            <span className="inline-block w-5 h-px bg-purple-400" />
            {eyebrow[lang]}
          </p>
        )}
        <h1 className="mt-5 text-3xl md:text-[56px] leading-[1.05] tracking-tight font-light text-gray-900">
          {title[lang]}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-gray-600">
            {subtitle[lang]}
          </p>
        )}
      </section>

      {/* Body */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        {children}
      </main>

      <MarketingFooter />
    </div>
  );
};

export default MarketingPage;


// Reusable footer with the 3-column site map (Product / Company /
// Legal) + ICP / 公网安备 footnote. Drops into any page that wants
// the marketing-grade footer (blog list, blog articles, etc.).
export const MarketingFooter = () => {
  const { lang, t } = useLanguage();
  const isZh = lang === "zh";
  return (
    <footer className="relative z-10 border-t border-gray-200 bg-white/60 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-gray-900">方寸跃迁</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-gray-500">{t("footer.desc")}</p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.titleKey}>
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">{t(col.titleKey)}</h4>
              <div className="mt-3 space-y-2.5">
                {col.links.map((link) => (
                  <Link key={link.key} href={link.to} className="block text-sm text-gray-600 transition-colors hover:text-purple-700">
                    {t(link.key)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6">
          <span className="text-xs text-gray-500">{t("footer.rights")}</span>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-gray-400">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">冀ICP备2026005892号</a>
          <span>|</span>
          <a href="https://www.beian.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">冀公网安备13310202000276号</a>
        </div>
      </div>
    </footer>
  );
};

// Reusable section wrapper for marketing sub-pages.
export const MPSection = ({
  title,
  children,
}: {
  title: Bilingual;
  children: ReactNode;
}) => {
  const { lang } = useLanguage();
  return (
    <section className="mt-16">
      <h2 className="text-[28px] leading-tight tracking-tight font-semibold text-gray-900">
        {title[lang]}
      </h2>
      <div className="mt-5 text-[15px] leading-relaxed text-gray-700 space-y-4">
        {children}
      </div>
    </section>
  );
};
