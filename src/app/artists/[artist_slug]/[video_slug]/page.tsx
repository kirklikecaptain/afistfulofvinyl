import { Container, Title, Text } from '@mantine/core';
import { notFound } from 'next/navigation';

import { getVideoPageData } from '~/queries/getVideoPageData';
import { YoutubePlayer } from '~/ui/components/YoutubePlayer';
import { Page } from '~/ui/layouts/Page';

export default async function VideoPage(props: PageProps<'/artists/[artist_slug]/[video_slug]'>) {
  const { artist_slug, video_slug } = await props.params;

  const { video } = await getVideoPageData(artist_slug, video_slug);

  if (!video) {
    return notFound();
  }

  return (
    <Page>
      <Container>
        <YoutubePlayer url={video.videoUrl} title={video.title} thumbnail={video.thumbnail?.url} />
        <Title>{video.title}</Title>
        <Text>{video.artist?.name}</Text>
        <pre style={{ overflow: 'auto' }}>{JSON.stringify(video, null, 2)}</pre>
      </Container>
    </Page>
  );
}
