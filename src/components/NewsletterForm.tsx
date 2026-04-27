"use client";

import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm({ className = "" }: { className?: string }) {
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <p className="text-white/70 text-sm py-2">
        ✓ You&apos;re subscribed — Ron&apos;s thinking, straight to your inbox.
      </p>
    );
  }

  return (
    <form className={`flex gap-2 ${className}`} onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        disabled={state === "submitting"}
        className="flex-1 px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange bg-white text-navy disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary text-sm py-2.5 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {state === "submitting" ? "…" : "Subscribe"}
      </button>
      {state === "error" && (
        <p className="text-red-400 text-xs mt-1 w-full">Something went wrong — try again.</p>
      )}
    </form>
  );
}
