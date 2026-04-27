/**
 * ServiceIcon — line SVG icons for the service grid.
 * All icons inherit currentColor and use stroke for a clean, premium look.
 */
export type IconName =
  | "code"
  | "mobile"
  | "devops"
  | "finops"
  | "security"
  | "ai"
  | "erp"
  | "support";

const common = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  switch (name) {
    case "code":
      return (
        <svg {...common} className={className}>
          <rect x="2.5" y="4" width="19" height="15" rx="2" />
          <path d="M2.5 8h19" />
          <path d="m9 12-2 2 2 2" />
          <path d="m15 12 2 2-2 2" />
          <path d="m13 11.5-2 5" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common} className={className}>
          <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
          <path d="M10 5.5h4" />
          <circle cx="12" cy="18" r="0.6" fill="currentColor" />
        </svg>
      );
    case "devops":
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M5.2 18.8l2.1-2.1M16.7 7.3l2.1-2.1" />
        </svg>
      );
    case "finops":
      return (
        <svg {...common} className={className}>
          <path d="M3.5 19.5V8M9 19.5V12M14.5 19.5v-4M20 19.5V5" />
          <path d="M3.5 19.5h17" />
          <path d="m4 8 5-3 5 3 6-4" />
        </svg>
      );
    case "security":
      return (
        <svg {...common} className={className}>
          <path d="M12 2.5 4 5.5v6c0 4.5 3.4 8.5 8 10 4.6-1.5 8-5.5 8-10v-6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common} className={className}>
          <rect x="5" y="6" width="14" height="13" rx="2.5" />
          <path d="M9 6V3.5M15 6V3.5M5 10H2.5M5 14H2.5M19 10h2.5M19 14h2.5M9 19v2.5M15 19v2.5" />
          <circle cx="10" cy="11.5" r="0.7" fill="currentColor" />
          <circle cx="14" cy="11.5" r="0.7" fill="currentColor" />
          <path d="M10 15h4" />
        </svg>
      );
    case "erp":
      return (
        <svg {...common} className={className}>
          <path d="M4 21V6l8-3.5L20 6v15" />
          <path d="M4 21h16" />
          <path d="M9 21v-5h6v5" />
          <path d="M8 9h2M14 9h2M8 12h2M14 12h2" />
        </svg>
      );
    case "support":
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 9.5a3.5 3.5 0 1 1 5 3c-1 .7-1.5 1.3-1.5 2.5" />
          <circle cx="12" cy="17.5" r="0.7" fill="currentColor" />
        </svg>
      );
  }
}
