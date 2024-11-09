import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import SearchSelect from "@components/Layout/NavBar/SearchSelect"

export default function NavBar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center flex-wrap gap-4 p-4 lg:px-8 bg-secondary-variant z-10">
      <Link href="/">
        <h1 className="flex items-center gap-x-2 text-2xl text-primary">
          <Image
            src="/pexels-vault.png"
            alt="Pexels Vault"
            width={40}
            height={40} />
          <span>
            Pexels Vault
          </span>
        </h1>
      </Link>

      <Suspense>
        <SearchSelect />
      </Suspense>
    </nav>
  )
}
