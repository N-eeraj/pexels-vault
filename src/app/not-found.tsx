import Image from "next/image"
import NotFoundLink from "@components/Link"
import { Icon } from "@iconify/react"

export default function NotFound() {
  return (
    <section className="lg:flex lg:justify-center lg:items-center lg:gap-x-12 px-2 py-12">
      <section>
        <h2 className="text-4xl">
          Oops, we couldn't find this page.
        </h2>
        <h3 className="mt-2 text-2xl">
          Here are some helpful links instead:
        </h3>

        <ul className="space-y-2 mt-8">
          <li className="flex items-center gap-x-1">
            <Icon
              icon="material-symbols:android-camera"
              fontSize={24} />
            <span>
              Discover free&nbsp;
              <NotFoundLink href="/">photos</NotFoundLink>&nbsp;
              or&nbsp;
              <NotFoundLink href="/?type=video">videos</NotFoundLink>&nbsp;
            </span>
          </li>
          <li className="flex items-center gap-x-1">
            <Icon
              icon="material-symbols:image-outline-rounded"
              fontSize={24} />
            <span>
              Search for&nbsp;
              <NotFoundLink href="/search/kitten?type=photo">kitten</NotFoundLink>&nbsp;
              photos
            </span>
          </li>
          <li className="flex items-center gap-x-1">
            <Icon
              icon="material-symbols:smart-display-outline-sharp"
              fontSize={24} />
            <span>
              Search for&nbsp;
              <NotFoundLink href="/search/puppy?type=video">puppy</NotFoundLink>&nbsp;
              videos
            </span>
          </li>
        </ul>
      </section>

      <div className="hidden lg:block relative w-72 aspect-[7/11]">
        <Image
          src="/404-decorator.avif"
          alt="Decorator Image"
          fill
          sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
          style={{ objectFit: "cover" }}
          className="bg-gray-700 rounded-md" />
      </div>
    </section>
  )
}
