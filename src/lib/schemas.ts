import { z } from "zod";

export const CHANNELS = [
  "TV (linear / BVOD)",
  "Radio / Audio",
  "Digital display / programmatic",
  "Social",
  "Search",
  "Out of home",
  "Newspaper / Magazine",
  "Branded / native content",
  "Influencer / creator",
  "Other",
] as const;

export const SPEND_PERIODS = [
  "Monthly",
  "Quarterly",
  "Annual",
  "Campaign / one-off",
] as const;

export type SpendPeriod = (typeof SPEND_PERIODS)[number];

export const SPEND_RANGES_BY_PERIOD: Record<SpendPeriod, readonly string[]> = {
  Monthly: [
    "Under $2K/month",
    "$2K–$5K/month",
    "$5K–$15K/month",
    "$15K–$50K/month",
    "Over $50K/month",
    "Prefer not to say",
  ],
  Quarterly: [
    "Under $6K/quarter",
    "$6K–$15K/quarter",
    "$15K–$50K/quarter",
    "$50K–$150K/quarter",
    "Over $150K/quarter",
    "Prefer not to say",
  ],
  Annual: [
    "Under $50K/year",
    "$50K–$150K/year",
    "$150K–$500K/year",
    "$500K–$1M/year",
    "Over $1M/year",
    "Prefer not to say",
  ],
  "Campaign / one-off": [
    "Under $10K total",
    "$10K–$30K total",
    "$30K–$100K total",
    "$100K–$300K total",
    "Over $300K total",
    "Prefer not to say",
  ],
};

// Backward-compat alias
export const SPEND_RANGES = SPEND_RANGES_BY_PERIOD.Annual;

// ── Source tracking ("how did you hear about us") ──────────────────────────

export const HOW_HEARD_OPTIONS = [
  "Google search",
  "LinkedIn",
  "Referral / word of mouth",
  "Press or media mention",
  "Instagram / Facebook",
  "Already a Super Media client",
  "Other",
] as const;

export type HowHeard = (typeof HOW_HEARD_OPTIONS)[number];

// ── Contact form ────────────────────────────────────────────────────────────

export const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(200),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(200).optional(),
  message: z
    .string()
    .min(10, "Please add a few words about what you need (at least 10 characters)")
    .max(2000),
  howHeard: z.string().max(100).optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;

// ── Social Scan ────────────────────────────────────────────────────────────

export const SocialScanInputSchema = z.object({
  entityType: z.enum(["individual", "business"]),
  name: z.string().min(2, "Please enter a name").max(200),
  website: z.string().max(500).optional(),
  industry: z.string().max(200).optional(),
  linkedinHandle: z.string().max(100).optional(),
  facebookHandle: z.string().max(100).optional(),
  instagramHandle: z.string().max(100).optional(),
  xHandle: z.string().max(100).optional(),
  additionalContext: z.string().max(500).optional(),
});

export type SocialScanInput = z.infer<typeof SocialScanInputSchema>;

export const SocialScanEnquirySchema = z.object({
  scanName: z.string().max(200),
  scanEntityType: z.enum(["individual", "business"]),
  contactName: z.string().min(2, "Please enter your name").max(200),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(50).optional(),
  organisation: z.string().max(200).optional(),
  message: z.string().max(1000).optional(),
  scanResultJson: z.string().max(20000).optional(),
  serviceInterest: z.enum(["full_report", "ai_footprint", "content_strategy", "benchmarking"]).optional(),
  howHeard: z.string().max(100).optional(),
});

export type SocialScanEnquiry = z.infer<typeof SocialScanEnquirySchema>;

export interface PlatformResult {
  name: string;
  status: "active" | "present" | "inactive" | "absent";
  score: number;
  finding: string;
  completenessScore?: number;    // 0-10 — how complete the profile setup is
  missingElements?: string[];    // e.g. ["profile photo", "website link", "featured section"]
  postingFrequency?: string;     // e.g. "3x weekly", "monthly", "not posting"
  topicFocus?: string;           // e.g. "NZ business and leadership commentary" or "no clear theme"
}

export interface AIVisibility {
  citationReadiness: "strong" | "partial" | "weak" | "absent";
  aiSearchFinding: string;       // one sentence on how they appear in AI-generated results
  contentIndexability: string;   // one sentence on content structure for AI discovery
}

export interface BenchmarkComparison {
  sector: string;                // the sector/industry used for comparison
  nzPeerRating: "top quartile" | "above average" | "average" | "below average" | "bottom quartile";
  nzPeerContext: string;         // one sentence comparing to NZ peers in the same sector
  globalStandardGap: string;     // one sentence on the gap to global best practice
  globalBestPracticeExample: string; // one sentence on what world-class looks like in this sector
}

export interface SocialScanResult {
  entityName: string;
  overallGrade: string;
  overallScore: number;
  summary: string;
  platforms: PlatformResult[];
  mediaCoverage: {
    status: "strong" | "present" | "limited" | "absent";
    finding: string;
    utilizationGap: boolean;
  };
  headlineFindings: string[];
  aiVisibility?: AIVisibility;
  benchmarking?: BenchmarkComparison;
}

export const SuperscanSchema = z.object({
  channels: z.array(z.enum(CHANNELS)).min(1, "Select at least one channel"),
  channelsOther: z.string().max(200).optional(),
  spendPeriod: z.enum(SPEND_PERIODS, {
    required_error: "Please select a spend period",
  }),
  spendRange: z.string().min(1, "Please select a spend range"),
  audience: z
    .string()
    .min(10, "Please describe your audience (at least 10 characters)")
    .max(500),
  email: z.string().email("Please enter a valid email address"),
  howHeard: z.string().max(100).optional(),
});

export type SuperscanInput = z.infer<typeof SuperscanSchema>;

export interface SuperscanResult {
  currentMix: string;
  risks: string[];
  opportunities: string[];
  question: string;
}
