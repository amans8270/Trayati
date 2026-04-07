import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Share2 } from "lucide-react";

import { CommentSection } from "@/components/reviews/comment-section";
import { StarRating } from "@/components/reviews/star-rating";
import { comments, experiences } from "@/lib/mock-data";
import { JsonLd } from "@/lib/seo";
import { buildMetadata, siteConfig } from "@/lib/site";
import { formatMonthYear } from "@/lib/utils";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const experience = experiences.find((item) => item.slug === params.slug);
  if (!experience) return {};

  return buildMetadata({
    title: experience.title,
    description: experience.excerpt,
    path: `/reviews/experiences/${experience.slug}`,
  });
}

export default function ExperienceDetailPage({ params }: { params: { slug: string } }) {
  const experience = experiences.find((item) => item.slug === params.slug);
  if (!experience) notFound();

  const experienceComments = comments.filter((comment) => comment.experienceId === experience.id);
  const shareUrl = `${siteConfig.url}/reviews/experiences/${experience.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: experience.title,
          author: { "@type": "Person", name: experience.author },
          datePublished: experience.createdAt,
          image: `${siteConfig.url}${experience.coverMedia}`,
          publisher: { "@type": "Organization", name: "Trayati Stays" },
        }}
      />
      <div className="container-shell section-space">
        <div className="relative h-[520px] overflow-hidden rounded-[36px]">
          <Image src={experience.coverMedia} alt={experience.title} fill className="object-cover" />
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <Link href={`/properties/${experience.propertySlug}`} className="text-sm font-semibold text-[hsl(var(--primary))]">
            {experience.propertyName}
          </Link>
          <h1 className="mt-3 font-serif text-5xl">{experience.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
            <span>{experience.author}</span>
            <span>{formatMonthYear(experience.stayDate)}</span>
            <StarRating value={experience.rating} />
          </div>

          <div className="prose-trayati mt-8" dangerouslySetInnerHTML={{ __html: experience.body }} />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {experience.gallery.map((image) => (
              <div key={image} className="relative h-56 overflow-hidden rounded-[28px]">
                <Image src={image} alt={experience.title} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`} className="rounded-full border border-[hsl(var(--border))] px-4 py-2 text-sm">
              WhatsApp
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} className="rounded-full border border-[hsl(var(--border))] px-4 py-2 text-sm">
              Facebook
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`} className="rounded-full border border-[hsl(var(--border))] px-4 py-2 text-sm">
              X
            </a>
            <button className="rounded-full border border-[hsl(var(--border))] px-4 py-2 text-sm">
              <Share2 className="mr-2 inline h-4 w-4" />
              Copy Link
            </button>
          </div>

          <section className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <MessageCircle className="h-5 w-5" />
              <h2 className="font-serif text-3xl">Comments</h2>
            </div>
            <CommentSection experienceSlug={experience.slug} initialComments={experienceComments} />
          </section>
        </div>
      </div>
    </>
  );
}
