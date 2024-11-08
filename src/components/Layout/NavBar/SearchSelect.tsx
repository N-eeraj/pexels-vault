"use client"

import { FormEvent, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Icon } from "@iconify/react"

const mediaTypes = [
  "photo",
  "video",
]

export default function SearchSelect() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [selectedType, setSelectedType] = useState(searchParams.get("type") ?? mediaTypes[0])

  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const { type, query } = Object.fromEntries(formData.entries())
    if (query) {
      router.push(`/search/${query}?type=${type}`)
    }
  }

  return (
    <form
      className="flex items-center gap-x-2 w-full max-w-sm h-10 px-2 py-1 bg-primary rounded-md"
      onSubmit={handleSearch}>
      <select
        value={selectedType}
        name="type"
        className="capitalize h-full"
        onChange={({ target }) => setSelectedType(target.value)}>
        {mediaTypes.map(type => (
          <option
            value={type}
            key={type}>
            {type}
          </option>
        ))}
      </select>

      <input
        placeholder={`Search for ${selectedType}s`}
        name="query"
        className="flex-1 h-full pl-2 border-l" />

      <button role="search">
        <Icon icon="fe:search" />
      </button>
    </form>
  )
}
