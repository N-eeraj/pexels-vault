import { z } from "zod"

export const VideoSchema = z.object({ 
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  image: z.string(),
  duration: z.number(),
  user: z.object({
    id: z.number(),
    name: z.string(),
    url: z.string(),
  }),
  video_files: z.array(
    z.object({
      id: z.number(),
      quality: z.enum(["uhd", "hd", "sd"]).nullable(),
      file_type: z.string(),
      width: z.number(),
      height: z.number(),
      link: z.string(),
    })
  ),
  video_pictures: z.array(
    z.object({
      id: z.number(),
      picture: z.string(),
    })
  ),
  blurredThumbnail: z.string().optional(),
})

export const VideoResourceSchema = z.object({
  videos: z.array(VideoSchema),
  page: z.number(),
  per_page: z.number(),
  total_results: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
})

export type Video = z.infer<typeof VideoSchema>
export type VideoResource = z.infer<typeof VideoResourceSchema>
