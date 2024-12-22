import PhotoView from "@components/photo/View"

interface PageParams {
  params: Promise<{
    id: string
  }>
}

export default async function Photo({ params }: PageParams) {
  const { id } = await params

  return (
    <PhotoView id={id} />
  )
}
