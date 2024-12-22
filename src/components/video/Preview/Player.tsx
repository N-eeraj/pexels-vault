"use client"

import {
  useMemo,
  ChangeEventHandler,
  MouseEventHandler,
} from "react"
import { Icon } from "@iconify/react"

import getFormattedTime from "@utils/formatVideoTime"

export default function Player({ videoElement, time, duration, isPlaying, handleSeek, toggleVideoPlayer }: {
  videoElement: HTMLVideoElement
  time: number
  duration: number
  isPlaying: boolean
  handleSeek: ChangeEventHandler<HTMLElement>
  toggleVideoPlayer: MouseEventHandler<HTMLButtonElement>
}) {
  const videoPlayerIcon = isPlaying ? "material-symbols:pause" : "material-symbols:play-arrow"

  const formattedTime = useMemo(() => getFormattedTime(time), [time])

  return (
    <div className={`absolute bottom-0 left-0 flex flex-col w-full px-1 pb-1 bg-gradient-to-b from-transparent to-black/75 ${isPlaying ? 'opacity-0' : 'opacity-100'} group-hover:opacity-100 transition-opacity duration-700`}>
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
            onClick={() => videoElement?.requestFullscreen()}>
            <Icon
              icon="material-symbols:fullscreen"
              fontSize={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
