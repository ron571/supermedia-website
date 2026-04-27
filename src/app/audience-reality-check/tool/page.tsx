"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const ACCESS_KEY = "arc_access";
const ACCESS_CODE = process.env.NEXT_PUBLIC_ARC_CODE ?? "SUPER2026";

export default function AudienceRealityCheckToolPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);

  // Check if already unlocked in this session
  useEffect(() => {
    if (sessionStorage.getItem(ACCESS_KEY) === "1") {
      setUnlocked(true);
    }
    setChecking(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim().toUpperCase() === ACCESS_CODE.toUpperCase()) {
      sessionStorage.setItem(ACCESS_KEY, "1");
      setUnlocked(true);
      setError("");
    } else {
      setError("That code isn't right. Check with Ron if you need access.");
      setInput("");
    }
  }

  if (checking) return null;

  if (unlocked) {
    return (
      <iframe
        src="/arc.html"
        className="w-full border-0"
        style={{ height: "100vh", display: "block" }}
        title="Audience Reality Check — Super Media"
      />
    );
  }

  return (
    <div className="min-h-screen bg-navy flex flex-col">
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 h-[68px] flex items-center">
        <div className="section-container w-full flex items-center justify-between">
          <Logo variant="dark" size={36} />
          <a
            href="mailto:ron@supermedia.co.nz"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            ron@supermedia.co.nz
          </a>
        </div>
      </header>

      {/* Gate */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="bg-white rounded shadow-lg p-10 max-w-sm w-full text-center">
          <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mx-auto mb-6">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="9" width="14" height="10" rx="2" stroke="white" strokeWidth="1.5" />
              <path d="M6.5 9V6a3.5 3.5 0 117 0v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-navy text-xl font-bold mb-2">Access required</h1>
          <p className="text-grey-dark text-sm mb-8 leading-relaxed">
            This tool is available to Super Media clients and approved prospects.
            Enter the access code Ron shared with you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Enter access code"
              autoFocus
              autoComplete="off"
              className="w-full px-4 py-3 border border-grey-mid rounded text-center text-navy font-semibold text-lg tracking-widest focus:outline-none focus:border-orange uppercase"
            />
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            <button type="submit" className="btn-primary w-full justify-center">
              Enter →
            </button>
          </form>
          <p className="text-grey-dark text-xs mt-6">
            Don&apos;t have a code?{" "}
            <a href="mailto:ron@supermedia.co.nz" className="text-orange hover:underline">
              Contact Ron
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
