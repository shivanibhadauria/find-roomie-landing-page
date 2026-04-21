import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export function IconArrow({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 12.5l4.5 4.5L20 6" />
    </svg>
  );
}

export function IconShield({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
    </svg>
  );
}

export function IconLock({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 018 0v3" />
    </svg>
  );
}

export function IconSpark({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}

export function IconBed({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M3 18V8M21 18v-5a3 3 0 00-3-3H3" />
      <circle cx="7.5" cy="12.5" r="2" />
      <path d="M3 18h18" />
    </svg>
  );
}

export function IconUsers({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 19c.6-3 3.3-5 6.5-5s5.9 2 6.5 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 14.2c2.8.2 5 2 5.5 4.8" />
    </svg>
  );
}

export function IconPin({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconWallet({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="3" y="6" width="18" height="14" rx="2.5" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="15" r="1.2" />
    </svg>
  );
}

export function IconMoon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" />
    </svg>
  );
}

export function IconChat({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 5.5A2.5 2.5 0 016.5 3h11A2.5 2.5 0 0120 5.5v8a2.5 2.5 0 01-2.5 2.5H10l-4 4v-4H6.5A2.5 2.5 0 014 13.5v-8z" />
    </svg>
  );
}

export function IconSliders({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 6h10M4 12h4M4 18h14" />
      <circle cx="17" cy="6" r="2" />
      <circle cx="11" cy="12" r="2" />
      <circle cx="19" cy="18" r="2" />
    </svg>
  );
}

export function IconHandshake({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M3 12l4-4 3 3 5-5 6 6-3 3-3-3-5 5-3-3-4-2z" />
    </svg>
  );
}

export function IconPlus({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconMinus({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconDot({ size = 8, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest} fill="currentColor" stroke="none">
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}
