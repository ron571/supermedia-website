/**
 * NZ Cinema Advertising Data
 *
 * PRIMARY SOURCES:
 *   - Val Morgan NZ: https://www.valmorgannz.com/ (audience data, network info)
 *   - Cinema of NZ (CONZ): https://www.cinemaofnz.co.nz/ (admissions data)
 *   - Individual cinema chain websites for screen/location counts
 *
 * HOW TO UPDATE:
 *   1. Val Morgan publishes annual audience research — check their website
 *   2. CONZ publishes annual admissions data — check cinemaofnz.co.nz
 *   3. Update cinemaChains[] screen counts (chains update these annually)
 *   4. Update audienceProfile[] if new Val Morgan demographic research is released
 *   5. Update buyingFormats[] CPM ranges if market rates have shifted
 *   6. Re-fact-check factChecks[] against any new Val Morgan research releases
 *   7. Update dataInfo.lastUpdated
 *
 * NEXT EXPECTED UPDATE: June 2027 (annual Val Morgan research release)
 */

export const dataInfo = {
  lastUpdated: "2026-06-21",
  surveyPeriod: "Val Morgan NZ 2025 / Cinema of NZ admissions data 2024/25",
  primarySource: "Val Morgan NZ / Cinema of NZ / operator-reported screen counts",
  sourceUrl: "https://www.valmorgannz.com/",
  updateSchedule: "Annually — Val Morgan research typically released mid-year",
  nextExpectedUpdate: "June 2027",
};

export const cinemaChains = [
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

export const buyingFormats = [
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

export const audienceProfile = [
  { group: "14–24", shareOfAdmissions: "24%", indexVsPopulation: 148, note: "Hardest group to reach via linear TV and press. Cinema over-indexes strongly." },
  { group: "25–39", shareOfAdmissions: "31%", indexVsPopulation: 118, note: "Peak cinema-going age. Strong household income; family and couple audiences." },
  { group: "40–54", shareOfAdmissions: "26%", indexVsPopulation: 102, note: "Even index; balanced audience for broad brand campaigns." },
  { group: "55+", shareOfAdmissions: "19%", indexVsPopulation: 74, note: "Under-indexes vs population; lower cinema frequency in this group." },
];

export const keyStats = [
  { value: "350+", label: "Val Morgan NZ screens" },
  { value: "10–12M", label: "Annual NZ cinema admissions" },
  { value: "$55–$90", label: "Typical CPM range" },
  { value: "#1", label: "Attention environment vs all media" },
];

export const factChecks = [
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
