import { Metadata } from "next";
import {
  Avatar,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import { notFound } from "next/navigation";

import { CardLink, Page, RichText, Stack, YouTubePlayer } from "~/components";
import { getVideoPagePath } from "~/utils/paths";

import { fetchVideoPageData } from "./page.data";

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { video } = await fetchVideoPageData({ artistSlug: params.artist, videoSlug: params.video });

  if (!video) {
    return notFound();
  }

  return {
    title: `${video.title} | ${video.artist?.name}`,
    description: video.shortDescription,
  };
}

export type VideoPageProps = {
  params: {
    artist: string;
    video: string;
  };
};

export default async function VideoPage({ params }: VideoPageProps) {
  const { video, relatedVideos } = await fetchVideoPageData({
    artistSlug: params.artist,
    videoSlug: params.video,
  });

  if (!video) {
    return notFound();
  }

  return (
    <Page>
      <Section p="4">
        <Container>
          <Grid columns={{ sm: "1fr 250px", md: "1fr 320px" }} gap="4" align="start">
            <Card size="2">
              <YouTubePlayer videoId={video.videoUrl?.split("?v=")[1] ?? ""} title={video.title ?? ""} />
              <Stack pt="4" gap="2">
                <Heading as="h1" size="8">
                  <Text>{video.title}</Text>
                  {video.subtitle && <Text size="8">{` ${video.subtitle}`}</Text>}
                </Heading>
                <Flex gap="4" align="center">
                  <Avatar
                    size="2"
                    radius="full"
                    src={video.artist?.photo?.url ?? undefined}
                    fallback={video.artist?.name ? video.artist?.name[0] : "?"}
                  />
                  <Heading as="h2" size="7">
                    {video.artist?.name}
                  </Heading>
                </Flex>
              </Stack>
              {video.longDescription && (
                <>
                  <Separator size="4" mt="5" />
                  <Box py="4">
                    <RichText field={video.longDescription.json} links={video.longDescription.links} />
                  </Box>
                </>
              )}
            </Card>
            <aside>
              <Stack gap="4">
                <Heading as="h2" size="4">
                  Related
                </Heading>
                <Grid columns={{ xs: "2", sm: "1" }} gap="4">
                  {relatedVideos.map((related) => (
                    <CardLink
                      key={related.slug}
                      href={getVideoPagePath(related.artist?.slug, related.slug)}
                      image={related.thumbnail?.url}
                      title={related.title}
                      accentColor={related.artist?.accentColor}
                    />
                  ))}
                </Grid>
              </Stack>
            </aside>
          </Grid>
        </Container>
      </Section>
    </Page>
  );
}
