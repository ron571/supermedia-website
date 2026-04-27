import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Talk to Ron — Super Media",
  description:
    "Book a 30-minute call with Ron Sneddon or send a message. The first conversation is free, and if Super isn't the right fit, Ron will tell you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/ron-supermedia";

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-xl">
            Let&apos;s talk
          </h1>
        </div>
      </section>

      {/* ─── 2-col contact ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — Book a call */}
            <div>
              <p className="eyebrow mb-4">Book a call</p>
              <h2 className="text-navy text-2xl font-bold mb-4">
                30 minutes. No agenda. No obligation.
              </h2>
              <p className="text-body mb-8" style={{ lineHeight: 1.7 }}>
                Pick a time that suits you. Ron comes prepared — no generic pitch,
                just a direct conversation about your situation.
              </p>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a call with Ron →
              </a>
            </div>

            {/* Right — Send a message */}
            <div>
              <p className="eyebrow mb-4">Send a message</p>
              <h2 className="text-navy text-2xl font-bold mb-6">
                Prefer to write first?
              </h2>
              <ContactForm />
              <div className="mt-6 pt-5 border-t border-grey-mid">
                <p className="text-grey-dark text-sm mb-1">Or email directly:</p>
                <a
                  href="mailto:ron@supermedia.co.nz"
                  className="text-navy font-semibold hover:text-orange transition-colors"
                >
                  ron@supermedia.co.nz
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
