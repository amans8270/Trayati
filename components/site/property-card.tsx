import Image from "next/image";
import Link from "next/link";
import { BedDouble, IndianRupee, MapPin, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { type Property } from "@/lib/types";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="glass-panel overflow-hidden">
      <div className="relative h-72">
        <Image src={property.images[0]} alt={property.name} fill className="object-cover" />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">{property.type}</span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-[hsl(var(--foreground))] dark:bg-black/50 dark:text-[hsl(var(--foreground))]">
            <Star className="mr-1 inline h-4 w-4 fill-current text-amber-500" />
            {property.rating}
          </span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div>
          <Link href={`/properties/${property.slug}`} className="font-serif text-2xl">
            {property.name}
          </Link>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-[hsl(var(--muted-foreground))]">
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{property.location}</span>
            <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" />Up to {property.maxGuests}</span>
            <span className="inline-flex items-center gap-1"><BedDouble className="h-4 w-4" />{property.beds}</span>
          </div>
        </div>
        <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">{property.shortDescription}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-[hsl(var(--muted-foreground))]">
            <span className="text-lg font-semibold text-[hsl(var(--foreground))]">
              <IndianRupee className="inline h-5 w-5" />
              {property.price.toLocaleString("en-IN")}
            </span>{" "}
            / night
          </div>
          <Button asChild>
            <Link href={`/properties/${property.slug}`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
