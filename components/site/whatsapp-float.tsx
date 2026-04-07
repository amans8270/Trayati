import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      className="magnetic fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(135deg,#20c767,#63e6a7)] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-900/30 sm:bottom-6 sm:right-6 sm:px-5"
      data-magnetic
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </Link>
  );
}
