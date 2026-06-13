# Super Media Website — Handoff Document

**Project:** supermedia.co.nz  
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Vercel, Resend, Upstash Redis, Anthropic API  
**Repo:** https://github.com/ron571/supermedia-website  
**Live site:** https://www.supermedia.co.nz

---

## Outstanding Issues

### 1. Email not sending (CRITICAL — affects contact form + Superscan)

**Root cause:** `RESEND_API_KEY` is not set in Vercel production environment variables, and the Resend domain `supermedia.co.nz` has not been verified (DNS records not yet added).

**Status:** DNS records have been generated in Resend but not yet added to the domain's DNS provider.

**What needs to happen:**

1. Add these DNS records at the domain registrar/DNS provider for `supermedia.co.nz`:
   - **TXT** — name: `resend._domainkey` — value: the DKIM key shown in Resend dashboard
   - **MX** — name: `send` — value: `feedback-smtp.us-east-1.amazonses.com`, priority: `10`
   - **TXT** — name: `send` — value: the SPF record shown in Resend dashboard
   - **TXT** — name: `_dmarc` — value: `v=DMARC1; p=none;` (optional but recommended)

2. Once DNS propagates, click **Verify** in the Resend dashboard. The domain dot should turn green.

3. In Vercel → Settings → Environment Variables, add:
   - `RESEND_API_KEY` = your Resend API key (format: `re_xxxxxxxxxxxxxxxx`, found at resend.com → API Keys)
   - `RESEND_FROM_EMAIL` = `noreply@supermedia.co.nz` (or `superscan@supermedia.co.nz` — must match verified domain)

4. Redeploy (or trigger a redeploy from Vercel dashboard) after adding env vars.

**Affected files:**
- `src/app/api/contact/route.ts` — contact form email
- `src/app/api/superscan/route.ts` — Superscan results email + lead notification to ron@supermedia.co.nz

---

### 2. Superscan returning 500 errors (likely fixed pending deploy + env vars)

**Root cause (fixed in code):** The Upstash Redis rate limiter was making an unguarded fetch. If the Redis credentials were wrong or unavailable, it threw `TypeError: fetch failed` before the Anthropic API call, crashing the entire route with a 500.

**Fix applied:** Wrapped the rate limiter call in try/catch so Redis failures fall through gracefully rather than crashing the route. Committed as `fix: catch Upstash rate limiter errors so they don't crash the route`.

**Secondary issue:** Also added proper error logging to both email send functions (previously errors were silently swallowed by `Promise.allSettled`).

**To verify fix is working:** Once `RESEND_API_KEY` and Resend domain are set up, run a test scan at supermedia.co.nz/superscan. Check Vercel runtime logs for any `Rate limiter error (skipping):` messages — if present, the Upstash Redis credentials in Vercel env vars are also wrong and should be fixed or removed.

**Upstash env vars to check:**
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

If these are set to incorrect values, either fix them (get fresh credentials from upstash.com) or remove them — the rate limiter is optional and the app works without it.

---

## Environment Variables Checklist

All of these need to be set in Vercel → Settings → Environment Variables → Production:

| Variable | Required | Notes |
|---|---|---|
| `ANTHROPIC_API_KEY` | Yes | Anthropic console → API Keys |
| `RESEND_API_KEY` | Yes | resend.com → API Keys. Currently missing. |
| `RESEND_FROM_EMAIL` | Yes | e.g. `noreply@supermedia.co.nz`. Must be on verified Resend domain. |
| `UPSTASH_REDIS_REST_URL` | Optional | Rate limiting for Superscan. Remove if not using. |
| `UPSTASH_REDIS_REST_TOKEN` | Optional | Rate limiting for Superscan. Remove if not using. |
| `RATE_LIMIT_SALT` | Optional | Salt for IP hashing. Any random string. |
| `ADMIN_PASSWORD` | Yes | Admin panel login |
| `ADMIN_TOKEN` | Yes | Admin session token |
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://supermedia.co.nz` |
| `NEXT_PUBLIC_CALENDLY_URL` | No | Calendly booking link (no longer used on contact page) |

---

## Key Files

| File | Purpose |
|---|---|
| `src/app/api/superscan/route.ts` | Superscan API — calls Anthropic, sends result email to user, sends lead notification to ron@supermedia.co.nz |
| `src/app/api/contact/route.ts` | Contact form API — sends enquiry email to ron@supermedia.co.nz |
| `src/app/api/newsletter/route.ts` | Newsletter signup |
| `src/components/SuperscanForm.tsx` | Superscan front-end form |
| `src/components/ContactForm.tsx` | Contact form component |
| `src/app/(main)/contact/page.tsx` | Let's Talk page |
| `src/app/superscan/page.tsx` | Superscan page |
| `src/lib/schemas.ts` | Zod schemas (SuperscanSchema etc.) |

---

## Recent Commits (this session)

- `fix: log email send failures` — email send errors now logged to Vercel runtime logs instead of silently disappearing
- `debug: log full Claude API error cause` — added cause logging to Anthropic API errors
- `fix: catch Upstash rate limiter errors so they don't crash the route` — prevents Redis failures from returning 500 to users
- `update: replace Book a call with Ring Ron phone link on contact page` — contact page left column now shows "Ring Ron on 021 393946" as a `tel:` link instead of Calendly

---

## How emails are sent

Both the contact form and Superscan use [Resend](https://resend.com) for transactional email.

- Contact form → `POST /api/contact` → sends to `ron@supermedia.co.nz` with `replyTo` set to the sender
- Superscan → `POST /api/superscan` → sends results to the user's email + a lead notification to `ron@supermedia.co.nz`
- Superscan emails are sent as non-blocking side effects after the API response is returned (using `Promise.allSettled`)

The `from` address used is `process.env.RESEND_FROM_EMAIL ?? "superscan@supermedia.co.nz"`. This must be an address on a Resend-verified domain.
