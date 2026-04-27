"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setState("error");
      setPassword("");
    }
  }

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex justify-center">
          <Logo variant="dark" size={44} />
        </div>

        <div className="bg-white rounded p-8">
          <p className="eyebrow mb-2">Admin Access</p>
          <h1 className="text-navy text-xl font-bold mb-6">Sign in</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-navy font-semibold text-sm mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                disabled={state === "submitting"}
                className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange disabled:opacity-50"
              />
            </div>

            {state === "error" && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
                Incorrect password.
              </p>
            )}

            <button
              type="submit"
              disabled={state === "submitting" || !password}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "submitting" ? "Signing in…" : "Sign in →"}
            </button>
          </form>
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          Super Media — Internal tools
        </p>
      </div>
    </div>
  );
}
