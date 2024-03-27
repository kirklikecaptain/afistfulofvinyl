import { Metadata } from "next";

import { Page } from "~/templates";
import { Hero, CardList } from "~/sections";
import { ArtistCard } from "~/components";

import { getAllArtistsPageData } from "./page.data";

export const metadata: Metadata = {
  title: "Artist | A Fistful of Vinyl",
  description: "All artists featured on A Fistful of Vinyl",
};

export default async function AllArtistsPage() {
  const { artists, artistCards } = await getAllArtistsPageData();

  return (
    <Page>
      <Hero title="All Artists" />
      <CardList>
        {artistCards.map((cardProps) => (
          <ArtistCard key={cardProps.href} {...cardProps} />
        ))}
      </CardList>
    </Page>
  );
}
