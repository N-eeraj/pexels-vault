import VideoView from "@components/video/View"
import type { PageIdParams } from "@/types"

export default async function Video({ params }: PageIdParams) {
  const { id } = await params

  return <VideoView id={id} />
}
