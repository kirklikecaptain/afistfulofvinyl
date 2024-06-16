import { Avatar, Container, Heading, Section } from "@radix-ui/themes";

import { CardLink, CardSection, Page, Stack } from "~/components";
import { getArtistBySlug, getVideosByArtist } from "~/libs/contentful";
import { resolveVideoPagePath } from "~/utils/paths";

export type ArtistProfilePageProps = {
  params: {
    artist: string;
  };
};

export default async function ArtistProfilePage({ params }: ArtistProfilePageProps) {
  const artist = await getArtistBySlug(params.artist);
  const videos = await getVideosByArtist(params.artist);

  return (
    <Page artistColor={artist.fields.accentColor}>
      <Section>
        <Container>
          <Stack gap="6" align="center" justify="center">
            <Avatar
              src={artist.fields.photo?.fields.file?.url}
              fallback={artist.fields.name[0]}
              size="9"
              className="with-color-overlay"
            />
            <Heading size="9">{artist.fields.name}</Heading>
          </Stack>
        </Container>
      </Section>
      <CardSection
        title="Videos"
        cards={videos.map((video) => (
          <CardLink
            key={video.sys.id}
            href={resolveVideoPagePath(video)}
            image={video.fields.thumbnail?.fields.file?.url}
            title={video.fields.title}
            accentColor={video.fields.artist?.fields.accentColor}
          />
        ))}
      ></CardSection>
    </Page>
  );
}
