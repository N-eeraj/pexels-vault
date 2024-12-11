"use client"

import InnerImageZoom from "react-inner-image-zoom"
import { Photo } from '@schemas/photos'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

export default function Preview(photoData: Photo) {
  return (
    <InnerImageZoom
      src={photoData.src.original}
      width={photoData.width * 650 / photoData.height}
      height={650}
      imgAttributes={{ alt: photoData.alt }}
      hideHint
      className="w-full max-w-5xl" />
  )
}
