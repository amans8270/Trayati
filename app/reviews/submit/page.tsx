import { getServerSession } from "next-auth";
import Link from "next/link";

import { ReviewForm } from "@/components/reviews/review-form";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Submit Review",
  description: "Share a verified review for your Trayati Stays booking with moderated, public-facing guest feedback.",
  path: "/reviews/submit",
});

export default async function SubmitReviewPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="container-shell section-space">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--primary))]">Verified review flow</p>
        <h1 className="mt-3 font-serif text-5xl">Share a guest review</h1>
        <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">
          Reviews submit to moderation as <strong>PENDING</strong>, trigger an admin email alert, and publish after approval.
        </p>
      </div>
      {session ? (
        <ReviewForm />
      ) : (
        <div className="glass-panel p-8">
          <p className="text-lg">Please sign in to leave a review.</p>
          <Button asChild className="mt-4">
            <Link href="/reviews?login=1">Open login prompt</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
