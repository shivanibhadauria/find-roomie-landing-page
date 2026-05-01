import { IconArrow } from "./icons";

export function Cta() {
  return (
    <section id="download" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div
          className="relative overflow-hidden rounded-[32px] p-10 md:p-16"
          style={{ background: "#0b0b10" }}
        >
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(124,111,224,0.6) 0%, transparent 60%)",
            }}
            aria-hidden
          />

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-white/40">
                Find Roomie · Android & iOS
              </div>
              <h2 className="mt-4 max-w-[22ch] text-[34px] font-semibold leading-[1.05] tracking-tight text-white md:text-[46px]">
                Download the app, finish onboarding in under three minutes.
              </h2>
              <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-white/60">
                Phone OTP sign-up. Basic info, preferences, optional KYC. You
                see your first scored matches the moment onboarding closes.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <StoreButton store="App Store" detail="Download on the" />
              <StoreButton store="Google Play" detail="Get it on" />
              <a
                href="#"
                className="group inline-flex items-center justify-between gap-2 rounded-2xl border border-white/10 px-5 py-4 text-[13px] text-white/80 transition-colors hover:bg-white/5"
              >
                <span>Read our onboarding doc</span>
                <IconArrow
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreButton({
  store,
  detail,
}: {
  store: string;
  detail: string;
}) {
  return (
    <a
      href="https://drive.google.com/file/d/1yArcnPJJjSe5yDA2SKhKWBvtQwl3tEp4/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-4 btn-tactile hover:bg-white/95"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          {store === "App Store" ? (
            <path d="M17.05 12.57a4.5 4.5 0 012.14-3.78 4.6 4.6 0 00-3.63-1.96c-1.52-.15-3 .89-3.77.89-.81 0-2.01-.87-3.31-.85a4.82 4.82 0 00-4.07 2.47c-1.75 3.02-.44 7.49 1.24 9.95.84 1.2 1.85 2.55 3.14 2.5 1.26-.05 1.74-.81 3.27-.81 1.51 0 1.95.81 3.28.78 1.35-.02 2.2-1.22 3.03-2.43a10.7 10.7 0 001.38-2.8 4.35 4.35 0 01-2.7-4.0zm-2.5-7.35A4.4 4.4 0 0015.6 2a4.47 4.47 0 00-2.95 1.52 4.18 4.18 0 00-1.08 3.16 3.73 3.73 0 002.98-1.47z" />
          ) : (
            <path d="M3.6 2.6c-.3.3-.4.7-.4 1.2v16.4c0 .5.1.9.4 1.2l8.7-8.7-8.7-10.1zm9.5 8.7L5.6 3l11.2 6.4-3.7 1.9zm0 1.4l3.7 1.9L5.6 21l7.5-8.3zm5.3-2.8l2.5 1.4c.8.4.8 1.6 0 2l-2.5 1.4-4.1-2.4 4.1-2.4z" />
          )}
        </svg>
      </span>
      <span className="flex-1">
        <span className="block text-[10.5px] uppercase tracking-[0.12em] text-ink-400">
          {detail}
        </span>
        <span className="block text-[15px] font-semibold tracking-tight text-ink-900">
          {store}
        </span>
      </span>
      <IconArrow
        size={14}
        className="text-ink-400 transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </a>
  );
}
