/**
 * NZ Radio Ratings Data
 *
 * PRIMARY SOURCE: GfK Commercial Radio Survey (released twice yearly)
 *   S1 = June/July  |  S2 = November/December
 *
 * HOW TO UPDATE:
 *   1. GfK releases summary data via press releases on their NZ website:
 *      https://www.gfk.com/en-nz/insights/press-release
 *   2. NZME publishes results at: https://www.nzme.co.nz/media (press centre)
 *   3. Mediaworks publishes results at: https://www.mediaworks.co.nz/news
 *   4. Update nationalStations[], aucklandShares[], networkNational[], ageBreakdown[]
 *   5. Re-fact-check each item in factChecks[] against the new survey data
 *   6. Update dataInfo.lastUpdated and dataInfo.surveyPeriod
 *
 * NEXT EXPECTED UPDATE: November/December 2026 (GfK S2 2026)
 */

export const dataInfo = {
  lastUpdated: "2026-06-21",
  surveyPeriod: "GfK Commercial Radio Survey S1 2026",
  primarySource: "GfK NZ / NZME press releases / Mediaworks press releases",
  sourceUrl: "https://www.gfk.com/en-nz/insights/press-release",
  updateSchedule: "Twice yearly — S1 (June/July) and S2 (November/December)",
  nextExpectedUpdate: "November 2026",
};

export const nationalStations = [
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

export const aucklandShares = [
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

export const networkNational = [
  { network: "NZME", stations: ["Newstalk ZB", "ZM", "The Hits", "Gold", "Hauraki", "Coast", "Flava"], combinedReach: 1850000, shareOfListening: 42.3 },
  { network: "Mediaworks", stations: ["The Breeze", "More FM", "Mai FM", "The Rock", "Magic Radio", "The Sound"], combinedReach: 1420000, shareOfListening: 31.6 },
  { network: "RNZ (public)", stations: ["RNZ National", "RNZ Concert"], combinedReach: 620000, shareOfListening: 11.4 },
  { network: "Other / Independent", stations: ["Various"], combinedReach: 520000, shareOfListening: 14.7 },
];

export const ageBreakdown = [
  { group: "18–29", topStation: "ZM / Mai FM", format: "CHR / Urban", nzmeShare: "~38%", mediaworksShare: "~35%", note: "Highest streaming substitution; lowest total radio reach of any adult group" },
  { group: "30–44", topStation: "The Hits / More FM", format: "Pop / CHR", nzmeShare: "~41%", mediaworksShare: "~33%", note: "Core commercial radio demographic; strong parental-household reach" },
  { group: "45–54", topStation: "Newstalk ZB / The Breeze", format: "News-talk / Easy", nzmeShare: "~46%", mediaworksShare: "~31%", note: "Highest radio loyalty; drives breakfast and drive ratings" },
  { group: "55+", topStation: "Newstalk ZB / Gold", format: "News-talk / Oldies", nzmeShare: "~52%", mediaworksShare: "~28%", note: "NZME dominates this group strongly; minimal streaming substitution" },
];

export const keyStats = [
  { value: "3.41M", label: "Weekly commercial radio listeners" },
  { value: "3.9M", label: "Total radio reach (incl. RNZ)" },
  { value: "73%", label: "Of NZ adults listen weekly" },
  { value: "~13", label: "Major NZ commercial markets" },
];

export const factChecks = [
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
