import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

function getRedis() {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

function isAuthorised(req: NextRequest): boolean {
  // Accept the admin cookie (set by /api/admin/login for Next.js admin)
  const adminToken = (process.env.ADMIN_TOKEN ?? "sm-admin-token-default").trim();
  const cookie = req.cookies.get("sm_admin");
  if (cookie && cookie.value === adminToken) return true;

  // Also accept ?key= query param matching ADMIN_PASSWORD (for HTML admin panel fetches)
  const adminPassword = (process.env.ADMIN_PASSWORD ?? "showmethemoney").trim();
  const key = new URL(req.url).searchParams.get("key");
  if (key && key === adminPassword) return true;

  // Also accept the hardcoded ARC admin password used in the HTML panel
  if (key && key === "super2026") return true;

  return false;
}

export async function GET(req: NextRequest) {
  if (!isAuthorised(req)) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ submissions: [] });
  }

  try {
    // Fetch IDs newest first
    const ids = await redis.zrange("sm:arc:submissions", 0, -1, { rev: true });
    if (!ids.length) return NextResponse.json({ submissions: [] });

    const pipeline = redis.pipeline();
    for (const id of ids) {
      pipeline.get(`sm:arc:submission:${id}`);
    }
    const results = await pipeline.exec();

    const submissions = results
      .map((r) => {
        if (!r) return null;
        return typeof r === "string" ? JSON.parse(r) : r;
      })
      .filter(Boolean);

    return NextResponse.json({ submissions });
  } catch (err) {
    console.error("ARC submissions GET error:", err);
    return NextResponse.json({ submissions: [], error: "Failed to load submissions" }, { status: 500 });
  }
}
