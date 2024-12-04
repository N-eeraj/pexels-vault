import NotFoundLink from "@components/Link"

export default function NotFound() {
  return (
    <section>
      <h2>
        Oops, we couldn't find this page.
      </h2>
      <h3>
        Here are some helpful links instead:
      </h3>
      <ul>
        <li>
          Discover free&nbsp;
          <NotFoundLink href="/">photos</NotFoundLink>&nbsp;
          or&nbsp;
          <NotFoundLink href="/?type=video">videos</NotFoundLink>&nbsp;
        </li>
        <li>
          Search for&nbsp;
          <NotFoundLink href="/search/kitten?type=photo">kitten</NotFoundLink>&nbsp;
          photos
        </li>
        <li>
          Search for&nbsp;
          <NotFoundLink href="/search/puppy?type=video">puppy</NotFoundLink>&nbsp;
          videos
        </li>
      </ul>
    </section>
  )
}
