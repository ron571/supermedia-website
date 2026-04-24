import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/articles";
import NewsletterForm from "@/components/NewsletterForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "The Super view on NZ media — independent analysis on media buying, agency models, digital display, and how AI is changing the industry.",
  alternates: { canonical: "/thinking" },
};

export default function ThinkingPage() {
  const articles = getArticles();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mb-4">
            The Super view on NZ media
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            Direct, independent analysis — not opinion dressed up as expertise.
          </p>
        </div>
      </section>

      {/* ─── Article List ─── */}
      <section className="bg-white py-12 lg:py-20">
        <div className="section-container">
          <ol className="divide-y divide-grey-mid" aria-label="Articles">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/thinking/${article.slug}`}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 py-7 group hover:bg-grey-light -mx-4 px-4 rounded transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="eyebrow">{article.tag}</span>
                      <span className="text-grey-dark text-xs">{article.date}</span>
                    </div>
                    <h2 className="text-navy text-xl font-bold group-hover:text-orange transition-colors mb-1 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-body text-sm line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 sm:pl-8 sm:pt-0.5">
                    <span className="text-grey-dark text-xs whitespace-nowrap">
                      {article.readTime}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── Newsletter CTA ─── */}
      <section className="bg-grey-light py-16">
        <div className="section-container max-w-xl mx-auto text-center">
          <p className="eyebrow mb-3">Stay sharp</p>
          <h2 className="text-navy text-2xl font-bold mb-3">
            Get the Super view in your inbox
          </h2>
          <p className="text-body mb-6">
            Occasional notes on NZ media. No fluff, no sales emails.
          </p>
          <NewsletterForm className="max-w-sm mx-auto" />
        </div>
      </section>
    </>
  );
}
