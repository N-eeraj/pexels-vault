import { ComponentType } from "react"

export default function Masonry<T extends { id: number }>({
  items,
  renderEl: RenderEl,
  className
}: {
  items: T[]
  renderEl: ComponentType<T>
  className?: string
}) {
  return (
    <ul className={`columns-3xs p-4 ${className}`}>
      {items.map(item => (
        <li
          key={item.id}
          className="mb-4 rounded-md overflow-hidden">
          <RenderEl {...item} />
        </li>
      ))}
    </ul>
  )
}
