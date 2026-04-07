import { buildMetadata } from "@/lib/site";
import { bookings, experiences, reviews } from "@/lib/mock-data";
import { formatCurrency, formatDateRange } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Dashboard",
  description: "Guest dashboard for bookings, reviews, experiences, and profile settings.",
  path: "/dashboard",
});

export default function DashboardPage() {
  return (
    <div className="container-shell section-space">
      <h1 className="font-serif text-5xl">Guest Dashboard</h1>
      <div className="mt-10 grid gap-8">
        <section className="glass-panel p-8">
          <h2 className="font-serif text-3xl">My Bookings</h2>
          <div className="mt-6 grid gap-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="field-base rounded-[28px] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">{booking.propertyName}</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">{formatDateRange(booking.checkIn, booking.checkOut)}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{formatCurrency(booking.totalAmount)}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--primary))]">{booking.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="glass-panel p-8">
            <h2 className="font-serif text-3xl">My Reviews</h2>
            <div className="mt-6 space-y-4">
              {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="rounded-[24px] border border-[hsl(var(--border))] p-4">
                  <p className="font-medium">{review.title}</p>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{review.propertyName}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-amber-600">Pending / Published ready</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-8">
            <h2 className="font-serif text-3xl">My Experiences</h2>
            <div className="mt-6 space-y-4">
              {experiences.map((experience) => (
                <div key={experience.id} className="rounded-[24px] border border-[hsl(var(--border))] p-4">
                  <p className="font-medium">{experience.title}</p>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{experience.likes} likes · {experience.commentsCount} comments</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
