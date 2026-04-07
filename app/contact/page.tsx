import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact Trayati Stays via form, WhatsApp, or direct support channels.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container-shell section-space grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="glass-panel p-8">
        <h1 className="font-serif text-5xl">Contact us</h1>
        <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">For bookings, longer stays, pilgrimage coordination, and corporate requirements.</p>
        <div className="mt-8 space-y-3 text-sm">
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank">
            WhatsApp us
          </a>
        </div>
      </div>
      <div className="glass-panel p-8">
        <form className="grid gap-4">
          <input className="h-12 rounded-2xl border border-[hsl(var(--border))] bg-white/75 px-4" placeholder="Name" />
          <input className="h-12 rounded-2xl border border-[hsl(var(--border))] bg-white/75 px-4" placeholder="Email" />
          <textarea className="min-h-[180px] rounded-3xl border border-[hsl(var(--border))] bg-white/75 px-4 py-3" placeholder="How can we help?" />
          <button className="h-12 rounded-full bg-[hsl(var(--primary))] px-6 text-sm font-semibold text-[hsl(var(--primary-foreground))]">Send message</button>
        </form>
        <div className="mt-6 rounded-[28px] bg-stone-100 p-5 text-sm text-[hsl(var(--muted-foreground))]">
          Map embed placeholder for Tirupati location and arrival instructions.
        </div>
      </div>
    </div>
  );
}
