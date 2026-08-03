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
          <SectionHeading
            eyebrow="About"
            title="A small agency with a serious work ethic"
            description="Pixelmere started with a simple belief: a website should earn its keep. We're a tight team of designers and developers who treat your site like our own — built to be fast, easy to manage, and built to last. From Pune, we serve clients across India and Europe."
          />
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-xl border border-line bg-card-soft p-6 transition-colors hover:border-teal/40"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-teal">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {value.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
