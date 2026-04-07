import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn the brand story behind Trayati Stays and the hosting philosophy shaping every stay.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-shell section-space">
      <div className="glass-panel max-w-4xl p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--primary))]">About Trayati</p>
        <h1 className="mt-3 font-serif text-5xl">Premium hosting shaped around warmth, trust, and local care.</h1>
        <div className="prose-trayati mt-8">
          <p>Trayati Stays was imagined as a bridge between premium hospitality and the emotional comfort of staying in a cared-for home.</p>
          <p>We serve domestic travellers, pilgrims, families, and corporate guests who want dependable support without losing the softness and ease that make a stay memorable.</p>
          <p>Our host profile, community promise, and on-ground service rituals can expand here with founder photos, behind-the-brand storytelling, and press coverage.</p>
        </div>
      </div>
    </div>
  );
}
