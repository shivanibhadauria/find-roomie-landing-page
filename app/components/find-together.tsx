import { Avatar } from "./avatar";
import { IconArrow, IconDot, IconHandshake, IconPin } from "./icons";

export function FindTogether() {
  return (
    <section id="together" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div
          className="relative overflow-hidden rounded-[32px] p-7 md:p-14"
          style={{
            background:
              "linear-gradient(135deg, #F2EFFF 0%, #FAF6EE 60%, #F0E8FF 100%)",
          }}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, #D6CCFF 0%, transparent 60%)" }}
            aria-hidden
          />

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-3 py-1.5 text-[11.5px] font-mono uppercase tracking-[0.1em] text-white">
                <IconHandshake size={13} />
                Mode B · Find Together
              </div>
              <h2 className="mt-6 max-w-[18ch] text-[34px] font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-[44px]">
                Hunt for a flat <span className="text-accent-ink">together</span>,
                not alone.
              </h2>
              <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-ink-500">
                If you&apos;re also looking for a room, we pair you with another
                Mode B person on a stricter B↔B scoring model — budget weighs
                30%, location 25%, and guest policy drops out entirely.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4">
                <WeightTile label="Budget" value="30%" active />
                <WeightTile label="Location" value="25%" active />
                <WeightTile label="Cleanliness" value="15%" />
              </dl>

              <a
                href="https://drive.google.com/file/d/1yArcnPJJjSe5yDA2SKhKWBvtQwl3tEp4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-[14px] font-medium text-white btn-tactile hover:bg-ink-700"
              >
                Try Find Together
                <IconArrow size={15} />
              </a>
            </div>

            <div className="relative">
              <TogetherMatchMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WeightTile({
  label,
  value,
  active,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-4 hairline ${
        active ? "bg-card" : "bg-white/40"
      }`}
    >
      <dd className="font-mono text-[22px] font-semibold tracking-tight text-ink-900">
        {value}
      </dd>
      <dt className="mt-1 text-[11px] uppercase tracking-[0.1em] text-ink-400">
        {label}
      </dt>
    </div>
  );
}

function TogetherMatchMock() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div className="rounded-[28px] bg-card p-5 hairline diffusion">
        <div className="flex items-center justify-between">
          <span className="text-[11.5px] font-mono uppercase tracking-[0.1em] text-ink-400">
            Together match
          </span>
          <span className="rounded-full bg-accent-wash px-2 py-1 text-[10.5px] font-medium text-accent-ink">
            B ↔ B
          </span>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <TogetherPerson
            name="Meher Sridharan"
            role="Product designer"
            tone="b"
          />
          <div className="flex flex-col items-center gap-1">
            <IconHandshake size={20} className="text-accent-ink" />
            <div className="font-mono text-[22px] font-semibold text-ink-900 leading-none">
              83
            </div>
            <div className="text-[9.5px] uppercase tracking-[0.12em] text-ink-400">
              score
            </div>
          </div>
          <TogetherPerson
            name="Yuvraj Patwari"
            role="Backend engineer"
            tone="d"
            align="right"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 text-[12.5px]">
          <OverlapRow label="Shared budget">
            <span className="font-mono">₹13K – ₹19K</span>
          </OverlapRow>
          <OverlapRow label="Both targeting">
            <span className="inline-flex items-center gap-1">
              <IconPin size={11} className="text-ink-400" />
              Indiranagar
            </span>
          </OverlapRow>
          <OverlapRow label="Move-in">
            <span className="font-mono">May 2 – May 15</span>
          </OverlapRow>
          <OverlapRow label="Lifestyle">
            <span className="inline-flex items-center gap-1">
              Night-owls
              <IconDot size={3} className="text-ink-300" />
              WFH
            </span>
          </OverlapRow>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[color:var(--hairline)] pt-4">
          <span className="text-[12px] text-ink-500">
            Both accepted · chat unlocked
          </span>
          <span className="rounded-full bg-ink-900 px-3 py-1.5 text-[11.5px] font-medium text-white">
            Open chat
          </span>
        </div>
      </div>
    </div>
  );
}

function TogetherPerson({
  name,
  role,
  tone,
  align = "left",
}: {
  name: string;
  role: string;
  tone: "a" | "b" | "c" | "d" | "e";
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-2xl bg-ink-050 p-3 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <Avatar name={name} tone={tone} size={44} />
      <div className="text-[12.5px] font-medium tracking-tight text-ink-900">
        {name.split(" ")[0]}
      </div>
      <div className="text-[10.5px] text-ink-500">{role}</div>
    </div>
  );
}

function OverlapRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-ink-050 px-3 py-2">
      <div className="text-[10.5px] uppercase tracking-[0.08em] text-ink-400">
        {label}
      </div>
      <div className="mt-0.5 text-ink-900">{children}</div>
    </div>
  );
}
