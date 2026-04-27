import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Software, Cloud, DevOps, FinOps & More | Plasera",
  description:
    "Plasera services: custom software, mobile, cloud & DevOps, FinOps, cybersecurity, data & AI, Microsoft Dynamics 365, and 24/7 support & consulting.",
};

const pillars = [
  {
    n: "01",
    label: "Software Development",
    services: [
      { t: "Custom Software", d: "Web platforms, backends, internal tools, and SaaS products." },
      { t: "Mobile Apps", d: "Native and cross-platform iOS & Android applications." },
      { t: "API & Integrations", d: "REST, GraphQL, event-driven, and partner integrations." },
    ],
  },
  {
    n: "02",
    label: "Cloud, DevOps & FinOps",
    services: [
      { t: "Cloud Engineering", d: "AWS, Azure, GCP architecture and migrations." },
      { t: "DevOps & Platform", d: "CI/CD, IaC, Kubernetes, observability, SRE practices." },
      {
        t: "FinOps",
        d: "Cloud cost optimization — audits, governance, automation, and managed FinOps.",
        badge: "New",
      },
    ],
  },
  {
    n: "03",
    label: "Intelligence & Security",
    services: [
      { t: "Data & BI", d: "Data platforms, warehousing, dashboards, and analytics." },
      { t: "AI & Machine Learning", d: "LLM apps, predictive models, automation." },
      { t: "Cybersecurity", d: "Audits, hardening, compliance (ISO, SOC 2, GDPR)." },
    ],
  },
  {
    n: "04",
    label: "Enterprise, Support & Consulting",
    services: [
      { t: "Microsoft Dynamics 365", d: "Certified ERP & CRM delivery and modernization." },
      { t: "Managed Support", d: "24/7 monitoring, on-call, incident response, SLAs." },
      { t: "Technology Consulting", d: "Architecture review, due diligence, strategy." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-x-0 top-0 h-[500px] [background:var(--gradient-radial)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Capabilities
            </p>
            <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] max-w-4xl">
              Software, cloud & <span className="text-gradient">FinOps.</span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-2xl">
              We design, build, and run the systems that power modern businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <div className="rounded-3xl border border-border bg-surface p-8 md:p-10 hover:border-foreground/30 transition">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.n}</div>
                <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
                  {p.label}
                </h2>
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  {p.services.map((s) => (
                    <div
                      key={s.t}
                      className="relative rounded-2xl glass p-6 hover-lift hover:bg-foreground/[0.06]"
                    >
                      {"badge" in s && s.badge && (
                        <span className="absolute top-3 right-3 text-[10px] font-medium uppercase tracking-widest rounded-full bg-foreground text-background px-2 py-0.5">
                          {s.badge}
                        </span>
                      )}
                      <h3 className="text-base font-semibold">{s.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-[-0.03em]">
              Looking for a partner who ships?
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                Start a project →
              </Link>
              <Link
                href="/finops"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-foreground/10 transition"
              >
                Explore FinOps
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
