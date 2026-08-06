import Reveal from "./Reveal";
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
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            description="Don't just take our word for it."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <figure className="group flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-teal/10 dark:hover:shadow-black/40">
                <div
                  className="mb-4 flex gap-1"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, star) => (
                    <svg
                      key={star}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-teal transition-transform duration-200 group-hover:scale-110"
                    >
                      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-ink/85">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-teal to-teal-bright text-sm font-bold text-cream"
                  >
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </span>
                  <div>
                    <p className="font-semibold text-heading">{testimonial.name}</p>
                    <p className="mt-0.5 text-sm text-ink-soft">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
