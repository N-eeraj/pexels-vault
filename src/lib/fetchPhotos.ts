import {
  PhotoResource,
  PhotoResourceSchema,
} from "@schemas/photos"
import {
  ListParams,
  ListParamsSchema,
} from "@schemas/common"
import { PEXELS_API_KEY } from "@constants/pexels"

export async function fetchCuratedPhotos(params?: ListParams | undefined): Promise<PhotoResource | undefined> {
  try {
    // validates params and convert its values to string
    const parsedParams = Object.fromEntries(
      Object.entries(ListParamsSchema.parse(params ?? {}))
        .map(([key, value]) => [key, value.toString()])
    )
    const queryString = new URLSearchParams(parsedParams).toString()
    const response = await fetch(`https://api.pexels.com/v1/curated?${queryString}`, {
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
  } catch(error) {
    console.log(error)
  }
}
