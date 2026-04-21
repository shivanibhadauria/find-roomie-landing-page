type Props = {
  name: string;
  tone?: "a" | "b" | "c" | "d" | "e";
  size?: number;
  className?: string;
};

const palettes: Record<NonNullable<Props["tone"]>, { bg: string; fg: string }> = {
  a: { bg: "#ECEAFF", fg: "#5749C8" },
  b: { bg: "#E6F5EF", fg: "#0F7A5A" },
  c: { bg: "#FCEFE2", fg: "#8C4A15" },
  d: { bg: "#EAF0FB", fg: "#324A87" },
  e: { bg: "#F3ECE4", fg: "#6B4F2A" },
};

export function Avatar({ name, tone = "a", size = 40, className = "" }: Props) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  const { bg, fg } = palettes[tone];
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full font-medium tracking-tight ${className}`}
      style={{
        width: size,
        height: size,
        background: bg,
        color: fg,
        fontSize: size * 0.38,
      }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
