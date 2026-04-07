import { buildMetadata } from "@/lib/site";
import { experiences, reviews } from "@/lib/mock-data";

export const metadata = buildMetadata({
  title: "Admin",
  description: "Admin operations for properties, bookings, moderation, and revenue visibility.",
  path: "/admin",
});

export default function AdminPage() {
  return (
    <div className="container-shell section-space">
      <h1 className="font-serif text-5xl">Admin Control Room</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-[hsl(var(--muted-foreground))]">
        This dashboard lays out the moderation and operational surfaces you requested: property CRUD, bookings, pricing, reviews queue, experiences queue, and coupon generation.
      </p>
      <div className="mt-10 grid gap-8 xl:grid-cols-2">
        <section className="glass-panel p-8">
          <h2 className="font-serif text-3xl">Reviews Moderation Queue</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-[hsl(var(--muted-foreground))]">
                  <th className="pb-3">Guest</th>
                  <th className="pb-3">Property</th>
                  <th className="pb-3">Rating</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="border-t border-[hsl(var(--border))]">
                    <td className="py-4">{review.author}</td>
                    <td className="py-4">{review.propertyName}</td>
                    <td className="py-4">{review.overallRating}/5</td>
                    <td className="py-4">{review.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="glass-panel p-8">
          <h2 className="font-serif text-3xl">Experiences Queue</h2>
          <div className="mt-6 space-y-4">
            {experiences.map((experience) => (
              <div key={experience.id} className="rounded-[24px] border border-[hsl(var(--border))] p-4">
                <p className="font-medium">{experience.title}</p>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{experience.author} · {experience.propertyName}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white">Approve</button>
                  <button className="rounded-full bg-rose-600 px-4 py-2 text-xs font-semibold text-white">Reject</button>
                  <button className="rounded-full bg-stone-200 px-4 py-2 text-xs font-semibold">Flag</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
