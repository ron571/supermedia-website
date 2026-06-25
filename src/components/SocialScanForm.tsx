"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SocialScanInputSchema,
  SocialScanEnquirySchema,
  type SocialScanInput,
  type SocialScanEnquiry,
  type SocialScanResult,
  type PlatformResult,
} from "@/lib/schemas";

type Step = "form" | "scanning" | "results" | "enquiry" | "enquiry-sent" | "error";

const SCAN_MESSAGES = [
  "Searching LinkedIn…",
  "Checking Facebook and Instagram…",
  "Scanning X and YouTube…",
  "Looking for news and media coverage…",
  "Assessing content quality…",
  "Building your presence report…",
];

// ── Platform icons ──────────────────────────────────────────────────────────

function PlatformIcon({ name }: { name: string }) {
  const lower = name.toLowerCase();
  const cls = "w-5 h-5 flex-shrink-0";

  if (lower === "linkedin")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );

  if (lower === "facebook")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );

  if (lower === "instagram")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="url(#ig-gradient)" aria-hidden="true">
        <defs>
          <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );

  if (lower.includes("x/twitter") || lower === "x" || lower === "twitter")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );

  if (lower === "youtube")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );

  if (lower.includes("google"))
    return (
      <svg className={cls} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    );

  // Generic fallback
  return (
    <span className="w-5 h-5 rounded bg-grey-mid flex items-center justify-center text-[10px] font-bold text-grey-dark flex-shrink-0">
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

// ── Status badge ────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: PlatformResult["status"] }) {
  const config = {
    active: { label: "Active", bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
    present: { label: "Present", bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
    inactive: { label: "Inactive", bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500" },
    absent: { label: "Not found", bg: "bg-gray-100", text: "text-gray-500", dot: "bg-gray-400" },
  }[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}

// ── Grade display ────────────────────────────────────────────────────────────

function GradeCircle({ grade, score }: { grade: string; score: number }) {
  const color =
    grade.startsWith("A") ? "#22c55e" :
    grade.startsWith("B") ? "#10b981" :
    grade.startsWith("C") ? "#E8621A" :
    grade.startsWith("D") ? "#ef4444" : "#dc2626";

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-20 h-20 rounded-full border-4 flex items-center justify-center"
        style={{ borderColor: color }}
      >
        <span className="font-bold text-3xl" style={{ color }}>{grade}</span>
      </div>
      <p className="text-grey-dark text-xs mt-2">{score}/100</p>
    </div>
  );
}

// ── Spinner ─────────────────────────────────────────────────────────────────

function ScanningSpinner({ message }: { message: string }) {
  return (
    <div className="bg-white rounded shadow-md p-10 max-w-2xl mx-auto text-center" aria-live="polite" role="status">
      <div className="flex justify-center mb-6">
        <div className="relative w-16 h-16">
          <svg className="animate-spin" width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <circle cx="32" cy="32" r="28" stroke="#E8E8E8" strokeWidth="4" />
            <path d="M32 4a28 28 0 0 1 28 28" stroke="#E8621A" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="text-navy text-xl font-semibold mb-2">Scanning digital footprint…</p>
      <p className="text-grey-dark text-sm transition-all duration-500">{message}</p>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function SocialScanForm() {
  const [step, setStep] = useState<Step>("form");
  const [result, setResult] = useState<SocialScanResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [scanMessage, setScanMessage] = useState(SCAN_MESSAGES[0]);
  const [enquirySent, setEnquirySent] = useState(false);

  const scanForm = useForm<SocialScanInput>({
    resolver: zodResolver(SocialScanInputSchema),
    defaultValues: { entityType: "individual" },
  });

  const enquiryForm = useForm<SocialScanEnquiry>({
    resolver: zodResolver(SocialScanEnquirySchema),
  });

  const entityType = scanForm.watch("entityType");

  // Cycle through scan messages
  const startMessageCycle = () => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % SCAN_MESSAGES.length;
      setScanMessage(SCAN_MESSAGES[i]);
    }, 4500);
    return interval;
  };

  const onScanSubmit = async (data: SocialScanInput) => {
    setStep("scanning");
    setScanMessage(SCAN_MESSAGES[0]);
    const interval = startMessageCycle();

    try {
      const res = await fetch("/api/social-scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      clearInterval(interval);

      if (res.status === 429) {
        const json = await res.json();
        setErrorMessage(json.error ?? "Rate limit exceeded — try again later.");
        setStep("error");
        return;
      }

      if (!res.ok) throw new Error("Scan failed");

      const json = await res.json();
      setResult(json);
      setStep("results");

      // Pre-fill enquiry form with scan context
      enquiryForm.setValue("scanName", data.name);
      enquiryForm.setValue("scanEntityType", data.entityType);
      enquiryForm.setValue("scanResultJson", JSON.stringify(json));
    } catch {
      clearInterval(interval);
      setErrorMessage("Something went wrong. Please try again or email ron@supermedia.co.nz.");
      setStep("error");
    }
  };

  const onEnquirySubmit = async (data: SocialScanEnquiry) => {
    try {
      await fetch("/api/social-scan/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setEnquirySent(true);
      setStep("enquiry-sent");
    } catch {
      // Silent — still show success to user
      setEnquirySent(true);
      setStep("enquiry-sent");
    }
  };

  // ── Error ──
  if (step === "error") {
    return (
      <div className="bg-white rounded shadow-md p-10 max-w-2xl mx-auto text-center">
        <p className="text-navy text-xl font-semibold mb-3">Something went wrong</p>
        <p className="text-body mb-6">{errorMessage}</p>
        <button onClick={() => setStep("form")} className="btn-primary">Try again</button>
      </div>
    );
  }

  // ── Scanning ──
  if (step === "scanning") return <ScanningSpinner message={scanMessage} />;

  // ── Enquiry sent ──
  if (step === "enquiry-sent" || enquirySent) {
    return (
      <div className="bg-white rounded shadow-md p-10 max-w-2xl mx-auto text-center">
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-navy text-xl font-semibold mb-2">Request received</p>
        <p className="text-body text-sm">
          Ron will review your Social Scan results and be in touch shortly with the full report.
        </p>
      </div>
    );
  }

  // ── Results ──
  if (step === "results" && result) {
    return (
      <div className="max-w-2xl mx-auto space-y-5">
        {/* Header: grade + summary */}
        <div className="bg-white rounded shadow-md p-6">
          <p className="eyebrow mb-4">Social Scan — {result.entityName}</p>
          <div className="flex items-start gap-6">
            <GradeCircle grade={result.overallGrade} score={result.overallScore} />
            <div>
              <p className="text-navy font-semibold mb-1">Digital presence grade</p>
              <p className="text-body text-sm leading-relaxed">{result.summary}</p>
            </div>
          </div>
        </div>

        {/* Platform matrix */}
        <div className="bg-white rounded shadow-md p-6">
          <p className="eyebrow mb-4">Platform presence</p>
          <div className="space-y-3">
            {result.platforms.map((p) => (
              <div key={p.name} className="flex items-start gap-3">
                <PlatformIcon name={p.name} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className="text-navy font-semibold text-sm">{p.name}</span>
                    <StatusBadge status={p.status} />
                    {p.status !== "absent" && (
                      <span className="text-xs text-grey-dark">{p.score}/10</span>
                    )}
                  </div>
                  <p className="text-body text-sm">{p.finding}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media coverage */}
        <div className="bg-white rounded shadow-md p-6">
          <p className="eyebrow mb-3">News and media coverage</p>
          <div className="flex items-start gap-3">
            <span className={`mt-0.5 flex-shrink-0 w-2.5 h-2.5 rounded-full mt-1.5 ${
              result.mediaCoverage.status === "strong" ? "bg-green-500" :
              result.mediaCoverage.status === "present" ? "bg-amber-500" :
              result.mediaCoverage.status === "limited" ? "bg-orange-500" : "bg-gray-400"
            }`} />
            <div>
              <p className="text-body text-sm">{result.mediaCoverage.finding}</p>
              {result.mediaCoverage.utilizationGap && (
                <p className="text-orange text-xs font-semibold mt-1">
                  Media amplification gap — press coverage found but not being shared on social.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Headline findings */}
        <div className="bg-navy rounded shadow-lg p-6">
          <p className="eyebrow mb-4">Three things that stand out</p>
          <ul className="space-y-3">
            {result.headlineFindings.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                  <span className="text-orange font-bold text-xs">{i + 1}</span>
                </span>
                <p className="text-white/90 text-sm">{f}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Gated section */}
        <div className="relative bg-white rounded shadow-md overflow-hidden">
          {/* Blurred content preview */}
          <div className="p-6 select-none" aria-hidden="true" style={{ filter: "blur(4px)", opacity: 0.4 }}>
            <p className="eyebrow mb-3">Full report — platform recommendations</p>
            <div className="space-y-2">
              {["LinkedIn — increase post frequency from once a fortnight to three times per week. Focus on…", "Instagram — profile bio is incomplete and missing a link to website. The last post was…", "X/Twitter — account exists but has been dormant since…"].map((line, i) => (
                <div key={i} className="h-4 bg-navy/10 rounded" style={{ width: `${85 - i * 10}%` }} />
              ))}
            </div>
          </div>

          {/* Overlay CTA */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm p-6 text-center">
            <p className="text-navy font-bold text-lg mb-1">Your full Social Scan report</p>
            <p className="text-body text-sm mb-4 max-w-xs">
              Platform-by-platform recommendations, priority actions, and Ron&apos;s expert read on what to fix first.
            </p>
            <button
              onClick={() => setStep("enquiry")}
              className="btn-primary"
            >
              Request full report →
            </button>
          </div>
        </div>

        {/* Run another */}
        <p className="text-center">
          <button
            onClick={() => { setStep("form"); setResult(null); scanForm.reset(); }}
            className="text-sm text-grey-dark hover:text-navy underline underline-offset-2"
          >
            Scan a different name
          </button>
        </p>
      </div>
    );
  }

  // ── Enquiry form (request full report) ──
  if (step === "enquiry") {
    return (
      <form
        onSubmit={enquiryForm.handleSubmit(onEnquirySubmit)}
        className="bg-white rounded shadow-md p-8 max-w-2xl mx-auto"
        noValidate
      >
        <button
          type="button"
          onClick={() => setStep("results")}
          className="text-grey-dark text-sm hover:text-navy mb-6 inline-flex items-center gap-1"
        >
          ← Back to results
        </button>

        <p className="eyebrow mb-2">Request full report</p>
        <h2 className="text-navy text-2xl font-bold mb-1">Get the complete read</h2>
        <p className="text-body text-sm mb-6">
          Ron will review your scan results and send through a detailed report with specific recommendations.
          No obligation, no sales call.
        </p>

        {/* Hidden fields */}
        <input type="hidden" {...enquiryForm.register("scanName")} />
        <input type="hidden" {...enquiryForm.register("scanEntityType")} />
        <input type="hidden" {...enquiryForm.register("scanResultJson")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="contactName" className="block text-navy font-semibold text-sm mb-1">
              Your name <span className="text-orange">*</span>
            </label>
            <input
              id="contactName"
              type="text"
              {...enquiryForm.register("contactName")}
              placeholder="Jane Smith"
              className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
              autoComplete="name"
            />
            {enquiryForm.formState.errors.contactName && (
              <p className="text-orange text-xs mt-1">{enquiryForm.formState.errors.contactName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="enqEmail" className="block text-navy font-semibold text-sm mb-1">
              Email <span className="text-orange">*</span>
            </label>
            <input
              id="enqEmail"
              type="email"
              {...enquiryForm.register("email")}
              placeholder="you@company.com"
              className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
              autoComplete="email"
            />
            {enquiryForm.formState.errors.email && (
              <p className="text-orange text-xs mt-1">{enquiryForm.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="enqPhone" className="block text-navy font-semibold text-sm mb-1">
              Phone <span className="text-grey-dark font-normal">(optional)</span>
            </label>
            <input
              id="enqPhone"
              type="tel"
              {...enquiryForm.register("phone")}
              placeholder="021 000 0000"
              className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
              autoComplete="tel"
            />
          </div>

          <div>
            <label htmlFor="enqOrg" className="block text-navy font-semibold text-sm mb-1">
              Organisation <span className="text-grey-dark font-normal">(optional)</span>
            </label>
            <input
              id="enqOrg"
              type="text"
              {...enquiryForm.register("organisation")}
              placeholder="Your company"
              className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
              autoComplete="organization"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="enqMessage" className="block text-navy font-semibold text-sm mb-1">
            Anything Ron should know <span className="text-grey-dark font-normal">(optional)</span>
          </label>
          <textarea
            id="enqMessage"
            {...enquiryForm.register("message")}
            rows={3}
            placeholder="e.g. We're planning a brand refresh and want to understand where our digital presence stands."
            className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange resize-none"
          />
        </div>

        <button type="submit" className="btn-primary w-full justify-center">
          Send request →
        </button>
        <p className="text-grey-dark text-xs text-center mt-3">
          Ron typically responds within one business day.
        </p>
      </form>
    );
  }

  // ── Scan form ──
  return (
    <form
      onSubmit={scanForm.handleSubmit(onScanSubmit)}
      className="bg-white rounded shadow-md p-8 max-w-2xl mx-auto"
      noValidate
    >
      {/* Entity type toggle */}
      <fieldset className="mb-6">
        <legend className="text-navy font-semibold text-base mb-3">
          Who are we scanning?
        </legend>
        <div className="grid grid-cols-2 gap-3">
          {(["individual", "business"] as const).map((type) => (
            <label
              key={type}
              className={`flex items-center justify-center gap-2 p-3 border rounded cursor-pointer transition-colors text-sm font-medium ${
                entityType === type
                  ? "border-orange bg-orange/5 text-navy"
                  : "border-grey-mid text-body hover:border-orange"
              }`}
            >
              <input
                type="radio"
                value={type}
                {...scanForm.register("entityType")}
                className="sr-only"
              />
              {type === "individual" ? "An individual / leader" : "A business or brand"}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Name */}
      <div className="mb-5">
        <label htmlFor="scanName" className="block text-navy font-semibold text-sm mb-1">
          {entityType === "individual" ? "Full name" : "Business name"} <span className="text-orange">*</span>
        </label>
        <input
          id="scanName"
          type="text"
          {...scanForm.register("name")}
          placeholder={entityType === "individual" ? "e.g. Jane Smith" : "e.g. Acme Consulting"}
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange"
        />
        {scanForm.formState.errors.name && (
          <p className="text-orange text-sm mt-1">{scanForm.formState.errors.name.message}</p>
        )}
      </div>

      {/* Website */}
      <div className="mb-5">
        <label htmlFor="scanWebsite" className="block text-navy font-semibold text-sm mb-1">
          Website <span className="text-grey-dark font-normal">(optional — helps accuracy)</span>
        </label>
        <input
          id="scanWebsite"
          type="url"
          {...scanForm.register("website")}
          placeholder="https://yoursite.co.nz"
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange"
        />
      </div>

      {/* Known handles — collapsible */}
      <details className="mb-5 group">
        <summary className="cursor-pointer text-sm text-grey-dark hover:text-navy font-medium select-none list-none flex items-center gap-1">
          <svg className="w-4 h-4 transition-transform group-open:rotate-90" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Add known social handles (optional — speeds up the scan)
        </summary>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {([
            { field: "linkedinHandle", label: "LinkedIn", placeholder: "username or URL" },
            { field: "facebookHandle", label: "Facebook", placeholder: "page name or URL" },
            { field: "instagramHandle", label: "Instagram", placeholder: "@handle" },
            { field: "xHandle", label: "X / Twitter", placeholder: "@handle" },
          ] as const).map(({ field, label, placeholder }) => (
            <div key={field}>
              <label htmlFor={field} className="block text-navy text-xs font-semibold mb-1">{label}</label>
              <input
                id={field}
                type="text"
                {...scanForm.register(field)}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
              />
            </div>
          ))}
        </div>
      </details>

      {/* Additional context */}
      <div className="mb-6">
        <label htmlFor="scanContext" className="block text-navy font-semibold text-sm mb-1">
          Additional context <span className="text-grey-dark font-normal">(optional)</span>
        </label>
        <textarea
          id="scanContext"
          {...scanForm.register("additionalContext")}
          rows={2}
          placeholder="e.g. This is the CEO of a NZ construction company based in Auckland."
          className="w-full px-4 py-2.5 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange resize-none"
        />
        <p className="text-grey-dark text-xs mt-1">
          Industry, location, or role helps the scan interpret results in context.
        </p>
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        Run Social Scan →
      </button>

      <p className="text-grey-dark text-xs text-center mt-3">
        Scans publicly visible information only. No account access required. Takes 30–60 seconds.
      </p>
    </form>
  );
}
