"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

const mediaTypes = [
  "photo",
  "video",
]

export default function SearchSelect() {
  const searchParams = useSearchParams()

  const [selectedType, setSelectedType] = useState(searchParams.get("type") ?? mediaTypes[0])

  return (
    <div className="flex items-center gap-x-2 w-full max-w-sm h-10 px-2 py-1 bg-primary rounded-md divide-x">
      <select
        value={selectedType}
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
        className="flex-1 h-full pl-2" />
    </div>
  )
}
