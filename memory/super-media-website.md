# Super Media Website

**Live site:** https://www.supermedia.co.nz
**Repo:** https://github.com/ron571/supermedia-website (public)
**Deploy:** Vercel, CI/CD from GitHub main branch
**Vercel project ID:** prj_fLvQk9OuvvM4Pn8sq07jMwPhHLN8
**Vercel team ID:** team_HDo2lBYk3MNVN3syZJ16ZQgo

## Stack
Next.js App Router, TypeScript, Tailwind CSS, Vercel, Resend (transactional email), Upstash Redis (rate limiting), Anthropic API (Superscan AI analysis)

## Key services / pages
- /superscan — media audit tool powered by Claude
- /audience-reality-check — free audience analysis tool
- /services — media strategy, programmatic, audit services
- /thinking — editorial articles (Ron's byline)
- /press — Ron's press coverage (RNZ, NZ Herald, StopPress)
- /about — Ron's bio and team
- /resources — NZ media data (TV ratings, radio ratings, outdoor, digital audiences, press readership)

## Custom CSS tokens
- bg-navy (#0D1829), text-orange (#E8621A), bg-grey-light, text-body
- section-container (max-width wrapper with padding)
- grid-overlay (dark grid pattern used on navy hero sections)
- btn-primary, btn-outline, btn-outline-white

## Brand film (added June 2026)
- File: /public/brand-film.html (Claude Design bundled HTML, 1.49MB)
- Embedded on homepage below hero via /src/components/BrandFilmEmbed.tsx (client component, IntersectionObserver lazy-load)
- X-Frame-Options SAMEORIGIN override in next.config.mjs for /brand-film.html
- Blob URL → data URI conversion patch inside brand-film.html when window.self !== window.top

## Git workflow
- Push from Terminal: cd ~/supermedia-website && git push
- Recurring lock file issue: if "cannot lock ref HEAD" appears, run: rm ~/supermedia-website/.git/HEAD.lock (or index.lock) then retry
- Claude's sandbox cannot authenticate to GitHub — always ask Ron to run git push

## Environment variables (Vercel production)
- ANTHROPIC_API_KEY — required for Superscan
- RESEND_API_KEY — required for all transactional email (contact form + Superscan results)
- RESEND_FROM_EMAIL — must be on Resend-verified supermedia.co.nz domain
- UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN — optional rate limiting (remove if not in use)
- ADMIN_PASSWORD / ADMIN_TOKEN — admin panel
- NEXT_PUBLIC_SITE_URL — https://supermedia.co.nz

## Outstanding issues (as of June 2026)
- Email (Resend): RESEND_API_KEY may not be set in Vercel prod; supermedia.co.nz DNS records for Resend may not be verified. Check /api/contact and /api/superscan routes if email not arriving.
- Upstash Redis: if rate limiter errors appear in Vercel logs, credentials are wrong or env vars should be removed.
