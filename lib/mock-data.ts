import { addDays, subDays } from "date-fns";

import { type Booking, type Experience, type Property, type Review } from "@/lib/types";

const baseDate = new Date("2026-04-07T00:00:00.000Z");
const photo = (id: number) => `/photos/${id}.avif`;

export const properties: Property[] = [
  {
    id: "prop_tirupati",
    slug: "trayati-stays-tirupati-retreat",
    name: "Trayati Stays Tirupati Retreat",
    city: "Tirupati",
    location: "Near Alipiri, Tirupati, Andhra Pradesh",
    description:
      "A thoughtfully hosted premium homestay designed for pilgrimage stays, family trips, and short corporate visits. Expect warm service, earthy interiors, smooth check-ins, and quick access to Tirupati's spiritual and civic landmarks.",
    shortDescription:
      "Premium homestay with curated comfort, temple access support, and family-friendly spaces.",
    price: 4200,
    maxGuests: 5,
    beds: "2 bedrooms",
    baths: "2 baths",
    type: "Entire stay",
    rating: 4.9,
    reviewsCount: 47,
    images: [photo(1), photo(2), photo(3), photo(4), photo(5), photo(6), photo(7), photo(8), photo(9), photo(10), photo(11), photo(12)],
    amenities: ["Air Conditioning", "Temple Shuttle", "Wi-Fi", "Workstation", "Breakfast", "Parking", "24/7 Support", "Smart TV"],
    coordinates: { lat: 13.6288, lng: 79.4192 },
    availability: [addDays(baseDate, 2), addDays(baseDate, 9), addDays(baseDate, 15)].map((date) => date.toISOString()),
  },
  {
    id: "prop_residences",
    slug: "trayati-green-court-residences",
    name: "Trayati Green Court Residences",
    city: "Tirupati",
    location: "Kapila Theertham Road, Tirupati, Andhra Pradesh",
    description:
      "A calm apartment-style stay for longer pilgrim visits and corporate stopovers. Includes flexible check-in, work-friendly corners, and concierge assistance for transport and darshan planning.",
    shortDescription:
      "Apartment-style living with premium service touches and seamless city access.",
    price: 5100,
    maxGuests: 6,
    beds: "3 bedrooms",
    baths: "2 baths",
    type: "Premium apartment",
    rating: 4.8,
    reviewsCount: 31,
    images: [photo(13), photo(14), photo(15), photo(16), photo(17), photo(18), photo(19), photo(20), photo(21), photo(22), photo(23), photo(24)],
    amenities: ["Air Conditioning", "Wi-Fi", "Workstation", "Kitchenette", "Breakfast", "Parking", "24/7 Support", "Airport Pickup"],
    coordinates: { lat: 13.6355, lng: 79.4224 },
    availability: [addDays(baseDate, 4), addDays(baseDate, 11), addDays(baseDate, 18)].map((date) => date.toISOString()),
  },
  {
    id: "prop_suites",
    slug: "trayati-sacred-view-suites",
    name: "Trayati Sacred View Suites",
    city: "Tirupati",
    location: "Renigunta Road, Tirupati, Andhra Pradesh",
    description:
      "Built for guests who want hotel-grade polish with homestay warmth. Spacious suites, family dining, premium linens, and fast support for airport or station transfers.",
    shortDescription:
      "Polished premium suites with elevated service, transfer support, and serene interiors.",
    price: 6200,
    maxGuests: 4,
    beds: "2 suites",
    baths: "2 baths",
    type: "Luxury suite",
    rating: 4.7,
    reviewsCount: 22,
    images: [photo(25), photo(26), photo(28), photo(29), photo(30), photo(31), photo(32), photo(33), photo(34), photo(35), photo(36)],
    amenities: ["Air Conditioning", "Wi-Fi", "Workstation", "Breakfast", "Parking", "24/7 Support", "Smart TV", "Airport Pickup"],
    coordinates: { lat: 13.6172, lng: 79.4328 },
    availability: [addDays(baseDate, 1), addDays(baseDate, 7), addDays(baseDate, 12)].map((date) => date.toISOString()),
  },
];

export const reviews: Review[] = [
  {
    id: "rev_1",
    propertyId: "prop_tirupati",
    propertyName: "Trayati Stays Tirupati Retreat",
    propertySlug: "trayati-stays-tirupati-retreat",
    author: "Priya S.",
    stayDate: "2026-03-10",
    createdAt: "2026-03-16",
    verified: true,
    title: "Comforting stay before darshan",
    body:
      "The team handled our late-night arrival beautifully and even helped us coordinate temple transport for the next morning. The rooms felt calm, spotless, and thoughtfully prepared for a family group.",
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
    propertyId: "prop_tirupati",
    propertyName: "Trayati Stays Tirupati Retreat",
    propertySlug: "trayati-stays-tirupati-retreat",
    author: "Rahul K.",
    stayDate: "2026-02-19",
    createdAt: "2026-02-24",
    verified: true,
    title: "Ideal for a short corporate stop",
    body:
      "Fast Wi-Fi, a proper workstation, and an easy check-in made this a very smooth business trip. It still felt warm and personal rather than transactional, which I really appreciated.",
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
    propertyId: "prop_tirupati",
    propertyName: "Trayati Stays Tirupati Retreat",
    propertySlug: "trayati-stays-tirupati-retreat",
    author: "Vinod M.",
    stayDate: "2026-03-28",
    createdAt: "2026-04-01",
    verified: true,
    title: "Good location and support",
    body:
      "We needed a dependable stopover before an early temple visit, and this worked wonderfully. Staff were prompt and the home had a very balanced premium-yet-welcoming feel.",
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
      "<p>We arrived tired and left genuinely restored. The home had enough room for everyone to spread out, yet the shared spaces pulled us back together for tea, breakfast, and long evening conversations.</p><p>The staff made the stay feel very personal. They checked in just enough, handled transport advice smoothly, and helped us plan our darshan timings around family needs.</p><p>What stayed with me most was the mood of the place: earthy, clean, and deeply calm.</p>",
    coverMedia: photo(21),
    gallery: [photo(21), photo(22), photo(24)],
    rating: 5,
    likes: 29,
    commentsCount: 5,
    tags: ["Family Trip", "Pilgrimage"],
    status: "PUBLISHED",
  },
  {
    id: "exp_2",
    slug: "early-morning-darshan-made-easy",
    propertyId: "prop_tirupati",
    propertyName: "Trayati Stays Tirupati Retreat",
    propertySlug: "trayati-stays-tirupati-retreat",
    author: "Kiran V.",
    stayDate: "2026-02-08",
    createdAt: "2026-02-15",
    title: "Early morning darshan made easy",
    excerpt:
      "The stay worked like a calm base camp for our pilgrimage, especially with the team helping us plan around an early start.",
    body:
      "<p>For a pilgrimage trip, small things matter: a quick dinner, a smooth wake-up, clear transport coordination, and a room that lets you rest properly before a packed morning.</p><p>Trayati managed every one of those touchpoints elegantly. It never felt overbearing, just dependable.</p><p>We also loved that the design still felt premium and intentional.</p>",
    coverMedia: photo(5),
    gallery: [photo(4), photo(5), photo(6)],
    rating: 5,
    likes: 18,
    commentsCount: 3,
    tags: ["Pilgrimage", "Family Trip"],
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
    body: "Helpful to know they assist with transport timing too.",
    createdAt: subDays(baseDate, 21).toISOString(),
  },
];

export const bookings: Booking[] = [
  {
    id: "book_1",
    propertyId: "prop_tirupati",
    propertyName: "Trayati Stays Tirupati Retreat",
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
    slug: "how-to-plan-a-peaceful-tirupati-stay",
    title: "How to Plan a Peaceful Tirupati Stay",
    excerpt: "Smart timing, transport planning, and where premium homestays fit into a smoother pilgrimage.",
  },
  {
    slug: "family-friendly-short-stays-in-tirupati",
    title: "Family-Friendly Short Stays in Tirupati",
    excerpt: "What families should look for when comfort, convenience, and rest all matter equally.",
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
