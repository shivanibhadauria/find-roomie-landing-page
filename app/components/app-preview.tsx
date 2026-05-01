"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

const INTERVAL = 4000;
// Proper aspect ratio: 1344 × 2992 → width 240 → height = 240 * 2992/1344 = 534
const CARD_W = 240;
const CARD_H = 534;
const WHEEL_COOLDOWN = 600;

function deckStyle(pos: number, dir: 1 | -1): React.CSSProperties {
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
      transform: "translateX(calc(-50% + 13px)) translateY(20px) rotate(5deg) scale(0.955)",
      opacity: 0.78,
      zIndex: 8,
      pointerEvents: "auto",
    };
  }
  if (pos === 2) {
    return {
      transform: "translateX(calc(-50% - 10px)) translateY(36px) rotate(-3.5deg) scale(0.91)",
      opacity: 0.45,
      zIndex: 6,
      pointerEvents: "none",
    };
  }
  if (pos === -1) {
    const dx = dir === 1 ? -380 : 380;
    return {
      transform: `translateX(calc(-50% + ${dx}px)) translateY(-30px) rotate(${dir === 1 ? -22 : 22}deg) scale(0.82)`,
      opacity: 0,
      zIndex: 12,
      pointerEvents: "none",
    };
  }
  return {
    transform: "translateX(calc(-50% - 10px)) translateY(36px) rotate(-3.5deg) scale(0.90)",
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
  const sectionRef = useRef<HTMLElement>(null);
  const lastWheelTime = useRef(0);

  const next = useCallback(() => {
    setDir(1);
    setCurrent((c) => (c + 1) % SCREENS.length);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((c) => (c - 1 + SCREENS.length) % SCREENS.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  // Scroll-to-swipe: intercept wheel events when section is centred in viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime.current < WHEEL_COOLDOWN) {
        // Still in cooldown — block the scroll so the page doesn't jump
        e.preventDefault();
        return;
      }

      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const inView = Math.abs(sectionCenter - viewportCenter) < rect.height * 0.45;
      if (!inView) return;

      // At the boundaries, let the page scroll through naturally
      if (e.deltaY > 0 && current === SCREENS.length - 1) return;
      if (e.deltaY < 0 && current === 0) return;

      e.preventDefault();
      lastWheelTime.current = now;
      setPaused(true);

      if (e.deltaY > 0) next();
      else prev();
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, [next, prev, current]);

  const screen = SCREENS[current];

  return (
    <section
      ref={sectionRef}
      id="preview"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--bg-canvas) 0%, #ede9ff 46%, var(--bg-canvas) 100%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -z-10 opacity-40" style={{ top: "10%", left: "5%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, #c4baff 0%, transparent 70%)", filter: "blur(80px)" }} aria-hidden />
      <div className="pointer-events-none absolute -z-10 opacity-30" style={{ bottom: "8%", right: "4%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", filter: "blur(80px)" }} aria-hidden />

      <div
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-5 md:grid-cols-2 md:gap-20 md:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* ── Left: text + controls ── */}
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-card px-3 py-1.5 text-[12px] text-ink-500">
            <span className="h-1.5 w-1.5 rounded-full anim-breathe" style={{ background: "var(--accent)" }} />
            Inside the app
          </span>

          <h2 className="mt-5 text-[34px] font-semibold leading-[1.08] tracking-[-0.025em] text-ink-900 md:text-[46px]">
            Built to feel like home,{" "}
            <span className="text-accent-ink">right from the start</span>
          </h2>

          <p className="mt-5 text-[16px] leading-relaxed text-ink-500">
            From splash to your first match — every screen is designed around
            trust, compatibility, and clarity.
          </p>

          {/* Current screen info */}
          <div
            key={current}
            className="anim-rise mt-10 overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-card"
            style={{ animationDuration: "0.35s" }}
          >
            <div className="px-6 pt-6 pb-5">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[22px]"
                  style={{ background: "var(--accent-wash)" }}
                >
                  {screen.icon}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[17px] font-semibold text-ink-900">{screen.label}</h3>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: "var(--accent-wash)", color: "var(--accent-ink)" }}
                    >
                      {screen.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-500">{screen.description}</p>
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

          {/* Scroll hint */}
          <p className="mt-4 text-[12px] text-ink-400 flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
              <rect x="4" y="1" width="5" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="6.5" y1="3" x2="6.5" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M3 11h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Scroll over the phone or use arrows to browse
          </p>

          {/* Controls row */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous screen"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--hairline)] bg-card text-ink-500 transition-all duration-200 hover:border-[color:var(--accent)] hover:text-accent-ink hover:shadow-sm active:scale-95"
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-[7px]">
              {SCREENS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); setPaused(true); }}
                  aria-label={`Go to ${SCREENS[i].label}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: 5,
                    width: i === current ? 24 : 5,
                    background: i === current ? "var(--accent)" : "var(--ink-200)",
                    opacity: i === current ? 1 : 0.6,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next screen"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--hairline)] bg-card text-ink-500 transition-all duration-200 hover:border-[color:var(--accent)] hover:text-accent-ink hover:shadow-sm active:scale-95"
            >
              <ChevronRight />
            </button>

            <button
              onClick={() => { setDir(1); setCurrent(0); setPaused(false); }}
              aria-label="Restart"
              className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[color:var(--hairline)] bg-card px-3 py-1.5 text-[12px] font-medium text-ink-500 transition-all duration-200 hover:border-[color:var(--accent)] hover:text-accent-ink hover:shadow-sm active:scale-95"
            >
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M2 6.5a4.5 4.5 0 1 1 1.34 3.18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 9.5V6.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Restart
            </button>
          </div>
        </div>

        {/* ── Right: phone deck ── */}
        <div className="flex justify-center">
          <div
            className="relative select-none"
            style={{ width: CARD_W + 80, height: CARD_H + 60 }}
          >
            {/* Accent glow */}
            <div
              className="pointer-events-none absolute left-1/2 -translate-x-1/2"
              style={{ top: 100, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,224,0.28) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }}
              aria-hidden
            />

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
                    className="relative overflow-hidden rounded-[40px]"
                    style={{
                      width: CARD_W,
                      height: CARD_H,
                      border: "6px solid #1a1a22",
                      boxShadow: isActive
                        ? "0 0 0 1px rgba(255,255,255,0.1) inset, 0 48px 96px -16px rgba(17,17,26,0.42), 0 0 0 1.5px rgba(124,111,224,0.4)"
                        : "0 0 0 1px rgba(255,255,255,0.05) inset, 0 8px 24px -6px rgba(17,17,26,0.18)",
                    }}
                  >
                    {/* Dynamic Island */}
                    <div
                      className="absolute left-1/2 top-2.5 z-10 -translate-x-1/2 rounded-full bg-[#1a1a22]"
                      style={{ width: 80, height: 20 }}
                    />
                    <Image
                      src={s.src}
                      alt={s.label}
                      fill
                      className="object-cover object-top"
                      sizes="240px"
                      priority={i === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
