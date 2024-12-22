import PhotoView from "@components/photo/View"
import ModalLayout from "~/src/components/ModalLayout"

interface PageParams {
  params: Promise<{
    id: string
  }>
}

export default async function PhotoModal({ params }: PageParams) {
  const { id } = await params

  return (
    <ModalLayout>
      <PhotoView id={id} />
    </ModalLayout>
  )
}
