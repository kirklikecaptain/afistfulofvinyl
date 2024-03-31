import { notFound } from "next/navigation";
import { Title, Text, Breadcrumbs, Stack, Box, Flex, Group } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

import { Image, Link, Page, RichText, VideoPlayer } from "~/components";

import {
  VideoPageProps,
  getVideoPageData,
  generateVideoPageMetadata,
  generateVideoPageParams,
} from "./data";

export const generateStaticParams = generateVideoPageParams;
export const generateMetadata = generateVideoPageMetadata;

export default async function VideoPage(props: VideoPageProps) {
  const {
    params: { artistSlug, videoSlug },
  } = props;

  const { artist, video, moreVideos } = await getVideoPageData({ artistSlug, videoSlug });

  if (!video) {
    return notFound();
  }

  return (
    <Page artistColor={artist.fields.accentColor}>
      <Breadcrumbs
        className="text-artist-color"
        p="md"
        separator={<IconChevronRight size={16} />}
        style={{ borderBottom: "solid 1px var(--mantine-color-default-border)" }}
      >
        <Link c="inherit" href="/artists">
          Artists
        </Link>
        <Link c="inherit" href={`/artists/${artistSlug}`}>
          {artist.fields.name}
        </Link>
        <Text>{video.fields.title}</Text>
      </Breadcrumbs>
      <Flex direction={{ base: "column", lg: "row" }}>
        <Box flex={1}>
          <VideoPlayer url={video.fields.videoUrl} />
          <Stack className="bg-artist-color" gap="md" p="md">
            <Group>
              {artist.fields.photo?.fields.file?.url && (
                <Image
                  src={artist.fields.photo.fields.file.url}
                  alt={artist.fields.name}
                  width={50}
                  aspectRatio="1:1"
                  style={{
                    borderRadius: "100%",
                    border: "solid 2px var(--mantine-color-gray-2)",
                  }}
                />
              )}
              <Title order={1}>
                {`${video.fields.title}${video.fields.subtitle ? ` ${video.fields.subtitle}` : ""}`}
              </Title>
            </Group>
          </Stack>
          <RichText field={video.fields.longDescription} />
        </Box>
        <Stack w={{ lg: "350px" }} className="debug" component="aside" gap="lg" p="sm">
          <Title order={2}>More by {artist.fields.name}</Title>
          {moreVideos.map((video) => (
            <Link key={video.sys.id} href={`/artists/${artistSlug}/${video.fields.slug}`}>
              {video.fields.title}
            </Link>
          ))}
        </Stack>
      </Flex>
    </Page>
  );
}
