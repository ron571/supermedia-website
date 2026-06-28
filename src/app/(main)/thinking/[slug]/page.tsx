import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, getArticles, getRelatedArticles, type ArticleChartConfig } from "@/lib/articles";
import ArticleChart from "@/components/ArticleChart";
import NewsletterForm from "@/components/NewsletterForm";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/thinking/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      authors: ["Ron Sneddon"],
      images: [
        {
          url: "/api/og",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

function renderInline(text: string) {
  // Tokenise **bold** and [text](url)
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return tokens.map((token, j) => {
    if (token.startsWith("**")) {
      return (
        <strong key={j} className="font-semibold text-navy">
          {token.replace(/\*\*/g, "")}
        </strong>
      );
    }
    const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, linkText, href] = linkMatch;
      const isExternal = href.startsWith("http");
      return (
        <Link
          key={j}
          href={href}
          className="text-orange font-medium hover:text-orange-dark underline underline-offset-2"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {linkText}
        </Link>
      );
    }
    return token;
  });
}

function renderBody(body: string, charts?: ArticleChartConfig[]) {
  const paragraphs = body.split("\n\n");
  return paragraphs.map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      return (
        <h3 key={i} className="text-navy text-xl font-bold mt-8 mb-3">
          {para.replace(/\*\*/g, "")}
        </h3>
      );
    }
    const chartMatch = para.match(/^\[CHART:([^\]]+)\]$/);
    if (chartMatch && charts) {
      const chart = charts.find((c) => c.id === chartMatch[1]);
      if (chart) {
        return (
          <ArticleChart
            key={i}
            title={chart.title}
            source={chart.source}
            labels={chart.labels}
            datasets={chart.datasets}
            unit={chart.unit}
            max={chart.max}
            horizontal={chart.horizontal}
          />
        );
      }
    }
    return (
      <p key={i} className="text-body mb-5" style={{ lineHeight: 1.7 }}>
        {renderInline(para)}
      </p>
    );
  });
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  const relatedArticles = getRelatedArticles(article.relatedSlugs ?? []);

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact";

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.supermedia.co.nz";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/thinking/${article.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/thinking/${article.slug}`,
    },
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "en-NZ",
    keywords: article.tag,
    articleSection: article.tag,
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/api/og`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/about#ron`,
      name: "Ron Sneddon",
      url: `${BASE_URL}/about`,
      jobTitle: "Founder & Independent Media Consultant",
      description: "Independent NZ media consultant with 35 years of experience in the New Zealand advertising market.",
      sameAs: [
        "https://www.linkedin.com/in/ron-sneddon",
        "https://www.facebook.com/supermedialtd/",
      ],
      worksFor: {
        "@type": "Organization",
        "@id": `${BASE_URL}/#business`,
        name: "Super Media",
        url: BASE_URL,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#business`,
      name: "Super Media",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/api/og`,
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h3", "p"],
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${BASE_URL}/thinking`,
      name: "Super Media Thinking",
      publisher: { "@id": `${BASE_URL}/#business` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ─── Hero ─── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-16 lg:py-20 max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="eyebrow">{article.tag}</span>
            <span className="text-white/40 text-sm">{article.date}</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/40 text-sm">{article.readTime}</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-snug">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ─── Article body ─── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 max-w-4xl">
            {/* Body */}
            <article>
              {/* Author line */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-grey-mid">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-grey-mid">
                  <Image
                    src="/assets/headshot-ron.png"
                    alt="Ron Sneddon"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm">Ron Sneddon</p>
                  <p className="text-grey-dark text-xs">
                    {article.date} · {article.readTime}
                  </p>
                </div>
              </div>

              {/* Description lead */}
              <p className="text-navy text-xl mb-8" style={{ lineHeight: 1.65 }}>
                {article.description}
              </p>

              {renderBody(article.body, article.charts)}

              {/* End of article CTA */}
              <div className="mt-12 pt-8 border-t border-grey-mid space-y-8">
                {/* Newsletter */}
                <div className="bg-grey-light rounded p-6">
                  <p className="eyebrow mb-2">Stay sharp</p>
                  <p className="text-navy font-semibold mb-4">
                    Get the Super view in your inbox
                  </p>
                  <NewsletterForm />
                </div>

                {/* Superscan CTA */}
                <div className="bg-navy rounded p-6">
                  <p className="eyebrow mb-2">Superscan</p>
                  <p className="text-white font-semibold mb-4">
                    Run your 30-second media review
                  </p>
                  <Link href="/superscan" className="btn-primary text-sm">
                    Start your scan →
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="border border-grey-mid rounded p-5">
                  <p className="text-grey-dark text-xs uppercase tracking-eyebrow font-bold mb-3">
                    About Ron
                  </p>
                  <p className="text-body text-sm mb-3">
                    35 years of NZ media experience. Independent by design.
                  </p>
                  <Link
                    href="/about"
                    className="text-orange text-sm font-semibold hover:text-orange-dark"
                  >
                    Ron&apos;s story →
                  </Link>
                </div>
                <div className="border border-grey-mid rounded p-5">
                  <p className="text-grey-dark text-xs uppercase tracking-eyebrow font-bold mb-3">
                    NZ Media Rates
                  </p>
                  <p className="text-body text-sm mb-3">
                    What NZ advertisers should be paying — channel by channel.
                  </p>
                  <Link
                    href="/resources/nz-media-rates"
                    className="text-orange text-sm font-semibold hover:text-orange-dark"
                  >
                    View benchmarks →
                  </Link>
                </div>
                <div className="bg-navy rounded p-5">
                  <p className="eyebrow mb-2 text-xs">Superscan</p>
                  <p className="text-white text-sm mb-3">
                    30-second independent media review.
                  </p>
                  <Link href="/superscan" className="btn-primary text-sm py-2">
                    Run your scan →
                  </Link>
                </div>
                <div className="border border-grey-mid rounded p-5">
                  <p className="text-grey-dark text-xs uppercase tracking-eyebrow font-bold mb-3">
                    Book a call
                  </p>
                  <p className="text-body text-sm mb-3">
                    30 minutes. No agenda. No obligation.
                  </p>
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange text-sm font-semibold hover:text-orange-dark"
                  >
                    Book with Ron →
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Related reading */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 max-w-4xl">
              <h2 className="text-navy text-xl font-bold mb-5">Related reading</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/thinking/${rel.slug}`}
                    className="group border border-grey-mid rounded p-5 hover:border-orange transition-colors duration-150"
                  >
                    <span className="eyebrow text-xs mb-2 block">{rel.tag}</span>
                    <p className="text-navy font-semibold text-sm group-hover:text-orange transition-colors leading-snug">
                      {rel.title}
                    </p>
                    <p className="text-grey-dark text-xs mt-2">{rel.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-10">
            <Link
              href="/thinking"
              className="text-orange font-semibold text-sm hover:text-orange-dark"
            >
              ← All thinking
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
