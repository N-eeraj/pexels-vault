import ImageGallery from "@components/photo/Gallery"
import { fetchCuratedPhotos } from "@lib/fetchPhotos"

export default async function CuratedPhotos() {
  const curatedPhotos = await fetchCuratedPhotos()

  if (!curatedPhotos) {
    return (
      <strong>
        No Photos
      </strong>
    )
  }

  return (
    <section>
      <ImageGallery photos={curatedPhotos.photos} />
    </section>
  )
}

