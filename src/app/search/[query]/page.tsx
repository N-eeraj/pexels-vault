import toTitleCase from "~/src/utils/toTitleCase"

interface PageParams {
  params: {
    query: string
  }
  searchParams: {
    type?: string
  }
}

export async function generateMetadata({ params, searchParams }: PageParams) {
  const query = toTitleCase(decodeURI(params.query))
  const type = toTitleCase(searchParams.type ?? "photo")
  return {
    title: `${type} results for ${query}`,
  }
}

export default function page({ params, searchParams }: PageParams) {
  const query = toTitleCase(decodeURI(params.query))
  const type = searchParams.type ?? "photo"

  return (
    <div>
      {query}
      {type}
    </div>
  )
}
