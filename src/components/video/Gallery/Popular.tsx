import VideoGallery from "@components/video/Gallery"
import { fetchPopularVideos } from "@lib/fetchVideos"

export default async function PopularVideos({ page }: {
  page: number
}) {
  const popularVideos = await fetchPopularVideos({
    page,
  })

  return (
    <section>
      <VideoGallery data={popularVideos} />
    </section>
  )
}
