"use client"

import { useState } from "react"
import Link from "next/link"

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'

import { Icon } from "@iconify/react"

import { downloadImage } from "@lib/downloadFile"

export type SizeOptions = {
  text: string
  size: string
  url: string
}[]

export default function MediaHeader({ photographer, photographerUrl, sizeOptions, userClassName, downloadClassName }: {
  photographer: string
  photographerUrl: string
  sizeOptions: SizeOptions
  userClassName?: string
  downloadClassName?: string
}) {
  const [downloadURL, setDownloadURL] = useState(sizeOptions[0]?.url)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    const url = new URL(downloadURL)
    await downloadImage(downloadURL, url.pathname.split("/").at(-1))
    setIsDownloading(false)
  }

  return (
    <>
      <Link
        href={photographerUrl}
        className={`w-fit text-xl ${userClassName}`}>
        {photographer}
      </Link>

      {downloadURL ?
        <div className={`flex justify-center items-center w-fit h-12 bg-accent text-white divide-x divide-black/25 rounded-md overflow-hidden ${isDownloading && "grayscale"} ${downloadClassName}`}>
          <button
            disabled={isDownloading}
            className="flex-1 inline-flex justify-center items-center gap-x-1 h-full px-8 hover:bg-black/10 disabled:cursor-not-allowed"
            onClick={handleDownload}>
            {isDownloading ?
              <>
                <span>
                  Downloading
                </span>
                <Icon
                  icon="eos-icons:three-dots-loading"
                  fontSize={32} />
              </> :
              "Download"
            }
          </button>

          <Listbox
            value={downloadURL}
            onChange={setDownloadURL}>
            <ListboxButton
              disabled={isDownloading}
              className="inline-grid place-content-center w-10 h-full hover:bg-black/10 disabled:cursor-not-allowed">
              <Icon
                icon="mdi:chevron-down"
                fontSize={20} />
            </ListboxButton>
            <ListboxOptions
              anchor="bottom"
              transition
              className="absolute right-0 w-fit min-w-72 rounded-md border bg-primary p-1 backdrop-blur capitalize [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 -translate-x-2 -translate-y-2 md:translate-y-2 z-10 divide-y divide-secondary/5">
              <span className="inline-block text-secondary/75 p-2">
                Choose a size:
              </span>
              {sizeOptions.map(({ text, size, url }) => (
                <ListboxOption
                  key={url}
                  value={url}
                  className="group flex justify-between items-center gap-2 h-12 px-3 select-none data-[focus]:bg-secondary/10 transition cursor-pointer">
                  <div className={`flex items-center gap-x-1`}>
                    <span className="text-secondary-variant">
                      {text}
                    </span>
                    <span className="text-secondary/60">
                      {size}
                    </span>
                  </div>
                  {downloadURL === url && <Icon icon="mdi-check-bold" />}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div> :
        <div />
      }
    </>
  )
}
