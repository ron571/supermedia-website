import type { Metadata } from "next";
import Link from "next/link";
import AudienceFilters from "./AudienceFilters";
import ResourceSchema from "@/components/ResourceSchema";
import { websites, digitalNewsSites } from "@/data/nz-digital-audiences";

export const metadata: Metadata = {
  title: "NZ Digital Audiences 2026 — Top Websites, Social Media & News Sites",
  description:
    "Nielsen and SemRush data — top NZ websites and social platforms by monthly reach, filtered by age and gender. Plus digital news audience fact-checks on publisher claims.",
  alternates: { canonical: "/resources/nz-digital-audiences" },
};

// Derive the overall top-10 table from the data file (sorted by total monthly visits)
const websitesOverall = [...websites]
  .sort((a, b) => b.monthlyVisits - a.monthlyVisits)
  .map((site, i) => ({ rank: i + 1, ...site }));

const flagStyles = {
  green: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", icon: "✓" },
  orange: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", icon: "⚠" },
};

function IndexBadge({ index }: { index: number }) {
  if (index >= 130) return <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">Strong ↑ {index}</span>;
  if (index >= 115) return <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 rounded px-1.5 py-0.5">↑ {index}</span>;
  if (index <= 60) return <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded px-1.5 py-0.5">Low ↓ {index}</span>;
  if (index <= 80) return <span className="text-xs font-semibold text-amber-700 bg-amber-50 rounded px-1.5 py-0.5">↓ {index}</span>;
  return <span className="text-xs text-grey-dark bg-grey-light rounded px-1.5 py-0.5">Avg {index}</span>;
}

export default function NZDigitalAudiencesPage() {
  return (
    <>
      <ResourceSchema slug="nz-digital-audiences" title="NZ Digital Audiences 2026 — Top Websites, Social Media & News Sites" description="Nielsen and SemRush data — top NZ websites and social platforms by monthly reach, filtered by age and gender. Plus digital news audience fact-checks on publisher claims." about="NZ digital audiences and website traffic" />
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/resources" className="text-white/50 hover:text-white text-sm transition-colors">Resources</Link>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-white/70 text-sm">NZ Digital Audiences</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mb-4">
            NZ Digital Audiences
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{ lineHeight: 1.65 }}>
            Nielsen and SemRush data — top NZ websites and social platforms by monthly reach, filtered by age and gender. Plus digital news audience fact-checks.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-white/50">
            <span>Sources: Nielsen Digital Ratings · SemRush April 2026 · NapoleonCat December 2025</span>
            <span>·</span>
            <span>Updated June 2026</span>
          </div>
        </div>
      </section>

      {/* Data Caveat */}
      <section className="bg-white border-b border-grey-mid py-4">
        <div className="section-container">
          <p className="text-xs text-grey-dark leading-relaxed">
            <strong className="text-navy">Data sources & caveat:</strong> Statistics on this page combine independently-measured data (Nielsen Digital Ratings monthly uniques, SemRush April 2026 visit data, NapoleonCat December 2025 social media user counts) and publisher-reported figures. Website visit data (SemRush) measures browser sessions, not unique people — Nielsen Digital Ratings unique browser data is a more reliable audience proxy. Audience index figures are derived from published Nielsen demographic composition data and should be treated as directional, not definitive. Always verify data with your agency or directly with the research organisations before making investment decisions.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-grey-light py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "4.7M", label: "NZ internet users (2026)" },
              { value: "88.7%", label: "Adults 18+ active on social media" },
              { value: "2h 3m", label: "Average daily social media use" },
              { value: "2.23M", label: "Stuff monthly unique browsers" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded border border-grey-mid p-5">
                <div className="text-3xl font-bold text-navy mb-1">{value}</div>
                <div className="text-sm text-grey-dark">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital News Fact Check */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Digital news audiences — what publishers claim vs Nielsen</h2>
          <p className="text-grey-dark mb-8 max-w-2xl">The two dominant NZ news sites both quote reach figures larger than Nielsen Digital Ratings show. Here&apos;s what the independent data actually says.</p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {digitalNewsSites.map((site) => {
              const style = flagStyles[site.flag];
              return (
                <div key={site.title} className="bg-white rounded border border-grey-mid overflow-hidden">
                  <div className="bg-grey-light px-5 py-4 border-b border-grey-mid">
                    <div className="font-bold text-navy text-lg">{site.title}</div>
                    <div className="text-xs text-grey-dark">{site.owner}</div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-navy">{site.monthlyUniques.toLocaleString()}</div>
                      <div className="text-xs text-grey-dark mt-0.5">unique browsers/month (Nielsen)</div>
                    </div>
                    <div className={`rounded border ${style.bg} ${style.border} p-3`}>
                      <div className={`text-xs font-bold mb-1 ${style.badge.split(" ").filter((c) => c.startsWith("text-")).join(" ")}`}>Publisher claims:</div>
                      <p className="text-xs text-grey-dark italic mb-2">{site.publisherClaim}</p>
                      <p className="text-xs text-navy">{site.independent}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Site</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Monthly uniques (Nielsen)</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">18–29 index</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">30–54 index</th>
                  <th className="text-left py-3 text-navy font-semibold">55+ index</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { site: "stuff.co.nz", uniques: 2230000, i1829: 64, i3054: 114, i55: 126 },
                  { site: "nzherald.co.nz", uniques: 1960000, i1829: 58, i3054: 112, i55: 128 },
                ].map((row) => (
                  <tr key={row.site} className="border-b border-grey-mid hover:bg-grey-light/50 transition-colors">
                    <td className="py-3 pr-4 font-semibold text-navy">{row.site}</td>
                    <td className="py-3 pr-4 text-grey-dark">{row.uniques.toLocaleString()}</td>
                    <td className="py-3 pr-4"><IndexBadge index={row.i1829} /></td>
                    <td className="py-3 pr-4"><IndexBadge index={row.i3054} /></td>
                    <td className="py-3"><IndexBadge index={row.i55} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey-dark mt-3">Index = audience composition vs NZ internet average (100 = average; 130 = 30% over-index). News sites strongly over-index for 45+ audiences.</p>
        </div>
      </section>

      {/* Interactive filtered tables — client component */}
      <AudienceFilters />

      {/* Overall Top 10 Table */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Top 10 NZ websites — overall (all audiences)</h2>
          <p className="text-grey-dark mb-8">Ranked by total monthly visits from New Zealand, all demographics combined. Source: SemRush April 2026.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-3 text-navy font-semibold w-8">#</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Website</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Category</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold min-w-[220px]">Monthly visits</th>
                  <th className="text-left py-3 text-navy font-semibold">Key audience note</th>
                </tr>
              </thead>
              <tbody>
                {websitesOverall.map((site) => (
                  <tr key={site.domain} className="border-b border-grey-mid hover:bg-white transition-colors">
                    <td className="py-3 pr-3 text-grey-dark font-mono font-bold">{site.rank}</td>
                    <td className="py-3 pr-4 font-semibold text-navy">{site.domain}</td>
                    <td className="py-3 pr-4">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-grey-light text-grey-dark">{site.category}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-grey-mid/30 rounded h-2 min-w-[80px]">
                          <div className="h-2 rounded bg-navy" style={{ width: `${(site.monthlyVisits / 403.1) * 100}%` }} />
                        </div>
                        <span className="text-xs text-grey-dark w-16 text-right">{site.monthlyVisits}M visits</span>
                      </div>
                    </td>
                    <td className="py-3 text-grey-dark text-xs">{site.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Super Media View */}
      <section className="bg-navy py-16">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-white text-2xl font-bold mb-4">Super Media view</h2>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>Google and YouTube are not really &quot;media buys&quot; in the traditional sense — they&apos;re infrastructure that almost every NZ internet user passes through. The strategic question is how well your presence there is configured, not whether to be there.</p>
              <p>The most common error in digital planning: buying audiences on Facebook because it has reach, when the target is 18–29s. TikTok now significantly outperforms Facebook in the under-30 segment and Instagram leads for 18–34 females. Audience affinity, not raw user count, should drive channel selection.</p>
              <p>Both Stuff and NZHerald quote cross-platform audience figures that substantially exceed their Nielsen Digital Ratings. When comparing digital publisher reach to other digital channels, always use a consistent metric — unique browsers per month from a single source — or you will consistently overpay for news inventory.</p>
              <p>Trade Me is often underestimated as a media environment. Its monthly audience (22.7M NZ visits) rivals Facebook in NZ-origin traffic, and its users are in a high-intent purchase mindset. Advertising on Trade Me is underutilised by brand advertisers relative to its actual reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-grey-light py-12">
        <div className="section-container">
          <h3 className="text-navy font-semibold mb-4 text-sm uppercase tracking-wide">Related resources</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/resources/nz-radio-ratings", label: "NZ Radio Ratings" },
              { href: "/resources/nz-tv-ratings", label: "NZ TV Ratings" },
              { href: "/resources/nz-press-readership", label: "NZ Press Readership" },
              { href: "/resources/nz-outdoor-media", label: "NZ Outdoor Advertising" },
              { href: "/resources/nz-media-rates", label: "NZ Media Rate Benchmarks" },
              { href: "/audience-reality-check", label: "Audience Reality Check Tool" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="inline-flex items-center gap-1 text-sm text-navy border border-navy/30 rounded px-4 py-2 hover:bg-navy hover:text-white transition-colors">
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
