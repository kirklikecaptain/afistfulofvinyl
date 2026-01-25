import { CardList, VideoCard } from '~/components';
import { getArtistPageData } from './page.data';
import { notFound } from 'next/navigation';

export default async function ArtistPage({ params }: PageProps<'/artists/[artist_slug]'>) {
  const { artist_slug } = await params;
  const { artist, videos } = await getArtistPageData(artist_slug);

  if (!artist) {
    return notFound();
  }

  return (
    <div>
      <div>{artist?.name}</div>
      <CardList>
        <CardList.Title order={2} mb="md">
          Videos by {artist?.name}
        </CardList.Title>
        <CardList.Content spacing="lg">
          {videos.map((video) => (
            <VideoCard key={video._id} _fragment={video} />
          ))}
        </CardList.Content>
      </CardList>
    </div>
  );
}
