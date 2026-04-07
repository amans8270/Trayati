import { NextResponse } from "next/server";

import { reviews } from "@/lib/mock-data";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const review = reviews.find((item) => item.id === params.id);
  if (!review) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ data: review });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  return NextResponse.json({ data: { id: params.id, ...body }, message: "Review updated." });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Review ${params.id} deleted.` });
}
