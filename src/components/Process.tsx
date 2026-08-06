import Reveal from "./Reveal";
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
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How we work"
            description="A clear, proven path from idea to launch. You'll always know where things stand."
            align="center"
          />
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-transparent via-teal/40 to-transparent md:block"
          />
          <ol className="grid gap-12 md:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <li className="group relative md:text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-teal to-teal-bright text-sm font-bold text-cream shadow-lg shadow-teal/25 ring-4 ring-teal/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
