export type Role = "Builder" | "Creator" | "Artist" | "Bot" | "Scam";

export type Avatar = {
  id: string;
  name: string;
  role: Role;
  bio: string;
};

export type Level = {
  id: 1 | 2 | 3;
  title: string;
  kicker: string;
  budget: number;
  minPairs: number;
  roles: Role[];
  chips: number[];
  avatars: Avatar[];
};

export type Connection = {
  id: string;
  aId: string;
  bId: string;
  typeA: Role;
  typeB: Role;
  score: number;
  echo: boolean;
};

export type SaveData = {
  version: number;
  cleared: number[];
  bestAttempts: Record<string, number>;
};
