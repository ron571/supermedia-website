import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NZ Media Audience Data & Rate Benchmarks",
  description:
    "Independent NZ media audience data and rate benchmarks. GfK, Nielsen, Roy Morgan across radio, TV, digital, outdoor and press. Free, no registration required.",
  alternates: { canonical: "/resources" },
};

const resources = [
  {
    href: "/resources/nz-radio-ratings",
    title: "NZ Radio Ratings",
    description: "GfK S1 2026 data by network (NZME vs Mediaworks). Auckland and national audiences, demographic breakdowns, and fact-checks on what the networks claim.",
    tags: ["GfK", "NZME", "Mediaworks", "Auckland"],
    updated: "June 2026",
  },
  {
    href: "/resources/nz-tv-ratings",
    title: "NZ Television Ratings",
    description: "Nielsen TAM 2025/26 linear TV channel audiences. Weekly reach by channel, BVOD growth, demographic viewing data, and ThinkTV claim fact-checks.",
    tags: ["Nielsen TAM", "TVNZ", "Three", "BVOD"],
    updated: "June 2026",
  },
  {
    href: "/resources/nz-press-readership",
    title: "NZ Press Readership",
    description: "Nielsen CMI and Roy Morgan data for NZ newspapers and magazines. Auckland newspapers, national magazine readership — readership not circulation.",
    tags: ["Nielsen CMI", "Roy Morgan", "NZ Herald", "Magazines"],
    updated: "June 2026",
  },
  {
    href: "/resources/nz-digital-audiences",
    title: "NZ Digital Audiences",
    description: "Top 10 NZ websites and social platforms by monthly reach — with interactive demographic filters matching the Audience Reality Check. Digital news fact-checks.",
    tags: ["Nielsen Digital", "SemRush", "Social Media", "Demographic filters"],
    updated: "June 2026",
  },
  {
    href: "/resources/nz-outdoor-media",
    title: "NZ Outdoor Advertising",
    description: "OOH companies ranked by site count and impressions — national and Auckland. Digital billboards, static boards, buses, bus shelters, and street posters.",
    tags: ["QMS", "LUMO", "oOh!media", "DOOH", "Auckland"],
    updated: "June 2026",
  },
  {
    href: "/resources/nz-cinema-advertising",
    title: "NZ Cinema Advertising",
    description: "Val Morgan network data — 350+ screens across Hoyts, Reading, Event and independents. Audience profiles, buying formats (MAP, Follow Film, Roadblock), and fact-checks on cinema seller claims.",
    tags: ["Val Morgan", "Hoyts", "Reading", "Cinema"],
    updated: "June 2026",
  },
  {
    href: "/resources/nz-influencer-marketing",
    title: "NZ Influencer Marketing",
    description: "Creator tier definitions and NZ rate benchmarks by platform. What to verify before signing a creator, platform-by-platform guide, and fact-checks on industry claims.",
    tags: ["Instagram", "TikTok", "YouTube", "Creator tiers"],
    updated: "June 2026",
  },
  {
    href: "/resources/nz-media-rates",
    title: "NZ Media Rate Benchmarks",
    description: "What you should expect to pay across TV, radio, digital, programmatic, social, search, and outdoor. Based on 35 years of NZ media buying experience.",
    tags: ["CPM", "Rate card", "Benchmarks", "All media"],
    updated: "2026",
  },
];

const tools = [
  {
    href: "/audience-reality-check",
    title: "Audience Reality Check",
    description: "Filter NZ audience data by age, gender, income, education, occupation, region, and more. A practical tool for media planning and briefing.",
    badge: "Gated tool",
  },
  {
    href: "/superscan",
    title: "Superscan",
    description: "Audit your media plan. Paste in your schedule and get an independent read on whether you're reaching the right people at the right price.",
    badge: "Free tool",
  },
  {
    href: "/social-scan",
    title: "Social Scan",
    description: "Audit your digital footprint in 30 seconds. Get an independent read on how your brand shows up across social platforms — what's working, what's missing, and what to fix.",
    badge: "Free tool",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-24 lg:py-36">
          <p className="eyebrow mb-5">Independent NZ Media Data</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6">
            What NZ media actually delivers — not what sellers claim.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mb-12" style={{ lineHeight: 1.65 }}>
            GfK, Nielsen, Roy Morgan and SemRush data across every major NZ media channel. Fact-checked against publisher and supplier claims. Updated 2026.
          </p>
          {/* Quick stat row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {[
              { stat: "8", label: "media channels covered" },
              { stat: "4+", label: "independent data sources" },
              { stat: "35yrs", label: "NZ market experience" },
              { stat: "Free", label: "no registration required" },
            ].map(({ stat, label }) => (
              <div key={label} className="border border-white/20 rounded p-4">
                <div className="text-white text-2xl font-bold mb-1">{stat}</div>
                <div className="text-white/60 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caveat */}
      <section className="bg-white border-b border-grey-mid py-4">
        <div className="section-container">
          <p className="text-xs text-grey-dark leading-relaxed">
            <strong className="text-navy">About this data:</strong> All figures on these pages are sourced from independent audience research surveys (GfK, Nielsen CMI, Roy Morgan, Nielsen TAM, Nielsen Digital Ratings) and publicly reported publisher/operator figures. Publisher-reported figures and independent survey data use different methodologies — where they diverge, it&apos;s noted. Data should be verified with your media agency or the relevant research organisation before any investment decision.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-8">Audience & market data</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group block bg-white border border-grey-mid rounded hover:border-navy hover:shadow-sm transition-all p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-navy text-lg group-hover:text-orange transition-colors leading-tight">{r.title}</h3>
                  <span className="text-grey-dark/50 group-hover:text-navy transition-colors ml-2 shrink-0 mt-0.5">→</span>
                </div>
                <p className="text-sm text-grey-dark leading-relaxed mb-4">{r.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-grey-light text-grey-dark rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="text-xs text-grey-dark/60">Updated {r.updated}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-8">Planning tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group block bg-white border border-grey-mid rounded hover:border-navy hover:shadow-sm transition-all p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-bold text-navy text-lg group-hover:text-orange transition-colors">{t.title}</h3>
                  <span className="text-xs px-2 py-0.5 bg-navy text-white rounded-full">{t.badge}</span>
                </div>
                <p className="text-sm text-grey-dark leading-relaxed">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="section-container text-center">
          <p className="text-white text-xl font-medium mb-6 max-w-xl mx-auto">
            Need help making sense of the data for your specific campaign?
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Ron →
          </Link>
        </div>
      </section>
    </>
  );
}
