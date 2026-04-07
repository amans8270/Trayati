import { z } from "zod";

export const reviewSchema = z.object({
  propertyId: z.string().min(1),
  checkIn: z.string().min(1),
  checkOut: z.string().min(1),
  overallRating: z.number().min(1).max(5),
  cleanlinessRating: z.number().min(1).max(5),
  locationRating: z.number().min(1).max(5),
  hospitalityRating: z.number().min(1).max(5),
  valueRating: z.number().min(1).max(5),
  title: z.string().min(3).max(80),
  body: z.string().min(50).max(1000),
  photos: z.array(z.string()).max(5).optional(),
  confirmAuthentic: z.boolean(),
});

export const experienceSchema = z.object({
  title: z.string().min(5).max(120),
  propertyId: z.string().optional(),
  coverMedia: z.string().min(1),
  body: z.string().min(80),
  gallery: z.array(z.string()).max(10).optional(),
  rating: z.number().min(1).max(5),
  tags: z.array(z.string()).min(1),
});
