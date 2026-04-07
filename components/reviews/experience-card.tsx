import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle } from "lucide-react";

import { StarRating } from "@/components/reviews/star-rating";
import { type Experience } from "@/lib/types";
import { formatMonthYear } from "@/lib/utils";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article data-reveal className="glass-panel panel-3d mesh-highlight overflow-hidden">
      <div className="relative h-56 sm:h-64">
        <Image src={experience.coverMedia} alt={experience.title} fill className="object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span key={tag} className="pill-soft px-3 py-1 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/reviews/experiences/${experience.slug}`} className="premium-heading font-serif text-2xl sm:text-3xl">
          {experience.title}
        </Link>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          {experience.author} · {formatMonthYear(experience.stayDate)} ·{" "}
          <Link href={`/properties/${experience.propertySlug}`} className="text-[hsl(var(--primary))]">
            {experience.propertyName}
          </Link>
        </p>
        <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">{experience.excerpt}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <StarRating value={experience.rating} />
          <div className="flex items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
            <span className="inline-flex items-center gap-1">
              <Heart className="h-4 w-4 text-[hsl(var(--accent))]" />
              {experience.likes}
            </span>
            <span className="inline-flex items-center gap-1">
              <MessageCircle className="h-4 w-4 text-[hsl(var(--accent))]" />
              {experience.commentsCount}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
