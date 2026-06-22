import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press & Media Coverage",
  description:
    "Ron Sneddon of Super Media has been featured in RNZ Mediawatch, the NZ Herald, and StopPress as a leading voice on New Zealand media, advertising, and the broadcast industry.",
  alternates: { canonical: "/press" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Press coverage of Ron Sneddon and Super Media",
  description: "Media appearances and press coverage featuring Ron Sneddon, independent NZ media consultant and founder of Super Media",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "NewsArticle",
        headline: "Polarising presenter sparks a backlash",
        url: "https://www.rnz.co.nz/national/programmes/mediawatch/audio/201805459/polarising-presenter-sparks-a-backlash",
        datePublished: "2016-06-26",
        publisher: { "@type": "Organization", name: "RNZ Mediawatch" },
        description: "Ron Sneddon, former General Manager of Newstalk ZB, is quoted as an expert on broadcaster Mike Hosking and the evolving relationship between commercial media and advertisers.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "NewsArticle",
        headline: "TV resignation a gift for radio",
        url: "https://www.nzherald.co.nz/nz/tv-resignation-a-gift-for-radio/7XQACLDWE7XFN5PPBH5E6OUIAE/",
        publisher: { "@type": "Organization", name: "New Zealand Herald" },
        description: "The NZ Herald features Ron Sneddon's commentary on the shifting landscape between television and radio in New Zealand.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "NewsArticle",
        headline: "Cool Story, bro: Jarvis and Sneddon launch new digital content marketing agency",
        url: "https://stoppress.co.nz/news/story-launches/",
        datePublished: "2014-09-11",
        publisher: { "@type": "Organization", name: "StopPress" },
        description: "StopPress covers the launch of Story, a digital content marketing agency co-founded by Ron Sneddon, built around a publishing model with specialist writers and content strategists.",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "NewsArticle",
        headline: "Super is born: Sneddon launches independent media strategy agency",
        url: "https://stoppress.co.nz/news/super/",
        datePublished: "2014-05-01",
        publisher: { "@type": "Organization", name: "StopPress" },
        description: "StopPress covers Ron Sneddon leaving Mr Smith after 11 years to found Super — an independent media strategy agency built on the principle of real media consumption research.",
      },
    },
  ],
};

const pressItems = [
  {
    publication: "RNZ Mediawatch",
    logo: "RNZ",
    year: "2016",
    date: "26 June 2016",
    title: "Polarising presenter sparks a backlash",
    excerpt:
      "RNZ Mediawatch turns to Ron Sneddon — then running Super, formerly General Manager of Newstalk ZB — for expert commentary on broadcaster Mike Hosking, advertiser relationships, and the changing commercial media landscape. Sneddon's insight on how major sponsors respond to controversy, and what it means when editorial and commercial interests blur, draws on deep experience at the top of NZ broadcasting.",
    url: "https://www.rnz.co.nz/national/programmes/mediawatch/audio/201805459/polarising-presenter-sparks-a-backlash",
    tag: "Expert commentary",
  },
  {
    publication: "New Zealand Herald",
    logo: "NZH",
    year: "2014",
    date: "2014",
    title: "TV resignation a gift for radio",
    excerpt:
      "The New Zealand Herald features Ron Sneddon's perspective on the competitive dynamics between television and radio in New Zealand — and what a high-profile TV departure means for the broader broadcasting market.",
    url: "https://www.nzherald.co.nz/nz/tv-resignation-a-gift-for-radio/7XQACLDWE7XFN5PPBH5E6OUIAE/",
    tag: "Industry analysis",
  },
  {
    publication: "StopPress",
    logo: "SP",
    year: "2014",
    date: "11 September 2014",
    title: "Cool Story, bro: Jarvis and Sneddon launch new digital content marketing agency",
    excerpt:
      "StopPress covers the launch of Story, a digital content marketing venture co-founded by Ron Sneddon and Brendan Jarvis. Built on a publishing model — specialist writers, videographers, and content strategists — Story positioned itself around the idea that brands need to think less like advertisers and more like publishers. Sneddon: \"A journalist's training is to gather facts and to look behind them to the real story.\"",
    url: "https://stoppress.co.nz/news/story-launches/",
    tag: "Company launch",
  },
  {
    publication: "StopPress",
    logo: "SP",
    year: "2014",
    date: "May 2014",
    title: "Super is born: Sneddon launches independent media strategy agency",
    excerpt:
      "StopPress covers Ron Sneddon's departure from Mr Smith after 11 years — and the launch of Super, an independent media strategy agency. The piece details Ron's approach: real research into how families actually consume media, rather than accepting agency assumptions. Super was founded on the principle that independent advice requires structural independence from the networks that profit from your media spend.",
    url: "https://stoppress.co.nz/news/super/",
    tag: "Company launch",
  },
];

export default function PressPage() {
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
          <p className="eyebrow text-orange mb-4">Media Coverage</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mb-4">
            Ron Sneddon in the Press
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            Archived coverage from RNZ, the NZ Herald, and StopPress — featuring Ron Sneddon as a commentator, founder, and media industry expert.
          </p>
        </div>
      </section>

      {/* ─── Press Items ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl space-y-12">
            {pressItems.map((item) => (
              <article
                key={item.url}
                className="border-l-4 border-orange pl-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-navy rounded text-white text-xs font-bold flex-shrink-0">
                    {item.logo}
                  </span>
                  <div>
                    <p className="text-navy font-semibold text-sm">{item.publication}</p>
                    <p className="text-body text-xs">{item.date}</p>
                  </div>
                  <span className="ml-auto text-xs font-medium text-orange bg-orange/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h2 className="text-navy text-xl md:text-2xl font-bold mb-3">
                  {item.title}
                </h2>
                <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
                  {item.excerpt}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:underline"
                >
                  Read the article
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About CTA ─── */}
      <section className="bg-grey-light py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-5">
              About Ron Sneddon
            </h2>
            <p className="text-body mb-6" style={{ lineHeight: 1.7 }}>
              Ron has 35 years of NZ media experience — across radio, television,
              agency, and independent consultancy. He has been quoted by RNZ, the
              NZ Herald, and trade press as a senior voice on how NZ media works,
              who it serves, and where advertisers&apos; money actually goes.
            </p>
            <p className="text-body mb-8" style={{ lineHeight: 1.7 }}>
              Super Media was founded on a simple principle: the only way to give
              genuinely independent media advice is to have no financial stake in
              which channel you recommend.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                About Ron
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="section-container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Independent media intelligence — from someone who&apos;s been inside it
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            30 minutes. No agenda. Find out if Super is right for you.
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
              Run Superscan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
