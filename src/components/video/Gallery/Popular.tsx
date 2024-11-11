import { fetchPopularVideos } from "@lib/fetchVideos"

export default async function PopularVideos({ page }: Readonly<{
  page: number
}>) {
  const popularVideos = await fetchPopularVideos({
    page,
  })

  return (
    <section>
      {JSON.stringify(popularVideos)}
    </section>
  )
}
