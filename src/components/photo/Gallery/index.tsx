import Link from "next/link"
import Image from "next/image"
import Masonry from "@components/Masonry"
import type { PhotoResource } from "@schemas/photos"
import { getBlurredPhotos } from "@lib/getBlurredImage"

export default async function Gallery({ data }: Readonly<{data: PhotoResource | undefined}>) {
  if (!data || !data.photos) {
    return (
      <strong>
        No Photos
      </strong>
    )
  }

  const photos = await getBlurredPhotos(data?.photos)

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
        )} />
        {Array.from({ length: 10 }).map((_, i) => (
          <Link
            key={i}
            href={{
              pathname: `/`,
              query: {
                page: i + 1
              }
            }}>
            <button className={`min-w-10 aspect-square mx-1 mb-1 p-2 ${data.page === i + 1 ? "bg-accent" : "bg-secondary-variant"} text-primary rounded`}>
              {i + 1}
            </button>
          </Link>
        ))}
    </>
  )
}
