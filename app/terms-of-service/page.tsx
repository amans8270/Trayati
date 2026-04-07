import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Read the guest booking, payment, and content terms for Trayati Stays.",
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <div className="container-shell section-space">
      <div className="glass-panel max-w-4xl p-8">
        <h1 className="font-serif text-5xl">Terms of Service</h1>
        <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">Insert your production legal copy here for reservations, community content, and payment processing terms.</p>
      </div>
    </div>
  );
}
