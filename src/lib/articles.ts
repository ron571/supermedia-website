export interface Article {
  slug: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  readTime: string;
  body: string;
}

const articles: Article[] = [
  {
    slug: "why-your-advertising-isnt-working-nz-small-business",
    title: "Why your advertising isn't working — and why it's probably not your fault",
    description:
      "Most NZ small businesses that try advertising and fail aren't bad at business. They've been sold something that was never going to work, by people who weren't going to tell them that.",
    tag: "Small Business",
    date: "26 Apr 2026",
    readTime: "7 min read",
    body: `If you've spent money on advertising and it didn't work, the most common explanation you'll have been given is some version of this: it takes time, we need more data, the market is tough right now, let's adjust the creative.

What you probably weren't told is this: the campaign may have been the wrong approach from the start, recommended by someone with a financial reason to recommend it, and measured in ways that were never going to tell you whether it actually worked.

That's not a comfortable thing for an agency to say. So most of them don't.

**The five reasons it usually doesn't work**

In 35 years of working in NZ media — buying it, selling it, and watching what happens when the two sides meet — I've seen the same patterns repeat across hundreds of businesses. The money fails for predictable reasons, almost every time.

**1. The media landscape is genuinely confusing — and that confusion is profitable for some people**

Auckland alone now has more advertising channels than any small business could meaningfully use. TV, radio, print, outdoor, Facebook, Instagram, Google Search, Google Display, YouTube, TikTok, Spotify, podcasts, programmatic networks, LinkedIn. Each channel has its own language, its own metrics, its own sales team telling you it's the right choice.

For a business owner without a marketing background — and that's most of them — this is overwhelming by design. When you can't evaluate the options yourself, you rely on whoever is selling them. And the person selling them has a reason to sell them, not to tell you the honest answer.

**2. You're probably spending below the threshold where it works**

This is the part nobody tells you upfront. Spending less than about $2,000 a month on advertising is unlikely to generate meaningful results in most channels. Below a certain level, your ads aren't seen enough to build recognition, your data set isn't large enough to optimise, and your account isn't big enough to attract serious attention from the agency managing it.

The average NZ small business spends between $500 and $5,000 a month across all channels. A significant portion of that is below the threshold where it would be expected to work — even in ideal conditions.

**3. The report looked good because it was designed to**

Agency reporting is built around metrics the agency can control: impressions, reach, clicks, cost per click, frequency. These numbers can look impressive even when your phone isn't ringing and your door isn't opening.

The gap between "the campaign performed well" and "the campaign worked for your business" can be enormous. Most reporting is designed to bridge that gap with language, not with evidence.

Ask yourself: did the report tell you how many of those impressions led to an enquiry, a sale, or a customer? If not, you weren't being told whether your advertising was working. You were being told it was running.

**4. The advice wasn't independent**

Most NZ advertising agencies have financial relationships with the media they buy. These take different forms — volume rebates from broadcasters, margin on programmatic buys, incentive arrangements with platforms — but the effect is similar: the recommendation your agency makes isn't purely about what's best for your campaign. It's also influenced, sometimes unconsciously, by what generates the most return for the agency.

This is structural, not personal. The people involved often genuinely believe they're giving you good advice. But the incentive system creates pressure on every recommendation, in a direction that doesn't always point toward your interests.

**5. You got junior attention on a senior problem**

If you're spending less than $10,000 a month, you are almost certainly being managed by someone junior. Senior account staff are deployed on accounts that generate serious revenue for the agency. Smaller accounts get the graduates — often capable people, but without the experience to question a plan, push back on a media owner, or recognise when something isn't working.

This isn't unique to any particular agency. It's how the economics of the model work.

**What actually helps**

The honest answer is that independent advice is the most reliable way to know whether your advertising is working and why. Not advice from someone who sells the media, or someone who earns more when you spend more. Advice from someone with no financial interest in the outcome other than whether you get results.

That's what Super does. But I'm aware that saying "get independent advice" is easier than finding it — especially if you've already been burned and are cautious about who to trust.

So here's what I'd suggest as a starting point, regardless of whether you work with Super:

Ask your current agency to show you what results look like in terms of enquiries or sales — not just campaign metrics. Ask them to disclose any financial relationships they have with the media they're recommending. Ask who manages your account day to day, and what their experience level is.

The answers you get — and how comfortable or uncomfortable the conversation feels — will tell you a great deal.

If you want a faster read, Superscan will give you an independent analysis of your current media mix in 90 seconds. It's free, it's specific to NZ, and it doesn't end with a sales call. It ends with a question worth asking your agency — and whether they can answer it.`,
  },
  {
    slug: "what-volume-rebates-actually-mean-for-your-media-budget",
    title: "What volume rebates actually mean for your media budget",
    description:
      "Most NZ advertisers have no idea their agency earns money on their buy. Here's exactly how it works — and what to ask about it.",
    tag: "Media Buying",
    date: "14 Apr 2026",
    readTime: "5 min read",
    body: `Volume rebates are payments that media owners make to agencies based on the total amount of media an agency buys across all its clients. The agency earns more from a media owner when it directs more client spend there.

This is not inherently illegal. But it creates a structural conflict of interest that most advertisers don't know exists.

**How the math works**

Imagine your agency buys $10M in TV across its entire client base. At 3% rebate, that's $300,000 back to the agency — money that never appears on your invoice, never reduces your rate, and never gets disclosed unless you ask specifically.

Now imagine that same agency has a choice between recommending TV and digital display for your campaign. TV hits the rebate threshold. Display doesn't. Which do you think gets recommended more often?

**What this means for your plan**

I'm not saying your agency is corrupt. Most of the people involved genuinely believe they're recommending the right media. But the incentive system creates a bias that operates below the level of conscious decision-making.

The question isn't whether your agency is bad. The question is whether the structure of your agency relationship lets you know when bias might be happening.

**What to ask**

Ask your agency directly: "Do you receive any form of volume rebate, investment credit, or soft-dollar benefit from any media owner you recommend to us?" Get the answer in writing.

If the answer is yes, ask for a full disclosure of which media owners pay rebates and at what rate. Then ask how those relationships are managed when making recommendations on your account.

The answer you get — and how comfortable the conversation feels — will tell you a lot.`,
  },
  {
    slug: "the-senior-junior-problem-in-nz-media-agencies",
    title: "The senior–junior problem in NZ media agencies",
    description:
      "You were sold by the MD. You're serviced by someone two years out of uni. This isn't unique to your agency — it's how the model works.",
    tag: "Agency Model",
    date: "2 Apr 2026",
    readTime: "4 min read",
    body: `This is the most common complaint I hear from NZ marketers: the pitch team and the service team are completely different people.

You met the Managing Director and the Strategy Director. They were impressive. They understood your business, asked sharp questions, and clearly had the experience to back up their recommendations.

Then you signed. And now your day-to-day contact is someone who graduated three years ago.

**Why this happens**

Agency economics require it. Senior people are expensive. They're used to win new business — which generates the revenue that pays everyone — but they can't be deployed across every client at a cost that makes sense for a retainer.

So the model works like this: senior people win the work, junior people service it, and senior people hover at the top of the account to handle escalations and annual reviews.

This isn't dishonest, exactly. But it's also not what you thought you were buying.

**The problem with junior servicing**

Junior account managers are often good at what they do. The issue isn't their ability — it's their experience and authority.

When a junior buys are overpriced, they often don't have the market context to know. When a brief is ambitious, they don't have the confidence to push back on the plan. When a media owner offers a deal that looks attractive on the surface, they don't have the experience to read the terms underneath.

This is where your budget gets eroded — not through bad intentions, but through inexperience operating inside a system that doesn't reward scrutiny.

**What Super does differently**

When you work with Super, you work with me. Not a team. Not a strategy director plus three account managers. Me.

That's a deliberate constraint on how many clients I work with. It's also the core of the proposition. Senior judgement isn't a feature — it's the only thing on offer.`,
  },
  {
    slug: "how-to-read-a-media-plan-if-you-didnt-go-to-media-school",
    title: "How to read a media plan if you didn't go to media school",
    description:
      "Most media plans are written to be approved, not questioned. Here's what to look for — and the three questions that uncover most problems.",
    tag: "Media Planning",
    date: "22 Mar 2026",
    readTime: "6 min read",
    body: `Media plans are often impressive-looking documents full of audience data, reach curves, and channel rationale. They're also frequently built around assumptions that nobody has checked.

Here's how to read one without having spent a career in the industry.

**Start with the audience section**

Every media plan should include a definition of the target audience — not just demographics, but a behavioural description of who you're actually trying to reach.

Ask: Where does this audience data come from? Is it a NZ-specific source, or is it adapted from Australian or global data? Is it current, or is it from a study done three years ago?

If your agency can't answer these questions specifically, the audience section is a heuristic dressed up as analysis.

**Look at the channel rationale**

For each channel in the plan, there should be a specific reason why that channel reaches your audience at the right moment. "TV provides broad reach" is not a channel rationale. "TV reaches our 45–65 target audience during evening news programming at a cost per reach point of X" is a channel rationale.

If the rationale is generic, the recommendation might be generic too.

**Check the buying terms**

This is the section most clients never read. What are the cancellation terms? What flexibility exists if the campaign isn't performing? What audience delivery guarantees are written into the buy?

If there are no guarantees, ask why. If the terms are entirely favourable to the media owner, ask who negotiated them.

**The three questions that uncover most problems**

1. "What would make this plan wrong?" Ask your agency what assumptions, if incorrect, would change their recommendations materially.

2. "What did you test this against?" A recommendation is stronger when there's a benchmark — a previous campaign, an industry average, an independent audience study.

3. "What does success look like at 90 days?" If the answer is vague, the plan probably is too.`,
  },
  {
    slug: "superscan-how-ai-reads-your-media-mix",
    title: "Superscan: how AI reads your media mix",
    description:
      "What Superscan actually does under the hood, why we built it as a free tool, and what it can — and can't — tell you.",
    tag: "Superscan",
    date: "10 Mar 2026",
    readTime: "3 min read",
    body: `Superscan is an AI-powered media analysis tool. You tell it what channels you're running, roughly what you spend, and who you're trying to reach. It returns a specific read on where the risk is, where the opportunity might be, and one question worth asking your agency.

It takes 90 seconds. It's free. And it's genuinely useful.

**What's happening under the hood**

Superscan runs on Claude, Anthropic's large language model. The system prompt trains it to think like a senior NZ media consultant — specific to this market, grounded in commercial logic, and focused on actionable output rather than generic advice.

The prompt is deliberately restrictive. Superscan doesn't hallucinate optimism. It doesn't tell you your media mix is great when the inputs suggest otherwise. It's designed to find tension, not validate existing decisions.

**Why free?**

Because the most common barrier to getting independent media advice isn't cost — it's the belief that you don't have enough at stake to warrant it.

$150K in annual media spend feels like a lot if it's your budget. It feels like a small account to a network agency. Superscan removes the threshold. You don't need to be spending seven figures to find out if your media is working.

**What it can't do**

Superscan works from the inputs you provide. It doesn't have access to your actual campaign data, your buying terms, or your media owner relationships. It reads the mix you describe, not the mix you have.

A Superscan is a starting point — a structured independent read that raises the right questions. What comes next is a conversation, if you want one.`,
  },
  {
    slug: "why-nz-advertisers-pay-too-much-for-digital-display",
    title: "Why NZ advertisers pay too much for digital display",
    description:
      "Display CPMs in NZ are significantly above what programmatic buying should deliver. Here's why — and what the gap looks like in practice.",
    tag: "Digital",
    date: "25 Feb 2026",
    readTime: "5 min read",
    body: `Digital display is the most opaque part of most NZ media budgets — and opacity tends to cost money.

In a well-run programmatic setup, a brand paying $15–25 CPM for premium NZ display inventory is getting reasonable value. In a poorly-run setup — which describes more accounts than most agencies would admit — that same inventory costs $40–60 CPM, with margin extracted at multiple points along the way.

**Where the margin lives**

There are typically three or four layers between a brand's media budget and the publisher who serves the ad. Each layer takes a cut. In a transparent buying model, those cuts are disclosed. In a less transparent model, they're not.

The industry term for this is "tech tax" — the accumulated cost of DSPs, SSPs, data layers, verification tools, and agency trading desks, all extracting margin before the ad is served.

A well-structured programmatic buy minimises this. A poorly-structured one amplifies it.

**What the audit typically finds**

In media audits I've run for NZ clients, the most common finding in digital display is a combination of:

- CPMs 30–60% above market rate for equivalent inventory
- Reach curves that plateau far earlier than assumed
- Frequency management that's absent or nominal
- Third-party verification that confirms impressions were served, not that they were seen

Impressions served and impressions seen are not the same number. Most plans are measured on the former.

**What to do about it**

Ask your agency for a complete fee disclosure on your programmatic spend. Ask them to separate the media cost from the tech and service fees. Ask what they're paying for inventory at the DSP level versus what you're being charged.

If they can't answer those questions specifically, the display line in your media plan deserves more scrutiny.`,
  },
  {
    slug: "the-case-for-independent-media-oversight",
    title: "The case for independent media oversight",
    description:
      "Why a growing number of NZ advertisers are adding an independent layer to their agency relationships — and what that looks like in practice.",
    tag: "Strategy",
    date: "12 Feb 2026",
    readTime: "4 min read",
    body: `Most NZ advertisers have one source of media advice: their agency.

This isn't a problem if the agency relationship is working perfectly — if the buying is efficient, the strategy is genuinely tailored to your business, and the account is serviced at the level you were sold. But when it's not working perfectly, you often have no independent way to know.

**What independent oversight looks like**

For some clients, independent oversight means a full audit — a line-by-line review of spend, buying terms, audience delivery, and channel mix. That process typically finds something worth finding.

For others, it's a lighter-touch arrangement: a senior independent voice available monthly to review agency proposals, sanity-check recommendations, and flag anything that needs more scrutiny. Not replacing the agency — adding a layer of accountability to it.

For a growing number of clients, it starts with Superscan.

**Why now?**

Two things have changed in the last few years that make independent oversight more accessible than it used to be.

First, AI has collapsed the time required for analysis. Things that used to take days of manual media planning work can now be done in minutes. That makes independent review economically viable for advertisers who would previously have been told the cost wasn't worth it.

Second, the network agency model is under more scrutiny than it used to be. The disclosure conversation — about rebates, about tech margins, about trading desk arrangements — is happening more openly. Advertisers are asking harder questions.

**The conflict isn't the agency — it's the structure**

I want to be clear about something: most people working in network agencies are good at their jobs and genuinely trying to do the right thing by their clients.

The problem is structural. When your media buying, your audience data, your creative, and your technology are all provided by subsidiaries of the same holding company, the incentive to recommend the right answer and the incentive to recommend the house answer are the same incentive.

Independent oversight doesn't fix that structure. But it adds a check on it.`,
  },
];

export function getArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
