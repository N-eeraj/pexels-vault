import Image from "next/image"
import Masonry from "@components/Masonry"
import type { VideoResource } from "@schemas/videos"
import Pagination from "@components/Pagination"
import { getBlurredThumbnails } from "@lib/getBlurredImage"

export default async function Gallery({ data }: Readonly<{data: VideoResource | undefined}>) {
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
        renderEl={({ image, width, height, blurredThumbnail }) => (
          <Image
            src={image}
            width={256}
            height={256 * (height / width)}
            alt="video thumbnail"
            placeholder="blur"
            blurDataURL={blurredThumbnail}
            style={{ width: "100%" }}
            className="hover:opacity-90 scale-125 hover:scale-100 duration-300 cursor-pointer" />
        )}
        className="max-w-7xl mx-auto" />

        <Pagination
          length={pageLength}
          currentPage={data.page} />
    </>
  )
}