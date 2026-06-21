import type { Metadata } from "next";
import Link from "next/link";
import ResourceSchema from "@/components/ResourceSchema";
import { dataInfo, aucklandNewspapers, nationalMagazines, publisherTotals, factChecks, keyStats } from "@/data/nz-press-readership";

export const metadata: Metadata = {
  title: "NZ Press Readership 2026 — Newspaper & Magazine Audience Data",
  description:
    "Independent Nielsen CMI and Roy Morgan readership data for New Zealand newspapers and magazines. Auckland newspaper audiences, national magazine readership, and fact-checks on publisher claims.",
  alternates: { canonical: "/resources/nz-press-readership" },
};


const flagStyles = {
  green: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", icon: "✓" },
  orange: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", icon: "⚠" },
  red: { bg: "bg-red-50", border: "border-red-200", badge: "bg-red-100 text-red-800", icon: "✗" },
};

function ReachBar({ value, max, color = "#1B2B5E" }: { value: number; max: number; color?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-grey-mid/30 rounded h-2 min-w-[100px]">
        <div className="h-2 rounded" style={{ width: `${(value / max) * 100}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs text-grey-dark w-20 text-right">{value.toLocaleString()}</span>
    </div>
  );
}

export default function NZPressReadership() {
  const maxNewspaper = Math.max(...aucklandNewspapers.map(n => n.readers));
  const maxMag = Math.max(...nationalMagazines.map(m => m.readers));

  return (
    <>
      <ResourceSchema slug="nz-press-readership" title="NZ Press Readership 2026 — Newspaper & Magazine Audience Data" description="Independent Nielsen CMI and Roy Morgan readership data for New Zealand newspapers and magazines. Auckland newspaper audiences, national magazine readership, and fact-checks on publisher claims." about="NZ newspaper and magazine readership" />
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/resources" className="text-white/50 hover:text-white text-sm transition-colors">Resources</Link>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-white/70 text-sm">NZ Press Readership</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mb-4">
            NZ Press Readership
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{ lineHeight: 1.65 }}>
            Nielsen CMI and Roy Morgan data for NZ newspapers and magazines. Auckland focus for press; national for magazines. Readership figures — not circulation.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-white/50">
            <span>Sources: {dataInfo.surveyPeriod}</span>
            <span>·</span>
            <span>Updated {new Date(dataInfo.lastUpdated).toLocaleDateString("en-NZ", { month: "long", year: "numeric" })}</span>
          </div>
        </div>
      </section>

      {/* Data Caveat */}
      <section className="bg-white border-b border-grey-mid py-4">
        <div className="section-container">
          <p className="text-xs text-grey-dark leading-relaxed">
            <strong className="text-navy">Data sources & caveat:</strong> Statistics on this page combine independently-measured survey data (Nielsen CMI Q4 2024, Roy Morgan December 2025) and publisher-reported figures. Readership methodologies differ between Nielsen CMI (average-issue readership) and Roy Morgan (monthly survey-based). Publisher brand audience figures combine multiple formats measured differently and should not be compared directly to single-format survey data. Always verify data with your agency or directly with the research organisations before making investment decisions.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-grey-light py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {keyStats.map(({ value, label }) => (
              <div key={label} className="bg-white rounded border border-grey-mid p-5">
                <div className="text-3xl font-bold text-navy mb-1">{value}</div>
                <div className="text-sm text-grey-dark">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Readership vs Circulation box */}
      <section className="bg-white py-10 border-b border-grey-mid">
        <div className="section-container">
          <div className="bg-amber-50 border border-amber-200 rounded p-5 max-w-3xl">
            <h3 className="font-semibold text-amber-900 mb-2">Readership vs Circulation — why this matters</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Circulation</strong> = number of copies sold or distributed. <strong>Readership</strong> = number of people who read it (each copy is typically read by 2–5 people). Media sellers default to circulation when readership is unavailable or lower. Always ask for <em>readership</em> figures — specifically Nielsen CMI average issue readership or Roy Morgan survey data — not just copies distributed. The gap between the two can be 2–4x.
            </p>
          </div>
        </div>
      </section>

      {/* Auckland Newspapers */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Auckland newspaper readership</h2>
          <p className="text-grey-dark mb-8">Average issue readership (how many people read each individual edition). Nielsen CMI Q4 2024 unless noted.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Title</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Publisher</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Format</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold min-w-[200px]">Readers per issue</th>
                  <th className="text-left py-3 text-navy font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {aucklandNewspapers.map((n) => (
                  <tr key={n.title} className="border-b border-grey-mid hover:bg-grey-light/50 transition-colors">
                    <td className="py-3 pr-4 font-semibold text-navy">{n.title}</td>
                    <td className="py-3 pr-4 text-grey-dark">{n.publisher}</td>
                    <td className="py-3 pr-4">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-grey-light text-grey-dark">{n.format}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <ReachBar value={n.readers} max={maxNewspaper} />
                    </td>
                    <td className="py-3 text-grey-dark text-xs">{n.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey-dark mt-4">The NZ Herald brand weekly figure (2.3M) combines multiple formats measured by different methodologies — do not compare directly to the 404,000 average-issue print figure.</p>
        </div>
      </section>

      {/* National Magazines */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">National magazine readership — top 10</h2>
          <p className="text-grey-dark mb-8">Monthly readership (number of different people who read the magazine in a month). Roy Morgan December 2025. Readership, not circulation.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-3 text-navy font-semibold w-8">#</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Title</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Publisher</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold min-w-[200px]">Monthly readers</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Age skew</th>
                  <th className="text-left py-3 text-navy font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {nationalMagazines.map((m) => (
                  <tr key={m.title} className="border-b border-grey-mid hover:bg-white transition-colors">
                    <td className="py-3 pr-3 text-grey-dark font-mono">{m.rank}</td>
                    <td className="py-3 pr-4 font-semibold text-navy">{m.title}</td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{m.publisher}</td>
                    <td className="py-3 pr-4"><ReachBar value={m.readers} max={maxMag} /></td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{m.ageSkew}</td>
                    <td className="py-3 text-grey-dark text-xs">{m.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Publisher Network Totals */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Publisher network reach</h2>
          <p className="text-grey-dark mb-8">Combined monthly audience across each publisher's portfolio. Unduplicated — readers of multiple titles counted once per publisher.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {publisherTotals.map((p) => (
              <div key={p.publisher} className="bg-grey-light rounded border border-grey-mid p-5">
                <div className="font-bold text-navy text-lg mb-1">{p.publisher}</div>
                <div className="text-3xl font-bold text-navy mb-2">{p.totalMonthlyCume.toLocaleString()}</div>
                <div className="text-xs text-grey-dark mb-3">monthly brand reach</div>
                <div className="text-xs text-grey-dark mb-3">{p.titles.slice(0, 4).join(", ")}{p.titles.length > 4 ? ` + ${p.titles.length - 4} more` : ""}</div>
                <p className="text-xs text-grey-dark border-t border-grey-mid pt-3">{p.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact Check */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Fact-checking publisher claims</h2>
          <p className="text-grey-dark mb-8 max-w-2xl">What newspaper and magazine publishers say vs what Nielsen CMI and Roy Morgan data shows.</p>
          <div className="space-y-4">
            {factChecks.map((item, i) => {
              const style = flagStyles[item.flag];
              return (
                <div key={i} className={`rounded border ${style.bg} ${style.border} p-5`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${style.badge}`}>
                      {style.icon} {item.verdict}
                    </span>
                  </div>
                  <p className="text-sm text-grey-dark italic mb-3">{item.claim}</p>
                  <p className="text-sm text-navy">{item.independent}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Super Media View */}
      <section className="bg-navy py-16">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-white text-2xl font-bold mb-4">Super Media view</h2>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>Print press audiences have declined materially over the past decade, but the readers who remain are disproportionately valuable. NZ Herald print readers skew 45+, higher-income, and are decision-makers at a rate above the general population. For the right advertiser, print still delivers quality over quantity.</p>
              <p>Magazine readership has held up better than press. Are Media's portfolio continues to deliver engaged, category-loyal audiences. The key buying question is not reach — it's context. A reader in NZ House & Garden is in a different mindset than the same person scrolling Facebook. Media pricing rarely accounts for this.</p>
              <p>The most common error we see with press buying is comparing a publisher's brand reach figure with a competing channel's rated reach — these are apples to oranges. Always ask: same metric, same measurement methodology, same time period.</p>
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
              { href: "/resources/nz-digital-audiences", label: "NZ Digital Audiences" },
              { href: "/resources/nz-media-rates", label: "NZ Media Rate Benchmarks" },
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
