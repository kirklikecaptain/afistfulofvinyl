import { Text, Box, Heading, Card, Flex, Avatar, Separator } from "@radix-ui/themes";

import { YouTubePlayer, RichText, Stack } from "~/components";
import { getVideoBySlugs } from "~/libs/contentful";

export type FeaturedVideoProps = {
  artistSlug: string;
  videoSlug: string;
};

export async function FeaturedVideo({ artistSlug, videoSlug }: FeaturedVideoProps) {
  const video = await getVideoBySlugs({ video: videoSlug, artist: artistSlug });
  const fields = video.fields;
  const videoId = fields.videoUrl.split("?v=")[1];

  return (
    <Card size="2">
      <YouTubePlayer videoId={videoId} title={fields.title} />
      <Stack pt="4" gap="2">
        <Heading as="h1" size="8">
          <Text>{fields.title}</Text>
          {fields.subtitle && <Text size="8">{` ${fields.subtitle}`}</Text>}
        </Heading>
        {fields.artist?.fields && (
          <Flex gap="4" align="center">
            <Avatar size="2" radius="full" fallback={fields.artist.fields.name[0]} />
            <Heading as="h2" size="7">
              {fields.artist.fields.name}
            </Heading>
          </Flex>
        )}
      </Stack>
      {fields.longDescription && (
        <>
          <Separator size="4" mt="4" />
          <Box py="4">
            <RichText field={fields.longDescription} />
          </Box>
        </>
      )}
    </Card>
  );
}
