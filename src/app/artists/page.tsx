import { CardLink, CardSection, Hero, Page } from "~/components";
import { getAllArtists } from "~/libs/contentful";
import { resolveArtistPagePath } from "~/utils/paths";

export default async function AllArtistsPage() {
  const artists = await getAllArtists();

  return (
    <Page>
      <Hero heading="Artists" />
      <CardSection
        columns="4"
        cards={artists.map((artist) => (
          <CardLink
            key={artist.sys.id}
            href={resolveArtistPagePath(artist)}
            image={artist.fields.photo?.fields.file?.url}
            title={artist.fields.name}
            accentColor={artist.fields.accentColor}
            aspectRatio={1}
          />
        ))}
      />
    </Page>
  );
}
