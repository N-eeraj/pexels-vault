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

export const MAX_PER_PAGE = 80 as const
