import { NextResponse } from "next/server";

import { properties, reviews } from "@/lib/mock-data";
import { reviewSchema } from "@/lib/validations";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const property = searchParams.get("property");
  const rating = searchParams.get("rating");

  const filtered = reviews.filter((review) => {
    if (property && review.propertySlug !== property) return false;
    if (rating && review.overallRating !== Number(rating)) return false;
    return true;
  });

  return NextResponse.json({ data: filtered, total: filtered.length });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = reviewSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const property = properties.find((item) => item.id === parsed.data.propertyId);

  return NextResponse.json(
    {
      data: {
        id: `rev_${Date.now()}`,
        ...parsed.data,
        propertyName: property?.name ?? "Trayati Stays",
        status: "PENDING",
      },
      message: "Review submitted for moderation.",
    },
    { status: 201 },
  );
}
