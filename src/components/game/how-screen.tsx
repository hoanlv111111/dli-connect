import { Button } from "@/components/ui/button";
import { useGame } from "@/lib/game/store";
import { Kicker, Panel, Shell } from "./shell";

const STEPS = [
  {
    n: "01",
    t: "Spark",
    d: "Tap two people. Their Dili pops — you learn the role they play in the feed.",
  },
  {
    n: "02",
    t: "Feel the mix",
    d: "Good collabs SPARK. Scams RUG. Same role twice is a loopback: you see who they are, but you don't get a new mix.",
  },
  {
    n: "03",
    t: "Collect mixes",
    d: "You need different role-pairs, not repeats. When the room is readable, Read the room unlocks.",
  },
  {
    n: "04",
    t: "Match the vibe",
    d: "Each role brings one vibe into a collab. The mix you saw is both vibes added together. Three guesses.",
  },
];

export function HowScreen() {
  const go = useGame((s) => s.go);
  return (
    <Shell>
      <div className="flex flex-1 flex-col gap-8">
        <div className="space-y-2">
          <Kicker>Dlicom feed</Kicker>
          <h1 className="font-display text-3xl font-extrabold tracking-tight">How to play</h1>
        </div>
        <div className="grid gap-3">
          {STEPS.map((s) => (
            <Panel key={s.n} className="flex gap-4">
              <span className="font-mono text-xs text-accent">{s.n}</span>
              <div>
                <p className="text-sm font-bold">{s.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">{s.d}</p>
              </div>
            </Panel>
          ))}
        </div>
        <div className="mt-auto flex gap-3">
          <Button variant="ghost" onClick={() => go("title")}>
            Back
          </Button>
          <Button onClick={() => go("select")}>Enter the feed</Button>
        </div>
      </div>
    </Shell>
  );
}
