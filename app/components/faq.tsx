"use client";

import { useState } from "react";
import { IconMinus, IconPlus } from "./icons";

const items = [
  {
    q: "How is this different from Facebook groups or Instagram listings?",
    a: "Those are unstructured feeds. We model seven specific compatibility signals and show you the weighted score before you message anyone. You see the math, not a mood board.",
  },
  {
    q: "Why is compatibility scored overnight instead of in real time?",
    a: "Recomputing on every request would flatten accuracy — we&apos;d have to skip signals for latency. Nightly batches let us run the full seven-factor pass at ~3:47 IST and serve pre-computed scores instantly.",
  },
  {
    q: "What is Find Together, exactly?",
    a: "A second feed inside Mode B. It surfaces other people who are also looking for a room, so two strangers with aligned budgets and schedules can team up and hunt for a flat together. The scoring model is stricter (B↔B) and the mutual-consent chat flow is identical.",
  },
  {
    q: "Can I switch between Mode A and Mode B?",
    a: "Yes — settings. Switching to A prompts you to create a listing; switching to B auto-deactivates your listing. Existing matches persist with a tag noting the origin mode.",
  },
  {
    q: "What does KYC actually require?",
    a: "A phone OTP for sign-up. Aadhaar verification is optional but gates the green check badge — we store only the last four digits and the verification status, never the full document.",
  },
  {
    q: "Which cities are live?",
    a: "Bengaluru, Mumbai, Pune, Delhi NCR, Hyderabad, Chennai, Kolkata, Ahmedabad and Kochi — with neighbourhood-level indexing in each. If you don&apos;t see your area, matching still works city-wide with reduced weight on location.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <div className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink-400">
              04 · Questions
            </div>
            <h2 className="mt-4 text-[36px] font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-[48px]">
              Still not sure?
            </h2>
            <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-ink-500">
              The short answer to most of these: we picked the boring, provable
              option.
            </p>
          </div>

          <ul className="divide-y divide-[color:var(--hairline)] border-y border-[color:var(--hairline)]">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-1 font-mono text-[11px] text-ink-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[16px] font-medium tracking-tight text-ink-900">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-050 text-ink-700 transition-colors group-hover:bg-ink-100"
                      aria-hidden
                    >
                      {isOpen ? <IconMinus size={14} /> : <IconPlus size={14} />}
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden text-[14.5px] leading-relaxed text-ink-500 transition-[grid-template-rows,opacity] duration-500"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="min-h-0 pl-10 pr-12 pb-6">
                      <p dangerouslySetInnerHTML={{ __html: item.a }} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
