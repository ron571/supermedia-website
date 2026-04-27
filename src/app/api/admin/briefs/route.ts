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

// GET — list all saved briefs (most recent first)
export async function GET() {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ briefs: [], error: "Redis not configured" });
  }

  try {
    // Get all brief IDs sorted by timestamp (newest first)
    const ids = await redis.zrange("sm:briefs", 0, -1, { rev: true });

    if (!ids.length) return NextResponse.json({ briefs: [] });

    // Fetch all brief data in one pipeline
    const pipeline = redis.pipeline();
    for (const id of ids) {
      pipeline.get(`sm:brief:${id}`);
    }
    const results = await pipeline.exec();

    const briefs = results
      .map((r, i) => ({ id: ids[i], ...(r as object) }))
      .filter(Boolean);

    return NextResponse.json({ briefs });
  } catch (err) {
    console.error("Redis GET briefs error:", err);
    return NextResponse.json({ briefs: [], error: "Failed to load briefs" }, { status: 500 });
  }
}

// POST — save a new brief
export async function POST(req: NextRequest) {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ error: "Redis not configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { sessionId, brief } = body as { sessionId: string; brief: Record<string, unknown> };

  if (!sessionId || !brief) {
    return NextResponse.json({ error: "sessionId and brief are required" }, { status: 400 });
  }

  const now = Date.now();
  const id = sessionId;

  const payload = {
    ...brief,
    sessionId,
    savedAt: new Date().toISOString(),
    savedAtNZ: new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" }),
  };

  try {
    await redis.pipeline()
      .set(`sm:brief:${id}`, JSON.stringify(payload))
      .zadd("sm:briefs", { score: now, member: id })
      .exec();

    return NextResponse.json({ ok: true, id });
  } catch (err) {
    console.error("Redis save brief error:", err);
    return NextResponse.json({ error: "Failed to save brief" }, { status: 500 });
  }
}

// DELETE — remove a brief by id
export async function DELETE(req: NextRequest) {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: "Redis not configured" }, { status: 503 });

  const { id } = await req.json() as { id: string };
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  await redis.pipeline()
    .del(`sm:brief:${id}`)
    .zrem("sm:briefs", id)
    .exec();

  return NextResponse.json({ ok: true });
}
