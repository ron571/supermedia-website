import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/articles";


export const metadata: Metadata = {
  title: { absolute: "Independent NZ Media Consultant | Super Media" },
  description:
    "Independent NZ media consultant. No agency conflicts, no rebates. Media audits, strategy, and programmatic for NZ advertisers. Get a free media audit today.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.supermedia.co.nz/about#ron",
      name: "Ron Sneddon",
      givenName: "Ron",
      familyName: "Sneddon",
      jobTitle: "Founder & Independent Media Consultant",
      description:
        "Ron Sneddon is an independent NZ media consultant with 35 years of experience buying, selling, and auditing advertising in the New Zealand market. He founded Super Media to provide conflict-free media advice to NZ businesses.",
      url: "https://www.supermedia.co.nz/about",
      email: "ron@supermedia.co.nz",
      image: "https://www.supermedia.co.nz/assets/headshot-ron.png",
      sameAs: [
        "https://www.linkedin.com/in/ron-sneddon",
        "https://www.facebook.com/supermedialtd/",
      ],
      worksFor: { "@id": "https://www.supermedia.co.nz/#business" },
      knowsAbout: [
        "media planning",
        "media buying",
        "media auditing",
        "programmatic advertising",
        "New Zealand advertising market",
        "volume rebates",
        "agency conflicts of interest",
        "television advertising New Zealand",
        "radio advertising New Zealand",
        "digital advertising New Zealand",
        "out of home advertising",
        "independent media consultancy",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Independent Media Consultant",
        occupationLocation: { "@type": "Country", name: "New Zealand" },
        description: "Independent media strategy, media auditing, and programmatic buying consultancy for New Zealand advertisers",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.supermedia.co.nz/#business",
      name: "Super Media",
      alternateName: ["Super Media NZ", "SuperMedia"],
      description:
        "Super Media is an independent New Zealand media consultancy founded by Ron Sneddon. We provide media strategy, media audits, and programmatic buying with no agency conflicts and no volume rebates. Based in New Zealand, serving NZ advertisers nationwide.",
      url: "https://www.supermedia.co.nz",
      email: "ron@supermedia.co.nz",
      telephone: "+64-21-393-946",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NZ",
        addressRegion: "New Zealand",
      },
      logo: {
        "@type": "ImageObject",
        url: "https://www.supermedia.co.nz/api/og",
        width: 1200,
        height: 630,
      },
      image: "https://www.supermedia.co.nz/assets/headshot-ron.png",
      founder: { "@id": "https://www.supermedia.co.nz/about#ron" },
      employee: { "@id": "https://www.supermedia.co.nz/about#ron" },
      areaServed: {
        "@type": "Country",
        name: "New Zealand",
      },
      knowsAbout: [
        "media planning New Zealand",
        "media buying New Zealand",
        "media audit New Zealand",
        "programmatic advertising New Zealand",
        "NZ advertising market",
        "agency conflicts of interest",
        "volume rebates advertising",
        "independent media advice",
        "TV advertising New Zealand",
        "digital advertising New Zealand",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Super Media Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Media Strategy & Planning",
              description: "Independent NZ media strategy with no conflicts of interest",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Media Audit & Review",
              description: "Line-by-line audit of NZ advertising spend against market benchmarks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Programmatic Buying",
              description: "Transparent programmatic advertising buying for NZ advertisers",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Retained Advisory",
              description: "Ongoing independent media oversight and advice",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.supermedia.co.nz/#website",
      url: "https://www.supermedia.co.nz",
      name: "Super Media",
      description: "Independent NZ media consultancy — media strategy, media audits, and programmatic buying with no conflicts.",
      publisher: { "@id": "https://www.supermedia.co.nz/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.supermedia.co.nz/thinking?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.supermedia.co.nz/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you require a long-term contract?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We work month-to-month. If the work is good, clients stay. That's the only retention mechanism we use.",
          },
        },
        {
          "@type": "Question",
          name: "What size businesses do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients spend between $2,000 and $20,000 a month on advertising. Big enough to matter, small enough that independent advice changes the economics.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from working with an agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An agency executes campaigns. Super Media gives you an independent read on whether those campaigns make sense — before, during, or after. No preferred suppliers, no conflicts.",
          },
        },
        {
          "@type": "Question",
          name: "What does a Free Media Audit involve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A review of your current channels, spend allocation, and reported results — benchmarked against what the media should be delivering for a business like yours. Most audits identify at least one material issue within the first session.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly will I see value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients come away from the first conversation with something actionable. A full audit typically delivers a clear diagnosis within one to two weeks.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  const articles = getArticles().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Section 1: Hero ─── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-24 lg:py-36">
          <h1 className="eyebrow mb-5">Independent NZ Media Consultancy</h1>
          <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6">
            Your media budget works harder when someone independent is watching it.
          </p>
          <p
            className="text-white text-lg max-w-2xl mb-4"
            style={{ opacity: 0.72, lineHeight: 1.65 }}
          >
            Most NZ businesses spending on advertising don&apos;t know if it&apos;s working. We do. Independent media consultancy — no agency relationships, no conflicts, just an honest read on your spend and how to get more from it.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact" className="btn-primary">
              Get a Free Media Audit →
            </Link>
            <Link href="/superscan" className="btn-outline-white">
              Run Superscan — 30 seconds, free →
            </Link>
            <Link href="/audience-reality-check" className="btn-outline-white">
              Audience Reality Check →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Trust Bar ─── */}
      <section className="bg-white border-b border-grey-mid py-5">
        <div className="section-container">
          <p className="text-grey-dark text-sm text-center">
            Trusted by NZ businesses across{" "}
            <span className="font-semibold text-navy">professional services</span>,{" "}
            <span className="font-semibold text-navy">retail</span>,{" "}
            <span className="font-semibold text-navy">financial services</span>, and{" "}
            <span className="font-semibold text-navy">property</span> — typically spending $2,000–$20,000/month on advertising.
          </p>
        </div>
      </section>

      {/* ─── Section 2: The Problem ─── */}
      <section id="the-problem" className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-xl mb-12">
            <h2 className="text-navy text-3xl md:text-4xl font-bold mb-4">
              What usually happens
            </h2>
            <p className="text-body text-lg" style={{ lineHeight: 1.65 }}>
              Most NZ businesses who&apos;ve been burned by advertising describe
              the same experience. The details differ. The pattern doesn&apos;t.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {[
              {
                num: "01",
                heading: "The report looked good. The results didn’t.",
                body: "Agencies measure what they can control — impressions, clicks, reach. Not whether your phone rang or your door opened. A good-looking report can hide a campaign that didn't work.",
              },
              {
                num: "02",
                heading: "You met the boss. You got the graduate.",
                body: "The pitch team and the service team are rarely the same people. Senior staff win the work. Junior staff run it. That gap is where your budget gets managed by someone who doesn't yet know what to question.",
              },
              {
                num: "03",
                heading: "The advice wasn’t free of strings.",
                body: "Most agencies have financial relationships with the media they recommend. That doesn't make them dishonest — but it does mean their best recommendation and their most profitable recommendation aren't always the same thing.",
              },
              {
                num: "04",
                heading: "You were sold AI. You got a dashboard.",
                body: "AI is being used as a sales tool by every agency in NZ right now. Super Media uses it as a working tool — for audience analysis, channel benchmarking, and campaign diagnosis. There's a difference.",
              },
            ].map(({ num, heading, body }) => (
              <div key={num}>
                <p className="text-orange text-2xl font-bold mb-4">{num}</p>
                <h3 className="text-navy text-xl font-bold mb-3 leading-snug">
                  {heading}
                </h3>
                <p className="text-body text-base">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Small Business Entry Point ─── */}
      <section className="bg-orange py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-white/80 text-sm font-bold uppercase tracking-eyebrow mb-4">
              You don&apos;t need a big budget to need independent advice
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-snug">
              Most of the businesses that come to Super are spending between
              $2,000 and $20,000 a month on advertising.
            </h2>
            <p className="text-white/85 text-lg mb-8" style={{ lineHeight: 1.65 }}>
              The Superscan tool was built specifically for this situation. It
              takes 30 seconds, costs nothing, and gives you an independent read
              on whether your current advertising makes sense — without a sales
              call, a contract, or any obligation.
            </p>
            <Link href="/superscan" className="inline-flex items-center gap-2 bg-white text-orange font-bold px-6 py-3 rounded hover:bg-grey-light transition-colors">
              Run your free Superscan →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Differentiators ─── */}
      <section className="bg-grey-light py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Super is different
            </h2>
            <p className="text-body text-lg" style={{ lineHeight: 1.65 }}>
              Not different as a positioning statement. Different by design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <ShieldIcon />,
                heading: "Independent by design",
                body: "No network relationships, no preferred supplier lists, no volume targets. Every recommendation is made on merit. Structurally rare in NZ.",
              },
              {
                icon: <PersonIcon />,
                heading: "Senior judgement, not junior execution",
                body: "When you work with Super Media you get 35 years of media experience applied directly to your account — not handed off to a graduate.",
              },
              {
                icon: <PulseIcon />,
                heading: "AI that works, not AI that impresses",
                body: "Audience analysis that used to take a week takes minutes. Every Superscan is a live AI analysis. This isn't a feature — it changes the economics of independent advice.",
              },
              {
                icon: <LockOpenIcon />,
                heading: "No lock-in",
                body: "Month-to-month. We stay because the work is good, not because you signed something.",
              },
            ].map(({ icon, heading, body }) => (
              <div key={heading}>
                <div
                  className="w-11 h-11 bg-navy rounded flex items-center justify-center mb-5 text-white"
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <h3 className="text-navy text-xl font-bold mb-3">{heading}</h3>
                <p className="text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: About Ron ─── */}
      <section className="bg-grey-light py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">The person behind the advice</p>
            <div className="flex items-start gap-6 mb-6">
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
                  Ron spent 35 years inside NZ media: buying it, selling it,
                  and running an agency. He has sat at every table in this
                  industry and watched, from the inside, exactly how advertising
                  budgets get eroded. Super exists because he decided to stop
                  watching it happen.
                </p>
              </div>
            </div>
            <p className="text-body mb-8">
              When you work with Super, you&apos;re not getting a junior account
              manager following a process. You&apos;re getting someone who has
              seen every version of the sales pitch your current agency gave you
              — and knows what it looks like when the advice is shaped by
              someone else&apos;s interests.
            </p>
            <ul className="text-body space-y-2 mb-8 border-l-2 border-orange pl-5">
              <li>35 years buying and selling NZ media across TV, radio, print, digital, and programmatic</li>
              <li>Worked with clients across retail, professional services, financial services, and property</li>
              <li>Founded and ran a media agency before building Super</li>
              <li>Created Superscan — the only free independent AI media diagnostic available to NZ businesses</li>
            </ul>
            <blockquote className="italic text-navy font-medium text-lg mb-8 border-l-4 border-orange pl-4">
              &ldquo;If the advice would be different depending on who&apos;s paying for it, it&apos;s not independent advice.&rdquo;
            </blockquote>
            <Link
              href="/about"
              className="text-orange font-semibold hover:text-orange-dark transition-colors"
            >
              Ron&apos;s full story →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Proof ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What independent advice actually changes
            </h2>
            <p className="text-body text-lg" style={{ lineHeight: 1.65 }}>
              Real outcomes from Super Media engagements. Client names withheld on request.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                sector: "Retail",
                service: "Media Audit",
                outcome1: { stat: "19%", label: "reduction in total media spend" },
                outcome2: { stat: "+12%", label: "increase in audience reach" },
                finding: "Digital display was consuming 34% of the media budget and delivering 8% of measurable response. It had never been independently benchmarked.",
              },
              {
                sector: "Financial Services",
                service: "Media Strategy",
                outcome1: { stat: "31%", label: "lower CPM vs agency plan" },
                outcome2: { stat: "2×", label: "qualified enquiry rate" },
                finding: "The agency plan over-indexed on broadcast for an under-45 audience. The recommended channel mix was rebuilt from NZ audience behaviour up.",
              },
              {
                sector: "Property",
                service: "Retained Advisory",
                outcome1: { stat: "$140K", label: "in savings identified, year one" },
                outcome2: { stat: "Ongoing", label: "retained advisory relationship" },
                finding: "Overpriced digital inventory had gone undetected for 18 months. Buying terms on radio had not been reviewed or renegotiated in three years.",
              },
            ].map(({ sector, service, outcome1, outcome2, finding }) => (
              <div key={sector} className="border border-grey-mid rounded overflow-hidden">
                <div className="bg-navy p-6">
                  <p className="eyebrow mb-1">{service}</p>
                  <h3 className="text-white text-xl font-bold mb-4">{sector}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-orange text-2xl font-bold">{outcome1.stat}</p>
                      <p className="text-white/60 text-sm">{outcome1.label}</p>
                    </div>
                    <div>
                      <p className="text-orange text-2xl font-bold">{outcome2.stat}</p>
                      <p className="text-white/60 text-sm">{outcome2.label}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-body text-sm" style={{ lineHeight: 1.65 }}>{finding}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/results"
            className="text-orange font-semibold hover:text-orange-dark transition-colors"
          >
            See full case studies →
          </Link>
        </div>
      </section>

      {/* ─── Section 8: Social Proof ─── */}
      <section className="bg-grey-light py-20 lg:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <blockquote className="bg-white rounded p-8 border border-grey-mid">
              <p className="text-navy text-lg font-medium mb-6" style={{ lineHeight: 1.6 }}>
                &ldquo;We&apos;d been with the same agency for three years and
                assumed the results were just what advertising looked like. Ron
                showed us in one conversation that we&apos;d been paying for
                reach we weren&apos;t getting. It was embarrassing how
                straightforward it was once someone independent looked at it.&rdquo;
              </p>
              <footer className="text-grey-dark text-sm">
                — Owner, Auckland professional services firm{" "}
                <span className="italic">(name withheld on request)</span>
              </footer>
            </blockquote>
            <blockquote className="bg-white rounded p-8 border border-grey-mid">
              <p className="text-navy text-lg font-medium mb-6" style={{ lineHeight: 1.6 }}>
                &ldquo;Super Media were the only agency who actually told me the truth about our digital ad performance which was sub par, as they discovered. Our business has doubled since Ron and his team implemented their strategies and we&apos;re really impressed with the personal service we get.&rdquo;
              </p>
              <footer className="text-grey-dark text-sm">
                — Business owner{" "}
                <span className="italic">(name withheld on request)</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── Section 9: Thinking Preview ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-navy text-3xl md:text-4xl font-bold">
              The Super view on NZ media
            </h2>
            <Link
              href="/thinking"
              className="text-orange font-semibold text-sm hover:text-orange-dark transition-colors hidden sm:block"
            >
              All thinking →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/thinking/${article.slug}`}
                className="group block border border-grey-mid rounded p-6 hover:shadow-md transition-shadow"
              >
                <p className="eyebrow mb-2">{article.tag}</p>
                <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-orange transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-body text-sm mb-4 line-clamp-2">
                  {article.description}
                </p>
                <p className="text-grey-dark text-xs">
                  {article.date} · {article.readTime}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              href="/thinking"
              className="text-orange font-semibold text-sm hover:text-orange-dark transition-colors"
            >
              All thinking →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 9b: Resources Promo ─── */}
      <section className="bg-grey-light py-14 lg:py-16">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-navy text-xl font-bold mb-1">NZ media audience data — independent</h2>
              <p className="text-grey-dark text-sm max-w-xl">Radio ratings, TV reach, digital audiences, outdoor, cinema, influencer. Fact-checked against what sellers actually claim.</p>
            </div>
            <Link href="/resources" className="btn-primary shrink-0">
              View NZ media data →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 10: Final CTA ─── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="section-container text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Not sure if your media budget is working?
          </h2>
          <p className="text-white/70 text-lg mb-4 max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            Most businesses aren&apos;t. That&apos;s the result of an industry that measures what it can control, not what matters to you.
          </p>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            A free Media Audit gives you a clear answer: where your budget is going, what it&apos;s delivering, and where the waste is. No contract. No obligation. No sales pitch dressed up as advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get a Free Media Audit
            </a>
            <Link href="/superscan" className="btn-outline-white">
              Run Superscan first →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section 11: FAQ ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
              Common questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Do you require a long-term contract?",
                  a: "No. We work month-to-month. If the work is good, clients stay. That's the only retention mechanism we use.",
                },
                {
                  q: "What size businesses do you work with?",
                  a: "Most clients spend between $2,000 and $20,000 a month on advertising. Big enough to matter, small enough that independent advice changes the economics.",
                },
                {
                  q: "How is this different from working with an agency?",
                  a: "An agency executes campaigns. Super Media gives you an independent read on whether those campaigns make sense — before, during, or after. We don't take commissions from media owners.",
                },
                {
                  q: "What does a Free Media Audit involve?",
                  a: "A review of your current channels, spend allocation, and reported results — benchmarked against what the media should be delivering for a business like yours. Most audits identify at least one material issue within the first session.",
                },
                {
                  q: "How quickly will I see value?",
                  a: "Most clients come away from the first conversation with something actionable. A full audit typically delivers a clear diagnosis within one to two weeks.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-grey-mid pb-8">
                  <h3 className="text-navy font-bold text-lg mb-2">{q}</h3>
                  <p className="text-body">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── SVG Icons ─── */
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function LockOpenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  );
}
