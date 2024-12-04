import Masonry from "@components/Masonry"
import Pagination from "@components/Pagination"
import VideoThumbnail from "@components/video/Thumbnail"

import { getBlurredThumbnails } from "@lib/getBlurredImage"
import type { VideoResource } from "@schemas/videos"


export default async function Gallery({ data }: {data: VideoResource | undefined}) {
  if (!data || !data.videos?.length) {
    return (
      <strong>
        No Videos
      </strong>
    )
  }

  const pageLength = Math.floor(data.total_results / data.per_page)

  await getBlurredThumbnails(data.videos)

  return (
    <>
      <Masonry
        items={data.videos}
        renderEl={VideoThumbnail}
        className="max-w-7xl mx-auto" />

        <Pagination
          length={pageLength}
          currentPage={data.page} />
    </>
  )
}
