import { Suspense } from "react"
import PhotoView from "@components/photo/View"
import ModalLayout from "@components/ModalLayout"
import MediaPageLoading from "@components/MediaPageLoading"
import type { PageIdParams } from "@/types"

export default async function PhotoModal({ params }: PageIdParams) {
  const { id } = await params

  return (
    <ModalLayout>
      <Suspense fallback={<MediaPageLoading />}>
        <PhotoView id={id} />
      </Suspense>
    </ModalLayout>
  )
}
