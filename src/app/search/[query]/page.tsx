interface PageParams {
  params: {
    query: string
  }
  searchParams: {
    type?: string
  }
}

export default function page({ params, searchParams }: PageParams) {
  const { query } = params
  const { type } = searchParams ?? "photo"

  return (
    <div>
      {query}
      {type}
    </div>
  )
}
