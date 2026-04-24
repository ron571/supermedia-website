import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Ron Sneddon",
  description:
    "35 years of NZ media experience. Ron Sneddon founded Super Media on one conviction: that independent advice produces better outcomes for advertisers.",
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
            Why Super exists
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            The conviction behind the agency — and the career that built it.
          </p>
        </div>
      </section>

      {/* ─── Origin + Photo ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-navy text-3xl md:text-4xl font-bold mb-8">
                35 years. One conviction.
              </h2>
              <p className="text-body mb-5">
                I started in media buying when it was genuinely complicated —
                when you had to understand audiences, negotiate rates, and read
                the market because there were no algorithms to do it for you.
                Those skills didn&apos;t disappear when digital arrived. They
                just became rarer.
              </p>
              <p className="text-body mb-5">
                After two decades inside agencies and media companies — buying,
                selling, owning — I kept seeing the same pattern: clients who
                were paying for independent advice but getting advice shaped by
                the agency&apos;s commercial interests. Not through malice, but
                through structure. The network model is built to generate
                revenue from media owners as well as advertisers. That creates
                pressure on every recommendation.
              </p>
              <p className="text-body">
                Super was founded in 2014 on one conviction: that the only way
                to give genuinely independent advice is to structure your
                business so there&apos;s no money in giving anything else. No
                volume rebates. No platform partnerships. No preferred supplier
                lists. Just a fee from the client, for work done in the
                client&apos;s interest.
              </p>
            </div>
            <div className="relative aspect-square max-w-md md:ml-auto">
              <Image
                src="/assets/headshot-ron.png"
                alt="Ron Sneddon, founder of Super Media"
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Independence List ─── */}
      <section className="bg-grey-light py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-10">
              What &ldquo;independent&rdquo; means in practice
            </h2>
            <ul className="space-y-5">
              {[
                "No holding company relationships",
                "No volume rebates or investment deals with media owners",
                "No platform partnerships that incentivise recommendations",
                "One financial incentive: a client who sees results and stays",
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
              AI as leverage, not theatre
            </h2>
            <p className="text-body mb-5">
              Most agencies that talk about AI are doing one of two things:
              using it to write copy faster, or putting it in a pitch deck to
              look modern. Neither is transformative.
            </p>
            <p className="text-body">
              At Super, AI handles the data analysis — processing audience
              behaviour, benchmarking channel costs, reading media mixes at
              speed. That frees the judgement side — the part that understands
              NZ market dynamics, reads the politics of a client&apos;s situation,
              and knows when a media plan is technically correct but
              strategically wrong — for me to apply directly. AI as leverage,
              not replacement. Old-school discipline, new-school tools.
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
