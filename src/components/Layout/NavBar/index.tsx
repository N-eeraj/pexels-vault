import Image from "next/image"
import SearchSelect from "@components/Layout/NavBar/SearchSelect"

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center gap-x-4 p-4 bg-secondary-variant">
      <h1 className="flex items-center gap-x-2 text-2xl text-primary">
        <Image
          src="/pexels-vault.png"
          alt="Pexels Vault"
          width={40}
          height={40} />
        <span className="hidden lg:block">
          Pexels Vault
        </span>
      </h1>

      <SearchSelect />
    </nav>
  )
}
