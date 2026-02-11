import { ArtistCard, CardSection } from '~/components';
import { getArtistListPageData } from '~/queries';

export default async function ArtistListPage() {
  const { artists } = await getArtistListPageData();

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
