import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NZ Cinema Advertising 2026 — Audience, Reach & Rates",
  description:
    "Independent guide to cinema advertising in New Zealand. Val Morgan network, admissions data, audience profile, buying formats, CPM benchmarks, and fact-checks on cinema seller claims.",
  alternates: { canonical: "/resources/nz-cinema-advertising" },
};

const cinemaChains = [
  {
    name: "Hoyts",
    screens: 138,
    locations: 22,
    coverage: "National — major urban centres",
    notes: "Largest cinema group in NZ by screen count. Premium LUX and premium formats available.",
  },
  {
    name: "Reading Cinemas",
    screens: 94,
    locations: 18,
    coverage: "National — strong in secondary markets",
    notes: "Owned by Reading International (US). Strong presence in Courtenay Place (Wellington), Newmarket (Auckland).",
  },
  {
    name: "Event Cinemas (Academy Gold)",
    screens: 62,
    locations: 14,
    coverage: "Auckland, Hamilton, Tauranga, Christchurch",
    notes: "Premium Gold Class and La Premiere formats — affluent, older audience skew.",
  },
  {
    name: "Other independents",
    screens: 56,
    locations: 16,
    coverage: "Regional and boutique",
    notes: "Includes Silky Otter, Alice Cinematheque, Rialto, and regional independents. Not all represented by Val Morgan.",
  },
];

const buyingFormats = [
  {
    format: "MAP (Movie Audience Preferred)",
    description: "Targeted CPM buy across selected films, sessions, and geo-markets. Most flexible cinema buying option.",
    minBudget: "$5,000",
    cpm: "$55–$80",
    bestFor: "Audience-targeted brand campaigns; geo-targeted local advertising",
    watchFor: "CPM is per admission, not per unique viewer. Ensure you understand the frequency implications if buying across multiple weeks.",
  },
  {
    format: "Follow Film",
    description: "Your ad runs exclusively with a specific blockbuster title for its full theatrical run.",
    minBudget: "$15,000+",
    cpm: "$70–$110 (effective, based on film admissions)",
    bestFor: "Brand association with major cultural moments (Wicked, Mission Impossible, etc.); audience alignment with specific genres",
    watchFor: "Film performance risk is real. A major release underperforming vs. box office forecasts will reduce your total admissions. No guaranteed delivery.",
  },
  {
    format: "Roadblock",
    description: "Your ad runs on all screens nationally for one week, across all sessions and all films.",
    minBudget: "$30,000+",
    cpm: "$60–$90 (effective)",
    bestFor: "Mass national reach in the shortest possible timeframe; new product launches",
    watchFor: "True 'roadblock' packages can include forced positions alongside all film content — not all of which may suit your brand.",
  },
  {
    format: "Pre-show sponsorship",
    description: "Branded presence in the pre-show entertainment reel before trailers begin.",
    minBudget: "$8,000",
    cpm: "$50–$70",
    bestFor: "Extended dwell-time engagement; brands with longer-form storytelling",
    watchFor: "Audience attention tends to lower during extended pre-show content vs. the 'pearl' position directly before the feature.",
  },
];

const audienceProfile = [
  { group: "14–24", shareOfAdmissions: "24%", indexVsPopulation: 148, note: "Hardest group to reach via linear TV and press. Cinema over-indexes strongly." },
  { group: "25–39", shareOfAdmissions: "31%", indexVsPopulation: 118, note: "Peak cinema-going age. Strong household income; family and couple audiences." },
  { group: "40–54", shareOfAdmissions: "26%", indexVsPopulation: 102, note: "Even index; balanced audience for broad brand campaigns." },
  { group: "55+", shareOfAdmissions: "19%", indexVsPopulation: 74, note: "Under-indexes vs population; lower cinema frequency in this group." },
];

const factChecks = [
  {
    claim: "\"One cinema ad delivers the same brand fame as 10 digital ads\" (Val Morgan research)",
    verdict: "Interesting claim — methodology matters",
    flag: "orange" as const,
    independent: "Val Morgan's 'Cinemascience' research (conducted by Kantar) does show strong brand recall and emotional response metrics for cinema vs digital display. However, the comparison is typically to low-attention digital formats (banner ads, skippable pre-rolls). Cinema's attentive environment genuinely does drive higher per-exposure recall — but the '10x' headline compresses a nuanced research finding into a sales claim. The right question is whether the higher CPM is justified by your campaign objective.",
  },
  {
    claim: "\"Cinema reaches over 5 million New Zealanders annually\" (Val Morgan)",
    verdict: "Plausible for total admissions — not unique reach",
    flag: "orange" as const,
    independent: "Annual NZ cinema admissions pre-COVID were approximately 15–16M; post-COVID recovery has brought this back toward 10–12M admissions annually. Admissions are not the same as unique individuals — the same person visiting the cinema 5 times counts as 5 admissions. Val Morgan's reach figure typically refers to unique people who visited a cinema in a 12-month period, which is a different (and lower) number than total admissions.",
  },
  {
    claim: "\"Cinema audience is 100% attentive\" (Cinema industry / Val Morgan)",
    verdict: "Substantially true — with qualification",
    flag: "green" as const,
    independent: "Research consistently shows cinema as the highest-attentiveness advertising environment — no second screen, no skip button, large format, audio-on. Attention metrics (dwell time, eye tracking) all favour cinema. The qualification: attentiveness varies by position in the pre-show reel. The 'pearl position' (immediately before the feature) commands highest attention; early pre-show ads receive less.",
  },
  {
    claim: "\"Cinema CPM is comparable to TV\" (Cinema sellers)",
    verdict: "Misleading comparison",
    flag: "orange" as const,
    independent: "Cinema CPMs ($55–$90) are typically 2–4x higher than broad-reach linear TV CPMs. The comparison to TV usually involves total TV including primetime packages, which inflates the TV CPM comparison. Cinema's value case rests on attentiveness and demographic targeting — not price parity with TV.",
  },
];

const flagStyles = {
  green: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", icon: "✓" },
  orange: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", icon: "⚠" },
};

export default function NZCinemaAdvertisingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/resources" className="text-white/50 hover:text-white text-sm transition-colors">Resources</Link>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-white/70 text-sm">NZ Cinema Advertising</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mb-4">
            NZ Cinema Advertising
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{ lineHeight: 1.65 }}>
            Val Morgan audience data, cinema chain breakdown, buying formats, CPM benchmarks, and an honest read on what the cinema sellers claim vs what the data shows.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-white/50">
            <span>Sources: Val Morgan NZ · Cinema of NZ admissions data 2024/25</span>
            <span>·</span>
            <span>Updated June 2026</span>
          </div>
        </div>
      </section>

      {/* Caveat */}
      <section className="bg-white border-b border-grey-mid py-4">
        <div className="section-container">
          <p className="text-xs text-grey-dark leading-relaxed">
            <strong className="text-navy">Data sources & caveat:</strong> Admissions and audience data sourced from Val Morgan NZ published figures and publicly reported industry data. CPM benchmarks are indicative ranges based on market experience — actual rates vary by campaign size, seasonality, film slate, and negotiation. Cinema admissions are not unique reach figures. Always verify data with Val Morgan directly or via your agency before making investment decisions.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-grey-light py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "350+", label: "Screens in Val Morgan NZ network" },
              { value: "70+", label: "Cinema locations nationally" },
              { value: "1.83M", label: "Summer 2024/25 admissions (+9%)" },
              { value: "100%", label: "Share of voice — no other ads in the dark" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded border border-grey-mid p-5">
                <div className="text-3xl font-bold text-navy mb-1">{value}</div>
                <div className="text-sm text-grey-dark">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The NZ Cinema Landscape */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">NZ cinema landscape</h2>
          <p className="text-grey-dark mb-4 max-w-2xl">Val Morgan is the exclusive cinema advertising representative for the major NZ chains. All advertising through the major cinema network is sold through Val Morgan.</p>
          <div className="bg-amber-50 border border-amber-200 rounded p-4 mb-8 max-w-2xl">
            <p className="text-xs text-amber-800"><strong>Single seller:</strong> Unlike most media channels, cinema advertising in NZ has effectively one seller — Val Morgan. There is no competitive tension between cinema reps. This makes independent pricing validation important.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Chain</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Screens</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Locations</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Coverage</th>
                  <th className="text-left py-3 text-navy font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {cinemaChains.map((c) => (
                  <tr key={c.name} className="border-b border-grey-mid hover:bg-grey-light/50 transition-colors">
                    <td className="py-3 pr-4 font-semibold text-navy">{c.name}</td>
                    <td className="py-3 pr-4 text-grey-dark">{c.screens}</td>
                    <td className="py-3 pr-4 text-grey-dark">{c.locations}</td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{c.coverage}</td>
                    <td className="py-3 text-grey-dark text-xs">{c.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Audience Profile */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Cinema audience profile</h2>
          <p className="text-grey-dark mb-8">Share of total admissions by age group, and how each group indexes vs their share of the NZ population. Cinema over-indexes significantly for 14–39s.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Age group</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Share of admissions</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Index vs population</th>
                  <th className="text-left py-3 text-navy font-semibold">Buyer note</th>
                </tr>
              </thead>
              <tbody>
                {audienceProfile.map((row) => (
                  <tr key={row.group} className="border-b border-grey-mid hover:bg-white transition-colors">
                    <td className="py-3 pr-4 font-semibold text-navy">{row.group}</td>
                    <td className="py-3 pr-4 text-grey-dark">{row.shareOfAdmissions}</td>
                    <td className="py-3 pr-4">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        row.indexVsPopulation >= 130 ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                        row.indexVsPopulation >= 110 ? "bg-emerald-50 text-emerald-700" :
                        row.indexVsPopulation < 90 ? "bg-amber-50 text-amber-700" :
                        "bg-grey-light text-grey-dark"
                      }`}>
                        {row.indexVsPopulation} {row.indexVsPopulation >= 110 ? "↑" : row.indexVsPopulation < 90 ? "↓" : ""}
                      </span>
                    </td>
                    <td className="py-3 text-grey-dark text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey-dark mt-4">Index 100 = population average. Summer 2024/25 data (Val Morgan NZ). P14–24 admissions grew +11% vs prior year.</p>
        </div>
      </section>

      {/* Buying Formats */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Cinema buying formats — what each option delivers</h2>
          <p className="text-grey-dark mb-8 max-w-2xl">Val Morgan offers three main buying structures. Each has different risk/reward profiles and minimum investment levels.</p>
          <div className="space-y-4">
            {buyingFormats.map((f) => (
              <div key={f.format} className="rounded border border-grey-mid overflow-hidden">
                <div className="bg-grey-light px-5 py-3 border-b border-grey-mid flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-bold text-navy">{f.format}</h3>
                  <div className="flex gap-4 text-xs text-grey-dark">
                    <span>Min: <strong className="text-navy">{f.minBudget}</strong></span>
                    <span>CPM: <strong className="text-navy">{f.cpm}</strong></span>
                  </div>
                </div>
                <div className="p-5 grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">What it is</div>
                    <div className="text-grey-dark">{f.description}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">Best for</div>
                    <div className="text-grey-dark">{f.bestFor}</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded p-3">
                    <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">Watch for</div>
                    <div className="text-xs text-amber-800">{f.watchFor}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact Check */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Fact-checking cinema seller claims</h2>
          <p className="text-grey-dark mb-8 max-w-2xl">Cinema advertising is sold on the back of strong attentiveness and youth audience arguments. Here&apos;s how those claims hold up.</p>
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
              <p>Cinema is a genuinely differentiated channel — the attentiveness case is real, and the 14–39 demographic skew is a legitimate advantage for advertisers struggling to reach this group through linear TV. For the right campaign, it earns its premium CPM.</p>
              <p>The practical challenge for most NZ advertisers is scale. Even a national roadblock only reaches a fraction of the population in a given week. Cinema works best as a component in a broader campaign — not as a primary reach builder, but as a high-quality amplifier for campaigns already building reach through TV, digital, or audio.</p>
              <p>With Val Morgan as the sole cinema ad seller in NZ, there&apos;s no competitive dynamic to drive pricing honesty. Independent benchmarking of your cinema CPM against industry norms is therefore more important here than in most channels. If your agency has a volume relationship with Val Morgan, ask them to disclose it.</p>
              <p>Creative quality matters more in cinema than almost any other channel. The audience is captive and their expectations are high — an ad that feels cheap or unfinished will damage the brand more in a cinema context than it would on a lower-attention platform.</p>
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
              { href: "/resources/nz-outdoor-media", label: "NZ Outdoor Advertising" },
              { href: "/resources/nz-influencer-marketing", label: "NZ Influencer Marketing" },
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
