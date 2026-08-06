type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span
          aria-hidden="true"
          className="h-px w-8 bg-linear-to-r from-transparent to-teal"
        />
        {eyebrow}
        {align === "center" ? (
          <span
            aria-hidden="true"
            className="h-px w-8 bg-linear-to-l from-transparent to-teal"
          />
        ) : null}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{description}</p>
      ) : null}
    </div>
  );
}
