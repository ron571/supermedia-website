import type { Metadata } from "next";
import Link from "next/link";
import ResourceSchema from "@/components/ResourceSchema";
import { dataInfo, nationalStations, aucklandShares, networkNational, factChecks, ageBreakdown, keyStats } from "@/data/nz-radio-ratings";

export const metadata: Metadata = {
  title: "NZ Radio Audience Ratings 2026 — GfK Survey Data by Network",
  description:
    "Independent GfK radio survey data for New Zealand. Auckland and national audiences broken down by NZME and Mediaworks networks, with fact-checks on supplier claims.",
  alternates: { canonical: "/resources/nz-radio-ratings" },
};

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
      <ResourceSchema slug="nz-radio-ratings" title="NZ Radio Audience Ratings 2026 — GfK Survey Data by Network" description="Independent GfK radio survey data for New Zealand. Auckland and national audiences broken down by NZME and Mediaworks networks, with fact-checks on supplier claims." about="NZ radio audience ratings" />
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
            <span>Source: {dataInfo.surveyPeriod}</span>
            <span>·</span>
            <span>Updated {new Date(dataInfo.lastUpdated).toLocaleDateString("en-NZ", { month: "long", year: "numeric" })}</span>
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
            {keyStats.map(({ value, label }) => (
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
