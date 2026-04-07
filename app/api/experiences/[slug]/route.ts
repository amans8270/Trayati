import { NextResponse } from "next/server";

import { experiences } from "@/lib/mock-data";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const experience = experiences.find((item) => item.slug === params.slug);
  if (!experience) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ data: experience });
}

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  const body = await request.json();
  return NextResponse.json({ data: { slug: params.slug, ...body }, message: "Experience updated." });
}

export async function DELETE(_: Request, { params }: { params: { slug: string } }) {
  return NextResponse.json({ message: `Experience ${params.slug} deleted.` });
}
