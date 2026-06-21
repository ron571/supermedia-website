import type { Metadata } from "next";
import lazyImport from "next/dynamic";
import Link from "next/link";
import Logo from "@/components/Logo";

export const dynamic = "force-dynamic";

const SuperscanForm = lazyImport(() => import("@/components/SuperscanForm"), {
  loading: () => (
    <div className="bg-white rounded shadow-md p-8 max-w-2xl mx-auto animate-pulse">
      <div className="h-4 bg-grey-mid/40 rounded mb-4 w-3/4" />
      <div className="h-32 bg-grey-mid/20 rounded mb-4" />
      <div className="h-10 bg-grey-mid/30 rounded" />
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Superscan — Find Out If Your Advertising Is Actually Working",
  description:
    "Tell Superscan what channels you're running. Get an independent read on where the risk is, where the opportunity is, and one question worth asking your agency. Free, instant, no sales call.",
  alternates: { canonical: "/superscan" },
};

export default function SuperscanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal header — logo + contact email only */}
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
          <p className="eyebrow mb-4">Superscan</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mx-auto mb-4">
            Is your media actually working?
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            A straight independent read — not a glossy report full of numbers that don&apos;t connect to your business. Completely confidential.
          </p>
        </div>
      </section>

      {/* What Superscan does */}
      <section className="bg-white py-12 border-b border-grey-mid">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange font-bold text-lg">1</span>
              </div>
              <h3 className="text-navy font-bold mb-2">Tell us your mix</h3>
              <p className="text-body text-sm">Which channels you&apos;re running, roughly what you&apos;re spending, and how long you&apos;ve been at it. Takes about 90 seconds.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange font-bold text-lg">2</span>
              </div>
              <h3 className="text-navy font-bold mb-2">Get an independent read</h3>
              <p className="text-body text-sm">Superscan benchmarks your mix against NZ market data and 35 years of media buying experience. You get a plain-English assessment — not a dashboard.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange font-bold text-lg">3</span>
              </div>
              <h3 className="text-navy font-bold mb-2">One question worth asking</h3>
              <p className="text-body text-sm">Every Superscan ends with a specific question to ask your agency or supplier — based on what your mix actually shows, not a generic checklist.</p>
            </div>
          </div>

          {/* Sample output preview */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-eyebrow text-grey-dark mb-4 text-center">Sample output</p>
            <div className="border border-grey-mid rounded bg-grey-light overflow-hidden">
              <div className="bg-navy px-6 py-4 flex items-center justify-between">
                <span className="text-white font-semibold text-sm">Superscan — Media Mix Assessment</span>
                <span className="text-white/40 text-xs">Example only</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-white text-xs font-bold">!</span>
                  <div>
                    <p className="text-navy font-semibold text-sm">Digital display — worth checking</p>
                    <p className="text-grey-dark text-sm">Display at 35% of budget is above the NZ benchmark for your category. Without independent viewability data, this allocation carries risk.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                  <div>
                    <p className="text-navy font-semibold text-sm">Search — reasonable allocation</p>
                    <p className="text-grey-dark text-sm">Your search weighting is in range for a business at this spend level. The question is how actively the account is being managed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">×</span>
                  <div>
                    <p className="text-navy font-semibold text-sm">No independent measurement</p>
                    <p className="text-grey-dark text-sm">You&apos;re relying entirely on agency reporting. That&apos;s the most common issue we see — and the easiest to fix.</p>
                  </div>
                </div>
                <div className="border-t border-grey-mid pt-4 mt-2">
                  <p className="text-xs font-bold uppercase tracking-eyebrow text-grey-dark mb-2">The one question to ask your agency</p>
                  <p className="text-navy text-sm font-medium italic">&ldquo;Can you show me the viewable CPM on our display placements, independently verified — not from your own platform?&rdquo;</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-grey-dark text-center mt-3">Your Superscan will reflect your actual channels and spend — this is an illustrative example.</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-grey-light py-12 lg:py-16 flex-1">
        <div className="section-container">
          <SuperscanForm />
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-navy-dark py-6">
        <div className="section-container flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2026 Super Media</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white/70 transition-colors">
              supermedia.co.nz
            </Link>
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
