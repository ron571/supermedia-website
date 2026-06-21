import type { Metadata } from "next";
import Link from "next/link";
import ResourceSchema from "@/components/ResourceSchema";
import { dataInfo, tiers, platformBreakdown, whatToCheck, factChecks } from "@/data/nz-influencer-marketing";

export const metadata: Metadata = {
  title: "NZ Influencer Marketing 2026 — Rates, Tiers & Platform Data",
  description:
    "Independent guide to influencer marketing in New Zealand. Creator tier definitions, platform-by-platform rate benchmarks, audience data, and what to watch for when briefing NZ influencers.",
  alternates: { canonical: "/resources/nz-influencer-marketing" },
};





const flagStyles = {
  green: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", icon: "✓" },
  orange: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", icon: "⚠" },
};

export default function NZInfluencerMarketingPage() {
  return (
    <>
      <ResourceSchema slug="nz-influencer-marketing" title="NZ Influencer Marketing 2026 — Rates, Tiers & Platform Data" description="Independent guide to influencer marketing in New Zealand. Creator tier definitions, platform-by-platform rate benchmarks, audience data, and what to watch for when briefing NZ influencers." about="NZ influencer marketing" />
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/resources" className="text-white/50 hover:text-white text-sm transition-colors">Resources</Link>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-white/70 text-sm">NZ Influencer Marketing</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mb-4">
            NZ Influencer Marketing
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{ lineHeight: 1.65 }}>
            Creator tier definitions, NZ rate benchmarks by platform, what to check before you sign a creator, and fact-checks on the claims influencer agencies make.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-white/50">
            <span>Sources: NapoleonCat · Statista NZ · Industry rate benchmarks · Super Media experience</span>
            <span>·</span>
            <span>Updated {new Date(dataInfo.lastUpdated).toLocaleDateString("en-NZ", { month: "long", year: "numeric" })}</span>
          </div>
        </div>
      </section>

      {/* Caveat */}
      <section className="bg-white border-b border-grey-mid py-4">
        <div className="section-container">
          <p className="text-xs text-grey-dark leading-relaxed">
            <strong className="text-navy">Data sources & caveat:</strong> Rate benchmarks on this page are derived from publicly available global rate studies, NZ agency market data, and Super Media&apos;s independent market experience. NZ-specific influencer rate data is limited — there is no audited industry survey equivalent to GfK or Nielsen CMI. All figures are indicative ranges; actual rates vary significantly by niche, audience quality, platform, content format, and negotiation. Verify rates with multiple sources before contracting.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-grey-light py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "$50M+", label: "Estimated NZ influencer marketing spend 2025" },
              { value: "3.63M", label: "NZ social media users 18+ (88.7% of adults)" },
              { value: "5", label: "Major platforms with active NZ creator ecosystems" },
              { value: "4–8%", label: "Typical engagement rate for NZ nano/micro creators" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded border border-grey-mid p-5">
                <div className="text-3xl font-bold text-navy mb-1">{value}</div>
                <div className="text-sm text-grey-dark">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Tiers */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Creator tiers — NZ definitions and rates</h2>
          <p className="text-grey-dark mb-4 max-w-2xl">Global tier definitions apply but NZ context matters. A creator with 50K followers in the US is micro; in NZ, 50K is effectively a macro audience for a locally-focused campaign.</p>
          <div className="bg-amber-50 border border-amber-200 rounded p-4 mb-8 max-w-2xl">
            <p className="text-xs text-amber-800"><strong>NZ market reality:</strong> The NZ creator ecosystem is small. Truly local macro influencers (500K+ NZ-based followers) are rare. Many creators marketed as &apos;NZ influencers&apos; have large international audiences — always check NZ audience percentage, not just total follower count.</p>
          </div>
          <div className="space-y-4">
            {tiers.map((t) => (
              <div key={t.tier} className="rounded border border-grey-mid overflow-hidden">
                <div className="bg-grey-light px-5 py-3 border-b border-grey-mid flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-navy text-lg">{t.tier}</span>
                    <span className="text-xs px-2 py-0.5 bg-navy text-white rounded-full">{t.followers}</span>
                  </div>
                  <div className="flex gap-4 text-xs text-grey-dark">
                    <span>Rate: <strong className="text-navy">{t.typicalRate}</strong></span>
                    <span>Engagement: <strong className="text-navy">{t.engagementRate}</strong></span>
                  </div>
                </div>
                <div className="p-5 grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">Best for</div>
                    <div className="text-grey-dark">{t.bestFor}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">NZ context</div>
                    <div className="text-grey-dark">{t.nzContext}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">Platforms</div>
                    <div className="flex flex-wrap gap-1">
                      {t.platforms.map(p => (
                        <span key={p} className="text-xs px-2 py-0.5 bg-grey-light text-grey-dark rounded">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Breakdown */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Platform-by-platform guide</h2>
          <p className="text-grey-dark mb-8">Each platform has different creative norms, audience profiles, and buying considerations for NZ campaigns.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Platform</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Best formats</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Audience skew</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Cost range</th>
                  <th className="text-left py-3 text-navy font-semibold">Buyer note</th>
                </tr>
              </thead>
              <tbody>
                {platformBreakdown.map((p) => (
                  <tr key={p.platform} className="border-b border-grey-mid hover:bg-white transition-colors">
                    <td className="py-3 pr-4 font-semibold text-navy">{p.platform}</td>
                    <td className="py-3 pr-4">
                      <div className="flex flex-wrap gap-1">
                        {p.bestFormats.map(f => (
                          <span key={f} className="text-xs px-1.5 py-0.5 bg-grey-light text-grey-dark rounded">{f}</span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{p.audienceSkew}</td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{p.costPerPost}</td>
                    <td className="py-3 text-grey-dark text-xs">{p.buyerNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What to Check */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">What to check before you sign a creator</h2>
          <p className="text-grey-dark mb-8 max-w-2xl">Influencer marketing has less independent verification infrastructure than any other media channel. Due diligence is on the buyer.</p>
          <div className="space-y-4">
            {whatToCheck.map((item) => (
              <div key={item.check} className="rounded border border-grey-mid p-5">
                <h3 className="font-bold text-navy mb-2">{item.check}</h3>
                <p className="text-sm text-grey-dark mb-3">{item.why}</p>
                <div className="bg-grey-light rounded p-3 text-xs text-navy">
                  <strong>How to verify:</strong> {item.howTo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact Check */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Fact-checking influencer industry claims</h2>
          <p className="text-grey-dark mb-8 max-w-2xl">Influencer marketing agencies and platforms use a lot of statistics that deserve scrutiny.</p>
          <div className="space-y-4">
            {factChecks.map((item, i) => {
              const style = flagStyles[item.flag];
              return (
                <div key={i} className={`rounded border ${style.bg} ${style.border} p-5`}>
                  <div className="mb-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${style.badge}`}>
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
              <p>Influencer marketing in NZ is a legitimate channel with real reach — but it&apos;s also the least regulated and most opaque media environment you&apos;ll buy in. The absence of independent audience measurement (no GfK, no Nielsen equivalent) means all the verification responsibility falls on the buyer.</p>
              <p>For most NZ brands, micro-influencers (10K–100K) with verified NZ-based audiences offer the best combination of trust, targeting, and value. The NZ creator ecosystem is small enough that a well-selected group of 5–10 micro creators can generate meaningful awareness within a specific category without the cost and risk of chasing macro talent.</p>
              <p>The biggest waste we see in influencer spending is paying for international reach when the brand only distributes in NZ. Always verify that the audience is in the geography you serve before signing anything. The creator pitch will always show total followers; the Instagram Insights screenshot will show you what&apos;s real.</p>
              <p>Influencer content brief quality is the biggest determinant of campaign quality — more so than budget. Creators perform best when briefed on outcomes and brand values, not handed a script. The most common reason influencer campaigns underperform is that the brief was written by someone who doesn&apos;t understand the platform.</p>
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
              { href: "/resources/nz-digital-audiences", label: "NZ Digital Audiences" },
              { href: "/resources/nz-cinema-advertising", label: "NZ Cinema Advertising" },
              { href: "/resources/nz-digital-audiences", label: "NZ Digital & Social Audiences" },
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
