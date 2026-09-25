import { createFileRoute } from "@tanstack/react-router";
import { DecodeScreen, FailScreen, NoisyScreen, WinScreen } from "@/components/game/decode-screen";
import { HowScreen } from "@/components/game/how-screen";
import { LevelSelect } from "@/components/game/level-select";
import { PlayBoard } from "@/components/game/play-board";
import { TitleScreen } from "@/components/game/title-screen";
import { useGame } from "@/lib/game/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const screen = useGame((s) => s.screen);
  if (screen === "title") return <TitleScreen />;
  if (screen === "how") return <HowScreen />;
  if (screen === "select") return <LevelSelect />;
  if (screen === "play" || screen === "result") return <PlayBoard />;
  if (screen === "decode") return <DecodeScreen />;
  if (screen === "win") return <WinScreen />;
  if (screen === "fail") return <FailScreen />;
  if (screen === "noisy") return <NoisyScreen />;
  return <TitleScreen />;
}
