"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Brief {
  id: string;
  clientName?: string;
  clientIndustry?: string;
  campaignObjective?: string;
  budgetRange?: string;
  savedAtNZ?: string;
  sessionId?: string;
}

export default function BriefsPage() {
  const [briefs, setBriefs] = useState<Brief[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/briefs");
      const data = await res.json();
      setBriefs(data.briefs ?? []);
      if (data.error) setError(data.error);
    } catch {
      setError("Failed to load briefs");
    }
    setLoading(false);
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete brief for "${name}"? This cannot be undone.`)) return;
    await fetch("/api/admin/briefs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="eyebrow mb-1">Admin</p>
          <h1 className="text-navy text-2xl font-bold">Saved Client Briefs</h1>
          <p className="text-grey-dark text-sm mt-1">All briefs saved from the Cowork Session Starter.</p>
        </div>
        <Link href="/admin/tools/cowork" className="btn-primary">
          + New Brief
        </Link>
      </div>

      {loading && (
        <div className="text-grey-dark text-sm py-12 text-center">Loading briefs…</div>
      )}

      {!loading && error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded px-4 py-3 mb-6">
          {error}
        </div>
      )}

      {!loading && !briefs.length && !error && (
        <div className="text-center py-20 bg-white border border-grey-mid rounded">
          <p className="text-grey-dark text-sm mb-4">No briefs saved yet.</p>
          <Link href="/admin/tools/cowork" className="btn-primary">
            Create your first brief →
          </Link>
        </div>
      )}

      {!loading && briefs.length > 0 && (
        <div className="bg-white border border-grey-mid rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-grey-mid bg-grey-light">
                <th className="text-left px-5 py-3 text-xs uppercase tracking-widest font-semibold text-grey-dark">Client</th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-widest font-semibold text-grey-dark">Industry</th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-widest font-semibold text-grey-dark">Objective</th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-widest font-semibold text-grey-dark">Budget</th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-widest font-semibold text-grey-dark">Saved</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {briefs.map((brief, i) => (
                <tr key={brief.id} className={`border-b border-grey-mid last:border-0 hover:bg-grey-light transition-colors ${i % 2 === 0 ? "" : "bg-grey-light/40"}`}>
                  <td className="px-5 py-4 font-semibold text-navy">
                    {brief.clientName || <span className="text-grey-dark font-normal italic">Unnamed</span>}
                  </td>
                  <td className="px-5 py-4 text-body">{brief.clientIndustry || "—"}</td>
                  <td className="px-5 py-4 text-body">{brief.campaignObjective || "—"}</td>
                  <td className="px-5 py-4 text-body">{brief.budgetRange || "—"}</td>
                  <td className="px-5 py-4 text-grey-dark font-mono text-xs">{brief.savedAtNZ || "—"}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3 justify-end">
                      <Link
                        href={`/admin/tools/cowork?load=${encodeURIComponent(brief.id)}`}
                        className="text-orange text-xs font-semibold hover:underline"
                      >
                        Load →
                      </Link>
                      <button
                        onClick={() => handleDelete(brief.id, brief.clientName || "this brief")}
                        className="text-grey-dark text-xs hover:text-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
