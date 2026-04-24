import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/articles";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Super Media — Independent NZ Media Intelligence",
  description:
    "Super is an independent NZ media consultancy. No network. No commissions. No conflicts. Senior media judgement from Ron Sneddon — 35 years of NZ experience.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Super Media",
  description: "Independent NZ media consultancy",
  url: "https://supermedia.co.nz",
  email: "ron@supermedia.co.nz",
  founder: { "@type": "Person", name: "Ron Sneddon" },
  areaServed: "New Zealand",
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
          <p className="eyebrow mb-5">Independent NZ Media Intelligence</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6">
            Most NZ media budgets are working harder for the agency than the
            advertiser.
          </h1>
          <p
            className="text-white text-lg max-w-2xl mb-10"
            style={{ opacity: 0.72, lineHeight: 1.65 }}
          >
            Super is an independent NZ media consultancy. No network. No
            commissions. No conflicts. Just senior judgement on where your money
            actually goes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/superscan" className="btn-primary">
              Run your Superscan →
            </Link>
            <a href="#superscan" className="btn-outline-white">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ─── Section 2: The Problem ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                num: "01",
                heading: "Your agency has deals you don't know about.",
                body: "Volume rebates and platform relationships mean recommended buys aren't always the best buys for you.",
              },
              {
                num: "02",
                heading:
                  "The team on your account isn't the team that pitched you.",
                body: "Most agency relationships are sold by senior people and serviced by juniors.",
              },
              {
                num: "03",
                heading: "You're probably paying for reach you're not getting.",
                body: "Audience assumptions drive most media plans — and most assumptions are wrong. Superscan finds out in 90 seconds.",
              },
            ].map(({ num, heading, body }) => (
              <div key={num}>
                <p className="text-orange text-2xl font-bold mb-4">{num}</p>
                <h2 className="text-navy text-xl font-bold mb-3 leading-snug">
                  {heading}
                </h2>
                <p className="text-body text-base">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Differentiators ─── */}
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
                body: "When you work with Super, you work with Ron — 35 years of NZ media experience, applied directly to your account.",
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

      {/* ─── Section 4: Superscan Feature Block ─── */}
      <section id="superscan" className="bg-navy py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Superscan</p>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                Your 90 Second Media Review
              </h2>
              <p className="text-white/75 text-lg mb-8" style={{ lineHeight: 1.65 }}>
                Drop in your current media mix. Superscan reads it and tells you
                where the risk is, where the opportunity is, and one question
                worth asking your agency. Independent. Instant. Free.
              </p>
              <Link href="/superscan" className="btn-primary mb-8 inline-flex">
                Start your scan →
              </Link>
              <p className="text-white/50 text-sm">
                Trusted by NZ marketers across retail, FMCG, finance, and
                property.
              </p>
            </div>

            {/* Stylised results preview */}
            <div className="bg-white/5 border border-white/10 rounded p-6 shadow-lg">
              <p className="text-white/50 text-xs uppercase tracking-eyebrow mb-4">
                Sample Superscan Output
              </p>
              <BarChartMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 5: About Ron ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square max-w-md">
              <Image
                src="/assets/headshot-ron.png"
                alt="Ron Sneddon, founder of Super Media"
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">The person behind the advice</p>
              <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">
                Ron Sneddon
              </h2>
              <p className="text-body mb-4">
                Ron has spent 35 years inside NZ media — as a buyer, a seller,
                an agency owner, and now as an independent consultant. He has
                sat on both sides of every deal, which is why he understands
                exactly where the conflicts of interest live.
              </p>
              <p className="text-body mb-8">
                Super was founded on a single conviction: that most NZ
                advertisers deserve access to the kind of senior, unconflicted
                media thinking that only the largest corporates can usually
                afford. Superscan is that thinking, automated.
              </p>
              <Link
                href="/about"
                className="text-orange font-semibold hover:text-orange-dark transition-colors"
              >
                Ron&apos;s full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 6: Social Proof ─── */}
      <section className="bg-grey-light py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote>
              <p className="text-navy text-xl md:text-2xl font-medium mb-6" style={{ lineHeight: 1.5 }}>
                &ldquo;We reduced our annual media spend by 22% in six months
                without any measurable drop in reach. I wish we&apos;d found
                Ron three years earlier.&rdquo;
              </p>
              <footer className="text-grey-dark text-sm">
                — Marketing Director, NZ Retail{" "}
                <span className="italic">(name withheld on request)</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Thinking Preview ─── */}
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
            Not sure if Super is right for you?
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
