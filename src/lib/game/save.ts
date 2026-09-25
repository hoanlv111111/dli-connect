import type { SaveData } from "./types";

const KEY = "signal-save-v1";
const VERSION = 1;

const EMPTY: SaveData = { version: VERSION, cleared: [], bestAttempts: {} };

export function loadSave(): SaveData {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw) as SaveData;
    if (parsed.version !== VERSION) return { ...EMPTY, ...parsed, version: VERSION };
    return {
      version: VERSION,
      cleared: Array.isArray(parsed.cleared) ? parsed.cleared : [],
      bestAttempts: parsed.bestAttempts ?? {},
    };
  } catch {
    return { ...EMPTY };
  }
}

export function writeSave(data: SaveData) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...data, version: VERSION }));
  } catch {
    /* private mode */
  }
}

export function markCleared(levelId: number, attemptsUsed: number) {
  const save = loadSave();
  if (!save.cleared.includes(levelId)) save.cleared.push(levelId);
  const prev = save.bestAttempts[String(levelId)];
  if (prev == null || attemptsUsed < prev) save.bestAttempts[String(levelId)] = attemptsUsed;
  writeSave(save);
  return save;
}
