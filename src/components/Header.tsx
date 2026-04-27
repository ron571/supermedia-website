"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/thinking", label: "Thinking" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-grey-mid transition-all duration-200"
      style={{
        height: 68,
        backdropFilter: scrolled ? "blur(8px)" : "none",
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "#ffffff",
      }}
    >
      <div className="section-container h-full flex items-center justify-between">
        <Logo variant="light" size={36} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-navy transition-opacity duration-150"
                style={{ opacity: isActive ? 1 : 0.65 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.opacity = isActive ? "1" : "0.65")
                }
              >
                {label}
              </Link>
            );
          })}
          <Link href="/superscan" className="btn-primary text-sm py-2 px-4">
            Superscan →
          </Link>
          <Link
            href="/admin"
            className="text-sm font-medium text-navy transition-opacity duration-150"
            style={{ opacity: 0.4 }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
          >
            Admin
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-grey-mid shadow-md">
          <nav className="section-container py-4 flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-navy opacity-75 hover:opacity-100"
              >
                {label}
              </Link>
            ))}
            <Link href="/superscan" className="btn-primary text-sm self-start">
              Superscan →
            </Link>
            <Link href="/admin" className="text-sm font-medium text-navy opacity-40 hover:opacity-100">
              Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
