import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to Ron — Super Media",
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

      {/* ─── 2-col contact ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — Ring Ron */}
            <div>
              <p className="eyebrow mb-4">Ring Ron</p>
              <h2 className="text-navy text-2xl font-bold mb-4">
                30 minutes. No agenda. No obligation.
              </h2>
              <p className="text-body mb-8" style={{ lineHeight: 1.7 }}>
                Pick a time that suits you. Ron comes prepared — no generic pitch,
                just a direct conversation about your situation.
              </p>
              <a
                href="tel:+64212393946"
                className="btn-primary"
              >
                Ring Ron on 021 393946 →
              </a>
            </div>

            {/* Right — Email Ron */}
            <div>
              <p className="eyebrow mb-4">Send a message</p>
              <h2 className="text-navy text-2xl font-bold mb-4">
                Prefer to write first?
              </h2>
              <p className="text-body mb-8" style={{ lineHeight: 1.7 }}>
                Click below to open an email to Ron. Your email app will open with his address already filled in — just write your message and hit send.
              </p>
              <div className="space-y-3">
                {/* Gmail */}
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ron@supermedia.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-5 py-4 border-2 border-grey-mid rounded hover:border-orange hover:bg-grey-light transition-colors group"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                  </svg>
                  <span className="font-semibold text-navy group-hover:text-orange transition-colors">Open in Gmail</span>
                </a>

                {/* Apple Mail */}
                <a
                  href="mailto:ron@supermedia.co.nz"
                  className="flex items-center gap-3 w-full px-5 py-4 border-2 border-grey-mid rounded hover:border-orange hover:bg-grey-light transition-colors group"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 13.5L.75 6.75V18a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5V6.75L12 13.5z" fill="#1C9AEF"/>
                    <path d="M12 11.25L.75 4.5h22.5L12 11.25z" fill="#1C9AEF"/>
                  </svg>
                  <span className="font-semibold text-navy group-hover:text-orange transition-colors">Open in Apple Mail</span>
                </a>

                {/* Outlook */}
                <a
                  href="https://outlook.live.com/mail/0/deeplink/compose?to=ron@supermedia.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-5 py-4 border-2 border-grey-mid rounded hover:border-orange hover:bg-grey-light transition-colors group"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 7.387v10.478c0 .904-.732 1.636-1.636 1.636H9.818V7.387h14.546zM8.182 19.5H1.636A1.636 1.636 0 0 1 0 17.865V6.135C0 5.23.732 4.5 1.636 4.5h6.546V19.5z" fill="#0072C6"/>
                    <path d="M4.364 9.818a2.727 2.727 0 1 0 0 4.364 2.727 2.727 0 0 0 0-4.364z" fill="#fff"/>
                  </svg>
                  <span className="font-semibold text-navy group-hover:text-orange transition-colors">Open in Outlook</span>
                </a>
              </div>
              <p className="mt-5 text-grey-dark text-sm">
                Or copy the address:{" "}
                <a href="mailto:ron@supermedia.co.nz" className="text-navy font-semibold hover:text-orange transition-colors">
                  ron@supermedia.co.nz
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
