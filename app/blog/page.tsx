import { blogPosts } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Travel guides and local SEO content for Tirupati stays, pilgrimage planning, and premium short-stay travel.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="container-shell section-space">
      <h1 className="font-serif text-5xl">Travel Guides</h1>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="glass-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(var(--primary))]">Local SEO</p>
            <h2 className="mt-3 font-serif text-3xl">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
