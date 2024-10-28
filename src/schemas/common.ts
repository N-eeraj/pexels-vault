import { z } from "zod"
import { 
  ORIENTATION,
  SIZE,
  MAX_PER_PAGE,
} from "@constants/pexels"

export const ItemParamsSchema = z.object({
  id: z.number(),
})

export const ListParamsSchema = z.object({
  page: z.number().optional(),
  per_page: z.number()
    .max(MAX_PER_PAGE, { message: `Maximum value is ${MAX_PER_PAGE}` })
    .optional(),
})

export type Orientation = typeof ORIENTATION[number]
export type Size = typeof SIZE[number]
export type ListParams = z.infer<typeof ListParamsSchema>