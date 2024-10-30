export default function Masonry<T extends { id: number }>({ items, renderEl: RenderEl }: Readonly<{
  items: T[]
  renderEl: React.ComponentType<T>
}>) {
  return (
    <ul className="columns-3xs p-4">
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
