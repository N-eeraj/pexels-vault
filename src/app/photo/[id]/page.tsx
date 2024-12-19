import MediaHeader from "@components/MediaHeader"
import type { SizeOptions } from "@components/MediaHeader"
import PhotoPreview from "@components/photo/Preview"
import { fetchPhotoById } from "@lib/fetchPhotos"

interface PageParams {
  params: {
    id: string
  }
}

export default async function Photo({ params }: PageParams) {
  const photoData = await fetchPhotoById(params.id)

  if (!photoData) return

  const sizeOptions: SizeOptions = Object.entries(photoData.src).reduce((options, [text, url]) => {
    const { w, h } = Object.fromEntries(new URLSearchParams(url).entries())
    if (w && h) {
      options.push({
        text,
        size: `${w}x${h}`,
        url,
      })
    }
    return options
  }, [
    {
      text: "original",
      size: `${photoData.width}x${photoData.height}`,
      url: photoData.src.original,
    }
  ])

  return (
    <section className="grid md:grid-cols-2 justify-items-center items-center gap-y-4 w-full p-2">
      <MediaHeader
        photographer={photoData.photographer}
        photographerUrl={photoData.photographer_url}
        sizeOptions={sizeOptions}
        userClassName="w-full md:w-fit md:justify-self-start md:-order-1"
        downloadClassName="w-full md:w-fit md:place-self-end order-1 md:-order-1" />

      <PhotoPreview
        {...photoData}
        className="self-start md:col-span-2" />
    </section>
  )
}
