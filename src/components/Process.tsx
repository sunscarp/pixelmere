import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dig into your goals, audience, and competitors to define exactly what success looks like before any design begins.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes grow into polished, on-brand interfaces — reviewed with you every step so nothing surprises you at launch.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, performant code built to spec. We test across browsers and devices so it feels right everywhere.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We handle deployment, monitoring, and handoff — plus ongoing support so your site stays fast and secure.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Process"
          title="How we work"
          description="A clear, proven path from idea to launch. You'll always know where things stand."
          align="center"
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-teal/30 md:block"
          />
          <ol className="grid gap-12 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number} className="relative md:text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal text-sm font-semibold text-cream">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-heading">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
