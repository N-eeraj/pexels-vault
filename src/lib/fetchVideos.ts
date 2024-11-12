import {
  ListParams,
  ListParamsSchema,
} from "@schemas/common"
import {
  VideoResource,
  VideoResourceSchema,
} from "@schemas/videos"
import { PEXELS_API_KEY } from "@constants/pexels"

export async function fetchPopularVideos(params?: ListParams | undefined): Promise<VideoResource | undefined> {
  // validates params and convert its values to string
  const parsedParams = Object.fromEntries(
    Object.entries(ListParamsSchema.parse(params ?? {}))
      .map(([key, value]) => [key, value.toString()])
  )
  const queryString = new URLSearchParams(parsedParams).toString()
  const response = await fetch(`https://api.pexels.com/videos/popular/?${queryString}`, {
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
