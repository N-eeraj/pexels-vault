"use client"

import InnerImageZoom from "react-inner-image-zoom"
import { Photo } from "@schemas/photos"
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css"

export default function Preview({ className, ...photoData }: { className?: string } & Photo) {
  return (
    <InnerImageZoom
      src={photoData.src.original}
      imgAttributes={{ alt: photoData.alt }}
      hideHint
      className={`zoom-image-container w-full md:w-fit !max-w-5xl md:h-[600px] ${className}`} />
  )
}
