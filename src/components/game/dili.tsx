import type { Role } from "@/lib/game/types";
import { cn } from "@/lib/utils";

const BODY: Record<string, string> = {
  unknown: "#4DA8FF",
  Builder: "#5B8DEF",
  Creator: "#3DDCFF",
  Artist: "#8AA8FF",
  Bot: "#8B9BB4",
  Scam: "#FF7A88",
};

export function DiliFace({
  role,
  known,
  selected,
  size = 56,
  className,
}: {
  role: Role;
  known: boolean;
  selected?: boolean;
  size?: number;
  className?: string;
}) {
  const fill = known ? BODY[role] : BODY.unknown;
  const id = `${role}-${known ? "k" : "u"}-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={cn("shrink-0", selected && "scale-110", className)}
      aria-hidden
    >
      <defs>
        <radialGradient id={`g-${id}`} cx="35%" cy="30%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="100%" stopColor={fill} />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="58" rx="16" ry="3.5" fill="#031018" opacity="0.35" />
      <circle cx="32" cy="34" r="22" fill={`url(#g-${id})`} />
      <circle cx="32" cy="34" r="22" fill={fill} opacity="0.55" />
      <ellipse cx="24" cy="30" rx="3.2" ry="4" fill="#0B1C2C" />
      <ellipse cx="40" cy="30" rx="3.2" ry="4" fill="#0B1C2C" />
      <circle cx="23" cy="28.5" r="1" fill="#fff" />
      <circle cx="39" cy="28.5" r="1" fill="#fff" />
      <path
        d="M26 41c2.4 3 9.6 3 12 0"
        fill="none"
        stroke="#0B1C2C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {known && role === "Builder" && (
        <path d="M18 18h28l-3 7H21z" fill="#F0F6FF" opacity="0.9" />
      )}
      {known && role === "Creator" && (
        <rect x="42" y="14" width="10" height="14" rx="2" fill="#0B1C2C" />
      )}
      {known && role === "Artist" && (
        <path d="M44 16l8 10-6 2z" fill="#F0F6FF" />
      )}
      {known && role === "Bot" && (
        <>
          <circle cx="32" cy="12" r="3" fill="#D7F3FF" />
          <rect x="31" y="14" width="2" height="6" fill="#D7F3FF" />
        </>
      )}
      {known && role === "Scam" && (
        <path d="M18 28h10M36 28h10" stroke="#0B1C2C" strokeWidth="3" />
      )}
    </svg>
  );
}

export const VIBE: Record<number, { label: string; hint: string }> = {
  40: { label: "Echo", hint: "same crew, no new mix" },
  35: { label: "Spark", hint: "they actually click" },
  30: { label: "Ship", hint: "builders + makers" },
  25: { label: "Collab", hint: "clip meets paint" },
  20: { label: "Soft", hint: "quiet overlap" },
  0: { label: "Static", hint: "nothing lands" },
  [-5]: { label: "Cold", hint: "off-beat" },
  [-10]: { label: "Glitch", hint: "something's off" },
  [-30]: { label: "Rug", hint: "trust just dropped" },
  [-35]: { label: "Bad mix", hint: "this pairing burns" },
  [-40]: { label: "Toxic", hint: "visibility tanks" },
  [-70]: { label: "Blackout", hint: "the room went dead" },
  [-100]: { label: "Echo", hint: "same crew, no new mix" },
};

export function vibeFor(score: number, echo: boolean) {
  if (echo) return { label: "Loopback", hint: "same vibe twice. no new read." };
  return VIBE[score] ?? { label: score > 0 ? "Click" : "Noise", hint: "new mix" };
}
