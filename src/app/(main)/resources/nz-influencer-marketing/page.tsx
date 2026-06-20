import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NZ Influencer Marketing 2026 — Rates, Tiers & Platform Data",
  description:
    "Independent guide to influencer marketing in New Zealand. Creator tier definitions, platform-by-platform rate benchmarks, audience data, and what to watch for when briefing NZ influencers.",
  alternates: { canonical: "/resources/nz-influencer-marketing" },
};

const tiers = [
  {
    tier: "Nano",
    followers: "1K–10K",
    typicalRate: "$50–$400 per post",
    engagementRate: "4–8%",
    reach: "Very limited but highly trusted",
    bestFor: "Hyper-local; community-based brands; authentic word-of-mouth",
    nzContext: "Most common tier in NZ. Often unpaid or gifted. Highest engagement rates of any tier.",
    platforms: ["Instagram", "TikTok"],
  },
  {
    tier: "Micro",
    followers: "10K–100K",
    typicalRate: "$400–$2,500 per post",
    engagementRate: "2–5%",
    reach: "Niche but targeted",
    bestFor: "Category-specific campaigns (food, fitness, parenting, finance); strong ROI for mid-sized brands",
    nzContext: "The sweet spot for most NZ advertisers. 10K–50K NZ-based followers is a meaningful local audience.",
    platforms: ["Instagram", "TikTok", "YouTube"],
  },
  {
    tier: "Mid-tier",
    followers: "100K–500K",
    typicalRate: "$2,500–$10,000 per post",
    engagementRate: "1.5–3%",
    reach: "Broad reach within category",
    bestFor: "Brand awareness at scale; product launches; brands with category leadership ambitions",
    nzContext: "Very few NZ-based creators sit in this tier with a primarily NZ audience. Many at this level have significant Australian or international followers.",
    platforms: ["Instagram", "YouTube", "TikTok"],
  },
  {
    tier: "Macro / Celebrity",
    followers: "500K+",
    typicalRate: "$10,000–$50,000+ per post",
    engagementRate: "0.5–2%",
    reach: "Mass reach",
    bestFor: "Mass market brands; launches requiring high awareness quickly",
    nzContext: "NZ 'macro' influencers are rare. At this follower count, most NZ creators have majority international audiences. Verify NZ audience % before buying.",
    platforms: ["Instagram", "YouTube", "TikTok"],
  },
];

const platformBreakdown = [
  {
    platform: "Instagram",
    bestFormats: ["Reels", "Stories", "Feed posts", "Carousels"],
    audienceSkew: "25–44, female-skewed",
    costPerPost: "$400–$15,000 (micro to macro)",
    engagementNote: "Highest per-post engagement of mature platforms. Reels outperform static posts by 2–3x on reach.",
    buyerNote: "Most established NZ influencer channel. Ask for verified NZ audience % via creator's Instagram Insights screenshot before contracting.",
  },
  {
    platform: "TikTok",
    bestFormats: ["Organic-style video (15–60s)", "Duets", "Trend participation"],
    audienceSkew: "18–34, fastest-growing 25–44",
    costPerPost: "$200–$8,000 (micro to macro)",
    engagementNote: "Algorithm-driven reach means a nano creator can go viral. Unpredictable but potentially high reach. NZ TikTok audience growing rapidly.",
    buyerNote: "Creative fit matters more than on any other platform. Ads that look like ads perform poorly. Brief for platform-native content, not polished TVC.",
  },
  {
    platform: "YouTube",
    bestFormats: ["Dedicated video (3–10 min)", "Integration/mention", "Shorts"],
    audienceSkew: "18–44, slight male skew",
    costPerPost: "$800–$20,000 (depending on integration depth)",
    engagementNote: "Lower frequency than Instagram but higher intent and dwell time. Dedicated integrations outperform 30-second mentions significantly.",
    buyerNote: "NZ YouTube creators with large NZ-specific audiences are rare. Confirm subscriber location breakdown. Dedicated video ($5K+) typically outperforms brief mentions in longer content.",
  },
  {
    platform: "Facebook",
    bestFormats: ["Video posts", "Facebook Live", "Community groups"],
    audienceSkew: "35–65+",
    costPerPost: "$300–$5,000",
    engagementNote: "Organic reach very limited. Boosted influencer posts can reach older NZ audiences effectively; pure organic reach on Facebook is near-zero.",
    buyerNote: "Declining relevance for influencer content. Most useful for targeting 45+ audiences where Instagram and TikTok under-index. Consider boosting influencer content with paid media for better results.",
  },
  {
    platform: "Podcasts",
    bestFormats: ["Host-read ad (30–60s)", "Sponsored segment", "Episode sponsorship"],
    audienceSkew: "25–54, higher income/education",
    costPerPost: "$300–$5,000 per episode",
    engagementNote: "NZ podcast audience growing. Host-read ads perform significantly better than produced spots. Promo code tracking allows direct ROI measurement.",
    buyerNote: "Emerging channel in NZ. Small but growing creator base. Episode-level audience data rarely verified. Ask for download numbers and NZ listener percentage before buying.",
  },
];

const whatToCheck = [
  {
    check: "Audience location",
    why: "A creator with 50K followers may have only 8K NZ-based followers — the rest being Australian, US, or UK. You&apos;re paying for NZ reach.",
    howTo: "Request an Instagram/TikTok Insights screenshot showing top countries for followers and reach. If a creator won&apos;t provide this, don&apos;t proceed.",
  },
  {
    check: "Engagement rate vs followers",
    why: "Follower counts can be inflated by purchased followers or follow-for-follow schemes. Engagement rate (likes + comments ÷ followers) is harder to fake.",
    howTo: "For NZ nano/micro creators, expect 3–8% engagement. Below 1% at micro level is a red flag. Verify manually — spot-check recent posts.",
  },
  {
    check: "Content fit and brand safety",
    why: "Brand-adjacent influencer controversies do create brand risk. A creator&apos;s full content history matters.",
    howTo: "Review 60+ days of content before contracting. Check comment sections — they reveal real audience sentiment. Use brand safety screening tools for larger spend.",
  },
  {
    check: "Exclusivity and competitor history",
    why: "A creator who has posted for your direct competitor in the last 60 days damages the authenticity of your campaign.",
    howTo: "Check their posting history. Build exclusivity clauses into contracts — typically 30–90 days post-campaign for direct competitors.",
  },
  {
    check: "Disclosure compliance",
    why: "NZ Commerce Commission requires clear disclosure when content is paid or gifted. Non-disclosure creates regulatory risk for the brand.",
    howTo: "Require #ad or #sponsored disclosure in all posts. Do not accept posts where the paid nature is ambiguous. This is the brand&apos;s responsibility — not just the creator&apos;s.",
  },
];

const factChecks = [
  {
    claim: "\"Influencer marketing delivers 11x higher ROI than traditional digital\" (industry collateral)",
    verdict: "Selective use of research",
    flag: "orange" as const,
    independent: "The 11x figure originates from a 2016 Burst Media/Nielsen study comparing influencer to banner advertising specifically — not to all digital. More recent and rigorous studies show influencer ROI varies enormously by category, creator tier, and execution quality. Average influencer marketing effectiveness is positive but the variance is very high. There is no reliable 2025 NZ-specific ROI benchmark.",
  },
  {
    claim: "\"Micro-influencers have 60% higher engagement than macro-influencers\" (various agencies)",
    verdict: "Generally true — but engagement is not ROI",
    flag: "orange" as const,
    independent: "Engagement rate does systematically decline as follower count grows — this is well-established. But higher engagement rates for micro creators reflect a more engaged niche audience, not necessarily more sales or awareness. A micro creator with 3,000 engaged NZ followers may drive more purchase consideration than a macro creator with 200,000 global followers with 0.5% engagement — but this depends entirely on campaign objective and brand category.",
  },
  {
    claim: "\"This creator has 85,000 followers\" (creator pitch)",
    verdict: "Verify independently",
    flag: "orange" as const,
    independent: "Follower count is the most easily gamed metric in influencer marketing. Tools like HypeAuditor, Modash, or even manual spot-checking of engagement vs followers will reveal whether the audience is real. For any NZ spend above $1,000, independent verification of audience quality is worth doing.",
  },
];

const flagStyles = {
  green: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", icon: "✓" },
  orange: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", icon: "⚠" },
};

export default function NZInfluencerMarketingPage() {
  return (
    <>
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
            <span>Updated June 2026</span>
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
              { href: "/resources/nz-social-media", label: "NZ Social Media" },
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
