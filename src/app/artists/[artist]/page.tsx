import { CardLink, CardSection, Hero, Page } from "~/components";
import { getArtistBySlug, getVideosByArtist } from "~/contentful";
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
    <Page>
      <Hero heading={artist.fields.name} />
      <CardSection>
        {videos.map((video) => (
          <CardLink
            key={video.sys.id}
            href={resolveVideoPagePath(video)}
            image={video.fields.thumbnail?.fields.file?.url}
            title={video.fields.title}
            subtitle={video.fields.artist?.fields.name}
            accentColor={video.fields.artist?.fields.accentColor}
          />
        ))}
      </CardSection>
    </Page>
  );
}
