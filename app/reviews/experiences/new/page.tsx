import Link from "next/link";

import { ExperienceForm } from "@/components/reviews/experience-form";
import { Button } from "@/components/ui/button";
import { getOptionalServerSession } from "@/lib/auth";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Share Experience",
  description: "Publish a travel story from your stay at Trayati Stays with editorial storytelling, media, and ratings.",
  path: "/reviews/experiences/new",
});

export default async function NewExperiencePage() {
  const session = await getOptionalServerSession();

  return (
    <div className="container-shell section-space">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--primary))]">Guest storytelling</p>
        <h1 className="mt-3 font-serif text-5xl">Share your experience</h1>
        <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">
          Rich-text guest stories give future travellers more texture than star ratings alone, while creating indexable trust content for search.
        </p>
      </div>
      {session ? (
        <ExperienceForm />
      ) : (
        <div className="glass-panel p-8">
          <p className="text-lg">Please sign in to publish your story.</p>
          <Button asChild className="mt-4">
            <Link href="/reviews?login=1">Open login prompt</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
