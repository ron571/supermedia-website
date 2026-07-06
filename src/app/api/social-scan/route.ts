import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import Anthropic from "@anthropic-ai/sdk";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { SocialScanInputSchema, type SocialScanInput, type SocialScanResult } from "@/lib/schemas";

function getStorageRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_KV_REST_API_URL || !process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_KV_REST_API_URL,
    token: process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN,
  });
}

async function saveScanRecord(data: SocialScanInput, result: SocialScanResult): Promise<void> {
  const redis = getStorageRedis();
  if (!redis) {
    console.warn("Upstash Redis not configured — Social Scan run not saved for admin visibility.");
    return;
  }

  const id = `socialscan_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const now = Date.now();
  const record = {
    id,
    scannedAt: new Date().toISOString(),
    scannedAtNZ: new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" }),
    entityType: data.entityType,
    name: data.name,
    website: data.website ?? null,
    industry: data.industry ?? null,
    overallGrade: result.overallGrade,
    overallScore: result.overallScore,
    summary: result.summary,
  };

  try {
    await redis.pipeline()
      .set(`sm:socialscan:submission:${id}`, JSON.stringify(record))
      .zadd("sm:socialscan:submissions", { score: now, member: id })
      .exec();
  } catch (err) {
    console.error("Social Scan Redis storage error:", err);
  }
}

/** Extract and parse the first valid JSON object from a response that may contain prose. */
function extractJson(text: string): SocialScanResult {
  // Strip code fences if present
  const stripped = text.replace(/^```(?:json)?\s*/m, "").replace(/\s*```\s*$/m, "").trim();
  // Try the whole string first
  try { return JSON.parse(stripped) as SocialScanResult; } catch { /* fall through */ }
  // Find the first { and last } and parse that substring
  const start = stripped.indexOf("{");
  const end = stripped.lastIndexOf("}");
  if (start !== -1 && end > start) {
    return JSON.parse(stripped.slice(start, end + 1)) as SocialScanResult;
  }
  throw new Error("No JSON object found in response");
}

export const maxDuration = 120;

function buildSystemPrompt(entityType: string): string {
  const entityLabel = entityType === "individual" ? "individual / business leader" : "business or brand";
  return `You are Social Scan, a digital presence audit tool built by Super Media — an independent NZ media consultancy run by Ron Sneddon.

Your job is to research this ${entityLabel}'s publicly visible social media and digital footprint using web search, then return a structured JSON assessment. You assess what an outsider — a prospect, journalist, or investor — can actually see. You are specific and honest. You report what you find, not what you assume.

SEARCH INSTRUCTIONS:
Search for each item below. Be specific — use the website URL and/or "New Zealand" to anchor searches when the name is common or ambiguous. Include specific data points where visible (follower counts, post frequency, date of most recent post, bio completeness).

CRITICAL: If a website URL is provided, use the domain to anchor ALL searches. For example if the website is "supermedia.co.nz", search "Super Media site:linkedin.com" AND "site:supermedia.co.nz" to find content indexed from the actual site.

Required searches (conduct each one):
0. Website content — if a website URL is provided:
   a. Search "site:[domain]" to find all publicly indexed pages (blog posts, articles, thought leadership)
   b. Search "[domain]/thinking" OR "[domain]/blog" OR "[domain]/articles" OR "[domain]/news" — check for a content/insight section
   c. Note the most recent article or post date if visible in search results
1. LinkedIn — conduct TWO separate searches:
   ${entityType === "business"
     ? `a. Company page: search "[name] site:linkedin.com/company" AND "[name] LinkedIn company page New Zealand". The goal is the official company page, not a founder's or employee's personal profile. If a domain is provided, also search "linkedin.com [domain]" to find the page linked to the website.
   b. Founder/key person profile (secondary): note if a personal profile for the founder or principal is found, but assess it separately from the company page. A personal profile is NOT a substitute for a company page.
   c. If you find only personal profiles and no company page, report the company page as absent or unconfirmed — and note which personal profiles were found.`
     : `a. Personal profile: search "[name] site:linkedin.com/in" OR "[name] LinkedIn New Zealand".
   b. LinkedIn Articles: check whether the profile has a visible Articles section (long-form thought leadership posts). Note the most recent article if visible.`}
   For whichever profile type is primary, note: follower/connection count, posting frequency, most recent post date, and whether LinkedIn Articles are present.
2. Facebook — "[name] Facebook New Zealand" — check the ${entityType === "business" ? "page (not a personal profile)" : "profile or page"}. Note follower/like count, most recent post, and any long-form articles or notes.
3. Instagram — "[name] Instagram" — account, follower count, post frequency
4. X / Twitter — "[name] Twitter New Zealand" OR "[name] site:x.com" — account and activity
5. YouTube — "[name] YouTube New Zealand" — channel presence and activity
6. NZ news and media — "[name] NZ Herald" OR "[name] Stuff.co.nz" OR "[name] StopPress" OR "[name] RNZ" — press coverage
${entityType === "business" ? '7. Google Business Profile — search for "[name] New Zealand" Google Business listing' : ''}
8. AI search visibility — search for "[name] New Zealand [industry]" to assess whether they appear in knowledge panels, featured snippets, or AI-generated answers.

IMPORTANT — ACCURACY RULES:
- If a website URL is given, that URL is authoritative. Do not report "no blog found" without first searching the domain directly.
- If the name is generic (e.g. "Super Media", "Smith Consulting"), always add "New Zealand" or the domain to searches to ensure you find the correct entity, not a similarly-named company elsewhere.
- Report only what you actually find in searches. Do not guess or fill in gaps. If you cannot confirm something, say so explicitly in the finding.
- A website with a "Thinking", "Insights", "Articles", or "Blog" section IS an active blog/content presence — report it as such.
- For BUSINESS scans: do not count a founder's or employee's personal LinkedIn profile as the company's LinkedIn presence. If you find personal profiles but no company page, report the company LinkedIn as absent or unconfirmed and note the personal profiles separately in the finding text.
- For BUSINESS scans: if LinkedIn search returns multiple profiles (e.g. two profiles for the same person, or a founder's profile vs. a company page), identify which is the company page and assess that specifically. Note the discrepancy in the finding.
- When a profile or page is found but key metrics (follower count, post frequency) are not publicly visible in search results, state what WAS found (the page exists, the URL, any visible detail) rather than marking everything unknown. "Present but metrics not publicly visible" is more useful than "unknown".

STATUS DEFINITIONS:
- "active": Profile found, posts or activity visible within the last 90 days
- "present": Profile found, but activity is unclear or appears to be over 90 days old
- "inactive": Profile found but clearly dormant — no posts in 6+ months
- "absent": No credible profile found after searching

SCORING GUIDE (0–10):
0 = no presence found
2–3 = profile exists but poorly set up or maintained
4–5 = functional but unremarkable — basic presence, low engagement signals
6–7 = good — regular posting, decent follower count, professional presentation
8–9 = strong — consistent quality content, good following, clear strategy visible
10 = exceptional — industry-leading presence for their category

OVERALL GRADE:
88–100 = A+, 80–87 = A, 73–79 = B+, 65–72 = B, 57–64 = C+, 50–56 = C, 35–49 = D, <35 = F

PROFILE COMPLETENESS (for each platform found):
Score 0–10 on how complete the profile setup is. List specific missing elements (e.g. "profile photo", "banner image", "bio/about section", "website link", "featured content", "contact details", "location"). Only include completeness data for platforms where a profile was found.

CONTENT METRICS (for active or present platforms):
Note the posting frequency (e.g. "daily", "3x weekly", "weekly", "monthly", "sporadic — less than monthly", "not posting"). Identify the main topic focus — what themes or subjects dominate their content. Score consistency 0–10.

BENCHMARKING:
Based on the entity's industry/sector and what you found, assess how they compare to:
(a) Typical NZ peers in their sector — rate as "top quartile", "above average", "average", "below average", or "bottom quartile"
(b) Global best practice for their sector/role — describe the gap in one sentence and give one example of what world-class looks like.

AI VISIBILITY / CITATION READINESS:
Based on search results and content structure observed:
- "strong": Appears in knowledge panels or AI-generated answers; content well-structured for citation
- "partial": Some authoritative content visible but gaps in structure or coverage
- "weak": Present online but content not structured for AI discovery
- "absent": Minimal indexable content found

Media utilization gap = true if press coverage exists but they do not appear to be amplifying it on social media.

HEADLINE FINDINGS: Three specific, actionable observations — one strength, one gap, one opportunity. Be direct. No buzzwords.

RETURN ONLY valid JSON with no text before or after the JSON block:
{
  "entityName": "string — the name as found or confirmed",
  "overallGrade": "A+|A|B+|B|C+|C|D|F",
  "overallScore": number,
  "summary": "2–3 direct sentences assessing their overall digital presence. What an outsider sees. No fluff.",
  "platforms": [
    {
      "name": "LinkedIn",
      "status": "active|present|inactive|absent",
      "score": number,
      "finding": "One specific sentence. Include data points where found.",
      "completenessScore": number or null,
      "missingElements": ["list of specific missing profile elements"] or [],
      "postingFrequency": "frequency string or null if absent",
      "topicFocus": "main topic themes or null if absent/no content"
    }
  ],
  "mediaCoverage": {
    "status": "strong|present|limited|absent",
    "finding": "One sentence on what press or media presence was found.",
    "utilizationGap": boolean
  },
  "headlineFindings": [
    "Finding 1 — specific and direct",
    "Finding 2 — specific and direct",
    "Finding 3 — specific and direct"
  ],
  "aiVisibility": {
    "citationReadiness": "strong|partial|weak|absent",
    "aiSearchFinding": "One sentence on how this entity appears in AI-generated results and search features.",
    "contentIndexability": "One sentence on whether their content structure supports AI discovery and citation."
  },
  "benchmarking": {
    "sector": "the sector or industry used for comparison",
    "nzPeerRating": "top quartile|above average|average|below average|bottom quartile",
    "nzPeerContext": "One sentence comparing their presence to typical NZ peers in the same sector.",
    "globalStandardGap": "One sentence on what separates their current presence from global best practice.",
    "globalBestPracticeExample": "One sentence describing what a world-class presence looks like in their sector."
  }
}

Always include all of: LinkedIn, Facebook, Instagram, X/Twitter, YouTube${entityType === "business" ? ", Google Business" : ""} in the platforms array. Add any other significant platform if found. Set completenessScore and missingElements to null/[] for absent platforms.
${entityType === "business" ? `
For LinkedIn specifically: if you found a company page, assess that. If you found only personal profiles, set status to "absent" or "present" (as appropriate) and explain in the finding that a company page was not confirmed — and name any personal profiles that were found. Do NOT silently substitute a personal profile in place of the company page assessment.` : ""}`;
}

function buildUserPrompt(data: SocialScanInput): string {
  const domain = data.website
    ? data.website.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
    : null;

  const lines = [
    `Entity type: ${data.entityType === "individual" ? "Individual / business leader" : "Business or brand"}`,
    `Name to scan: ${data.name}`,
    data.website ? `Website: ${data.website}` : null,
    domain ? `Domain for site: searches: ${domain}` : null,
    data.industry ? `Industry/sector: ${data.industry}` : null,
    data.linkedinHandle ? `LinkedIn handle (user-provided — search this directly): ${data.linkedinHandle}` : null,
    data.facebookHandle ? `Facebook handle (user-provided — search this directly): ${data.facebookHandle}` : null,
    data.instagramHandle ? `Instagram handle (user-provided — search this directly): ${data.instagramHandle}` : null,
    data.xHandle ? `X / Twitter handle (user-provided — search this directly): ${data.xHandle}` : null,
    data.additionalContext ? `Additional context: ${data.additionalContext}` : null,
    "",
    domain
      ? `IMPORTANT: Start by searching "site:${domain}" to find all indexed content from their website. This will show blog posts, articles, and insight pages that may not be immediately obvious from the homepage.`
      : "",
    "Use web search to find their presence on each platform. Anchor all searches to New Zealand context unless the entity is clearly international. Then return the structured JSON assessment.",
  ];
  return lines.filter(Boolean).join("\n");
}

function hashIp(ip: string): string {
  const salt = process.env.RATE_LIMIT_SALT ?? "social-scan-salt";
  return createHash("sha256").update(ip + salt).digest("hex");
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

let ratelimitHour: Ratelimit | null = null;
let ratelimitDay: Ratelimit | null = null;

function getRateLimiters() {
  if (!process.env.UPSTASH_REDIS_REST_KV_REST_API_URL || !process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN) {
    return { hour: null, day: null };
  }
  if (!ratelimitHour) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_KV_REST_API_URL,
      token: process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN,
    });
    ratelimitHour = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(3, "1 h"), prefix: "socialscan:hour" });
    ratelimitDay = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(10, "24 h"), prefix: "socialscan:day" });
  }
  return { hour: ratelimitHour, day: ratelimitDay };
}

async function runScanWithWebSearch(data: SocialScanInput): Promise<SocialScanResult> {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const system = buildSystemPrompt(data.entityType);
  const userContent = buildUserPrompt(data);

  // Agentic loop — handles web_search built-in tool (server-side execution by Anthropic)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: any[] = [{ role: "user", content: userContent }];
  let finalText = "";

  for (let turn = 0; turn < 8; turn++) {
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tools: [{ type: "web_search_20250305" as any, name: "web_search", max_uses: 12 }] as any,
      system,
      messages,
    });

    // Collect any text blocks
    for (const block of response.content) {
      if (block.type === "text") {
        finalText = block.text;
      }
    }

    if (response.stop_reason === "end_turn") break;

    if (response.stop_reason === "tool_use") {
      // Add assistant turn
      messages.push({ role: "assistant", content: response.content });

      // Check whether tool_result blocks are already embedded (built-in tool behavior)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const hasResults = response.content.some((b: any) =>
        b.type === "tool_result" || b.type === "web_search_tool_result"
      );

      if (!hasResults) {
        // Provide placeholder results to unblock — shouldn't be needed for built-in tool
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const toolUseBlocks = response.content.filter((b: any) => b.type === "tool_use") as Anthropic.ToolUseBlock[];
        if (toolUseBlocks.length > 0) {
          messages.push({
            role: "user",
            content: toolUseBlocks.map((b) => ({
              type: "tool_result",
              tool_use_id: b.id,
              content: "Web search results will be provided by Anthropic servers.",
            })),
          });
        }
      }
    }
  }

  return extractJson(finalText);
}

async function runScanFallback(data: SocialScanInput): Promise<SocialScanResult> {
  // Fallback: Claude does its best without live web search
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const system = buildSystemPrompt(data.entityType) +
    "\n\nNOTE: Web search is unavailable for this scan. Provide the most accurate assessment you can based on general knowledge, and flag clearly in the summary that this is a knowledge-based estimate rather than a live scan. Mark platforms as 'absent' if you have no knowledge of their presence.";

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    temperature: 0.3,
    system,
    messages: [{ role: "user", content: buildUserPrompt(data) }],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  return extractJson(text);
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = SocialScanInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.issues }, { status: 400 });
  }
  const data = parsed.data;

  // Rate limiting
  const ip = getClientIp(req);
  const hashedIp = hashIp(ip);
  const { hour, day } = getRateLimiters();

  if (hour && day) {
    try {
      const [hourResult, dayResult] = await Promise.all([hour.limit(hashedIp), day.limit(hashedIp)]);
      if (!hourResult.success || !dayResult.success) {
        return NextResponse.json(
          { error: "You've run a few scans recently — try again in an hour or email ron@supermedia.co.nz" },
          { status: 429 }
        );
      }
    } catch (err) {
      console.error("Rate limiter error (skipping):", err instanceof Error ? err.message : String(err));
    }
  }

  // Run scan
  let result: SocialScanResult;
  try {
    result = await runScanWithWebSearch(data);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Web search scan failed, trying fallback:", msg);
    try {
      result = await runScanFallback(data);
    } catch (fallbackErr) {
      const fallbackMsg = fallbackErr instanceof Error ? fallbackErr.message : String(fallbackErr);
      console.error("Fallback scan also failed:", fallbackMsg);
      return NextResponse.json({ error: "Scan failed — please try again", detail: msg }, { status: 500 });
    }
  }

  try {
    await saveScanRecord(data, result);
  } catch (err) {
    console.error("saveScanRecord failed:", err instanceof Error ? err.message : String(err));
  }

  return NextResponse.json(result);
}
