import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — A Technology Company Built for Modern Business | Plasera",
  description:
    "Plasera is a technology company that develops software, runs cloud and DevOps, provides 24/7 support, and now offers FinOps to help businesses cut cloud costs.",
  openGraph: {
    title: "About Plasera",
    description: "Software, cloud, DevOps, FinOps, and consulting — your end-to-end tech partner.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-x-0 top-0 h-[500px] [background:var(--gradient-radial)]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              About Plasera
            </p>
            <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              A technology company for <span className="text-gradient">modern business.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Plasera develops software, runs cloud infrastructure, and provides ongoing support
                and consulting for teams that take their technology seriously. We work with
                startups, enterprises, and governments across 25+ countries.
              </p>
              <p>
                Our newest practice is{" "}
                <Link
                  href="/finops"
                  className="text-foreground underline underline-offset-4 hover:opacity-80"
                >
                  FinOps
                </Link>
                — a fast-growing discipline that aligns engineering decisions with financial
                outcomes. With cloud bills climbing and budgets tightening, FinOps is no longer
                optional. We help businesses get visibility, eliminate waste, and forecast
                accurately across AWS, Azure, and GCP.
              </p>
              <p>
                Beyond FinOps, we deliver custom software, mobile apps, DevOps, cybersecurity, data
                & AI, and certified Microsoft Dynamics 365 implementations — backed by 24/7 managed
                support.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10">
              <a
                href="mailto:info@plas-era.com"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                info@plas-era.com →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Engineering-first",
              d: "Senior engineers on every project — no junior hand-offs.",
            },
            { t: "Cost-conscious", d: "FinOps thinking baked into every decision, not bolted on." },
            {
              t: "Long-term partner",
              d: "We support, scale, and evolve with you — well past launch.",
            },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div className="rounded-3xl border border-border p-8 h-full hover-lift hover:border-foreground/30">
                <h3 className="text-xl font-semibold">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
