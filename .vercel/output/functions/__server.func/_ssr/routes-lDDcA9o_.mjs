import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-lDDcA9o_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...parts) {
	return twMerge(parts.filter(Boolean).join(" "));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium select-none disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90",
			ghost: "bg-transparent text-fg border border-border hover:bg-bg-subtle",
			quiet: "bg-bg-subtle text-fg hover:bg-bg-elevated",
			danger: "bg-signal-neg/15 text-signal-neg border border-signal-neg/30"
		},
		size: {
			default: "h-11 px-5 text-sm rounded-sm",
			sm: "h-9 px-3 text-xs rounded-xs",
			lg: "h-12 px-6 text-sm rounded-md",
			icon: "size-11 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var ROLE_VALUES = {
	Builder: 20,
	Creator: 15,
	Artist: 10,
	Bot: -20,
	Scam: -50
};
var LEVELS = [
	{
		id: 1,
		title: "Three frequencies",
		kicker: "Learn the signal",
		budget: 4,
		roles: [
			"Builder",
			"Creator",
			"Scam"
		],
		chips: [
			20,
			15,
			-50
		],
		showBreakdown: true,
		avatars: [
			{
				id: "a1",
				name: "Alex",
				role: "Builder",
				bio: "building something cool"
			},
			{
				id: "a2",
				name: "Ren",
				role: "Builder",
				bio: "shipping tonight"
			},
			{
				id: "a3",
				name: "Mia",
				role: "Creator",
				bio: "gm everyone"
			},
			{
				id: "a4",
				name: "Kai",
				role: "Creator",
				bio: "just dropped a clip"
			},
			{
				id: "a5",
				name: "Sam",
				role: "Scam",
				bio: "10x incoming"
			},
			{
				id: "a6",
				name: "Vex",
				role: "Scam",
				bio: "guaranteed alpha"
			}
		]
	},
	{
		id: 2,
		title: "A fourth voice",
		kicker: "The formula stays hidden",
		budget: 6,
		roles: [
			"Builder",
			"Creator",
			"Artist",
			"Scam"
		],
		chips: [
			20,
			15,
			10,
			-50
		],
		showBreakdown: false,
		avatars: [
			{
				id: "b1",
				name: "Alex",
				role: "Builder",
				bio: "shipping the next build"
			},
			{
				id: "b2",
				name: "Ren",
				role: "Builder",
				bio: "quiet but ships"
			},
			{
				id: "b3",
				name: "Mia",
				role: "Creator",
				bio: "gm, new clip later"
			},
			{
				id: "b4",
				name: "Kai",
				role: "Creator",
				bio: "reply guy energy"
			},
			{
				id: "b5",
				name: "Jules",
				role: "Artist",
				bio: "sticker drop tonight"
			},
			{
				id: "b6",
				name: "Park",
				role: "Artist",
				bio: "painted the logo in leaves"
			},
			{
				id: "b7",
				name: "Sam",
				role: "Scam",
				bio: "10x incoming"
			},
			{
				id: "b8",
				name: "Vex",
				role: "Scam",
				bio: "dm me for the call"
			}
		]
	},
	{
		id: 3,
		title: "Full network",
		kicker: "Lock every frequency",
		budget: 8,
		roles: [
			"Builder",
			"Creator",
			"Artist",
			"Bot",
			"Scam"
		],
		chips: [
			20,
			15,
			10,
			-20,
			-50
		],
		showBreakdown: false,
		avatars: [
			{
				id: "c1",
				name: "Alex",
				role: "Builder",
				bio: "building something cool"
			},
			{
				id: "c2",
				name: "Ren",
				role: "Builder",
				bio: "just pushed"
			},
			{
				id: "c3",
				name: "Mia",
				role: "Creator",
				bio: "gm everyone"
			},
			{
				id: "c4",
				name: "Kai",
				role: "Creator",
				bio: "check my latest clip"
			},
			{
				id: "c5",
				name: "Jules",
				role: "Artist",
				bio: "new sticker drop"
			},
			{
				id: "c6",
				name: "Park",
				role: "Artist",
				bio: "watercolor Dili"
			},
			{
				id: "c7",
				name: "Nova",
				role: "Bot",
				bio: "synergizing value streams"
			},
			{
				id: "c8",
				name: "Unit",
				role: "Bot",
				bio: "let's hop off-platform"
			},
			{
				id: "c9",
				name: "Sam",
				role: "Scam",
				bio: "10x incoming"
			},
			{
				id: "c10",
				name: "Vex",
				role: "Scam",
				bio: "guaranteed alpha"
			}
		]
	}
];
function getLevel(id) {
	const level = LEVELS.find((l) => l.id === id);
	if (!level) throw new Error(`Unknown level ${id}`);
	return level;
}
function connectionScore(a, b) {
	return (ROLE_VALUES[a] ?? 0) + (ROLE_VALUES[b] ?? 0);
}
function circleSlots(n) {
	const cx = 50;
	const cy = 50;
	const r = n >= 10 ? 40 : n >= 8 ? 38 : 36;
	return Array.from({ length: n }, (_, i) => {
		const t = -Math.PI / 2 + 2 * Math.PI * i / n;
		return {
			x: cx + r * Math.cos(t),
			y: cy + r * Math.sin(t)
		};
	});
}
function permute(input) {
	const a = input.slice();
	const n = a.length;
	const out = [a.slice()];
	const c = new Array(n).fill(0);
	let i = 0;
	while (i < n) if (c[i] < i) {
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
	return out;
}
function equationsFrom(connections) {
	return connections.map((c) => ({
		a: c.typeA,
		b: c.typeB,
		s: c.score
	}));
}
function countSolutions(roles, chips, eqs) {
	if (eqs.length === 0) return permute(chips).length;
	let n = 0;
	for (const perm of permute(chips)) {
		const val = {};
		for (let i = 0; i < roles.length; i++) val[roles[i]] = perm[i];
		let ok = true;
		for (const e of eqs) if (val[e.a] + val[e.b] !== e.s) {
			ok = false;
			break;
		}
		if (ok) n += 1;
	}
	return n;
}
function isUnique(roles, chips, connections) {
	return countSolutions(roles, chips, equationsFrom(connections)) === 1;
}
function pairKey(a, b) {
	return a < b ? `${a}::${b}` : `${b}::${a}`;
}
var KEY = "signal-save-v1";
var VERSION = 1;
var EMPTY = {
	version: VERSION,
	cleared: [],
	bestAttempts: {}
};
function loadSave() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return { ...EMPTY };
		const parsed = JSON.parse(raw);
		if (parsed.version !== VERSION) return {
			...EMPTY,
			...parsed,
			version: VERSION
		};
		return {
			version: VERSION,
			cleared: Array.isArray(parsed.cleared) ? parsed.cleared : [],
			bestAttempts: parsed.bestAttempts ?? {}
		};
	} catch {
		return { ...EMPTY };
	}
}
function writeSave(data) {
	try {
		localStorage.setItem(KEY, JSON.stringify({
			...data,
			version: VERSION
		}));
	} catch {}
}
function markCleared(levelId, attemptsUsed) {
	const save = loadSave();
	if (!save.cleared.includes(levelId)) save.cleared.push(levelId);
	const prev = save.bestAttempts[String(levelId)];
	if (prev == null || attemptsUsed < prev) save.bestAttempts[String(levelId)] = attemptsUsed;
	writeSave(save);
	return save;
}
var ctx = null;
function unlockAudio() {
	if (!ctx) ctx = new AudioContext({ latencyHint: "interactive" });
	if (ctx.state === "suspended") ctx.resume();
}
function tone(freq, dur, type = "sine", gain = .05) {
	if (!ctx) return;
	const t0 = ctx.currentTime;
	const osc = ctx.createOscillator();
	const g = ctx.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, t0);
	g.gain.setValueAtTime(gain, t0);
	g.gain.exponentialRampToValueAtTime(8e-4, t0 + dur);
	osc.connect(g);
	g.connect(ctx.destination);
	osc.start(t0);
	osc.stop(t0 + dur);
}
function sfxConnect(score) {
	unlockAudio();
	if (score >= 0) {
		tone(420, .09, "triangle", .04);
		tone(630, .14, "sine", .03);
	} else {
		tone(220, .12, "sine", .05);
		tone(164, .18, "triangle", .03);
	}
}
function sfxLock() {
	unlockAudio();
	tone(520, .08, "triangle", .04);
	tone(780, .16, "sine", .03);
}
function sfxOk() {
	unlockAudio();
	tone(523, .1, "sine", .05);
	tone(784, .18, "triangle", .04);
}
function sfxBad() {
	unlockAudio();
	tone(196, .2, "sawtooth", .03);
}
var connSeq = 0;
function emptyGuess(roles) {
	const g = {};
	for (const r of roles) g[r] = null;
	return g;
}
var useGame = create((set, get) => ({
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
			lastCheck: null
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
		const score = connectionScore(avA.role, avB.role);
		const conn = {
			id: `c${++connSeq}`,
			aId,
			bId,
			typeA: avA.role,
			typeB: avB.role,
			score
		};
		const next = [...connections, conn];
		sfxConnect(score);
		set({
			connections: next,
			lastResult: conn,
			selectedId: null,
			screen: "result"
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
			screen: "play"
		});
	},
	dismissResult: () => {
		const { level, connections } = get();
		if (!level) return;
		const unique = isUnique(level.roles, level.chips, connections);
		if (unique) sfxLock();
		if (connections.length >= level.budget && !unique) {
			set({
				screen: "noisy",
				lastResult: null
			});
			return;
		}
		set({
			screen: "play",
			lastResult: null
		});
	},
	openDecode: () => {
		const { level, connections } = get();
		if (!level) return;
		if (!isUnique(level.roles, level.chips, connections)) return;
		set({ screen: "decode" });
	},
	setGuess: (role, value) => {
		const guess = { ...get().guess };
		if (value == null) {
			guess[role] = null;
			set({ guess });
			return;
		}
		for (const k of Object.keys(guess)) if (k !== role && guess[k] === value) guess[k] = null;
		guess[role] = value;
		set({ guess });
	},
	submitGuess: () => {
		const { level, guess, attemptsLeft } = get();
		if (!level) return;
		const rows = level.roles.map((role) => ({
			role,
			ok: guess[role] === ROLE_VALUES[role]
		}));
		if (rows.every((r) => r.ok)) {
			sfxOk();
			const used = 4 - attemptsLeft;
			set({
				lastCheck: rows,
				screen: "win",
				save: markCleared(level.id, used),
				attemptsLeft: attemptsLeft - 1
			});
			return;
		}
		const left = attemptsLeft - 1;
		sfxBad();
		if (left <= 0) {
			set({
				lastCheck: rows,
				attemptsLeft: 0,
				screen: "fail"
			});
			return;
		}
		set({
			lastCheck: rows,
			attemptsLeft: left
		});
	}
}));
function revealedIds(connections) {
	const s = /* @__PURE__ */ new Set();
	for (const c of connections) {
		s.add(c.aId);
		s.add(c.bId);
	}
	return s;
}
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4 py-5 sm:px-6 sm:py-8",
			children
		})
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase",
		children
	});
}
function Panel({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-xl border border-border bg-bg-elevated p-5 sm:p-6 ${className}`,
		children
	});
}
function DecodeScreen() {
	const level = useGame((s) => s.level);
	const guess = useGame((s) => s.guess);
	const setGuess = useGame((s) => s.setGuess);
	const submitGuess = useGame((s) => s.submitGuess);
	const attemptsLeft = useGame((s) => s.attemptsLeft);
	const lastCheck = useGame((s) => s.lastCheck);
	const go = useGame((s) => s.go);
	if (!level) return null;
	const used = new Set(Object.values(guess).filter((v) => v != null));
	const ready = level.roles.every((r) => guess[r] != null);
	const checkMap = new Map(lastCheck?.map((r) => [r.role, r.ok]) ?? []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Decode the network" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-medium tracking-tight",
						children: "Assign the values"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-md text-sm leading-relaxed text-fg-muted",
						children: "Each role carries one number. Every chip is used once."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tabular-nums text-fg-subtle",
					children: [attemptsLeft, " left"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: level.roles.map((role) => {
					const mark = checkMap.get(role);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-bg-elevated p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: role
							}), mark != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("font-mono text-xs", mark ? "text-signal-pos" : "text-signal-neg"),
								children: mark ? "Match" : "Off"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: level.chips.map((chip) => {
								const selected = guess[role] === chip;
								const taken = used.has(chip) && !selected;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: taken,
									onClick: () => setGuess(role, selected ? null : chip),
									className: cn("h-10 min-w-14 rounded-sm border px-3 font-mono text-sm tabular-nums", selected ? "border-accent bg-accent text-accent-fg" : "border-border bg-bg-subtle text-fg", taken && "opacity-30"),
									children: chip > 0 ? `+${chip}` : chip
								}, chip);
							})
						})]
					}, role);
				})
			}),
			lastCheck && !lastCheck.every((r) => r.ok) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-fg-muted",
				children: [
					"Not quite. ",
					lastCheck.filter((r) => r.ok).length,
					" / ",
					level.roles.length,
					" ",
					"correct. Try again."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => go("play"),
					children: "Board"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					disabled: !ready,
					onClick: submitGuess,
					children: "Submit"
				})]
			})
		]
	}) });
}
function WinScreen() {
	const level = useGame((s) => s.level);
	const startLevel = useGame((s) => s.startLevel);
	const go = useGame((s) => s.go);
	const connections = useGame((s) => s.connections);
	if (!level) return null;
	const next = level.id < 3 ? level.id + 1 : null;
	const pos = connections.filter((c) => c.score >= 0).reduce((s, c) => s + c.score, 0);
	const neg = connections.filter((c) => c.score < 0).reduce((s, c) => s + c.score, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col justify-center gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Network decoded" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-medium tracking-tight",
				children: level.title
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: level.roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-md border border-border bg-bg-elevated px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: role
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-sm tabular-nums text-fg-muted",
						children: [ROLE_VALUES[role] > 0 ? "+" : "", ROLE_VALUES[role]]
					})]
				}, role))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-fg-subtle",
				children: [
					"Positive wires ",
					pos > 0 ? "+" : "",
					pos,
					" · Negative wires ",
					neg,
					" · Total ",
					pos + neg
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:max-w-xs",
				children: [next != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => startLevel(next),
					children: "Next network"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => go("select"),
					children: "All networks"
				})]
			})
		]
	}) });
}
function FailScreen() {
	const level = useGame((s) => s.level);
	const startLevel = useGame((s) => s.startLevel);
	const go = useGame((s) => s.go);
	if (!level) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col justify-center gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Unsolved" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-medium tracking-tight",
				children: "The network remains unsolved"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm leading-relaxed text-fg-muted",
				children: "Three attempts used. The values stay hidden. Run the board again."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => startLevel(level.id),
					children: "Retry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => go("select"),
					children: "Leave"
				})]
			})
		]
	}) });
}
function NoisyScreen() {
	const level = useGame((s) => s.level);
	const startLevel = useGame((s) => s.startLevel);
	const undo = useGame((s) => s.undo);
	const go = useGame((s) => s.go);
	if (!level) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col justify-center gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Not enough signal" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-medium tracking-tight",
				children: "Network too noisy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm leading-relaxed text-fg-muted",
				children: "Those wires did not lock unique values. Undo the last connection or restart the board."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:max-w-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: undo,
						children: "Undo last wire"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => startLevel(level.id),
						children: "Restart"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => go("select"),
						children: "Leave"
					})
				]
			})
		]
	}) });
}
var STEPS = [
	{
		n: "01",
		t: "Connect",
		d: "Tap two people. Each has a hidden role. After the wire lands, both roles are revealed."
	},
	{
		n: "02",
		t: "Observe",
		d: "Every connection returns a score. In the first network, you also see the addition. Later, only the total."
	},
	{
		n: "03",
		t: "Lock",
		d: "Each role carries one value. The score is the sum of the two. Independent wires lock the system."
	},
	{
		n: "04",
		t: "Decode",
		d: "Assign each role a chip. Every number is used once. Three attempts. Checkmarks, not the answer key."
	}
];
function HowScreen() {
	const go = useGame((s) => s.go);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Briefing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: "How it works"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-fg-subtle",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: s.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-fg-muted",
						children: s.d
					})] })]
				}, s.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => go("title"),
					children: "Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => go("select"),
					children: "Choose a network"
				})]
			})
		]
	}) });
}
function LevelSelect() {
	const go = useGame((s) => s.go);
	const startLevel = useGame((s) => s.startLevel);
	const save = useGame((s) => s.save);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Networks" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: "Select a board"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: LEVELS.map((level, i) => {
					const locked = i > 0 && !save.cleared.includes(LEVELS[i - 1].id);
					const cleared = save.cleared.includes(level.id);
					const best = save.bestAttempts[String(level.id)];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: locked,
						onClick: () => startLevel(level.id),
						className: "text-left disabled:opacity-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs text-fg-subtle",
									children: ["Level ", level.id]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-base font-medium",
									children: level.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-fg-muted",
									children: level.kicker
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "shrink-0 text-right font-mono text-xs text-fg-subtle",
								children: locked ? "Locked" : cleared ? `Cleared · ${best ?? "—"} att.` : `${level.budget} wires`
							})]
						})
					}, level.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => go("title"),
					children: "Back"
				})
			})
		]
	}) });
}
function PlayBoard() {
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
	const slots = (0, import_react.useMemo)(() => level ? circleSlots(level.avatars.length) : [], [level]);
	const pos = (0, import_react.useMemo)(() => {
		const map = {};
		if (!level) return map;
		level.avatars.forEach((a, i) => {
			map[a.id] = slots[i];
		});
		return map;
	}, [level, slots]);
	if (!level) return null;
	const revealed = revealedIds(connections);
	const unique = isUnique(level.roles, level.chips, connections);
	const remaining = level.budget - connections.length;
	const usedPairs = new Set(connections.map((c) => pairKey(c.aId, c.bId)));
	const selected = level.avatars.find((a) => a.id === selectedId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 px-4 py-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-xs text-fg-muted hover:text-fg",
						onClick: () => go("select"),
						children: "Leave"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: [
							"Level ",
							level.id,
							" · ",
							level.title
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-xs tabular-nums text-fg-muted",
						children: [
							remaining,
							" wire",
							remaining === 1 ? "" : "s"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-2xl flex-1 px-3 pb-2 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto aspect-square w-full max-w-[520px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "absolute inset-0 h-full w-full",
						viewBox: "0 0 100 100",
						"aria-hidden": true,
						children: connections.map((c) => {
							const a = pos[c.aId];
							const b = pos[c.bId];
							if (!a || !b) return null;
							const posScore = c.score >= 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: a.x,
								y1: a.y,
								x2: b.x,
								y2: b.y,
								stroke: posScore ? "var(--color-signal-pos)" : "var(--color-signal-neg)",
								strokeWidth: "0.55",
								vectorEffect: "non-scaling-stroke",
								opacity: "0.85"
							}, c.id);
						})
					}), level.avatars.map((av) => {
						const p = pos[av.id];
						const isSel = selectedId === av.id;
						const known = revealed.has(av.id);
						const blocked = selectedId != null && selectedId !== av.id && usedPairs.has(pairKey(selectedId, av.id));
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: blocked,
							onClick: () => selectAvatar(av.id),
							style: {
								left: `${p.x}%`,
								top: `${p.y}%`
							},
							className: cn("absolute flex w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 sm:w-20", blocked && "opacity-30"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex size-11 items-center justify-center rounded-full border text-sm font-medium sm:size-12", isSel ? "border-accent bg-accent text-accent-fg" : known ? "border-border-strong bg-bg-elevated text-fg" : "border-border bg-bg-subtle text-fg"),
									children: av.name.slice(0, 1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "max-w-full truncate text-center text-[11px] font-medium leading-none",
									children: av.name
								}),
								known && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "max-w-full truncate text-center text-[10px] leading-none text-fg-subtle",
									children: av.role
								})
							]
						}, av.id);
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "space-y-3 px-4 pb-6 pt-2 sm:px-6",
				children: [
					unique && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center font-mono text-xs tracking-wide text-lock",
						children: "Signal lock · the values are determined"
					}),
					selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-xs text-fg-muted",
						children: [
							selected.name,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-fg-subtle",
								children: [
									" ",
									"— ",
									revealed.has(selected.id) ? selected.role : selected.bio
								]
							}),
							" · tap another person"
						]
					}),
					!selected && connections.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-fg-subtle",
						children: "Tap two people to draw a wire."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryStrip, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "flex-1",
							disabled: connections.length === 0,
							onClick: undo,
							children: "Undo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							disabled: !unique,
							onClick: openDecode,
							children: "Decode"
						})]
					})
				]
			}),
			screen === "result" && lastResult && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultSheet, {
				levelShow: level.showBreakdown,
				result: lastResult,
				names: Object.fromEntries(level.avatars.map((a) => [a.id, a.name])),
				onContinue: dismissResult
			})
		]
	});
}
function HistoryStrip() {
	const connections = useGame((s) => s.connections);
	const level = useGame((s) => s.level);
	if (!level || connections.length === 0) return null;
	const names = Object.fromEntries(level.avatars.map((a) => [a.id, a.name]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2 overflow-x-auto pb-1",
		children: connections.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shrink-0 rounded-sm border border-border bg-bg-elevated px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[11px] text-fg-muted",
				children: [
					names[c.aId],
					" · ",
					c.typeA,
					" — ",
					names[c.bId],
					" · ",
					c.typeB
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: cn("font-mono text-xs tabular-nums", c.score >= 0 ? "text-signal-pos" : "text-signal-neg"),
				children: [c.score > 0 ? "+" : "", c.score]
			})]
		}, c.id))
	});
}
function ResultSheet({ result, names, levelShow, onContinue }) {
	const va = result.typeA === "Builder" ? 20 : result.typeA === "Creator" ? 15 : result.typeA === "Artist" ? 10 : result.typeA === "Bot" ? -20 : -50;
	const vb = result.typeB === "Builder" ? 20 : result.typeB === "Creator" ? 15 : result.typeB === "Artist" ? 10 : result.typeB === "Bot" ? -20 : -50;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-20 flex items-end justify-center bg-bg/70 p-4 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-xl border border-border bg-bg-elevated p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Connection result" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-fg",
					children: [
						names[result.aId],
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-fg-muted",
							children: [
								"(",
								result.typeA,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg-subtle",
							children: " · "
						}),
						names[result.bId],
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-fg-muted",
							children: [
								"(",
								result.typeB,
								")"
							]
						})
					]
				}),
				levelShow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-mono text-sm tabular-nums text-fg-muted",
					children: [
						va,
						" + ",
						vb
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("mt-2 font-mono text-3xl tabular-nums", result.score >= 0 ? "text-signal-pos" : "text-signal-neg"),
					children: [result.score > 0 ? "+" : "", result.score]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6 w-full",
					onClick: onContinue,
					children: "Continue"
				})
			]
		})
	});
}
function TitleScreen() {
	const go = useGame((s) => s.go);
	const hasProgress = useGame((s) => s.save).cleared.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col justify-center gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Social intelligence" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl font-medium tracking-tight text-fg sm:text-6xl",
					children: "SIGNAL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-base leading-relaxed text-fg-muted",
					children: "Connect people. Read the score. Decode the network."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:max-w-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				onClick: () => go("select"),
				children: hasProgress ? "Continue" : "Play"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "lg",
				onClick: () => go("how"),
				children: "How it works"
			})]
		})]
	}) });
}
function Home() {
	const screen = useGame((s) => s.screen);
	if (screen === "title") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {});
	if (screen === "how") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowScreen, {});
	if (screen === "select") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelSelect, {});
	if (screen === "play" || screen === "result") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayBoard, {});
	if (screen === "decode") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecodeScreen, {});
	if (screen === "win") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {});
	if (screen === "fail") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FailScreen, {});
	if (screen === "noisy") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoisyScreen, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {});
}
//#endregion
export { Home as component };
