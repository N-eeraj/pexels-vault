"use client"

import ReactPaginate from "react-paginate"

import useUpdateSearchParams from "@hooks/useUpdateSearchParams"

export default function Pagination({ length, currentPage }: Readonly<{
  length: number
  currentPage: number
}>) {
  const { updateSearchParams } = useUpdateSearchParams()
  const activePageIndex = currentPage - 1

  const handlePaginate = ({ nextSelectedPage }: { nextSelectedPage: number | undefined  }) => {
    if (nextSelectedPage === undefined) return
    updateSearchParams("page", String(nextSelectedPage + 1))
  }

  return (
    <ReactPaginate
      pageCount={length}
      initialPage={activePageIndex}
      marginPagesDisplayed={3}
      previousLabel="&lsaquo;"
      nextLabel="&rsaquo;"
      containerClassName="flex justify-center items-center gap-x-2 w-full"
      pageClassName="min-w-10 page-btn"
      pageLinkClassName="pagination-link p-2"
      activeClassName="!bg-accent"
      previousClassName={`${currentPage === 1 && "hidden"} page-step-btn`}
      nextClassName={`${currentPage === length && "hidden"} page-step-btn`}
      previousLinkClassName="pagination-link text-2xl"
      nextLinkClassName="pagination-link text-2xl"
      onClick={handlePaginate} />
  )
}
