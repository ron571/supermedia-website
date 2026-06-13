"use client";

import type { SuperscanResult } from "@/lib/schemas";

interface Props {
  result: SuperscanResult;
}

export default function SuperscanResults({ result }: Props) {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact";

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Section 1: Current Mix */}
      <div className="bg-white rounded shadow-md p-6">
        <p className="eyebrow mb-3">Your Current Mix</p>
        <p className="text-body">{result.currentMix}</p>
      </div>

      {/* Section 2: Risks */}
      <div className="bg-white rounded shadow-md p-6">
        <p className="eyebrow mb-3">Where the Risk Is</p>
        <ul className="space-y-3">
          {result.risks.map((risk, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full bg-orange/10 border border-orange flex items-center justify-center mt-0.5"
                aria-hidden="true"
              >
                <span className="text-orange text-xs font-bold">{i + 1}</span>
              </span>
              <p className="text-body">{risk}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-4 border-t border-grey-mid">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Book a call
          </a>
        </div>
      </div>

      {/* Section 3: Opportunities */}
      <div className="bg-white rounded shadow-md p-6">
        <p className="eyebrow mb-3">The Opportunity</p>
        <ul className="space-y-3">
          {result.opportunities.map((opp, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full bg-navy/10 border border-navy flex items-center justify-center mt-0.5"
                aria-hidden="true"
              >
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="#1B2A4A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-body">{opp}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 4: The Question — visually prominent */}
      <div className="bg-navy rounded shadow-lg p-8">
        <p className="eyebrow mb-3">One Question Worth Asking Your Agency</p>
        <p className="text-white text-xl font-semibold leading-snug">
          &ldquo;{result.question}&rdquo;
        </p>
      </div>

      {/* LinkedIn share prompt */}
      <div className="bg-white rounded shadow-md p-6 text-center">
        <p className="text-navy font-medium mb-1">Know someone who should run this?</p>
        <p className="text-body text-sm mb-4">
          Share Superscan with a colleague who manages media spend.
        </p>
        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.supermedia.co.nz%2Fsuperscan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-sm text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#0A66C2" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Share on LinkedIn
        </a>
      </div>

      {/* Closing CTA */}
      <div className="bg-grey-light rounded p-6 text-center">
        <p className="text-navy font-medium mb-4">
          Want a deeper read? A 30-minute conversation with Ron costs nothing.
        </p>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex"
        >
          Book a call
        </a>
      </div>

      {/* Results emailed note */}
      <p className="text-grey-dark text-sm text-center">
        Your Superscan results have been emailed to you.
      </p>
    </div>
  );
}
