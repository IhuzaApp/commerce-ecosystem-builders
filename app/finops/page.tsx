import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FinOps Services — Cloud Cost Optimization | Plasera",
  description:
    "Plasera FinOps helps businesses cut cloud waste, forecast spend, and align engineering with finance. Cost audits, dashboards, governance, and continuous optimization across AWS, Azure, and GCP.",
};

const offerings = [
  {
    n: "01",
    t: "Cloud Cost Audit",
    d: "Deep-dive review of your AWS, Azure, or GCP bill. We identify waste, oversized resources, idle workloads, and quick wins — usually 15–30% savings in the first 30 days.",
  },
  {
    n: "02",
    t: "Visibility & Dashboards",
    d: "Real-time cost dashboards by team, product, environment, and service. Show every engineer the cost of what they ship.",
  },
  {
    n: "03",
    t: "Tagging & Allocation",
    d: "We design tagging strategies and chargeback models so finance can attribute every dollar to a business owner.",
  },
  {
    n: "04",
    t: "Commitment Management",
    d: "Reserved Instances, Savings Plans, and Committed Use Discounts modeled, purchased, and continuously rebalanced.",
  },
  {
    n: "05",
    t: "Rightsizing & Automation",
    d: "Automated rightsizing, autoscaling, scheduled shutdowns, and storage tiering — engineered into your pipelines.",
  },
  {
    n: "06",
    t: "Forecast & Budgets",
    d: "Per-team and per-product forecasts with anomaly detection, alerts, and guardrails before invoices spike.",
  },
  {
    n: "07",
    t: "FinOps Culture & Training",
    d: "Workshops and playbooks that turn FinOps from a one-off project into an organizational discipline.",
  },
  {
    n: "08",
    t: "Managed FinOps",
    d: "Ongoing monthly engagement: optimization, reporting, KPI tracking, and stakeholder reviews. Set it and forget it.",
  },
];

const why = [
  { v: "20–40%", l: "Typical savings on cloud bills" },
  { v: "30 days", l: "First quick wins shipped" },
  { v: "AWS · Azure · GCP", l: "All major clouds covered" },
];

export default function FinOpsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-x-0 top-0 h-[700px] [background:var(--gradient-radial)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-3 py-1 text-[11px] font-medium uppercase tracking-widest">
              New service
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              FinOps — turn cloud spend into{" "}
              <span className="text-gradient">competitive edge.</span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto">
              Cloud is fast — and expensive. Plasera FinOps gives you the visibility, governance,
              and automation to cut waste, forecast accurately, and put every engineering decision
              in business context.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                Get a free cost audit →
              </Link>
              <a
                href="mailto:info@plas-era.com"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-foreground/10 transition"
              >
                info@plas-era.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16 grid sm:grid-cols-3 gap-4">
              {why.map((w) => (
                <div key={w.l} className="rounded-3xl glass p-6 glow-ring">
                  <div className="text-2xl font-semibold tracking-tight">{w.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{w.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              What we offer
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl">
              Everything you need to run cloud profitably.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-4">
            {offerings.map((o, i) => (
              <Reveal key={o.t} delay={i * 50}>
                <article className="group rounded-3xl glass p-7 h-full hover-lift hover:bg-foreground/[0.06] glow-ring">
                  <div className="flex items-start gap-5">
                    <div className="font-mono text-xs text-muted-foreground pt-1">{o.n}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{o.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.d}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
              Stop overpaying for cloud.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Book a free 30-minute FinOps assessment. We&apos;ll show you exactly where the savings
              are.
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                Book assessment →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
