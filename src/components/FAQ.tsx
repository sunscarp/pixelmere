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
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about pricing, ownership, and getting started."
          />
        </Reveal>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={Math.min(index, 4) * 60}>
              <details className="group rounded-2xl border border-line bg-card px-6 py-5 transition-colors hover:border-teal/40 open:border-teal/50 open:bg-card-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold text-heading sm:text-lg">
                    {faq.question}
                  </h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fill text-heading transition-all duration-300 group-open:rotate-45 group-open:bg-teal group-open:text-cream">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
