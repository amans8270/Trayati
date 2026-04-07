import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { JsonLd } from "@/lib/seo";
import { buildMetadata } from "@/lib/site";

const faqs = [
  ["Do you host mountain travellers and paragliders?", "Yes. Our stays are well suited for Bir Billing trips, family mountain breaks, café-hopping weekends, and relaxed workations."],
  ["Can I pay online?", "Yes. The booking flow is prepared for Razorpay with Stripe fallback for international payments."],
  ["Are reviews verified?", "Verified stay badges can be attached to reviews linked to completed bookings."],
];

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Frequently asked questions about bookings, payments, policies, and guest reviews.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="container-shell section-space">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          })),
        }}
      />
      <div className="glass-panel max-w-4xl p-8">
        <h1 className="font-serif text-5xl">Frequently Asked Questions</h1>
        <Accordion.Root type="single" collapsible className="mt-8 space-y-4">
          {faqs.map(([question, answer]) => (
            <Accordion.Item key={question} value={question} className="rounded-[24px] border border-[hsl(var(--border))] px-5">
              <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left font-medium">
                {question}
                <ChevronDown className="h-4 w-4" />
              </Accordion.Trigger>
              <Accordion.Content className="pb-5 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                {answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
