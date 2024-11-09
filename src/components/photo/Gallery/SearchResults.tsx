import ImageGallery from "@components/photo/Gallery"
import { fetchPhotosByQuery } from "@lib/fetchPhotos"

export default async function CuratedPhotos({ query, page }: Readonly<{
  query: string,
  page: number
}>) {
  const curatedPhotos = await fetchPhotosByQuery({
    query,
    page,
  })

  return (
    <section>
      <ImageGallery data={curatedPhotos} />
    </section>
  )
}

