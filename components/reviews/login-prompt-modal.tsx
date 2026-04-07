"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "lucide-react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

export function LoginPromptModal({
  open,
  onOpenChange,
  callbackUrl,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  callbackUrl: string;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-[hsl(var(--card))] p-8 shadow-2xl">
          <Dialog.Close className="absolute right-5 top-5 rounded-full p-2 text-[hsl(var(--muted-foreground))]">
            <X className="h-5 w-5" />
          </Dialog.Close>
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl bg-black">
            <Image src="/brand/logo-trayati.jpg" alt="Trayati Stays" width={64} height={64} className="object-cover" />
          </div>
          <Dialog.Title className="font-serif text-3xl">Join Trayati Stays to share your story</Dialog.Title>
          <Dialog.Description className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            Sign in to post reviews, publish guest experiences, leave comments, and vote helpful on stories from other travellers.
          </Dialog.Description>
          <div className="mt-6 grid gap-3">
            <Button onClick={() => signIn("google", { callbackUrl })}>Continue with Google</Button>
            <Button variant="outline" onClick={() => signIn("credentials", { callbackUrl })}>
              Email Login
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
