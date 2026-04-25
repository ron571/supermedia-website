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
  robots: { index: false, follow: false },
};

const steps = [
  {
    num: "1",
    label: "Tell us your mix",
    desc: "Which channels you're running, your spend range, and who you're trying to reach",
  },
  {
    num: "2",
    label: "Independent analysis",
    desc: "Superscan reads your inputs against NZ market context — no templates, no generic advice",
  },
  {
    num: "3",
    label: "A straight answer",
    desc: "Where the risk is, where the opportunity is, and one question to put to your agency",
  },
];

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
            Find out if your advertising is actually working
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            90 seconds. No login. No sales call. A straight independent read —
            not a glossy report full of numbers that don&apos;t connect to your
            business.
          </p>
        </div>
      </section>

      {/* 3-step explainer */}
      <section className="bg-grey-light border-b border-grey-mid py-8">
        <div className="section-container">
          <ol className="flex flex-col sm:flex-row gap-6 sm:gap-0">
            {steps.map(({ num, label, desc }) => (
              <li
                key={num}
                className="flex items-start gap-4 sm:flex-1 sm:border-r sm:border-grey-mid sm:last:border-r-0 sm:px-6 first:pl-0 last:pr-0"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange text-white text-sm font-bold flex items-center justify-center">
                  {num}
                </span>
                <div>
                  <p className="text-navy font-semibold text-sm">{label}</p>
                  <p className="text-grey-dark text-sm">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
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
