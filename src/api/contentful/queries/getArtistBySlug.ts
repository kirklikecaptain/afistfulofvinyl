import { contentfulClient, type ContentfulClientOptions } from "../utils/client";
import { TypeArtistSkeleton } from "../types/generated";

export async function getArtistBySlug(artistSlug: string, clientOptions?: ContentfulClientOptions) {
  const contentful = contentfulClient(clientOptions);
  const artist = await contentful.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
    "fields.slug": artistSlug,
  });

  return artist.items[0];
}
