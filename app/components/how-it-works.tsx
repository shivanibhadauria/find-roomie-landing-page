import { IconLock, IconMoon, IconPin, IconSliders, IconWallet } from "./icons";

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="md:sticky md:top-24 md:self-start">
            <div className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink-400">
              01 · How matching works
            </div>
            <h2 className="mt-4 max-w-[16ch] text-[36px] font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-[48px]">
              Seven signals.{" "}
              <span className="text-ink-400">One honest number.</span>
            </h2>
            <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-ink-500">
              Every profile pair is scored overnight — not in real time, not on
              every scroll. You see the same compatibility number the algorithm
              sees, with the breakdown underneath.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
            <ScoreBreakdownCard />
            <PulseCard />
            <MutualChatCard />
            <CityCoverageCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  children,
  className = "",
  span = "md:col-span-6",
}: {
  children: React.ReactNode;
  className?: string;
  span?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-card p-6 hairline diffusion md:p-7 ${span} ${className}`}
    >
      {children}
    </div>
  );
}

function ScoreBreakdownCard() {
  const rows = [
    { label: "Budget", weight: 25, fill: 0.94 },
    { label: "Location", weight: 20, fill: 0.88 },
    { label: "Cleanliness", weight: 15, fill: 0.92 },
    { label: "Schedule", weight: 15, fill: 0.71 },
    { label: "Lifestyle", weight: 10, fill: 0.86 },
    { label: "Lease", weight: 10, fill: 0.95 },
    { label: "Guests", weight: 5, fill: 0.6 },
  ];
  return (
    <Card span="md:col-span-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400">
            Compatibility breakdown
          </div>
          <div className="mt-1 text-[15.5px] font-semibold tracking-tight text-ink-900">
            Aanya ↔ Rohan
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-mono text-[26px] font-semibold text-ink-900 leading-none">
              87
            </div>
            <div className="mt-1 text-[10.5px] uppercase tracking-[0.1em] text-ink-400">
              overall
            </div>
          </div>
          <span className="rounded-full bg-accent-wash px-2 py-1 text-[10.5px] font-medium text-accent-ink">
            Room match
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-3.5">
        {rows.map((r, i) => (
          <div key={r.label} className="grid grid-cols-[110px_1fr_42px] items-center gap-3">
            <div className="text-[12.5px] text-ink-700">{r.label}</div>
            <div className="relative h-[6px] overflow-hidden rounded-full bg-ink-100">
              <div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  width: `${r.fill * 100}%`,
                  background:
                    i < 2 ? "var(--accent)" : i < 4 ? "var(--accent-ink)" : "#1C1C1E",
                  transform: "translate3d(0,0,0)",
                  animation: `rise 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.07}s both`,
                }}
              />
            </div>
            <div className="text-right font-mono text-[12px] text-ink-500">
              {r.weight}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function PulseCard() {
  return (
    <Card span="md:col-span-3">
      <IconWallet size={22} className="text-accent-ink" />
      <div className="mt-6 text-[15.5px] font-semibold tracking-tight text-ink-900">
        Budget, not bravado.
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
        Tell us a range in ₹, not a vibe. We weight it at 25% because it&apos;s
        the single biggest reason flatmates fall out.
      </p>
      <div className="mt-6 rounded-2xl bg-ink-050 p-4">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.1em] text-ink-400">
          <span>Your range</span>
          <span>₹12,000 – ₹18,500</span>
        </div>
        <div className="relative mt-3 h-2 rounded-full bg-ink-200">
          <div
            className="absolute inset-y-0 rounded-full"
            style={{ left: "18%", right: "22%", background: "var(--accent-ink)" }}
          />
          <div
            className="absolute -top-1 h-4 w-4 rounded-full border-2 border-accent-ink bg-white"
            style={{ left: "18%" }}
          />
          <div
            className="absolute -top-1 h-4 w-4 rounded-full border-2 border-accent-ink bg-white"
            style={{ right: "22%" }}
          />
        </div>
      </div>
    </Card>
  );
}

function MutualChatCard() {
  return (
    <Card span="md:col-span-3">
      <IconLock size={22} className="text-accent-ink" />
      <div className="mt-6 text-[15.5px] font-semibold tracking-tight text-ink-900">
        Chat unlocks on mutual consent.
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
        Both of you must tap Connect before messages open. Phone numbers never
        leave our database.
      </p>

      <div className="mt-6 space-y-2.5">
        <div className="flex items-center gap-2 rounded-xl bg-ink-050 px-3 py-2.5">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--verified)" }}
          />
          <span className="text-[12.5px] text-ink-700">
            You requested · Rohan accepted
          </span>
        </div>
        <div className="relative flex items-center gap-2 rounded-xl px-3 py-2.5 anim-shimmer overflow-hidden"
          style={{ background: "var(--accent-wash)" }}
        >
          <IconLock size={13} className="text-accent-ink" />
          <span className="text-[12.5px] font-medium text-accent-ink">
            Chat unlocked · 2s ago
          </span>
        </div>
      </div>
    </Card>
  );
}

function CityCoverageCard() {
  const cities = [
    { name: "Koramangala", count: 1284 },
    { name: "HSR Layout", count: 967 },
    { name: "Indiranagar", count: 721 },
    { name: "Powai", count: 592 },
    { name: "Andheri West", count: 488 },
    { name: "Baner", count: 412 },
    { name: "Hauz Khas", count: 355 },
    { name: "Noida 62", count: 318 },
    { name: "Gurugram 42", count: 277 },
    { name: "Kothrud", count: 221 },
  ];
  const doubled = [...cities, ...cities];

  return (
    <Card span="md:col-span-6" className="!p-0">
      <div className="flex items-start justify-between p-7 pb-0">
        <div>
          <IconPin size={22} className="text-accent-ink" />
          <div className="mt-6 text-[15.5px] font-semibold tracking-tight text-ink-900">
            Where we&apos;re live.
          </div>
          <p className="mt-2 max-w-[40ch] text-[13.5px] leading-relaxed text-ink-500">
            Neighbourhood-level matching — not city-level. Koramangala 4B is not
            Koramangala 8.
          </p>
        </div>
        <div className="hidden items-center gap-2 rounded-full bg-ink-050 px-3 py-1.5 text-[11.5px] font-mono uppercase tracking-[0.08em] text-ink-500 md:inline-flex">
          <IconSliders size={12} /> 47 areas indexed
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
          style={{
            background:
              "linear-gradient(90deg, var(--bg-card) 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
          style={{
            background:
              "linear-gradient(-90deg, var(--bg-card) 0%, transparent 100%)",
          }}
        />
        <div className="marquee-track flex min-w-max gap-2.5 py-6 pl-7">
          {doubled.map((c, i) => (
            <span
              key={`${c.name}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-ink-050 px-3 py-1.5 text-[12.5px] text-ink-700"
            >
              {c.name}
              <span className="font-mono text-[11px] text-ink-400">
                {c.count.toLocaleString("en-IN")}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[color:var(--hairline)] px-7 py-4 text-[11.5px] font-mono uppercase tracking-[0.08em] text-ink-400">
        <span className="inline-flex items-center gap-1.5">
          <IconMoon size={12} />
          Scores recompute nightly
        </span>
        <span>Last run · 03:47 IST</span>
      </div>
    </Card>
  );
}
