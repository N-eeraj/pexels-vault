import { ZodSchema } from "zod"
import {
  PhotoResource,
  PhotoResourceSchema,
} from "@schemas/photos"
import {
  ListParams,
  ListParamsSchema,
  QueryParams,
  QueryParamsSchema,
} from "@schemas/common"
import { PEXELS_API_KEY } from "@constants/pexels"

async function fetchPhotoList(url: string, params: ListParams | QueryParams, Schema: ZodSchema<ListParams | QueryParams>): Promise<PhotoResource | undefined> {
  // validates params and convert its values to string
  const parsedParams = Object.fromEntries(
    Object.entries(Schema.parse(params ?? {}))
      .map(([key, value]) => [key, value.toString()])
  )
  const queryString = new URLSearchParams(parsedParams).toString()
  const response = await fetch(`${url}?${queryString}`, {
    headers: {
      Authorization: PEXELS_API_KEY,
    }
  })
  if (!response.ok) throw new Error("Failed to fetch photos")
  const data: PhotoResource = await response.json()
  const parsedData = PhotoResourceSchema.parse(data)
  if (parsedData.total_results === 0) {
    return undefined
  }
  return parsedData
}

export async function fetchCuratedPhotos(params?: ListParams | undefined): Promise<PhotoResource | undefined> {
  return await fetchPhotoList("https://api.pexels.com/v1/curated", params ?? {}, ListParamsSchema)
}

export async function fetchPhotosByQuery(params: QueryParams): Promise<PhotoResource | undefined> {
  return await fetchPhotoList("https://api.pexels.com/v1/search", params, QueryParamsSchema)
}
