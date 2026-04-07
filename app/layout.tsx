import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

import { Providers } from "@/components/providers";
import { AmbientBackdrop } from "@/components/site/ambient-backdrop";
import { MotionEnhancer } from "@/components/site/motion-enhancer";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { buildMetadata, siteConfig } from "@/lib/site";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = buildMetadata({
  title: "Trayati Stays",
  description: siteConfig.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${cormorant.variable} overflow-x-hidden pb-20 font-sans sm:pb-0`}>
        <Providers>
          <MotionEnhancer />
          <div className="relative min-h-screen">
            <AmbientBackdrop />
            <SiteHeader />
            <main className="relative z-10">{children}</main>
            <SiteFooter />
            <ThemeToggle />
            <WhatsAppFloat />
          </div>
        </Providers>
      </body>
    </html>
  );
}
