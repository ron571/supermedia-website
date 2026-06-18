import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NZ Media Rate Benchmarks 2026 — What You Should Expect to Pay",
  description:
    "Independent benchmarks for NZ media rates across TV, radio, digital display, programmatic, social, search, and out of home. Based on 35 years of NZ media buying experience.",
  alternates: { canonical: "/resources/nz-media-rates" },
};

const channels = [
  {
    name: "Television (linear + BVOD)",
    rows: [
      {
        label: "Prime time 30s spot (TVNZ1 / Three)",
        benchmark: "$8,000–$22,000 per spot",
        notes: "Varies significantly by programme. Sport, news, and reality premium-priced.",
      },
      {
        label: "Daytime 30s spot",
        benchmark: "$1,500–$5,000 per spot",
        notes: "Lower viewership but useful for certain demographics (e.g. retired, home-based).",
      },
      {
        label: "Typical TV CPM (cost per thousand)",
        benchmark: "$18–$45 CPM",
        notes: "Benchmarks vary by daypart and network. Ask your agency for their buying CPM, not the rate card.",
      },
      {
        label: "BVOD (TVNZ+ / ThreeNow)",
        benchmark: "$25–$60 CPM",
        notes: "Higher CPM than linear but better targeting and completion rates. Growing rapidly.",
      },
    ],
    watchFor: "TV is the most rebate-affected channel in NZ. Agency recommendations to weight TV heavily deserve extra scrutiny. Ask for the buying CPM separately from any packages.",
  },
  {
    name: "Radio / Audio",
    rows: [
      {
        label: "30s spot, major Auckland FM (prime)",
        benchmark: "$800–$2,500 per spot",
        notes: "Breakfast and drive are premium. Network buys across multiple markets are negotiable.",
      },
      {
        label: "30s spot, secondary markets (Wellington, Christchurch)",
        benchmark: "$400–$1,200 per spot",
        notes: "Rates vary by station. Smaller markets are often underutilised and well-priced.",
      },
      {
        label: "Network radio package (national reach)",
        benchmark: "$15,000–$60,000/month",
        notes: "Depends on station group, frequency, and daypart mix. Negotiate total reach points, not just spots.",
      },
      {
        label: "Digital audio (Spotify, iHeart, podcasts)",
        benchmark: "$20–$45 CPM",
        notes: "Exact targeting, no duplication waste. Underused by NZ advertisers relative to reach potential.",
      },
    ],
    watchFor: "Radio buying terms often haven't been renegotiated for years on retained accounts. If your agency has been buying the same stations for 2+ years without re-tendering, the rates are likely above market.",
  },
  {
    name: "Digital Display / Programmatic",
    rows: [
      {
        label: "Standard display, NZ open market",
        benchmark: "$8–$18 CPM",
        notes: "What a well-run DSP should achieve for standard NZ inventory. Rates above $25 without premium justification are a flag.",
      },
      {
        label: "Premium NZ publisher inventory (Stuff, NZH, NZME)",
        benchmark: "$25–$55 CPM",
        notes: "Direct buys with premium publishers command higher rates. Ensure audience delivery is guaranteed.",
      },
      {
        label: "Programmatic (through agency trading desk)",
        benchmark: "$15–$40 CPM (all-in)",
        notes: "The 'all-in' rate should include all tech fees. Ask for the media cost separate from fees — they should not exceed 30% of total.",
      },
      {
        label: "Native / sponsored content",
        benchmark: "$40–$80 CPM",
        notes: "Higher cost but higher engagement. Measure against actual engagement, not just impressions.",
      },
    ],
    watchFor: "Digital display is the most opaque part of most media budgets. Insist on a full fee disclosure: media cost, DSP fee, data cost, verification, and agency margin itemised separately.",
  },
  {
    name: "Social Media (Meta / LinkedIn / TikTok)",
    rows: [
      {
        label: "Meta (Facebook/Instagram) CPM — NZ",
        benchmark: "$8–$22 CPM",
        notes: "Highly variable by audience, creative format, and time of year. Q4 significantly more expensive.",
      },
      {
        label: "Meta CPC (cost per click)",
        benchmark: "$0.80–$3.50",
        notes: "E-commerce and retail skew lower; financial services and B2B skew higher.",
      },
      {
        label: "LinkedIn CPM — NZ B2B",
        benchmark: "$30–$70 CPM",
        notes: "Expensive but highly targeted for professional audiences. Justified for B2B with clear ICP.",
      },
      {
        label: "TikTok CPM — NZ",
        benchmark: "$10–$25 CPM",
        notes: "Growing fast. Cost-effective for under-35 audiences. Measurement still maturing.",
      },
    ],
    watchFor: "Social platforms are self-serve — you can verify most of these costs yourself in Ads Manager. If your agency's reported CPM is materially above platform data, ask for the raw account access.",
  },
  {
    name: "Search (Google / Bing)",
    rows: [
      {
        label: "Google Search CPC — general services",
        benchmark: "$1.50–$6.00",
        notes: "Varies enormously by keyword competitiveness. Broad match keywords are often inefficient.",
      },
      {
        label: "Google Search CPC — competitive verticals (legal, finance, insurance)",
        benchmark: "$8–$35+",
        notes: "Highest-intent, highest-cost. Negative keyword management is critical at these prices.",
      },
      {
        label: "Google Shopping CPC — retail",
        benchmark: "$0.40–$2.00",
        notes: "Usually lower CPC than text ads. Feed quality is the primary lever for performance.",
      },
      {
        label: "Search management fee (agency)",
        benchmark: "10–20% of spend, or $800–$3,000/month flat",
        notes: "Flat fee is usually better value for stable accounts. Percentage-of-spend creates an incentive to increase spend regardless of return.",
      },
    ],
    watchFor: "Search is the most measurable channel — if your agency can't show cost per lead or cost per sale (not just CPC and CTR), push for it. Search reporting should always connect to business outcomes.",
  },
  {
    name: "Out of Home (OOH)",
    rows: [
      {
        label: "Static billboard — Auckland premium site (monthly)",
        benchmark: "$3,000–$9,000/month",
        notes: "Motorway and CBD sites at the top of range. Regional sites significantly cheaper.",
      },
      {
        label: "Digital OOH (DOOH) — Auckland/Wellington",
        benchmark: "$800–$3,500/week per panel",
        notes: "Programmatic DOOH allows shorter flights and daypart targeting. Increasingly accessible for mid-size budgets.",
      },
      {
        label: "Bus/transit advertising — major cities",
        benchmark: "$500–$2,500/month per unit",
        notes: "Full wraps at top of range. Good for local/geographic reach.",
      },
    ],
    watchFor: "OOH is difficult to independently verify. Ask for audience measurement data (eye-tracking studies, traffic counts) specific to the sites you're buying, not category averages.",
  },
  {
    name: "Print (Newspaper / Magazine)",
    rows: [
      {
        label: "Full page, NZ Herald (weekday)",
        benchmark: "$18,000–$35,000",
        notes: "Rates negotiable on volume. Print readership declining — ensure the audience justifies the cost.",
      },
      {
        label: "Full page, regional newspaper",
        benchmark: "$2,000–$8,000",
        notes: "Good value for local businesses. Audience skews older and higher income.",
      },
      {
        label: "Full page, consumer magazine (e.g. NZ Woman's Weekly)",
        benchmark: "$10,000–$18,000",
        notes: "Long lead times (4–8 weeks). Strong for brand-building in relevant lifestyle categories.",
      },
    ],
    watchFor: "Print has the longest purchase lead times of any medium. Ensure you're buying based on verified circulation, not claimed reach. Ask for the most recent ABC audit figure.",
  },
  {
    name: "Cinema",
    rows: [
      {
        label: "30s spot, national cinema network (Event/Reading)",
        benchmark: "$12,000–$28,000 per week",
        notes: "Rates based on national footprint. Regional-only buys are significantly cheaper and often underutilised.",
      },
      {
        label: "CPM, cinema audience",
        benchmark: "$35–$65 CPM",
        notes: "High-attention, captive environment. Effective CPM is often better than headline figure suggests.",
      },
      {
        label: "Branded content / pre-show sponsorship",
        benchmark: "$15,000–$50,000",
        notes: "Premium positions around major releases. Lead times of 6–10 weeks required.",
      },
    ],
    watchFor: "Cinema is one of the few channels with genuine captive attention. The CPM looks high but the attention quality is strong — compare on attention-adjusted CPM, not raw cost. Avoid booking against weak release schedules.",
  },
  {
    name: "Influencer / Content Creator",
    rows: [
      {
        label: "Micro-influencer (10k–50k NZ followers), single post",
        benchmark: "$300–$1,500 per post",
        notes: "High engagement rates relative to cost. Authenticity is the primary value — brief loosely, not tightly.",
      },
      {
        label: "Mid-tier influencer (50k–200k NZ followers), single post",
        benchmark: "$1,500–$6,000 per post",
        notes: "Stronger reach, lower engagement rate. Negotiate exclusivity periods for competitive categories.",
      },
      {
        label: "Top-tier NZ creator (200k+ followers), campaign",
        benchmark: "$8,000–$30,000+ per campaign",
        notes: "Includes content production value. Ensure usage rights for paid amplification are included in the contract.",
      },
      {
        label: "Agency management fee (influencer campaign)",
        benchmark: "15–25% of talent spend",
        notes: "Covers talent sourcing, briefing, and reporting. DIY is possible for small programmes; agency adds value at scale.",
      },
    ],
    watchFor: "Follower counts mean nothing without engagement rate and audience authenticity checks. Always request a media kit with engagement data, and use a tool like HypeAuditor to verify NZ audience composition before committing.",
  },
];

export default function NZMediaRatesPage() {
  return (
    <>
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
              Last updated: June 2026. Next review: June 2027.
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
