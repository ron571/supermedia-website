import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Audience Reality Check — Super Media",
  description:
    "Most NZ media plans are built on who marketers think they're reaching. The Audience Reality Check shows who's actually there — and where the gap is costing you.",
  alternates: { canonical: "/audience-reality-check" },
  robots: { index: true, follow: true },
};

export default function AudienceRealityCheckLandingPage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Minimal header */}
      <header className="sticky top-0 z-50 bg-white border-b border-grey-mid h-[68px] flex items-center">
        <div className="section-container w-full flex items-center justify-between">
          <Logo variant="light" size={36} />
          <a
            href="mailto:ron@supermedia.co.nz"
            className="text-sm text-grey-dark hover:text-navy transition-colors"
          >
            ron@supermedia.co.nz
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-16 lg:py-24 text-center">
          <p className="eyebrow mb-4">Audience Reality Check</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-6" style={{ lineHeight: 1.1 }}>
            Your audience assumptions<br className="hidden md:block" /> are probably wrong.
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            Most NZ media plans are built on who marketers think they&apos;re reaching.
            This tool shows who&apos;s actually there — and where the gap is costing you.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-orange">
        <div className="section-container py-8">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            {[
              { n: "73%", label: "of NZ media briefs misidentify their primary channel" },
              { n: "2.4×", label: "average gap between assumed and actual audience reach" },
              { n: "3 steps", label: "to get your full audience reality report" },
            ].map(({ n, label }) => (
              <div key={n}>
                <div className="text-white text-3xl font-bold mb-1">{n}</div>
                <div className="text-white/75 text-sm max-w-[160px] leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-navy text-3xl font-bold mb-4">What the tool does</h2>
            <p className="text-body text-lg mb-12" style={{ lineHeight: 1.7 }}>
              The Audience Reality Check maps your assumed audience against NZ 2026 actual media consumption data.
              It tells you where typical agency recommendations align with reality — and where they don&apos;t.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: "01",
                  title: "Describe your audience",
                  body: "Age, gender, income, occupation, region, lifestyle. Three short screens — takes about two minutes.",
                },
                {
                  step: "02",
                  title: "We run the analysis",
                  body: "Your profile is mapped against NZ 2026 media behaviour data and benchmarked against what agencies typically recommend.",
                },
                {
                  step: "03",
                  title: "Get your reality report",
                  body: "An alignment score, a channel-by-channel gap analysis, AI search behaviour data, and The Super Take — a plain-English read on what it means.",
                },
              ].map(({ step, title, body }) => (
                <div key={step}>
                  <div className="text-orange font-bold text-xs uppercase tracking-widest mb-3">{step}</div>
                  <h3 className="text-navy font-bold text-lg mb-2">{title}</h3>
                  <p className="text-body text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-navy text-3xl font-bold mb-10">What you get out</h2>
            <div className="space-y-5">
              {[
                {
                  title: "Assumption Alignment Score",
                  body: "A single number showing how closely typical media recommendations match where your audience actually spends their attention. Most scores are lower than clients expect.",
                },
                {
                  title: "Channel gap analysis",
                  body: "A bar-by-bar comparison of what agencies typically recommend versus NZ 2026 actual consumption data for your specific audience profile — by channel.",
                },
                {
                  title: "AI search behaviour data",
                  body: "What percentage of your audience now uses AI assistants (ChatGPT, Copilot, Gemini) instead of Google to research products and services. Most media plans budget zero for this.",
                },
                {
                  title: "Device reality breakdown",
                  body: "How your audience actually consumes media by device — smartphone, desktop, smart TV, tablet — adjusted for their specific demographics and lifestyle.",
                },
                {
                  title: "The Super Take",
                  body: "A plain-English summary of what the data means for your media strategy — written the way an independent senior consultant would say it, not the way an agency would.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4 bg-white rounded p-5 border border-grey-mid">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange flex items-center justify-center mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-navy font-bold text-sm mb-1">{title}</div>
                    <div className="text-body text-sm leading-relaxed">{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 lg:py-20 flex-1">
        <div className="section-container text-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Ready to run your check?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto" style={{ lineHeight: 1.65 }}>
            This tool is available to Super Media clients and approved prospects.
            If you&apos;ve been sent this link, you&apos;re ready to go.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/audience-reality-check/tool" className="btn-primary">
              Run the Audience Reality Check →
            </Link>
            <a
              href="mailto:ron@supermedia.co.nz"
              className="btn-outline-white"
            >
              Request access
            </a>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-navy-dark py-6">
        <div className="section-container flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2026 Super Media</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white/70 transition-colors">supermedia.co.nz</Link>
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
