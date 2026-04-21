export function Footer() {
  return (
    <footer className="border-t border-[color:var(--hairline)] py-14">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink-900">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="text-[color:var(--accent-ink)]"
              aria-hidden
            >
              <path
                d="M4 11.5L12 4l8 7.5V20a1 1 0 01-1 1h-5v-6h-4v6H5a1 1 0 01-1-1v-8.5z"
                fill="currentColor"
                opacity="0.15"
              />
              <path
                d="M4 11.5L12 4l8 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="round"
              />
              <path
                d="M12 4v6m-4 5h8"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            Find Roomie
          </div>
          <p className="mt-4 max-w-[34ch] text-[13px] leading-relaxed text-ink-500">
            Compatibility-first roommate matching for Indian cities. Built in
            Bengaluru. Servers in Singapore.
          </p>
        </div>

        <FooterCol
          title="Product"
          items={[
            { label: "How it works", href: "#how" },
            { label: "Find Together", href: "#together" },
            { label: "Safety", href: "#safety" },
            { label: "Pricing", href: "#" },
          ]}
        />
        <FooterCol
          title="Company"
          items={[
            { label: "About", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "Contact", href: "#" },
          ]}
        />
        <FooterCol
          title="Legal"
          items={[
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Community guidelines", href: "#" },
            { label: "Report an issue", href: "#" },
          ]}
        />
      </div>

      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col items-start justify-between gap-3 border-t border-[color:var(--hairline)] px-5 pt-6 text-[11.5px] font-mono text-ink-400 md:flex-row md:items-center md:px-8">
        <span>© 2026 Find Roomie Technologies Pvt. Ltd.</span>
        <span className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full anim-breathe"
            style={{ background: "var(--verified)" }}
          />
          Status · All systems normal
        </span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5 text-[13.5px] text-ink-700">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="transition-colors hover:text-ink-900"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
