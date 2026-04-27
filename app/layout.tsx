import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LQHQ9C6L51"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LQHQ9C6L51');
          `}
        </Script>
      </head>
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
