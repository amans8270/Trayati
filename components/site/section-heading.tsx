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
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--primary))]">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl leading-tight sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[hsl(var(--muted-foreground))]">{description}</p> : null}
    </div>
  );
}
