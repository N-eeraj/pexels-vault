import {
  fetchMediaList,
  fetchMediaItem,
} from "@lib/fetchMedia"
import {
  Photo,
  PhotoSchema,
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

export async function fetchPhotoById(id: string | number): Promise<Photo | undefined> {
  return await fetchMediaItem({
    url: "https://api.pexels.com/v1/photos",
    id,
    MediaSchema: PhotoSchema,
  })
}
