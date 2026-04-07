import type { Metadata } from "next";

export const siteConfig = {
  name: "Trayati Stays",
  tagline: "Where Every Stay Feels Like Home",
  description:
    "Premium homestays and short stays in Tirupati for pilgrims, families, and corporate guests. Warm hosting, trusted reviews, and seamless booking.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_IN",
  city: "Tirupati",
  phone: "+91 90100 12345",
  whatsapp: "919010012345",
  email: "hello@trayatistays.com",
  social: {
    facebook: "https://www.facebook.com/trayatistays",
    instagram: "https://www.instagram.com/trayatistays",
  },
};

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Trayati Stays - Premium Homestay in ${siteConfig.city}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/brand/logo-trayati.jpg`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/brand/logo-trayati.jpg`],
    },
  };
}
