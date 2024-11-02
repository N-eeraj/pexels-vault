import ImageGallery from "@components/photo/Gallery"
import { fetchCuratedPhotos } from "@lib/fetchPhotos"

export default async function CuratedPhotos({ page }: Readonly<{
  page: number
}>) {
  await new Promise(res => setTimeout(res, 3000))
  const curatedPhotos = await fetchCuratedPhotos({
    page,
  })

  return (
    <section>
      <ImageGallery data={curatedPhotos} />
    </section>
  )
}

