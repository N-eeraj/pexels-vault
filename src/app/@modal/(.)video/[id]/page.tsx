import VideoView from "@components/video/View"
import ModalLayout from "@components/ModalLayout"

interface PageParams {
  params: Promise<{
    id: string
  }>
}

export default async function VideoModal({ params }: PageParams) {
  const { id } = await params

  return (
    <ModalLayout>
      <VideoView id={id} />
    </ModalLayout>
  )
}
