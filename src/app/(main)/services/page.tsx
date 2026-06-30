import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "NZ Media Strategy, Audits & Programmatic",
  description:
    "Media strategy, media audits, programmatic buying, and retained advisory for NZ advertisers. No conflicts, no rebates. Most audits find 15–30% savings. Book a free audit.",
  alternates: { canonical: "/services" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Super Media Services",
      description: "Independent NZ media consultancy services offered by Super Media",
      url: "https://www.supermedia.co.nz/services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Media Strategy & Planning",
            description: "A complete, independent media plan from scratch or as a second opinion. Every recommendation made on merit, free from agency conflicts of interest.",
            provider: { "@type": "Organization", name: "Super Media", url: "https://www.supermedia.co.nz" },
            areaServed: "New Zealand",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Media Audit & Review",
            description: "Independent review of spend, channel mix, buying terms and audience delivery. Most audits find 15–30% savings without any reduction in reach.",
            provider: { "@type": "Organization", name: "Super Media", url: "https://www.supermedia.co.nz" },
            areaServed: "New Zealand",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Programmatic Buying",
            description: "AI-driven programmatic buying across display, video, audio and CTV. Precision targeting without platform conflicts.",
            provider: { "@type": "Organization", name: "Super Media", url: "https://www.supermedia.co.nz" },
            areaServed: "New Zealand",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Retained Advisory",
            description: "A senior independent brain available monthly. 4–8 hours per month for planning, reviewing agency proposals, and navigating media decisions.",
            provider: { "@type": "Organization", name: "Super Media", url: "https://www.supermedia.co.nz" },
            areaServed: "New Zealand",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does an independent media consultant do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An independent media consultant reviews your media strategy, buying terms, and channel mix without any conflicts of interest from agency relationships, volume rebates, or platform partnerships. They provide objective advice on where your media budget is being spent effectively and where savings can be found.",
          },
        },
        {
          "@type": "Question",
          name: "How much can a media audit save?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Super Media media audits typically identify savings of 15–30% on total media spend without any reduction in audience reach. One retail client reduced spend by 19% while increasing reach by 12%.",
          },
        },
        {
          "@type": "Question",
          name: "What is a volume rebate in media buying?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A volume rebate is a payment that media owners make to agencies based on the total amount of media the agency buys across all its clients. These rebates create a structural conflict of interest: agencies may be incentivised to recommend media owners that pay them rebates, rather than the best options for the advertiser.",
          },
        },
        {
          "@type": "Question",
          name: "Does Super Media work with small advertisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Super Media works with NZ advertisers across a range of budget sizes. The Superscan tool is free and provides an independent read of your media mix in 30 seconds, making independent advice accessible regardless of spend level.",
          },
        },
      ],
    },
  ],
};

const services = [
  {
    id: "strategy",
    title: "Media Strategy, Planning & Buying",
    tag: "Strategy",
    description:
      "A complete, independent media plan from scratch or as a second opinion. Every recommendation made on merit. Covers Search, Display, AI-driven media, and traditional channels including Linear TV, radio, print, and Out of Home.",
    detail:
      "For advertisers who want a plan built without conflicts of interest.",
  },
  {
    id: "audit",
    title: "Media Audit & Review",
    tag: "Most Popular",
    tagHighlight: true,
    description:
      "Independent review of spend, channel mix, buying terms and audience delivery. Most audits find 15–30% savings without any reduction in reach.",
    detail:
      "For advertisers with existing agency relationships who suspect they're not getting full value.",
  },
  {
    id: "programmatic",
    title: "Programmatic Buying",
    tag: "Digital",
    description:
      "AI-driven programmatic buying across display, video, audio and CTV. Precision targeting without platform conflicts.",
    detail:
      "For advertisers who want programmatic efficiency without handing the keys to a network.",
  },
  {
    id: "web",
    title: "Website Design & Construction",
    tag: "Digital",
    description:
      "Audience-led web design built to convert. Strategy, UX, build and launch — starting with who you're trying to reach, not aesthetic preference.",
    detail:
      "For businesses whose website isn't working as hard as their media spend.",
  },
  {
    id: "social",
    title: "Social Media Strategy & Content",
    tag: "Social",
    description:
      "Platform strategy, content creation and paid social across Meta, LinkedIn and beyond. Integrated into the broader media plan, not run as a disconnected silo.",
    detail:
      "For brands who want social that connects to business outcomes, not just impressions.",
  },
  {
    id: "advisory",
    title: "Retained Advisory",
    tag: "Ongoing",
    description:
      "A senior independent brain available monthly. For planning, reviewing agency proposals, and navigating media decisions as they arise. 4–8 hours/month.",
    detail:
      "The equivalent of a senior media director on call, without the overhead.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ─── Hero ─── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mb-4">
            NZ Media Strategy, Audits &amp; Independent Advisory
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            Most clients come with one of these needs. If you&apos;re not sure
            which fits, run a Superscan.
          </p>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ id, title, tag, tagHighlight, description, detail }) => (
              <div
                key={id}
                id={id}
                className="border border-grey-mid rounded p-8 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="mb-5">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-eyebrow ${
                      tagHighlight
                        ? "bg-orange text-white"
                        : "bg-grey-light text-grey-dark"
                    }`}
                  >
                    {tag}
                  </span>
                </div>
                <h2 className="text-navy text-xl font-bold mb-3">{title}</h2>
                <p className="text-body mb-6 flex-1">{description}</p>
                <p className="text-grey-dark text-sm italic border-t border-grey-mid pt-4 mb-4">
                  {detail}
                </p>
                {id === "audit" && (
                  <Link href="/results" className="text-orange text-sm font-medium hover:underline">
                    See audit results & case studies →
                  </Link>
                )}
                {id === "strategy" && (
                  <Link href="/thinking/what-volume-rebates-actually-mean-for-your-media-budget" className="text-orange text-sm font-medium hover:underline">
                    Read: What volume rebates mean for your budget →
                  </Link>
                )}
                {id === "programmatic" && (
                  <Link href="/thinking/why-nz-advertisers-pay-too-much-for-digital-display" className="text-orange text-sm font-medium hover:underline">
                    Read: Why NZ advertisers overpay for digital →
                  </Link>
                )}
                {id === "advisory" && (
                  <Link href="/thinking/the-case-for-independent-media-oversight" className="text-orange text-sm font-medium hover:underline">
                    Read: The case for independent media oversight →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who This Is For ─── */}
      <section className="bg-grey-light py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-navy text-2xl md:text-3xl font-bold mb-3">Who Super Media is for</h2>
            <p className="text-body mb-10 max-w-2xl">Not every business is a good fit. Here&apos;s an honest picture of where the work makes sense — and where it doesn&apos;t.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Good fit */}
              <div className="bg-white border border-grey-mid rounded p-8">
                <h3 className="text-navy font-bold text-lg mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
                  Good fit
                </h3>
                <ul className="space-y-4 text-body text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">→</span>
                    <span><strong className="text-navy">$2,000–$20,000/month in advertising</strong> — enough spend that independent advice changes the economics. Below $1,500/month the savings rarely justify the fee.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">→</span>
                    <span><strong className="text-navy">You have an agency but want a second opinion</strong> — the most common situation. Something feels off, results have plateaued, or a renewal is coming up.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">→</span>
                    <span><strong className="text-navy">You&apos;re planning a significant campaign</strong> — launching a product, entering a new market, or making a media decision that matters enough to get right.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">→</span>
                    <span><strong className="text-navy">You want straight answers</strong> — not a deck full of reach and frequency curves that don&apos;t connect to your actual business outcomes.</span>
                  </li>
                </ul>
              </div>

              {/* Not a fit */}
              <div className="bg-white border border-grey-mid rounded p-8">
                <h3 className="text-navy font-bold text-lg mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">×</span>
                  Probably not a fit
                </h3>
                <ul className="space-y-4 text-body text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-grey-dark font-bold mt-0.5 flex-shrink-0">→</span>
                    <span><strong className="text-navy">Under $1,500/month total ad spend</strong> — at this level, redirecting budget is more valuable than auditing it. Ron will tell you this upfront rather than take the engagement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-grey-dark font-bold mt-0.5 flex-shrink-0">→</span>
                    <span><strong className="text-navy">You need a yes-person</strong> — the value here is an honest read, including when the honest read is uncomfortable. If you want someone to validate a decision already made, this isn&apos;t the right fit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-grey-dark font-bold mt-0.5 flex-shrink-0">→</span>
                    <span><strong className="text-navy">You want a full agency roster billing by the hour</strong> — expensive suits in the pitch, your business migrated to a junior by month two. That model exists and some clients prefer it. Super Media is one senior person working directly on your account, start to finish.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-navy/5 border border-navy/20 rounded p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-navy font-medium">Not sure if it makes sense for your situation?</p>
              <Link href="/superscan" className="btn-primary flex-shrink-0">
                Run a free Superscan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="bg-navy py-16">
        <div className="section-container text-center">
          <p className="text-white text-xl font-medium mb-6 max-w-xl mx-auto">
            Ready to talk? The first conversation is free and there&apos;s no obligation.
          </p>
          <Link href="/contact" className="btn-outline-white">
            Book a call with Ron →
          </Link>
        </div>
      </section>
    </>
  );
}
