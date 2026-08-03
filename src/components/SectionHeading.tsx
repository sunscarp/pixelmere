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
      <p className="text-sm font-semibold uppercase tracking-widest text-teal">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{description}</p>
      ) : null}
    </div>
  );
}
