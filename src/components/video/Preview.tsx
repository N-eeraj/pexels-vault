"use client"

import {
  useRef,
  useState,
} from "react"

function Preview({ url, duration }: { url: string, duration: number }) {
  const videoElement = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideoPlayer = () => {
    if (videoElement.current) {
      if (isPlaying) {
        videoElement.current.pause()
      } else {
        videoElement.current.play()
      }
      setIsPlaying(prevPlayState => !prevPlayState)
    }
  }

  return (
    <div className="relative">
      <video
        ref={videoElement}
        src={url}
        className="w-full max-w-5xl"
        onClick={toggleVideoPlayer} />
    </div>
  )
}

export default Preview
