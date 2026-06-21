import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.supermedia.co.nz";

export const metadata: Metadata = {
  title: "NZ Media Audit Results & Case Studies",
  description:
    "Real NZ media audit results — 19% cost reduction, 31% lower CPM, $140K savings identified. Three case studies across retail, financial services, and property.",
  alternates: { canonical: "/results" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/results#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How much can a media audit save?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Super Media audits identify 15–30% savings without any reduction in reach. Real results include a 19% reduction in total media spend for a national retailer and $140K in savings identified for a property client in year one.",
          },
        },
        {
          "@type": "Question",
          name: "What does an independent media audit involve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An independent media audit is a line-by-line review of your advertising spend, channel mix, buying terms, and audience delivery — benchmarked against what the media should be delivering for a business like yours. Most audits deliver a clear diagnosis within one to two weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Are these real NZ case studies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. These are real Super Media client engagements. Sectors and some details are anonymised on request, but the outcomes and methodologies are real.",
          },
        },
      ],
    },
  ],
};

const cases = [
  {
    sector: "Retail",
    service: "Media Audit",
    situation:
      "National retailer, $600K/year in media spend, no channel performance data and no independent view on whether the buy was efficient.",
    finding:
      "Digital display was consuming 34% of the media budget and delivering 8% of measurable response. The channel had never been independently benchmarked.",
    outcomes: [
      { stat: "19%", label: "reduction in total media spend" },
      { stat: "+12%", label: "increase in audience reach" },
    ],
  },
  {
    sector: "Financial Services",
    service: "Media Strategy",
    situation:
      "New product launch required an independent media plan to compare against the incumbent agency recommendation.",
    finding:
      "The agency plan over-indexed on broadcast for an under-45 audience. The recommended channel mix was rebuilt from audience behaviour up, using NZ-specific consumption data.",
    outcomes: [
      { stat: "31%", label: "lower CPM vs agency plan" },
      { stat: "2×", label: "qualified enquiry rate" },
    ],
  },
  {
    sector: "Property",
    service: "Retained Advisory",
    situation:
      "Ongoing media spend across multiple channels, with a desire for independent oversight without replacing the incumbent agency.",
    finding:
      "Overpriced digital inventory had been undetected for 18 months. Two major buys lacked audience rationale. Buying terms on radio had not been reviewed or renegotiated in three years.",
    outcomes: [
      { stat: "$140K", label: "in savings identified, year one" },
      { stat: "Ongoing", label: "retained advisory relationship" },
    ],
  },
];

export default function ResultsPage() {
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
            NZ Media Audit Results &amp; Case Studies
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            Three real engagements. Sectors anonymised on request. Outcomes are not.
          </p>
        </div>
      </section>

      {/* ─── Case Studies ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="space-y-12">
            {cases.map(({ sector, service, situation, finding, outcomes }) => (
              <div
                key={sector}
                className="grid grid-cols-1 lg:grid-cols-3 border border-grey-mid rounded overflow-hidden"
              >
                {/* Sector panel */}
                <div className="bg-navy p-8 flex flex-col justify-between">
                  <div>
                    <p className="eyebrow mb-3">{service}</p>
                    <h2 className="text-white text-2xl font-bold">{sector}</h2>
                  </div>
                  <div className="mt-8 space-y-4">
                    {outcomes.map(({ stat, label }) => (
                      <div key={label}>
                        <p className="text-orange text-3xl font-bold">{stat}</p>
                        <p className="text-white/60 text-sm">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="lg:col-span-2 p-8">
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-eyebrow text-grey-dark mb-2">
                      Situation
                    </p>
                    <p className="text-body">{situation}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-eyebrow text-grey-dark mb-2">
                      Finding
                    </p>
                    <p className="text-body">{finding}</p>
                  </div>
                  <Link
                    href={`/services#${service === "Media Audit" ? "audit" : service === "Media Strategy" ? "strategy" : "advisory"}`}
                    className="text-orange text-sm font-medium hover:underline"
                  >
                    Learn about {service} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="section-container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Want to know what a review would find in your account?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Start with Superscan — a 30-second independent read on your current
            media mix.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/superscan" className="btn-primary">
              Run your Superscan →
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
