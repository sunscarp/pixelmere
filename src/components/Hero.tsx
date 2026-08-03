const grid = Array.from({ length: 36 }, (_, index) => {
  const x = (index % 6) * 32;
  const y = Math.floor(index / 6) * 32;
  const accent = [1, 8, 13, 20, 31].includes(index);
  return { x, y, accent };
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 lg:block xl:-right-8"
      >
        <svg width="420" height="420" viewBox="0 0 192 192" fill="none">
          {grid.map((cell, index) => (
            <rect
              key={index}
              x={cell.x}
              y={cell.y}
              width="24"
              height="24"
              fill={cell.accent ? "#1d9e75" : "var(--deco)"}
              fillOpacity={cell.accent ? 0.3 : 1}
            />
          ))}
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex max-w-3xl flex-col items-start gap-6 py-24 sm:py-32 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">
            Web development agency
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-heading sm:text-6xl lg:text-7xl">
            Pixelmere
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            We build websites that work as hard as you do.
          </p>
          <p className="text-lg font-bold text-heading sm:text-xl">
            Websites starting from Rs. 5,000 — email us for a final quote.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="rounded-lg bg-teal px-6 py-3 text-base font-medium text-cream transition-colors hover:bg-teal/90"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg border border-line bg-card/70 px-6 py-3 text-base font-medium text-heading transition-colors hover:border-teal/50 hover:text-teal"
            >
              See our work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
