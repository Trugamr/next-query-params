import Link from "next/link";

// Force page to be dynamic and not be built static
// Only then the search params with be available to page
export const dynamic='force-dynamic';

export default function Home(props: unknown) {
  return (
    <main>
      <h4>Props for this page are:</h4>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
      <Link href="/?id=37&username=trugamr">
        navigate to page with params
      </Link>
    </main>
  )
}
