"use client";

/**
 * CodeOrbit — animated tech vibe hero. Floating code/devops/finops chips
 * orbiting a glowing core terminal. Pure SVG + CSS. Fast, premium.
 */
export function CodeOrbit() {
  const chips = [
    { label: "</>", a: 0 },
    { label: "{ }", a: 45 },
    { label: "AI", a: 90 },
    { label: "DevOps", a: 135 },
    { label: "FinOps", a: 180 },
    { label: "Cloud", a: 225 },
    { label: "API", a: 270 },
    { label: "SQL", a: 315 },
  ];

  return (
    <div className="relative aspect-square w-full max-w-[620px] mx-auto pointer-events-none select-none">
      {/* Orbit rings */}
      <div className="absolute inset-0 rounded-full border border-foreground/10 spin-slow" />
      <div className="absolute inset-[10%] rounded-full border border-foreground/[0.06] spin-reverse" />
      <div className="absolute inset-[22%] rounded-full border border-foreground/10 spin-slow" />

      {/* Soft glow */}
      <div className="absolute inset-[28%] rounded-full bg-foreground/[0.06] blur-3xl pulse-soft" />

      {/* Center terminal */}
      <div className="absolute inset-[34%] rounded-2xl glass-strong glow-ring flex items-center justify-center">
        <div className="text-left p-4 font-mono text-[10px] sm:text-xs text-foreground/80 leading-relaxed">
          <div className="text-muted-foreground">$ plasera deploy</div>
          <div>
            <span className="text-foreground/50">→</span> build ✓
          </div>
          <div>
            <span className="text-foreground/50">→</span> finops ✓
          </div>
          <div className="text-foreground">
            <span className="pulse-soft">●</span> live
          </div>
        </div>
      </div>

      {/* Orbiting chips — placed via translate(-50%) and rotated container */}
      {chips.map((c, i) => (
        <div
          key={i}
          className="absolute inset-0 spin-slow"
          style={{
            transform: `rotate(${c.a}deg)`,
            animationDuration: `${50 + (i % 3) * 20}s`,
            animationDirection: i % 2 ? "reverse" : "normal",
          }}
        >
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 glass rounded-full px-3 py-1.5 text-xs font-mono text-foreground/85 glow-ring"
            style={{ transform: `translate(-50%, -50%) rotate(${-c.a}deg)` }}
          >
            {c.label}
          </div>
        </div>
      ))}

      {/* Connection sparks */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <radialGradient id="spark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="url(#spark)" opacity="0.5" />
      </svg>
    </div>
  );
}
