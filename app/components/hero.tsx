import Image from "next/image";
import { IconArrow } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-20 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #E9E4FF 0%, transparent 60%)" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-40 top-64 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #FCEFE2 0%, transparent 60%)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[100dvh] max-w-[1280px] grid-cols-1 items-center gap-12 px-5 pb-24 pt-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pt-28">
        <div className="flex flex-col items-start">
          <span
            className="anim-rise inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-card px-3 py-1.5 text-[12px] text-ink-500"
            style={{ animationDelay: "0.05s" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full anim-breathe"
              style={{ background: "var(--verified)" }}
            />
            Roommate app · because who you live with matters
          </span>

          <h1
            className="anim-rise mt-5 max-w-[18ch] text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] text-ink-900 md:text-[64px]"
            style={{ animationDelay: "0.15s" }}
          >
            Roommates matched by{" "}
            <span className="relative inline-block">
              <span className="relative z-10">compatibility</span>
              <span
                className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.28em]"
                style={{ background: "var(--accent-wash)" }}
                aria-hidden
              />
            </span>
            , not vibes.
          </h1>

          <p
            className="anim-rise mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-ink-500"
            style={{ animationDelay: "0.25s" }}
          >
            Find Roomie rates every potential roommate on 5 real factors —
            budget, location, cleanliness, schedule, and lifestyle. You see
            the compatibility score before you ever reach out.
          </p>

          <div
            className="anim-rise mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.35s" }}
          >
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-[14px] font-medium text-white btn-tactile hover:bg-ink-700"
            >
              Download the app
              <IconArrow
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-card px-5 py-3 text-[14px] font-medium text-ink-900 btn-tactile hover:bg-ink-050"
            >
              See how matching works
            </a>
          </div>

          <div
            className="anim-rise mt-10 grid grid-cols-3 gap-8 border-t border-[color:var(--hairline)] pt-6"
            style={{ animationDelay: "0.5s" }}
          >
            <Stat value="5" label="match factors scored" />
            <Stat value="10+" label="cities across India" accent />
            <Stat value="100%" label="OTP-verified profiles" />
          </div>

          <a
            href="#preview"
            className="anim-rise mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 hover:shadow-md"
            style={{
              animationDelay: "0.6s",
              background: "var(--accent-wash)",
              color: "var(--accent-ink)",
              border: "1px solid rgba(124,111,224,0.25)",
            }}
          >
            <span>See every screen in the app</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden className="animate-bounce">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="relative h-[560px] md:h-[640px]">
          <div className="absolute inset-0 translate-y-6">
            <FloatingCards />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div
        className={`font-mono text-[22px] font-semibold tracking-tight ${
          accent ? "text-accent-ink" : "text-ink-900"
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-[11.5px] uppercase tracking-[0.1em] text-ink-400">
        {label}
      </div>
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  className,
  tilt,
  delay,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  tilt: number;
  delay: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`absolute anim-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <div
        className="anim-rise"
        style={{
          animationDelay: delay,
          transform: `rotate(${tilt}deg)`,
        }}
      >
        <div
          className="relative overflow-hidden rounded-[32px]"
          style={{
            width: 160,
            height: 326,
            border: "5px solid #1a1a22",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.08) inset, 0 32px 72px -12px rgba(17,17,26,0.32)",
          }}
        >
          {/* notch */}
          <div
            className="absolute left-1/2 top-2 z-10 -translate-x-1/2 rounded-full bg-[#1a1a22]"
            style={{ width: 56, height: 14 }}
          />
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="160px"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

function FloatingCards() {
  return (
    <div className="relative h-full w-full">
      <PhoneFrame
        src="/screen-discover.png"
        alt="Discover screen"
        className="left-[4%] top-[4%]"
        tilt={-5}
        delay="0.3s"
        priority
      />
      <PhoneFrame
        src="/screen-profile.png"
        alt="Profile screen"
        className="right-[2%] top-[22%]"
        tilt={6}
        delay="0.55s"
      />
      <PhoneFrame
        src="/screen-messages.png"
        alt="Messages screen"
        className="left-[28%] bottom-[0%]"
        tilt={-3}
        delay="0.8s"
      />
    </div>
  );
}
