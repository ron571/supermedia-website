/**
 * NZ Television Ratings Data
 *
 * PRIMARY SOURCE: Nielsen Television Audience Measurement (TAM) / ThinkTV
 *   Published quarterly. ThinkTV publishes summary data and fact sheets.
 *
 * HOW TO UPDATE:
 *   1. ThinkTV publishes quarterly audience data at: https://thinktv.co.nz/research/
 *   2. TVNZ media centre: https://www.tvnz.co.nz/categories/media-centre
 *   3. Sky NZ media: https://www.sky.co.nz/newsroom
 *   4. Update channelRatings[], bvodReach[], demographicReach[], keyStats[]
 *   5. Re-fact-check each item in factChecks[] against new TAM releases
 *   6. Update dataInfo.lastUpdated and dataInfo.surveyPeriod
 *
 * NEXT EXPECTED UPDATE: September/October 2026 (Q2 2026 TAM data)
 */

export const dataInfo = {
  lastUpdated: "2026-06-21",
  surveyPeriod: "Nielsen TAM 2025/26",
  primarySource: "Nielsen TAM / ThinkTV / TVNZ media centre / Sky NZ newsroom",
  sourceUrl: "https://thinktv.co.nz/research/",
  updateSchedule: "Quarterly — check ThinkTV website each Jan, Apr, Jul, Oct",
  nextExpectedUpdate: "September 2026",
};

export const channelRatings = [
  { rank: 1, channel: "TVNZ 1", owner: "TVNZ (Crown)", weeklyReach: 2050000, monthlyReach: 2800000, primetime: "News, reality, drama", ageSkew: "35–65+", notes: "National broadcaster; highest reach channel in NZ" },
  { rank: 2, channel: "TVNZ 2", owner: "TVNZ (Crown)", weeklyReach: 1420000, monthlyReach: 2100000, primetime: "US drama, reality, entertainment", ageSkew: "25–54", notes: "Strong 25–49 audience; entertainment focus" },
  { rank: 3, channel: "Three", owner: "Sky Network TV", weeklyReach: 1180000, monthlyReach: 1750000, primetime: "NZ news, The Project, reality", ageSkew: "30–54", notes: "Sky acquired Three in Aug 2025; investment in local content continues" },
  { rank: 4, channel: "TVNZ Duke", owner: "TVNZ (Crown)", weeklyReach: 420000, monthlyReach: 680000, primetime: "Comedy, film, male-skewed content", ageSkew: "18–44", notes: "Male-skewed niche channel; companion buy with TVNZ 1/2" },
  { rank: 5, channel: "Sky Sport (various)", owner: "Sky Network TV", weeklyReach: 380000, monthlyReach: 620000, primetime: "Live sport", ageSkew: "25–54 male", notes: "Subscription; reaches paying Sky households only" },
  { rank: 6, channel: "Prime", owner: "Sky Network TV", weeklyReach: 340000, monthlyReach: 540000, primetime: "Drama, reality, documentaries", ageSkew: "45–65+", notes: "FTA; older skew; strong in regional NZ" },
  { rank: 7, channel: "Bravo", owner: "Sky Network TV", weeklyReach: 210000, monthlyReach: 380000, primetime: "Drama, lifestyle, reality", ageSkew: "25–44 female", notes: "Subscription; female-skewed lifestyle content" },
];

export const bvodReach = [
  { platform: "TVNZ+", weeklyReach: 980000, growth: "+9.3% year-on-year", notes: "Largest BVOD platform in NZ; strong 18–39 index" },
  { platform: "ThreeNow", weeklyReach: 420000, growth: "+7.1% year-on-year", notes: "Growing since Sky ownership; free catch-up" },
  { platform: "Sky Go / SkyTV streaming", weeklyReach: 310000, growth: "+12.4% year-on-year", notes: "Subscribers only; sports-heavy" },
];

export const demographicReach = [
  { group: "18–29", weeklyLinearTV: "~44%", weeklyBVOD: "~51%", avgDailyMins: 78, superMediaNote: "Streaming-first generation. Linear reach below national average but BVOD growing fast" },
  { group: "30–44", weeklyLinearTV: "~61%", weeklyBVOD: "~47%", avgDailyMins: 142, superMediaNote: "Core commercial audience; highest BVOD+linear combined reach" },
  { group: "45–54", weeklyLinearTV: "~74%", weeklyBVOD: "~38%", avgDailyMins: 196, superMediaNote: "Strong linear loyalty; news programmes dominate" },
  { group: "55+", weeklyLinearTV: "~87%", weeklyBVOD: "~22%", avgDailyMins: 312, superMediaNote: "Heaviest linear viewers; drives breakfast and evening primetime" },
];

export const keyStats = [
  { value: "3.1M", label: "Weekly linear TV reach (adults 18+)" },
  { value: "980K", label: "Weekly TVNZ+ users" },
  { value: "216 mins", label: "Avg daily TV viewing (all adults)" },
  { value: "312 mins", label: "Avg daily viewing — 55+" },
];

export const factChecks = [
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
