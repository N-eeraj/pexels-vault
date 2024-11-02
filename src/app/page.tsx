import { Suspense } from "react"
import CuratedPhotos from "@components/photo/Gallery/Curated"

export default function Home({ searchParams }: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams?.page) || 1

  return (
    <main>
      <Suspense
        key={page}
        fallback="loading...">
        <CuratedPhotos page={page} />
      </Suspense>
    </main>
  )
}
