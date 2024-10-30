import Image from "next/image"
import type { Photo } from "@schemas/photos"
import Masonry from "@components/Masonry"

export default function Gallery({ photos }: Readonly<{photos: Photo[] | undefined}>) {
  if (!photos) {
    return (
      <strong>
        No Photos
      </strong>
    )
  }

  return (
    <Masonry
      items={photos}
      renderEl={({ src, height, width, alt }) => (
        <Image
          src={src.large}
          width={256}
          height={256 * (height / width)}
          alt={alt}
          style={{ width: "100%" }}
          className="hover:opacity-90 scale-125 hover:scale-100 duration-300 cursor-pointer" />
      )} />
  )
}
