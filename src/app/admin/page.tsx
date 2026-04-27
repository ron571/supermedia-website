import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="eyebrow mb-2">Super Media</p>
        <h1 className="text-navy text-3xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Cowork Tool */}
        <Link href="/admin/tools/cowork" className="group block">
          <div className="bg-white border border-grey-mid rounded p-8 hover:border-orange hover:shadow-md transition-all duration-200">
            <div className="w-10 h-10 bg-navy rounded flex items-center justify-center mb-5 group-hover:bg-orange transition-colors">
              <span className="text-white text-lg">✦</span>
            </div>
            <h2 className="text-navy text-xl font-bold mb-2">Cowork Session Starter</h2>
            <p className="text-body text-sm" style={{ lineHeight: 1.6 }}>
              Build a pre-loaded research prompt for any client brief. Saves sessions
              for future reference.
            </p>
            <p className="text-orange text-sm font-semibold mt-4 group-hover:underline">
              Open tool →
            </p>
          </div>
        </Link>

        {/* Saved Briefs */}
        <Link href="/admin/briefs" className="group block">
          <div className="bg-white border border-grey-mid rounded p-8 hover:border-orange hover:shadow-md transition-all duration-200">
            <div className="w-10 h-10 bg-navy rounded flex items-center justify-center mb-5 group-hover:bg-orange transition-colors">
              <span className="text-white text-lg">≡</span>
            </div>
            <h2 className="text-navy text-xl font-bold mb-2">Saved Client Briefs</h2>
            <p className="text-body text-sm" style={{ lineHeight: 1.6 }}>
              Browse all saved Cowork sessions. Click any brief to reload it into
              the tool.
            </p>
            <p className="text-orange text-sm font-semibold mt-4 group-hover:underline">
              View briefs →
            </p>
          </div>
        </Link>

      </div>

      {/* Quick reference */}
      <div className="mt-12 bg-navy rounded p-8">
        <p className="eyebrow mb-4">Quick Reference</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/70">
          <div>
            <p className="text-white font-semibold mb-1">Cowork workflow</p>
            <p>Fill the brief → generate prompt → copy → paste into Cowork → save session.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">v0 changes</p>
            <p>Make UI changes in v0 as usual. They'll commit to GitHub automatically — no conflict with this admin area.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">New tools</p>
            <p>Additional internal tools will appear here as they're built.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
