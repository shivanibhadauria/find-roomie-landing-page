import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--hairline)] bg-[color:var(--bg-canvas)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink-900"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            aria-hidden
            className="text-[color:var(--accent)]"
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
        </Link>

        <nav className="hidden items-center gap-7 text-[13.5px] text-ink-500 md:flex">
          <a className="transition-colors hover:text-ink-900" href="#how">
            How it works
          </a>
          <a className="transition-colors hover:text-ink-900" href="#modes">
            Modes
          </a>
          <a className="transition-colors hover:text-ink-900" href="#together">
            Find Together
          </a>
          <a className="transition-colors hover:text-ink-900" href="#safety">
            Safety
          </a>
          <a className="transition-colors hover:text-ink-900" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1yArcnPJJjSe5yDA2SKhKWBvtQwl3tEp4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2 text-[13px] font-medium text-white btn-tactile hover:bg-ink-700 sm:inline-flex"
          >
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
