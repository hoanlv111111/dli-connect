let ctx: AudioContext | null = null;

export function unlockAudio() {
  if (!ctx) ctx = new AudioContext({ latencyHint: "interactive" });
  if (ctx.state === "suspended") void ctx.resume();
}

function tone(
  freq: number,
  dur: number,
  type: OscillatorType = "sine",
  gain = 0.05,
) {
  if (!ctx) return;
  const t0 = ctx.currentTime;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(gain, t0);
  g.gain.exponentialRampToValueAtTime(0.0008, t0 + dur);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + dur);
}

export function sfxConnect(score: number) {
  unlockAudio();
  if (score >= 0) {
    tone(420, 0.09, "triangle", 0.04);
    tone(630, 0.14, "sine", 0.03);
  } else {
    tone(220, 0.12, "sine", 0.05);
    tone(164, 0.18, "triangle", 0.03);
  }
}

export function sfxLock() {
  unlockAudio();
  tone(520, 0.08, "triangle", 0.04);
  tone(780, 0.16, "sine", 0.03);
}

export function sfxOk() {
  unlockAudio();
  tone(523, 0.1, "sine", 0.05);
  tone(784, 0.18, "triangle", 0.04);
}

export function sfxBad() {
  unlockAudio();
  tone(196, 0.2, "sawtooth", 0.03);
}

export function sfxTap() {
  unlockAudio();
  tone(640, 0.04, "square", 0.02);
}
