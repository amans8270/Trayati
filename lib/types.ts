export type Amenity =
  | "Air Conditioning"
  | "Temple Shuttle"
  | "Wi-Fi"
  | "Workstation"
  | "Kitchenette"
  | "Breakfast"
  | "Parking"
  | "24/7 Support"
  | "Smart TV"
  | "Airport Pickup";

export type Property = {
  id: string;
  slug: string;
  name: string;
  city: string;
  location: string;
  description: string;
  shortDescription: string;
  price: number;
  maxGuests: number;
  beds: string;
  baths: string;
  type: string;
  rating: number;
  reviewsCount: number;
  images: string[];
  amenities: Amenity[];
  coordinates: { lat: number; lng: number };
  heroVideo?: string;
  availability: string[];
};

export type Review = {
  id: string;
  propertyId: string;
  propertyName: string;
  propertySlug: string;
  author: string;
  avatar?: string;
  stayDate: string;
  createdAt: string;
  verified: boolean;
  title: string;
  body: string;
  overallRating: number;
  cleanlinessRating: number;
  locationRating: number;
  hospitalityRating: number;
  valueRating: number;
  helpfulVotes: number;
  status: "PUBLISHED" | "PENDING" | "REJECTED";
  photos?: string[];
};

export type Experience = {
  id: string;
  slug: string;
  propertyId?: string;
  propertyName: string;
  propertySlug: string;
  author: string;
  avatar?: string;
  stayDate: string;
  createdAt: string;
  title: string;
  excerpt: string;
  body: string;
  coverMedia: string;
  gallery: string[];
  rating: number;
  likes: number;
  commentsCount: number;
  tags: string[];
  status: "PUBLISHED" | "PENDING" | "REJECTED";
};

export type Booking = {
  id: string;
  propertyId: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalAmount: number;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
};
