import Link from "next/link"

import { Icon } from "@iconify/react"

import Masonry from "@components/Masonry"
import Pagination from "@components/Pagination"
import PhotoThumbnail from "@components/PreviewImage"

import type { VideoResource } from "@schemas/videos"

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
        renderEl={({ id, image, width, height, blurredThumbnail, user }) => (
          <Link href={`/video/${id}`}>
            <PhotoThumbnail
              src={image}
              width={256}
              height={256 * (height / width)}
              alt="video thumbnail"
              placeholder="blur"
              blurDataURL={blurredThumbnail}
              name={user.name}>
              <Icon
                icon="material-symbols:play-circle-rounded"
                className="absolute top-2 left-2 p-1.5 bg-black/50 text-primary text-4xl rounded-full z-10" />
            </PhotoThumbnail>
          </Link>
        )}
        className="max-w-7xl mx-auto" />

        <Pagination
          length={pageLength}
          currentPage={data.page} />
    </>
  )
}
