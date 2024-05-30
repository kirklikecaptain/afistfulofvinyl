import { CardLink, CardSection } from "~/components";
import { getAllArtists } from "~/contentful";
import { resolveArtistPagePath } from "~/utils/paths";

export async function ArtistList() {
  const artists = await getAllArtists();

  return (
    <CardSection columns="4">
      {artists.map((artist) => (
        <CardLink
          key={artist.sys.id}
          href={resolveArtistPagePath(artist)}
          image={artist.fields.photo?.fields.file?.url}
          title={artist.fields.name}
          accentColor={artist.fields.accentColor}
          aspectRatio={1}
        />
      ))}
    </CardSection>
  );
}
