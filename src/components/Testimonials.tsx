import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Pixelmere took our dated site and turned it into our strongest sales channel. Loads in under a second and our bounce rate dropped by half.",
    name: "Sarah Chen",
    role: "Founder, The Loopy Dragon",
  },
  {
    quote:
      "They explained everything in plain English and hit every deadline. It's rare to find a team this responsive after the launch is done.",
    name: "Marcus Webb",
    role: "Product Lead, Sellri",
  },
  {
    quote:
      "The redesign paid for itself within three months. Clean, fast, and our customers actually comment on how easy it is to use.",
    name: "Priya Nair",
    role: "Marketing Lead, Otaku Ballerz",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Don't just take our word for it."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-line bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg hover:shadow-navy/5 dark:hover:shadow-black/40"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="mb-4 text-teal"
              >
                <path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v-2H6a1 1 0 0 1-1-1v-1h5V7zm11 0h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v-2h-2a1 1 0 0 1-1-1v-1h5V7z" />
              </svg>
              <blockquote className="flex-1 text-sm leading-relaxed text-ink/85">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="font-semibold text-heading">{testimonial.name}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
