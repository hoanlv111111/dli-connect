import { Button } from "@/components/ui/button";
import { LEVELS } from "@/lib/game/levels";
import { useGame } from "@/lib/game/store";
import { Kicker, Panel, Shell } from "./shell";

export function LevelSelect() {
  const go = useGame((s) => s.go);
  const startLevel = useGame((s) => s.startLevel);
  const save = useGame((s) => s.save);

  return (
    <Shell>
      <div className="flex flex-1 flex-col gap-8">
        <div className="space-y-2">
          <Kicker>Dlicom rooms</Kicker>
          <h1 className="font-display text-3xl font-extrabold tracking-tight">Pick a feed</h1>
        </div>
        <div className="grid gap-3">
          {LEVELS.map((level, i) => {
            const locked = i > 0 && !save.cleared.includes(LEVELS[i - 1].id);
            const cleared = save.cleared.includes(level.id);
            const best = save.bestAttempts[String(level.id)];
            return (
              <button
                key={level.id}
                disabled={locked}
                onClick={() => startLevel(level.id)}
                className="text-left disabled:opacity-40"
              >
                <Panel className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-fg-subtle">
                      Level {level.id}
                    </p>
                    <p className="mt-1 text-base font-medium">{level.title}</p>
                    <p className="mt-1 text-sm text-fg-muted">{level.kicker}</p>
                  </div>
                  <div className="shrink-0 text-right font-mono text-xs text-fg-subtle">
                    {locked
                      ? "Locked"
                      : cleared
                        ? `Cleared · ${best ?? "—"} att.`
                        : `${level.budget} sparks`}
                  </div>
                </Panel>
              </button>
            );
          })}
        </div>
        <div className="mt-auto">
          <Button variant="ghost" onClick={() => go("title")}>
            Back
          </Button>
        </div>
      </div>
    </Shell>
  );
}
