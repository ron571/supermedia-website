import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NZ Outdoor Advertising 2026 — OOH Companies by Sites, Reach & Format",
  description:
    "Independent guide to New Zealand's out-of-home advertising companies ranked by network size, impressions, and reach. Digital billboards, static billboards, bus shelters, buses, and street posters — national and Auckland.",
  alternates: { canonical: "/resources/nz-outdoor-media" },
};

const companies = [
  {
    name: "QMS Media",
    oohmaa: true,
    formats: ["Digital billboards", "Static billboards", "Buses / transit", "Bus shelters", "Street furniture"],
    nationalSites: 2800,
    aucklandSites: 950,
    monthlyImpressions: "2.6B+",
    coverage: "National — all major markets",
    keyAssets: "Auckland Transport contract (Oct 2025): street furniture, buses, transport hubs, billboards. Largest OOH network by impressions in NZ.",
    aucklandStrength: "Dominant in Auckland transit and bus advertising following AT contract win",
    url: "https://www.qmsmedia.com/en-nz/",
  },
  {
    name: "oOh!media",
    oohmaa: true,
    formats: ["Street posters (classic & LED)", "Bus shelters", "Shopping centres", "Universities", "Fuel network", "Street furniture"],
    nationalSites: 1800,
    aucklandSites: 620,
    monthlyImpressions: "1.4B+",
    coverage: "National — 11 metro markets Whangarei to Invercargill",
    keyAssets: "Largest street poster network; strong suburban and retail centre coverage. Digital upgrades completed at Botany Town Centre and Bayfair 2025.",
    aucklandStrength: "Strong suburban street poster network and shopping centre sites",
    url: "https://oohmedianz.com/",
  },
  {
    name: "LUMO Digital",
    oohmaa: false,
    formats: ["Digital billboards (premium roadside)"],
    nationalSites: 71,
    aucklandSites: 28,
    monthlyImpressions: "320M+",
    coverage: "Auckland, Christchurch, Wellington, Hamilton, Dunedin",
    keyAssets: "Premium large-format digital roadside billboard network. World-first dynamic animation approved on 6 Auckland sites. High-traffic arterial locations.",
    aucklandStrength: "Premium arterial billboard positions — Remuera, major motorway corridors",
    url: "https://www.lumodigital.nz/",
  },
  {
    name: "JCDecaux",
    oohmaa: true,
    formats: ["Airport advertising", "Transit (Wellington)", "Bus shelters", "Digital city panels"],
    nationalSites: 620,
    aucklandSites: 180,
    coverage: "Auckland Airport, Wellington Airport, Wellington transit, major city panels",
    monthlyImpressions: "680M+",
    keyAssets: "Exclusive airport advertising rights (Auckland + Wellington airports). Premium dwell-time environment; high-income traveller audience.",
    aucklandStrength: "Auckland Airport — only OOH environment capturing international and domestic travellers",
    url: "https://www.jcdecaux.co.nz/",
  },
  {
    name: "Go Media",
    oohmaa: false,
    formats: ["Static billboards", "Digital billboards"],
    nationalSites: 400,
    aucklandSites: 210,
    monthlyImpressions: "480M+",
    coverage: "Auckland-focused; some national",
    keyAssets: "Strong Auckland motorway billboard network. Not OOHMAA member — doesn't report to industry audience measurement.",
    aucklandStrength: "Motorway corridors; some of Auckland's highest-traffic billboard positions",
    url: "https://www.gomedia.co.nz/",
  },
  {
    name: "Phantom Billstickers",
    oohmaa: false,
    formats: ["Street posters", "Digital street posters"],
    nationalSites: 6500,
    aucklandSites: 2200,
    monthlyImpressions: "Estimated 280M+",
    coverage: "National — all major urban centres",
    keyAssets: "Largest street poster network by frame count in NZ. Pioneer of street poster format since 1982. Strong inner-city and youth/culture environments.",
    aucklandStrength: "Dominant inner-city Auckland street poster coverage; Grey Lynn, Ponsonby, K Road, CBD",
    url: "https://phantombillstickers.com/",
  },
  {
    name: "Shout Media",
    oohmaa: false,
    formats: ["Street posters", "Ambient / non-traditional"],
    nationalSites: 1200,
    aucklandSites: 480,
    monthlyImpressions: "Estimated 120M+",
    coverage: "Main urban markets",
    keyAssets: "Ambient and experiential OOH. Competitive street poster offering especially in Auckland and Wellington.",
    aucklandStrength: "Inner-city Auckland complement to Phantom — useful for full coverage",
    url: "https://www.shoutmedia.co.nz/",
  },
];

const formatBreakdown = [
  {
    format: "Large-format digital billboards",
    description: "LED screens ≥ 6x3m on motorways and arterials",
    operators: ["LUMO", "QMS", "Go Media"],
    buyingUnit: "2-week share of digital loop (typically 10s in 60s loop = 1/6th share)",
    aucklandCount: "~80 digital roadside sites",
    strengths: "High-visibility, dynamic creative, dayparting, real-time content updates",
    watchFor: "Share-of-loop pricing means your ad shows once every 60–90 seconds. Ensure quoted impressions use 'impacts' not 'opportunities to see' — there's a difference.",
  },
  {
    format: "Static billboards",
    description: "Traditional printed/vinyl roadside boards",
    operators: ["QMS", "Go Media", "Billboards NZ"],
    buyingUnit: "4-week site rental",
    aucklandCount: "~350+ sites Auckland",
    strengths: "100% share of voice (no rotation); consistent dwell; lower CPM than digital at equivalent locations",
    watchFor: "Site-specific reach varies enormously. A motorway site at 80,000 daily passes ≠ a side-street site at 4,000. Always get site-specific traffic data.",
  },
  {
    format: "Buses / bus exterior",
    description: "Full wraps, T-sides, rear panels on Auckland/Wellington buses",
    operators: ["QMS (Auckland, Oct 2025 AT contract)", "JCDecaux (Wellington)"],
    buyingUnit: "Per bus per week or fleet packages",
    aucklandCount: "~900+ Auckland buses",
    strengths: "Mobile coverage; route-targeted; high frequency in commuter environments",
    watchFor: "Route distribution matters. Full fleet buys waste spend if your audience doesn't use those specific corridors. Ask for route-level audience data.",
  },
  {
    format: "Bus shelters / street furniture",
    description: "6-sheet and digital panels at bus stops and street level",
    operators: ["QMS", "oOh!media", "JCDecaux"],
    buyingUnit: "2–4 week panel packages (often bought as clusters/panels per suburb)",
    aucklandCount: "~800+ shelter panels Auckland",
    strengths: "Long dwell time (people waiting); pedestrian-level engagement; can geo-target by suburb/centre",
    watchFor: "Illumination, panel condition, and cleaning frequency varies by operator. A shelter panel in poor condition can damage brand. Always ask about quality guarantees.",
  },
  {
    format: "Street posters (A1/A0)",
    description: "Small-format printed posters in high-pedestrian areas",
    operators: ["Phantom Billstickers", "oOh!media", "Shout Media"],
    buyingUnit: "Weekly packages by market and frame cluster",
    aucklandCount: "2,000+ frames Auckland",
    strengths: "High density in inner-city environments; great for music, food, fashion, events; strong youth/culture context",
    watchFor: "Posting consistency and speed matters — some operators are faster than others. Ask about turnaround time from artwork to public display.",
  },
];

const audienceByFormat = [
  { format: "Large-format digital billboard", indexedDemographic: "25–54, mid-high income motorists", peakTime: "Commuter periods (7–9am, 4–7pm)", cpm: "$8–$18" },
  { format: "Static billboard (motorway)", indexedDemographic: "Broad 18–65, all-income motorists", peakTime: "Constant", cpm: "$6–$14" },
  { format: "Bus exterior", indexedDemographic: "18–39, lower-mid income, urban commuters", peakTime: "Peak commute", cpm: "$10–$22" },
  { format: "Bus shelter / street furniture", indexedDemographic: "All adults, CBD and suburban pedestrians", peakTime: "Breakfast and evening peak", cpm: "$12–$28" },
  { format: "Street poster", indexedDemographic: "18–35, inner-city, culture-aware", peakTime: "Weekend evenings", cpm: "$4–$10" },
];

const aucklandRanking = [...companies].sort((a, b) => b.aucklandSites - a.aucklandSites);

const factChecks = [
  {
    claim: "\"QMS delivers 2.6 billion impressions per month\" (QMS sales material)",
    verdict: "Technically accurate — with caveats",
    flag: "orange" as const,
    independent: "The 2.6B figure is 'opportunities to see' across the entire national network — a gross impressions count that includes the same vehicle or person multiple times. It is not 2.6 billion unique people. OOH impression methodology (from OOHMAA) estimates the average number of times a person passes an OOH site in a week, then aggregates. Used consistently across the industry it's a useful relative measure — but never present this as 'reach.'",
  },
  {
    claim: "\"Digital OOH is up 12% and growing\" (Industry / DOOH vendors)",
    verdict: "Confirmed — reflects global and NZ trend",
    flag: "green" as const,
    independent: "New Zealand DOOH revenue growth of double digits is consistent with 2025 figures from OOHMAA and global OOH tracking. Digital now accounts for approximately 40–50% of total NZ OOH revenue, up from under 20% in 2019. This growth is driven by programmatic DOOH buying and flexible campaign capabilities.",
  },
  {
    claim: "\"OOH reaches more Aucklanders than commercial radio\" (Go Media / industry)",
    verdict: "Likely true for passive exposure — misleading for engagement",
    flag: "orange" as const,
    independent: "If you define 'reach' as 'anyone who could have seen an OOH panel,' Auckland's dense format network does cover a very high percentage of regular commuters. But 'could have seen' is not the same as attentive engagement. GfK radio data measures people who actively chose to tune in and listen. These metrics are not comparable without careful qualification.",
  },
];

const flagStyles = {
  green: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", icon: "✓" },
  orange: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", icon: "⚠" },
};

export default function NZOutdoorMediaPage() {
  return (
    <>
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
            <span>Updated June 2026</span>
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
