"use client";

import { useEffect } from "react";

export default function AudienceRealityCheckPage() {
  useEffect(() => {
    window.location.href = "/audience-reality-check.html";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen text-grey-dark text-sm">
      Loading Audience Reality Check…
    </div>
  );
}
