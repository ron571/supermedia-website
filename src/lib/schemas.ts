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
