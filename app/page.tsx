import type { Metadata } from "next";
import Link from "next/link";
import { CodeOrbit } from "@/components/CodeOrbit";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon, type IconName } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Plasera — Software, Cloud, DevOps & FinOps",
  description:
    "Plasera is a technology company building custom software, running cloud & DevOps, and helping businesses cut cloud spend with FinOps consulting and managed services.",
  openGraph: {
    title: "Plasera — Software, Cloud, DevOps & FinOps",
    description:
      "We build software, run your cloud, and optimize your spend. Tech partner for modern businesses.",
  },
};

const stats = [
  { v: "30%+", l: "Avg. cloud savings (FinOps)" },
  { v: "25+", l: "Countries served" },
  { v: "4.9/5", l: "Client satisfaction" },
  { v: "24/7", l: "Global support" },
];

const services: { icon: IconName; title: string; desc: string; highlight?: boolean }[] = [
  {
    icon: "code",
    title: "Custom Software",
    desc: "Web, backend, and platforms built for scale and reliability.",
  },
  {
    icon: "mobile",
    title: "Mobile Apps",
    desc: "High-performance iOS & Android products for global markets.",
  },
  {
    icon: "devops",
    title: "Cloud & DevOps",
    desc: "CI/CD, IaC, Kubernetes, observability — shipped right.",
  },
  {
    icon: "finops",
    title: "FinOps",
    desc: "Cut cloud waste, forecast spend, align engineering with finance.",
    highlight: true,
  },
  {
    icon: "security",
    title: "Cybersecurity",
    desc: "Audits, hardening, and compliance for enterprise systems.",
  },
  {
    icon: "ai",
    title: "Data & AI",
    desc: "Analytics, BI, and AI/ML systems that drive decisions.",
  },
  {
    icon: "erp",
    title: "Microsoft Dynamics 365",
    desc: "Certified ERP & CRM delivery and modernization.",
  },
  {
    icon: "support",
    title: "Support & Consulting",
    desc: "Strategy, architecture review, and 24/7 managed support.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-x-0 top-0 h-[800px] [background:var(--gradient-radial)]" />

        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground pulse-soft" />
                Software · Cloud · DevOps · FinOps
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
                We build software.{" "}
                <span className="text-gradient">Run your cloud. Cut your spend.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Plasera is a technology company that develops software, provides DevOps and cloud
                engineering, and now offers <span className="text-foreground">FinOps</span> — the
                new discipline helping businesses reduce cloud waste and align engineering with
                finance.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/finops"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
                >
                  Explore FinOps
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-foreground/10 transition"
                >
                  See all services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={480}>
              <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-semibold tracking-tight">{s.v}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <CodeOrbit />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUSTED BAR */}
      <section className="relative py-12 border-y border-border overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Trusted across industries · 25+ countries
        </p>
        <div className="relative overflow-hidden">
          <div className="marquee-track flex gap-16 whitespace-nowrap">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-16 items-center">
                {[
                  "RETAIL",
                  "FINANCE",
                  "HEALTHCARE",
                  "LOGISTICS",
                  "SAAS",
                  "ENTERPRISE",
                  "GOV",
                  "EDUCATION",
                ].map((b) => (
                  <span
                    key={b}
                    className="text-2xl font-semibold tracking-[0.2em] text-foreground/30"
                  >
                    {b}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINOPS SPOTLIGHT */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-16 glow-ring">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="relative grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-3 py-1 text-[11px] font-medium uppercase tracking-widest">
                    New service
                  </div>
                  <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-[-0.03em]">
                    FinOps — turn cloud spend into{" "}
                    <span className="text-gradient">competitive edge.</span>
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                    Most businesses overspend on cloud by 20–40%. Our FinOps practice gives you
                    visibility, accountability, and continuous optimization — so engineering ships
                    fast and finance stays in control.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/finops"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
                    >
                      What we offer →
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-foreground/10 transition"
                    >
                      Get a cost audit
                    </Link>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={150}>
                <div className="lg:col-span-2 space-y-3">
                  {[
                    { k: "Cloud cost visibility", v: "Real-time dashboards" },
                    { k: "Waste elimination", v: "Idle, oversized, orphaned" },
                    { k: "Commitment strategy", v: "RIs, savings plans" },
                    { k: "Forecast & budgets", v: "Per team, per product" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between rounded-2xl bg-foreground/[0.04] border border-border px-5 py-4"
                    >
                      <span className="text-sm text-foreground/85">{row.k}</span>
                      <span className="text-xs text-muted-foreground">{row.v}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">What we do</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl">
              A full technology partner — not a single tool.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-2xl">
              We develop software, ship it on cloud you can trust, support you 24/7, and advise on
              the strategy that gets you there.
            </p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article
                  className={`group relative h-full rounded-3xl p-6 hover-lift glow-ring transition ${
                    s.highlight
                      ? "glass-strong hover:bg-foreground/10"
                      : "glass hover:bg-foreground/[0.06]"
                  }`}
                >
                  {s.highlight && (
                    <span className="absolute top-4 right-4 text-[10px] font-medium uppercase tracking-widest rounded-full bg-foreground text-background px-2 py-0.5">
                      New
                    </span>
                  )}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.06] border border-border text-foreground">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground"
              >
                See all services <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY PLASERA */}
      <section className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] max-w-3xl">
              Why companies choose <span className="text-gradient">Plasera.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Engineering-first",
                d: "Senior engineers in every project — no junior hand-offs.",
              },
              { t: "Cost-conscious", d: "FinOps mindset built into every architecture decision." },
              {
                t: "Microsoft Partner",
                d: "Certified delivery for Dynamics 365, Azure, Power Platform.",
              },
              { t: "24/7 global support", d: "Always-on response across regions and time zones." },
              { t: "Security-by-design", d: "Compliance and hardening from day one." },
              {
                t: "Long-term partner",
                d: "We stick around after launch — support, scale, evolve.",
              },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 60}>
                <div className="rounded-3xl border border-border p-6 h-full hover-lift hover:border-foreground/30">
                  <h3 className="text-base font-semibold">{b.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-20 text-center glow-ring">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em]">
                  Let&apos;s build <span className="text-gradient">what&apos;s next.</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Software, cloud, DevOps, FinOps, or strategic consulting — we&apos;re your
                  technology partner end to end.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
                  >
                    Start a project →
                  </Link>
                  <a
                    href="mailto:info@plas-era.com"
                    className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-foreground/10 transition"
                  >
                    info@plas-era.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
