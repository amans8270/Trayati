import Image from "next/image";
import Link from "next/link";
import { BedDouble, IndianRupee, MapPin, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { type Property } from "@/lib/types";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article data-reveal className="glass-panel panel-3d mesh-highlight overflow-hidden">
      <div className="relative h-60 sm:h-72">
        <Image src={property.images[0]} alt={property.name} fill className="object-cover" />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="rounded-full border border-white/14 bg-black/50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {property.type}
          </span>
          <span className="rounded-full border border-white/50 bg-white/80 px-3 py-1 text-sm font-semibold text-[hsl(var(--foreground))] shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/45 dark:text-[hsl(var(--foreground))]">
            <Star className="mr-1 inline h-4 w-4 fill-current text-amber-500" />
            {property.rating}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <div>
          <Link href={`/properties/${property.slug}`} className="premium-heading font-serif text-2xl sm:text-3xl">
            {property.name}
          </Link>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-[hsl(var(--muted-foreground))]">
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-[hsl(var(--accent))]" />{property.location}</span>
            <span className="inline-flex items-center gap-1"><Users className="h-4 w-4 text-[hsl(var(--accent))]" />Up to {property.maxGuests}</span>
            <span className="inline-flex items-center gap-1"><BedDouble className="h-4 w-4 text-[hsl(var(--accent))]" />{property.beds}</span>
          </div>
        </div>
        <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">{property.shortDescription}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-[hsl(var(--muted-foreground))]">
            <span className="text-lg font-semibold text-[hsl(var(--foreground))]">
              <IndianRupee className="inline h-5 w-5" />
              {property.price.toLocaleString("en-IN")}
            </span>{" "}
            / night
          </div>
          <Button asChild className="w-full sm:w-auto">
            <Link href={`/properties/${property.slug}`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
