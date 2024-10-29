import type { Metadata } from "next"
import "./globals.css"

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
      <body className="bg-primary text-secondary">
        {children}
      </body>
    </html>
  )
}
