"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { RichTextEditor } from "@/components/reviews/rich-text-editor";
import { StarRating } from "@/components/reviews/star-rating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { properties } from "@/lib/mock-data";
import { slugify } from "@/lib/utils";

const tags = ["Family Trip", "Solo Travel", "Couple Getaway", "Business Stay", "Adventure Escape"];

type ExperienceFormValues = {
  title: string;
  propertyId: string;
  coverMedia: string;
  tags: string[];
};

export function ExperienceForm() {
  const router = useRouter();
  const form = useForm<ExperienceFormValues>({
    defaultValues: {
      title: "",
      propertyId: properties[0].id,
      coverMedia: "/photos/21.avif",
      tags: ["Family Trip"],
    },
  });
  const [body, setBody] = useState("<p></p>");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(values: ExperienceFormValues) {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/experiences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          body,
          rating,
          slug: slugify(values.title),
          gallery: [values.coverMedia],
        }),
      });

      if (!response.ok) {
        throw new Error("We couldn't publish your story right now. Please try again.");
      }

      router.push("/dashboard?tab=experiences&submitted=1");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We couldn't publish your story right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="glass-panel grid gap-6 p-6 sm:p-8" onSubmit={form.handleSubmit(onSubmit)}>
      <label className="grid gap-2 text-sm">
        Experience title
        <Input maxLength={120} {...form.register("title")} />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Property tag
          <select className="field-base h-12 rounded-[22px] px-4" {...form.register("propertyId")}>
            {properties.map((property) => (
              <option key={property.id} value={property.id}>
                {property.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          Cover photo URL
          <Input {...form.register("coverMedia")} />
        </label>
      </div>
      <div className="field-base rounded-3xl p-4">
        <p className="mb-3 text-sm font-medium">Overall rating</p>
        <StarRating value={rating} onChange={setRating} size="lg" />
      </div>
      <div className="grid gap-3">
        <p className="text-sm font-medium">Story body</p>
        <RichTextEditor value={body} onChange={setBody} />
      </div>
      <div className="grid gap-3">
        <p className="text-sm font-medium">Tags</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <label key={tag} className="field-base inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
              <input type="checkbox" value={tag} {...form.register("tags")} />
              {tag}
            </label>
          ))}
        </div>
      </div>
      {submitError ? <p className="rounded-[22px] border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-700 dark:text-rose-300">{submitError}</p> : null}
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Publishing..." : "Publish for moderation"}
      </Button>
    </form>
  );
}
