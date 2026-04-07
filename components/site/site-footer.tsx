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
    <footer className="relative overflow-hidden border-t border-black/5 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -right-20 top-10 h-40 w-40 rounded-full bg-[hsl(var(--accent))]/15 blur-3xl" />

      <div className="container-shell py-12 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-black">
                <Image src="/brand/logo-trayati.jpg" alt="Trayati Stays" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-3xl">Trayati Stays</p>
                <p className="text-xs uppercase tracking-[0.28em] text-white/60">Where Every Stay Feels Like Home</p>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
              Premium short-stay homes in {siteConfig.city} for mountain travellers, families, and workation guests. Warm hosting, reliable support, and restful spaces designed to feel personal.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/properties">
                  Book Your Stay
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10 sm:w-auto">
                <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Location</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-white/88">
                  <MapPin className="h-4 w-4" />
                  {siteConfig.city}, India
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Call</p>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="mt-2 inline-flex items-center gap-2 text-sm text-white/88">
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-flex items-center gap-2 text-sm text-white/88">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Explore</p>
              <div className="mt-4 grid gap-3 text-sm">
                {exploreLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-white/82 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Policies & Social</p>
              <div className="mt-4 grid gap-3 text-sm">
                {policyLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-white/82 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <Link
                  href={siteConfig.social.facebook}
                  target="_blank"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/10 text-white/82 hover:bg-white/10 hover:text-white"
                >
                  <Share2 className="h-4 w-4" />
                </Link>
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/10 text-white/82 hover:bg-white/10 hover:text-white"
                >
                  <Camera className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Trayati Stays. All rights reserved.</p>
          <p>Designed for premium homestay discovery, trusted reviews, and seamless bookings.</p>
        </div>
      </div>
    </footer>
  );
}
