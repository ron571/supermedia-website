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
  keywords: [
    "NZ media consultancy",
    "independent media consultant New Zealand",
    "media audit NZ",
    "media planning New Zealand",
    "Ron Sneddon",
    "Super Media",
    "media buying NZ",
    "programmatic advertising New Zealand",
  ],
  authors: [{ name: "Ron Sneddon", url: "https://supermedia.co.nz/about" }],
  openGraph: {
    siteName: "Super Media",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Super Media — Independent NZ Media Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
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
