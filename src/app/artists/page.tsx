import { Link } from "~/components/Link";
import { getArtistsPageData } from "~/api/getArtistsPageData";
import { Layout } from "~/components/Layout/Layout";

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
        <div key={artist?.slug}>
          <Link href={`/artists/${artist?.slug}`}>{artist?.name}</Link>
        </div>
      ))}
    </Layout>
  );
}
