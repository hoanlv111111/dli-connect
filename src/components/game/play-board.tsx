import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { DiliFace, vibeFor } from "@/components/game/dili";
import { circleSlots } from "@/lib/game/levels";
import { heteroPairCount, isLocked, pairKey } from "@/lib/game/solver";
import { revealedIds, useGame } from "@/lib/game/store";
import { cn } from "@/lib/utils";

export function PlayBoard() {
  const level = useGame((s) => s.level);
  const connections = useGame((s) => s.connections);
  const selectedId = useGame((s) => s.selectedId);
  const selectAvatar = useGame((s) => s.selectAvatar);
  const undo = useGame((s) => s.undo);
  const openDecode = useGame((s) => s.openDecode);
  const go = useGame((s) => s.go);
  const screen = useGame((s) => s.screen);
  const lastResult = useGame((s) => s.lastResult);
  const dismissResult = useGame((s) => s.dismissResult);

  const slots = useMemo(
    () => (level ? circleSlots(level.avatars.length) : []),
    [level],
  );
  const pos = useMemo(() => {
    const map: Record<string, { x: number; y: number }> = {};
    if (!level) return map;
    level.avatars.forEach((a, i) => {
      map[a.id] = slots[i];
    });
    return map;
  }, [level, slots]);

  if (!level) return null;

  const revealed = revealedIds(connections);
  const locked = isLocked(level, connections);
  const remaining = level.budget - connections.length;
  const usedPairs = new Set(connections.map((c) => pairKey(c.aId, c.bId)));
  const selected = level.avatars.find((a) => a.id === selectedId);
  const mixes = heteroPairCount(connections);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <header className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <button
          type="button"
          className="text-xs text-fg-muted hover:text-fg"
          onClick={() => go("select")}
        >
          Leave
        </button>
        <div className="text-center">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">
            {level.title}
          </p>
          <p className="text-xs text-fg-subtle">{level.kicker}</p>
        </div>
        <div className="text-right font-mono text-xs tabular-nums text-fg-muted">
          <div>
            {remaining} spark{remaining === 1 ? "" : "s"}
          </div>
          <div className="text-fg-subtle">
            mix {mixes}/{level.minPairs}
          </div>
        </div>
      </header>

      <div className="relative mx-auto w-full max-w-2xl flex-1 px-3 pb-2 pt-2">
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
            {connections.map((c) => {
              const a = pos[c.aId];
              const b = pos[c.bId];
              if (!a || !b) return null;
              const col = c.echo
                ? "#6d92ab"
                : c.score >= 0
                  ? "var(--color-signal-pos)"
                  : "var(--color-signal-neg)";
              return (
                <line
                  key={c.id}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={col}
                  strokeWidth={c.echo ? "0.4" : "0.7"}
                  strokeDasharray={c.echo ? "1.5 1.2" : undefined}
                  vectorEffect="non-scaling-stroke"
                  opacity="0.9"
                />
              );
            })}
          </svg>
          {level.avatars.map((av) => {
            const p = pos[av.id];
            const isSel = selectedId === av.id;
            const known = revealed.has(av.id);
            const blocked =
              selectedId != null &&
              selectedId !== av.id &&
              usedPairs.has(pairKey(selectedId, av.id));
            return (
              <button
                key={av.id}
                type="button"
                disabled={blocked}
                onClick={() => selectAvatar(av.id)}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className={cn(
                  "absolute flex w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:w-20",
                  blocked && "opacity-30",
                  isSel && "anim-sel rounded-full",
                )}
              >
                <DiliFace role={av.role} known={known} selected={isSel} size={58} />
                <span className="mt-0.5 max-w-full truncate text-center text-xs font-semibold">
                  {av.name}
                </span>
                {known && (
                  <span className="max-w-full truncate text-center text-[10px] text-fg-subtle">
                    {av.role}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <footer className="space-y-3 px-4 pb-6 pt-1 sm:px-6">
        {locked && (
          <p className="text-center text-sm font-semibold text-lock">
            Room is readable. Match the vibes.
          </p>
        )}
        {selected && (
          <p className="text-center text-xs text-fg-muted">
            {selected.name}
            <span className="text-fg-subtle">
              {" "}
              — {revealed.has(selected.id) ? selected.role : selected.bio}
            </span>
            {" · tap who they talk to"}
          </p>
        )}
        {!selected && connections.length === 0 && (
          <p className="text-center text-xs text-fg-subtle">
            Tap two Dilis to spark a connection.
          </p>
        )}
        <HistoryStrip />
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="flex-1"
            disabled={connections.length === 0}
            onClick={undo}
          >
            Undo
          </Button>
          <Button className="flex-1" disabled={!locked} onClick={openDecode}>
            Read the room
          </Button>
        </div>
      </footer>

      {screen === "result" && lastResult && (
        <ResultSheet
          result={lastResult}
          names={Object.fromEntries(level.avatars.map((a) => [a.id, a.name]))}
          onContinue={dismissResult}
        />
      )}
    </div>
  );
}

function HistoryStrip() {
  const connections = useGame((s) => s.connections);
  const level = useGame((s) => s.level);
  if (!level || connections.length === 0) return null;
  const names = Object.fromEntries(level.avatars.map((a) => [a.id, a.name]));
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {connections.map((c) => {
        const v = vibeFor(c.score, c.echo);
        return (
          <div
            key={c.id}
            className="shrink-0 rounded-md border border-border bg-bg-elevated px-3 py-2"
          >
            <p className="text-[11px] text-fg-muted">
              {names[c.aId]} + {names[c.bId]}
            </p>
            <p
              className={cn(
                "text-xs font-bold",
                c.echo ? "text-fg-subtle" : c.score >= 0 ? "text-signal-pos" : "text-signal-neg",
              )}
            >
              {v.label}
              {!c.echo && (
                <span className="ml-1 font-mono font-normal opacity-80">
                  {c.score > 0 ? "+" : ""}
                  {c.score}
                </span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function ResultSheet({
  result,
  names,
  onContinue,
}: {
  result: {
    aId: string;
    bId: string;
    typeA: string;
    typeB: string;
    score: number;
    echo: boolean;
  };
  names: Record<string, string>;
  onContinue: () => void;
}) {
  const v = vibeFor(result.score, result.echo);
  return (
    <div className="fixed inset-0 z-20 flex items-end justify-center bg-bg/75 p-4 sm:items-center">
      <div className="anim-pop w-full max-w-sm rounded-xl border border-border bg-bg-elevated p-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <DiliFace role={result.typeA as never} known size={52} />
          <span className="text-lg text-accent">+</span>
          <DiliFace role={result.typeB as never} known size={52} />
        </div>
        <p className="text-sm text-fg-muted">
          {names[result.aId]} · {result.typeA}
          <span className="text-fg-subtle">  with  </span>
          {names[result.bId]} · {result.typeB}
        </p>
        <p
          className={cn(
            "mt-3 font-display text-4xl font-extrabold tracking-tight",
            result.echo ? "text-fg-muted" : result.score >= 0 ? "text-signal-pos" : "text-signal-neg",
          )}
        >
          {v.label}
        </p>
        {!result.echo && (
          <p className="mt-1 font-mono text-lg tabular-nums text-fg">
            {result.score > 0 ? "+" : ""}
            {result.score}
          </p>
        )}
        <p className="mt-2 text-sm text-fg-subtle">{v.hint}</p>
        <Button className="mt-6 w-full" onClick={onContinue}>
          Keep going
        </Button>
      </div>
    </div>
  );
}
