type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "section-divider mx-auto max-w-3xl text-center before:left-1/2 before:-translate-x-1/2" : "section-divider max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-5 pt-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-[hsl(var(--accent))]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="premium-heading font-serif text-3xl leading-[0.95] sm:text-5xl lg:text-6xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-[hsl(var(--muted-foreground))] sm:text-base">{description}</p> : null}
    </div>
  );
}
