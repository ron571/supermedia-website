import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Super Media",
    default: "Super Media — Independent NZ Media Intelligence",
  },
  description:
    "Super Media is an independent NZ media consultancy. No network. No commissions. No conflicts. Senior media judgement from Ron Sneddon — 35 years of NZ experience.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://supermedia.co.nz"
  ),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Super Media",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ" className={dmSans.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
