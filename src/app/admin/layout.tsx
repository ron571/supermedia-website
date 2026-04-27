import Link from "next/link";
import Logo from "@/components/Logo";
import AdminLogout from "@/components/AdminLogout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-grey-light flex flex-col">
      {/* Admin header */}
      <header className="bg-navy border-b-2 border-orange">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo variant="dark" size={32} />
            <span className="text-white/30 text-xs">|</span>
            <nav className="flex items-center gap-5">
              <Link
                href="/admin"
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/tools/cowork"
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                Cowork Tool
              </Link>
              <Link
                href="/admin/briefs"
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                Saved Briefs
              </Link>
              <Link
                href="/admin/tools/audience-reality-check"
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                Audience Check
              </Link>
              <Link
                href="/admin/docs"
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                Documents
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              View site ↗
            </Link>
            <AdminLogout />
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
