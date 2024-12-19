"use client"

import { useState } from "react"
import Link from "next/link"
import { downloadImage } from "@lib/downloadFile"

export type SizeOptions = {
  text: string
  size: string
  url: string
}[]

export default function MediaHeader({ name, photographer, photographerUrl, sizeOptions, userClassName, downloadClassName }: {
  name: string
  photographer: string
  photographerUrl: string
  sizeOptions: SizeOptions
  userClassName?: string
  downloadClassName?: string
}) {
  const [downloadURL, setDownloadURL] = useState(sizeOptions[0]?.url)

  const handleDownload = () => {
    downloadImage(downloadURL, name)
  }

  return (
    <>
      <Link
        href={photographerUrl}
        className={`w-fit text-xl ${userClassName}`}>
        {photographer}
      </Link>

      {downloadURL ?
        <div className={`flex justify-center items-center h-12 bg-accent text-white divide-x divide-black/25 rounded-md overflow-hidden ${downloadClassName}`}>
          <button
            className="inline-block h-full px-8 hover:bg-black/10"
            onClick={handleDownload}>
            Download
          </button>
          <button className="inline-block w-10 h-full hover:bg-black/10">
            Hi
          </button>
        </div> :
        <div />
      }
    </>
  )
}
