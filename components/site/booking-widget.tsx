"use client";

import { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarDays, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Property } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

export function BookingWidget({ property }: { property: Property }) {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState("2");

  const summary = useMemo(() => {
    if (!checkIn || !checkOut) return property.price;
    const nights = Math.max((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24), 1);
    return property.price * nights;
  }, [checkIn, checkOut, property.price]);

  async function startBooking() {
    await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        propertyId: property.id,
        guestName: "Demo Guest",
        propertyName: property.name,
        checkIn: checkIn?.toISOString(),
        checkOut: checkOut?.toISOString(),
        guests: Number(guests),
        totalAmount: summary,
      }),
    });
  }

  return (
    <div className="glass-panel sticky top-28 space-y-5 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">From</p>
          <p className="font-serif text-3xl">{formatCurrency(property.price)}</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Instant booking</span>
      </div>
      <div className="grid gap-3">
        <DatePicker
          selected={checkIn}
          onChange={(date: Date | null) => setCheckIn(date)}
          placeholderText="Check-in"
          className="field-base h-12 w-full rounded-2xl px-4 text-sm"
        />
        <DatePicker
          selected={checkOut}
          onChange={(date: Date | null) => setCheckOut(date)}
          placeholderText="Check-out"
          className="field-base h-12 w-full rounded-2xl px-4 text-sm"
        />
        <Input value={guests} onChange={(event) => setGuests(event.target.value)} placeholder="Guests" />
      </div>
      <div className="surface-muted rounded-3xl p-4 text-sm text-[hsl(var(--muted-foreground))] dark:text-on-dark-soft">
        <p className="inline-flex items-center gap-2 font-medium text-[hsl(var(--foreground))]">
          <CalendarDays className="h-4 w-4" />
          Step 1 to 4 booking flow
        </p>
        <p className="mt-2">Dates and guests, guest details, Razorpay checkout, then confirmation plus email receipt.</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span>Total</span>
        <span className="font-semibold">{formatCurrency(summary)}</span>
      </div>
      <Button className="w-full" onClick={startBooking}>
        Reserve with Razorpay
      </Button>
      <Button variant="outline" className="w-full">
        Stripe for international guests
      </Button>
      <p className="inline-flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
        <ShieldCheck className="h-4 w-4" />
        Secure payment routing with Razorpay primary and Stripe fallback.
      </p>
    </div>
  );
}
