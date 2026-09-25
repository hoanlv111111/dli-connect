import type { Connection, Level, Role } from "./types";

function permute<T>(input: T[]): T[][] {
  const a = input.slice();
  const n = a.length;
  const out: T[][] = [a.slice()];
  const c = new Array(n).fill(0);
  let i = 0;
  while (i < n) {
    if (c[i] < i) {
      const j = i % 2 === 0 ? 0 : c[i];
      const tmp = a[j];
      a[j] = a[i];
      a[i] = tmp;
      out.push(a.slice());
      c[i] += 1;
      i = 0;
    } else {
      c[i] = 0;
      i += 1;
    }
  }
  return out;
}

export type Equation = { a: Role; b: Role; s: number };

export function equationsFrom(connections: Connection[]): Equation[] {
  return connections
    .filter((c) => !c.echo && c.typeA !== c.typeB)
    .map((c) => ({ a: c.typeA, b: c.typeB, s: c.score }));
}

export function countSolutions(
  roles: Role[],
  chips: number[],
  eqs: Equation[],
): number {
  if (eqs.length === 0) return permute(chips).length;
  let n = 0;
  for (const perm of permute(chips)) {
    const val: Record<string, number> = {};
    for (let i = 0; i < roles.length; i++) val[roles[i]] = perm[i];
    let ok = true;
    for (const e of eqs) {
      if (val[e.a] + val[e.b] !== e.s) {
        ok = false;
        break;
      }
    }
    if (ok) n += 1;
  }
  return n;
}

export function heteroPairCount(connections: Connection[]): number {
  const s = new Set<string>();
  for (const c of connections) {
    if (c.echo || c.typeA === c.typeB) continue;
    s.add(pairKey(c.typeA, c.typeB));
  }
  return s.size;
}

export function isLocked(level: Level, connections: Connection[]): boolean {
  if (heteroPairCount(connections) < level.minPairs) return false;
  return countSolutions(level.roles, level.chips, equationsFrom(connections)) === 1;
}

export function pairKey(a: string, b: string): string {
  return a < b ? `${a}::${b}` : `${b}::${a}`;
}
