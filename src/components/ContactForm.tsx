"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong — please try again.");
        setState("error");
        return;
      }

      setState("success");
    } catch {
      setErrorMsg("Network error — please try again or email ron@supermedia.co.nz directly.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-grey-light border border-grey-mid rounded p-8 text-center">
        <div className="text-orange text-3xl mb-4">✓</div>
        <h3 className="text-navy text-xl font-bold mb-2">Message received</h3>
        <p className="text-body text-sm">
          Ron responds personally to every message, usually within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="block text-navy font-semibold text-sm mb-1">
          Name <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={state === "submitting"}
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-navy font-semibold text-sm mb-1">
          Email <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={state === "submitting"}
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-navy font-semibold text-sm mb-1">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          disabled={state === "submitting"}
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-navy font-semibold text-sm mb-1">
          What are you working on? <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A brief description helps Ron prepare for the conversation."
          disabled={state === "submitting"}
          className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange resize-none disabled:opacity-50"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>

      <p className="text-grey-dark text-xs">
        Ron responds personally to every message, usually within one business day.
      </p>
    </form>
  );
}
