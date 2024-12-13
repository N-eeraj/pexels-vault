import {
  fetchMediaList,
  fetchMediaItem,
} from "@lib/fetchMedia"
import {
  Video,
  VideoSchema,
  VideoResource,
  VideoResourceSchema,
} from "@schemas/videos"
import {
  ListParams,
  ListParamsSchema,
  QueryParams,
  QueryParamsSchema,
} from "@schemas/common"

export async function fetchPopularVideos(params?: ListParams | undefined): Promise<VideoResource | undefined> {
  return await fetchMediaList({
    url: "https://api.pexels.com/videos/popular",
    ResourceSchema: VideoResourceSchema,
    params: params ?? {},
    ParamsSchema: ListParamsSchema,
  })
}

export async function fetchVideosByQuery(params: QueryParams): Promise<VideoResource | undefined> {
  return await fetchMediaList({
    url: "https://api.pexels.com/videos/search",
    ResourceSchema: VideoResourceSchema,
    params,
    ParamsSchema: QueryParamsSchema,
  })
}

export async function fetchVideoById(id: string | number): Promise<Video | undefined> {
  return await fetchMediaItem({
    url: "https://api.pexels.com/v1/videos/videos",
    id,
    MediaSchema: VideoSchema,
  })
}
