/**
 * NZ Media Rate Benchmarks Data
 *
 * PRIMARY SOURCE: Super Media 35 years of NZ media buying experience
 *   Cross-referenced with: NZME rate cards, ThinkTV buying guides,
 *   Meta Ads Manager NZ benchmarks, Google Ads NZ benchmarks
 *
 * HOW TO UPDATE:
 *   1. Review rate ranges at the start of each calendar year (January)
 *   2. Check for major platform rate changes (Meta, Google, TikTok)
 *      via their advertiser-facing documentation
 *   3. Compare TV/Radio rates against any updated ThinkTV or GfK buying guides
 *   4. Update channels[] rows with new benchmark ranges
 *   5. Update watchFor notes if the market has shifted
 *   6. Update dataInfo.lastUpdated
 *
 * RATE CHANGE SIGNALS TO WATCH:
 *   - Meta Ads Manager Q4 CPM spike (normal — NZ CPMs rise 30–60% in Q4)
 *   - Google CPC increases in competitive categories (legal, finance)
 *   - TVNZ/Three rate card changes (annual, usually Jan)
 *   - NZME/Mediaworks radio rate card changes (annual)
 *   - NZ OOH operator rate card updates
 *
 * NEXT EXPECTED UPDATE: January 2027
 */

export const dataInfo = {
  lastUpdated: "2026-06-21",
  surveyPeriod: "2026 NZ market benchmarks",
  primarySource: "Super Media NZ experience / platform rate cards / industry benchmarks",
  sourceUrl: "https://www.supermedia.co.nz/resources/nz-media-rates",
  updateSchedule: "Annually (January) — full rate review across all channels",
  nextExpectedUpdate: "January 2027",
};

export const channels = [
  {
    name: "Television (linear + BVOD)",
    rows: [
      { label: "Prime time 30s spot (TVNZ1 / Three)", benchmark: "$8,000–$22,000 per spot", notes: "Varies significantly by programme. Sport, news, and reality premium-priced." },
      { label: "Daytime 30s spot", benchmark: "$1,500–$5,000 per spot", notes: "Lower viewership but useful for certain demographics (e.g. retired, home-based)." },
      { label: "Typical TV CPM (cost per thousand)", benchmark: "$18–$45 CPM", notes: "Benchmarks vary by daypart and network. Ask your agency for their buying CPM, not the rate card." },
      { label: "BVOD (TVNZ+ / ThreeNow)", benchmark: "$25–$60 CPM", notes: "Higher CPM than linear but better targeting and completion rates. Growing rapidly." },
    ],
    watchFor: "TV is the most rebate-affected channel in NZ. Agency recommendations to weight TV heavily deserve extra scrutiny. Ask for the buying CPM separately from any packages.",
  },
  {
    name: "Radio / Audio",
    rows: [
      { label: "30s spot, major Auckland FM (prime)", benchmark: "$800–$2,500 per spot", notes: "Breakfast and drive are premium. Network buys across multiple markets are negotiable." },
      { label: "30s spot, secondary markets (Wellington, Christchurch)", benchmark: "$400–$1,200 per spot", notes: "Rates vary by station. Smaller markets are often underutilised and well-priced." },
      { label: "Network radio package (national reach)", benchmark: "$15,000–$60,000/month", notes: "Depends on station group, frequency, and daypart mix. Negotiate total reach points, not just spots." },
      { label: "Digital audio (Spotify, iHeart, podcasts)", benchmark: "$20–$45 CPM", notes: "Exact targeting, no duplication waste. Underused by NZ advertisers relative to reach potential." },
    ],
    watchFor: "Radio buying terms often haven't been renegotiated for years on retained accounts. If your agency has been buying the same stations for 2+ years without re-tendering, the rates are likely above market.",
  },
  {
    name: "Digital Display / Programmatic",
    rows: [
      { label: "Standard display, NZ open market", benchmark: "$8–$18 CPM", notes: "What a well-run DSP should achieve for standard NZ inventory. Rates above $25 without premium justification are a flag." },
      { label: "Premium NZ publisher inventory (Stuff, NZH, NZME)", benchmark: "$25–$55 CPM", notes: "Direct buys with premium publishers command higher rates. Ensure audience delivery is guaranteed." },
      { label: "Programmatic (through agency trading desk)", benchmark: "$15–$40 CPM (all-in)", notes: "The 'all-in' rate should include all tech fees. Ask for the media cost separate from fees — they should not exceed 30% of total." },
      { label: "Native / sponsored content", benchmark: "$40–$80 CPM", notes: "Higher cost but higher engagement. Measure against actual engagement, not just impressions." },
    ],
    watchFor: "Digital display is the most opaque part of most media budgets. Insist on a full fee disclosure: media cost, DSP fee, data cost, verification, and agency margin itemised separately.",
  },
  {
    name: "Social Media (Meta / LinkedIn / TikTok)",
    rows: [
      { label: "Meta (Facebook/Instagram) CPM — NZ", benchmark: "$8–$22 CPM", notes: "Highly variable by audience, creative format, and time of year. Q4 significantly more expensive." },
      { label: "Meta CPC (cost per click)", benchmark: "$0.80–$3.50", notes: "E-commerce and retail skew lower; financial services and B2B skew higher." },
      { label: "LinkedIn CPM — NZ B2B", benchmark: "$30–$70 CPM", notes: "Expensive but highly targeted for professional audiences. Justified for B2B with clear ICP." },
      { label: "TikTok CPM — NZ", benchmark: "$10–$25 CPM", notes: "Growing fast. Cost-effective for under-35 audiences. Measurement still maturing." },
    ],
    watchFor: "Social platforms are self-serve — you can verify most of these costs yourself in Ads Manager. If your agency's reported CPM is materially above platform data, ask for the raw account access.",
  },
  {
    name: "Search (Google / Bing)",
    rows: [
      { label: "Google Search CPC — general services", benchmark: "$1.50–$6.00", notes: "Varies enormously by keyword competitiveness. Broad match keywords are often inefficient." },
      { label: "Google Search CPC — competitive verticals (legal, finance, insurance)", benchmark: "$8–$35+", notes: "Highest-intent, highest-cost. Negative keyword management is critical at these prices." },
      { label: "Google Shopping CPC — retail", benchmark: "$0.40–$2.00", notes: "Usually lower CPC than text ads. Feed quality is the primary lever for performance." },
      { label: "Search management fee (agency)", benchmark: "10–20% of spend, or $800–$3,000/month flat", notes: "Flat fee is usually better value for stable accounts. Percentage-of-spend creates an incentive to increase spend regardless of return." },
    ],
    watchFor: "Search is the most measurable channel — if your agency can't show cost per lead or cost per sale (not just CPC and CTR), push for it. Search reporting should always connect to business outcomes.",
  },
  {
    name: "Out of Home (OOH)",
    rows: [
      { label: "Static billboard — Auckland premium site (monthly)", benchmark: "$3,000–$9,000/month", notes: "Motorway and CBD sites at the top of range. Regional sites significantly cheaper." },
      { label: "Digital OOH (DOOH) — Auckland/Wellington", benchmark: "$800–$3,500/week per panel", notes: "Programmatic DOOH allows shorter flights and daypart targeting. Increasingly accessible for mid-size budgets." },
      { label: "Bus/transit advertising — major cities", benchmark: "$500–$2,500/month per unit", notes: "Full wraps at top of range. Good for local/geographic reach." },
    ],
    watchFor: "OOH is difficult to independently verify. Ask for audience measurement data (eye-tracking studies, traffic counts) specific to the sites you're buying, not category averages.",
  },
  {
    name: "Print (Newspaper / Magazine)",
    rows: [
      { label: "Full page, NZ Herald (weekday)", benchmark: "$18,000–$35,000", notes: "Rates negotiable on volume. Print readership declining — ensure the audience justifies the cost." },
      { label: "Full page, regional newspaper", benchmark: "$2,000–$8,000", notes: "Good value for local businesses. Audience skews older and higher income." },
      { label: "Full page, consumer magazine (e.g. NZ Woman's Weekly)", benchmark: "$10,000–$18,000", notes: "Long lead times (4–8 weeks). Strong for brand-building in relevant lifestyle categories." },
    ],
    watchFor: "Print has the longest purchase lead times of any medium. Ensure you're buying based on verified circulation, not claimed reach. Ask for the most recent ABC audit figure.",
  },
  {
    name: "Cinema",
    rows: [
      { label: "30s spot, national cinema network (Event/Reading)", benchmark: "$12,000–$28,000 per week", notes: "Rates based on national footprint. Regional-only buys are significantly cheaper and often underutilised." },
      { label: "CPM, cinema audience", benchmark: "$35–$65 CPM", notes: "High-attention, captive environment. Effective CPM is often better than headline figure suggests." },
      { label: "Branded content / pre-show sponsorship", benchmark: "$15,000–$50,000", notes: "Premium positions around major releases. Lead times of 6–10 weeks required." },
    ],
    watchFor: "Cinema is one of the few channels with genuine captive attention. The CPM looks high but the attention quality is strong — compare on attention-adjusted CPM, not raw cost. Avoid booking against weak release schedules.",
  },
  {
    name: "Influencer / Content Creator",
    rows: [
      { label: "Micro-influencer (10k–50k NZ followers), single post", benchmark: "$300–$1,500 per post", notes: "High engagement rates relative to cost. Authenticity is the primary value — brief loosely, not tightly." },
      { label: "Mid-tier influencer (50k–200k NZ followers), single post", benchmark: "$1,500–$6,000 per post", notes: "Stronger reach, lower engagement rate. Negotiate exclusivity periods for competitive categories." },
      { label: "Top-tier NZ creator (200k+ followers), campaign", benchmark: "$8,000–$30,000+ per campaign", notes: "Includes content production value. Ensure usage rights for paid amplification are included in the contract." },
      { label: "Agency management fee (influencer campaign)", benchmark: "15–25% of talent spend", notes: "Covers talent sourcing, briefing, and reporting. DIY is possible for small programmes; agency adds value at scale." },
    ],
    watchFor: "Follower counts mean nothing without engagement rate and audience authenticity checks. Always request a media kit with engagement data, and use a tool like HypeAuditor to verify NZ audience composition before committing.",
  },
];
