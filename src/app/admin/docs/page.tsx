const docs = [
  {
    title: "Company Profile",
    description: "Super Media company overview, background, and positioning.",
    category: "Company",
    url: "https://docs.google.com/document/d/1edM5XvY0XVbyJ2VX4BJgBqwNq02jFDhTP8OLnN0QmMc/edit",
  },
  {
    title: "Marketing Strategy 2026",
    description: "Full Super Media marketing strategy and growth plan for 2026.",
    category: "Strategy",
    url: "https://docs.google.com/document/d/1ewqHkXWe6Y84-Dtg0_tkmf7aH8-ICADsw1awYlWIjkk/edit",
  },
  {
    title: "Prospect Outreach Playbook",
    description: "Step-by-step guide for prospecting and outreach to new clients.",
    category: "Sales",
    url: "https://docs.google.com/document/d/1e7NS5TxsX1QtAW_B1CmsqNZmpkNVZIxpH6UhDnwu3Yw/edit",
  },
  {
    title: "Brand Guide",
    description: "Super Media brand guidelines — colours, typography, tone of voice.",
    category: "Brand",
    url: "https://docs.google.com/document/d/1BNuFZwr977Q7HVR0EeH0cVN8upeLaJ09yL90Eqn8O8I/edit",
  },
  {
    title: "Website Audit Report",
    description: "Full audit of supermedia.co.nz with recommendations and priorities.",
    category: "Website",
    url: "https://docs.google.com/document/d/1jGcvM-ByxIEfGuZJ9C0aGsEOJwenLODpvLZbnscOVxo/edit",
  },
  {
    title: "The Core Problem: Auckland Small Businesses and Advertising",
    description: "Research and positioning document on the Auckland SME advertising problem.",
    category: "Research",
    url: "https://docs.google.com/document/d/1I5SB3YJo1dwxeRZQFtx4dI4m0WFGLTxb2I6HjYYcmEg/edit",
  },
];

const categoryColour: Record<string, string> = {
  Company:  "bg-navy text-white",
  Strategy: "bg-orange text-white",
  Sales:    "bg-green-700 text-white",
  Brand:    "bg-purple-700 text-white",
  Website:  "bg-sky-700 text-white",
  Research: "bg-amber-600 text-white",
};

export default function DocsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <p className="eyebrow mb-1">Admin</p>
        <h1 className="text-navy text-2xl font-bold">Documents &amp; Resources</h1>
        <p className="text-grey-dark text-sm mt-1">
          Key Super Media documents — opens in Google Docs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {docs.map((doc) => (
          <a
            key={doc.url}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-grey-mid rounded p-6 hover:border-orange hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded ${categoryColour[doc.category] ?? "bg-grey-mid text-navy"}`}
              >
                {doc.category}
              </span>
              <svg
                className="w-4 h-4 text-grey-dark group-hover:text-orange transition-colors flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <h2 className="text-navy font-bold text-base mb-2 group-hover:text-orange transition-colors">
              {doc.title}
            </h2>
            <p className="text-body text-sm" style={{ lineHeight: 1.6 }}>
              {doc.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
