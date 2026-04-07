import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, ShieldCheck, Sparkles, Trees } from "lucide-react";

import { ExperienceCard } from "@/components/reviews/experience-card";
import { ReviewCard } from "@/components/reviews/review-card";
import { HeroSearch } from "@/components/site/hero-search";
import { PropertyCard } from "@/components/site/property-card";
import { SectionHeading } from "@/components/site/section-heading";
import { TrustBadge } from "@/components/site/trust-badge";
import { Button } from "@/components/ui/button";
import { aggregateStats, experiences, guestHighlights, properties } from "@/lib/mock-data";
import { JsonLd } from "@/lib/seo";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Discover premium short stays in Bir, Himachal Pradesh with soulful interiors, mountain views, trusted guest reviews, and seamless booking with Trayati Stays.",
  path: "/",
});

const usps = [
  { title: "Hosted with heart", icon: Home, copy: "Warm, hands-on hosting for mountain travellers, families, and remote workers." },
  { title: "Verified trust", icon: ShieldCheck, copy: "Real reviews, confirmed stays, and dependable service standards." },
  { title: "Premium calm", icon: Trees, copy: "Earthy interiors, thoughtful amenities, and spaces that truly let you exhale." },
  { title: "Effortless journeys", icon: Sparkles, copy: "Quick booking, responsive support, and local Bir tips when timing matters." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Trayati Stays",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: `${aggregateStats.overallRating}`,
            reviewCount: `${aggregateStats.reviewCount}`,
          },
        }}
      />
      <section className="relative overflow-hidden">
        <div className="container-shell grid min-h-[auto] items-center gap-8 py-10 sm:py-14 lg:min-h-[88vh] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-16">
          <div className="relative z-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--primary))]">Premium Homestays in Bir, Himachal Pradesh</p>
            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Stay close to what matters, in spaces that feel deeply considered.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[hsl(var(--muted-foreground))] sm:text-lg sm:leading-8">
              Trayati Stays brings together premium comfort, mountain-town ease, and genuinely personal hosting for families, slow travellers, and professionals escaping to Bir.
            </p>
            <HeroSearch />
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-[hsl(var(--muted-foreground))]">
              <span>Airbnb-hosted stays</span>
              <span>Google Reviews ready</span>
              <span>Workation-friendly stays</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-6 hidden h-28 w-28 rounded-full bg-[hsl(var(--accent))]/40 blur-3xl lg:block" />
            <div className="glass-panel overflow-hidden p-2 sm:p-3">
              <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative h-[300px] overflow-hidden rounded-[24px] sm:h-[420px] lg:h-[520px]">
                  <Image src={properties[0].images[0]} alt={properties[0].name} fill className="object-cover" priority />
                </div>
                <div className="grid gap-3">
                  <div className="relative h-44 overflow-hidden rounded-[24px] sm:h-52 lg:h-60">
                    <Image src={properties[1].images[1]} alt={properties[1].name} fill className="object-cover" />
                  </div>
                  <div className="relative h-44 overflow-hidden rounded-[24px] sm:h-52 lg:h-60">
                    <Image src={properties[2].images[2]} alt={properties[2].name} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Trayati Stays"
            title="Premium hospitality that feels reassuring from the first click to checkout."
            description="Built for the realities of premium mountain stays: family comfort, adventure access, workation dependability, and hosts who stay present."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {usps.map((usp) => (
              <article key={usp.title} className="glass-panel p-6">
                <usp.icon className="h-8 w-8 text-[hsl(var(--primary))]" />
                <h3 className="mt-5 font-serif text-2xl">{usp.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{usp.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Featured Properties" title="Homes and suites shaped for calm, convenience, and credible comfort." />
            <Button asChild variant="outline">
              <Link href="/properties">
                View all properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/40 dark:bg-white/[0.02]">
        <div className="container-shell">
          <SectionHeading eyebrow="Guest Highlights" title="The latest guest voices, straight from recent stays." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {guestHighlights.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <TrustBadge label="Airbnb Standard" value="Superhost-ready hospitality" />
          <TrustBadge label="Google Reviews" value="4.8/5 guest satisfaction" />
          <TrustBadge label="Verified Guests" value={`${aggregateStats.verifiedGuests}+ guest journeys`} />
          <TrustBadge label="Response Time" value="Typically under 10 minutes" />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-5 sm:p-8">
            <SectionHeading
              eyebrow="Instagram Moments"
              title="A visual rhythm of earthy interiors, restful corners, and real travel moments."
              description="Wire this section to your live Instagram embed or a later social feed endpoint."
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {properties.flatMap((property) => property.images.slice(0, 3)).slice(0, 6).map((image, index) => (
                <div key={image} className={`relative overflow-hidden rounded-[24px] ${index === 0 ? "col-span-2 row-span-2 h-56 sm:h-72" : "h-28 sm:h-36"}`}>
                  <Image src={image} alt="Trayati stays gallery" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-5 sm:p-8">
            <SectionHeading
              eyebrow="Guest Experiences"
              title="Stories that go beyond ratings."
              description="Editorial-style guest journals create trust, enrich SEO, and help future guests picture their own stay."
            />
            <div className="mt-8 grid gap-6">
              {experiences.slice(0, 2).map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="glass-panel grid gap-6 overflow-hidden p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--primary))]">Newsletter</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Get local stay tips and a welcome booking perk.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))]">
                Join the Trayati list for Bir travel tips, mountain stay guides, and a launch discount for your next getaway.
              </p>
            </div>
            <form className="grid gap-3 self-end">
              <input className="field-base h-12 rounded-2xl px-4 text-sm" placeholder="Your email address" />
              <Button size="lg">Claim 10% welcome offer</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
