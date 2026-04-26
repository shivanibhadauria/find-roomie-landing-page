"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SCREENS = [
  {
    src: "/screen-splash.png",
    label: "Welcome",
    icon: "🏠",
    tag: "First look",
    description:
      "A warm first impression — your journey to finding the perfect roommate starts here.",
  },
  {
    src: "/screen-onboarding.png",
    label: "Onboarding",
    icon: "✨",
    tag: "Setup",
    description:
      "Tell us about your lifestyle, habits, and what matters most to you in a home.",
  },
  {
    src: "/screen-login.png",
    label: "Sign In",
    icon: "🔐",
    tag: "Auth",
    description:
      "Secure, simple sign-in to get you back to your matches in seconds.",
  },
  {
    src: "/screen-discover.png",
    label: "Discover",
    icon: "🔍",
    tag: "Browse",
    description:
      "Browse roommate profiles curated just for you — based on compatibility, location, and vibe.",
  },
  {
    src: "/screen-discover-together.png",
    label: "Find Together",
    icon: "👥",
    tag: "Groups",
    description:
      "Looking as a group? Team up and search for a shared space together.",
  },
  {
    src: "/screen-smart-feed.png",
    label: "Smart Feed",
    icon: "🤖",
    tag: "AI-powered",
    description:
      "AI-powered listings that learn from your preferences and surface the best matches first.",
  },
  {
    src: "/screen-messages.png",
    label: "Messages",
    icon: "💬",
    tag: "Chat",
    description:
      "Chat directly with potential roommates — no awkward cold calls needed.",
  },
  {
    src: "/screen-profile.png",
    label: "Your Profile",
    icon: "🪪",
    tag: "Identity",
    description:
      "Show your authentic self — your interests, schedule, and living style at a glance.",
  },
  {
    src: "/screen-find-together.png",
    label: "Match Detail",
    icon: "💜",
    tag: "Compatibility",
    description:
      "Deep-dive into compatibility — see shared values, habits, and lifestyle scores side by side.",
  },
];

const INTERVAL = 3500;
const CARD_W = 200;
const CARD_H = 410;

/* Position each card in the deck stack */
function deckStyle(pos: number, dir: 1 | -1): React.CSSProperties {
  // pos=0  → top card (active)
  // pos=1  → second card peeking behind
  // pos=2  → third card peeking further behind
  // pos=-1 → card flying out (exit)
  // rest   → hidden beneath the deck

  if (pos === 0) {
    return {
      transform: "translateX(-50%) translateY(0px) rotate(0deg) scale(1)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
    };
  }
  if (pos === 1) {
    return {
      transform: "translateX(calc(-50% + 11px)) translateY(18px) rotate(5deg) scale(0.955)",
      opacity: 0.78,
      zIndex: 8,
      pointerEvents: "auto",
    };
  }
  if (pos === 2) {
    return {
      transform: "translateX(calc(-50% - 9px)) translateY(32px) rotate(-3.5deg) scale(0.91)",
      opacity: 0.50,
      zIndex: 6,
      pointerEvents: "none",
    };
  }
  if (pos === -1) {
    // fly off in the direction of travel
    const dx = dir === 1 ? -340 : 340;
    return {
      transform: `translateX(calc(-50% + ${dx}px)) translateY(-30px) rotate(${dir === 1 ? -22 : 22}deg) scale(0.82)`,
      opacity: 0,
      zIndex: 12,
      pointerEvents: "none",
    };
  }
  // everything else: hide behind deck
  return {
    transform: "translateX(calc(-50% - 9px)) translateY(32px) rotate(-3.5deg) scale(0.90)",
    opacity: 0,
    zIndex: 4,
    pointerEvents: "none",
  };
}

function getPos(i: number, current: number, total: number) {
  let pos = i - current;
  const half = Math.floor(total / 2);
  if (pos > half) pos -= total;
  if (pos < -half) pos += total;
  return pos;
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M11 13.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AppPreview() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);

  const next = useCallback(() => {
    setDir(1);
    setCurrent((c) => (c + 1) % SCREENS.length);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((c) => (c - 1 + SCREENS.length) % SCREENS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const screen = SCREENS[current];

  return (
    <section id="preview" className="relative overflow-hidden py-24 md:py-28">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--bg-canvas) 0%, #ede9ff 46%, var(--bg-canvas) 100%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -z-10 opacity-40" style={{ top: "10%", left: "5%", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, #c4baff 0%, transparent 70%)", filter: "blur(72px)" }} aria-hidden />
      <div className="pointer-events-none absolute -z-10 opacity-30" style={{ bottom: "8%", right: "4%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", filter: "blur(72px)" }} aria-hidden />

      {/* Header */}
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mx-auto mb-16 max-w-[48ch] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-card px-3 py-1.5 text-[12px] text-ink-500">
            <span className="h-1.5 w-1.5 rounded-full anim-breathe" style={{ background: "var(--accent)" }} />
            Inside the app
          </span>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 md:text-[42px]">
            Built to feel like home,{" "}
            <span className="text-accent-ink">right from the start</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            From splash to your first match — every screen is designed around
            trust, compatibility, and clarity.
          </p>
        </div>
      </div>

      {/* Deck + controls */}
      <div
        className="relative mx-auto select-none"
        style={{ maxWidth: 760 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Accent glow under deck */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2"
          style={{ top: 80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,224,0.26) 0%, transparent 70%)", filter: "blur(52px)", zIndex: 0 }}
          aria-hidden
        />

        {/* Card deck */}
        <div
          className="relative flex justify-center"
          style={{ height: CARD_H + 50, zIndex: 1 }}
        >
          {SCREENS.map((s, i) => {
            const pos = getPos(i, current, SCREENS.length);
            const style = deckStyle(pos, dir);
            const isActive = pos === 0;

            return (
              <div
                key={s.src}
                onClick={() => pos === 1 && next()}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  width: CARD_W,
                  transition: "transform 0.52s cubic-bezier(0.4,0,0.2,1), opacity 0.52s ease",
                  cursor: pos === 1 ? "pointer" : "default",
                  ...style,
                }}
              >
                {/* Gradient ring on active */}
                {isActive && (
                  <div
                    className="absolute -inset-[5px] rounded-[41px] pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(124,111,224,0.55) 0%, rgba(167,139,250,0.25) 60%, transparent 100%)", zIndex: -1 }}
                  />
                )}

                {/* Phone frame */}
                <div
                  className="relative overflow-hidden rounded-[36px]"
                  style={{
                    width: CARD_W,
                    height: CARD_H,
                    border: "6px solid #1a1a22",
                    boxShadow: isActive
                      ? "0 0 0 1px rgba(255,255,255,0.1) inset, 0 48px 96px -16px rgba(17,17,26,0.42), 0 0 0 1.5px rgba(124,111,224,0.4)"
                      : "0 0 0 1px rgba(255,255,255,0.05) inset, 0 8px 24px -6px rgba(17,17,26,0.18)",
                  }}
                >
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2.5 z-10 -translate-x-1/2 rounded-full bg-[#1a1a22]" style={{ width: 70, height: 18 }} />
                  <Image
                    src={s.src}
                    alt={s.label}
                    fill
                    className="object-cover object-top"
                    sizes="200px"
                    priority={i === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls + description */}
        <div className="mt-8 flex items-center justify-center gap-4 px-5">
          <button
            onClick={prev}
            aria-label="Previous screen"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--hairline)] bg-card text-ink-500 transition-all duration-200 hover:border-[color:var(--accent)] hover:text-accent-ink hover:shadow-sm active:scale-95 diffusion"
          >
            <ChevronLeft />
          </button>

          {/* Description card */}
          <div
            key={current}
            className="anim-rise w-full max-w-[320px] overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-card diffusion"
            style={{ animationDuration: "0.4s" }}
          >
            <div className="px-5 pt-5 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[20px]" style={{ background: "var(--accent-wash)" }}>
                  {screen.icon}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-semibold text-ink-900">{screen.label}</h3>
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider" style={{ background: "var(--accent-wash)", color: "var(--accent-ink)" }}>
                      {screen.tag}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-ink-500">{screen.description}</p>
                </div>
              </div>
            </div>
            {/* Progress bar */}
            <div className="h-[3px] w-full" style={{ background: "var(--ink-100)" }}>
              <div
                key={`p-${current}`}
                style={{
                  height: "100%",
                  width: "0%",
                  background: "linear-gradient(90deg, var(--accent) 0%, #a78bfa 100%)",
                  borderRadius: 99,
                  animation: `progress-fill ${INTERVAL}ms linear forwards`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            </div>
          </div>

          <button
            onClick={next}
            aria-label="Next screen"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--hairline)] bg-card text-ink-500 transition-all duration-200 hover:border-[color:var(--accent)] hover:text-accent-ink hover:shadow-sm active:scale-95 diffusion"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots + restart on same row */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => { setDir(1); setCurrent(0); setPaused(false); }}
            aria-label="Watch from the beginning"
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--hairline)] bg-card px-3 py-1.5 text-[12px] font-medium text-ink-500 transition-all duration-200 hover:border-[color:var(--accent)] hover:text-accent-ink hover:shadow-sm active:scale-95 diffusion"
          >
            <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden>
              <path d="M2 6.5a4.5 4.5 0 1 1 1.34 3.18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2 9.5V6.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Restart
          </button>

          <div className="flex gap-[7px]">
            {SCREENS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                aria-label={`Go to ${SCREENS[i].label}`}
                className="rounded-full transition-all duration-300"
                style={{ height: 5, width: i === current ? 22 : 5, background: i === current ? "var(--accent)" : "var(--ink-200)", opacity: i === current ? 1 : 0.6 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
