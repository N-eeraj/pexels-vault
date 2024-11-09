"use client"

import { useSearchParams } from "next/navigation"

import {
  Tab,
  TabGroup,
  TabList,
} from "@headlessui/react"

import useUpdateSearchParams from "@hooks/useUpdateSearchParams"

import { MEDIA_TYPES } from "@constants/pexels"

export default function MediaTypeTab() {
  const searchParams = useSearchParams()
  const { updateSearchParams } = useUpdateSearchParams()

  const defaultIndex = MEDIA_TYPES.findIndex(({ type }) => (searchParams.get("type") ?? MEDIA_TYPES[0].type) === type)

  const handleTypeChange = (value: number) => {
    const { type } = MEDIA_TYPES[value]
    updateSearchParams("type", type)
  }

  return (
    <TabGroup
      defaultIndex={defaultIndex}
      onChange={handleTypeChange}>
      <TabList className="flex justify-center gap-x-2 p-2">
        {MEDIA_TYPES.map(({ type }) => (
          <Tab
            key={type}
            className="flex-1 lg:flex-grow-0 h-10 px-5 text-sm/6 font-semibold rounded-full data-[selected]:bg-secondary data-[selected]:text-primary data-[hover]:bg-secondary/10 data-[selected]:data-[hover]:bg-secondary-variant capitalize outline-none transition-colors duration-200">
            {type}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  )
}
