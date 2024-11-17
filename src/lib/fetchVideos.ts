import { ZodSchema } from "zod"
import {
  VideoResource,
  VideoResourceSchema,
} from "@schemas/videos"
import {
  ListParams,
  ListParamsSchema,
  QueryParams,
  QueryParamsSchema,
} from "@schemas/common"
import { PEXELS_API_KEY } from "@constants/pexels"

async function fetchVideoList(url: string, params: ListParams | QueryParams, Schema: ZodSchema<ListParams | QueryParams>): Promise<VideoResource | undefined> {
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
  if (!response.ok) throw new Error("Failed to fetch videos")
  const data: VideoResource = await response.json()
  const parsedData = VideoResourceSchema.parse(data)
  if (parsedData.total_results === 0) {
    return undefined
  }
  return parsedData
}

export async function fetchPopularVideos(params?: ListParams | undefined): Promise<VideoResource | undefined> {
  return await fetchVideoList("https://api.pexels.com/videos/popular", params ?? {}, ListParamsSchema)
}

export async function fetchVideosByQuery(params: QueryParams): Promise<VideoResource | undefined> {
  return await fetchVideoList("https://api.pexels.com/videos/search", params, QueryParamsSchema)
}
