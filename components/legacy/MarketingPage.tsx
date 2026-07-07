"use client"

import { useEffect, ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";
import SiteHeader from "@/components/legacy/SiteHeader";
import { FooterView } from "@/components/site/footer";

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
      } bg-secondary/40 min-h-screen text-gray-800`}
    >
      {/* soft halos */}

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
// 子页页脚：复用首页的 FooterView（保证与首页外观一致），语言取自 legacy context。
export const MarketingFooter = () => {
  const { lang } = useLanguage();
  return <FooterView lang={lang} />;
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
