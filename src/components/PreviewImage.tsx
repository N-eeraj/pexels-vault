import {
  ReactNode,
  MouseEventHandler,
} from "react"
import Image from "next/image"

export default function PreviewImage({ name, children, onMouseEnter, onMouseLeave, ...props }: {
  src: string
  width: number
  height: number
  alt: string
  placeholder: "blur" | "empty" | `data:image/${string}`
  blurDataURL: string | undefined
  name: string
  children?: ReactNode
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      onMouseEnter={onMouseEnter && onMouseEnter}
      onMouseLeave={onMouseLeave && onMouseLeave}>
      <Image
        {...props}
        style={{ width: "100%" }}
        className="scale-105 group-hover:scale-100 duration-300" />
      {children}
      <div className="absolute top-0 left-0 flex items-end w-full h-full p-4 bg-gradient-to-b from-black/50 via-transparent to-black/75 scale-y-[250%] group-hover:scale-y-100 duration-300">
        <strong className="text-primary">
          {name}
        </strong>
      </div>
    </div>
  )
}
