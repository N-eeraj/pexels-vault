import VideoView from "~/src/components/video/View"

interface PageParams {
  params: Promise<{
    id: string
  }>
}

export default async function Video({ params }: PageParams) {
  const { id } = await params

  return <VideoView id={id} />
}
