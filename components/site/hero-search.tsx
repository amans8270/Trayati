"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSearch() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [location, setLocation] = useState("Bir, Himachal Pradesh");
  const [guests, setGuests] = useState("2");

  const href = useMemo(() => {
    const params = new URLSearchParams({
      location,
      guests,
    });
    if (checkIn) params.set("checkIn", checkIn.toISOString());
    if (checkOut) params.set("checkOut", checkOut.toISOString());
    return `/properties?${params.toString()}`;
  }, [checkIn, checkOut, guests, location]);

  return (
    <div
      data-reveal
      className="glass-panel mesh-highlight mt-8 grid gap-3 p-3 sm:mt-10 sm:gap-4 sm:p-4 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_auto]"
    >
      <Input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Location" />
      <DatePicker
        selected={checkIn}
        onChange={(date: Date | null) => setCheckIn(date)}
        placeholderText="Check-in"
        className="field-base h-12 w-full rounded-[22px] px-4 text-sm"
      />
      <DatePicker
        selected={checkOut}
        onChange={(date: Date | null) => setCheckOut(date)}
        placeholderText="Check-out"
        className="field-base h-12 w-full rounded-[22px] px-4 text-sm"
      />
      <Input value={guests} onChange={(event) => setGuests(event.target.value)} placeholder="Guests" />
      <Button asChild size="lg" className="w-full lg:w-auto">
        <Link href={href}>
          <Search className="mr-2 h-4 w-4" />
          Check Availability
        </Link>
      </Button>
    </div>
  );
}
