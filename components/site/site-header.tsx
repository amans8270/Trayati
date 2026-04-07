"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-40 border-b border-white/30 bg-[hsl(var(--background))]/85 backdrop-blur-xl dark:border-white/5 dark:bg-[hsl(var(--background))]/80">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/40 bg-black dark:border-white/10">
            <Image src="/brand/logo-trayati.jpg" alt="Trayati Stays" fill className="object-cover" />
          </div>
          <div>
            <p className="font-serif text-xl tracking-wide">Trayati Stays</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--muted-foreground))]">Where Every Stay Feels Like Home</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-[hsl(var(--muted-foreground))] transition hover:bg-white/60 hover:text-[hsl(var(--foreground))] dark:hover:bg-white/8",
                pathname === item.href && "bg-white text-[hsl(var(--foreground))] shadow-sm dark:bg-white/8",
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

        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
