import { NextResponse } from "next/server";

import { experiences, properties } from "@/lib/mock-data";
import { experienceSchema } from "@/lib/validations";

export async function GET() {
  return NextResponse.json({ data: experiences, total: experiences.length });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = experienceSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const property = properties.find((item) => item.id === parsed.data.propertyId);

  return NextResponse.json(
    {
      data: {
        id: `exp_${Date.now()}`,
        ...parsed.data,
        propertyName: property?.name ?? "Trayati Stays",
        propertySlug: property?.slug ?? "trayati-stays",
        excerpt: "Fresh guest story submitted for moderation.",
        slug: payload.slug,
        status: "PENDING",
      },
      message: "Experience submitted for moderation.",
    },
    { status: 201 },
  );
}
