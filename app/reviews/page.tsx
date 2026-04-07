import { Suspense } from "react";

import { ReviewsPageClient } from "@/components/reviews/reviews-page-client";
import { aggregateStats, reviews } from "@/lib/mock-data";
import { JsonLd } from "@/lib/seo";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Guest Reviews & Experiences",
  description:
    "Read verified guest reviews and travel experiences from Trayati Stays. Rated 4.8/5 for cleanliness, hospitality and location.",
  path: "/reviews",
});

export const revalidate = 60;

export default function ReviewsPage() {
  return (
    <div className="container-shell section-space">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Guest Reviews - Trayati Stays",
          description: "Read genuine reviews and experiences from guests who stayed at Trayati Stays properties.",
          itemListElement: reviews.slice(0, 5).map((review, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: review.title,
            item: review.propertyName,
          })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregateStats.overallRating,
            reviewCount: aggregateStats.reviewCount,
          },
        }}
      />
      <Suspense fallback={<div className="glass-panel p-8">Loading reviews…</div>}>
        <ReviewsPageClient />
      </Suspense>
    </div>
  );
}
