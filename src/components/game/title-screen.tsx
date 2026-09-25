import { Button } from "@/components/ui/button";
import { DiliFace } from "@/components/game/dili";
import { useGame } from "@/lib/game/store";
import { Shell } from "./shell";

export function TitleScreen() {
  const go = useGame((s) => s.go);
  const save = useGame((s) => s.save);
  const hasProgress = save.cleared.length > 0;

  return (
    <Shell>
      <div className="flex flex-1 flex-col justify-center gap-8">
        <div className="flex items-end gap-2">
          <DiliFace role="Creator" known size={72} />
          <DiliFace role="Builder" known size={56} />
          <DiliFace role="Scam" known size={48} />
        </div>
        <div className="space-y-3">
          <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
            Dlicom Game Jam
          </p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-fg sm:text-6xl">
            SIGNAL
          </h1>
          <p className="max-w-md text-base leading-relaxed text-fg-muted">
            Spark connections in the feed. See who clicks. Read the room before
            the scams do.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:max-w-xs">
          <Button size="lg" onClick={() => go("select")}>
            {hasProgress ? "Back in" : "Play"}
          </Button>
          <Button variant="ghost" size="lg" onClick={() => go("how")}>
            How to play
          </Button>
        </div>
      </div>
    </Shell>
  );
}
