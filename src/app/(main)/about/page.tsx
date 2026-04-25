import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "About Ron Sneddon — Super Media",
  description:
    "Ron Sneddon spent 35 years buying media, selling it, and running an agency. He watched from the inside how advertising budgets get wasted. Super exists because he decided to stop watching it happen.",
  alternates: { canonical: "/about" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ron Sneddon",
  jobTitle: "Founder, Super Media",
  url: "https://supermedia.co.nz/about",
  sameAs: ["https://linkedin.com/in/ron-sneddon"],
  worksFor: {
    "@type": "Organization",
    name: "Super Media",
    url: "https://supermedia.co.nz",
  },
  description:
    "Independent NZ media consultant with 35 years of experience across agency, broadcast, and consultancy roles.",
};

const timelineItems = [
  { year: "1999", role: "Media Director, Spearhead Communications" },
  { year: "2001", role: "General Manager, Strategic Media (now Carat)" },
  {
    year: "2003",
    role: "Senior broadcast roles — Newstalk ZB, 91ZM, Classic Hits",
  },
  {
    year: "2003",
    role: "Co-owner, Mr Smith (Auckland ad agency) — 11 years",
  },
  { year: "2014", role: "Founded Super Media" },
];

export default function AboutPage() {
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
            I&apos;ve seen what they do with your money.
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            35 years inside NZ media — on every side of the table. That&apos;s
            why Super exists.
          </p>
        </div>
      </section>

      {/* ─── Origin + Photo ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src="/assets/headshot-ron.png"
                  alt="Ron Sneddon, founder of Super Media"
                  fill
                  className="object-cover rounded"
                  sizes="128px"
                />
              </div>
              <div>
                <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
                  Ron Sneddon
                </h2>
                <p className="text-body">
                  I&apos;ve spent 35 years inside NZ media — buying it for
                  clients, selling it for broadcasters, and running an agency
                  that did both. I&apos;ve sat at the table where the rebate
                  deals get done. I know what the sales pitch sounds like before
                  you hear it. And I know what it costs the person on the other
                  side.
                </p>
              </div>
            </div>
            <p className="text-body mb-5">
              For most of my career I watched the same pattern repeat. A
              business would hire an agency expecting independent advice. What
              they&apos;d get was advice shaped — sometimes unconsciously — by
              the agency&apos;s commercial relationships. Not dishonesty,
              exactly. But structure. The way most agencies make money means
              their best recommendation and their most profitable recommendation
              aren&apos;t always the same thing. Most clients never find out.
            </p>
            <p className="text-body">
              Super was founded in 2014 because I decided to stop watching it
              happen. The only way to give genuinely independent advice is to
              build a business with no financial reason to give anything else.
              No rebates. No platform deals. No preferred suppliers. One
              incentive: a client whose advertising works, who stays.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Independence List ─── */}
      <section className="bg-grey-light py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-5">
              What &ldquo;independent&rdquo; actually means
            </h2>
            <p className="text-body mb-8">
              A lot of agencies use the word. Very few are structured to back it
              up. Here is exactly what it means at Super:
            </p>
            <ul className="space-y-5">
              {[
                "No holding company — no parent organisation with its own financial relationships to protect",
                "No volume rebates or investment deals with media owners",
                "No platform partnerships that create an incentive to recommend one channel over another",
                "One financial incentive: a client who gets results and stays",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-orange flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-body text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Career Timeline ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-12">
            Career timeline
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-grey-mid ml-[52px] hidden sm:block"
              aria-hidden="true"
            />
            <ol className="space-y-8">
              {timelineItems.map(({ year, role }) => (
                <li key={year} className="flex items-start gap-6 sm:gap-10">
                  <div className="flex-shrink-0 w-[52px] text-right sm:text-right">
                    <span className="text-orange font-bold text-sm">{year}</span>
                  </div>
                  <div className="relative">
                    <span
                      className="absolute -left-[42px] top-1.5 w-2.5 h-2.5 rounded-full bg-navy hidden sm:block"
                      aria-hidden="true"
                    />
                    <p className="text-body text-lg">{role}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── AI Section ─── */}
      <section className="bg-grey-light py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">
              AI as a real tool, not a talking point
            </h2>
            <p className="text-body mb-5">
              Most agencies that mention AI are doing one of two things: using
              it to produce content faster, or putting it in a pitch deck to
              sound modern. Neither changes anything for the client.
            </p>
            <p className="text-body mb-5">
              At Super, AI does the analysis work — reading media mixes,
              benchmarking channel costs against NZ market data, processing
              audience behaviour at a speed no human analyst can match. That
              frees the judgement side for me to apply directly: the part that
              knows when a media plan is technically correct but strategically
              wrong, or when an audience assumption hasn&apos;t been tested
              against reality.
            </p>
            <p className="text-body">
              Superscan is the clearest example. What used to take days of
              senior analyst time now takes 90 seconds — which means independent
              media analysis is no longer something only large advertisers can
              justify. That matters. Most of the money getting wasted in NZ
              advertising isn&apos;t in big corporate budgets. It&apos;s in
              small ones where nobody&apos;s watching closely enough.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="section-container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Not sure if Super is right for you?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            That&apos;s what the first conversation is for. 30 minutes, no
            agenda, no obligation.
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
