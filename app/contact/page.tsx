"use client";

import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative pt-40 pb-32">
      <div className="absolute inset-x-0 top-0 h-[500px] [background:var(--gradient-radial)]" />
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Get in touch</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[0.95]">
            Let&apos;s build <span className="text-gradient">what&apos;s next.</span>
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-md">
            Whether you&apos;re scaling a retail ecosystem or launching a global digital product —
            we&apos;re your technology partner.
          </p>
          <dl className="mt-12 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Email</dt>
              <dd className="mt-1">
                <a href="mailto:info@plas-era.com" className="text-foreground hover:opacity-80">
                  info@plas-era.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Global support
              </dt>
              <dd className="mt-1 text-foreground">24/7 across 25+ countries</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl glass-strong p-8 md:p-10 glow-ring space-y-5"
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="text-3xl">✓</div>
                <h3 className="mt-4 text-xl font-semibold">Thanks — we&apos;ll be in touch.</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team will respond within one business day.
                </p>
              </div>
            ) : (
              <>
                <Field label="Full name" name="name" placeholder="Jane Doe" />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                />
                <Field label="Company" name="company" placeholder="Acme Inc." />
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="mt-2 w-full rounded-2xl bg-foreground/[0.04] border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 transition resize-none"
                    placeholder="Tell us about your project…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
                >
                  Send message →
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-foreground/[0.04] border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 transition"
      />
    </div>
  );
}
