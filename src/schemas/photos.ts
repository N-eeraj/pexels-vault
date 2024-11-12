import { z } from "zod"

export const PhotoSchema = z.object({ 
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  photographer: z.string(),
  photographer_url: z.string(),
  src: z.object({
    original: z.string(),
    large2x: z.string(),
    large: z.string(),
    medium: z.string(),
    small: z.string(),
    portrait: z.string(),
    landscape: z.string(),
    tiny: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
})

export const PhotoResourceSchema = z.object({
  photos: z.array(PhotoSchema),
  page: z.number(),
  per_page: z.number(),
  total_results: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
})

export type Photo = z.infer<typeof PhotoSchema>
export type PhotoResource = z.infer<typeof PhotoResourceSchema>
