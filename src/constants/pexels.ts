export const PEXELS_API_KEY = process.env.PEXELS_API_KEY as string

export const ORIENTATION = [
  "landscape",
  "portrait",
  "square",
] as const

export const SIZE = [
  "large",
  "medium",
  "small",
] as const

export const MEDIA_TYPES = [
  {
    type: "photo",
    icon: "material-symbols:image-outline-rounded",
  },
  {
    type: "video",
    icon: "material-symbols:smart-display-outline-sharp",
  },
] as const

export const MAX_PER_PAGE = 80 as const
