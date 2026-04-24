import Link from "next/link";
import Logo from "./Logo";

const serviceLinks = [
  { href: "/services#strategy", label: "Media Strategy & Planning" },
  { href: "/services#audit", label: "Media Audit & Review" },
  { href: "/services#programmatic", label: "Programmatic Buying" },
  { href: "/services#web", label: "Website Design & Build" },
  { href: "/services#social", label: "Social Media Strategy" },
  { href: "/services#advisory", label: "Retained Advisory" },
];

const companyLinks = [
  { href: "/about", label: "About Ron" },
  { href: "/results", label: "Results" },
  { href: "/thinking", label: "Thinking" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1 — Logo + tagline */}
          <div className="md:col-span-1">
            <Logo variant="dark" size={36} />
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Independent NZ media intelligence.
            </p>
            <a
              href="mailto:ron@supermedia.co.nz"
              className="mt-4 block text-sm text-white/60 hover:text-white transition-colors"
            >
              ron@supermedia.co.nz
            </a>
            <a
              href="https://linkedin.com/in/ron-sneddon"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              aria-label="Ron Sneddon on LinkedIn"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-white/40 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-white/40 mb-4">
              Stay sharp
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Occasional notes on NZ media. No fluff.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-orange"
              />
              <button
                type="submit"
                className="btn-primary text-sm py-2 justify-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-white/40">
            © 2026 Super Media. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
