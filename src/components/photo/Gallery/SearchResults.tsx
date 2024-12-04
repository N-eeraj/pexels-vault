import ImageGallery from "@components/photo/Gallery"
import { fetchPhotosByQuery } from "@lib/fetchPhotos"

export default async function CuratedPhotos({ query, page }: {
  query: string,
  page: number
}) {
  const searchedPhotos = await fetchPhotosByQuery({
    query,
    page,
  })

  return (
    <section>
      <ImageGallery data={searchedPhotos} />
    </section>
  )
}

