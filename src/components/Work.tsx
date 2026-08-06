import Image from "next/image";
import Reveal from "./Reveal";
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
    tags: ["Next.js", "DTC"],
    image: "/ob.png",
  },
  {
    title: "Kria",
    domain: "kriastore.in",
    url: "https://kriastore.in",
    description:
      "Artisanal jewellery and home-decor store with a category-led catalog and product care guides.",
    tags: ["Next.js", "E-commerce"],
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

const cardClass =
  "group relative overflow-hidden rounded-2xl border border-line bg-card-soft transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-teal/10 dark:hover:shadow-black/40";

function Tags({ tags, dark = false }: { tags: string[]; dark?: boolean }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors group-hover:bg-teal/10 group-hover:text-teal ${
            dark ? "bg-cream/15 text-cream" : "bg-fill text-heading"
          }`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function Work() {
  const [featured, ...rest] = projects;
  const custom = rest[rest.length - 1];
  const grid = rest.slice(0, rest.length - 1);

  return (
    <section id="work" className="scroll-mt-24 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title="Recent projects"
            description="A few of the sites we've designed and shipped recently — each one live, in production, and earning its keep."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featured.url ? (
            <Reveal className="lg:col-span-2">
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${featured.title} (opens in a new tab)`}
                className={cardClass}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-fill sm:aspect-[21/10]">
                  <Image
                    src={featured.image}
                    alt={`${featured.title} website preview`}
                    fill
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/25 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-bright">
                        Featured project
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-cream sm:text-3xl">
                        {featured.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-cream/85 sm:text-base">
                        {featured.description}
                      </p>
                      <Tags tags={featured.tags} dark />
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cream/95 px-4 py-2 text-sm font-semibold text-navy shadow-lg">
                      Visit site
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
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ) : null}

          {grid.map((project, index) => {
            const card = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-fill">
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-navy/70 via-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  {project.url ? (
                    <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-cream/95 px-4 py-2 text-sm font-semibold text-navy opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Visit site
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
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                  ) : null}
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
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {project.description}
                  </p>
                  <Tags tags={project.tags} />
                </div>
              </>
            );

            const accent = (
              <span
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-teal/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            );

            return project.url ? (
              <Reveal key={project.title} delay={index * 80}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} (opens in a new tab)`}
                  className={cardClass}
                >
                  {accent}
                  {card}
                </a>
              </Reveal>
            ) : (
              <Reveal key={project.title} delay={index * 80}>
                <article className={cardClass}>{accent}{card}</article>
              </Reveal>
            );
          })}

          <Reveal delay={120} className="lg:col-span-2">
            <article className={cardClass}>
              <div className="grid sm:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden bg-fill">
                  <Image
                    src={custom.image}
                    alt="Custom software dashboard illustration"
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
                    Behind the scenes
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-heading sm:text-2xl">
                    {custom.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {custom.description}
                  </p>
                  <Tags tags={custom.tags} />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
