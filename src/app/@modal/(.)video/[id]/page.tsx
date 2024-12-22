import { Suspense } from "react"
import VideoView from "@components/video/View"
import ModalLayout from "@components/ModalLayout"
import MediaPageLoading from "@components/MediaPageLoading"
import type { PageIdParams } from "@/types"

export default async function VideoModal({ params }: PageIdParams) {
  const { id } = await params

  return (
    <ModalLayout>
      <Suspense fallback={<MediaPageLoading />}>
        <VideoView id={id} />
      </Suspense>
    </ModalLayout>
  )
}
