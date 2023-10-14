import { getAllArtists, getHomePageContent } from "~/api/queries";
import { Link } from "~/components/Link";

export async function generateMetadata() {
  const { meta } = await getHomePageContent();

  return {
    title: meta?.metaTitle,
    description: meta?.metaDescription,
  };
}

export default async function ArtistsPage() {
  const data = await getAllArtists();

  return (
    <main>
      <h1>Artists Page</h1>
      {data?.map((artist) => (
        <div key={artist?.slug}>
          <Link href={`/artists/${artist?.slug}`}>{artist?.name}</Link>
        </div>
      ))}
    </main>
  );
}
