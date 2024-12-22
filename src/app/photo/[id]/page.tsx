import PhotoView from "@components/photo/View"
import type { PageIdParams } from "@/types"

export default async function Photo({ params }: PageIdParams) {
  const { id } = await params

  return (
    <PhotoView id={id} />
  )
}
