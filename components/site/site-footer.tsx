import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const exploreLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/reviews", label: "Reviews & Experiences" },
  { href: "/about", label: "About Trayati" },
  { href: "/blog", label: "Travel Guides" },
];

const policyLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 overflow-hidden px-2 pb-4 pt-8 sm:px-4 sm:pb-6 sm:pt-10">
      <div className="container-shell">
        <div className="glass-panel mesh-highlight overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute -right-20 top-10 h-40 w-40 rounded-full bg-[hsl(var(--accent))]/20 blur-3xl" />

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface-muted rounded-[30px] p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
                  <Image src="/brand/logo-trayati.jpg" alt="Trayati Stays" fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="font-serif text-3xl tracking-[-0.04em] sm:text-4xl">Trayati Stays</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-[hsl(var(--muted-foreground))]">Where Every Stay Feels Like Home</p>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[hsl(var(--muted-foreground))] sm:text-base">
                Premium short-stay homes in {siteConfig.city} for mountain travellers, families, and workation guests. Warm hosting,
                reliable support, and restful spaces designed to feel personal.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/properties">
                    Book Your Stay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="surface-muted rounded-[24px] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">Location</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-[hsl(var(--accent))]" />
                    {siteConfig.city}, India
                  </p>
                </div>
                <div className="surface-muted rounded-[24px] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">Call</p>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="mt-2 inline-flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-[hsl(var(--accent))]" />
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="surface-muted rounded-[24px] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-[hsl(var(--accent))]" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="surface-muted rounded-[30px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--muted-foreground))]">Explore</p>
                <div className="mt-4 grid gap-3 text-sm">
                  {exploreLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-[hsl(var(--foreground))]/82 hover:text-[hsl(var(--foreground))]">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="surface-muted rounded-[30px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--muted-foreground))]">Policies & Social</p>
                <div className="mt-4 grid gap-3 text-sm">
                  {policyLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-[hsl(var(--foreground))]/82 hover:text-[hsl(var(--foreground))]">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <Link
                    href={siteConfig.social.facebook}
                    target="_blank"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/45 text-[hsl(var(--foreground))]/82 hover:bg-white/70 hover:text-[hsl(var(--foreground))] dark:border-white/10 dark:bg-white/5"
                  >
                    <Share2 className="h-4 w-4" />
                  </Link>
                  <Link
                    href={siteConfig.social.instagram}
                    target="_blank"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/45 text-[hsl(var(--foreground))]/82 hover:bg-white/70 hover:text-[hsl(var(--foreground))] dark:border-white/10 dark:bg-white/5"
                  >
                    <Camera className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
            <p>{"\u00A9"} 2026 Trayati Stays. All rights reserved.</p>
            <p>Designed for premium homestay discovery, trusted reviews, and seamless bookings.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
