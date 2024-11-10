import type { Metadata } from "next"
import NavBar from "@components/Layout/NavBar"
import Footer from "@components/Layout/Footer"
import "@/app/global.css"

export const metadata: Metadata = {
  title: {
    default: "Pexels Vault",
    template: "%s | Pexels Vault",
  },
  description: "An photo and video search app powered by Pexels, built using Next.js",
}

export const revalidate = 3600

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

      <body className="flex flex-col justify-between min-h-screen bg-primary text-secondary">
        <NavBar />

        <main className="flex-1 pb-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
