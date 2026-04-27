import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";

const ADMIN_COOKIE = "sm_admin";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { password } = body as Record<string, string>;

  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminToken = process.env.ADMIN_TOKEN;

  if (!adminPassword || !adminToken) {
    console.error("ADMIN_PASSWORD or ADMIN_TOKEN not set");
    return NextResponse.json({ error: "Admin not configured" }, { status: 500 });
  }

  // Constant-time comparison to prevent timing attacks
  let match = false;
  try {
    const a = Buffer.from(password ?? "");
    const b = Buffer.from(adminPassword);
    if (a.length === b.length) {
      match = timingSafeEqual(a, b);
    }
  } catch {
    match = false;
  }

  if (!match) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, adminToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });

  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { maxAge: 0, path: "/" });
  return res;
}
