import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

import { HelpfulButton } from "@/components/reviews/helpful-button";
import { StarRating } from "@/components/reviews/star-rating";
import { formatMonthYear } from "@/lib/utils";
import { type Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.author
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article data-reveal className="glass-panel panel-3d mesh-highlight space-y-4 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-[linear-gradient(135deg,rgba(110,108,255,0.18),rgba(44,214,255,0.08))] font-semibold text-[hsl(var(--primary))] dark:border-white/10">
            {initials}
          </div>
          <div>
            <p className="font-semibold">{review.author}</p>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">{formatMonthYear(review.stayDate)}</p>
          </div>
        </div>
        {review.verified ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
            <BadgeCheck className="h-4 w-4" />
            Verified Stay
          </span>
        ) : null}
      </div>
      <div className="space-y-2">
        <Link href={`/properties/${review.propertySlug}`} className="text-sm font-medium text-[hsl(var(--primary))]">
          {review.propertyName}
        </Link>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <StarRating value={review.overallRating} />
          <div className="flex flex-wrap gap-2 text-xs text-[hsl(var(--muted-foreground))]">
            <span className="pill-soft px-2 py-1">Cleanliness {review.cleanlinessRating}/5</span>
            <span className="pill-soft px-2 py-1">Location {review.locationRating}/5</span>
            <span className="pill-soft px-2 py-1">Hospitality {review.hospitalityRating}/5</span>
            <span className="pill-soft px-2 py-1">Value {review.valueRating}/5</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="premium-heading font-serif text-2xl sm:text-3xl">{review.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{review.body}</p>
      </div>
      {review.photos?.[0] ? (
        <div className="relative h-52 overflow-hidden rounded-3xl">
          <Image src={review.photos[0]} alt={review.title} fill className="object-cover" />
        </div>
      ) : null}
      <HelpfulButton reviewId={review.id} initialCount={review.helpfulVotes} />
    </article>
  );
}
