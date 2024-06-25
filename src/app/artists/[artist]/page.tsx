import { Avatar, Container, Heading, Section } from "@radix-ui/themes";
import { notFound } from "next/navigation";

import { CardLink, CardSection, Main, Stack } from "~/components";
import { getVideoPagePath } from "~/utils/paths";

import { fetchArtistProfilePageData } from "./_data";
import { fetchMetadata } from "./_meta";

export const generateMetadata = fetchMetadata;

export type ArtistProfilePageProps = {
  params: {
    artist: string;
  };
};

export default async function ArtistProfilePage({ params }: ArtistProfilePageProps) {
  const { artist, videos } = await fetchArtistProfilePageData(params.artist);

  if (!artist) {
    return notFound();
  }

  return (
    <Main artistColor={artist.accentColor ?? "#000"}>
      <Section>
        <Container>
          <Stack gap="6" align="center" justify="center">
            <Avatar
              src={artist.photo?.url ?? undefined}
              fallback={artist.name ? artist.name[0] : "?"}
              size="9"
              className="with-color-overlay"
            />
            <Heading size="9">{artist.name}</Heading>
          </Stack>
        </Container>
      </Section>
      <CardSection title="Videos">
        {videos.map((video) => (
          <CardLink
            key={video.slug}
            href={getVideoPagePath(video.artist?.slug, video.slug)}
            image={video.thumbnail?.url}
            title={video.title}
            accentColor={video.artist?.accentColor}
          />
        ))}
      </CardSection>
    </Main>
  );
}
