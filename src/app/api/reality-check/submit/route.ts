import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import Anthropic from "@anthropic-ai/sdk";

export const maxDuration = 60;

function getRedis() {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

function buildAssessmentPrompt(payload: {
  profile: Record<string, unknown>;
  results: { assumed: Record<string, number>; actual: Record<string, number>; score: number; aiRate: number };
}): string {
  const { profile, results } = payload;
  const { assumed, actual, score, aiRate } = results;

  // Derive top over/under-assumed channels from gap data
  const channels = Object.keys(assumed);
  const gaps = channels.map(ch => ({
    ch,
    diff: (assumed[ch] || 0) - (actual[ch] || 0), // positive = over-assumed
  }));
  const overAssumed = gaps
    .filter(g => g.diff > 0)
    .sort((a, b) => b.diff - a.diff)
    .slice(0, 3)
    .map(g => `${g.ch} (+${g.diff.toFixed(0)}pp over-assumed)`)
    .join(", ") || "none identified";
  const underServed = gaps
    .filter(g => g.diff < 0)
    .sort((a, b) => a.diff - b.diff)
    .slice(0, 3)
    .map(g => `${g.ch} (${Math.abs(g.diff).toFixed(0)}pp under-served)`)
    .join(", ") || "none identified";

  const mediaFavs = Array.isArray(profile.mediaFavs) ? (profile.mediaFavs as string[]).join(", ") : String(profile.mediaFavs || "");
  const researchHabits = Array.isArray(profile.researchHabits) ? (profile.researchHabits as string[]).join(", ") : String(profile.researchHabits || "");

  return `You are Ron Sneddon, an expert NZ media strategist at Super Media — an independent Auckland media agency with 35 years of experience on both sides of the NZ media table.

A marketer has just completed the Super Media Audience Reality Check. Here is their submission:

AUDIENCE PROFILE
Age: ${profile.age}
Gender: ${profile.gender}
Income: ${profile.income}
Education: ${profile.education}
Occupation: ${profile.occupation}
Region: ${profile.region}
Area type: ${profile.urban}
Children: ${profile.children}
Commute: ${profile.transport}
Housing: ${profile.housing}
Assumed media channels: ${mediaFavs}
Research habits: ${researchHabits}
Daily social time: ${profile.socialTime}
Primary device: ${profile.device}

COMPUTED RESULTS
Assumption Alignment Score: ${score}%
AI Search adoption for this audience: ${aiRate}%
Top over-assumed channels (agency vs actual): ${overAssumed}
Top under-served channels (actual vs agency): ${underServed}

Write a concise, direct media strategy assessment — in Ron's voice — covering:
1. What this alignment score tells us about the current approach (2–3 sentences, no hedging)
2. The 2–3 biggest channel opportunities this audience profile actually supports (ranked, brief rationale citing the gap data)
3. One or two structural risks in the current assumed approach
4. A single recommended next step for this client

Tone: confident, direct, slightly contrarian, no jargon. Short sentences. No fluff. Max 350 words.`;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const payload = body as {
    submittedAt: string;
    profile: Record<string, unknown>;
    results: { assumed: Record<string, number>; actual: Record<string, number>; score: number; aiRate: number };
  };

  if (!payload.profile || !payload.results) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const id = `arc_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const now = Date.now();

  // Generate Claude assessment (non-blocking on failure)
  let assessment: string | null = null;
  let assessmentError: string | null = null;

  try {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const message = await anthropic.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 600,
      messages: [{ role: "user", content: buildAssessmentPrompt(payload) }],
    });
    assessment = message.content[0].type === "text" ? message.content[0].text : null;
  } catch (err) {
    assessmentError = err instanceof Error ? err.message : String(err);
    console.error("ARC Claude assessment error:", assessmentError);
  }

  // Store in Redis (don't let storage failure block response)
  const redis = getRedis();
  if (redis) {
    const record = {
      id,
      submittedAt: payload.submittedAt || new Date().toISOString(),
      submittedAtNZ: new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" }),
      profile: payload.profile,
      results: payload.results,
      assessment,
      assessmentError,
      status: "pending",
    };

    try {
      await redis.pipeline()
        .set(`sm:arc:submission:${id}`, JSON.stringify(record))
        .zadd("sm:arc:submissions", { score: now, member: id })
        .exec();
    } catch (err) {
      console.error("ARC Redis storage error:", err);
    }
  }

  return NextResponse.json({ success: true });
}
