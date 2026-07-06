import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_KV_REST_API_URL || !process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_KV_REST_API_URL,
    token: process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN,
  });
}

function isAuthorised(req: NextRequest): boolean {
  // Accept the admin cookie (set by /api/admin/login for the Next.js admin area)
  const adminToken = (process.env.ADMIN_TOKEN ?? "sm-admin-token-default").trim();
  const cookie = req.cookies.get("sm_admin");
  if (cookie && cookie.value === adminToken) return true;

  // Also accept ?key= query param matching ADMIN_PASSWORD
  const adminPassword = (process.env.ADMIN_PASSWORD ?? "showmethemoney").trim();
  const key = new URL(req.url).searchParams.get("key");
  if (key && key === adminPassword) return true;

  return false;
}

async function fetchList(redis: Redis, indexKey: string, recordPrefix: string): Promise<Record<string, unknown>[]> {
  const ids = await redis.zrange(indexKey, 0, -1, { rev: true });
  if (!ids.length) return [];

  const pipeline = redis.pipeline();
  for (const id of ids) {
    pipeline.get(`${recordPrefix}${id}`);
  }
  const results = await pipeline.exec();

  return results
    .map((r) => {
      if (!r) return null;
      return typeof r === "string" ? JSON.parse(r) : r;
    })
    .filter(Boolean) as Record<string, unknown>[];
}

export async function GET(req: NextRequest) {
  if (!isAuthorised(req)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({
      superscan: [],
      socialScanRuns: [],
      socialScanEnquiries: [],
      newsletter: [],
      contact: [],
      error: "Upstash Redis not configured — nothing to show.",
    });
  }

  try {
    const [superscan, socialScanRuns, socialScanEnquiries, newsletter, contact] = await Promise.all([
      fetchList(redis, "sm:superscan:submissions", "sm:superscan:submission:"),
      fetchList(redis, "sm:socialscan:submissions", "sm:socialscan:submission:"),
      fetchList(redis, "sm:socialscan:enquiries", "sm:socialscan:enquiry:"),
      fetchList(redis, "sm:newsletter:subscribers", "sm:newsletter:subscriber:"),
      fetchList(redis, "sm:contact:submissions", "sm:contact:submission:"),
    ]);

    return NextResponse.json({ superscan, socialScanRuns, socialScanEnquiries, newsletter, contact });
  } catch (err) {
    console.error("Leads GET error:", err);
    return NextResponse.json(
      { superscan: [], socialScanRuns: [], socialScanEnquiries: [], newsletter: [], contact: [], error: "Failed to load leads" },
      { status: 500 }
    );
  }
}
