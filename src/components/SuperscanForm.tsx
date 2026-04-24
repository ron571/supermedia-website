"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SuperscanSchema, CHANNELS, SPEND_RANGES, type SuperscanInput } from "@/lib/schemas";
import type { SuperscanResult } from "@/lib/schemas";
import SuperscanResults from "./SuperscanResults";

type Step = "form" | "email" | "scanning" | "results" | "error";

export default function SuperscanForm() {
  const [step, setStep] = useState<Step>("form");
  const [result, setResult] = useState<SuperscanResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [scanStartTime, setScanStartTime] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<SuperscanInput>({
    resolver: zodResolver(SuperscanSchema),
    defaultValues: { channels: [] },
  });

  const selectedChannels = watch("channels");
  const watchOther = selectedChannels?.includes("Other");

  const onFormNext = () => {
    const { channels, spendRange, audience } = getValues();
    if (!channels?.length || !spendRange || !audience || audience.length < 10) {
      return;
    }
    setStep("email");
  };

  const onSubmit = async (data: SuperscanInput) => {
    setStep("scanning");
    setScanStartTime(Date.now());

    try {
      const res = await fetch("/api/superscan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const elapsed = Date.now() - scanStartTime;
      const remaining = Math.max(0, 3000 - elapsed);

      await new Promise((r) => setTimeout(r, remaining));

      if (res.status === 429) {
        const json = await res.json();
        setErrorMessage(json.error ?? "Rate limit exceeded — try again in an hour.");
        setStep("error");
        return;
      }

      if (!res.ok) {
        throw new Error("Scan failed");
      }

      const json = await res.json();
      setResult(json);
      setStep("results");
    } catch {
      setErrorMessage(
        "Something went wrong running your scan. Please try again or email ron@supermedia.co.nz."
      );
      setStep("error");
    }
  };

  if (step === "scanning") {
    return (
      <div
        className="bg-white rounded shadow-md p-10 max-w-2xl mx-auto text-center"
        aria-live="polite"
        role="status"
      >
        <div className="flex justify-center mb-6">
          <ScanningSpinner />
        </div>
        <p className="text-navy text-xl font-semibold mb-2">
          Superscan is reading your mix…
        </p>
        <p className="text-grey-dark text-sm">
          Analysing channel mix, audience fit, and spend efficiency.
        </p>
      </div>
    );
  }

  if (step === "results" && result) {
    return <SuperscanResults result={result} />;
  }

  if (step === "error") {
    return (
      <div className="bg-white rounded shadow-md p-10 max-w-2xl mx-auto text-center">
        <p className="text-navy text-xl font-semibold mb-3">Something went wrong</p>
        <p className="text-body mb-6">{errorMessage}</p>
        <button
          onClick={() => setStep("form")}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded shadow-md p-8 max-w-2xl mx-auto"
      noValidate
    >
      {step === "form" && (
        <>
          {/* Field 1: Channels */}
          <fieldset className="mb-8">
            <legend className="text-navy font-semibold text-base mb-1">
              Which channels are you currently running?
              <span className="text-orange ml-1" aria-hidden="true">*</span>
            </legend>
            <p className="text-grey-dark text-sm mb-4">Select all that apply.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CHANNELS.map((channel) => (
                <label
                  key={channel}
                  className="flex items-center gap-3 p-3 border border-grey-mid rounded cursor-pointer hover:border-orange transition-colors"
                >
                  <input
                    type="checkbox"
                    value={channel}
                    {...register("channels")}
                    className="w-4 h-4 accent-orange"
                  />
                  <span className="text-body text-sm">{channel}</span>
                </label>
              ))}
            </div>
            {watchOther && (
              <div className="mt-3">
                <input
                  type="text"
                  {...register("channelsOther")}
                  placeholder="Describe your other channel(s)"
                  className="w-full px-4 py-2 border border-grey-mid rounded text-sm focus:outline-none focus:border-orange"
                />
              </div>
            )}
            {errors.channels && (
              <p className="text-orange text-sm mt-2" role="alert">
                {errors.channels.message}
              </p>
            )}
          </fieldset>

          {/* Field 2: Spend range */}
          <div className="mb-8">
            <label
              htmlFor="spendRange"
              className="block text-navy font-semibold text-base mb-1"
            >
              Annual media spend
              <span className="text-orange ml-1" aria-hidden="true">*</span>
            </label>
            <p className="text-grey-dark text-sm mb-3">
              Rough range is fine — this helps calibrate the analysis.
            </p>
            <select
              id="spendRange"
              {...register("spendRange")}
              className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select a range…
              </option>
              {SPEND_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.spendRange && (
              <p className="text-orange text-sm mt-2" role="alert">
                {errors.spendRange.message}
              </p>
            )}
          </div>

          {/* Field 3: Audience */}
          <div className="mb-8">
            <label
              htmlFor="audience"
              className="block text-navy font-semibold text-base mb-1"
            >
              Who are you trying to reach?
              <span className="text-orange ml-1" aria-hidden="true">*</span>
            </label>
            <p className="text-grey-dark text-sm mb-3">
              Be specific — the more detail, the more useful the analysis.
            </p>
            <textarea
              id="audience"
              {...register("audience")}
              rows={3}
              placeholder="e.g. NZ women 30–55 interested in home renovation"
              className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange resize-none"
            />
            {errors.audience && (
              <p className="text-orange text-sm mt-1" role="alert">
                {errors.audience.message}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onFormNext}
            className="btn-primary w-full justify-center"
          >
            Continue →
          </button>
        </>
      )}

      {step === "email" && (
        <>
          <div className="mb-8">
            <button
              type="button"
              onClick={() => setStep("form")}
              className="text-grey-dark text-sm hover:text-navy mb-6 inline-flex items-center gap-1"
            >
              ← Back
            </button>
            <p className="eyebrow mb-2">Almost there</p>
            <label
              htmlFor="email"
              className="block text-navy font-semibold text-xl mb-1"
            >
              Where should we send your Superscan report?
            </label>
            <p className="text-grey-dark text-sm mb-6">
              No spam. One email with your results, then you choose if you want to hear more.
            </p>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-grey-mid rounded text-body text-sm focus:outline-none focus:border-orange"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-orange text-sm mt-2" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn-primary w-full justify-center">
            Run my Superscan →
          </button>
        </>
      )}
    </form>
  );
}

function ScanningSpinner() {
  return (
    <div className="relative w-16 h-16">
      <svg
        className="animate-spin"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="#E8E8E8"
          strokeWidth="4"
        />
        <path
          d="M32 4a28 28 0 0 1 28 28"
          stroke="#E8621A"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
