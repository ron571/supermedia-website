/**
 * NZ Digital Audiences Data
 *
 * PRIMARY SOURCES:
 *   - SemRush (website traffic): https://www.semrush.com/analytics/traffic/
 *   - Nielsen Digital Ratings NZ (audience index data)
 *     Published monthly — check NZME/Stuff press releases or Nielsen NZ
 *   - NapoleonCat (social media user counts): https://napoleoncat.com/stats/
 *   - Statista NZ social media data
 *
 * HOW TO UPDATE:
 *   1. SemRush — search each domain in Traffic Analytics for NZ monthly visits
 *      (requires SemRush subscription or free limited lookups)
 *   2. Nielsen Digital Ratings — check for quarterly audience index updates
 *      via NZME/Stuff press centres
 *   3. NapoleonCat — visit https://napoleoncat.com/stats/social-media-users-in-new_zealand/
 *      to get updated NZ user counts for each platform
 *   4. Update websites[] and socialPlatforms[] arrays
 *   5. Update dataInfo.lastUpdated
 *
 * NOTE: Age/gender index values are estimates based on Nielsen Digital Ratings
 * methodology. The ranking algorithm uses ageIndex × genderIndex × monthlyVisits.
 *
 * NEXT EXPECTED UPDATE: End of September 2026 (Q3 data)
 */

export const dataInfo = {
  lastUpdated: "2026-06-21",
  surveyPeriod: "SemRush April 2026 / NapoleonCat December 2025",
  primarySource: "SemRush (traffic) / Nielsen Digital Ratings (index) / NapoleonCat (social users)",
  sourceUrl: "https://napoleoncat.com/stats/social-media-users-in-new_zealand/",
  updateSchedule: "Quarterly — SemRush traffic data and NapoleonCat social user counts",
  nextExpectedUpdate: "September 2026",
};

export type AgeGroup = "all" | "18-29" | "30-54" | "55plus";
export type Gender = "all" | "female" | "male";

export interface WebsiteRow {
  domain: string;
  category: string;
  monthlyVisits: number; // millions
  notes: string;
  ageIndex: Record<AgeGroup, number>;
  genderIndex: Record<Gender, number>;
}

export interface SocialRow {
  platform: string;
  users: number;
  ageIndex: Record<AgeGroup, number>;
  genderIndex: Record<Gender, number>;
  notes: string;
}

export const websites: WebsiteRow[] = [
  { domain: "google.com", category: "Search", monthlyVisits: 403.1, notes: "Dominant across all demographics — no meaningful age or gender skew", ageIndex: { all: 100, "18-29": 108, "30-54": 102, "55plus": 88 }, genderIndex: { all: 100, female: 99, male: 101 } },
  { domain: "youtube.com", category: "Video", monthlyVisits: 161.2, notes: "Strong 18–39; declining with age but still top-3 for 55+", ageIndex: { all: 100, "18-29": 142, "30-54": 106, "55plus": 68 }, genderIndex: { all: 100, female: 91, male: 112 } },
  { domain: "facebook.com", category: "Social", monthlyVisits: 41.6, notes: "Older skew vs other social platforms; broad reach 30–65+", ageIndex: { all: 100, "18-29": 72, "30-54": 108, "55plus": 118 }, genderIndex: { all: 100, female: 112, male: 87 } },
  { domain: "trademe.co.nz", category: "Marketplace", monthlyVisits: 22.7, notes: "NZ-owned; strong across all adult groups, slight 35–54 peak", ageIndex: { all: 100, "18-29": 82, "30-54": 116, "55plus": 104 }, genderIndex: { all: 100, female: 102, male: 98 } },
  { domain: "stuff.co.nz", category: "News", monthlyVisits: 18.4, notes: "Broad NZ news audience; strongest with 30–54 and 45+ skew", ageIndex: { all: 100, "18-29": 64, "30-54": 114, "55plus": 126 }, genderIndex: { all: 100, female: 108, male: 93 } },
  { domain: "nzherald.co.nz", category: "News", monthlyVisits: 16.3, notes: "Auckland-centric; strong 35–60; premium advertiser audience", ageIndex: { all: 100, "18-29": 58, "30-54": 112, "55plus": 128 }, genderIndex: { all: 100, female: 104, male: 97 } },
  { domain: "instagram.com", category: "Social", monthlyVisits: 12.8, notes: "Strong 18–34; female-skewed; visual content platform", ageIndex: { all: 100, "18-29": 168, "30-54": 92, "55plus": 32 }, genderIndex: { all: 100, female: 124, male: 74 } },
  { domain: "wikipedia.org", category: "Reference", monthlyVisits: 10.6, notes: "Consistent across all ages; slight male and 18–44 skew", ageIndex: { all: 100, "18-29": 118, "30-54": 104, "55plus": 78 }, genderIndex: { all: 100, female: 92, male: 109 } },
  { domain: "reddit.com", category: "Social / Forums", monthlyVisits: 9.2, notes: "Strongly male-skewed; peaks 18–34; niche but highly engaged", ageIndex: { all: 100, "18-29": 186, "30-54": 88, "55plus": 24 }, genderIndex: { all: 100, female: 62, male: 142 } },
  { domain: "countdown.co.nz", category: "Retail / Grocery", monthlyVisits: 8.4, notes: "Grocery online shopping; female-skewed; peaks 30–54", ageIndex: { all: 100, "18-29": 76, "30-54": 122, "55plus": 102 }, genderIndex: { all: 100, female: 132, male: 64 } },
];

export const socialPlatforms: SocialRow[] = [
  { platform: "Facebook", users: 4624500, ageIndex: { all: 100, "18-29": 72, "30-54": 108, "55plus": 118 }, genderIndex: { all: 100, female: 112, male: 87 }, notes: "87.5% of NZ population. Largest NZ social platform by users." },
  { platform: "YouTube", users: 4000000, ageIndex: { all: 100, "18-29": 142, "30-54": 106, "55plus": 68 }, genderIndex: { all: 100, female: 91, male: 112 }, notes: "~85% of online NZers use YouTube. Not purely social but dominant video platform." },
  { platform: "Instagram", users: 2780600, ageIndex: { all: 100, "18-29": 168, "30-54": 92, "55plus": 32 }, genderIndex: { all: 100, female: 124, male: 74 }, notes: "52.6% of NZ population. 25–34s are the largest Instagram group." },
  { platform: "TikTok", users: 1900000, ageIndex: { all: 100, "18-29": 224, "30-54": 72, "55plus": 18 }, genderIndex: { all: 100, female: 118, male: 82 }, notes: "60% weekly usage among 18–29s. Rapidly growing. Under-30s dominant." },
  { platform: "LinkedIn", users: 1800000, ageIndex: { all: 100, "18-29": 96, "30-54": 128, "55plus": 74 }, genderIndex: { all: 100, female: 98, male: 103 }, notes: "B2B-skewed; strong 30–54 professional audience. Growing in NZ." },
];
