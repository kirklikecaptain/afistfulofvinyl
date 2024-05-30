import { Hero, Page } from "~/components";

import { ArtistList } from "./sections/artist-list";

export default function AllArtistsPage() {
  return (
    <Page>
      <Hero heading="All Artists" />
      <ArtistList />
    </Page>
  );
}
