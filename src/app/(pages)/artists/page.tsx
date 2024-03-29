import { Metadata } from "next";

import { ArtistCard, CardList, Hero, Page } from "~/components";

import { getAllArtistsPageData } from "./data";

export const metadata: Metadata = {
  title: "Artists",
  description: "All artists featured on A Fistful of Vinyl",
};

export default async function AllArtistsPage() {
  const { artists, artistCards } = await getAllArtistsPageData();

  return (
    <Page>
      <Hero title="Artists" />
      <CardList>
        {artistCards.map((cardProps) => (
          <ArtistCard key={cardProps.href} {...cardProps} />
        ))}
      </CardList>
    </Page>
  );
}
