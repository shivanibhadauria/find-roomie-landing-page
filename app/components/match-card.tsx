import { Avatar } from "./avatar";
import { IconCheck, IconDot, IconPin } from "./icons";

type Props = {
  name: string;
  age: number;
  city: string;
  area: string;
  rent?: string;
  budget?: string;
  score: number;
  tone?: "a" | "b" | "c" | "d" | "e";
  tag?: "verified" | "together";
  tilt?: number;
  offset?: string;
  delay?: string;
};

export function MatchCard({
  name,
  age,
  city,
  area,
  rent,
  budget,
  score,
  tone = "a",
  tag,
  tilt = 0,
  offset = "",
  delay = "0s",
}: Props) {
  return (
    <div
      className={`anim-rise relative w-[280px] rounded-[22px] bg-card p-4 hairline diffusion ${offset}`}
      style={{
        transform: `rotate(${tilt}deg)`,
        animationDelay: delay,
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar name={name} tone={tone} size={44} />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-[14.5px] font-semibold tracking-tight text-ink-900">
                {name}
              </span>
              {tag === "verified" && (
                <span
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full text-white"
                  style={{ background: "var(--verified)" }}
                  aria-label="Verified"
                >
                  <IconCheck size={10} strokeWidth={2.2} />
                </span>
              )}
            </div>
            <div className="mt-0.5 flex items-center gap-1 text-[11.5px] text-ink-500">
              <span>{age}</span>
              <IconDot size={3} className="text-ink-300" />
              <IconPin size={11} className="text-ink-400" />
              <span className="truncate">{area}</span>
            </div>
          </div>
        </div>

        <ScoreBadge score={score} />
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <Chip>Night owl</Chip>
        <Chip>Very clean</Chip>
        <Chip>WFH</Chip>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-[color:var(--hairline)] pt-3">
        <div>
          {rent ? (
            <>
              <div className="text-[10.5px] uppercase tracking-[0.08em] text-ink-400">
                Rent
              </div>
              <div className="font-mono text-[13px] font-medium text-ink-900">
                {rent}
                <span className="text-ink-400"> /mo · {city}</span>
              </div>
            </>
          ) : (
            <>
              <div className="text-[10.5px] uppercase tracking-[0.08em] text-ink-400">
                Budget
              </div>
              <div className="font-mono text-[13px] font-medium text-ink-900">
                {budget}
                <span className="text-ink-400"> · {city}</span>
              </div>
            </>
          )}
        </div>

        {tag === "together" ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-wash px-2 py-1 text-[10.5px] font-medium text-accent-ink">
            <span
              className="h-1.5 w-1.5 rounded-full anim-breathe"
              style={{ background: "var(--accent-ink)" }}
            />
            Find Together
          </span>
        ) : (
          <span className="rounded-full bg-ink-900 px-3 py-1.5 text-[11.5px] font-medium text-white">
            Connect
          </span>
        )}
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-ink-050 px-1.5 py-0.5 text-[11px] font-medium text-ink-700">
      {children}
    </span>
  );
}

function ScoreBadge({ score }: { score: number }) {
  return (
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900">
      <svg width="44" height="44" viewBox="0 0 100 100" className="absolute inset-0">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="6"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          className="score-ring"
          style={{
            strokeDashoffset: 283 - (283 * score) / 100,
          }}
        />
      </svg>
      <span className="relative font-mono text-[11px] font-semibold text-white">
        {score}
      </span>
    </div>
  );
}
