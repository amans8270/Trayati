import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-900/30"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </Link>
  );
}
