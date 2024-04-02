import { resolve } from "path";

import { notFound } from "next/navigation";
import { Title, Text, Breadcrumbs, Stack, Box, Flex, Group } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

import { Image, Link, Page, RichText, VideoCard, VideoPlayer } from "~/components";
import { resolveVideoCardProps } from "~/components/VideoCard/VideoCard.utils";

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
    <Page>
      <Breadcrumbs
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
      <Flex flex={1} direction={{ base: "column", lg: "row" }}>
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
                    border: "solid 2px var(--artist-color-bright)",
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
        <Box
          visibleFrom="lg"
          style={{ borderRight: "solid 1px var(--mantine-color-default-border)" }}
        />
        <Stack w={{ lg: "400px" }} component="aside" gap="lg" p="sm">
          <Title order={2} size="sm">
            More by {artist.fields.name}
          </Title>
          {moreVideos.map((video) => {
            const cardProps = resolveVideoCardProps(video);
            return <VideoCard key={cardProps.title} {...cardProps} />;
          })}
        </Stack>
      </Flex>
    </Page>
  );
}
