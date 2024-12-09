import Link from "next/link"

export default function MediaHeader({ photographer, photographerUrl, sizeOptions, className }: {
  photographer: string
  photographerUrl: string
  sizeOptions: {
    text: string
    size: string
    url: string
  }[]
  className?: string
}) {
  return (
    <div className="w-full">
      <Link
        href={photographerUrl}
        className="text-xl">
        {photographer}
      </Link>
    </div>
  )
}
