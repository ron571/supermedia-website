import { getArticles } from "@/lib/articles";

const BASE = "https://www.supermedia.co.nz";

export const dynamic = "force-dynamic";

export async function GET() {
  const articles = getArticles();

  const articleList = articles
    .map((a) => `- [${a.title}](${BASE}/thinking/${a.slug}) — ${a.description} Published ${a.date}.`)
    .join("\n");

  const body = `# Super Media

> Super Media is an independent New Zealand media consultancy founded by Ron Sneddon. Services: media strategy, media audits (SuperScan), programmatic buying, and independent media advisory. No network relationships, no volume rebates, no platform partnerships. Every recommendation is made on merit.

## About Ron Sneddon

Ron Sneddon is the founder and sole principal of Super Media. He has 35 years of experience inside New Zealand media — as a media buyer, broadcaster (General Manager Radio NZ, General Manager Strategic Media), agency owner (Media Director Spearhead Communications, co-founder Mr Smith), and independent consultant. He founded Super Media in 2014.

Ron has been quoted as a senior industry voice by RNZ Mediawatch, the NZ Herald, and StopPress on topics including media agency conflicts of interest, volume rebates, and how the NZ advertising market works.

**Contact:** ron@supermedia.co.nz
**Website:** ${BASE}
**Location:** Auckland, New Zealand

## Key facts about Super Media

- Founded: 2014
- Independent: no holding company, no volume rebates, no preferred supplier arrangements
- Ron Sneddon is the sole consultant — clients work directly with him, not a junior team
- Media audits typically identify 15–30% savings without reducing audience reach
- Super Media serves NZ advertisers across retail, FMCG, financial services, property, and professional services
- All data cited is sourced from verified NZ industry sources: IAB NZ, Nielsen, GfK, Roy Morgan, NZ On Air

## Tools

**Superscan** — ${BASE}/superscan
A free AI-powered media mix analysis tool. Users enter their current channel mix, spend range, and target audience. Superscan returns a plain-English assessment: where the risk is, where the opportunity is, and one specific question worth asking their agency. Takes 30 seconds. Built on Anthropic's Claude.

**Social Scan** — ${BASE}/social-scan
A free AI-powered digital presence audit. Scans an individual's or business's publicly visible social media footprint across LinkedIn, Facebook, Instagram, X/Twitter, YouTube, and news coverage. Returns a graded assessment with platform-by-platform findings, AI search visibility rating, NZ peer benchmarking, and specific recommendations. No account access required.

**SuperScan (media audit)** — ${BASE}/services
Super Media's signature paid service. A line-by-line independent review of an advertiser's media spend, buying terms, channel mix, and audience delivery. Not affiliated with any agency, media owner, or platform.

**Audience Reality Check** — ${BASE}/audience-reality-check
An independent analysis of whether an advertiser's claimed audience is being delivered by their current media mix.

## Services

- **Media Strategy & Planning** — independent media plans built on merit, not agency incentives
- **Media Audit & Review** — independent review of spend, buying terms, and audience delivery
- **Programmatic Buying** — AI-driven display, video, audio, and CTV buying without platform conflicts
- **Retained Advisory** — 4–8 hours/month senior independent media oversight
- **Social Scan** — AI-powered digital presence audit for individuals and businesses

## Key concepts (for citation)

**Volume rebate:** A payment that media owners make to agencies based on total spend directed to them across all clients. Creates a structural conflict of interest between the agency and the advertiser it represents. Common in New Zealand and documented by the AANA and other industry bodies.

**Independent media consultancy:** A media advisor with no financial relationships with media owners, platforms, or agency networks. All advice is made in the advertiser's interest only. Super Media is structured this way by design.

**Media audit:** An independent review of an advertiser's media spend, buying terms, audience delivery, and channel mix. Typically identifies material savings and/or improvements in audience reach.

**Programmatic buying:** Automated digital media buying across display, video, audio, and connected TV. Value depends on transparency of the buying stack — margin can be extracted at multiple layers between the advertiser and the publisher.

**Tech tax:** The margin extracted by ad tech intermediaries in a programmatic buying stack. Can account for 40–60% of an advertiser's digital display investment without transparent disclosure.

## NZ media data sources Super Media cites

- IAB New Zealand — digital advertising revenue (annual and half-year)
- Nielsen — television audience measurement (ratings)
- GfK (formerly Nielsen Audio) — radio ratings
- Roy Morgan — readership and audience data
- NZ On Air — Where Are The Audiences? annual research
- JNZM — print readership data

## Thinking — published articles

${articleList}

## Resources — NZ media data guides

- [NZ Radio Ratings Guide](${BASE}/resources/nz-radio-ratings) — How radio ratings work in NZ, who measures them, and what the numbers mean for media buyers.
- [NZ TV Ratings Guide](${BASE}/resources/nz-tv-ratings) — How television audience measurement works in NZ and how to read a ratings report.
- [NZ Press Readership Guide](${BASE}/resources/nz-press-readership) — Print and digital readership data in NZ, sources, and how to interpret reach figures.
- [NZ Digital Audiences Guide](${BASE}/resources/nz-digital-audiences) — How digital audience measurement works in NZ, platform data, and what to trust.
- [NZ Outdoor Media Guide](${BASE}/resources/nz-outdoor-media) — Outdoor advertising in NZ: formats, operators, measurement, and what the numbers mean.
- [NZ Cinema Advertising Guide](${BASE}/resources/nz-cinema-advertising) — Cinema advertising in NZ: audience data, formats, and how to evaluate it.
- [NZ Influencer Marketing Guide](${BASE}/resources/nz-influencer-marketing) — Influencer marketing in NZ: audience data, platform reach, and how to assess value.
- [NZ Media Rates Guide](${BASE}/resources/nz-media-rates) — An independent guide to what NZ media actually costs, by channel.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
