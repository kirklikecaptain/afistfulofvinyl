import { CardLink, CardSection, Hero, Page } from "~/components";
import { getArtistPagePath } from "~/utils/paths";

import { fetchAllArtistsPageData } from "./page.data";

export default async function AllArtistsPage() {
  const { artists } = await fetchAllArtistsPageData();

  return (
    <Page>
      <Hero heading="Artists" />
      <CardSection
        columns="4"
        cards={artists.map((artist) => (
          <CardLink
            key={artist.slug}
            href={getArtistPagePath(artist.slug)}
            image={artist.photo?.url}
            title={artist.name}
            accentColor={artist.accentColor}
            aspectRatio={1}
          />
        ))}
      />
    </Page>
  );
}
