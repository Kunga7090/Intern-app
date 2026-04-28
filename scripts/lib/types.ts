import { z } from "zod";

export const scrapedInternshipSchema = z.object({
  name: z.string().min(1).max(200),
  city: z.string().min(1).max(100),
  type: z.enum(["virtual", "in-person"]),
  category: z.string().min(1).max(100),
  featured: z.boolean(),
});

export type ScrapedInternship = z.infer<typeof scrapedInternshipSchema>;
