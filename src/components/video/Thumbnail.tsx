"use client"

import { MouseEvent, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify/react"
import PreviewImage from "@components/PreviewImage"
import { Video } from "@schemas/videos"

function preventDefault(event: MouseEvent) {
  event.preventDefault()
}

export default function VideoThumbnail({ id, image, width, height, blurredThumbnail, user, video_pictures }: Video) {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)
  const interval = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    interval.current = setInterval(() => {
      setPreviewIndex(prev => {
        if (prev === null || prev === video_pictures.length - 1) {
          return 0
        } else {
          return prev + 1
        }
      })
    }, 200)
  }

  const handleMouseLeave = () => {
    setPreviewIndex(null)
    if (interval.current !== null) {
      clearInterval(interval.current)
    }
  }

  useEffect(() => {
    return () => {
      if (interval.current !== null) {
        clearInterval(interval.current)
      }
    }
  }, [])

  return (
    <Link href={`/video/${id}`}>
      <PreviewImage
        src={image}
        width={256}
        height={256 * (height / width)}
        alt="video thumbnail"
        placeholder="blur"
        blurDataURL={blurredThumbnail}
        name={user.name}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {previewIndex !== null && (
          <Image
            src={video_pictures[previewIndex].picture}
            alt="video picture preview"
            fill
            sizes="256px" />
        )}
        <Icon
          icon="material-symbols:play-circle-rounded"
          className="absolute top-2 left-2 p-1.5 bg-black/50 text-primary text-4xl rounded-full z-10"
          onClick={preventDefault} />
      </PreviewImage>
    </Link>
  )
}
