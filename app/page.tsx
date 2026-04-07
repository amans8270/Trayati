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
      <section className="relative overflow-hidden pt-4 sm:pt-6">
        <div className="container-shell grid min-h-[auto] items-center gap-10 py-10 sm:py-14 lg:min-h-[88vh] lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-16">
          <div className="relative z-10" data-reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/45 bg-white/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent))] shadow-[0_18px_40px_-28px_rgba(72,92,201,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]" />
              Premium Homestays in Bir, Himachal Pradesh
            </div>
            <h1 className="premium-heading max-w-4xl font-serif text-5xl leading-[0.9] sm:text-7xl lg:text-[5.6rem]">
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

          <div className="hero-media-shell relative" data-reveal>
            <div className="absolute -left-10 top-6 hidden h-28 w-28 rounded-full bg-[hsl(var(--accent))]/40 blur-3xl lg:block" />
            <div className="absolute -right-10 top-14 hidden h-36 w-36 rounded-full bg-[hsl(var(--primary))]/35 blur-3xl lg:block" />
            <div className="glass-panel panel-3d mesh-highlight overflow-hidden p-2 sm:p-3">
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
              <div className="pointer-events-none absolute left-6 top-6 rounded-[24px] border border-white/45 bg-white/70 px-4 py-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--muted-foreground))]">Signature Stay</p>
                <p className="mt-1 text-sm font-semibold">{properties[0].name}</p>
              </div>
              <div className="pointer-events-none absolute bottom-6 right-6 rounded-[24px] border border-white/45 bg-white/75 px-4 py-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--muted-foreground))]">Guest Rating</p>
                <p className="mt-1 text-sm font-semibold">{aggregateStats.overallRating}/5 across verified stays</p>
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
              <article key={usp.title} data-reveal className="glass-panel panel-3d mesh-highlight p-6">
                <div className="inline-flex rounded-[24px] border border-white/40 bg-[linear-gradient(135deg,rgba(108,124,255,0.16),rgba(44,214,255,0.12))] p-4 dark:border-white/10">
                  <usp.icon className="h-8 w-8 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="premium-heading mt-5 font-serif text-3xl">{usp.title}</h3>
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

      <section className="section-space bg-white/30 dark:bg-white/[0.02]">
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
          <div data-reveal className="glass-panel mesh-highlight p-5 sm:p-8">
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
          <div data-reveal className="glass-panel mesh-highlight p-5 sm:p-8">
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
          <div data-reveal className="glass-panel mesh-highlight grid gap-6 overflow-hidden p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent))]">Newsletter</p>
              <h2 className="premium-heading mt-3 font-serif text-4xl sm:text-5xl">Get local stay tips and a welcome booking perk.</h2>
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
