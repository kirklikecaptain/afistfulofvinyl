import { Metadata } from "next";

import { ArtistCard, CardList, Hero, Page } from "~/components";
import { resolveArtistCardProps } from "~/components/ArtistCard/ArtistCard.utils";

import { getAllArtistsPageData } from "./data";

export const metadata: Metadata = {
  title: "Artists",
  description: "All artists featured on A Fistful of Vinyl",
};

export default async function AllArtistsPage() {
  const { artists } = await getAllArtistsPageData();

  return (
    <Page>
      <Hero title="Artists" />
      <CardList cols={4}>
        {artists.map((artist) => {
          const resolvedProps = resolveArtistCardProps(artist);
          return <ArtistCard key={resolvedProps.href} {...resolvedProps} />;
        })}
      </CardList>
    </Page>
  );
}
