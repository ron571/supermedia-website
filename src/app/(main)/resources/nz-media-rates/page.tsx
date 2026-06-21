import type { Metadata } from "next";
import Link from "next/link";
import ResourceSchema from "@/components/ResourceSchema";
import { dataInfo, channels } from "@/data/nz-media-rates";

export const metadata: Metadata = {
  title: "NZ Media Rate Benchmarks 2026 — What You Should Expect to Pay",
  description:
    "Independent benchmarks for NZ media rates across TV, radio, digital display, programmatic, social, search, and out of home. Based on 35 years of NZ media buying experience.",
  alternates: { canonical: "/resources/nz-media-rates" },
};


export default function NZMediaRatesPage() {
  return (
    <>
      <ResourceSchema slug="nz-media-rates" title="NZ Media Rate Benchmarks 2026 — What You Should Expect to Pay" description="Independent benchmarks for NZ media rates across TV, radio, digital display, programmatic, social, search, and out of home. Based on 35 years of NZ media buying experience." about="NZ media advertising rates and benchmarks" />
      {/* ─── Hero ─── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <p className="eyebrow mb-4">Resource</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mb-6">
            NZ Media Rate Benchmarks 2026
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-8" style={{ lineHeight: 1.65 }}>
            What you should expect to pay — across every major channel in the
            New Zealand market. Based on 35 years of independent NZ media
            buying experience.
          </p>
          <a
            href="/resources/nz-media-rates-2026.pdf"
            download
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-5 py-3 rounded transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download PDF guide
          </a>
        </div>
      </section>

      {/* ─── Preamble ─── */}
      <section className="bg-white py-12 lg:py-16 border-b border-grey-mid">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-navy text-2xl font-bold mb-4">How to use this guide</h2>
            <p className="text-body mb-4" style={{ lineHeight: 1.75 }}>
              These benchmarks reflect what a well-negotiated NZ media buy should cost in
              2026. They are independent estimates based on market experience — not
              supplied by any agency, media owner, or platform. Use them to sense-check
              what you&apos;re being charged.
            </p>
            <p className="text-body mb-4" style={{ lineHeight: 1.75 }}>
              Where your actual rates are significantly above these benchmarks,
              it&apos;s worth asking why. The answer may be legitimate — premium
              placement, guaranteed inventory, or a specific audience justification.
              But it should have an answer.
            </p>
            <p className="text-body" style={{ lineHeight: 1.75 }}>
              Each section includes a <span className="font-semibold text-orange">Watch for</span> note
              — the most common issues we find in that channel when auditing NZ media
              accounts.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Rate Tables ─── */}
      <section className="bg-grey-light py-16 lg:py-24">
        <div className="section-container">
          <div className="space-y-16">
            {channels.map((channel) => (
              <div key={channel.name}>
                <h2 className="text-navy text-2xl font-bold mb-6">{channel.name}</h2>
                <div className="overflow-x-auto rounded border border-grey-mid">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="text-left px-5 py-3 font-semibold w-1/3">Format / Metric</th>
                        <th className="text-left px-5 py-3 font-semibold w-1/4">Benchmark Range</th>
                        <th className="text-left px-5 py-3 font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {channel.rows.map((row, i) => (
                        <tr
                          key={row.label}
                          className={i % 2 === 0 ? "bg-white" : "bg-grey-light/60"}
                        >
                          <td className="px-5 py-4 font-medium text-navy align-top">{row.label}</td>
                          <td className="px-5 py-4 text-orange font-bold align-top whitespace-nowrap">{row.benchmark}</td>
                          <td className="px-5 py-4 text-body align-top">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-orange/8 border border-orange/20 rounded">
                  <p className="text-sm text-body">
                    <span className="font-semibold text-orange">Watch for: </span>
                    {channel.watchFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Disclaimer ─── */}
      <section className="bg-white py-12 border-b border-grey-mid">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-navy text-xl font-bold mb-3">A note on these figures</h2>
            <p className="text-body text-sm mb-3" style={{ lineHeight: 1.75 }}>
              These are independent benchmarks, not rate cards. Actual costs vary based
              on buying volume, audience specifications, seasonality, and negotiating
              position. A large agency buying at scale will achieve different rates than
              a small business buying direct.
            </p>
            <p className="text-body text-sm mb-3" style={{ lineHeight: 1.75 }}>
              These benchmarks are updated annually. If you&apos;re seeing rates
              significantly outside these ranges — in either direction — we&apos;d be
              interested to hear about it.
            </p>
            <p className="text-body text-sm" style={{ lineHeight: 1.75 }}>
              Last updated: {new Date(dataInfo.lastUpdated).toLocaleDateString("en-NZ", { month: "long", year: "numeric" })}. Next review: June 2027.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Related Reading ─── */}
      <section className="bg-white py-12 lg:py-16 border-b border-grey-mid">
        <div className="section-container">
          <h2 className="text-navy text-xl font-bold mb-6">Related reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            <Link
              href="/thinking/what-volume-rebates-actually-mean-for-your-media-budget"
              className="group border border-grey-mid rounded p-5 hover:border-orange transition-colors duration-150"
            >
              <span className="text-orange text-xs font-bold uppercase tracking-wider mb-2 block">Media Buying</span>
              <p className="text-navy font-semibold text-sm group-hover:text-orange transition-colors leading-snug">
                What volume rebates actually mean for your media budget
              </p>
              <p className="text-grey-dark text-xs mt-2">5 min read</p>
            </Link>
            <Link
              href="/thinking/why-nz-advertisers-pay-too-much-for-digital-display"
              className="group border border-grey-mid rounded p-5 hover:border-orange transition-colors duration-150"
            >
              <span className="text-orange text-xs font-bold uppercase tracking-wider mb-2 block">Digital</span>
              <p className="text-navy font-semibold text-sm group-hover:text-orange transition-colors leading-snug">
                Why NZ advertisers pay too much for digital display
              </p>
              <p className="text-grey-dark text-xs mt-2">5 min read</p>
            </Link>
            <Link
              href="/thinking/how-to-read-a-media-plan-if-you-didnt-go-to-media-school"
              className="group border border-grey-mid rounded p-5 hover:border-orange transition-colors duration-150"
            >
              <span className="text-orange text-xs font-bold uppercase tracking-wider mb-2 block">Media Planning</span>
              <p className="text-navy font-semibold text-sm group-hover:text-orange transition-colors leading-snug">
                How to read a media plan if you didn&apos;t go to media school
              </p>
              <p className="text-grey-dark text-xs mt-2">6 min read</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Share / Cite ─── */}
      <section className="bg-grey-light py-12 border-b border-grey-mid">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-navy text-xl font-bold mb-3">Share or cite this guide</h2>
            <p className="text-body text-sm mb-5" style={{ lineHeight: 1.75 }}>
              This resource is free to reference and share. If you&apos;re using these benchmarks in a report or presentation, suggested citation:
            </p>
            <div className="bg-white border border-grey-mid rounded p-4 font-mono text-sm text-body mb-6" style={{ lineHeight: 1.65 }}>
              Sneddon, R. (2026). <em>NZ Media Rate Benchmarks 2026.</em> Super Media.
              Retrieved from https://supermedia.co.nz/resources/nz-media-rates
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fsupermedia.co.nz%2Fresources%2Fnz-media-rates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0A66C2" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Share on LinkedIn
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsupermedia.co.nz%2Fresources%2Fnz-media-rates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1877F2" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Share on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="section-container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Want to know how your current rates compare?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            A media audit benchmarks your actual spend against the market —
            line by line. Most audits identify at least one material discrepancy
            in the first session.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Media Audit →
            </Link>
            <Link href="/superscan" className="btn-outline-white">
              Start with Superscan (free) →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
