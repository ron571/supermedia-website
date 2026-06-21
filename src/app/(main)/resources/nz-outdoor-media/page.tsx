import type { Metadata } from "next";
import Link from "next/link";
import ResourceSchema from "@/components/ResourceSchema";
import { dataInfo, companies, formatBreakdown, audienceByFormat, factChecks } from "@/data/nz-outdoor-media";

export const metadata: Metadata = {
  title: "NZ Outdoor Advertising 2026 — OOH Companies by Sites, Reach & Format",
  description:
    "Independent guide to New Zealand's out-of-home advertising companies ranked by network size, impressions, and reach. Digital billboards, static billboards, bus shelters, buses, and street posters — national and Auckland.",
  alternates: { canonical: "/resources/nz-outdoor-media" },
};




const aucklandRanking = [...companies].sort((a, b) => b.aucklandSites - a.aucklandSites);


const flagStyles = {
  green: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", icon: "✓" },
  orange: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", icon: "⚠" },
};

export default function NZOutdoorMediaPage() {
  return (
    <>
      <ResourceSchema slug="nz-outdoor-media" title="NZ Outdoor Advertising 2026 — OOH Companies by Sites, Reach & Format" description="Independent guide to New Zealand's out-of-home advertising companies ranked by network size, impressions, and reach. Digital billboards, static billboards, bus shelters, buses, and street posters — national and Auckland." about="NZ outdoor advertising and out-of-home media" />
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/resources" className="text-white/50 hover:text-white text-sm transition-colors">Resources</Link>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-white/70 text-sm">NZ Outdoor Media</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mb-4">
            NZ Outdoor Advertising
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{ lineHeight: 1.65 }}>
            Who owns what, how many sites, how many impressions. Digital billboards, static boards, buses, bus shelters, and street posters — national and Auckland.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-white/50">
            <span>Sources: OOHMAA · Company data 2025–2026</span>
            <span>·</span>
            <span>Updated {new Date(dataInfo.lastUpdated).toLocaleDateString("en-NZ", { month: "long", year: "numeric" })}</span>
          </div>
        </div>
      </section>

      {/* Data Caveat */}
      <section className="bg-white border-b border-grey-mid py-4">
        <div className="section-container">
          <p className="text-xs text-grey-dark leading-relaxed">
            <strong className="text-navy">Data sources & caveat:</strong> Statistics on this page are sourced from OOHMAA (Out of Home Media Association of Aotearoa) industry data, individual operator-reported figures, and publicly available company information. Impression figures use OOHMAA audience measurement methodology for member companies; non-member figures are estimates using publicly reported data. Site counts are estimates — operators define &quot;sites&quot; differently (panels vs locations). CPM ranges are indicative only and vary significantly by market, package, and negotiation. Always verify data with your agency or directly with operators before making investment decisions.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-grey-light py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "7", label: "Major OOH operators in NZ" },
              { value: "~12K+", label: "Total OOH sites nationally" },
              { value: "+12%", label: "DOOH revenue growth 2025" },
              { value: "~40%", label: "Share of OOH revenue now digital" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded border border-grey-mid p-5">
                <div className="text-3xl font-bold text-navy mb-1">{value}</div>
                <div className="text-sm text-grey-dark">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company table — national */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">NZ OOH operators — ranked by national network size</h2>
          <p className="text-grey-dark mb-8">All major operators by estimated national site count, formats, and monthly impressions. OOHMAA = member of Out of Home Media Association of Aotearoa (independent audience measurement).</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Company</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Formats</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">National sites</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Monthly impressions</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">OOHMAA</th>
                  <th className="text-left py-3 text-navy font-semibold">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {companies
                  .sort((a, b) => b.nationalSites - a.nationalSites)
                  .map((co) => (
                    <tr key={co.name} className="border-b border-grey-mid hover:bg-grey-light/50 transition-colors">
                      <td className="py-3 pr-4">
                        <a href={co.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-orange transition-colors">
                          {co.name}
                        </a>
                      </td>
                      <td className="py-3 pr-4">
                        <div className="flex flex-wrap gap-1">
                          {co.formats.map(f => (
                            <span key={f} className="text-xs px-1.5 py-0.5 bg-grey-light text-grey-dark rounded">{f}</span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 pr-4 font-semibold text-navy">{co.nationalSites.toLocaleString()}</td>
                      <td className="py-3 pr-4 text-grey-dark">{co.monthlyImpressions}</td>
                      <td className="py-3 pr-4">
                        {co.oohmaa
                          ? <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">Member</span>
                          : <span className="text-xs text-grey-dark bg-grey-light rounded px-2 py-0.5">Non-member</span>
                        }
                      </td>
                      <td className="py-3 text-grey-dark text-xs">{co.coverage}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey-dark mt-4">Site counts are estimates from public company data and industry reports. Exact figures vary by definition of &quot;site&quot; (panels vs locations). Impression figures use operator-reported OOHMAA-methodology data where available, estimates elsewhere.</p>
        </div>
      </section>

      {/* Auckland Ranking */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Auckland market — ranked by site count</h2>
          <p className="text-grey-dark mb-8">Auckland accounts for approximately 35–40% of total NZ OOH spend. Coverage and format mix below.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-3 text-navy font-semibold w-8">#</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Company</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Auckland sites (est.)</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Key Auckland formats</th>
                  <th className="text-left py-3 text-navy font-semibold">Auckland strength</th>
                </tr>
              </thead>
              <tbody>
                {aucklandRanking.map((co, i) => (
                  <tr key={co.name} className="border-b border-grey-mid hover:bg-white transition-colors">
                    <td className="py-3 pr-3 text-grey-dark font-mono">{i + 1}</td>
                    <td className="py-3 pr-4 font-semibold text-navy">{co.name}</td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-grey-mid/30 rounded h-2 min-w-[80px]">
                          <div className="h-2 rounded bg-navy" style={{ width: `${(co.aucklandSites / 2200) * 100}%` }} />
                        </div>
                        <span className="text-xs text-grey-dark w-12 text-right">{co.aucklandSites.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4">
                      <div className="flex flex-wrap gap-1">
                        {co.formats.slice(0, 3).map(f => (
                          <span key={f} className="text-xs px-1.5 py-0.5 bg-white border border-grey-mid text-grey-dark rounded">{f}</span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 text-grey-dark text-xs">{co.aucklandStrength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Format Guide */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">OOH format guide — buying considerations</h2>
          <p className="text-grey-dark mb-8">What each format delivers, who operates it, and what to watch for when buying.</p>
          <div className="space-y-5">
            {formatBreakdown.map((f) => (
              <div key={f.format} className="rounded border border-grey-mid overflow-hidden">
                <div className="bg-grey-light px-5 py-3 border-b border-grey-mid">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="font-bold text-navy">{f.format}</h3>
                    <span className="text-xs text-grey-dark">{f.description}</span>
                  </div>
                </div>
                <div className="p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">Operators</div>
                    <div className="text-grey-dark">{f.operators.join(", ")}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">Buying unit</div>
                    <div className="text-grey-dark">{f.buyingUnit}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">Auckland count</div>
                    <div className="text-grey-dark">{f.aucklandCount}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">Strengths</div>
                    <div className="text-grey-dark">{f.strengths}</div>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-4">
                    <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-800">
                      <strong>Watch for:</strong> {f.watchFor}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Index by Format */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Audience profile by OOH format</h2>
          <p className="text-grey-dark mb-8">Which format best reaches which demographic, typical peak dayparts, and indicative CPMs.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Format</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Indexed demographic</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Peak effectiveness</th>
                  <th className="text-left py-3 text-navy font-semibold">Indicative CPM</th>
                </tr>
              </thead>
              <tbody>
                {audienceByFormat.map((row) => (
                  <tr key={row.format} className="border-b border-grey-mid hover:bg-white transition-colors">
                    <td className="py-3 pr-4 font-semibold text-navy">{row.format}</td>
                    <td className="py-3 pr-4 text-grey-dark">{row.indexedDemographic}</td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{row.peakTime}</td>
                    <td className="py-3 font-medium text-navy">{row.cpm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey-dark mt-4">CPMs are gross estimates; OOH is not standardised to a single CPM methodology. Compare operators using the same audience measurement base (OOHMAA for members) where possible.</p>
        </div>
      </section>

      {/* Fact Check */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Fact-checking OOH supplier claims</h2>
          <p className="text-grey-dark mb-8 max-w-2xl">Impression figures in OOH can be confusing. Here&apos;s what you need to know.</p>
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
              <p>QMS has materially strengthened their Auckland position with the AT contract (October 2025). If you&apos;re planning transit-heavy OOH in Auckland — buses, bus shelters, transport hub screens — QMS is now the dominant single operator. This concentration of inventory in one owner affects negotiating dynamics; competitive tension from multiple operators existed previously that no longer does to the same degree.</p>
              <p>LUMO offers genuinely premium digital billboard positions at a smaller network scale. Their arterial Auckland sites generate some of the highest individual site impression counts in NZ — if your campaign needs premium-feel, high-traffic digital exposure rather than blanket coverage, LUMO is worth a dedicated conversation.</p>
              <p>The non-OOHMAA operators (Go Media, Phantom Billstickers, Shout Media) do not participate in industry audience measurement. This doesn&apos;t mean their sites are poor — Go Media holds some of Auckland&apos;s best motorway billboard positions — but you need to scrutinise their audience claims more carefully as they use proprietary methodology.</p>
              <p>OOH should not be planned in isolation from other channels. The strongest argument for outdoor is its role as an amplifier: it extends reach, drives frequency against people already seeing the campaign in other media, and works best when the creative is built for the format (short messages, strong visuals, no phone numbers).</p>
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
