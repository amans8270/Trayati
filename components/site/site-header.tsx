"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-2 pt-2 sm:px-4 sm:pt-4">
      <div className="container-shell">
        <div className="glass-panel mesh-highlight flex h-16 items-center justify-between gap-3 px-3 sm:h-20 sm:gap-4 sm:px-5">
          <Link href="/" className="min-w-0 flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-2xl border border-white/40 bg-black shadow-2xl dark:border-white/10 sm:h-12 sm:w-12">
            <Image src="/brand/logo-trayati.jpg" alt="Trayati Stays" fill className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="truncate font-serif text-2xl tracking-[-0.04em] sm:text-3xl">Trayati Stays</p>
              <p className="hidden text-[10px] uppercase tracking-[0.34em] text-[hsl(var(--muted-foreground))] sm:block">Where Every Stay Feels Like Home</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full border border-transparent px-4 py-2 text-sm text-[hsl(var(--muted-foreground))] transition hover:border-white/40 hover:bg-white/55 hover:text-[hsl(var(--foreground))] dark:hover:border-white/10 dark:hover:bg-white/8",
                  pathname === item.href && "border-white/50 bg-white/75 text-[hsl(var(--foreground))] shadow-sm dark:border-white/10 dark:bg-white/8",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="outline">
              <Link href="/reviews/submit">Write a Review</Link>
            </Button>
            <Button asChild>
              <Link href="/properties">Book Your Stay</Link>
            </Button>
          </div>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm" />
              <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-[88vw] max-w-sm flex-col border-l border-white/10 bg-[hsl(var(--background))]/98 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <p className="font-serif text-3xl">Menu</p>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="sm">
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="mt-8 grid gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-[22px] border border-transparent px-4 py-3 text-base text-[hsl(var(--muted-foreground))] transition hover:border-white/40 hover:bg-white/60 hover:text-[hsl(var(--foreground))] dark:hover:border-white/10 dark:hover:bg-white/8",
                        pathname === item.href && "border-white/45 bg-white/75 text-[hsl(var(--foreground))] shadow-sm dark:border-white/10 dark:bg-white/8",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto grid gap-3 pt-8">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/reviews/submit" onClick={() => setOpen(false)}>
                      Write a Review
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/properties" onClick={() => setOpen(false)}>
                      Book Your Stay
                    </Link>
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
