import type { Metadata } from "next";
import lazyImport from "next/dynamic";
import Link from "next/link";
import Logo from "@/components/Logo";

export const dynamic = "force-dynamic";

const SocialScanForm = lazyImport(() => import("@/components/SocialScanForm"), {
  loading: () => (
    <div className="bg-white rounded shadow-md p-8 max-w-2xl mx-auto animate-pulse">
      <div className="h-4 bg-grey-mid/40 rounded mb-4 w-3/4" />
      <div className="h-24 bg-grey-mid/20 rounded mb-4" />
      <div className="h-10 bg-grey-mid/30 rounded" />
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Social Scan — See Your Digital Footprint As Others Do",
  description:
    "Social Scan audits what is publicly visible about you or your business across LinkedIn, Facebook, Instagram, X, YouTube, and NZ media. No account access needed. Get an independent read on your digital presence.",
  alternates: { canonical: "/social-scan" },
};

export default function SocialScanPage() {
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
          <p className="eyebrow mb-4">Social Scan</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-4">
            What does your digital footprint actually look like?
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto" style={{ lineHeight: 1.65 }}>
            Social Scan searches what&apos;s publicly visible about you or your business — across every major platform and NZ media — and tells you what an outsider actually sees.
          </p>
          <p className="text-white/50 text-sm mt-4">
            No account access. No subscription. Just an independent read on your public presence.
          </p>
        </div>
      </section>

      {/* Ron's copy — why this tool exists */}
      <section className="bg-white py-14 border-b border-grey-mid">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Why I built this</p>
            <p className="text-body text-lg mb-5" style={{ lineHeight: 1.7 }}>
              Before most meetings, your name gets Googled. A client deciding whether to proceed. A journalist choosing who to call for a comment. A potential business partner checking what they&apos;re getting into. What they find takes about 90 seconds. What that costs you can take much longer to trace back.
            </p>
            <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
              I kept seeing the same gap with NZ business leaders and brands. Credible people with real expertise showing up badly online, not through any fault of their own, but because nobody had looked at their presence from the outside. Strong LinkedIn. Dormant Instagram. Three Stuff.co.nz articles sitting unused because they never made it onto social. The professional credibility was real. The digital picture didn&apos;t reflect it.
            </p>
            <p className="text-body mb-5" style={{ lineHeight: 1.7 }}>
              For businesses the picture is the same, just at greater scale. Presence on the right platforms is assumed. How that presence actually looks to someone who&apos;s never heard of you is rarely checked independently.
            </p>
            <p className="text-body" style={{ lineHeight: 1.7 }}>
              Social Scan does what a stranger does: searches your name or business across LinkedIn, Facebook, Instagram, X, YouTube, and NZ media, then tells you what&apos;s visible, what&apos;s missing, and where the gaps are. It scans public information only, the same view any stranger already has. Most people are surprised by what they find.
            </p>
            <p className="text-navy font-semibold mt-6">— Ron Sneddon, Super Media</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-12 border-b border-grey-mid">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange font-bold text-lg">1</span>
              </div>
              <h3 className="text-navy font-bold mb-2">Tell us who to scan</h3>
              <p className="text-body text-sm">
                Enter a name — individual or business. Add a website URL or known social handles if you have them. That&apos;s all it needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange font-bold text-lg">2</span>
              </div>
              <h3 className="text-navy font-bold mb-2">We search the web</h3>
              <p className="text-body text-sm">
                Social Scan searches LinkedIn, Facebook, Instagram, X, YouTube, and NZ news sources — everything publicly visible to anyone who looks you up.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange font-bold text-lg">3</span>
              </div>
              <h3 className="text-navy font-bold mb-2">Get your presence report</h3>
              <p className="text-body text-sm">
                See a platform-by-platform assessment and an overall digital presence grade. Request the full report from Ron for detailed recommendations.
              </p>
            </div>
          </div>

          {/* The key difference from tools like Hootsuite */}
          <div className="mt-12 max-w-2xl mx-auto bg-navy/5 border border-navy/10 rounded-lg p-6">
            <p className="text-navy font-semibold mb-2">
              This is not a dashboard. It&apos;s an outside-in audit.
            </p>
            <p className="text-body text-sm">
              Analytics platforms like Hootsuite show you your own data — what&apos;s happening inside your connected accounts. Social Scan shows you what everyone else already sees when they look you up: a prospect, a journalist, a potential investor, or a new client. That&apos;s a different question, and the answer is often not what people expect.
            </p>
          </div>

          {/* Sample output */}
          <div className="mt-10 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-eyebrow text-grey-dark mb-4 text-center">Sample output</p>
            <div className="border border-grey-mid rounded bg-grey-light overflow-hidden">
              <div className="bg-navy px-6 py-4 flex items-center justify-between">
                <span className="text-white font-semibold text-sm">Social Scan — Example Business</span>
                <span className="text-white/40 text-xs">Example only</span>
              </div>
              <div className="p-6">
                {/* Grade row */}
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-grey-mid">
                  <div className="w-14 h-14 rounded-full border-4 border-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-2xl text-amber-600">C+</span>
                  </div>
                  <p className="text-body text-sm">
                    Visible on LinkedIn and Facebook, but Instagram has not been updated in seven months and there is no YouTube presence. Three press mentions in NZ Herald this year — none shared on social.
                  </p>
                </div>
                {/* Platform rows */}
                <div className="space-y-3">
                  {[
                    { name: "LinkedIn", color: "#0A66C2", status: "Active", statusColor: "text-green-600", finding: "Company page found with 420 followers. Posts 2–3 times per week." },
                    { name: "Instagram", color: "#E1306C", status: "Inactive", statusColor: "text-orange-600", finding: "Account exists. Last post 7 months ago. No story activity visible." },
                    { name: "X / Twitter", color: "#000", status: "Not found", statusColor: "text-gray-400", finding: "No credible account found after searching." },
                  ].map((p) => (
                    <div key={p.name} className="flex items-start gap-3">
                      <span className="w-4 h-4 rounded mt-0.5 flex-shrink-0" style={{ backgroundColor: p.color }} />
                      <div>
                        <span className="text-navy font-semibold text-sm mr-2">{p.name}</span>
                        <span className={`text-xs font-semibold ${p.statusColor}`}>{p.status}</span>
                        <p className="text-grey-dark text-xs mt-0.5">{p.finding}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-grey-dark text-center mt-3">
              Your Social Scan will reflect the actual public presence of the name you enter — this is illustrative.
            </p>
          </div>
        </div>
      </section>

      {/* Two audiences */}
      <section className="bg-grey-light py-10 border-b border-grey-mid">
        <div className="section-container">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded p-6">
              <p className="text-orange font-bold text-xs uppercase tracking-wider mb-3">For individuals</p>
              <h3 className="text-navy font-bold mb-2">Business leaders and executives</h3>
              <p className="text-body text-sm">
                What does a client see when they Google you before a meeting? What does a journalist find before they call for a comment? Social Scan shows you the gap between how you present yourself and how you actually appear.
              </p>
            </div>
            <div className="bg-white rounded p-6">
              <p className="text-orange font-bold text-xs uppercase tracking-wider mb-3">For businesses</p>
              <h3 className="text-navy font-bold mb-2">Brands and organisations</h3>
              <p className="text-body text-sm">
                Is your brand consistent across platforms? Are you active where your customers are? Is press coverage sitting unused? Social Scan audits your public presence across every channel and tells you where the gaps are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-grey-light py-12 lg:py-16 flex-1">
        <div className="section-container">
          <SocialScanForm />
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
            <Link href="/superscan" className="hover:text-white/70 transition-colors">
              Superscan
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
