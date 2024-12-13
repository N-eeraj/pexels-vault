import MediaHeader from "@components/MediaHeader"
import { fetchVideoById } from "@lib/fetchVideos"

interface PageParams {
  params: {
    id: string
  }
}

export default async function Video({ params }: PageParams) {
  const videoData = await fetchVideoById(params.id)

  if (!videoData) return

  return (
    <section className="flex flex-col items-center gap-y-4 p-2">
      <MediaHeader
        photographer={videoData.user.name}
        photographerUrl={videoData.user.url}
        sizeOptions={[]} />

    </section>
  )
}
