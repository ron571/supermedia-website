import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, getArticles } from "@/lib/articles";

interface Props {
  params: { slug: string };
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/thinking/${article.slug}` },
  };
}

function renderBody(body: string) {
  const paragraphs = body.split("\n\n");
  return paragraphs.map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      return (
        <h3 key={i} className="text-navy text-xl font-bold mt-8 mb-3">
          {para.replace(/\*\*/g, "")}
        </h3>
      );
    }
    // Inline bold
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-body mb-5" style={{ lineHeight: 1.7 }}>
        {parts.map((part, j) =>
          part.startsWith("**") ? (
            <strong key={j} className="font-semibold text-navy">
              {part.replace(/\*\*/g, "")}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact";

  return (
    <>
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

              {renderBody(article.body)}

              {/* End of article CTA */}
              <div className="mt-12 pt-8 border-t border-grey-mid space-y-8">
                {/* Newsletter */}
                <div className="bg-grey-light rounded p-6">
                  <p className="eyebrow mb-2">Stay sharp</p>
                  <p className="text-navy font-semibold mb-4">
                    Get the Super view in your inbox
                  </p>
                  <form
                    className="flex gap-2"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
                    />
                    <button type="submit" className="btn-primary text-sm py-2">
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Superscan CTA */}
                <div className="bg-navy rounded p-6">
                  <p className="eyebrow mb-2">Superscan</p>
                  <p className="text-white font-semibold mb-4">
                    Run your 90-second media review
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
                <div className="bg-navy rounded p-5">
                  <p className="eyebrow mb-2 text-xs">Superscan</p>
                  <p className="text-white text-sm mb-3">
                    90-second independent media review.
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
