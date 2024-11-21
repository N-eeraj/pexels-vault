import { fetchMediaList } from "@lib/fetchMedia"
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

export async function fetchCuratedPhotos(params?: ListParams | undefined): Promise<PhotoResource | undefined> {
  return await fetchMediaList({
    url: "https://api.pexels.com/v1/curated",
    ResourceSchema: PhotoResourceSchema,
    params: params ?? {},
    ParamsSchema: ListParamsSchema,
  })
}

export async function fetchPhotosByQuery(params: QueryParams): Promise<PhotoResource | undefined> {
  return await fetchMediaList({
    url: "https://api.pexels.com/v1/search",
    ResourceSchema: PhotoResourceSchema,
    params,
    ParamsSchema: QueryParamsSchema,
  })
}
