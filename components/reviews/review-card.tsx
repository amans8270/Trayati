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
    <article className="glass-panel space-y-4 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--secondary))]/10 font-semibold text-[hsl(var(--secondary))]">
            {initials}
          </div>
          <div>
            <p className="font-semibold">{review.author}</p>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">{formatMonthYear(review.stayDate)}</p>
          </div>
        </div>
        {review.verified ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
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
        <h3 className="font-serif text-xl sm:text-2xl">{review.title}</h3>
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
