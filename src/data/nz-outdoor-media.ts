/**
 * NZ Outdoor Advertising Data
 *
 * PRIMARY SOURCES:
 *   - OOHMAA (Out of Home Media Association of Australasia):
 *     https://www.oohmaa.com.au/ (revenue and industry data)
 *   - Individual operator websites and press releases:
 *     QMS: https://www.qmsmedia.com/en-nz/
 *     oOh!media: https://oohmedianz.com/
 *     LUMO: https://www.lumodigital.nz/
 *     JCDecaux: https://www.jcdecaux.co.nz/
 *     Go Media: https://www.gomedia.co.nz/
 *     Phantom: https://phantombillstickers.com/
 *
 * HOW TO UPDATE:
 *   1. Check each operator's website for updated site count or network changes
 *   2. Check OOHMAA for industry revenue data and DOOH share updates
 *   3. Update companies[] with new site counts, new contracts, and new assets
 *   4. Update formatBreakdown[] if buying unit structures or CPMs change
 *   5. Watch for contract changes (e.g. Auckland Transport contract moved to QMS Oct 2025)
 *   6. Update dataInfo.lastUpdated
 *
 * KEY THINGS TO WATCH:
 *   - Auckland Transport OOH contract renewals
 *   - Airport advertising contract renewals (currently JCDecaux)
 *   - New DOOH sites being installed
 *   - OOHMAA revenue reports (quarterly)
 *
 * NEXT EXPECTED UPDATE: December 2026
 */

export const dataInfo = {
  lastUpdated: "2026-06-21",
  surveyPeriod: "Operator-reported data 2025/26 / OOHMAA industry data",
  primarySource: "OOHMAA / operator press releases and websites",
  sourceUrl: "https://www.oohmaa.com.au/",
  updateSchedule: "Semi-annually or when major contract changes occur",
  nextExpectedUpdate: "December 2026",
};

export const companies = [
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
    monthlyImpressions: "680M+",
    coverage: "Auckland Airport, Wellington Airport, Wellington transit, major city panels",
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

export const formatBreakdown = [
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

export const audienceByFormat = [
  { format: "Large-format digital billboard", indexedDemographic: "25–54, mid-high income motorists", peakTime: "Commuter periods (7–9am, 4–7pm)", cpm: "$8–$18" },
  { format: "Static billboard (motorway)", indexedDemographic: "Broad 18–65, all-income motorists", peakTime: "Constant", cpm: "$6–$14" },
  { format: "Bus exterior", indexedDemographic: "18–39, lower-mid income, urban commuters", peakTime: "Peak commute", cpm: "$10–$22" },
  { format: "Bus shelter / street furniture", indexedDemographic: "All adults, CBD and suburban pedestrians", peakTime: "Breakfast and evening peak", cpm: "$12–$28" },
  { format: "Street poster", indexedDemographic: "18–35, inner-city, culture-aware", peakTime: "Weekend evenings", cpm: "$4–$10" },
];

export const factChecks = [
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
