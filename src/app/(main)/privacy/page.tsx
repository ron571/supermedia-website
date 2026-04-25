import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Super Media privacy policy — how we collect, store, and use your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-16 lg:py-20">
          <h1 className="text-white text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="section-container max-w-3xl">
          <div className="prose prose-lg max-w-none text-body space-y-8">
            <div>
              <h2 className="text-navy text-2xl font-bold mb-4">Overview</h2>
              <p>
                Super Media (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates supermedia.co.nz. This
                policy explains what information we collect, how we use it, and
                your rights under the New Zealand Privacy Act 2020.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-bold mb-4">
                Information we collect
              </h2>
              <p className="mb-3">
                <strong className="text-navy">Superscan submissions:</strong> When
                you run a Superscan, we collect the channels you selected, your
                spend range, your audience description, and your email address.
                We store this to send your results and, with your consent, to
                follow up with relevant information.
              </p>
              <p className="mb-3">
                <strong className="text-navy">Contact form:</strong> Name, email,
                company name, and your message. Used only to respond to your
                enquiry.
              </p>
              <p>
                <strong className="text-navy">Analytics:</strong> We use Vercel
                Analytics, a privacy-preserving analytics tool that does not use
                cookies and does not collect personally identifiable information.
                No cookie consent banner is required.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-bold mb-4">
                How we use your information
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>To deliver your Superscan results by email</li>
                <li>
                  To send a short follow-up sequence (3 emails maximum) unless
                  you opt out
                </li>
                <li>To respond to contact form enquiries</li>
                <li>To improve the Superscan tool over time</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or share your information with third
                parties for marketing purposes. Your data is never used to train
                AI models.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-bold mb-4">
                Third-party services
              </h2>
              <p className="mb-3">
                We use the following services to operate the site:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong className="text-navy">Anthropic Claude API</strong> —
                  processes your Superscan inputs to generate your analysis.
                  Anthropic&apos;s privacy policy applies.
                </li>
                <li>
                  <strong className="text-navy">Resend</strong> — delivers
                  transactional emails. Your email address is shared with Resend
                  for this purpose only.
                </li>
                <li>
                  <strong className="text-navy">Airtable</strong> — stores lead
                  information for Ron&apos;s follow-up. Data is stored on
                  Airtable&apos;s servers.
                </li>
                <li>
                  <strong className="text-navy">Vercel</strong> — hosts this
                  website. Standard server logs may be collected.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-bold mb-4">Data retention</h2>
              <p>
                Superscan lead data is retained for 24 months, after which it is
                deleted unless there is an active client relationship. You may
                request deletion at any time.
              </p>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-bold mb-4">Your rights</h2>
              <p className="mb-3">
                Under the NZ Privacy Act 2020, you have the right to:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of follow-up communications at any time</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, email{" "}
                <a
                  href="mailto:ron@supermedia.co.nz"
                  className="text-orange hover:text-orange-dark"
                >
                  ron@supermedia.co.nz
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-navy text-2xl font-bold mb-4">Contact</h2>
              <p>
                Privacy Officer: Ron Sneddon ·{" "}
                <a
                  href="mailto:ron@supermedia.co.nz"
                  className="text-orange hover:text-orange-dark"
                >
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
