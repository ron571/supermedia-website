"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, HOW_HEARD_OPTIONS, type ContactInput } from "@/lib/schemas";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong sending your message."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded shadow-md p-8 border border-grey-mid text-center">
        <p className="text-navy text-xl font-semibold mb-2">Message sent.</p>
        <p className="text-body text-sm mb-6">
          Ron typically responds within one business day.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-primary">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded shadow-md p-8 border border-grey-mid"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contactName" className="block text-navy font-semibold text-sm mb-1">
            Your name <span className="text-orange">*</span>
          </label>
          <input
            id="contactName"
            type="text"
            {...register("name")}
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
            autoComplete="name"
          />
          {errors.name && (
            <p className="text-orange text-xs mt-1" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contactEmail" className="block text-navy font-semibold text-sm mb-1">
            Email <span className="text-orange">*</span>
          </label>
          <input
            id="contactEmail"
            type="email"
            {...register("email")}
            placeholder="you@company.com"
            className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-orange text-xs mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="contactCompany" className="block text-navy font-semibold text-sm mb-1">
          Company <span className="text-grey-dark font-normal">(optional)</span>
        </label>
        <input
          id="contactCompany"
          type="text"
          {...register("company")}
          placeholder="Your company"
          className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
          autoComplete="organization"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="contactMessage" className="block text-navy font-semibold text-sm mb-1">
          What's going on? <span className="text-orange">*</span>
        </label>
        <textarea
          id="contactMessage"
          {...register("message")}
          rows={4}
          placeholder="A few lines on your situation is plenty to start with."
          className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange resize-none"
        />
        {errors.message && (
          <p className="text-orange text-xs mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="contactHowHeard" className="block text-navy font-semibold text-sm mb-1">
          How did you hear about us? <span className="text-grey-dark font-normal">(optional)</span>
        </label>
        <select
          id="contactHowHeard"
          {...register("howHeard")}
          className="w-full px-4 py-2.5 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange bg-white"
          defaultValue=""
        >
          <option value="">Prefer not to say</option>
          {HOW_HEARD_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="text-orange text-sm mb-4" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full justify-center disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Send message →"}
      </button>
      <p className="text-grey-dark text-xs text-center mt-3">
        Ron typically responds within one business day.
      </p>
    </form>
  );
}
