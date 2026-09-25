import { Button } from "@/components/ui/button";
import { DiliFace } from "@/components/game/dili";
import { ROLE_VALUES } from "@/lib/game/levels";
import type { Role } from "@/lib/game/types";
import { useGame } from "@/lib/game/store";
import { cn } from "@/lib/utils";
import { Kicker, Shell } from "./shell";

export function DecodeScreen() {
  const level = useGame((s) => s.level);
  const guess = useGame((s) => s.guess);
  const setGuess = useGame((s) => s.setGuess);
  const submitGuess = useGame((s) => s.submitGuess);
  const attemptsLeft = useGame((s) => s.attemptsLeft);
  const lastCheck = useGame((s) => s.lastCheck);
  const go = useGame((s) => s.go);

  if (!level) return null;

  const used = new Set(Object.values(guess).filter((v): v is number => v != null));
  const ready = level.roles.every((r) => guess[r] != null);
  const checkMap = new Map(lastCheck?.map((r) => [r.role, r.ok]) ?? []);

  return (
    <Shell>
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Kicker>Read the room</Kicker>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight">
              Match the vibes
            </h1>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-fg-muted">
              Each role brings one vibe into a collab. The mix you saw is both
              added together. Every vibe used once.
            </p>
          </div>
          <p className="rounded-full bg-bg-subtle px-3 py-1 font-mono text-xs tabular-nums text-lock">
            {attemptsLeft} lives
          </p>
        </div>

        <div className="space-y-3">
          {level.roles.map((role) => {
            const mark = checkMap.get(role);
            return (
              <div
                key={role}
                className="rounded-lg border border-border bg-bg-elevated p-4"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <DiliFace role={role} known size={40} />
                    <p className="text-sm font-bold">{role}</p>
                  </div>
                  {mark != null && (
                    <span
                      className={cn(
                        "text-xs font-bold",
                        mark ? "text-signal-pos" : "text-signal-neg",
                      )}
                    >
                      {mark ? "Hit" : "Miss"}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {level.chips.map((chip) => {
                    const selected = guess[role] === chip;
                    const taken = used.has(chip) && !selected;
                    return (
                      <button
                        key={chip}
                        type="button"
                        disabled={taken}
                        onClick={() => setGuess(role, selected ? null : chip)}
                        className={cn(
                          "h-11 min-w-14 rounded-md border px-3 font-mono text-sm font-bold tabular-nums",
                          selected
                            ? "border-accent bg-accent text-accent-fg"
                            : "border-border bg-bg-subtle text-fg",
                          taken && "opacity-30",
                        )}
                      >
                        {chip > 0 ? `+${chip}` : chip}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {lastCheck && !lastCheck.every((r) => r.ok) && (
          <p className="text-sm text-fg-muted">
            Close. {lastCheck.filter((r) => r.ok).length}/{level.roles.length} hit.
            Try another mix.
          </p>
        )}

        <div className="mt-auto flex gap-2">
          <Button variant="ghost" onClick={() => go("play")}>
            Feed
          </Button>
          <Button className="flex-1" disabled={!ready} onClick={submitGuess}>
            Lock in
          </Button>
        </div>
      </div>
    </Shell>
  );
}

export function WinScreen() {
  const level = useGame((s) => s.level);
  const startLevel = useGame((s) => s.startLevel);
  const go = useGame((s) => s.go);
  if (!level) return null;
  const next = level.id < 3 ? level.id + 1 : null;

  return (
    <Shell>
      <div className="flex flex-1 flex-col justify-center gap-8">
        <div className="flex gap-2">
          {level.roles.map((role) => (
            <DiliFace key={role} role={role as Role} known size={48} />
          ))}
        </div>
        <div>
          <Kicker>Room read</Kicker>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight">
            You called it
          </h1>
          <p className="mt-2 text-sm text-fg-muted">{level.title} is open.</p>
        </div>
        <div className="space-y-2">
          {level.roles.map((role) => (
            <div
              key={role}
              className="flex items-center justify-between rounded-md border border-border bg-bg-elevated px-4 py-3"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <DiliFace role={role} known size={32} />
                {role}
              </span>
              <span className="font-mono text-sm tabular-nums text-signal-pos">
                {ROLE_VALUES[role] > 0 ? "+" : ""}
                {ROLE_VALUES[role]}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 sm:max-w-xs">
          {next != null && (
            <Button onClick={() => startLevel(next)}>Next room</Button>
          )}
          <Button variant="ghost" onClick={() => go("select")}>
            All rooms
          </Button>
        </div>
      </div>
    </Shell>
  );
}

export function FailScreen() {
  const level = useGame((s) => s.level);
  const startLevel = useGame((s) => s.startLevel);
  const go = useGame((s) => s.go);
  if (!level) return null;
  return (
    <Shell>
      <div className="flex flex-1 flex-col justify-center gap-6">
        <Kicker>Missed the room</Kicker>
        <h1 className="font-display text-4xl font-extrabold tracking-tight">
          Feed still noisy
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-fg-muted">
          Three lives gone. Jump back in and spark a cleaner mix.
        </p>
        <div className="flex flex-col gap-2 sm:max-w-xs">
          <Button onClick={() => startLevel(level.id)}>Retry</Button>
          <Button variant="ghost" onClick={() => go("select")}>
            Leave
          </Button>
        </div>
      </div>
    </Shell>
  );
}

export function NoisyScreen() {
  const level = useGame((s) => s.level);
  const startLevel = useGame((s) => s.startLevel);
  const undo = useGame((s) => s.undo);
  const go = useGame((s) => s.go);
  if (!level) return null;
  return (
    <Shell>
      <div className="flex flex-1 flex-col justify-center gap-6">
        <Kicker>Loopbacks</Kicker>
        <h1 className="font-display text-4xl font-extrabold tracking-tight">
          Not enough mix
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-fg-muted">
          Same-role sparks don't teach the room. Undo or restart and pair
          different vibes.
        </p>
        <div className="flex flex-col gap-2 sm:max-w-xs">
          <Button onClick={undo}>Undo last spark</Button>
          <Button variant="ghost" onClick={() => startLevel(level.id)}>
            Restart
          </Button>
          <Button variant="ghost" onClick={() => go("select")}>
            Leave
          </Button>
        </div>
      </div>
    </Shell>
  );
}
