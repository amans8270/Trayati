import { reviews } from "@/lib/mock-data";

export function RatingBreakdown({ propertyId }: { propertyId?: string }) {
  const source = propertyId ? reviews.filter((review) => review.propertyId === propertyId) : reviews;
  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: source.filter((review) => review.overallRating === star).length,
  }));
  const max = Math.max(...counts.map((item) => item.count), 1);

  return (
    <div className="space-y-4">
      {counts.map((item) => (
        <div key={item.star} className="flex items-center gap-3 text-sm">
          <span className="w-8 font-medium">{item.star}★</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-stone-200">
            <div className="h-full rounded-full bg-[hsl(var(--primary))]" style={{ width: `${(item.count / max) * 100}%` }} />
          </div>
          <span className="w-8 text-right text-[hsl(var(--muted-foreground))]">{item.count}</span>
        </div>
      ))}
    </div>
  );
}
