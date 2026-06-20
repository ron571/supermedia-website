import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NZ Radio Audience Ratings 2026 — GfK Survey Data by Network",
  description:
    "Independent GfK radio survey data for New Zealand. Auckland and national audiences broken down by NZME and Mediaworks networks, with fact-checks on supplier claims.",
  alternates: { canonical: "/resources/nz-radio-ratings" },
};

// GfK S1 2026 data (publicly reported figures from NZME/Mediaworks press releases and media industry reports)
const nationalStations = [
  { rank: 1, station: "Newstalk ZB", network: "NZME", cume: 657000, share: 14.4, ageSkew: "35–64", notes: "Consistent national #1 for news/talk format" },
  { rank: 2, station: "The Breeze", network: "Mediaworks", cume: 547900, share: 9.5, ageSkew: "45–65+", notes: "Top music station nationally" },
  { rank: 3, station: "More FM", network: "Mediaworks", cume: 510000, share: 7.2, ageSkew: "25–44", notes: "Contemporary hit; strong female skew" },
  { rank: 4, station: "ZM", network: "NZME", cume: 480000, share: 6.8, ageSkew: "18–34", notes: "Youth-focused CHR; strong 18–39 audience" },
  { rank: 5, station: "The Hits", network: "NZME", cume: 450000, share: 6.1, ageSkew: "25–44", notes: "Mainstream pop; broad 25–54 reach" },
  { rank: 6, station: "Mai FM", network: "Mediaworks", cume: 420000, share: 5.8, ageSkew: "18–39", notes: "Urban/Pasifika format; Auckland dominant" },
  { rank: 7, station: "Gold", network: "NZME", cume: 310000, share: 4.6, ageSkew: "50–65+", notes: "Classic hits targeting boomers" },
  { rank: 8, station: "Hauraki", network: "NZME", cume: 290000, share: 4.1, ageSkew: "30–54", notes: "Classic rock; male-skewed" },
  { rank: 9, station: "Coast", network: "NZME", cume: 275000, share: 3.9, ageSkew: "45–65+", notes: "Easy listening; regional strength" },
  { rank: 10, station: "The Rock", network: "Mediaworks", cume: 250000, share: 3.5, ageSkew: "25–49", notes: "Hard rock/comedy; strong male skew" },
  { rank: 11, station: "Magic Radio", network: "Mediaworks", cume: 210000, share: 3.0, ageSkew: "45–65+", notes: "Softer adult contemporary" },
  { rank: 12, station: "The Sound", network: "Mediaworks", cume: 185000, share: 2.6, ageSkew: "35–55", notes: "Classic and current favourites" },
  { rank: 13, station: "Flava", network: "NZME", cume: 170000, share: 2.4, ageSkew: "18–39", notes: "R&B/hip-hop; Auckland and Pasifika focus" },
];

const aucklandShares = [
  { rank: 1, station: "Newstalk ZB", network: "NZME", share: 15.6, ageSkew: "35–64" },
  { rank: 2, station: "The Breeze", network: "Mediaworks", share: 9.9, ageSkew: "45–65+" },
  { rank: 3, station: "Mai FM", network: "Mediaworks", share: 8.8, ageSkew: "18–39" },
  { rank: 4, station: "ZM", network: "NZME", share: 6.0, ageSkew: "18–34" },
  { rank: 5, station: "Coast", network: "NZME", share: 5.7, ageSkew: "45–65+" },
  { rank: 6, station: "The Hits", network: "NZME", share: 5.2, ageSkew: "25–44" },
  { rank: 7, station: "More FM", network: "Mediaworks", share: 5.0, ageSkew: "25–44" },
  { rank: 8, station: "Hauraki", network: "NZME", share: 4.3, ageSkew: "30–54" },
  { rank: 9, station: "Gold", network: "NZME", share: 3.8, ageSkew: "50–65+" },
  { rank: 10, station: "The Rock", network: "Mediaworks", share: 3.2, ageSkew: "25–49" },
];

// Network totals derived from station data
const networkNational = [
  { network: "NZME", stations: ["Newstalk ZB", "ZM", "The Hits", "Gold", "Hauraki", "Coast", "Flava"], combinedReach: 1850000, shareOfListening: 42.3 },
  { network: "Mediaworks", stations: ["The Breeze", "More FM", "Mai FM", "The Rock", "Magic Radio", "The Sound"], combinedReach: 1420000, shareOfListening: 31.6 },
  { network: "RNZ (public)", stations: ["RNZ National", "RNZ Concert"], combinedReach: 620000, shareOfListening: 11.4 },
  { network: "Other / Independent", stations: ["Various"], combinedReach: 520000, shareOfListening: 14.7 },
];

const factChecks = [
  {
    claim: "\"NZME's audio brands reach 2.7 million New Zealanders each month\" (NZME advertising collateral)",
    verdict: "Partially true — with caveats",
    independent: "GfK S1 2026 national cume across all NZME stations (7-day reach) is approximately 1.85M. The 2.7M figure uses combined monthly reach across audio and digital platforms, not radio-only weekly listeners. Monthly reach will always be higher than weekly.",
    flag: "orange" as const,
  },
  {
    claim: "\"The Breeze is New Zealand's #1 music station\" (Mediaworks)",
    verdict: "Confirmed by GfK",
    independent: "True per GfK S1 2026. The Breeze holds the highest weekly cume of any music-format station nationally (~547,900). Note: Newstalk ZB (talk format) is #1 overall.",
    flag: "green" as const,
  },
  {
    claim: "\"Newstalk ZB is New Zealand's #1 radio station\" (NZME)",
    verdict: "Confirmed by GfK",
    independent: "Consistently #1 in GfK surveys by weekly cume (~657,000) and audience share (14.4%). Has held this position for over a decade.",
    flag: "green" as const,
  },
  {
    claim: "\"3.5 million New Zealanders listen to commercial radio each week\" (RadioWorks/industry)",
    verdict: "Near current total",
    independent: "GfK S1 2026 puts total commercial radio cume close to 3.41M weekly. Total radio (including RNZ) reaches approximately 3.9M. Rounding to 3.5M is defensible but on the conservative end of claims now.",
    flag: "green" as const,
  },
];

const ageBreakdown = [
  { group: "18–29", topStation: "ZM / Mai FM", format: "CHR / Urban", nzmeShare: "~38%", mediaworksShare: "~35%", note: "Highest streaming substitution; lowest total radio reach of any adult group" },
  { group: "30–44", topStation: "The Hits / More FM", format: "Pop / CHR", nzmeShare: "~41%", mediaworksShare: "~33%", note: "Core commercial radio demographic; strong parental-household reach" },
  { group: "45–54", topStation: "Newstalk ZB / The Breeze", format: "News-talk / Easy", nzmeShare: "~46%", mediaworksShare: "~31%", note: "Highest radio loyalty; drives breakfast and drive ratings" },
  { group: "55+", topStation: "Newstalk ZB / Gold", format: "News-talk / Oldies", nzmeShare: "~52%", mediaworksShare: "~28%", note: "NZME dominates this group strongly; minimal streaming substitution" },
];

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-grey-mid/30 rounded h-2">
        <div className="h-2 rounded" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs text-grey-dark w-10 text-right">{value.toLocaleString()}</span>
    </div>
  );
}

function ShareBar({ value, max }: { value: number; max: number }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-grey-mid/30 rounded h-2">
        <div className="h-2 rounded bg-navy" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-grey-dark w-12 text-right">{value}%</span>
    </div>
  );
}

const networkColors: Record<string, string> = {
  NZME: "#1B2B5E",
  Mediaworks: "#E85D04",
  "RNZ (public)": "#6B7280",
  "Other / Independent": "#9CA3AF",
};

const flagStyles = {
  green: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", icon: "✓" },
  orange: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", icon: "⚠" },
  red: { bg: "bg-red-50", border: "border-red-200", badge: "bg-red-100 text-red-800", icon: "✗" },
};

export default function NZRadioRatingsPage() {
  const maxNationalCume = Math.max(...nationalStations.map(s => s.cume));
  const maxAucklandShare = Math.max(...aucklandShares.map(s => s.share));

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/resources" className="text-white/50 hover:text-white text-sm transition-colors">Resources</Link>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-white/70 text-sm">NZ Radio Ratings</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mb-4">
            NZ Radio Audience Ratings
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{ lineHeight: 1.65 }}>
            GfK Survey 1 2026 — national and Auckland audiences by network. What the sellers say vs what the data shows.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-white/50">
            <span>Source: GfK Commercial Radio Survey S1 2026</span>
            <span>·</span>
            <span>Updated June 2026</span>
            <span>·</span>
            <span>Audience 10+</span>
          </div>
        </div>
      </section>

      {/* Data Caveat */}
      <section className="bg-white border-b border-grey-mid py-4">
        <div className="section-container">
          <p className="text-xs text-grey-dark leading-relaxed">
            <strong className="text-navy">Data sources & caveat:</strong> Statistics on this page combine independently-measured survey data (GfK Commercial Radio Survey) and publisher-reported figures. Publisher figures and independent survey data use different methodologies and may not be directly comparable — where differences exist they are noted. Exact GfK subscriber data is available to accredited media buyers. Always verify data with your agency or directly with the research organisations before making investment decisions.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-grey-light py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "3.41M", label: "Weekly commercial radio listeners" },
              { value: "3.9M", label: "Total radio reach (incl. RNZ)" },
              { value: "73%", label: "Of NZ adults listen weekly" },
              { value: "~13", label: "Major NZ commercial markets" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded border border-grey-mid p-5">
                <div className="text-3xl font-bold text-navy mb-1">{value}</div>
                <div className="text-sm text-grey-dark">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Summary */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Network totals — national</h2>
          <p className="text-grey-dark mb-8">Combined weekly reach and share of listening across each ownership group. Note: combined network reach is not additive — listeners who tune to multiple stations in a network are counted once.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Network</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Stations</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold min-w-[220px]">Weekly reach (unduplicated)</th>
                  <th className="text-left py-3 text-navy font-semibold">Share of all listening</th>
                </tr>
              </thead>
              <tbody>
                {networkNational.map((row) => (
                  <tr key={row.network} className="border-b border-grey-mid hover:bg-grey-light/50 transition-colors">
                    <td className="py-3 pr-4 font-semibold" style={{ color: networkColors[row.network] }}>
                      {row.network}
                    </td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{row.stations.join(", ")}</td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-grey-mid/30 rounded h-2 min-w-[100px]">
                          <div className="h-2 rounded" style={{ width: `${(row.combinedReach / 1850000) * 100}%`, backgroundColor: networkColors[row.network] }} />
                        </div>
                        <span className="text-grey-dark w-20 text-right text-xs">{row.combinedReach.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className="font-semibold text-navy">{row.shareOfListening}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* National Station Rankings */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">National station rankings — GfK S1 2026</h2>
          <p className="text-grey-dark mb-8">Weekly cumulative audience (number of different people who listened for at least 15 minutes in a week), audience 10+.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-3 text-navy font-semibold w-8">#</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Station</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Network</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold min-w-[200px]">Weekly cume</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Share</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Age skew</th>
                  <th className="text-left py-3 text-navy font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {nationalStations.map((s) => (
                  <tr key={s.station} className="border-b border-grey-mid hover:bg-white transition-colors">
                    <td className="py-3 pr-3 text-grey-dark font-mono">{s.rank}</td>
                    <td className="py-3 pr-4 font-semibold text-navy">{s.station}</td>
                    <td className="py-3 pr-4">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: s.network === "NZME" ? "#EEF1FA" : "#FEF0E6", color: networkColors[s.network] }}>
                        {s.network}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <Bar value={s.cume} max={maxNationalCume} color={networkColors[s.network]} />
                    </td>
                    <td className="py-3 pr-4 text-grey-dark">{s.share}%</td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{s.ageSkew}</td>
                    <td className="py-3 text-grey-dark text-xs">{s.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey-dark mt-4">Cume figures for mid-ranked stations are estimated from publicly reported ranges. Exact GfK subscriber data available to accredited media buyers.</p>
        </div>
      </section>

      {/* Auckland */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Auckland audience share — GfK S1 2026</h2>
          <p className="text-grey-dark mb-8">Share of all radio listening in the Auckland metro market. Auckland represents approximately 35% of all NZ commercial radio revenue.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-3 text-navy font-semibold w-8">#</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Station</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Network</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold min-w-[200px]">Auckland share</th>
                  <th className="text-left py-3 text-navy font-semibold">Age skew</th>
                </tr>
              </thead>
              <tbody>
                {aucklandShares.map((s) => (
                  <tr key={s.station} className="border-b border-grey-mid hover:bg-grey-light/50 transition-colors">
                    <td className="py-3 pr-3 text-grey-dark font-mono">{s.rank}</td>
                    <td className="py-3 pr-4 font-semibold text-navy">{s.station}</td>
                    <td className="py-3 pr-4">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: s.network === "NZME" ? "#EEF1FA" : "#FEF0E6", color: networkColors[s.network] }}>
                        {s.network}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <ShareBar value={s.share} max={maxAucklandShare} />
                    </td>
                    <td className="py-3 text-grey-dark text-xs">{s.ageSkew}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
            <div className="bg-grey-light rounded p-4 text-center">
              <div className="text-sm text-grey-dark mb-1">NZME Auckland share</div>
              <div className="text-2xl font-bold text-navy">~41%</div>
            </div>
            <div className="bg-grey-light rounded p-4 text-center">
              <div className="text-sm text-grey-dark mb-1">Mediaworks Auckland share</div>
              <div className="text-2xl font-bold" style={{ color: "#E85D04" }}>~30%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience by Age Group */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Radio listening by age group</h2>
          <p className="text-grey-dark mb-8">Which stations and formats dominate each demographic, and how network share shifts by age.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Age group</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Top stations</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Format</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">NZME share</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Mediaworks share</th>
                  <th className="text-left py-3 text-navy font-semibold">Buyer note</th>
                </tr>
              </thead>
              <tbody>
                {ageBreakdown.map((row) => (
                  <tr key={row.group} className="border-b border-grey-mid hover:bg-white transition-colors">
                    <td className="py-3 pr-4 font-semibold text-navy">{row.group}</td>
                    <td className="py-3 pr-4 text-grey-dark">{row.topStation}</td>
                    <td className="py-3 pr-4 text-grey-dark">{row.format}</td>
                    <td className="py-3 pr-4 font-medium text-navy">{row.nzmeShare}</td>
                    <td className="py-3 pr-4 font-medium" style={{ color: "#E85D04" }}>{row.mediaworksShare}</td>
                    <td className="py-3 text-grey-dark text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fact Check */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Fact-checking supplier claims</h2>
          <p className="text-grey-dark mb-8 max-w-2xl">What radio networks say in their sales collateral vs what independent GfK data shows. Green = confirmed. Amber = partially true or context needed.</p>
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

      {/* Super Media view */}
      <section className="bg-navy py-16">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-white text-2xl font-bold mb-4">Super Media view</h2>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>NZME holds a clear advantage in the 45+ demographic — any campaign targeting older New Zealanders should have Newstalk ZB and Gold in the plan. Mediaworks' strength is in 25–44 through More FM and The Breeze, and in urban Auckland through Mai FM.</p>
              <p>The 18–29 segment is the most contested — and the most fragile for traditional radio. Streaming substitution is highest here. ZM and Mai FM still deliver reach, but buyers should cross-reference audio streaming (Spotify, iHeart) to avoid overpaying for a declining demographic in this channel.</p>
              <p>Combined network "reach" figures quoted by both NZME and Mediaworks use monthly unduplicated reach, not the 7-day cume used in GfK. Always ask which metric is being cited — monthly reach will be 30–40% higher than weekly.</p>
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
