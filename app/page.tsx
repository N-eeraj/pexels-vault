export default function Home() {
  console.log(process.env.PEXELS_API_KEY)
  return (
    <main>
      <h1 className="text-4xl text-accent">
        Title
      </h1>
      <h2 className="text-2xl">
        Sub Title
      </h2>
      <button className="p-4 bg-secondary-variant text-primary">
        Button
      </button>
      <button className="p-4 bg-secondary-variant text-accent">
        Button
      </button>
    </main>
  )
}
