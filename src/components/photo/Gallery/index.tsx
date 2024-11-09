import Image from "next/image"
import Masonry from "@components/Masonry"
import type { PhotoResource } from "@schemas/photos"
import { getBlurredPhotos } from "@lib/getBlurredImage"
import Pagination from "@components/Pagination"

export default async function Gallery({ data }: Readonly<{data: PhotoResource | undefined}>) {
  if (!data || !data.photos?.length) {
    return (
      <strong>
        No Photos
      </strong>
    )
  }

  await getBlurredPhotos(data?.photos)

  return (
    <>
      <Masonry
        items={data.photos}
        renderEl={({ src, height, width, alt, blurredDataUrl }) => (
          <Image
            src={src.large}
            width={256}
            height={256 * (height / width)}
            alt={alt}
            placeholder="blur"
            blurDataURL={blurredDataUrl}
            style={{ width: "100%" }}
            className="hover:opacity-90 scale-125 hover:scale-100 duration-300 cursor-pointer" />
        )}
        className="max-w-7xl mx-auto" />

        <Pagination
          length={10}
          currentPage={data.page} />
    </>
  )
}
