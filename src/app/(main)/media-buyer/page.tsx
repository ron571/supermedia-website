import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Buyer NZ, Without the Rebate Conflict | Super Media",
  description:
    "Comparing media buyers in NZ? Here's what a media buyer actually does, what it costs, and why an independent audit often finds more value first. No agency conflicts, no rebates.",
  alternates: { canonical: "/media-buyer" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.supermedia.co.nz/#media-buyer",
      name: "Super Media — Independent Media Buyer & Strategist, NZ",
      url: "https://www.supermedia.co.nz/media-buyer",
      description:
        "Independent media buying and strategy for New Zealand advertisers. No volume rebates, no platform partnerships, every placement chosen on merit.",
      areaServed: [{ "@type": "Country", name: "New Zealand" }],
      founder: { "@id": "https://www.supermedia.co.nz/about#ron" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Media Buying & Strategy Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Media Buying NZ",
              description:
                "Rate negotiation, channel placement, and campaign management across TV, radio, digital, outdoor, and print, with no rebate relationships.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Media Strategy NZ",
              description:
                "Independent channel and spend strategy based on audience data, not on what's easiest or most profitable for an agency to place.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What's the difference between a media buyer and a media strategist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A strategist decides which channels and how much budget each should get, based on your audience and business goals. A buyer executes that plan by negotiating rates and placing the bookings. Super Media does both, independently, without the rebate relationships that shape most agency buying.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a media buyer cost in NZ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Agencies typically charge a commission or fee based on your media spend, often 10 to 15 percent, on top of whatever rebates they collect from media owners. Super Media works on a flat, transparent fee with no rebate income, so the investment reflects the work, not a percentage of your budget.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a media strategist if I already have a media buyer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your buyer is also setting your channel strategy, it's worth asking who's checking that strategy against independent data. Most NZ businesses have never had their channel mix benchmarked by someone outside the agency doing the buying.",
          },
        },
        {
          "@type": "Question",
          name: "Can Super Media just do the buying, not the full strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Programmatic buying and full-service buying are both available on their own, or alongside a strategy engagement.",
          },
        },
      ],
    },
  ],
};

export default function MediaBuyerPage() {
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
          <p className="eyebrow text-orange mb-4">Media Buying</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mb-5">
            Looking for a media buyer in NZ?
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            Most searches for &quot;media buyer&quot; land on an agency&apos;s pitch page. I&apos;ve been a media buyer. I&apos;ve also been the person paying one. Here&apos;s what that taught me.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/superscan" className="btn-primary">
              Run a free Superscan →
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Get a Free Media Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ─── What a buyer / strategist actually does ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">
              What a media buyer actually does
            </h2>
            <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
              A media buyer negotiates and places your advertising across TV, radio, digital, outdoor and print. They hold the relationships with media owners, get you rate cards, and manage the bookings.
            </p>
            <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
              A media strategist sits one step earlier. They work out which channels your audience actually uses, what the right spend split looks like, and how buying decisions should serve your business goals, not just fill a schedule.
            </p>
            <p className="text-body" style={{ lineHeight: 1.7 }}>
              In most NZ agencies, one team does both. That&apos;s normal. What matters is who they&apos;re negotiating for.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The rebate problem ─── */}
      <section className="bg-grey-light py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">
              The part most media buyers won&apos;t tell you
            </h2>
            <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
              Media buyers in New Zealand typically work for agencies that receive volume rebates from media owners: payments based on how much media the agency buys across its whole client roster, not on how well any single campaign performs.
            </p>
            <p className="text-body" style={{ lineHeight: 1.7 }}>
              This is documented industry practice. It means a media buyer&apos;s recommendation and their agency&apos;s most profitable placement aren&apos;t always the same thing. You&apos;re rarely told which one you got.
            </p>
          </div>
        </div>
      </section>

      {/* ─── What I do instead ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">
              What I do instead
            </h2>
            <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
              I buy media the same way any experienced buyer does: rate negotiation, channel placement, campaign management. The difference is structural. Super Media has no volume rebates, no platform partnerships, and no financial relationship with any media owner. Every placement is chosen because it&apos;s right for your audience, not because it pays better on the back end.
            </p>
            <p className="text-body" style={{ lineHeight: 1.7 }}>
              You get the buying expertise without the conflict sitting underneath it.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Superscan callout ─── */}
      <section className="bg-grey-light py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Start here</p>
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-5">
              Do you need a buyer, a strategist, or both?
            </h2>
            <p className="text-body mb-8" style={{ lineHeight: 1.7 }}>
              Most NZ advertisers assume they need a full agency relationship. Often what they actually need first is an independent read on whether their current buying is working. A free Superscan tells you where your spend is going, what it&apos;s delivering, and whether your current buyer or strategist has got the mix right, before you commit to anything new.
            </p>
            <Link href="/superscan" className="btn-primary">
              Run Superscan free →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-10">
              Media buyer and media strategist — common questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What's the difference between a media buyer and a media strategist?",
                  a: "A strategist decides which channels and how much budget each should get, based on your audience and business goals. A buyer executes that plan by negotiating rates and placing the bookings. Super Media does both, independently, without the rebate relationships that shape most agency buying.",
                },
                {
                  q: "How much does a media buyer cost in NZ?",
                  a: "Agencies typically charge a commission or fee based on your media spend, often 10 to 15 percent, on top of whatever rebates they collect from media owners. Super Media works on a flat, transparent fee with no rebate income, so the investment reflects the work, not a percentage of your budget.",
                },
                {
                  q: "Do I need a media strategist if I already have a media buyer?",
                  a: "If your buyer is also setting your channel strategy, it's worth asking who's checking that strategy against independent data. Most NZ businesses have never had their channel mix benchmarked by someone outside the agency doing the buying.",
                },
                {
                  q: "Can Super Media just do the buying, not the full strategy?",
                  a: "Yes. Programmatic buying and full-service buying are both available on their own, or alongside a strategy engagement.",
                },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="text-navy font-bold text-lg mb-2">{q}</h3>
                  <p className="text-body" style={{ lineHeight: 1.7 }}>{a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/services" className="btn-primary">
                See the full service breakdown →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="section-container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Talk to an independent media buyer with no agenda
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            30 minutes. No obligation. Find out what independent media buying could do for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get a Free Media Audit
            </Link>
            <Link href="/superscan" className="btn-outline-white">
              Run Superscan first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
