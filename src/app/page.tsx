import { Suspense } from "react"
import MediaTypeTab from "@components/MediaTypeTab"
import CuratedPhotos from "@components/photo/Gallery/Curated"

export default function Home({ searchParams }: {
  searchParams?: {
    page?: string
  }
}) {
  const page = Number(searchParams?.page) || 1

  return (
    <main>
      <Suspense>
        <MediaTypeTab />
      </Suspense>

      <Suspense
        key={page}
        fallback="loading...">
        <CuratedPhotos page={page} />
      </Suspense>
    </main>
  )
}
