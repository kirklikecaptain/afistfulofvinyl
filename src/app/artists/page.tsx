import { CardList, ArtistCard } from '~/components';
import { getAllArtistsPageData } from './page.data';

export default async function ArtistsPage() {
  const data = await getAllArtistsPageData();

  return (
    <CardList>
      <CardList.Title order={2} mb="md">
        Artists
      </CardList.Title>
      <CardList.Content spacing="lg">
        {data.artists.map((artist) => (
          <ArtistCard key={artist._id} _fragment={artist} />
        ))}
      </CardList.Content>
    </CardList>
  );
}
