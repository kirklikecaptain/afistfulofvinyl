import { notFound } from "next/navigation";

import { CardList, Hero, Page, VideoCard, resolveVideoCardProps } from "~/components";

import { ArtistPageProps, getArtistPageData, generateArtistPageMetadata } from "./data";

export const generateMetadata = generateArtistPageMetadata;

export default async function ArtistPage(props: ArtistPageProps) {
  const {
    params: { artistSlug },
  } = props;

  const { artist, videos } = await getArtistPageData({ artistSlug });

  if (!artist) {
    return notFound();
  }

  return (
    <Page>
      <Hero title={artist.fields.name} />
      <CardList title="Videos">
        {videos.map((video) => {
          const videoCardProps = resolveVideoCardProps(video);
          return <VideoCard key={video.sys.id} {...videoCardProps} hideArtistName />;
        })}
      </CardList>
    </Page>
  );
}
