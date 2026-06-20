import { cn } from "@/lib/utils";

// NEXO — the NEXORA assistant mascot. A friendly headset robot rendered as a
// self-contained SVG so it reads on both the gold launcher and the navy panel
// header. Animation is driven by CSS classes defined in src/index.css
// (nexo-bob / nexo-eye / nexo-glow / nexo-arm + nexo-waving) and is neutralized
// automatically by the global prefers-reduced-motion rule.
const INK = "#0F1A2E"; // navy (secondary/foreground)
const ACCENT = "#F5A20A"; // gold (primary)
const FACE = "#F8F6F1"; // ivory (background)

export function NexoAvatar({
  size = 40,
  waving = false,
  animate = true,
  className,
}: {
  size?: number;
  waving?: boolean;
  animate?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="NEXO"
      className={className}
    >
      <g className={cn(animate && "nexo-bob")}>
        {/* Antenna */}
        <line x1="32" y1="13" x2="32" y2="6" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        <circle
          cx="32"
          cy="4.2"
          r="2.6"
          fill={ACCENT}
          stroke={INK}
          strokeWidth="1"
          className={cn(animate && "nexo-glow")}
        />

        {/* Headset band */}
        <path d="M11 27 Q11 9 32 9 Q53 9 53 27" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Head */}
        <rect x="14" y="14" width="36" height="28" rx="11" fill={FACE} stroke={INK} strokeWidth="2" />

        {/* Ear cups */}
        <rect x="8" y="25" width="7" height="11" rx="2" fill={INK} />
        <rect x="49" y="25" width="7" height="11" rx="2" fill={INK} />

        {/* Eyes */}
        <ellipse cx="25" cy="28" rx="3" ry="3.4" fill={INK} className={cn(animate && "nexo-eye")} />
        <ellipse cx="39" cy="28" rx="3" ry="3.4" fill={INK} className={cn(animate && "nexo-eye")} />

        {/* Smile */}
        <path d="M25 34 Q32 39 39 34" stroke={INK} strokeWidth="2.2" fill="none" strokeLinecap="round" />

        {/* Mic boom */}
        <path d="M11 33 Q7 41 20 39" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="20" cy="39" r="1.7" fill={ACCENT} stroke={INK} strokeWidth="0.8" />

        {/* Body */}
        <rect x="19" y="43" width="26" height="17" rx="5" fill={FACE} stroke={INK} strokeWidth="2" />

        {/* "O" badge */}
        <circle cx="32" cy="51" r="4.2" fill="none" stroke={ACCENT} strokeWidth="2" />
        <circle cx="32" cy="51" r="1.4" fill={ACCENT} />

        {/* Waving arm */}
        <g className={cn(animate && "nexo-arm", animate && waving && "nexo-waving")}>
          <rect x="44" y="45" width="9" height="3.4" rx="1.7" fill={FACE} stroke={INK} strokeWidth="1.4" />
          <circle cx="53" cy="46.7" r="2.6" fill={FACE} stroke={INK} strokeWidth="1.4" />
        </g>
      </g>
    </svg>
  );
}
