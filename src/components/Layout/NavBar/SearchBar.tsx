"use client"

import {
  useState,
  useRef,
  useEffect,
  FormEvent,
} from "react"

import {
  useRouter,
  useSearchParams,
} from "next/navigation"

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'

import { Icon } from "@iconify/react"

import useMediaType from "@hooks/useMediaType"

import { MEDIA_TYPES } from "@constants/pexels"

type MediaType = typeof MEDIA_TYPES[number]["type"]

export default function SearchBar() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const {
    type: mediaType,
    icon: currentIcon,
  } = useMediaType()

  const [selectedType, setSelectedType] = useState<MediaType>(mediaType)
  const searchInput = useRef<HTMLInputElement | null>(null)

  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const { query } = Object.fromEntries(formData.entries())
    if (query) {
      router.push(`/search/${query}?type=${selectedType}`)
    }
  }

  const searchFocus = ({ key }: KeyboardEvent) => {
    if (key !== "/" || document.activeElement === searchInput.current) return
    searchInput.current?.focus()
  }

  useEffect(() => {
    document.addEventListener("keyup", searchFocus)
  
    return () => {
      document.removeEventListener("keyup", searchFocus)
    }
  }, [])

  useEffect(() => {
    setSelectedType(mediaType)
  }, [searchParams])

  return (
    <form
      className="flex items-center gap-x-2 w-full max-w-sm h-10 py-1 bg-primary rounded-md"
      onSubmit={handleSearch}>
      <Listbox
        value={selectedType}
        onChange={setSelectedType}>
        <ListboxButton className="relative flex items-center gap-x-1 w-fit py-1.5 px-3 rounded-lg capitalize focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25">
          <Icon icon={currentIcon} />
          <span className="font-medium">
            {selectedType}
          </span>
          <Icon
            icon="mdi:chevron-down"
            fontSize={20} />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className="w-[var(--button-width)] rounded-md border bg-primary p-1 backdrop-blur capitalize [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-10">
          {MEDIA_TYPES.map(({ type, icon }) => (
            <ListboxOption
              key={type}
              value={type}
              className="group flex items-center gap-2 rounded py-1.5 px-3 select-none data-[focus]:bg-secondary/10 transition cursor-pointer">
              <div className={`flex items-center gap-x-1 ${selectedType === type ? "text-accent" : "text-secondary"}`}>
                <Icon icon={icon} />
                <span>
                  {type}
                </span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      <input
        ref={searchInput}
        placeholder={`Search for ${selectedType}s`}
        name="query"
        className="flex-1 h-full pl-2 border-l" />

      <button
        role="search"
        className="mr-3">
        <Icon icon="fe:search" />
      </button>
    </form>
  )
}
