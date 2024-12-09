import { ZodSchema } from "zod"
import {
  Photo,
  PhotoResource,
} from "@schemas/photos"
import {
  Video,
  VideoResource,
} from "@schemas/videos"
import {
  ListParams,
  QueryParams,
} from "@schemas/common"
import { PEXELS_API_KEY } from "@constants/pexels"

interface MediaListArgs<Resource, Params> {
  url: string
  ResourceSchema: ZodSchema<Resource>
  params: Params
  ParamsSchema: ZodSchema<Params>
}

interface MediaItemArgs<Media> {
  url: string
  id: string | number
  MediaSchema: ZodSchema<Media>
}

export async function fetchMediaList<
    Resource extends PhotoResource | VideoResource,
    Params extends ListParams | QueryParams,
  >({ url, ResourceSchema, params, ParamsSchema }: MediaListArgs<Resource, Params>): Promise<Resource | undefined> {
  // validates params and convert its values to string
  const parsedParams = Object.fromEntries(
    Object.entries(ParamsSchema.parse(params ?? {}))
      .map(([key, value]) => [key, value.toString()])
  )
  const queryString = new URLSearchParams(parsedParams).toString()
  const response = await fetch(`${url}?${queryString}`, {
    headers: {
      Authorization: PEXELS_API_KEY,
    }
  })
  if (!response.ok) throw new Error("Failed to fetch")
  const data: Resource = await response.json()
  const parsedData = ResourceSchema.parse(data)
  if (parsedData.total_results === 0) {
    return undefined
  }
  return parsedData
}

export async function fetchMediaItem<
    Media extends Photo | Video,
  >({ url, id, MediaSchema }: MediaItemArgs<Media>): Promise<Media | undefined> {
  const response = await fetch(`${url}/${id}`, {
    headers: {
      Authorization: PEXELS_API_KEY,
    }
  })
  if (!response.ok) throw new Error("Failed to fetch")
    const data: Media = await response.json()
  const parsedData = MediaSchema.parse(data)
  return parsedData
}
