import { buildMetadata } from "@/lib/site";
import { properties } from "@/lib/mock-data";
import { PropertyCard } from "@/components/site/property-card";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata = buildMetadata({
  title: "Properties",
  description: "Browse premium Trayati Stays homes and suites in Tirupati with filters for guests, dates, price, and amenities.",
  path: "/properties",
});

export default function PropertiesPage({
  searchParams,
}: {
  searchParams?: {
    guests?: string;
    type?: string;
    amenity?: string;
  };
}) {
  const filtered = properties.filter((property) => {
    if (searchParams?.guests && property.maxGuests < Number(searchParams.guests)) return false;
    if (searchParams?.type && property.type !== searchParams.type) return false;
    if (searchParams?.amenity && !property.amenities.includes(searchParams.amenity as never)) return false;
    return true;
  });

  return (
    <div className="container-shell section-space">
      <SectionHeading
        eyebrow="Properties"
        title="Find the stay that fits your pace, group size, and reason for travel."
        description="Filters update the URL for shareable, SEO-friendly listing states. Add server-side pagination or database-backed search as your next production step."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="glass-panel h-fit space-y-4 p-6">
          <form className="grid gap-4">
            <label className="grid gap-2 text-sm">
              Stay type
              <select name="type" defaultValue={searchParams?.type} className="field-base h-12 rounded-2xl px-4">
                <option value="">All</option>
                {Array.from(new Set(properties.map((property) => property.type))).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              Guests
              <input name="guests" defaultValue={searchParams?.guests} className="field-base h-12 rounded-2xl px-4" />
            </label>
            <label className="grid gap-2 text-sm">
              Amenity
              <select name="amenity" defaultValue={searchParams?.amenity} className="field-base h-12 rounded-2xl px-4">
                <option value="">All</option>
                {Array.from(new Set(properties.flatMap((property) => property.amenities))).map((amenity) => (
                  <option key={amenity} value={amenity}>
                    {amenity}
                  </option>
                ))}
              </select>
            </label>
            <button className="h-12 rounded-full bg-[hsl(var(--primary))] px-4 text-sm font-semibold text-[hsl(var(--primary-foreground))]">Apply Filters</button>
          </form>
        </aside>
        <div className="grid gap-6 xl:grid-cols-2">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
