import { Grid, Heading } from "@radix-ui/themes";

import { CardLink, Stack } from "~/components";
import { getVideosByArtist } from "~/libs/contentful";
import { resolveVideoPagePath } from "~/utils/paths";

export type RelatedVideosProps = { artistSlug: string };

export async function RelatedVideos({ artistSlug }: RelatedVideosProps) {
  const videos = await getVideosByArtist(artistSlug);

  return (
    <aside>
      <Stack gap="4">
        <Heading as="h2" size="4">
          Related
        </Heading>
        <Grid columns={{ xs: "2", sm: "1" }} gap="4">
          {videos.map((video) => (
            <CardLink
              key={video.sys.id}
              href={resolveVideoPagePath(video)}
              image={video.fields.thumbnail?.fields.file?.url}
              title={video.fields.title}
              accentColor={video.fields.artist?.fields.accentColor}
            />
          ))}
        </Grid>
      </Stack>
    </aside>
  );
}
