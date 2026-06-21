/**
 * NZ Press Readership Data
 *
 * PRIMARY SOURCES:
 *   - Nielsen Consumer & Media Insights (CMI) — quarterly releases
 *     https://www.nielsen.com/nz/en/
 *   - Roy Morgan NZ — monthly/quarterly surveys
 *     https://www.roymorgan.com/countries/new-zealand
 *
 * HOW TO UPDATE:
 *   1. Check Nielsen CMI quarterly releases (Jan, Apr, Jul, Oct)
 *      → nzherald.co.nz and NZME press centre publish CMI numbers
 *   2. Check Roy Morgan NZ press releases for magazine readership updates
 *      → https://www.roymorgan.com/countries/new-zealand
 *   3. Update aucklandNewspapers[], nationalMagazines[], publisherTotals[]
 *   4. Re-fact-check each item in factChecks[]
 *   5. Update dataInfo.lastUpdated and dataInfo.surveyPeriod
 *
 * NEXT EXPECTED UPDATE: September/October 2026 (Nielsen CMI Q2 2026)
 */

export const dataInfo = {
  lastUpdated: "2026-06-21",
  surveyPeriod: "Nielsen CMI Q4 2024 / Roy Morgan mid-2025",
  primarySource: "Nielsen CMI / Roy Morgan NZ",
  sourceUrl: "https://www.roymorgan.com/countries/new-zealand",
  updateSchedule: "Quarterly (Nielsen CMI) — check Jan, Apr, Jul, Oct each year",
  nextExpectedUpdate: "September 2026",
};

export const aucklandNewspapers = [
  {
    title: "New Zealand Herald (daily)",
    publisher: "NZME",
    format: "Print",
    readers: 404000,
    notes: "Average issue readership (Nielsen CMI Q4 2024). Print edition still NZ's highest-circulated daily.",
  },
  {
    title: "NZ Herald (brand, weekly)",
    publisher: "NZME",
    format: "Print + Digital brand",
    readers: 2300000,
    notes: "Combined brand audience across print, digital, and video. Not a single-issue figure — don't compare directly to print-only numbers.",
  },
  {
    title: "Herald on Sunday",
    publisher: "NZME",
    format: "Print (Sunday)",
    readers: 303000,
    notes: "Average issue readership (Nielsen CMI Q4 2024). NZ's most-read Sunday paper.",
  },
  {
    title: "Sunday Star-Times",
    publisher: "Stuff",
    format: "Print (Sunday)",
    readers: 159000,
    notes: "Roy Morgan mid-2025. Down from historic highs; readership declined ~30% over 5 years.",
  },
];

export const nationalMagazines = [
  { rank: 1, title: "AA Directions", publisher: "AA (NZ Automobile Association)", readers: 388000, ageSkew: "35–60+", notes: "Member magazine; high loyalty readership" },
  { rank: 2, title: "NZ Woman's Weekly", publisher: "Are Media", readers: 365000, ageSkew: "35–65+ female", notes: "Longest-running NZ consumer magazine; female-skewed" },
  { rank: 3, title: "NZ House & Garden", publisher: "Are Media", readers: 295000, ageSkew: "35–60 female", notes: "Premium lifestyle; affluent female audience" },
  { rank: 4, title: "NZ Listener", publisher: "Are Media", readers: 218000, ageSkew: "45–65+", notes: "TV guide + current affairs; declining but loyal older base" },
  { rank: 5, title: "Next", publisher: "Are Media", readers: 198000, ageSkew: "25–44 female", notes: "Younger female lifestyle" },
  { rank: 6, title: "Dish", publisher: "Are Media", readers: 174000, ageSkew: "30–55", notes: "Food/cooking; broad adult appeal" },
  { rank: 7, title: "NZ Gardener", publisher: "Are Media", readers: 152000, ageSkew: "45–65+", notes: "Niche but loyal; strong regional reach" },
  { rank: 8, title: "Fish & Game NZ", publisher: "Fish & Game NZ", readers: 130000, ageSkew: "30–55 male", notes: "Member publication; highly engaged niche" },
  { rank: 9, title: "Kia Ora (Air NZ)", publisher: "Air New Zealand", readers: 114000, ageSkew: "25–54", notes: "Inflight magazine; readership estimated from passenger volumes" },
  { rank: 10, title: "NZ Life & Leisure", publisher: "Are Media", readers: 96000, ageSkew: "40–60", notes: "Upmarket lifestyle; strong AB demographic index" },
];

export const publisherTotals = [
  { publisher: "Are Media", titles: ["NZ Woman's Weekly", "NZ House & Garden", "NZ Listener", "Next", "Dish", "NZ Gardener", "Kia Ora", "NZ Life & Leisure", "+ others"], totalMonthlyCume: 1620000, notes: "Largest magazine publisher in NZ by readership. Formerly Bauer Media." },
  { publisher: "NZME", titles: ["NZ Herald", "Herald on Sunday", "+ regionals"], totalMonthlyCume: 2300000, notes: "Largest NZ newspaper group by audience. Monthly brand figure, not weekly." },
  { publisher: "Stuff", titles: ["Dominion Post", "The Press", "Sunday Star-Times", "+ regionals"], totalMonthlyCume: 1800000, notes: "Second-largest NZ newspaper group; primarily Wellington and South Island strength." },
];

export const keyStats = [
  { value: "404K", label: "Daily NZ Herald print readers" },
  { value: "2.7M", label: "NZers read newspapers (Roy Morgan)" },
  { value: "1.65M", label: "NZers read magazines monthly" },
  { value: "~30%", label: "Decline in print readership since 2019" },
];

export const factChecks = [
  {
    claim: "\"The New Zealand Herald reaches 1.2 million people daily\" (NZME advertising collateral)",
    verdict: "Misleading framing",
    flag: "orange" as const,
    independent: "NZME's 'daily brand audience' of 1.2M combines print readers (~404,000/day), website unique visitors (averaged daily from 1.96M monthly uniques), video streams, and email newsletter opens. Each of these is measured differently. The print readership figure (Nielsen CMI) is the most rigorously measured. The combined number is real but should not be read as 1.2M people reading the physical Herald each day.",
  },
  {
    claim: "\"NZ Herald on Sunday is New Zealand's most read Sunday paper\" (NZME)",
    verdict: "Confirmed",
    flag: "green" as const,
    independent: "True per Nielsen CMI Q4 2024. Herald on Sunday readership (~303,000) exceeds Sunday Star-Times by approximately 144,000 readers. The gap has widened as Sunday Star-Times circulation has declined.",
  },
  {
    claim: "\"2.7 million New Zealanders read newspapers\" (Stuff / NZME joint industry claim)",
    verdict: "Plausible — based on Roy Morgan",
    flag: "green" as const,
    independent: "Roy Morgan mid-2025 puts total newspaper readership (print and digital editions) at approximately 2.7M. This uses 12-month cumulative readership, not average-issue figures. Average-issue figures are significantly lower. Make sure you know which metric your agency is buying against.",
  },
  {
    claim: "\"1.65 million New Zealanders read magazines\" (Are Media / industry)",
    verdict: "Confirmed within range",
    flag: "green" as const,
    independent: "Roy Morgan December 2025 survey estimates approximately 1.65M NZers read at least one magazine per month (print or digital). Are Media accounts for the largest share of this. Readership has declined from ~2.1M in 2019 but appears to be stabilising.",
  },
];
