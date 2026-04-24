import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-navy flex items-center justify-center">
        <div className="section-container text-center py-32">
          <p className="eyebrow mb-4">404</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Page not found
          </h1>
          <p className="text-white/70 text-lg mb-10 max-w-md mx-auto">
            This page doesn&apos;t exist — or has moved. The homepage has
            everything you need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Back to home
            </Link>
            <Link href="/superscan" className="btn-outline-white">
              Run Superscan →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
