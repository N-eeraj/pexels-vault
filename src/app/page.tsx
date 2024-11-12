import { Suspense } from "react"
import MediaTypeTab from "@components/MediaTypeTab"
import CuratedPhotos from "@components/photo/Gallery/Curated"
import PopularVideos from "@components/video/Gallery/Popular"

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

      { type === "video" ?
          (<Suspense
            key={page}
            fallback="loading...">
            <PopularVideos page={page} />
          </Suspense>):
          (<Suspense
            key={page}
            fallback="loading...">
            <CuratedPhotos page={page} />
          </Suspense>)
      }
    </>
  )
}
