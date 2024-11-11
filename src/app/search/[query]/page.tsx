import { Suspense } from "react"
import MediaTypeTab from "@components/MediaTypeTab"
import SearchResultPhotos from "@components/photo/Gallery/SearchResults"
import toTitleCase from "~/src/utils/toTitleCase"

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

export default function page({ params, searchParams }: PageParams) {
  const query = toTitleCase(decodeURI(params.query))
  const type = searchParams?.type ?? "photo"
  const page = Number(searchParams?.page) || 1

  return (
    <main>
      <Suspense>
        <MediaTypeTab />
      </Suspense>

      { type === "video" ?
          (<Suspense
            key={`${query}-${page}`}
            fallback="loading...">
            <SearchResultPhotos
              query={query}
              page={page} />
          </Suspense>):
          (<Suspense
            key={`${query}-${page}`}
            fallback="loading...">
            <SearchResultPhotos
              query={query}
              page={page} />
          </Suspense>)
      }
    </main>
  )
}
