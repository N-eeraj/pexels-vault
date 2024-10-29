import Image from "next/image"
import type { Photo } from "@schemas/photos"

export default function Gallery({ photos }: Readonly<{photos: Photo[]}>) {
  return (
    <ul className="columns-3xs p-4">
      {photos.map(({ id, src, alt, width, height, blurredDataUrl }) => (
        <li
          key={id}
          className="mb-4 rounded-md overflow-hidden">
          <Image
            src={src.large}
            width={256}
            height={256 * (height / width)}
            alt={alt}
            style={{ width: "100%" }}
            className="cursor-pointer" />
        </li>
      ))}
    </ul>
  )
}
