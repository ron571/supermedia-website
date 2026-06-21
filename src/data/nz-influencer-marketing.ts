/**
 * NZ Influencer Marketing Data
 *
 * PRIMARY SOURCES:
 *   - NapoleonCat NZ social media stats: https://napoleoncat.com/stats/
 *   - Statista NZ influencer data
 *   - Super Media experience and market rate benchmarks
 *   - HypeAuditor NZ market reports (when available)
 *
 * HOW TO UPDATE:
 *   1. NZ creator rate benchmarks shift roughly annually — review each Jan/Feb
 *   2. Platform breakdown: check for new formats or fee changes on each platform
 *   3. TikTok and LinkedIn figures change fastest — check quarterly
 *   4. Update tiers[] rate ranges if the NZ market has moved
 *   5. Update platformBreakdown[] with any new buying notes or format changes
 *   6. Update dataInfo.lastUpdated
 *
 * NOTE: Rate benchmarks reflect NZ market as of update date. Global or
 * AU-sourced benchmarks are often 30–50% higher — always use NZ-specific data.
 *
 * NEXT EXPECTED UPDATE: January 2027 (annual rate review)
 */

export const dataInfo = {
  lastUpdated: "2026-06-21",
  surveyPeriod: "NZ market benchmarks 2026 / NapoleonCat December 2025",
  primarySource: "Super Media NZ market experience / NapoleonCat / Statista NZ",
  sourceUrl: "https://napoleoncat.com/stats/social-media-users-in-new_zealand/",
  updateSchedule: "Annually (January) — rate benchmarks and platform user counts",
  nextExpectedUpdate: "January 2027",
};

export const tiers = [
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

export const platformBreakdown = [
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

export const whatToCheck = [
  {
    check: "Audience location",
    why: "A creator with 50K followers may have only 8K NZ-based followers — the rest being Australian, US, or UK. You're paying for NZ reach.",
    howTo: "Request an Instagram/TikTok Insights screenshot showing top countries for followers and reach. If a creator won't provide this, don't proceed.",
  },
  {
    check: "Engagement rate vs followers",
    why: "Follower counts can be inflated by purchased followers or follow-for-follow schemes. Engagement rate (likes + comments ÷ followers) is harder to fake.",
    howTo: "For NZ nano/micro creators, expect 3–8% engagement. Below 1% at micro level is a red flag. Verify manually — spot-check recent posts.",
  },
  {
    check: "Content fit and brand safety",
    why: "Brand-adjacent influencer controversies do create brand risk. A creator's full content history matters.",
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
    howTo: "Require #ad or #sponsored disclosure in all posts. Do not accept posts where the paid nature is ambiguous. This is the brand's responsibility — not just the creator's.",
  },
];

export const factChecks = [
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
