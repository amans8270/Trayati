import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle } from "lucide-react";

import { StarRating } from "@/components/reviews/star-rating";
import { type Experience } from "@/lib/types";
import { formatMonthYear } from "@/lib/utils";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="glass-panel overflow-hidden">
      <div className="relative h-64">
        <Image src={experience.coverMedia} alt={experience.title} fill className="object-cover" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-[hsl(var(--muted-foreground))]">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/reviews/experiences/${experience.slug}`} className="font-serif text-2xl">
          {experience.title}
        </Link>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          {experience.author} · {formatMonthYear(experience.stayDate)} ·{" "}
          <Link href={`/properties/${experience.propertySlug}`} className="text-[hsl(var(--primary))]">
            {experience.propertyName}
          </Link>
        </p>
        <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">{experience.excerpt}</p>
        <div className="flex items-center justify-between">
          <StarRating value={experience.rating} />
          <div className="flex items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
            <span className="inline-flex items-center gap-1"><Heart className="h-4 w-4" />{experience.likes}</span>
            <span className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4" />{experience.commentsCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
