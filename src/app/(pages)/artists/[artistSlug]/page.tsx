import { notFound } from "next/navigation";

import { CardList, Hero, Page, VideoCard } from "~/components";

import { ArtistPageProps, getArtistPageData, getArtistPageMetadata } from "./data";

export const generateMetadata = getArtistPageMetadata;

export default async function ArtistPage(props: ArtistPageProps) {
  const {
    params: { artistSlug },
  } = props;

  const { artist, videoLinkCards } = await getArtistPageData({ artistSlug });

  if (!artist) {
    return notFound();
  }

  return (
    <Page>
      <Hero title={artist.fields.name} accentColor={artist.fields.accentColor} />
      <CardList>
        {videoLinkCards.map((video) => (
          <VideoCard key={video.title} {...video} />
        ))}
      </CardList>
    </Page>
  );
}
