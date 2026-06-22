import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ron Sneddon — Independent NZ Media Consultant",
  description:
    "Ron Sneddon is an independent NZ media consultant with 35 years of experience. Founder of Super Media — conflict-free media strategy, audits, and programmatic. Book a free call.",
  alternates: { canonical: "/about" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.supermedia.co.nz/about#ron",
  name: "Ron Sneddon",
  givenName: "Ron",
  familyName: "Sneddon",
  jobTitle: "Founder & Independent Media Consultant",
  url: "https://www.supermedia.co.nz/about",
  image: "https://www.supermedia.co.nz/assets/headshot-ron.png",
  email: "ron@supermedia.co.nz",
  telephone: "+64-21-393-946",
  sameAs: [
    "https://www.linkedin.com/in/ron-sneddon",
    "https://www.facebook.com/supermedialtd/",
  ],
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.supermedia.co.nz/#business",
    name: "Super Media",
    url: "https://www.supermedia.co.nz",
  },
  description:
    "Independent NZ media consultant with 35 years of experience across agency, broadcast, and consultancy roles. Founder of Super Media.",
  subjectOf: [
    {
      "@type": "NewsArticle",
      headline: "Polarising presenter sparks a backlash",
      url: "https://www.rnz.co.nz/national/programmes/mediawatch/audio/201805459/polarising-presenter-sparks-a-backlash",
      datePublished: "2016-06-26",
      publisher: { "@type": "Organization", name: "RNZ Mediawatch", url: "https://www.rnz.co.nz" },
    },
    {
      "@type": "NewsArticle",
      headline: "TV resignation a gift for radio",
      url: "https://www.nzherald.co.nz/nz/tv-resignation-a-gift-for-radio/7XQACLDWE7XFN5PPBH5E6OUIAE/",
      publisher: { "@type": "Organization", name: "New Zealand Herald", url: "https://www.nzherald.co.nz" },
    },
    {
      "@type": "NewsArticle",
      headline: "Cool Story, bro: Jarvis and Sneddon launch new digital content marketing agency",
      url: "https://stoppress.co.nz/news/story-launches/",
      datePublished: "2014-09-11",
      publisher: { "@type": "Organization", name: "StopPress", url: "https://stoppress.co.nz" },
    },
    {
      "@type": "NewsArticle",
      headline: "Super is born: Sneddon launches independent media strategy agency",
      url: "https://stoppress.co.nz/news/super/",
      datePublished: "2014-05-01",
      publisher: { "@type": "Organization", name: "StopPress", url: "https://stoppress.co.nz" },
    },
  ],
  knowsAbout: [
    "media planning New Zealand",
    "media buying New Zealand",
    "media audit New Zealand",
    "programmatic advertising New Zealand",
    "NZ advertising market",
    "agency conflicts of interest",
    "volume rebates",
    "independent media consultancy",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Independent Media Consultant",
    occupationLocation: { "@type": "Country", name: "New Zealand" },
    description: "Independent media strategy, media auditing, and programmatic buying consultancy for New Zealand advertisers",
  },
};

const timelineItems = [
  { year: "1999", role: "General Manager Radio NZ, Wellington" },
  { year: "2006", role: "General Manager, Strategic Media" },
  { year: "2012", role: "Media Director, Spearhead Communications" },
  { year: "2014", role: "Co-Founded Mr Smith, Full Service Ad Agency" },
  { year: "2018", role: "Founded Super Media" },
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
            Ron Sneddon — Independent NZ Media Consultant
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            I&apos;ve seen what they do with your money. 35 years inside NZ media — on every side of the table. That&apos;s why Super exists.
          </p>
        </div>
      </section>

      {/* ─── Ron Sneddon ─── */}
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
            <p className="text-body">
              Super was founded in 2014 based on my extensive knowledge of the market. I realised that the only way to give genuinely independent advice was to build a business that speaks the truth and always has you, the customer as its core focus.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Phil Carey & Vishal Jasuja ─── */}
      <section className="bg-grey-light py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Phil Carey */}
            <div>
              <div className="flex items-start gap-6 mb-4">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <Image
                    src="/images/phil-carey.png"
                    alt="Phil Carey, AI specialist at Super Media"
                    fill
                    className="object-cover rounded"
                    sizes="128px"
                  />
                </div>
                <div>
                  <h2 className="text-navy text-2xl md:text-3xl font-bold mb-3">
                    Phil Carey
                  </h2>
                  <p className="text-body text-sm md:text-base">
                    Phil is Super&apos;s artificial intelligence strategy specialist.
                    With 40 years experience in the media he&apos;s now at the forefront
                    of how AI can be used effectively in business and media campaigns.
                  </p>
                </div>
              </div>
              <p className="text-body text-sm">
                Phil is the author of{" "}
                <a
                  href="https://www.cornerstonemedia.com.au/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:underline"
                >
                  <em>The Curiosity Advantage: Why Better Questions Achieve Better Results in the Age of AI</em>
                </a>.
              </p>
            </div>

            {/* Vishal Jasuja */}
            <div>
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <Image
                    src="/images/vishal-jasuja.png"
                    alt="Vishal Jasuja, Digital Director at Super Media"
                    fill
                    className="object-cover rounded"
                    sizes="128px"
                  />
                </div>
                <div>
                  <h2 className="text-navy text-2xl md:text-3xl font-bold mb-3">
                    Vishal Jasuja
                  </h2>
                  <p className="text-body text-sm md:text-base">
                    Vishal is our Digital Director responsible for integration of AI
                    into all our digital campaigns including search, display and social
                    media. He also leads our website construction and design arm.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Independence List ─── */}
      <section className="bg-white py-20 lg:py-24">
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
                "No platform partnerships that create an incentive to recommend one channel over another",
                "One financial incentive: a client who gets results",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-orange flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
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
      <section className="bg-grey-light py-20 lg:py-28">
        <div className="section-container">
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-12">
            Career
          </h2>
          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-grey-mid ml-[52px] hidden sm:block"
              aria-hidden="true"
            />
            <ol className="space-y-8 list-none">
              {timelineItems.map(({ year, role }) => (
                <li key={year + role} className="flex items-start gap-6 sm:gap-10">
                  <div className="flex-shrink-0 w-[52px] text-right">
                    <span className="text-orange font-bold text-sm">{year}</span>
                  </div>
                  <div className="relative">
                    <span
                      className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-orange border-2 border-white hidden sm:block"
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

      {/* ─── Press mentions ─── */}
      <section className="bg-white py-16 lg:py-20 border-t border-grey-mid">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">In the press</p>
            <h2 className="text-navy text-2xl md:text-3xl font-bold mb-4">
              Media coverage
            </h2>
            <p className="text-body mb-6">
              Ron has been quoted and profiled by RNZ Mediawatch, the NZ Herald, and StopPress — as a commentator on the NZ media industry and as a founder building independent alternatives to the agency model.
            </p>
            <Link href="/press" className="btn-outline inline-flex">
              View press coverage →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── AI Section ─── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6">
              How we use AI for your business
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
              senior analyst time now takes 30 seconds — which means independent
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
            Find out why Super is right for you
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
