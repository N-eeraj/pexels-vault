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

export const QueryParamsSchema = ListParamsSchema.extend({
  query: z.string(),
  orientation: z.enum(ORIENTATION).optional(),
  size: z.enum(SIZE).optional(),
})

export type Orientation = typeof ORIENTATION[number]
export type Size = typeof SIZE[number]
export type ListParams = z.infer<typeof ListParamsSchema>
export type QueryParams = z.infer<typeof QueryParamsSchema>
