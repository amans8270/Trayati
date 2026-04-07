import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-3">
          <p className="font-serif text-2xl">Trayati Stays</p>
          <p className="max-w-xs text-sm text-white/80">{siteConfig.tagline}. Premium short-stay homes shaped for warmth, trust, and calm.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Explore</p>
          <Link href="/properties">Properties</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Policies</p>
          <Link href="/faq">FAQ</Link>
          <Link href="/cancellation-policy">Cancellation Policy</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Contact</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <Link href={siteConfig.social.facebook} target="_blank">
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
