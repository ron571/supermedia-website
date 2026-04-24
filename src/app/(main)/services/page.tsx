import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six ways to work with Super Media — from full media strategy and independent audits to programmatic buying, web design, social, and retained advisory.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "strategy",
    title: "Media Strategy & Planning",
    tag: "Strategy",
    description:
      "A complete, independent media plan from scratch or as a second opinion. Every recommendation made on merit.",
    detail:
      "For advertisers who want a plan built without conflicts of interest.",
  },
  {
    id: "audit",
    title: "Media Audit & Review",
    tag: "Most Popular",
    tagHighlight: true,
    description:
      "Independent review of spend, channel mix, buying terms and audience delivery. Most audits find 15–30% savings without any reduction in reach.",
    detail:
      "For advertisers with existing agency relationships who suspect they're not getting full value.",
  },
  {
    id: "programmatic",
    title: "Programmatic Buying",
    tag: "Digital",
    description:
      "AI-driven programmatic buying across display, video, audio and CTV. Precision targeting without platform conflicts.",
    detail:
      "For advertisers who want programmatic efficiency without handing the keys to a network.",
  },
  {
    id: "web",
    title: "Website Design & Construction",
    tag: "Digital",
    description:
      "Audience-led web design built to convert. Strategy, UX, build and launch — starting with who you're trying to reach, not aesthetic preference.",
    detail:
      "For businesses whose website isn't working as hard as their media spend.",
  },
  {
    id: "social",
    title: "Social Media Strategy & Content",
    tag: "Social",
    description:
      "Platform strategy, content creation and paid social across Meta, LinkedIn and beyond. Integrated into the broader media plan, not run as a disconnected silo.",
    detail:
      "For brands who want social that connects to business outcomes, not just impressions.",
  },
  {
    id: "advisory",
    title: "Retained Advisory",
    tag: "Ongoing",
    description:
      "A senior independent brain available monthly. For planning, reviewing agency proposals, and navigating media decisions as they arise. 4–8 hours/month.",
    detail:
      "The equivalent of a senior media director on call, without the overhead.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mb-4">
            Six ways to work with Super
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            Most clients come with one of these needs. If you&apos;re not sure
            which fits, run a Superscan.
          </p>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ id, title, tag, tagHighlight, description, detail }) => (
              <div
                key={id}
                id={id}
                className="border border-grey-mid rounded p-8 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="mb-5">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-eyebrow ${
                      tagHighlight
                        ? "bg-orange text-white"
                        : "bg-grey-light text-grey-dark"
                    }`}
                  >
                    {tag}
                  </span>
                </div>
                <h2 className="text-navy text-xl font-bold mb-3">{title}</h2>
                <p className="text-body mb-6 flex-1">{description}</p>
                <p className="text-grey-dark text-sm italic border-t border-grey-mid pt-4">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="bg-grey-light py-16">
        <div className="section-container text-center">
          <p className="text-navy text-xl font-medium mb-6 max-w-xl mx-auto">
            Not sure which fits? Run a Superscan and we&apos;ll work it out
            together.
          </p>
          <Link href="/superscan" className="btn-primary">
            Run your Superscan →
          </Link>
        </div>
      </section>
    </>
  );
}
