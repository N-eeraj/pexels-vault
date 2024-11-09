import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full p-2 bg-secondary-variant text-primary/80 text-center text-sm">
      Powered by&nbsp;
      <Link
        href="https://www.pexels.com/"
        target="_blank"
        referrerPolicy="no-referrer"
        className="text-accent hover:brightness-125 duration-200">
        Pexels&nbsp;
      </Link>
      API
    </footer>
  )
}
