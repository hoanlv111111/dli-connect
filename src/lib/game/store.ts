import { create } from "zustand";
import type { Connection, Level, Role, SaveData } from "./types";
import { ROLE_VALUES, connectionScore, getLevel } from "./levels";
import { isLocked, pairKey } from "./solver";
import { loadSave, markCleared } from "./save";
import { sfxBad, sfxConnect, sfxLock, sfxOk, unlockAudio } from "./audio";

export type Screen =
  | "title"
  | "how"
  | "select"
  | "play"
  | "result"
  | "decode"
  | "win"
  | "fail"
  | "noisy";

type Guess = Partial<Record<Role, number | null>>;
type CheckRow = { role: Role; ok: boolean };

type GameState = {
  screen: Screen;
  save: SaveData;
  level: Level | null;
  selectedId: string | null;
  connections: Connection[];
  lastResult: Connection | null;
  guess: Guess;
  attemptsLeft: number;
  lastCheck: CheckRow[] | null;
  startLevel: (id: number) => void;
  selectAvatar: (id: string) => void;
  connectPair: (aId: string, bId: string) => void;
  undo: () => void;
  dismissResult: () => void;
  openDecode: () => void;
  setGuess: (role: Role, value: number | null) => void;
  submitGuess: () => void;
  go: (screen: Screen) => void;
  refreshSave: () => void;
};

let connSeq = 0;

function emptyGuess(roles: Role[]): Guess {
  const g: Guess = {};
  for (const r of roles) g[r] = null;
  return g;
}

export const useGame = create<GameState>((set, get) => ({
  screen: "title",
  save: loadSave(),
  level: null,
  selectedId: null,
  connections: [],
  lastResult: null,
  guess: {},
  attemptsLeft: 3,
  lastCheck: null,

  refreshSave: () => set({ save: loadSave() }),

  go: (screen) => {
    unlockAudio();
    set({ screen });
  },

  startLevel: (id) => {
    unlockAudio();
    const level = getLevel(id);
    connSeq = 0;
    set({
      level,
      screen: "play",
      selectedId: null,
      connections: [],
      lastResult: null,
      guess: emptyGuess(level.roles),
      attemptsLeft: 3,
      lastCheck: null,
    });
  },

  selectAvatar: (id) => {
    const { selectedId, level } = get();
    if (!level) return;
    if (!selectedId || selectedId === id) {
      set({ selectedId: selectedId === id ? null : id });
      return;
    }
    get().connectPair(selectedId, id);
  },

  connectPair: (aId, bId) => {
    const { level, connections } = get();
    if (!level || aId === bId) return;
    if (connections.length >= level.budget) return;
    if (connections.some((c) => pairKey(c.aId, c.bId) === pairKey(aId, bId))) {
      set({ selectedId: null });
      return;
    }
    const avA = level.avatars.find((a) => a.id === aId);
    const avB = level.avatars.find((a) => a.id === bId);
    if (!avA || !avB) return;
    const echo = avA.role === avB.role;
    const score = echo ? 0 : connectionScore(avA.role, avB.role);
    const conn: Connection = {
      id: `c${++connSeq}`,
      aId,
      bId,
      typeA: avA.role,
      typeB: avB.role,
      score,
      echo,
    };
    sfxConnect(echo ? -1 : score);
    set({
      connections: [...connections, conn],
      lastResult: conn,
      selectedId: null,
      screen: "result",
    });
  },

  undo: () => {
    const { connections, screen, level } = get();
    if (!level || connections.length === 0) return;
    if (screen === "decode" || screen === "win" || screen === "fail") return;
    set({
      connections: connections.slice(0, -1),
      lastResult: null,
      selectedId: null,
      screen: "play",
    });
  },

  dismissResult: () => {
    const { level, connections } = get();
    if (!level) return;
    const locked = isLocked(level, connections);
    if (locked) sfxLock();
    const spent = connections.length >= level.budget;
    if (spent && !locked) {
      set({ screen: "noisy", lastResult: null });
      return;
    }
    set({ screen: "play", lastResult: null });
  },

  openDecode: () => {
    const { level, connections } = get();
    if (!level) return;
    if (!isLocked(level, connections)) return;
    set({ screen: "decode" });
  },

  setGuess: (role, value) => {
    const guess = { ...get().guess };
    if (value == null) {
      guess[role] = null;
      set({ guess });
      return;
    }
    for (const k of Object.keys(guess) as Role[]) {
      if (k !== role && guess[k] === value) guess[k] = null;
    }
    guess[role] = value;
    set({ guess });
  },

  submitGuess: () => {
    const { level, guess, attemptsLeft } = get();
    if (!level) return;
    const rows: CheckRow[] = level.roles.map((role) => ({
      role,
      ok: guess[role] === ROLE_VALUES[role],
    }));
    const all = rows.every((r) => r.ok);
    if (all) {
      sfxOk();
      const used = 4 - attemptsLeft;
      const save = markCleared(level.id, used);
      set({ lastCheck: rows, screen: "win", save, attemptsLeft: attemptsLeft - 1 });
      return;
    }
    const left = attemptsLeft - 1;
    sfxBad();
    if (left <= 0) {
      set({ lastCheck: rows, attemptsLeft: 0, screen: "fail" });
      return;
    }
    set({ lastCheck: rows, attemptsLeft: left });
  },
}));

export function revealedIds(connections: Connection[]): Set<string> {
  const s = new Set<string>();
  for (const c of connections) {
    s.add(c.aId);
    s.add(c.bId);
  }
  return s;
}
