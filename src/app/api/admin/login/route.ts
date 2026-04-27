import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE = "sm_admin";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

// Fallback password — used when ADMIN_PASSWORD env var is not set
const FALLBACK_PASSWORD = "showmethemoney";
// Fallback token — used when ADMIN_TOKEN env var is not set
const FALLBACK_TOKEN = "sm-admin-token-default";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { password } = body as Record<string, string>;

  // Use env vars if set, otherwise fall back to defaults
  // Trim to avoid whitespace issues when copying into Vercel dashboard
  const adminPassword = (process.env.ADMIN_PASSWORD ?? FALLBACK_PASSWORD).trim();
  const adminToken = (process.env.ADMIN_TOKEN ?? FALLBACK_TOKEN).trim();

  const match = (password ?? "").trim() === adminPassword;

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
