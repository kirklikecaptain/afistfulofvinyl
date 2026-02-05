import { notFound } from 'next/navigation';

import { CardSection, VideoCard } from '~/components';

import { getArtistPageData } from './page.data';

export default async function ArtistPage({ params }: PageProps<'/artists/[artist_slug]'>) {
  const { artist_slug } = await params;
  const { artist, videos } = await getArtistPageData(artist_slug);

  if (!artist) {
    return notFound();
  }

  return (
    <div>
      <div>{artist?.name}</div>
      <CardSection>
        <CardSection.Title>Videos by {artist?.name}</CardSection.Title>
        <CardSection.Grid>
          {videos.map((video) => (
            <VideoCard key={video._id} fragment={video} />
          ))}
        </CardSection.Grid>
      </CardSection>
    </div>
  );
}
