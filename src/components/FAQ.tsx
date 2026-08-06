import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs: { question: string; answer: string }[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Websites start from Rs. 5,000. Every project is different, so email us your requirements and we'll send back a final, no-obligation quote.",
  },
  {
    question: "Do I need to pay for a domain and hosting?",
    answer:
      "Yes — the domain name and hosting are billed separately and paid by you. A domain typically costs a few hundred rupees a year. We'll guide you through the process and handle the setup.",
  },
  {
    question: "Can we discuss my project on a call?",
    answer:
      "Absolutely. Email us your requirements and we'll schedule a quick call to understand your goals, answer your questions, and walk you through the plan.",
  },
  {
    question: "How long does a website take?",
    answer:
      "Most sites are live within 1–2 weeks, depending on scope. Larger custom projects come with a clear timeline in your quote.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Just your content — text and photos — plus your logo if you have one. If you're missing anything, we'll help you put it together.",
  },
  {
    question: "Who owns the website after it's built?",
    answer:
      "You do. The domain, hosting, and code are all set up in your name, so you have full ownership from day one.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes — we can handle updates, tweaks, and maintenance on an ongoing basis so your site stays fast and up to date.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently asked questions"
                description="Everything you need to know about pricing, ownership, and getting started."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-teal/20 bg-linear-to-br from-teal/10 to-teal-bright/5 p-6 sm:p-7 dark:border-teal/30 dark:from-teal/15 dark:to-teal-bright/5">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal/15 blur-2xl"
                />
                <p className="text-sm font-semibold uppercase tracking-widest text-teal">
                  Still have questions?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Send us your requirements and we&apos;ll reply with a clear
                  answer — usually within one business day.
                </p>
                <a
                  href="#contact"
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-bright"
                >
                  Get in touch
                  <svg
                    width="15"
                    height="15"
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
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={150}>
              <div className="divide-y divide-line border-y border-line">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-semibold text-heading transition-colors group-hover:text-teal sm:text-lg">
                        {faq.question}
                      </h3>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-heading transition-all duration-300 group-open:rotate-180 group-open:border-teal/40 group-open:bg-teal group-open:text-cream">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <p className="pb-5 text-sm leading-relaxed text-ink-soft sm:text-base">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
