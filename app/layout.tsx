import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Plasera — Building the Future of Global Commerce",
    template: "%s | Plasera",
  },
  description:
    "Plasera is a technology company building custom software, running cloud & DevOps, and helping businesses cut cloud spend with FinOps consulting and managed services.",
  authors: [{ name: "Plasera" }],
  openGraph: {
    title: "Plasera — Building the Future of Global Commerce",
    description:
      "Intelligent commerce platforms, enterprise systems, and AI software powering modern digital economies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="relative min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 bg-noise opacity-[0.35] mix-blend-overlay" />
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
