"use client"

import useUpdateSearchParams from "@hooks/useUpdateSearchParams"

export default function Pagination({ length, currentPage }: Readonly<{
  length: number
  currentPage: number
}>) {
  const { updateSearchParams } = useUpdateSearchParams()
  const paginate = (page: number) => {
    updateSearchParams("page", String(page))
  }

  return (
    Array.from({ length }).map((_, i) => (
      <button
        key={i}
        className={`min-w-10 aspect-square mx-1 mb-1 p-2 ${currentPage === i + 1 ? "bg-accent" : "bg-secondary-variant"} text-primary rounded`}
        onClick={() => paginate(i + 1)}>
        {i + 1}
      </button>
    ))
  )
}
