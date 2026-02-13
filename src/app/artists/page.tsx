import { getArtistListPageData } from '~/queries/getArtistListPageData';
import { ArtistCard } from '~/ui/components/ArtistCard';
import { CardSection } from '~/ui/components/CardSection';

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
