import { Metadata } from "next";

import { CardLink, CardSection, Hero, Main } from "~/components";
import { getArtistPagePath } from "~/utils/paths";

import { fetchAllArtistsPageData } from "./_data";

export const metadata: Metadata = {
  title: "Artists",
  description: "All artists featured on A Fistful of Vinyl",
};

export default async function AllArtistsPage() {
  const { artists } = await fetchAllArtistsPageData();

  return (
    <Main>
      <Hero heading="Artists" />
      <CardSection columns="4">
        {artists.map((artist) => (
          <CardLink
            key={artist.slug}
            href={getArtistPagePath(artist.slug)}
            image={artist.photo?.url}
            title={artist.name}
            accentColor={artist.accentColor}
            aspectRatio={1}
          />
        ))}
      </CardSection>
    </Main>
  );
}
