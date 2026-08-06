import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const iconClass = "h-6 w-6";

const services: Service[] = [
  {
    title: "Web Design",
    description:
      "Clean, modern interfaces built around your brand and your users. We design for clarity first, so visitors always know where to look and what to do next.",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "Fast, accessible, and scalable builds with modern frameworks. We write clean code and ship sites that stay quick as your business grows.",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "E-Commerce",
    description:
      "Storefronts that make buying effortless — product pages, carts, and checkout tuned for conversions, whether you sell five SKUs or five thousand.",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    description:
      "Updates, security, and a real human on call. We keep your site healthy and current so you can focus on running your business.",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const enterprisePoints = [
  "Custom dashboards, CRMs, and internal tools built to your exact workflow",
  "European timezone overlap, GDPR-friendly hosting, and clear documentation",
  "Long-term partners — we maintain, train your team, and scale with you",
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything your website needs"
            description="From first wireframe to long-term care, we handle the whole lifecycle of your site — one team, no handoffs."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-teal/10 dark:hover:shadow-black/40">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-teal/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 top-3 text-6xl font-semibold text-heading/5 transition-colors duration-300 group-hover:text-teal/10"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-teal/15 to-teal-bright/5 text-teal ring-1 ring-teal/20 transition-all duration-300 group-hover:from-teal group-hover:to-teal-bright group-hover:text-cream group-hover:shadow-lg group-hover:shadow-teal/25">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-heading">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-teal/20 bg-linear-to-br from-teal/10 to-teal-bright/5 p-8 sm:p-10 dark:border-teal/30 dark:from-teal/15 dark:to-teal-bright/5">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/15 blur-3xl"
            />
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-heading sm:text-2xl">
                  Custom software for European clients
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                  Beyond marketing sites, we build the internal software that keeps
                  businesses running — order systems, portals, and automation tools used
                  daily by teams across Europe.
                </p>
              </div>
              <ul className="grid flex-1 gap-3">
                {enterprisePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-ink/85"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
