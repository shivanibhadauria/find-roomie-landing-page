import { IconChat, IconCheck, IconLock, IconShield } from "./icons";

const rows = [
  {
    icon: IconShield,
    title: "Aadhaar-linked KYC",
    body: "Last four digits only — we never store the full ID. Pending, approved and rejected states are visible on every profile.",
    accent: "Approved",
  },
  {
    icon: IconLock,
    title: "Phone numbers never shared",
    body: "Not in profiles, not in the chat metadata, not in push payloads. Calls route through in-app audio when both sides opt in.",
    accent: "In-app only",
  },
  {
    icon: IconChat,
    title: "Mutual-consent chat",
    body: "A conversation row doesn't exist in the database until both users accept. Block a user and they disappear from Discover, listings and chat.",
    accent: "Consent required",
  },
  {
    icon: IconCheck,
    title: "Hard delete on exit",
    body: "Close your account and every match, message, listing and uploaded document is dropped in a single transaction. No soft delete, no shadow profile.",
    accent: "Irreversible",
  },
];

export function Trust() {
  return (
    <section id="safety" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div className="md:sticky md:top-24 md:self-start">
            <div className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink-400">
              03 · Safety by default
            </div>
            <h2 className="mt-4 max-w-[14ch] text-[36px] font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-[48px]">
              The boring parts,{" "}
              <span className="text-ink-400">done properly.</span>
            </h2>
            <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-ink-500">
              Roommate discovery sits in the same personal-risk zone as dating —
              we treat it that way. Every decision below is load-bearing, not
              marketing.
            </p>
          </div>

          <div className="divide-y divide-[color:var(--hairline)]">
            {rows.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="grid grid-cols-[auto_1fr_auto] items-start gap-5 py-7 first:pt-0"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-050">
                    <Icon size={18} className="text-accent-ink" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-[0.14em] text-ink-400">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[17px] font-semibold tracking-tight text-ink-900">
                      {r.title}
                    </div>
                    <p className="mt-2 max-w-[52ch] text-[14px] leading-relaxed text-ink-500">
                      {r.body}
                    </p>
                  </div>
                  <span className="hidden shrink-0 rounded-full bg-ink-050 px-2.5 py-1 text-[11px] font-mono text-ink-500 md:inline-block">
                    {r.accent}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
