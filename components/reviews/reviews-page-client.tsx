"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

import { ExperienceCard } from "@/components/reviews/experience-card";
import { LoginPromptModal } from "@/components/reviews/login-prompt-modal";
import { ReviewCard } from "@/components/reviews/review-card";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { experiences, reviews } from "@/lib/mock-data";

export function ReviewsPageClient() {
  const searchParams = useSearchParams();
  const { status } = useSession();
  const [loginOpen, setLoginOpen] = useState(searchParams.get("login") === "1");
  const [visibleReviews, setVisibleReviews] = useState(4);
  const [visibleExperiences, setVisibleExperiences] = useState(3);

  const filteredReviews = useMemo(() => {
    const rating = searchParams.get("rating");
    const property = searchParams.get("property");
    const query = searchParams.get("q")?.toLowerCase();
    return reviews.filter((review) => {
      if (rating && review.overallRating !== Number(rating)) return false;
      if (property && review.propertySlug !== property) return false;
      if (query && !`${review.title} ${review.body}`.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [searchParams]);

  const filteredExperiences = useMemo(() => {
    const query = searchParams.get("q")?.toLowerCase();
    return experiences.filter((experience) => {
      if (query && !`${experience.title} ${experience.excerpt}`.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [searchParams]);

  return (
    <>
      <div className="glass-panel overflow-hidden p-8">
        <SectionHeading
          eyebrow="Real Stays. Real Stories."
          title="Read what our guests experienced and share yours."
          description="A public trust layer built for SEO, guest confidence, and authentic community storytelling."
        />
        <div className="mt-8">
          {status === "authenticated" ? (
            <Button asChild>
              <Link href="/reviews/experiences/new">Share Your Experience</Link>
            </Button>
          ) : (
            <Button onClick={() => setLoginOpen(true)}>Login to Share Your Experience</Button>
          )}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto]">
        <form className="glass-panel grid gap-4 p-5 lg:grid-cols-5">
          <input name="property" placeholder="Property slug" defaultValue={searchParams.get("property") ?? ""} className="h-12 rounded-2xl border border-[hsl(var(--border))] bg-white/75 px-4 text-sm" />
          <select name="rating" defaultValue={searchParams.get("rating") ?? ""} className="h-12 rounded-2xl border border-[hsl(var(--border))] bg-white/75 px-4 text-sm">
            <option value="">All ratings</option>
            {[5, 4, 3, 2, 1].map((value) => (
              <option key={value} value={value}>
                {value} stars
              </option>
            ))}
          </select>
          <select name="category" defaultValue={searchParams.get("category") ?? ""} className="h-12 rounded-2xl border border-[hsl(var(--border))] bg-white/75 px-4 text-sm">
            <option value="">Review or Experience</option>
            <option value="review">Review</option>
            <option value="experience">Experience</option>
          </select>
          <input name="q" placeholder="Search stories" defaultValue={searchParams.get("q") ?? ""} className="h-12 rounded-2xl border border-[hsl(var(--border))] bg-white/75 px-4 text-sm" />
          <button className="h-12 rounded-full bg-[hsl(var(--primary))] px-6 text-sm font-semibold text-[hsl(var(--primary-foreground))]">Apply</button>
        </form>
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-4xl">Guest Reviews</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filteredReviews.slice(0, visibleReviews).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        {visibleReviews < filteredReviews.length ? (
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => setVisibleReviews((value) => value + 4)}>
              Load More Reviews
            </Button>
          </div>
        ) : null}
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-4xl">Guest Experiences</h2>
          <Button asChild variant="outline">
            <Link href="/reviews/experiences/new">Share Your Story</Link>
          </Button>
        </div>
        <div className="columns-1 gap-6 lg:columns-2">
          {filteredExperiences.slice(0, visibleExperiences).map((experience) => (
            <div key={experience.id} className="mb-6 break-inside-avoid">
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
        {visibleExperiences < filteredExperiences.length ? (
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => setVisibleExperiences((value) => value + 3)}>
              Load More Stories
            </Button>
          </div>
        ) : null}
      </section>

      <LoginPromptModal open={loginOpen} onOpenChange={setLoginOpen} callbackUrl="/reviews/submit" />
    </>
  );
}
