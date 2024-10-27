import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pexels Vault",
  description: "An image and video search app powered by Pexels, built using Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary text-secondary">
        <div>
          Hello
        </div>
        <Suspense fallback="loading page">
          {children}
        </Suspense>
      </body>
    </html>
  )
}
