import MediaHeader from "@components/MediaHeader"
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

  return (
    <section className="flex flex-col items-center gap-y-4 p-2">
      <MediaHeader
        photographer={photoData.photographer}
        photographerUrl={photoData.photographer_url}
        sizeOptions={[]} />

      <PhotoPreview {...photoData} />
    </section>
  )
}
