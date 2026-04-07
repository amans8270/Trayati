"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type CommentItem = {
  id: string;
  author: string;
  body: string;
  createdAt: string;
};

export function CommentSection({
  experienceSlug,
  initialComments,
}: {
  experienceSlug: string;
  initialComments: CommentItem[];
}) {
  const { status, data } = useSession();
  const [body, setBody] = useState("");
  const [comments, setComments] = useState(initialComments);

  async function handleSubmit() {
    if (status !== "authenticated") {
      await signIn(undefined, { callbackUrl: `/reviews/experiences/${experienceSlug}` });
      return;
    }

    if (!body.trim()) return;

    const optimistic = {
      id: crypto.randomUUID(),
      author: data?.user?.name ?? "Guest",
      body,
      createdAt: new Date().toISOString(),
    };

    setComments((value) => [optimistic, ...value]);
    setBody("");
    await fetch(`/api/experiences/${experienceSlug}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body }),
    });
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-3">
        <Textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="Share a thoughtful comment" />
        <Button onClick={handleSubmit}>Post Comment</Button>
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="rounded-3xl border border-[hsl(var(--border))] bg-white/70 p-4">
            <p className="font-medium">{comment.author}</p>
            <p className="mt-2 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
