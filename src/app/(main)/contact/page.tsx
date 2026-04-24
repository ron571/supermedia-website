import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
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
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-xl mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            The first conversation costs nothing. If Super isn&apos;t the right
            fit, Ron will tell you — and might point you somewhere that is.
          </p>
        </div>
      </section>

      {/* ─── 2-col contact ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Book a call */}
            <div>
              <h2 className="text-navy text-2xl font-bold mb-6">
                Book a call
              </h2>
              <p className="text-body mb-6">
                30 minutes. Ron will ask a few questions, listen hard, and give
                you an honest read on whether Super is the right fit.
              </p>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mb-8 inline-flex"
              >
                Book via Calendly →
              </a>

              {/* Calendly embed placeholder */}
              <div
                className="border border-grey-mid rounded overflow-hidden"
                style={{ minHeight: 400 }}
              >
                <iframe
                  src={`${calendlyUrl}?embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1`}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Book a call with Ron Sneddon"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              <div className="mt-8 pt-6 border-t border-grey-mid">
                <p className="text-grey-dark text-sm mb-2">Or email directly:</p>
                <a
                  href="mailto:ron@supermedia.co.nz"
                  className="text-navy font-semibold hover:text-orange transition-colors"
                >
                  ron@supermedia.co.nz
                </a>
              </div>
            </div>

            {/* Right — Contact form */}
            <div>
              <h2 className="text-navy text-2xl font-bold mb-6">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form className="space-y-5" action="mailto:ron@supermedia.co.nz" method="post">
      <div>
        <label htmlFor="name" className="block text-navy font-semibold text-sm mb-1">
          Name <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-navy font-semibold text-sm mb-1">
          Email <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-navy font-semibold text-sm mb-1">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-navy font-semibold text-sm mb-1">
          What are you working on? <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A brief description helps Ron prepare for the conversation."
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">
        Send message
      </button>
      <p className="text-grey-dark text-xs">
        Ron responds personally to every message, usually within one business day.
      </p>
    </form>
  );
}
