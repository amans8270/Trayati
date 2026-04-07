import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy, cookie, and data handling information for Trayati Stays.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="container-shell section-space">
      <div className="glass-panel max-w-4xl p-8">
        <h1 className="font-serif text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">Add your final DPDPA-compliant privacy language and cookie consent disclosures here.</p>
      </div>
    </div>
  );
}
