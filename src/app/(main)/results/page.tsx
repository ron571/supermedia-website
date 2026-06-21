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
    spend: "$600K/year",
    situation:
      "A national retailer had been with the same agency for four years. Media spend had grown steadily but sales response had plateaued. No one inside the business had an independent view on whether the buy was efficient — reporting came entirely from the agency.",
    methodology:
      "Line-by-line audit of channel allocations, CPMs, audience delivery, and response attribution. Each channel benchmarked against independent NZ market data for comparable retail advertisers.",
    finding:
      "Digital display was consuming 34% of the media budget and delivering 8% of measurable response. The channel had never been independently benchmarked — the CPMs being paid were 40% above market rate for comparable placements. Two OOH formats were retained for 'brand presence' with no audience rationale.",
    recommendation:
      "Reallocate display budget into search and connected TV, renegotiate OOH terms, and set independent measurement benchmarks before next planning cycle.",
    outcomes: [
      { stat: "19%", label: "reduction in total media spend" },
      { stat: "+12%", label: "increase in audience reach" },
    ],
  },
  {
    sector: "Financial Services",
    service: "Media Strategy",
    spend: "$280K launch budget",
    situation:
      "A financial services business was launching a new lending product aimed at under-45 borrowers. Their incumbent agency submitted a media plan. Before approving it, they wanted an independent second opinion on whether it was the right channel mix for the audience.",
    methodology:
      "Independent media plan built from audience data up — Nielsen demographic consumption data for the target audience, layered against CPM benchmarks and response data from comparable product launches in NZ.",
    finding:
      "The agency plan allocated 58% of budget to linear TV and print — channels that heavily over-index for 55+ audiences. The under-45 target was largely on connected TV, digital audio, and search. The plan would have delivered reach, but to the wrong people at the wrong times.",
    recommendation:
      "Rebuild the channel mix: shift to connected TV, Spotify, YouTube pre-roll and search. Negotiate broadcast TV rate as remnant only. Retain print for brand credibility at reduced weight.",
    outcomes: [
      { stat: "31%", label: "lower CPM vs agency plan" },
      { stat: "2×", label: "qualified enquiry rate vs forecast" },
    ],
  },
  {
    sector: "Property",
    service: "Retained Advisory",
    spend: "$420K/year across 4 channels",
    situation:
      "A property business was running media across digital, radio, print, and OOH with an agency managing the buy. They wanted independent oversight — not to replace the agency, but to have someone in their corner when reviewing proposals and annual rate negotiations.",
    methodology:
      "Monthly review of media schedules, placements, and buying terms. Quarterly benchmarking of CPMs against market rates. Annual audit of agency performance against original plan.",
    finding:
      "Overpriced digital inventory had been running undetected for 18 months — CPMs on two major placements were between 35–50% above independent benchmark. Radio buying terms had not been renegotiated in three years despite significant audience shifts post-COVID. Two sponsorship packages were renewed automatically without performance review.",
    recommendation:
      "Renegotiate digital and radio terms immediately, require audience rationale on all future sponsorship renewals, and introduce independent reporting benchmarks for agency accountability.",
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
          <div className="space-y-16">
            {cases.map(({ sector, service, spend, situation, methodology, finding, recommendation, outcomes }) => (
              <div key={sector} className="border border-grey-mid rounded overflow-hidden">
                {/* Header bar */}
                <div className="bg-navy px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
                  <div className="sm:col-span-2">
                    <p className="eyebrow mb-2">{service}</p>
                    <h2 className="text-white text-2xl font-bold">{sector}</h2>
                    <p className="text-white/50 text-sm mt-1">Media spend: {spend}</p>
                  </div>
                  <div className="flex sm:flex-col gap-6 sm:gap-4 sm:items-end">
                    {outcomes.map(({ stat, label }) => (
                      <div key={label} className="sm:text-right">
                        <p className="text-orange text-3xl font-bold leading-none">{stat}</p>
                        <p className="text-white/60 text-xs mt-1">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body — four labelled sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grey-mid">
                  <div className="p-8 space-y-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-eyebrow text-grey-dark mb-2">Situation</p>
                      <p className="text-body text-sm leading-relaxed">{situation}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-eyebrow text-grey-dark mb-2">Methodology</p>
                      <p className="text-body text-sm leading-relaxed">{methodology}</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-eyebrow text-grey-dark mb-2">What we found</p>
                      <p className="text-body text-sm leading-relaxed">{finding}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-eyebrow text-grey-dark mb-2">Recommendation</p>
                      <p className="text-body text-sm leading-relaxed">{recommendation}</p>
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="border-t border-grey-mid px-8 py-4 bg-grey-light/50">
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
