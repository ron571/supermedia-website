import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NZ Television Ratings 2026 — Linear TV Reach & Channel Data",
  description:
    "Independent Nielsen TAM data for NZ linear television. Channel reach, weekly audiences, demographic breakdowns, and fact-checks on ThinkTV supplier claims.",
  alternates: { canonical: "/resources/nz-tv-ratings" },
};

const channelRatings = [
  { rank: 1, channel: "TVNZ 1", owner: "TVNZ (Crown)", weeklyReach: 2050000, monthlyReach: 2800000, primetime: "News, reality, drama", ageSkew: "35–65+", notes: "National broadcaster; highest reach channel in NZ" },
  { rank: 2, channel: "TVNZ 2", owner: "TVNZ (Crown)", weeklyReach: 1420000, monthlyReach: 2100000, primetime: "US drama, reality, entertainment", ageSkew: "25–54", notes: "Strong 25–49 audience; entertainment focus" },
  { rank: 3, channel: "Three", owner: "Sky Network TV", weeklyReach: 1180000, monthlyReach: 1750000, primetime: "NZ news, The Project, reality", ageSkew: "30–54", notes: "Sky acquired Three in Aug 2025; investment in local content continues" },
  { rank: 4, channel: "TVNZ Duke", owner: "TVNZ (Crown)", weeklyReach: 420000, monthlyReach: 680000, primetime: "Comedy, film, male-skewed content", ageSkew: "18–44", notes: "Male-skewed niche channel; companion buy with TVNZ 1/2" },
  { rank: 5, channel: "Sky Sport (various)", owner: "Sky Network TV", weeklyReach: 380000, monthlyReach: 620000, primetime: "Live sport", ageSkew: "25–54 male", notes: "Subscription; reaches paying Sky households only" },
  { rank: 6, channel: "Prime", owner: "Sky Network TV", weeklyReach: 340000, monthlyReach: 540000, primetime: "Drama, reality, documentaries", ageSkew: "45–65+", notes: "FTA; older skew; strong in regional NZ" },
  { rank: 7, channel: "Bravo", owner: "Sky Network TV", weeklyReach: 210000, monthlyReach: 380000, primetime: "Drama, lifestyle, reality", ageSkew: "25–44 female", notes: "Subscription; female-skewed lifestyle content" },
];

const bvodReach = [
  { platform: "TVNZ+", weeklyReach: 980000, growth: "+9.3% year-on-year", notes: "Largest BVOD platform in NZ; strong 18–39 index" },
  { platform: "ThreeNow", weeklyReach: 420000, growth: "+7.1% year-on-year", notes: "Growing since Sky ownership; free catch-up" },
  { platform: "Sky Go / SkyTV streaming", weeklyReach: 310000, growth: "+12.4% year-on-year", notes: "Subscribers only; sports-heavy" },
];

const demographicReach = [
  { group: "18–29", weeklyLinearTV: "~44%", weeklyBVOD: "~51%", avgDailyMins: 78, superMediaNote: "Streaming-first generation. Linear reach below national average but BVOD growing fast" },
  { group: "30–44", weeklyLinearTV: "~61%", weeklyBVOD: "~47%", avgDailyMins: 142, superMediaNote: "Core commercial audience; highest BVOD+linear combined reach" },
  { group: "45–54", weeklyLinearTV: "~74%", weeklyBVOD: "~38%", avgDailyMins: 196, superMediaNote: "Strong linear loyalty; news programmes dominate" },
  { group: "55+", weeklyLinearTV: "~87%", weeklyBVOD: "~22%", avgDailyMins: 312, superMediaNote: "Heaviest linear viewers; drives breakfast and evening primetime" },
];

const factChecks = [
  {
    claim: "\"Total TV reaches 8 in 10 New Zealanders every week\" (ThinkTV)",
    verdict: "Misleading framing",
    flag: "orange" as const,
    independent: "ThinkTV's '8 in 10' figure includes linear broadcast TV plus BVOD (TVNZ+, ThreeNow) and some co-viewing streaming data. Linear broadcast TV alone reaches approximately 3.1M/week (~67% of adults 18+). Adding BVOD brings the combined reach closer to the claimed figure — but these are different buying environments with different CPMs and measurement methodologies. A media seller presenting 'TV = 8 in 10' without unpacking this distinction is misleading you.",
  },
  {
    claim: "\"TV delivers the lowest CPM of any channel\" (ThinkTV / TVNZ)",
    verdict: "Partially true — with conditions",
    flag: "orange" as const,
    independent: "At volume, broadcast TV buying CPMs can reach sub-$20 for broad audiences. But effective CPMs accounting for wastage (older audiences, wrong demographics) often run $30–$60+. BVOD CPMs are $25–$60 but with far better targeting. The 'lowest CPM' claim is most true for campaigns targeting 50+ and least true for anyone targeting 18–39s, where TV's reach is weakest.",
  },
  {
    claim: "\"The average New Zealander watches 3.5 hours of TV per day\" (ThinkTV)",
    verdict: "Average obscures wide variance",
    flag: "orange" as const,
    independent: "Nielsen TAM 2025 puts total TV viewing at ~216 minutes/day across all adults 18+. This figure is heavily skewed by 55+ viewers (who watch 300+ minutes/day). Adults 18–39 average well under 90 minutes/day of linear TV. Using a total-adult average in planning for younger targets overstates the channel's relevance.",
  },
  {
    claim: "\"TVNZ 1 is New Zealand's most watched channel\" (TVNZ)",
    verdict: "Confirmed",
    flag: "green" as const,
    independent: "True per Nielsen TAM. TVNZ 1 consistently leads weekly reach among all free-to-air channels. The Six O'Clock News remains the highest-rated regular NZ programme.",
  },
];

const flagStyles = {
  green: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800", icon: "✓" },
  orange: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800", icon: "⚠" },
  red: { bg: "bg-red-50", border: "border-red-200", badge: "bg-red-100 text-red-800", icon: "✗" },
};

function ReachBar({ value, max }: { value: number; max: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-grey-mid/30 rounded h-2 min-w-[80px]">
        <div className="h-2 rounded bg-navy" style={{ width: `${(value / max) * 100}%` }} />
      </div>
      <span className="text-xs text-grey-dark w-20 text-right">{value.toLocaleString()}</span>
    </div>
  );
}

export default function NZTVRatingsPage() {
  const maxWeekly = Math.max(...channelRatings.map(c => c.weeklyReach));

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/resources" className="text-white/50 hover:text-white text-sm transition-colors">Resources</Link>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-white/70 text-sm">NZ TV Ratings</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mb-4">
            NZ Television Ratings
          </h1>
          <p className="text-white/70 text-xl max-w-2xl" style={{ lineHeight: 1.65 }}>
            Nielsen TAM 2025/26 — linear TV channel audiences, BVOD growth, demographic reach, and fact-checks on what ThinkTV tells buyers.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-white/50">
            <span>Source: Nielsen TAM / ThinkTV 2025–2026</span>
            <span>·</span>
            <span>Updated June 2026</span>
            <span>·</span>
            <span>Audience 18+</span>
          </div>
        </div>
      </section>

      {/* Data Caveat */}
      <section className="bg-white border-b border-grey-mid py-4">
        <div className="section-container">
          <p className="text-xs text-grey-dark leading-relaxed">
            <strong className="text-navy">Data sources & caveat:</strong> Statistics on this page combine independently-measured survey data (Nielsen TAM / ThinkTV) and publisher-reported figures. Publisher figures and independent survey data use different methodologies and may not be directly comparable — where differences exist they are noted. Exact Nielsen TAM subscriber data is available to accredited media buyers. Always verify data with your agency or directly with the research organisations before making investment decisions.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-grey-light py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "3.1M", label: "Weekly linear TV viewers (18+)" },
              { value: "3.8M", label: "Monthly linear TV viewers" },
              { value: "216 min", label: "Average daily viewing time (all adults)" },
              { value: "44%", label: "Of 18–39s watch linear TV weekly" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded border border-grey-mid p-5">
                <div className="text-3xl font-bold text-navy mb-1">{value}</div>
                <div className="text-sm text-grey-dark">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Rankings */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Linear TV channels — weekly reach ranking</h2>
          <p className="text-grey-dark mb-8">Weekly reach = number of different people who watched at least one minute in a given week. All channels, national 18+.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-3 text-navy font-semibold w-8">#</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Channel</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Owner</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold min-w-[200px]">Weekly reach</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Monthly reach</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Age skew</th>
                  <th className="text-left py-3 text-navy font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {channelRatings.map((ch) => (
                  <tr key={ch.channel} className="border-b border-grey-mid hover:bg-grey-light/50 transition-colors">
                    <td className="py-3 pr-3 text-grey-dark font-mono">{ch.rank}</td>
                    <td className="py-3 pr-4 font-semibold text-navy">{ch.channel}</td>
                    <td className="py-3 pr-4 text-xs text-grey-dark">{ch.owner}</td>
                    <td className="py-3 pr-4"><ReachBar value={ch.weeklyReach} max={maxWeekly} /></td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{ch.monthlyReach.toLocaleString()}</td>
                    <td className="py-3 pr-4 text-grey-dark text-xs">{ch.ageSkew}</td>
                    <td className="py-3 text-grey-dark text-xs">{ch.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey-dark mt-4">Reach figures are estimates from publicly reported ThinkTV/Nielsen data. Exact TAM subscriber data available to accredited media buyers.</p>
        </div>
      </section>

      {/* BVOD */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">BVOD (Broadcast Video on Demand)</h2>
          <p className="text-grey-dark mb-8">Broadcaster-owned streaming platforms. Sold separately from linear TV but often packaged together. Higher CPMs than linear; better targeting and completion rates.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {bvodReach.map((b) => (
              <div key={b.platform} className="bg-white rounded border border-grey-mid p-5">
                <div className="font-semibold text-navy mb-1">{b.platform}</div>
                <div className="text-2xl font-bold text-navy mb-1">{b.weeklyReach.toLocaleString()}</div>
                <div className="text-xs text-grey-dark mb-2">weekly unique viewers</div>
                <div className="text-xs font-medium text-emerald-700 mb-3">{b.growth}</div>
                <div className="text-xs text-grey-dark">{b.notes}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">TV reach by age group</h2>
          <p className="text-grey-dark mb-8">Percentage who watched linear TV in a given week, average daily viewing minutes, and BVOD reach. The older the audience, the more dominant linear TV is.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Age group</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Linear TV weekly reach</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">BVOD weekly reach</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Avg daily minutes (linear)</th>
                  <th className="text-left py-3 text-navy font-semibold">Buyer note</th>
                </tr>
              </thead>
              <tbody>
                {demographicReach.map((row) => (
                  <tr key={row.group} className="border-b border-grey-mid hover:bg-grey-light/50 transition-colors">
                    <td className="py-3 pr-4 font-semibold text-navy">{row.group}</td>
                    <td className="py-3 pr-4 text-grey-dark">{row.weeklyLinearTV}</td>
                    <td className="py-3 pr-4 text-grey-dark">{row.weeklyBVOD}</td>
                    <td className="py-3 pr-4 text-grey-dark">{row.avgDailyMins} min</td>
                    <td className="py-3 text-grey-dark text-xs">{row.superMediaNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fact Check */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Fact-checking supplier claims</h2>
          <p className="text-grey-dark mb-8 max-w-2xl">What ThinkTV and individual broadcasters say vs what Nielsen TAM data shows.</p>
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
              <p>Television remains the most powerful reach builder for broad audiences in NZ — but the picture is more nuanced than TV sellers present. The headline "8 in 10 NZers weekly" mixes linear broadcast with BVOD, which are sold, priced, and measured differently. For planning purposes, treat them as separate buys.</p>
              <p>For audiences 45+, linear TV is still the dominant video channel by a wide margin. For 18–39s, BVOD and social video (YouTube, TikTok, Facebook) now collectively outperform linear. A TV-heavy plan targeting under-40s is almost certainly inefficient.</p>
              <p>The Sky acquisition of Three (August 2025) is worth monitoring. Three's investment in NZ local content has historically been variable — under Sky ownership this may improve, which would grow the channel's audience. Watch GfK/Nielsen data closely across 2026.</p>
              <p>Agency rebates from TVNZ and Sky/Mediaworks TV are the highest of any channel in NZ media. If your agency recommends weighting TV heavily without a clear demographic rationale, ask them to disclose their commercial arrangements.</p>
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
