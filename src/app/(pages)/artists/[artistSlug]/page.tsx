import { notFound } from "next/navigation";

import { CardList, Hero, Page, VideoCard } from "~/components";

import { ArtistPageProps, getArtistPageData, generateArtistPageMetadata } from "./data";

export const generateMetadata = generateArtistPageMetadata;

export default async function ArtistPage(props: ArtistPageProps) {
  const {
    params: { artistSlug },
  } = props;

  const { artist, videoLinkCards } = await getArtistPageData({ artistSlug });

  if (!artist) {
    return notFound();
  }

  return (
    <Page artistColor={artist.fields.accentColor}>
      <Hero title={artist.fields.name} />
      <CardList>
        {videoLinkCards.map((video) => (
          <VideoCard key={video.title} {...video} />
        ))}
      </CardList>
    </Page>
  );
}
