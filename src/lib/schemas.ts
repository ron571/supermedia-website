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

// ── Social Scan ────────────────────────────────────────────────────────────

export const SocialScanInputSchema = z.object({
  entityType: z.enum(["individual", "business"]),
  name: z.string().min(2, "Please enter a name").max(200),
  website: z.string().max(500).optional(),
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
});

export type SocialScanEnquiry = z.infer<typeof SocialScanEnquirySchema>;

export interface PlatformResult {
  name: string;
  status: "active" | "present" | "inactive" | "absent";
  score: number;
  finding: string;
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
});

export type SuperscanInput = z.infer<typeof SuperscanSchema>;

export interface SuperscanResult {
  currentMix: string;
  risks: string[];
  opportunities: string[];
  question: string;
}
