import { Title } from '@mantine/core';
import { notFound } from 'next/navigation';

import { getArtistProfilePageData } from '~/queries/getArtistProfilePageData';
import { CardSection } from '~/ui/components/CardSection';
import { Section } from '~/ui/components/Section';
import { VideoCard } from '~/ui/components/VideoCard';
import { Page } from '~/ui/layouts/Page';

export default async function ArtistProfilePage(props: PageProps<'/artists/[artist_slug]'>) {
  const { artist_slug } = await props.params;

  const { artist, videos } = await getArtistProfilePageData(artist_slug);

  if (!artist) {
    return notFound();
  }

  return (
    <Page>
      <Section bg="dark.9">
        <Title>{artist.name}</Title>
      </Section>
      <CardSection>
        <CardSection.Title>Videos</CardSection.Title>
        <CardSection.Grid>
          {videos.map((video) => (
            <VideoCard key={video._id} fragment={video} />
          ))}
        </CardSection.Grid>
      </CardSection>
    </Page>
  );
}
