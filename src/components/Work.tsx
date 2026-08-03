import Image from "next/image";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  domain?: string;
  url?: string;
  description: string;
  tags: string[];
  image: string;
};

const projects: Project[] = [
  {
    title: "The Loopy Dragon",
    domain: "theloopydragon.in",
    url: "https://theloopydragon.in",
    description:
      "Handmade crochet storefront with a custom-order flow and a cozy brand story.",
    tags: ["E-commerce", "Custom Orders"],
    image: "/tld.png",
  },
  {
    title: "Sellri",
    domain: "sellri.in",
    url: "https://sellri.in",
    description:
      "Social-commerce platform that turns Instagram sellers into instant storefronts with UPI payments.",
    tags: ["React", "Next.js", "SaaS"],
    image: "/s.png",
  },
  {
    title: "Otaku Ballerz",
    domain: "otakuballerz.shop",
    url: "https://otakuballerz.shop",
    description:
      "Streetwear store for anime and football fans — oversized tees, hoodies, and COD checkout.",
    tags: ["Shopify", "DTC"],
    image: "/ob.png",
  },
  {
    title: "Kria",
    domain: "kriastore.in",
    url: "https://kriastore.in",
    description:
      "Artisanal jewellery and home-decor store with a category-led catalog and product care guides.",
    tags: ["Shopify", "E-commerce"],
    image: "/ks.png",
  },
  {
    title: "GenoSaathi",
    domain: "genosaathi.com",
    url: "https://genosaathi.com",
    description:
      "BITS Pilani-incubated genetic compatibility screening platform — couple-based carrier testing, counseling-led and privacy-first.",
    tags: ["React", "Next.js", "Health"],
    image: "/gs.png",
  },
  {
    title: "Custom Software",
    description:
      "Internal tools and dashboards built for multiple clients across Europe — order systems, portals, and automation used daily by their teams.",
    tags: ["React", "Node.js", "Internal Tools"],
    image: "/work/custom.svg",
  },
];

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Work"
          title="Recent projects"
          description="A few of the sites we've designed and shipped recently — each one live, in production, and earning its keep."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const card = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-fill">
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-heading">
                      {project.title}
                    </h3>
                    {project.url ? (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-teal">
                        Visit
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                          <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </span>
                    ) : (
                      <span className="rounded-full bg-fill px-3 py-1 text-xs font-medium text-teal">
                        Internal
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-fill px-3 py-1 text-xs font-medium text-heading"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            );

            return project.url ? (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} (opens in a new tab)`}
                className="group overflow-hidden rounded-2xl border border-line bg-card-soft transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg hover:shadow-navy/5 dark:hover:shadow-black/40"
              >
                {card}
              </a>
            ) : (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-line bg-card-soft transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg hover:shadow-navy/5 dark:hover:shadow-black/40"
              >
                {card}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
