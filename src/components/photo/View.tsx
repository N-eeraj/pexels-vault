import MediaHeader from "@components/MediaHeader"
import type { SizeOptions } from "@components/MediaHeader"
import PhotoPreview from "@components/photo/Preview"
import { fetchPhotoById } from "@lib/fetchPhotos"

export default async function PhotoView({ id }: { id: number | string }) {
  const photoData = await fetchPhotoById(id)

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
        userClassName="w-full md:w-fit md:justify-self-start"
        downloadClassName="w-full md:w-fit md:place-self-end order-2 md:order-1" />

      <PhotoPreview
        {...photoData}
        className="md:col-span-2 order-1" />
    </section>
  )
}
