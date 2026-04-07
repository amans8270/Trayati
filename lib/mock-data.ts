import { addDays, subDays } from "date-fns";

import { type Booking, type Experience, type Property, type Review } from "@/lib/types";

const baseDate = new Date("2026-04-07T00:00:00.000Z");
const photo = (id: number) => `/photos/${id}.avif`;

export const properties: Property[] = [
  {
    id: "prop_bir_mudhouse",
    slug: "mudhouse-bir-by-trayati-stays",
    name: "Mudhouse Bir by Trayati Stays",
    city: "Bir",
    location: "Bir, Kangra District, Himachal Pradesh",
    description:
      "A thoughtfully hosted mountain homestay in Bir designed for slow mornings, paragliding weekends, family escapes, and longer workation stays. Expect earthy interiors, warm service, and quick access to cafes, landing sites, and the valley trails around Bir Billing.",
    shortDescription:
      "An earthy mudhouse stay with mountain air, cozy corners, and easy access to Bir's cafes and paragliding scene.",
    price: 4200,
    maxGuests: 5,
    beds: "2 bedrooms",
    baths: "2 baths",
    type: "Entire stay",
    rating: 4.9,
    reviewsCount: 47,
    images: ["/location/bir-paragliding-2.jpg", "/location/bir-paragliding-1.jpg", photo(1), photo(2), photo(3), photo(4), photo(5), photo(6), photo(7), photo(8), photo(9), photo(10)],
    amenities: ["Mountain View", "Wi-Fi", "Workstation", "Breakfast", "Parking", "24/7 Support", "Smart TV"],
    coordinates: { lat: 32.0504, lng: 76.7164 },
    availability: [addDays(baseDate, 2), addDays(baseDate, 9), addDays(baseDate, 15)].map((date) => date.toISOString()),
  },
  {
    id: "prop_residences",
    slug: "trayati-green-court-residences",
    name: "Trayati Green Court Residences",
    city: "Bir",
    location: "Upper Bir Road, Bir, Himachal Pradesh",
    description:
      "A calm apartment-style stay for longer mountain retreats and remote-work stopovers. Includes flexible check-in, work-friendly corners, and easy access to Bir's cafes, monasteries, and scenic walking routes.",
    shortDescription:
      "Apartment-style living with premium service touches and seamless access to Bir village life.",
    price: 5100,
    maxGuests: 6,
    beds: "3 bedrooms",
    baths: "2 baths",
    type: "Premium apartment",
    rating: 4.8,
    reviewsCount: 31,
    images: [photo(13), photo(14), photo(15), photo(16), photo(17), photo(18), photo(19), photo(20), photo(21), photo(22), photo(23), photo(24)],
    amenities: ["Air Conditioning", "Wi-Fi", "Workstation", "Kitchenette", "Breakfast", "Parking", "24/7 Support", "Airport Pickup"],
    coordinates: { lat: 32.0488, lng: 76.7185 },
    availability: [addDays(baseDate, 4), addDays(baseDate, 11), addDays(baseDate, 18)].map((date) => date.toISOString()),
  },
  {
    id: "prop_suites",
    slug: "trayati-sacred-view-suites",
    name: "Trayati Sacred View Suites",
    city: "Bir",
    location: "Landing Site Road, Bir Billing, Himachal Pradesh",
    description:
      "Built for guests who want boutique polish with homestay warmth. Spacious suites, family dining, premium linens, and fast support for taxis, landing-site pickups, and local Bir recommendations.",
    shortDescription:
      "Polished premium suites with elevated service, valley energy, and serene interiors.",
    price: 6200,
    maxGuests: 4,
    beds: "2 suites",
    baths: "2 baths",
    type: "Luxury suite",
    rating: 4.7,
    reviewsCount: 22,
    images: [photo(25), photo(26), photo(28), photo(29), photo(30), photo(31), photo(32), photo(33), photo(34), photo(35), photo(36)],
    amenities: ["Air Conditioning", "Wi-Fi", "Workstation", "Breakfast", "Parking", "24/7 Support", "Smart TV", "Airport Pickup"],
    coordinates: { lat: 32.0575, lng: 76.7283 },
    availability: [addDays(baseDate, 1), addDays(baseDate, 7), addDays(baseDate, 12)].map((date) => date.toISOString()),
  },
];

export const reviews: Review[] = [
  {
    id: "rev_1",
    propertyId: "prop_bir_mudhouse",
    propertyName: "Mudhouse Bir by Trayati Stays",
    propertySlug: "mudhouse-bir-by-trayati-stays",
    author: "Priya S.",
    stayDate: "2026-03-10",
    createdAt: "2026-03-16",
    verified: true,
    title: "A grounding mountain stay",
    body:
      "The team handled our late arrival beautifully and helped us settle in without any rush. The mudhouse aesthetic, valley air, and warm hospitality made the whole stay feel calm and memorable.",
    overallRating: 5,
    cleanlinessRating: 5,
    locationRating: 5,
    hospitalityRating: 5,
    valueRating: 4,
    helpfulVotes: 12,
    status: "PUBLISHED",
    photos: [photo(7)],
  },
  {
    id: "rev_2",
    propertyId: "prop_bir_mudhouse",
    propertyName: "Mudhouse Bir by Trayati Stays",
    propertySlug: "mudhouse-bir-by-trayati-stays",
    author: "Rahul K.",
    stayDate: "2026-02-19",
    createdAt: "2026-02-24",
    verified: true,
    title: "Ideal for a short corporate stop",
    body:
      "Fast Wi-Fi, a proper workstation, and an easy check-in made this a very smooth workation stop. It still felt warm and personal rather than transactional, which I really appreciated.",
    overallRating: 5,
    cleanlinessRating: 5,
    locationRating: 4,
    hospitalityRating: 5,
    valueRating: 5,
    helpfulVotes: 9,
    status: "PUBLISHED",
  },
  {
    id: "rev_3",
    propertyId: "prop_residences",
    propertyName: "Trayati Green Court Residences",
    propertySlug: "trayati-green-court-residences",
    author: "Madhavi P.",
    stayDate: "2026-01-09",
    createdAt: "2026-01-14",
    verified: true,
    title: "Spacious and family friendly",
    body:
      "We had grandparents and children with us, and the layout worked beautifully. Plenty of space, warm breakfast, and genuinely attentive hosts.",
    overallRating: 4,
    cleanlinessRating: 4,
    locationRating: 4,
    hospitalityRating: 5,
    valueRating: 4,
    helpfulVotes: 8,
    status: "PUBLISHED",
    photos: [photo(18)],
  },
  {
    id: "rev_4",
    propertyId: "prop_suites",
    propertyName: "Trayati Sacred View Suites",
    propertySlug: "trayati-sacred-view-suites",
    author: "Akhil R.",
    stayDate: "2025-12-20",
    createdAt: "2025-12-27",
    verified: false,
    title: "Peaceful and polished",
    body:
      "The interiors felt premium without becoming cold. Good linens, clean bathrooms, and very responsive support throughout the stay.",
    overallRating: 4,
    cleanlinessRating: 5,
    locationRating: 4,
    hospitalityRating: 4,
    valueRating: 4,
    helpfulVotes: 4,
    status: "PUBLISHED",
  },
  {
    id: "rev_5",
    propertyId: "prop_residences",
    propertyName: "Trayati Green Court Residences",
    propertySlug: "trayati-green-court-residences",
    author: "Sneha T.",
    stayDate: "2026-03-01",
    createdAt: "2026-03-04",
    verified: true,
    title: "Hosts really stand out",
    body:
      "From pickup coordination to local food suggestions, everything felt well-handled. The stay itself was very comfortable and perfect for our weekend plan.",
    overallRating: 5,
    cleanlinessRating: 5,
    locationRating: 4,
    hospitalityRating: 5,
    valueRating: 5,
    helpfulVotes: 15,
    status: "PUBLISHED",
    photos: [photo(14)],
  },
  {
    id: "rev_6",
    propertyId: "prop_bir_mudhouse",
    propertyName: "Mudhouse Bir by Trayati Stays",
    propertySlug: "mudhouse-bir-by-trayati-stays",
    author: "Vinod M.",
    stayDate: "2026-03-28",
    createdAt: "2026-04-01",
    verified: true,
    title: "Good location and support",
    body:
      "We needed a dependable mountain base for an early tandem paragliding session, and this worked wonderfully. Staff were prompt and the home had a balanced premium-yet-welcoming feel.",
    overallRating: 5,
    cleanlinessRating: 5,
    locationRating: 5,
    hospitalityRating: 4,
    valueRating: 4,
    helpfulVotes: 6,
    status: "PUBLISHED",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp_1",
    slug: "a-perfect-weekend-getaway-with-family",
    propertyId: "prop_residences",
    propertyName: "Trayati Green Court Residences",
    propertySlug: "trayati-green-court-residences",
    author: "Neha A.",
    stayDate: "2026-03-14",
    createdAt: "2026-03-20",
    title: "A perfect weekend getaway with family",
    excerpt:
      "We wanted comfort, closeness, and calm after a busy month, and Trayati delivered all three with beautifully quiet evenings.",
    body:
      "<p>We arrived tired and left genuinely restored. The home had enough room for everyone to spread out, yet the shared spaces pulled us back together for tea, breakfast, and long evening conversations.</p><p>The staff made the stay feel very personal. They checked in just enough, handled local recommendations smoothly, and helped us plan our days between Bir cafes, monastery visits, and quiet walks.</p><p>What stayed with me most was the mood of the place: earthy, clean, and deeply calm.</p>",
    coverMedia: photo(21),
    gallery: [photo(21), photo(22), photo(24)],
    rating: 5,
    likes: 29,
    commentsCount: 5,
    tags: ["Family Trip", "Adventure Escape"],
    status: "PUBLISHED",
  },
  {
    id: "exp_2",
    slug: "sunrise-over-bir-billing",
    propertyId: "prop_bir_mudhouse",
    propertyName: "Mudhouse Bir by Trayati Stays",
    propertySlug: "mudhouse-bir-by-trayati-stays",
    author: "Kiran V.",
    stayDate: "2026-02-08",
    createdAt: "2026-02-15",
    title: "Sunrise over Bir Billing made easy",
    excerpt:
      "The stay worked like a calm base camp for our Bir trip, especially with the team helping us plan around an early sunrise and flight slot.",
    body:
      "<p>For a Bir trip, small things matter: a warm dinner, a smooth wake-up, clear taxi coordination, and a room that lets you rest properly before a packed morning outdoors.</p><p>Trayati managed every one of those touchpoints elegantly. It never felt overbearing, just dependable.</p><p>We also loved that the design still felt premium and intentional.</p>",
    coverMedia: photo(5),
    gallery: [photo(4), photo(5), photo(6)],
    rating: 5,
    likes: 18,
    commentsCount: 3,
    tags: ["Adventure Escape", "Family Trip"],
    status: "PUBLISHED",
  },
  {
    id: "exp_3",
    slug: "a-business-stay-that-didnt-feel-clinical",
    propertyId: "prop_suites",
    propertyName: "Trayati Sacred View Suites",
    propertySlug: "trayati-sacred-view-suites",
    author: "Ritesh G.",
    stayDate: "2026-01-26",
    createdAt: "2026-01-31",
    title: "A business stay that didn't feel clinical",
    excerpt:
      "I needed reliable work conditions, but what I got was that plus genuinely thoughtful hospitality.",
    body:
      "<p>I booked for work and expected efficiency. I got that, but also warmth. The workstation and Wi-Fi were strong, and the suite still felt like a place to decompress instead of just sleep between meetings.</p><p>That balance is rare, and I would return for it alone.</p>",
    coverMedia: photo(30),
    gallery: [photo(29), photo(30), photo(32)],
    rating: 4,
    likes: 12,
    commentsCount: 2,
    tags: ["Business Stay", "Solo Travel"],
    status: "PUBLISHED",
  },
];

export const comments = [
  {
    id: "com_1",
    experienceId: "exp_1",
    author: "Harsha P.",
    body: "This sounds exactly like the kind of family break we need.",
    createdAt: subDays(baseDate, 12).toISOString(),
  },
  {
    id: "com_2",
    experienceId: "exp_2",
    author: "Deepa S.",
    body: "Helpful to know they assist with flight timing and local transport too.",
    createdAt: subDays(baseDate, 21).toISOString(),
  },
];

export const bookings: Booking[] = [
  {
    id: "book_1",
    propertyId: "prop_bir_mudhouse",
    propertyName: "Mudhouse Bir by Trayati Stays",
    checkIn: addDays(baseDate, 5).toISOString(),
    checkOut: addDays(baseDate, 7).toISOString(),
    guests: 3,
    totalAmount: 12600,
    status: "CONFIRMED",
  },
  {
    id: "book_2",
    propertyId: "prop_residences",
    propertyName: "Trayati Green Court Residences",
    checkIn: subDays(baseDate, 18).toISOString(),
    checkOut: subDays(baseDate, 16).toISOString(),
    guests: 4,
    totalAmount: 10200,
    status: "COMPLETED",
  },
  {
    id: "book_3",
    propertyId: "prop_suites",
    propertyName: "Trayati Sacred View Suites",
    checkIn: addDays(baseDate, 12).toISOString(),
    checkOut: addDays(baseDate, 13).toISOString(),
    guests: 2,
    totalAmount: 6200,
    status: "PENDING",
  },
];

export const blogPosts = [
  {
    slug: "how-to-plan-a-peaceful-bir-stay",
    title: "How to Plan a Peaceful Bir Stay",
    excerpt: "When to go, where to linger, and how a premium mountain homestay makes Bir more restorative.",
  },
  {
    slug: "family-friendly-short-stays-in-bir",
    title: "Family-Friendly Short Stays in Bir",
    excerpt: "What families should look for when comfort, convenience, views, and quiet all matter equally.",
  },
  {
    slug: "business-travel-with-homestay-comfort",
    title: "Business Travel with Homestay Comfort",
    excerpt: "Why more professionals are choosing premium short-stay homes over conventional rooms.",
  },
];

export const aggregateStats = {
  overallRating: 4.8,
  reviewCount: 120,
  experiencesCount: 34,
  verifiedGuests: 280,
};

export const guestHighlights = [...reviews]
  .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
  .slice(0, 3);

