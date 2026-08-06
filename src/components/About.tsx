import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const values = [
  {
    title: "Speed matters",
    text: "Fast sites win customers. We optimize from day one, not after launch.",
  },
  {
    title: "Boring in a good way",
    text: "Reliable, maintainable code beats clever tricks every time.",
  },
  {
    title: "Your goals drive design",
    text: "Pretty is only the start — every decision maps to a business outcome.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="A small agency with a serious work ethic"
              description="Pixelmere started with a simple belief: a website should earn its keep. We're a tight team of designers and developers who treat your site like our own — built to be fast, easy to manage, and built to last. From Pune, we serve clients across India and Europe."
            />
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <li className="group relative overflow-hidden rounded-xl border border-line bg-card-soft p-6 transition-colors hover:border-teal/40">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-teal/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-teal">
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
                      className="shrink-0"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {value.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
