import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/articles";


export const metadata: Metadata = {
  title: "Super Media — Independent NZ Media Consultancy",
  description:
    "Your next campaign can work harder with the right guidance. Super Media is an independent NZ media consultancy. Ron Sneddon has 35 years on both sides of the table — and knows exactly how to make your budget perform.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://supermedia.co.nz/#business",
      name: "Super Media",
      alternateName: "Super Media NZ",
      description:
        "Independent NZ media consultancy providing media strategy, media audits, programmatic buying, and retained advisory. No volume rebates, no agency conflicts. Founded by Ron Sneddon with 35 years of New Zealand media experience.",
      url: "https://supermedia.co.nz",
      email: "ron@supermedia.co.nz",
      logo: "https://supermedia.co.nz/assets/og-default.png",
      image: "https://supermedia.co.nz/assets/headshot-ron.png",
      founder: {
        "@type": "Person",
        "@id": "https://supermedia.co.nz/about#ron",
        name: "Ron Sneddon",
        jobTitle: "Founder & Independent Media Consultant",
        url: "https://supermedia.co.nz/about",
        sameAs: ["https://linkedin.com/in/ron-sneddon"],
      },
      areaServed: {
        "@type": "Country",
        name: "New Zealand",
      },
      knowsAbout: [
        "media planning",
        "media buying",
        "media audit",
        "programmatic advertising",
        "NZ media market",
        "media agency conflicts of interest",
        "volume rebates",
        "independent media consultancy",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Super Media Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Media Strategy & Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Media Audit & Review" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Programmatic Buying" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retained Advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Construction" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Strategy & Content" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://supermedia.co.nz/#website",
      url: "https://supermedia.co.nz",
      name: "Super Media",
      publisher: { "@id": "https://supermedia.co.nz/#business" },
    },
  ],
};

export default function HomePage() {
  const articles = getArticles().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Section 1: Hero ─── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-24 lg:py-36">
          <p className="eyebrow mb-5">Independent NZ Media Consultancy</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6">
            Straight answers. Smart Media strategy. Real results.
          </h1>
          <p
            className="text-white text-lg max-w-2xl mb-4"
            style={{ opacity: 0.72, lineHeight: 1.65 }}
          >
            Super Media has 35 years experience in buying and selling media. We know exactly how to Super charge your media budget — delivering real business results.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/superscan" className="btn-primary">
              Find out in 30 seconds if your media is working →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 2: The Problem ─── */}
      <section id="the-problem" className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-xl mb-12">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
              What usually happens
            </h2>
            <p className="text-body text-lg" style={{ lineHeight: 1.65 }}>
              Most NZ businesses who&apos;ve been burned by advertising describe
              the same experience. The details differ. The pattern doesn&apos;t.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                num: "01",
                heading: "The report looked good. The results didn\u2019t.",
                body: "Agencies measure what they can control — impressions, clicks, reach. Not whether your phone rang or your door opened. A good-looking report can hide a campaign that didn't work.",
              },
              {
                num: "02",
                heading: "You met the boss. You got the graduate.",
                body: "The pitch team and the service team are rarely the same people. Senior staff win the work. Junior staff run it. That gap is where your budget gets managed by someone who doesn't yet know what to question.",
              },
              {
                num: "03",
                heading: "The advice wasn\u2019t free of strings.",
                body: "Most agencies have financial relationships with the media they recommend. That doesn't make them dishonest — but it does mean their best recommendation and their most profitable recommendation aren't always the same thing.",
              },
            ].map(({ num, heading, body }) => (
              <div key={num}>
                <p className="text-orange text-2xl font-bold mb-4">{num}</p>
                <h3 className="text-navy text-xl font-bold mb-3 leading-snug">
                  {heading}
                </h3>
                <p className="text-body text-base">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Small Business Entry Point ─── */}
      <section className="bg-orange py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-white/80 text-sm font-bold uppercase tracking-eyebrow mb-4">
              You don&apos;t need a big budget to need independent advice
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-snug">
              Most of the businesses that come to Super are spending between
              $2,000 and $20,000 a month on advertising.
            </h2>
            <p className="text-white/85 text-lg mb-8" style={{ lineHeight: 1.65 }}>
              The Superscan tool was built specifically for this situation. It
              takes 30 seconds, costs nothing, and gives you an independent read
              on whether your current advertising makes sense — without a sales
              call, a contract, or any obligation.
            </p>
            <Link href="/superscan" className="inline-flex items-center gap-2 bg-white text-orange font-bold px-6 py-3 rounded hover:bg-grey-light transition-colors">
              Run your free Superscan →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Differentiators ─── */}
      <section className="bg-grey-light py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Super is different
            </h2>
            <p className="text-body text-lg" style={{ lineHeight: 1.65 }}>
              Not different as a positioning statement. Different by design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldIcon />,
                heading: "Independent by design",
                body: "No network relationships, no preferred supplier lists, no volume targets. Every recommendation is made on merit. Structurally rare in NZ.",
              },
              {
                icon: <PersonIcon />,
                heading: "Senior judgement, not junior execution",
                body: "When you work with Super Media you get a team with more than 30 years media experience applied directly to your account.",
              },
              {
                icon: <PulseIcon />,
                heading: "AI as a real tool, not a talking point",
                body: "Audience analysis in minutes. Continuous channel benchmarking. Every Superscan is a live AI analysis.",
              },
            ].map(({ icon, heading, body }) => (
              <div key={heading}>
                <div
                  className="w-11 h-11 bg-navy rounded flex items-center justify-center mb-5 text-white"
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <h3 className="text-navy text-xl font-bold mb-3">{heading}</h3>
                <p className="text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ─── Section 6: About Ron ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">The person behind the advice</p>
            <div className="flex items-start gap-6 mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src="/assets/headshot-ron.png"
                  alt="Ron Sneddon, founder of Super Media"
                  fill
                  className="object-cover rounded"
                  sizes="128px"
                />
              </div>
              <div>
                <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
                  Ron Sneddon
                </h2>
                <p className="text-body">
                  Ron spent 35 years inside NZ media — buying it, selling it,
                  and running an agency. He has sat at every table in this
                  industry and watched, from the inside, exactly how advertising
                  budgets get eroded. Super exists because he decided to stop
                  watching it happen.
                </p>
              </div>
            </div>
            <p className="text-body mb-8">
              When you work with Super, you&apos;re not getting a junior account
              manager following a process. You&apos;re getting someone who has
              seen every version of the sales pitch your current agency gave you
              — and knows what it looks like when the advice is shaped by
              someone else&apos;s interests.
            </p>
            <Link
              href="/about"
              className="text-orange font-semibold hover:text-orange-dark transition-colors"
            >
              Ron&apos;s full story →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Social Proof ─── */}
      <section className="bg-grey-light py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote>
              <p className="text-navy text-xl md:text-2xl font-medium mb-6" style={{ lineHeight: 1.5 }}>
                &ldquo;We&apos;d been with the same agency for three years and
                assumed the results were just what advertising looked like. Ron
                showed us in one conversation that we&apos;d been paying for
                reach we weren&apos;t getting. It was embarrassing how
                straightforward it was once someone independent looked at it.&rdquo;
              </p>
              <footer className="text-grey-dark text-sm">
                — Owner, Auckland professional services firm{" "}
                <span className="italic">(name withheld on request)</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── Section 8: Thinking Preview ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-navy text-3xl md:text-4xl font-bold">
              The Super view on NZ media
            </h2>
            <Link
              href="/thinking"
              className="text-orange font-semibold text-sm hover:text-orange-dark transition-colors hidden sm:block"
            >
              All thinking →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/thinking/${article.slug}`}
                className="group block border border-grey-mid rounded p-6 hover:shadow-md transition-shadow"
              >
                <p className="eyebrow mb-2">{article.tag}</p>
                <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-orange transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-body text-sm mb-4 line-clamp-2">
                  {article.description}
                </p>
                <p className="text-grey-dark text-xs">
                  {article.date} · {article.readTime}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              href="/thinking"
              className="text-orange font-semibold text-sm hover:text-orange-dark transition-colors"
            >
              All thinking →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 8: Final CTA ─── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="section-container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Find out why Super is right for you
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            That&apos;s what the first conversation is for. 30 minutes, no
            agenda, no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a call with Ron
            </a>
            <Link href="/superscan" className="btn-outline-white">
              Run Superscan first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── SVG Icons ─── */
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

/* ─── Bar Chart Mockup ─── */
function BarChartMockup() {
  const channels = [
    { label: "TV / BVOD", pct: 38, risk: true },
    { label: "Social", pct: 27, risk: false },
    { label: "Search", pct: 16, risk: false },
    { label: "Display", pct: 12, risk: true },
    { label: "OOH", pct: 7, risk: false },
  ];

  return (
    <div className="space-y-3">
      {channels.map(({ label, pct, risk }) => (
        <div key={label}>
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>{label}</span>
            <span className={risk ? "text-orange" : "text-white/60"}>{pct}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${pct}%`,
                backgroundColor: risk ? "#E8621A" : "rgba(255,255,255,0.35)",
              }}
            />
          </div>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs text-orange font-medium">⚠ Risk identified in 2 channels</p>
        <p className="text-xs text-white/50 mt-1">Run your scan for a personalised read →</p>
      </div>
    </div>
  );
}
