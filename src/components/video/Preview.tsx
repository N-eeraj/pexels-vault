"use client"

import {
  useRef,
  useState,
  ChangeEvent,
  useMemo,
} from "react"

import { Icon } from "@iconify/react"

function getFormattedTime(time: number) {
  const min = Math.floor(time / 60)
  const sec = String(Math.round(time) % 60).padStart(2, "0")
  return `${min}:${sec}`
}

function Preview({ url, duration }: { url: string, duration: number }) {
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
  }

  const handleSeek = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const seekedTo = Number(target.value)

    if (videoElement.current) {
      videoElement.current.currentTime = seekedTo
    }
    setTime(seekedTo)
  }

  const videoPlayerIcon = isPlaying ? "material-symbols:pause" : "material-symbols:play-arrow"

  const formattedTime = useMemo(() => getFormattedTime(time), [time])

  return (
    <div className="relative">
      <video
        ref={videoElement}
        src={url}
        className="w-full max-w-5xl"
        onClick={toggleVideoPlayer}
        onEnded={handleVideoEnd} />

      <div className="absolute bottom-0 left-0 flex flex-col w-full px-1 pb-1 bg-gradient-to-b from-transparent to-black/75">
        <div className="relative h-1 bg-primary/75 rounded-[1px] overflow-x-hidden">
          <input
            type="range"
            value={time}
            min={0}
            max={duration}
            step="any"
            className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
            onChange={handleSeek} />
          <div
            style={{width: `${time * 100 / (duration ?? 1)}%`}}
            className="h-full bg-accent duration-100" />
        </div>

        <div className="flex justify-between p-1.5 text-primary">
          <div className="flex">
            <button
              className="grid place-content-center pr-1"
              onClick={toggleVideoPlayer}>
              <Icon
                icon={videoPlayerIcon}
                fontSize={24} />
            </button>
            <span>
              {formattedTime}
              &nbsp;/&nbsp;
              {getFormattedTime(duration)}
            </span>
          </div>
          <div>
            <button
              className="grid place-content-center pr-1"
              onClick={() => videoElement.current?.requestFullscreen()}>
              <Icon
                icon="material-symbols:fullscreen"
                fontSize={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
