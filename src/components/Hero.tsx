const grid = Array.from({ length: 36 }, (_, index) => {
  const x = (index % 6) * 32;
  const y = Math.floor(index / 6) * 32;
  const accent = [1, 8, 13, 20, 31].includes(index);
  return { x, y, accent };
});

const stats = [
  { value: "6+", label: "sites shipped" },
  { value: "1–2 wk", label: "to launch" },
  { value: "100%", label: "your ownership" },
];

const brands = [
  "The Loopy Dragon",
  "Sellri",
  "Otaku Ballerz",
  "Kria",
  "GenoSaathi",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_70%_at_50%_0%,black,transparent)]" />
        <div className="absolute -left-32 -top-24 h-80 w-80 animate-float rounded-full bg-teal/25 blur-3xl" />
        <div className="absolute -right-24 top-48 h-96 w-96 animate-float rounded-full bg-teal/15 blur-3xl [animation-delay:-3s]" />
        <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 lg:block xl:-right-8">
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
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex max-w-3xl flex-col items-start gap-6 py-24 sm:py-32 lg:py-40">
          <span className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Accepting new projects
          </span>

          <h1 className="animate-fade-up text-5xl font-semibold leading-[1.04] tracking-tight text-heading [animation-delay:100ms] sm:text-6xl lg:text-7xl">
            Websites that work as hard as{" "}
            <span className="font-serif italic text-gradient">you do.</span>
          </h1>

          <p className="animate-fade-up max-w-xl text-xl leading-relaxed text-ink-soft [animation-delay:200ms] sm:text-2xl">
            Pixelmere is a full-service web agency — design, development,
            e-commerce, and long-term support. One team, no handoffs.
          </p>

          <p className="animate-fade-up text-lg font-bold text-heading [animation-delay:300ms] sm:text-xl">
            Websites starting from Rs. 5,000 — email us for a final quote.
          </p>

          <div className="animate-fade-up flex flex-wrap items-center gap-4 pt-2 [animation-delay:400ms]">
            <a
              href="#contact"
              className="btn-shine group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-teal to-teal-bright px-7 py-3.5 text-base font-semibold text-cream shadow-lg shadow-teal/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal/30"
            >
              Start a Project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg border border-line bg-card/70 px-6 py-3 text-base font-medium text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/50 hover:text-teal"
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

          <dl className="animate-fade-up mt-4 grid w-full max-w-lg grid-cols-3 gap-6 pt-4 [animation-delay:500ms] sm:gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-teal/40 pl-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-heading sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-y border-line/70 bg-surface/60 py-7 backdrop-blur-sm">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
          Trusted by teams at
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16 pr-16">
            {[...brands, ...brands].map((brand, index) => (
              <span
                key={index}
                className="whitespace-nowrap text-lg font-semibold text-ink/45 transition-colors hover:text-teal"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
