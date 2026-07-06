"use client";

import { useEffect, useState } from "react";

interface SuperscanLead {
  id: string;
  submittedAtNZ?: string;
  email?: string;
  channels?: string[];
  spendPeriod?: string;
  spendRange?: string;
  audience?: string;
  howHeard?: string | null;
}

interface SocialScanRun {
  id: string;
  scannedAtNZ?: string;
  entityType?: string;
  name?: string;
  website?: string | null;
  overallGrade?: string;
  overallScore?: number;
}

interface SocialScanEnquiry {
  id: string;
  submittedAtNZ?: string;
  scanName?: string;
  contactName?: string;
  email?: string;
  organisation?: string | null;
  serviceInterest?: string | null;
  howHeard?: string | null;
}

interface NewsletterSub {
  email: string;
  signedUpAtNZ?: string;
}

type Tab = "superscan" | "socialscan" | "enquiries" | "newsletter";

const TABS: { id: Tab; label: string }[] = [
  { id: "superscan", label: "Superscan" },
  { id: "socialscan", label: "Social Scan Runs" },
  { id: "enquiries", label: "Social Scan Enquiries" },
  { id: "newsletter", label: "Newsletter" },
];

export default function LeadsPage() {
  const [tab, setTab] = useState<Tab>("superscan");
  const [superscan, setSuperscan] = useState<SuperscanLead[]>([]);
  const [socialScanRuns, setSocialScanRuns] = useState<SocialScanRun[]>([]);
  const [enquiries, setEnquiries] = useState<SocialScanEnquiry[]>([]);
  const [newsletter, setNewsletter] = useState<NewsletterSub[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setSuperscan(data.superscan ?? []);
      setSocialScanRuns(data.socialScanRuns ?? []);
      setEnquiries(data.socialScanEnquiries ?? []);
      setNewsletter(data.newsletter ?? []);
      if (data.error) setError(data.error);
    } catch {
      setError("Failed to load leads");
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const counts: Record<Tab, number> = {
    superscan: superscan.length,
    socialscan: socialScanRuns.length,
    enquiries: enquiries.length,
    newsletter: newsletter.length,
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="eyebrow mb-1">Admin</p>
          <h1 className="text-navy text-2xl font-bold">Leads</h1>
          <p className="text-grey-dark text-sm mt-1">
            Every Superscan, Social Scan and newsletter signup — stored here even if the email notification fails.
          </p>
        </div>
        <button onClick={load} className="btn-primary">
          Refresh
        </button>
      </div>

      <div className="flex gap-2 mb-6 border-b border-grey-mid">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${
              tab === t.id
                ? "border-orange text-navy"
                : "border-transparent text-grey-dark hover:text-navy"
            }`}
          >
            {t.label} ({counts[t.id]})
          </button>
        ))}
      </div>

      {loading && <div className="text-grey-dark text-sm py-12 text-center">Loading…</div>}

      {!loading && error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded px-4 py-3 mb-6">
          {error}
        </div>
      )}

      {!loading && tab === "superscan" && (
        <LeadsTable
          empty="No Superscan submissions yet."
          headers={["Email", "Spend", "Channels", "How they heard", "Submitted"]}
          rows={superscan.map((s) => [
            s.email || "—",
            `${s.spendRange || "—"}${s.spendPeriod ? ` (${s.spendPeriod})` : ""}`,
            (s.channels || []).join(", ") || "—",
            s.howHeard || "—",
            s.submittedAtNZ || "—",
          ])}
        />
      )}

      {!loading && tab === "socialscan" && (
        <LeadsTable
          empty="No Social Scan runs yet."
          headers={["Entity", "Type", "Grade", "Score", "Scanned"]}
          rows={socialScanRuns.map((s) => [
            s.name || "—",
            s.entityType || "—",
            s.overallGrade || "—",
            s.overallScore != null ? String(s.overallScore) : "—",
            s.scannedAtNZ || "—",
          ])}
        />
      )}

      {!loading && tab === "enquiries" && (
        <LeadsTable
          empty="No Social Scan enquiries yet."
          headers={["Contact", "Email", "Organisation", "Service", "How they heard", "Submitted"]}
          rows={enquiries.map((e) => [
            e.contactName || "—",
            e.email || "—",
            e.organisation || "—",
            e.serviceInterest || "—",
            e.howHeard || "—",
            e.submittedAtNZ || "—",
          ])}
        />
      )}

      {!loading && tab === "newsletter" && (
        <LeadsTable
          empty="No newsletter subscribers yet."
          headers={["Email", "Signed up"]}
          rows={newsletter.map((n) => [n.email, n.signedUpAtNZ || "—"])}
        />
      )}
    </div>
  );
}

function LeadsTable({
  headers,
  rows,
  empty,
}: {
  headers: string[];
  rows: string[][];
  empty: string;
}) {
  if (!rows.length) {
    return (
      <div className="text-center py-20 bg-white border border-grey-mid rounded">
        <p className="text-grey-dark text-sm">{empty}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-grey-mid rounded overflow-hidden overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-grey-mid bg-grey-light">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-5 py-3 text-xs uppercase tracking-widest font-semibold text-grey-dark whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-grey-mid last:border-0 hover:bg-grey-light transition-colors ${
                i % 2 === 0 ? "" : "bg-grey-light/40"
              }`}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-4 text-body whitespace-nowrap max-w-xs truncate" title={cell}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
