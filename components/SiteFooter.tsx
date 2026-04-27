import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="absolute inset-1 rounded-full border border-foreground/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            <span className="text-base font-semibold">Plasera</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A technology company building software, running cloud & DevOps, and helping businesses
            optimize cost with FinOps.
          </p>
          <a
            href="mailto:info@plas-era.com"
            className="mt-4 inline-block text-sm text-foreground hover:opacity-80"
          >
            info@plas-era.com
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Services</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-foreground text-muted-foreground">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/finops" className="hover:text-foreground text-muted-foreground">
                FinOps
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-foreground text-muted-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground text-muted-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Plasera. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Software · Cloud · DevOps · FinOps · Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}
