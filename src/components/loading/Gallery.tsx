export default function LoadingGallery() {
  return (
    <section className="max-w-7xl mx-auto">
      <ul className="columns-3xs p-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <li
            key={index}
            className="h-64 mb-4 bg-gray-400 rounded-md animate-pulse" />
        ))}
      </ul>
    </section>
  )
}
