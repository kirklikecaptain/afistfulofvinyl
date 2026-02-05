import { ArtistCard, CardSection } from '~/components';

import { getAllArtistsPageData } from './page.data';

export default async function ArtistsPage() {
  const { artists } = await getAllArtistsPageData();

  return (
    <CardSection>
      <CardSection.Title>Artists</CardSection.Title>
      <CardSection.Grid>
        {artists.map((artist) => (
          <ArtistCard key={artist._id} fragment={artist} />
        ))}
      </CardSection.Grid>
    </CardSection>
  );
}
