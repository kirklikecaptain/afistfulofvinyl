import { Metadata } from "next";

import { Page } from "~/templates";
import { Hero, CardList } from "~/sections";
import { ArtistCardLink } from "~/components";

import { getAllArtistsPageData } from "./page.data";

export const metadata: Metadata = {
  title: "Artists",
  description: "All artists featured on A Fistful of Vinyl",
};

export default async function AllArtistsPage() {
  const { artists } = await getAllArtistsPageData();

  return (
    <Page>
      <Hero title="All Artists" />
      <CardList>
        {artists.map((artist) => (
          <ArtistCardLink
            key={artist.sys.id}
            name={artist.fields.name}
            href={`/artist/${artist.fields.slug}`}
          />
        ))}
      </CardList>
    </Page>
  );
}
