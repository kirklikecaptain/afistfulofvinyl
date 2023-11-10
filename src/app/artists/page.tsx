import { Link } from "~/components/Link";
import { getArtistsPageData } from "~/api/queries/getArtistsPageData";
import { Layout } from "~/components/Layout";

export async function generateMetadata() {
  const { page } = await getArtistsPageData();

  return {
    title: page?.metaTitle,
  };
}

export default async function ArtistsPage() {
  const { artists } = await getArtistsPageData();

  return (
    <Layout>
      <h1>Artists Page</h1>
      {artists?.map((artist) => (
        <div key={artist?.sys.id}>
          <Link href={`/artists/${artist?.slug}`}>{artist?.name}</Link>
        </div>
      ))}
    </Layout>
  );
}
