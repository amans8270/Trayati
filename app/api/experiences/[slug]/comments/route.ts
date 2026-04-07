import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { slug: string } }) {
  const body = await request.json();
  return NextResponse.json(
    {
      data: {
        id: `com_${Date.now()}`,
        experienceSlug: params.slug,
        body: body.body,
      },
      message: "Comment posted.",
    },
    { status: 201 },
  );
}
