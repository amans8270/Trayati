"use client";

import { useState } from "react";
import { ThumbsUp } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

export function HelpfulButton({ reviewId, initialCount }: { reviewId: string; initialCount: number }) {
  const { status } = useSession();
  const [count, setCount] = useState(initialCount);
  const [pending, setPending] = useState(false);

  async function handleVote() {
    if (status !== "authenticated") {
      await signIn(undefined, { callbackUrl: `/reviews?action=helpful&review=${reviewId}` });
      return;
    }

    setPending(true);
    setCount((value) => value + 1);
    await fetch(`/api/reviews/${reviewId}/helpful`, { method: "POST" }).catch(() => setCount(initialCount));
    setPending(false);
  }

  return (
    <Button variant="ghost" size="sm" className="px-0" disabled={pending} onClick={handleVote}>
      <ThumbsUp className="mr-2 h-4 w-4" />
      Helpful ({count})
    </Button>
  );
}
