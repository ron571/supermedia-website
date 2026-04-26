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
