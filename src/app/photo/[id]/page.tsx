import { fetchPhotoById } from "@lib/fetchPhotos"

interface PageParams {
  params: {
    id: string
  }
}

export default async function Photo({ params }: PageParams) {
  const photoData = await fetchPhotoById(params.id)

  return (
    <div>
      {JSON.stringify(photoData)}
      {params.id}
    </div>
  )
}
