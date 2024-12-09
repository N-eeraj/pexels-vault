import Image from "next/image"
import MediaHeader from "@components/MediaHeader"
import { fetchPhotoById } from "@lib/fetchPhotos"

interface PageParams {
  params: {
    id: string
  }
}

export default async function Photo({ params }: PageParams) {
  const photoData = await fetchPhotoById(params.id)

  if (!photoData) return

  return (
    <section className="flex flex-col items-center gap-y-4 p-2">
      <MediaHeader
        photographer={photoData.photographer}
        photographerUrl={photoData.photographer_url}
        sizeOptions={[]} />

      <section className="">
        <Image
          src={photoData.src.original}
          alt={photoData.alt}
          width={photoData.width * 650 / photoData.height}
          height={650}
          className="w-full max-w-5xl" />
      </section>
    </section>
  )
}
