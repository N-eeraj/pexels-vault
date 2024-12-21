import { Suspense } from "react"
import MediaTypeTab from "@components/MediaTypeTab"
import SearchResultPhotos from "@components/photo/Gallery/SearchResults"
import SearchResultVideos from "@components/video/Gallery/SearchResults"
import LoadingGallery from "@components/loading/Gallery"
import toTitleCase from "@utils/toTitleCase"

interface PageParams {
  params: Promise<{
    query: string
  }>
  searchParams?: Promise<{
    type?: string
    page?: string
  }>
}

async function getPageParams({ searchParams, params }: PageParams) {
  const urlParams = await searchParams
  const pageParams = await params
  const query = toTitleCase(decodeURI(pageParams.query))
  const type = urlParams?.type ?? "photo"
  const page = Number(urlParams?.page) || 1

  return {
    query,
    type,
    page,
  }
}

export async function generateMetadata(pageParams: PageParams) {
  const {
    query,
    type,
  } = await getPageParams(pageParams)
  return {
    title: `${toTitleCase(type)} results for ${query}`,
  }
}

export default async function Search(pageParams: PageParams) {
  const {
    query,
    type,
    page,
  } = await getPageParams(pageParams)

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
