import VideoGallery from "@components/video/Gallery"
import { fetchVideosByQuery } from "@lib/fetchVideos"

export default async function CuratedPhotos({ query, page }: {
  query: string,
  page: number
}) {
  const searchedVideos = await fetchVideosByQuery({
    query,
    page,
  })

  return (
    <section>
      <VideoGallery data={searchedVideos} />
    </section>
  )
}

