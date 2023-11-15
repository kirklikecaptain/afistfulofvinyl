import { Layout } from "~/ui/components/Layout";
import { ArtistCard } from "~/ui/components/ArtistCard";
import { ArtistsPageDocument, get } from "~/api";

async function getArtistsPageData() {
  const { data } = await get(ArtistsPageDocument);

  const page = data.page?.items[0];
  const artists = data.artists?.items;

  return {
    page,
    artists,
  };
}

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
      {artists?.map((artist, i) => <ArtistCard key={`artist_${i}`} fragment={artist} />)}
    </Layout>
  );
}
