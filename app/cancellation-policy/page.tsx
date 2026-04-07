import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Cancellation Policy",
  description: "Review Trayati Stays cancellation terms for flexible and confirmed reservations.",
  path: "/cancellation-policy",
});

export default function CancellationPolicyPage() {
  return (
    <div className="container-shell section-space">
      <div className="glass-panel max-w-4xl p-8">
        <h1 className="font-serif text-5xl">Cancellation Policy</h1>
        <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">Add your final legal copy here. This page is scaffolded and linked for SEO and trust completeness.</p>
      </div>
    </div>
  );
}
