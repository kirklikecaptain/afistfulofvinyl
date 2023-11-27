import { notFound } from "next/navigation";

import { getArtistPageData } from "~/api/queries/getArtistPageData";
import { Heading } from "~/ui/chakra/react";
import { Layout, VideoCardList } from "~/ui/components";

interface ArtistPageProps {
  params: { artistSlug: string };
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
