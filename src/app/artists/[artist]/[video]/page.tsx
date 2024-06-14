import { Container, Heading, Section } from "@radix-ui/themes";

import { Page, YouTubePlayer } from "~/components";
import { getVideoBySlugs } from "~/contentful";

export type VideoPageProps = {
  params: {
    artist: string;
    video: string;
  };
};

export default async function VideoPage({ params }: VideoPageProps) {
  const video = await getVideoBySlugs(params);
  const videoId = video.fields.videoUrl.split("?v=")[1];

  return (
    <Page>
      <Section p="4">
        <Container>
          <YouTubePlayer videoId={videoId} title={video.fields.title} />
          <Heading>{video.fields.title}</Heading>
        </Container>
      </Section>
    </Page>
  );
}
