import { Layout } from "~/ui/components/Layout";
import { ArtistCard } from "~/ui/components";
import { getArtistsPageData } from "~/api/queries/getArtistsPageData";

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
      <h1>All Artists Page</h1>
      {artists.map((artist, i) => (
        <ArtistCard key={`artist_${i}`} name={artist.name} />
      ))}
    </Layout>
  );
}
