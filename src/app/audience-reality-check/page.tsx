import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audience Reality Check — Super Media",
  description:
    "Most NZ media plans are built on who marketers think they're reaching. This free tool shows who's actually there — and where the gap is costing you.",
  alternates: { canonical: "/audience-reality-check" },
  robots: { index: true, follow: true },
};

export default function AudienceRealityCheckPage() {
  return (
    <iframe
      src="/arc.html"
      className="w-full border-0"
      style={{ height: "100vh", display: "block" }}
      title="Audience Reality Check — Super Media"
    />
  );
}
