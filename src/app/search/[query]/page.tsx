import { Suspense } from "react"
import MediaTypeTab from "@components/MediaTypeTab"
import SearchResultPhotos from "@components/photo/Gallery/SearchResults"
import SearchResultVideos from "@components/video/Gallery/SearchResults"
import LoadingGallery from "@components/loading/Gallery"
import toTitleCase from "@utils/toTitleCase"

interface PageParams {
  params: {
    query: string
  }
  searchParams?: {
    type?: string
    page?: string
  }
}

export async function generateMetadata({ params, searchParams }: PageParams) {
  const query = toTitleCase(decodeURI(params.query))
  const type = toTitleCase(searchParams?.type ?? "photo")
  return {
    title: `${type} results for ${query}`,
  }
}

export default function Search({ params, searchParams }: PageParams) {
  const query = toTitleCase(decodeURI(params.query))
  const type = searchParams?.type ?? "photo"
  const page = Number(searchParams?.page) || 1

  return (
    <main>
      <Suspense>
        <MediaTypeTab />
      </Suspense>

      <Suspense
        key={`${page}-${type}`}
        fallback={<LoadingGallery />}>
        {type === "video" ?
          <SearchResultVideos
            query={query}
            page={page} /> :
          <SearchResultPhotos
            query={query}
            page={page} />
        }
      </Suspense>
    </main>
  )
}
