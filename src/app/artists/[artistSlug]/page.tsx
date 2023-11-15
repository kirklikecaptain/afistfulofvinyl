import { Heading } from "~/ui/chakra/react";
import { Layout, VideoCardList } from "~/ui/components";
import { ArtistPageDocument, get } from "~/api";
import { notFound } from "next/navigation";

interface ArtistPageParams {
  artistSlug: string;
}

async function getArtistPageData({ artistSlug }: ArtistPageParams) {
  const { data } = await get(ArtistPageDocument, { artistSlug });

  const artist = data.page?.items[0];
  const videos = data.videos?.items;

  return {
    artist,
    videos,
  };
}

interface ArtistPageProps {
  params: ArtistPageParams;
}

export async function generateMetadata({ params }: ArtistPageProps) {
  const { artistSlug } = params;
  const { artist } = await getArtistPageData({ artistSlug });

  return { title: artist?.name };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { artistSlug } = params;
  const { artist, videos } = await getArtistPageData({ artistSlug });

  if (!artist) {
    return notFound();
  }

  return (
    <Layout>
      <Heading>{artist.name}</Heading>
      <VideoCardList heading="Videos" videos={videos} />
    </Layout>
  );
}
