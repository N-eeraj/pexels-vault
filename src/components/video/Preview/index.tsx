"use client"

import {
  useRef,
  useState,
  ChangeEvent,
} from "react"

import Player from "./Player"

export default function Preview({ url, duration, className }: {
  url: string
  duration: number
  className?: string
}) {
  const videoElement = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const timer = useRef<number | null>(null)

  const toggleVideoPlayer = () => {
    if (videoElement.current) {
      if (isPlaying) {
        videoElement.current.pause()
        if (timer.current) {
          window.clearInterval(timer.current)
        }
      } else {
        videoElement.current.play()
        timer.current = window.setInterval(() => {
          setTime(videoElement.current?.currentTime ?? 0)
        }, 100)
      }
      setIsPlaying(prevPlayState => !prevPlayState)
    }
  }

  const handleVideoEnd = () => {
    if (timer.current) {
      window.clearInterval(timer.current)
    }
    if (videoElement.current) {
      videoElement.current.currentTime = 0
    }
    setTime(0)
    setIsPlaying(false)
  }

  const handleSeek = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const seekedTo = Number(target.value)

    if (videoElement.current) {
      videoElement.current.currentTime = seekedTo
    }
    setTime(seekedTo)
  }

  return (
    <div className={`group relative w-full md:w-fit md:h-[600px] ${className}`}>
      <video
        ref={videoElement}
        src={url}
        className="w-full max-w-5xl h-full"
        onClick={toggleVideoPlayer}
        onEnded={handleVideoEnd} />

      {videoElement.current && (
        <Player
          videoElement={videoElement.current}
          time={time}
          duration={duration}
          isPlaying={isPlaying}
          handleSeek={handleSeek}
          toggleVideoPlayer={toggleVideoPlayer} />
      )}
    </div>
  )
}
