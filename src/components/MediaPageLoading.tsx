import Skeleton from "@components/Skeleton"

export default function MediaPageLoading() {
  return (
    <div className="grid md:grid-cols-2 justify-items-center items-center gap-4 w-full p-2">
      <Skeleton className="justify-self-start w-full max-w-56 h-7 md:-order-1" />
      <Skeleton className="md:justify-self-end w-full md:w-44 h-12 order-1 md:-order-1" />
      <Skeleton className="md:col-span-2 w-full max-w-5xl h-[600px] md:mx-auto" />
    </div>
  )
}
