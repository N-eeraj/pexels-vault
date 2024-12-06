import { Suspense } from "react"
import MediaTypeTab from "@components/MediaTypeTab"
import CuratedPhotos from "@components/photo/Gallery/Curated"
import PopularVideos from "@components/video/Gallery/Popular"
import LoadingGallery from "@components/loading/Gallery"

export default function Home({ searchParams }: {
  searchParams?: {
    type?: string
    page?: string
  }
}) {
  const type = searchParams?.type ?? "photo"
  const page = Number(searchParams?.page) || 1

  return (
    <>
      <Suspense>
        <MediaTypeTab />
      </Suspense>

      <Suspense
        key={`${page}-${type}`}
        fallback={<LoadingGallery />}>
        {type === "video" ?
          <PopularVideos page={page} /> :
          <CuratedPhotos page={page} />
        }
      </Suspense>
    </>
  )
}
