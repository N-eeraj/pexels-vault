import MediaHeader from "@components/MediaHeader"
import VideoPreview from "@components/video/Preview"
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

      <VideoPreview
        url={videoData.video_files[0].link}
        duration={videoData.duration} />
    </section>
  )
}
