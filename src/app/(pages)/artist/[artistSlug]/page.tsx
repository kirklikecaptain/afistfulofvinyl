import { notFound } from "next/navigation";

import { Page } from "~/templates";
import { CardList, Hero } from "~/sections";
import { VideoCardLink } from "~/components";

import { getArtistProfilePageData } from "./page.data";

export interface ArtistProfilePageParams {
  artistSlug: string;
}

export interface ArtistProfilePageProps {
  params: ArtistProfilePageParams;
}

export default async function ArtistProfilePage(props: ArtistProfilePageProps) {
  const {
    params: { artistSlug },
  } = props;

  const { artist, videoLinkCards } = await getArtistProfilePageData(artistSlug);

  if (!artist) {
    return notFound();
  }

  return (
    <Page>
      <Hero title={artist.fields.name} accentColor={artist.fields.accentColor} />
      <CardList>
        {videoLinkCards.map((video) => (
          <VideoCardLink key={video.title} {...video} />
        ))}
      </CardList>
    </Page>
  );
}
