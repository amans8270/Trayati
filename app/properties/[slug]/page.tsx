import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Sparkles, Star } from "lucide-react";

import { BookingWidget } from "@/components/site/booking-widget";
import { PropertyCard } from "@/components/site/property-card";
import { RatingBreakdown } from "@/components/reviews/rating-breakdown";
import { ReviewCard } from "@/components/reviews/review-card";
import { Button } from "@/components/ui/button";
import { properties, reviews } from "@/lib/mock-data";
import { JsonLd } from "@/lib/seo";
import { buildMetadata } from "@/lib/site";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const property = properties.find((item) => item.slug === params.slug);
  if (!property) return {};

  return buildMetadata({
    title: property.name,
    description: property.shortDescription,
    path: `/properties/${property.slug}`,
  });
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = properties.find((item) => item.slug === params.slug);
  if (!property) notFound();

  const propertyReviews = reviews.filter((review) => review.propertyId === property.id);
  const similarProperties = properties.filter((item) => item.id !== property.id).slice(0, 2);
  const averageRating = (
    propertyReviews.reduce((sum, review) => sum + review.overallRating, 0) / Math.max(propertyReviews.length, 1)
  ).toFixed(1);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: property.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: property.city,
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: averageRating,
            reviewCount: `${propertyReviews.length}`,
          },
          review: propertyReviews.slice(0, 3).map((review) => ({
            "@type": "Review",
            author: review.author,
            reviewBody: review.body,
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.overallRating,
            },
          })),
        }}
      />
      <div className="container-shell section-space">
        <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--primary))]">{property.type}</p>
            <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">{property.name}</h1>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
              <MapPin className="h-4 w-4" />
              {property.location}
            </p>
          </div>
          <div className="glass-panel flex items-center gap-4 px-5 py-4">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <div>
              <p className="font-semibold">{property.rating} average rating</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{property.reviewsCount} published reviews</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid gap-3 sm:grid-cols-2">
                {property.images.slice(0, 5).map((image, index) => (
              <div key={image} className={`relative overflow-hidden rounded-[24px] ${index === 0 ? "sm:col-span-2 h-[260px] sm:h-[360px] lg:h-[420px]" : "h-44 sm:h-52"}`}>
                <Image src={image} alt={property.name} fill className="object-cover" />
              </div>
            ))}
          </div>
          <BookingWidget property={property} />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <section className="glass-panel p-5 sm:p-8">
              <h2 className="font-serif text-3xl">About this stay</h2>
              <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">{property.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="surface-muted rounded-2xl px-4 py-3 text-sm dark:text-on-dark-soft">
                    {amenity}
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-panel p-5 sm:p-8">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-serif text-3xl">Reviews & Ratings</h2>
                  <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">Inline review module with public access and auth-gated submissions.</p>
                </div>
                <Button asChild>
                  <a href="#write-review">Write a Review</a>
                </Button>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
                <div className="surface-muted rounded-[28px] p-5">
                  <p className="font-serif text-5xl">{averageRating}</p>
                  <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">Overall experience</p>
                  <div className="mt-6">
                    <RatingBreakdown propertyId={property.id} />
                  </div>
                </div>
                <div className="grid gap-6">
                  {propertyReviews.slice(0, 5).map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </div>
              <div id="write-review" className="mt-8 rounded-[28px] border border-dashed border-[hsl(var(--border))] p-6 text-sm text-[hsl(var(--muted-foreground))]">
                Authenticated guests can submit a verified review here or continue to the dedicated submission page.
              </div>
            </section>
          </div>

          <aside className="order-first space-y-6 lg:order-none">
            <div className="glass-panel p-6">
              <p className="font-serif text-2xl">Location & Access</p>
              <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                Embed Google Maps here with coordinates {property.coordinates.lat}, {property.coordinates.lng}. This placeholder keeps the layout deployment-safe.
              </p>
            </div>
            <div className="glass-panel p-6">
              <p className="font-serif text-2xl">Stay Assurances</p>
              <div className="mt-4 space-y-3 text-sm">
                <p className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[hsl(var(--primary))]" /> Flexible check-in support</p>
                <p className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[hsl(var(--primary))]" /> Review request automation after checkout</p>
                <p className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[hsl(var(--primary))]" /> Dynamic pricing ready</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-3xl">Similar properties</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {similarProperties.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
