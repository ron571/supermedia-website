import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Consultant Auckland | Independent Media Strategy & Audits",
  description:
    "Auckland-based independent media consultant Ron Sneddon. Media audits, strategy, and programmatic buying for Auckland advertisers — no agency conflicts, no rebates. Most audits find 15–30% savings.",
  alternates: { canonical: "/auckland" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.supermedia.co.nz/#auckland",
      name: "Super Media — Auckland Media Consultant",
      url: "https://www.supermedia.co.nz/auckland",
      description: "Independent media consultancy serving Auckland advertisers. Media audits, strategy, and programmatic buying with no agency conflicts.",
      areaServed: [
        { "@type": "City", name: "Auckland", containedInPlace: { "@type": "Country", name: "New Zealand" } },
        { "@type": "Country", name: "New Zealand" },
      ],
      founder: { "@id": "https://www.supermedia.co.nz/about#ron" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Auckland Media Consulting Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Media Audit Auckland", description: "Independent review of your Auckland media spend — what you're paying, who's getting your money, and where you're losing reach." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Media Strategy Auckland", description: "Media planning for Auckland advertisers without conflicts of interest from agency rebate deals." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Programmatic Buying Auckland", description: "AI-driven programmatic display, video, and audio for Auckland brands." } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a media consultant do in Auckland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A media consultant reviews how Auckland businesses are spending their advertising budgets — across TV, radio, digital, outdoor, and print — and advises on strategy, channel mix, and buying efficiency. An independent consultant like Super Media does this with no financial ties to media owners or agencies, so every recommendation is made purely on what works best for the client.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a media audit cost in Auckland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Super Media offers a free initial Superscan analysis for Auckland advertisers. A full independent media audit is priced based on the complexity and size of your media spend. Most Auckland clients find the audit pays for itself many times over — typical savings identified are 15–30% of total spend.",
          },
        },
        {
          "@type": "Question",
          name: "Why use an independent media consultant rather than an Auckland agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Auckland media agencies often receive volume rebates from media owners — payments based on how much media they buy across all their clients. This creates a structural conflict: the agency may recommend channels that pay them rebates rather than the best options for you. An independent consultant like Super Media has no rebate relationships and no platform partnerships, so advice is genuinely objective.",
          },
        },
        {
          "@type": "Question",
          name: "Does Super Media work with Auckland businesses of all sizes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Super Media works with Auckland advertisers across a range of budget sizes, from growing businesses spending $200K per year to larger organisations spending several million. The free Superscan tool gives any Auckland business an independent read of their media mix in 30 seconds.",
          },
        },
      ],
    },
  ],
};

const services = [
  {
    id: "audit",
    title: "Media Audit",
    description:
      "An independent review of what your Auckland media spend is actually buying — channel by channel, rate by rate. Most Auckland advertisers are paying 15–30% more than they should be, or buying the wrong mix for their audience.",
    bullets: [
      "Are your rates competitive against the NZ market?",
      "Is your channel mix right for your Auckland audience?",
      "Is your agency's buying serving you or their rebate deals?",
      "What does your reporting actually prove?",
    ],
  },
  {
    id: "strategy",
    title: "Media Strategy",
    description:
      "A media plan built around your business objectives, not around what's easiest to buy or most profitable to recommend. For Auckland businesses that want to know the logic behind every dollar spent.",
    bullets: [
      "Where is your Auckland target audience actually spending media time?",
      "Which channels deliver the best cost per reach for your category?",
      "How should your mix change as you grow?",
      "What's the right balance between brand and performance?",
    ],
  },
  {
    id: "programmatic",
    title: "Programmatic Buying",
    description:
      "Precision digital advertising — display, video, audio, connected TV — run without platform conflicts. Auckland businesses get access to the same buying technology as large national advertisers, managed independently.",
    bullets: [
      "No platform partnership incentives influencing where we spend",
      "AI-driven audience targeting against your real customer profile",
      "Transparent reporting — you see exactly what ran and what it cost",
      "Full control: pause, adjust, or stop at any time",
    ],
  },
];

export default function AucklandPage() {
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
          <p className="eyebrow text-orange mb-4">Auckland</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mb-5">
            Independent Media Consultant — Auckland
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            35 years inside NZ media. Auckland-based. No agency. No conflicts. No rebates — just honest advice on where your media budget is going and what it should be doing.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/superscan" className="btn-primary">
              Free media scan →
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              Book a call with Ron
            </a>
          </div>
        </div>
      </section>

      {/* ─── The problem ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">
              The Auckland media market has a conflict problem
            </h2>
            <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
              Most Auckland advertisers are buying their media through agencies that have financial relationships with the media owners they recommend. Volume rebates. Platform partnerships. Trading agreements. None of this is visible to you, but all of it shapes the advice you're getting.
            </p>
            <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
              The result: Auckland businesses routinely end up in the wrong channels, paying above-market rates, with reporting that doesn't let them hold anyone accountable. It's not malicious — it's structural. The incentives are misaligned.
            </p>
            <p className="text-body" style={{ lineHeight: 1.7 }}>
              Super Media fixes that. We work for Auckland advertisers, not for media owners. Our only financial incentive is a client who's better informed and getting better value.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="bg-grey-light py-20 lg:py-28">
        <div className="section-container">
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-12">
            What we do for Auckland advertisers
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.id} className="bg-white rounded p-8 border border-grey-mid">
                <h3 className="text-navy text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-body text-sm mb-5" style={{ lineHeight: 1.65 }}>
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-body">
                      <span className="text-orange mt-0.5 flex-shrink-0">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="btn-primary">
              Full service details →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Superscan callout ─── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Start here</p>
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-5">
              Get a free read of your media mix in 30 seconds
            </h2>
            <p className="text-body mb-8" style={{ lineHeight: 1.7 }}>
              Superscan is Super Media&apos;s free Auckland media analysis tool. Upload or describe your current media mix and get an independent assessment of where it&apos;s strong, where it&apos;s weak, and what the NZ market data says about your channel choices. No login, no sales call required.
            </p>
            <Link href="/superscan" className="btn-primary">
              Run Superscan free →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-grey-light py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-10">
              Auckland media consulting — common questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What does a media consultant do in Auckland?",
                  a: "A media consultant reviews how you're spending your advertising budget — across TV, radio, digital, outdoor, and print — and advises on strategy, channel mix, and buying efficiency. An independent consultant does this with no financial ties to media owners or agencies, so every recommendation is made purely on what works best for you.",
                },
                {
                  q: "How much does a media audit cost in Auckland?",
                  a: "Super Media offers a free initial Superscan analysis for Auckland advertisers. A full independent media audit is priced based on the complexity of your spend. Most clients find the audit pays for itself many times over — typical savings identified are 15–30% of total spend.",
                },
                {
                  q: "Why use an independent consultant rather than an Auckland agency?",
                  a: "Auckland media agencies often receive volume rebates from media owners — payments based on how much media they buy across all their clients. This creates a structural conflict: the agency may recommend channels that pay them rebates rather than the best options for you. Super Media has no rebate relationships and no platform partnerships.",
                },
                {
                  q: "How quickly can Super Media start?",
                  a: "A first conversation can happen this week. Run Superscan now for an immediate read, or book a 30-minute call with Ron to discuss your situation in more detail. No preparation required.",
                },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="text-navy font-bold text-lg mb-2">{q}</h3>
                  <p className="text-body" style={{ lineHeight: 1.7 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── About Ron ─── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-5">
              Auckland-based. 35 years in NZ media.
            </h2>
            <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
              Ron Sneddon has spent 35 years inside New Zealand media — buying it for clients, selling it for broadcasters, and running agencies on both sides of the table. He&apos;s been General Manager at Newstalk ZB, co-founded two Auckland agencies, and has been quoted by RNZ, the NZ Herald, and StopPress as a senior voice on how NZ media works.
            </p>
            <p className="text-body mb-8" style={{ lineHeight: 1.7 }}>
              Super Media was built because Ron knew the only way to give genuinely useful advice was to have no financial stake in the answer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                About Ron →
              </Link>
              <Link href="/results" className="btn-outline">
                See client results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="section-container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Talk to an Auckland media consultant with no agenda
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            30 minutes. No obligation. Find out what independent media advice could do for your Auckland business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a call with Ron
            </a>
            <Link href="/superscan" className="btn-outline-white">
              Run Superscan first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
