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

export const SPEND_RANGES = [
  "Under $50K/year",
  "$50K–$150K/year",
  "$150K–$500K/year",
  "$500K–$1M/year",
  "Over $1M/year",
  "Prefer not to say",
] as const;

export const SuperscanSchema = z.object({
  channels: z.array(z.enum(CHANNELS)).min(1, "Select at least one channel"),
  channelsOther: z.string().max(200).optional(),
  spendRange: z.enum(SPEND_RANGES),
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
