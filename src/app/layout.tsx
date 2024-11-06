import type { Metadata } from "next"
import NavBar from "@components/Layout/NavBar"
import "@/app/global.css"

export const metadata: Metadata = {
  title: "Pexels Vault",
  description: "An photo and video search app powered by Pexels, built using Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/pexels-vault.png"
          sizes="any" />
      </head>

      <body className="bg-primary text-secondary">
        <NavBar />

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
