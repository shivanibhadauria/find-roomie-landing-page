import { Avatar } from "./avatar";
import { IconBed, IconCheck, IconDot, IconPin, IconUsers } from "./icons";

export function Modes() {
  return (
    <section id="modes" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col gap-3">
          <div className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink-400">
            02 · Two sides of the same flat
          </div>
          <h2 className="max-w-[22ch] text-[36px] font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-[48px]">
            Have a room, or need one.{" "}
            <span className="text-ink-400">
              One switch in settings flips everything.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          <ModeAColumn />
          <ModeBColumn />
        </div>
      </div>
    </section>
  );
}

function ModeAColumn() {
  return (
    <div className="md:col-span-7 md:pt-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 font-mono text-[12px] font-semibold text-white">
          A
        </span>
        <div>
          <div className="text-[13px] font-mono uppercase tracking-[0.1em] text-ink-400">
            Mode A
          </div>
          <div className="text-[20px] font-semibold tracking-tight text-ink-900">
            You have a room.
          </div>
        </div>
      </div>
      <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-ink-500">
        Post your flat once. We surface people whose budget matches your rent,
        whose schedule matches yours, and whose cleanliness bar is at least as
        high as the one you list.
      </p>

      <ul className="mt-6 space-y-3 text-[14px] text-ink-700">
        <Bullet>One active listing at a time · edit any detail without re-verifying</Bullet>
        <Bullet>See only people looking for a room — no browsing other listings</Bullet>
        <Bullet>Deactivate in a tap the moment your room is filled</Bullet>
      </ul>

      <div className="mt-10 relative rounded-[26px] bg-card p-5 hairline diffusion">
        <div className="absolute -top-3 left-5 inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-2.5 py-1 text-[10.5px] font-medium text-white">
          Listing preview
        </div>

        <div className="grid grid-cols-[120px_1fr] gap-4">
          <div
            className="rounded-2xl"
            style={{
              aspectRatio: "1 / 1",
              background:
                "linear-gradient(135deg, #ECEAFF 0%, #FCEFE2 100%)",
            }}
          >
            <div className="flex h-full w-full items-end justify-start p-3">
              <IconBed size={22} className="text-ink-700" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[11.5px] font-mono uppercase tracking-[0.08em] text-ink-400">
              <IconPin size={11} />
              HSR Layout · Sector 7
            </div>
            <div className="mt-1 text-[16px] font-semibold tracking-tight text-ink-900">
              Private room in 2BHK
            </div>
            <div className="mt-1 flex items-center gap-2 font-mono text-[13px] text-ink-700">
              <span>₹16,800</span>
              <IconDot size={3} className="text-ink-300" />
              <span className="text-ink-400">Available Apr 28</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Chip>Furnished</Chip>
              <Chip>Attached bath</Chip>
              <Chip>Female only</Chip>
              <Chip>11-month lease</Chip>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[color:var(--hairline)] pt-4">
          <div className="flex -space-x-2">
            <Avatar name="Aanya C" tone="a" size={28} className="ring-2 ring-white" />
            <Avatar name="Ishaan J" tone="d" size={28} className="ring-2 ring-white" />
            <Avatar name="Tara B" tone="b" size={28} className="ring-2 ring-white" />
            <span className="ring-2 ring-white inline-flex h-7 items-center rounded-full bg-ink-050 px-2 font-mono text-[11px] text-ink-500">
              +9
            </span>
          </div>
          <div className="text-[12px] text-ink-500">
            12 Mode-B people above 80 score
          </div>
        </div>
      </div>
    </div>
  );
}

function ModeBColumn() {
  return (
    <div className="md:col-span-5 md:mt-24">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-ink font-mono text-[12px] font-semibold text-white">
          B
        </span>
        <div>
          <div className="text-[13px] font-mono uppercase tracking-[0.1em] text-ink-400">
            Mode B
          </div>
          <div className="text-[20px] font-semibold tracking-tight text-ink-900">
            You need a room.
          </div>
        </div>
      </div>
      <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-ink-500">
        Browse rooms posted by Mode A, or team up with another Mode B person and
        hunt for a flat together. Same consent flow either way.
      </p>

      <ul className="mt-6 space-y-3 text-[14px] text-ink-700">
        <Bullet>Two feeds — <span className="font-medium">Find Room</span> and <span className="font-medium">Find Together</span></Bullet>
        <Bullet>Save up to 24 profiles and listings without connecting</Bullet>
        <Bullet>Switch to Mode A any time — your listing draft is preserved</Bullet>
      </ul>

      <div className="mt-10 rounded-[26px] bg-card p-5 hairline diffusion">
        <div className="flex rounded-full bg-ink-050 p-1 text-[12.5px]">
          <span className="flex-1 rounded-full bg-card px-3 py-1.5 text-center font-medium text-ink-900 diffusion">
            Find Room
          </span>
          <span className="flex-1 px-3 py-1.5 text-center text-ink-500">
            Find Together
          </span>
        </div>

        <div className="mt-5 space-y-3">
          <FeedRow
            name="Rohan Iyer"
            area="Koramangala 4B · ₹14,500"
            score={91}
            tone="d"
          />
          <FeedRow
            name="Zayan Khatri"
            area="Indiranagar · ₹17,200"
            score={84}
            tone="c"
          />
          <FeedRow
            name="Priya Nagrecha"
            area="HSR Sector 7 · ₹12,900"
            score={79}
            tone="a"
          />
        </div>
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
        style={{ background: "var(--accent-wash)", color: "var(--accent-ink)" }}
      >
        <IconCheck size={10} strokeWidth={2.4} />
      </span>
      <span>{children}</span>
    </li>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-ink-050 px-1.5 py-0.5 text-[11px] font-medium text-ink-700">
      {children}
    </span>
  );
}

function FeedRow({
  name,
  area,
  score,
  tone,
}: {
  name: string;
  area: string;
  score: number;
  tone: "a" | "b" | "c" | "d" | "e";
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-ink-050 px-3 py-2.5">
      <Avatar name={name} tone={tone} size={36} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[13.5px] font-medium tracking-tight text-ink-900">
            {name}
          </span>
          <IconUsers size={11} className="text-ink-300" />
        </div>
        <div className="mt-0.5 font-mono text-[11.5px] text-ink-500">
          {area}
        </div>
      </div>
      <div className="text-right">
        <div className="font-mono text-[15px] font-semibold text-ink-900">
          {score}
        </div>
        <div className="text-[10px] uppercase tracking-[0.1em] text-ink-400">
          score
        </div>
      </div>
    </div>
  );
}
