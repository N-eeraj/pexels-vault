import Link from "next/link"
import Masonry from "@components/Masonry"
import Pagination from "@components/Pagination"
import PreviewImage from "@components/PreviewImage"

import { getBlurredPhotos } from "@lib/getBlurredImage"

import type { PhotoResource } from "@schemas/photos"

export default async function Gallery({ data }: Readonly<{data: PhotoResource | undefined}>) {
  if (!data || !data.photos?.length) {
    return (
      <strong>
        No Photos
      </strong>
    )
  }

  const pageLength = Math.floor(data.total_results / data.per_page)

  await getBlurredPhotos(data?.photos)

  return (
    <>
      <Masonry
        items={data.photos}
        renderEl={({ id, src, height, width, alt, blurredDataUrl, photographer }) => (
          <Link href={`/photo/${id}`}>
            <PreviewImage
              src={src.large}
              width={256}
              height={256 * (height / width)}
              alt={alt}
              placeholder="blur"
              blurDataURL={blurredDataUrl}
              name={photographer} />
          </Link>
        )}
        className="max-w-7xl mx-auto" />

        <Pagination
          length={pageLength}
          currentPage={data.page} />
    </>
  )
}
