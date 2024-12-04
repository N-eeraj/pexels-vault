import { ReactNode } from "react"
import Link from "next/link"

function NotFoundLink({ children, href }: {
  children: ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="border-b-2 border-dotted border-secondary/40 hover:border-secondary duration-300">
      {children}
    </Link>
  )
}

export default NotFoundLink
