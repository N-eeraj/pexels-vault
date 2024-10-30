import ImageGallery from "@components/photo/Gallery"
import { fetchCuratedPhotos } from "@lib/fetchPhotos"

export default async function CuratedPhotos() {
  const curatedPhotos = await fetchCuratedPhotos()

  return (
    <section>
      <ImageGallery photos={curatedPhotos?.photos} />
    </section>
  )
}

