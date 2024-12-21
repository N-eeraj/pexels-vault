import MediaHeader from "@components/MediaHeader"
import type { SizeOptions } from "@components/MediaHeader"
import VideoPreview from "@components/video/Preview"
import { fetchVideoById } from "@lib/fetchVideos"

interface PageParams {
  params: Promise<{
    id: string
  }>
}

export default async function Video({ params }: PageParams) {
  const pageParams = await params
  const videoData = await fetchVideoById(pageParams.id)

  if (!videoData) return

  const sizeOptions = videoData.video_files.reduce<SizeOptions>((options, { quality, width, height, link }) => {
    if (quality) {
      options.push({
        text: quality,
        size: `${width}x${height}`,
        url: link,
      })
    }
    return options
  }, [])

  return (
    <section className="grid md:grid-cols-2 justify-items-center items-center gap-y-4 w-full p-2">
      <MediaHeader
        photographer={videoData.user.name}
        photographerUrl={videoData.user.url}
        sizeOptions={sizeOptions}
        userClassName="w-full md:-order-1"
        downloadClassName="w-full md:w-fit md:place-self-end order-2 md:order-1" />

      <VideoPreview
        url={videoData.video_files[0].link}
        duration={videoData.duration}
        className="md:col-span-2 order-1" />
    </section>
  )
}
