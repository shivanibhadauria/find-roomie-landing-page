import { IconArrow, IconCheck, IconShield } from "./icons";
import { MatchCard } from "./match-card";

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
            Built for Indian cities · Phone-first auth
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
            Find Roomie scores every pairing on budget, location, cleanliness,
            schedule and lifestyle — before you message. No feeds, no swipes on
            strangers, no phone numbers traded in DMs.
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
            <Stat value="12,847" label="matches made" />
            <Stat value="47.2%" label="avg. top-3 score" accent />
            <Stat value="9 cities" label="live in India" />
          </div>
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

function FloatingCards() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-[6%] top-[8%] anim-float" style={{ animationDelay: "0.2s" }}>
        <MatchCard
          name="Aanya Chaturvedi"
          age={26}
          city="Bengaluru"
          area="Koramangala 4B"
          rent="₹18,400"
          score={92}
          tone="a"
          tag="verified"
          tilt={-4}
          delay="0.35s"
        />
      </div>

      <div
        className="absolute right-[4%] top-[32%] anim-float"
        style={{ animationDelay: "0.9s" }}
      >
        <MatchCard
          name="Kabir Shenoy"
          age={29}
          city="Mumbai"
          area="Powai"
          budget="₹14K–₹22K"
          score={87}
          tone="d"
          tag="together"
          tilt={5}
          delay="0.55s"
        />
      </div>

      <div
        className="absolute left-[14%] bottom-[2%] anim-float"
        style={{ animationDelay: "1.4s" }}
      >
        <MatchCard
          name="Meher Sridharan"
          age={24}
          city="Pune"
          area="Baner"
          rent="₹11,250"
          score={78}
          tone="b"
          tag="verified"
          tilt={-2}
          delay="0.75s"
        />
      </div>

      <div
        className="absolute right-[14%] bottom-[14%] anim-rise rounded-2xl bg-card p-3 hairline diffusion"
        style={{ animationDelay: "1.1s" }}
      >
        <div className="flex items-center gap-2 text-[12px] font-medium text-ink-900">
          <IconShield size={14} className="text-[color:var(--verified)]" />
          Aadhaar-verified
          <IconCheck size={12} className="ml-1 text-[color:var(--verified)]" />
        </div>
      </div>
    </div>
  );
}
