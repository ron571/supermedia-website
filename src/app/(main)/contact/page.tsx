import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 30-minute call with Ron Sneddon or send a message. The first conversation is free, and if Super isn't the right fit, Ron will tell you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
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

      {/* ─── Contact form ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-xl mx-auto">
            <h2 className="text-navy text-2xl font-bold mb-6">
              Send a message
            </h2>
            <ContactForm />
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
        <label htmlFor="phone" className="block text-navy font-semibold text-sm mb-1">
          Your phone number <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange"
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
