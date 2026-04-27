"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// ─── Types ───
interface BriefData {
  clientName: string;
  clientIndustry: string;
  productService: string;
  targetAudience: string;
  campaignObjective: string;
  budgetRange: string;
  campaignTiming: string;
  geography: string;
  constraints: string;
  additionalNotes: string;
  channels: string[];
  outputFormat: string;
  includeCosts: string;
}

const EMPTY_BRIEF: BriefData = {
  clientName: "",
  clientIndustry: "",
  productService: "",
  targetAudience: "",
  campaignObjective: "",
  budgetRange: "",
  campaignTiming: "",
  geography: "",
  constraints: "",
  additionalNotes: "",
  channels: [],
  outputFormat: "full",
  includeCosts: "yes",
};

const CHANNEL_OPTIONS = [
  "Digital display", "Search (Google Ads)", "Meta / Social", "Programmatic",
  "TV / BVOD", "Radio / Audio", "Out-of-home", "Print / Press",
  "Branded content", "Influencer / Creator", "Email / CRM", "Podcast",
];

const OBJECTIVES = [
  "Brand awareness / reach", "Lead generation", "Direct sales / conversions",
  "Customer retention / loyalty", "App downloads / sign-ups", "Event promotion",
  "Employer branding / recruitment", "Product launch", "Other (specify in notes)",
];

const BUDGETS = [
  "Under $5,000/month", "$5,000 – $15,000/month", "$15,000 – $50,000/month",
  "$50,000 – $150,000/month", "$150,000+/month", "Project / one-off (not monthly)",
];

const GEOGRAPHIES = [
  "NZ-wide", "Auckland only", "Wellington only", "Christchurch only",
  "Regional NZ (specify in notes)", "NZ + Australia", "International",
];

const FORMAT_LABELS: Record<string, string> = {
  full: "a full channel-by-channel analysis covering each recommended option in depth",
  ranked: "a ranked shortlist of the top 3–5 channels with clear rationale for each",
  quick: "a quick-scan summary — one paragraph per relevant channel",
  comparison: "a comparison table showing pros, cons, and cost side-by-side for each channel",
};

function generateSessionId() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `SM-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
}

function buildPrompt(brief: BriefData, sessionId: string): string {
  const { clientName, clientIndustry, productService, targetAudience,
    campaignObjective, budgetRange, campaignTiming, geography,
    constraints, additionalNotes, channels, outputFormat, includeCosts } = brief;

  if (!clientName && !productService && !targetAudience) return "";

  const costLine =
    includeCosts === "yes" ? "Include NZ market cost benchmarks where possible." :
    includeCosts === "ranges" ? "Include broad NZ cost ranges (not specific rate cards)." :
    "Focus on strategy — do not include cost estimates.";

  const channelLine = channels.length > 0
    ? `\nPrioritise research on these channels: ${channels.join(", ")}.`
    : "\nRecommend the optimal channel mix — do not limit to any preset channels.";

  let prompt = `SUPER MEDIA — RESEARCH BRIEF\nSession: ${sessionId}\n\n`;
  prompt += `━━━ AGENCY CONTEXT ━━━\n`;
  prompt += `You are assisting Ron Sneddon at Super Media, an independent Auckland-based media agency founded in 2014. Super is a full cross-channel media planning and buying agency — AI-enabled — serving NZ clients.\n\n`;
  prompt += `Ron's philosophy: media is not a commodity. Every recommendation must be grounded in real audience consumption behaviour, not channel habit. Super evaluates options by: audience fit, measurable ROI, cost transparency, and whether branded content can play a role.\n\n`;
  prompt += `Super buys across: digital display, programmatic, search (Google), Meta/social, TV/BVOD, radio/audio, out-of-home, print, branded content, influencer, email, and podcast.\n\n`;
  prompt += `━━━ CLIENT BRIEF ━━━\n`;
  if (clientName) prompt += `Client: ${clientName}\n`;
  if (clientIndustry) prompt += `Industry: ${clientIndustry}\n`;
  if (productService) prompt += `Product/Service: ${productService}\n`;
  if (targetAudience) prompt += `Target Audience: ${targetAudience}\n`;
  if (campaignObjective) prompt += `Campaign Objective: ${campaignObjective}\n`;
  if (budgetRange) prompt += `Budget: ${budgetRange}\n`;
  if (campaignTiming) prompt += `Timing: ${campaignTiming}\n`;
  if (geography) prompt += `Geography: ${geography}\n`;
  if (constraints) prompt += `Constraints/Exclusions: ${constraints}\n`;
  if (additionalNotes) prompt += `Additional Notes: ${additionalNotes}\n`;
  prompt += `\n━━━ RESEARCH TASK ━━━\n`;
  prompt += `Research and recommend the most effective advertising options for this client. Deliver ${FORMAT_LABELS[outputFormat]}.\n`;
  prompt += channelLine + "\n";
  prompt += `${costLine}\n\n`;
  prompt += `For each recommended channel, cover:\n`;
  prompt += `1. Why it fits this specific audience (cite real consumption behaviour where possible)\n`;
  prompt += `2. How it supports the campaign objective\n`;
  prompt += `3. Strengths and limitations for this client\n`;
  prompt += `4. How it integrates with other channels in the mix\n`;
  prompt += `5. What to test or watch closely\n\n`;
  prompt += `Also note any channels to actively avoid for this client, and why.\n\n`;
  prompt += `End with a recommended media mix and suggested next steps for Ron to action.`;
  return prompt;
}

function completionPct(brief: BriefData): number {
  const required = ["clientName", "clientIndustry", "productService", "targetAudience", "campaignObjective"] as const;
  const filled = required.filter(k => brief[k].trim() !== "").length;
  return Math.round((filled / required.length) * 100);
}

// ─── Component ───
function CoworkTool() {
  const searchParams = useSearchParams();
  const loadId = searchParams.get("load");

  const [brief, setBrief] = useState<BriefData>(EMPTY_BRIEF);
  const [sessionId] = useState(generateSessionId);
  const [copied, setCopied] = useState(false);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [saveError, setSaveError] = useState<string>("");
  const [loading, setLoading] = useState(!!loadId);

  // Load a saved brief if ?load=<id> is in the URL
  useEffect(() => {
    if (!loadId) return;
    setLoading(true);
    fetch(`/api/admin/briefs?id=${encodeURIComponent(loadId)}`)
      .then(r => r.json())
      .then(data => {
        if (data.brief) {
          const { sessionId: _sid, savedAt: _sa, savedAtNZ: _snz, ...briefFields } = data.brief;
          setBrief({ ...EMPTY_BRIEF, ...briefFields });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [loadId]);

  const prompt = buildPrompt(brief, sessionId);
  const pct = completionPct(brief);

  const set = useCallback((field: keyof BriefData, value: string) => {
    setBrief(prev => ({ ...prev, [field]: value }));
  }, []);

  const toggleChannel = useCallback((ch: string) => {
    setBrief(prev => ({
      ...prev,
      channels: prev.channels.includes(ch)
        ? prev.channels.filter(c => c !== ch)
        : [...prev.channels, ch],
    }));
  }, []);

  async function copyPrompt() {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  async function saveBrief() {
    if (!brief.clientName) return;
    setSaveState("saving");
    setSaveError("");
    try {
      const res = await fetch("/api/admin/briefs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, brief }),
      });
      if (res.ok) {
        setSaveState("saved");
      } else {
        const data = await res.json().catch(() => ({}));
        setSaveError(data.error ?? `HTTP ${res.status}`);
        setSaveState("error");
      }
      setTimeout(() => setSaveState("idle"), 5000);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Network error");
      setSaveState("error");
      setTimeout(() => setSaveState("idle"), 5000);
    }
  }

  function clearForm() {
    if (!confirm("Clear all brief fields? Agency context will be preserved.")) return;
    setBrief(EMPTY_BRIEF);
  }

  const inputCls = "w-full px-4 py-2.5 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange bg-white";
  const labelCls = "block text-grey-dark text-xs font-semibold uppercase tracking-widest mb-1.5";

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center text-grey-dark text-sm">
        Loading brief…
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 pb-24">

      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="eyebrow mb-1">Internal Tool</p>
          <h1 className="text-navy text-2xl font-bold">Cowork Session Starter</h1>
          <p className="text-grey-dark text-sm mt-1">
            Build a pre-loaded research brief for any client. Copy the generated prompt directly into Cowork.
          </p>
        </div>
        <div className="text-right font-mono text-xs text-grey-dark">
          <div className="text-orange">{sessionId}</div>
          <div>{new Date().toLocaleDateString("en-NZ", { weekday: "short", day: "numeric", month: "long" })}</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex-1 h-1.5 bg-grey-mid rounded-full overflow-hidden">
          <div
            className="h-full bg-orange rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-xs text-grey-dark font-mono whitespace-nowrap">{pct}% complete</span>
      </div>

      {/* ─── Section 1: Agency Context ─── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="eyebrow">01 — Agency Context</span>
          <div className="flex-1 h-px bg-grey-mid" />
        </div>
        <div className="bg-white border border-grey-mid border-t-2 border-t-navy rounded p-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div><span className="text-grey-dark text-xs uppercase tracking-widest font-semibold">Agency</span><p className="text-body mt-0.5">Super Media (Super Limited) — Independent, Auckland NZ</p></div>
            <div><span className="text-grey-dark text-xs uppercase tracking-widest font-semibold">Founded</span><p className="text-body mt-0.5">2014 by Ron Sneddon</p></div>
            <div><span className="text-grey-dark text-xs uppercase tracking-widest font-semibold">Discipline</span><p className="text-body mt-0.5">Media planning, buying & branded content — AI-enabled</p></div>
            <div><span className="text-grey-dark text-xs uppercase tracking-widest font-semibold">AI</span><p className="text-body mt-0.5">VJ Jasuja — Digital Director & Chief AI Dev Officer</p></div>
            <div className="col-span-2"><span className="text-grey-dark text-xs uppercase tracking-widest font-semibold">Evaluation criteria</span><p className="text-body mt-0.5">Audience fit · Measurable ROI · Real consumption behaviour · Transparent rates · Branded content integration</p></div>
          </div>
          <blockquote className="mt-5 bg-navy text-white/80 text-sm italic px-5 py-4 border-l-4 border-orange rounded-r">
            "Media is not a tin can to be traded by the kilo. It is a living, breathing thing that people have intimate relationships with."
            <cite className="block not-italic text-white/40 text-xs mt-2 font-mono">— Ron Sneddon, Founder & MD</cite>
          </blockquote>
        </div>
      </div>

      {/* ─── Section 2: Client Brief ─── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="eyebrow">02 — Client Brief</span>
          <div className="flex-1 h-px bg-grey-mid" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Client Name <span className="text-orange">*</span></label>
            <input className={inputCls} placeholder="e.g. Acme Fencing Ltd" value={brief.clientName} onChange={e => set("clientName", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Industry / Sector <span className="text-orange">*</span></label>
            <input className={inputCls} placeholder="e.g. Home improvement / B2C retail" value={brief.clientIndustry} onChange={e => set("clientIndustry", e.target.value)} />
          </div>
          <div className="col-span-2">
            <label className={labelCls}>Product or Service Being Advertised <span className="text-orange">*</span></label>
            <textarea className={inputCls} rows={2} placeholder="Describe what they sell and the specific offer or product being promoted." value={brief.productService} onChange={e => set("productService", e.target.value)} />
          </div>
          <div className="col-span-2">
            <label className={labelCls}>Target Audience <span className="text-orange">*</span></label>
            <textarea className={inputCls} rows={2} placeholder="Demographics, psychographics, location, life stage — be as specific as possible." value={brief.targetAudience} onChange={e => set("targetAudience", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Campaign Objective <span className="text-orange">*</span></label>
            <select className={inputCls} value={brief.campaignObjective} onChange={e => set("campaignObjective", e.target.value)}>
              <option value="">— Select objective —</option>
              {OBJECTIVES.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Budget Range</label>
            <select className={inputCls} value={brief.budgetRange} onChange={e => set("budgetRange", e.target.value)}>
              <option value="">— Select range —</option>
              {BUDGETS.map(b => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Campaign Timing</label>
            <input className={inputCls} placeholder="e.g. June–August 2025, 8 weeks, Q3" value={brief.campaignTiming} onChange={e => set("campaignTiming", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Geography</label>
            <select className={inputCls} value={brief.geography} onChange={e => set("geography", e.target.value)}>
              <option value="">— Select —</option>
              {GEOGRAPHIES.map(g => <option key={g}>{g}</option>)}
            </select>
          </div>
          <div className="col-span-2">
            <label className={labelCls}>Known Constraints or Exclusions</label>
            <textarea className={inputCls} rows={2} placeholder="e.g. No broadcast, no outdoor, competitor exclusions, regulatory restrictions…" value={brief.constraints} onChange={e => set("constraints", e.target.value)} />
          </div>
          <div className="col-span-2">
            <label className={labelCls}>Additional Context / Notes</label>
            <textarea className={inputCls} rows={3} placeholder="Previous campaigns, seasonal factors, brand tone, client quirks, specific questions to answer…" value={brief.additionalNotes} onChange={e => set("additionalNotes", e.target.value)} />
          </div>
        </div>
      </div>

      {/* ─── Section 3: Channel Focus ─── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="eyebrow">03 — Channel Focus</span>
          <div className="flex-1 h-px bg-grey-mid" />
        </div>
        <p className="text-grey-dark text-xs mb-4">Tick channels to prioritise. Leave all unticked to let Claude recommend the full mix.</p>
        <div className="grid grid-cols-4 gap-2">
          {CHANNEL_OPTIONS.map(ch => (
            <button
              key={ch}
              type="button"
              onClick={() => toggleChannel(ch)}
              className={`px-3 py-2.5 text-sm border rounded text-left transition-all ${
                brief.channels.includes(ch)
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-body border-grey-mid hover:border-navy"
              }`}
            >
              {ch}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Section 4: Research Depth ─── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="eyebrow">04 — Research Depth</span>
          <div className="flex-1 h-px bg-grey-mid" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Output Format</label>
            <select className={inputCls} value={brief.outputFormat} onChange={e => set("outputFormat", e.target.value)}>
              <option value="full">Full channel analysis — all recommended channels in depth</option>
              <option value="ranked">Ranked shortlist — top 3–5 channels with rationale</option>
              <option value="quick">Quick-scan — one paragraph per channel</option>
              <option value="comparison">Comparison table — pros/cons/cost side-by-side</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>Include NZ Cost Benchmarks?</label>
            <select className={inputCls} value={brief.includeCosts} onChange={e => set("includeCosts", e.target.value)}>
              <option value="yes">Yes — include NZ market cost benchmarks</option>
              <option value="no">No — strategy focus only</option>
              <option value="ranges">Yes — broad ranges only</option>
            </select>
          </div>
        </div>
      </div>

      <hr className="border-grey-mid mb-8" />

      {/* ─── Section 5: Generated Prompt ─── */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="eyebrow">05 — Generated Cowork Prompt</span>
          <div className="flex-1 h-px bg-grey-mid" />
        </div>
        <div className="bg-navy-dark border-2 border-orange rounded p-6 font-mono text-xs text-white/70 whitespace-pre-wrap leading-relaxed min-h-32">
          {prompt
            ? prompt
                .split(/(━━━[^━]+━━━)/)
                .map((part, i) =>
                  /━━━/.test(part)
                    ? <span key={i} className="text-orange">{part}</span>
                    : part
                )
            : <span className="text-white/25 italic">← Fill in the client brief above to generate your Cowork prompt.</span>
          }
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 items-center">
        <button
          onClick={copyPrompt}
          disabled={!prompt}
          className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {copied ? "✓ Copied" : "⎘ Copy Prompt"}
        </button>
        <div className="flex flex-col gap-1">
          <button
            onClick={saveBrief}
            disabled={!brief.clientName || saveState === "saving"}
            className="bg-navy text-white font-semibold px-6 py-3 rounded hover:bg-navy-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
          >
            {saveState === "saving" ? "Saving…" : saveState === "saved" ? "✓ Saved" : saveState === "error" ? "Error — try again" : "↓ Save Brief"}
          </button>
          {saveState === "error" && saveError && (
            <p className="text-red-600 text-xs font-mono">{saveError}</p>
          )}
        </div>
        <button
          onClick={clearForm}
          className="border border-grey-mid text-navy font-semibold px-6 py-3 rounded hover:border-navy transition-colors"
        >
          ✕ Clear
        </button>
        {brief.clientName && (
          <span className="text-grey-dark text-sm ml-auto">
            Client: <span className="text-navy font-semibold">{brief.clientName}</span>
          </span>
        )}
      </div>

    </div>
  );
}

export default function CoworkToolPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-6 py-20 text-center text-grey-dark text-sm">Loading…</div>}>
      <CoworkTool />
    </Suspense>
  );
}
