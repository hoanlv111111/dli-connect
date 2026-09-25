import type { Level } from "./types";

export const ROLE_VALUES: Record<string, number> = {
  Builder: 20,
  Creator: 15,
  Artist: 10,
  Bot: -20,
  Scam: -50,
};

export const LEVELS: Level[] = [
  {
    id: 1,
    title: "Gm chat",
    kicker: "Who actually clicks?",
    budget: 5,
    minPairs: 3,
    roles: ["Builder", "Creator", "Scam"],
    chips: [20, 15, -50],
    avatars: [
      { id: "a1", name: "Alex", role: "Builder", bio: "building something cool" },
      { id: "a2", name: "Ren", role: "Builder", bio: "shipping tonight" },
      { id: "a3", name: "Mia", role: "Creator", bio: "gm everyone" },
      { id: "a4", name: "Kai", role: "Creator", bio: "just dropped a clip" },
      { id: "a5", name: "Sam", role: "Scam", bio: "10x incoming" },
      { id: "a6", name: "Vex", role: "Scam", bio: "guaranteed alpha" },
    ],
  },
  {
    id: 2,
    title: "Clip night",
    kicker: "A fourth voice joins",
    budget: 6,
    minPairs: 3,
    roles: ["Builder", "Creator", "Artist", "Scam"],
    chips: [20, 15, 10, -50],
    avatars: [
      { id: "b1", name: "Alex", role: "Builder", bio: "shipping the next build" },
      { id: "b2", name: "Ren", role: "Builder", bio: "quiet but ships" },
      { id: "b3", name: "Mia", role: "Creator", bio: "gm, new clip later" },
      { id: "b4", name: "Kai", role: "Creator", bio: "reply guy energy" },
      { id: "b5", name: "Jules", role: "Artist", bio: "sticker drop tonight" },
      { id: "b6", name: "Park", role: "Artist", bio: "painted Dili in leaves" },
      { id: "b7", name: "Sam", role: "Scam", bio: "10x incoming" },
      { id: "b8", name: "Vex", role: "Scam", bio: "dm me for the call" },
    ],
  },
  {
    id: 3,
    title: "The feed",
    kicker: "Bots in the timeline",
    budget: 8,
    minPairs: 4,
    roles: ["Builder", "Creator", "Artist", "Bot", "Scam"],
    chips: [20, 15, 10, -20, -50],
    avatars: [
      { id: "c1", name: "Alex", role: "Builder", bio: "building something cool" },
      { id: "c2", name: "Ren", role: "Builder", bio: "just pushed" },
      { id: "c3", name: "Mia", role: "Creator", bio: "gm everyone" },
      { id: "c4", name: "Kai", role: "Creator", bio: "check my latest clip" },
      { id: "c5", name: "Jules", role: "Artist", bio: "new sticker drop" },
      { id: "c6", name: "Park", role: "Artist", bio: "watercolor Dili" },
      { id: "c7", name: "Nova", role: "Bot", bio: "synergizing value streams" },
      { id: "c8", name: "Unit", role: "Bot", bio: "let's hop off-platform" },
      { id: "c9", name: "Sam", role: "Scam", bio: "10x incoming" },
      { id: "c10", name: "Vex", role: "Scam", bio: "guaranteed alpha" },
    ],
  },
];

export function getLevel(id: number): Level {
  const level = LEVELS.find((l) => l.id === id);
  if (!level) throw new Error(`Unknown level ${id}`);
  return level;
}

export function connectionScore(a: string, b: string): number {
  return (ROLE_VALUES[a] ?? 0) + (ROLE_VALUES[b] ?? 0);
}

export function circleSlots(n: number): { x: number; y: number }[] {
  const cx = 50;
  const cy = 50;
  const r = n >= 10 ? 40 : n >= 8 ? 38 : 36;
  return Array.from({ length: n }, (_, i) => {
    const t = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return { x: cx + r * Math.cos(t), y: cy + r * Math.sin(t) };
  });
}
