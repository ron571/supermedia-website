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
          <p className="text-white/70 text-xl max-w-2xl" style={{ lineHeight: 1.65 }}>
            What you should expect to pay — across every major channel in the
            New Zealand market. Based on 35 years of independent NZ media
            buying experience.
          </p>
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
