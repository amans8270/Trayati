"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { StarRating } from "@/components/reviews/star-rating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { properties } from "@/lib/mock-data";

type ReviewFormValues = {
  propertyId: string;
  checkIn: string;
  checkOut: string;
  title: string;
  body: string;
  confirmAuthentic: boolean;
};

export function ReviewForm() {
  const router = useRouter();
  const form = useForm<ReviewFormValues>({
    defaultValues: {
      propertyId: properties[0].id,
      checkIn: "",
      checkOut: "",
      title: "",
      body: "",
      confirmAuthentic: false,
    },
  });
  const [ratings, setRatings] = useState({
    overallRating: 5,
    cleanlinessRating: 5,
    locationRating: 5,
    hospitalityRating: 5,
    valueRating: 5,
  });
  const body = form.watch("body");

  async function onSubmit(values: ReviewFormValues) {
    await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        ...ratings,
        photos: [],
      }),
    });
    router.push("/dashboard?tab=reviews&submitted=1");
  }

  return (
    <form className="glass-panel grid gap-6 p-6 sm:p-8" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Property stayed at
          <select className="h-12 rounded-2xl border border-[hsl(var(--border))] bg-white/75 px-4" {...form.register("propertyId")}>
            {properties.map((property) => (
              <option key={property.id} value={property.id}>
                {property.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          Check-in
          <Input type="date" {...form.register("checkIn")} />
        </label>
        <label className="grid gap-2 text-sm">
          Check-out
          <Input type="date" {...form.register("checkOut")} />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(ratings).map(([key, value]) => (
          <div key={key} className="rounded-3xl border border-[hsl(var(--border))] bg-white/70 p-4">
            <p className="mb-3 text-sm font-medium capitalize">{key.replace("Rating", "").replace(/([A-Z])/g, " $1")}</p>
            <StarRating value={value} onChange={(next) => setRatings((current) => ({ ...current, [key]: next }))} size="lg" />
          </div>
        ))}
      </div>

      <label className="grid gap-2 text-sm">
        Review title
        <Input maxLength={80} {...form.register("title")} />
      </label>

      <label className="grid gap-2 text-sm">
        Review body
        <Textarea maxLength={1000} {...form.register("body")} />
        <span className="text-xs text-[hsl(var(--muted-foreground))]">{body.length}/1000 characters</span>
      </label>

      <label className="flex items-center gap-3 rounded-3xl border border-dashed border-[hsl(var(--border))] p-4 text-sm">
        <input type="checkbox" {...form.register("confirmAuthentic")} />
        I confirm this review is based on my genuine experience.
      </label>

      <Button type="submit" size="lg">
        Submit for moderation
      </Button>
    </form>
  );
}
