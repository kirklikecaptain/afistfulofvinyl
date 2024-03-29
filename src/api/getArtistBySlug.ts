import { ContentfulClientOptions, contentfulClient } from "~/libs/contentful/client";
import { Slug, TypeArtistSkeleton } from "~/libs/contentful/types";

export async function getArtistBySlug(artistSlug: Slug, clientOptions?: ContentfulClientOptions) {
  const contentful = contentfulClient(clientOptions);
  const artist = await contentful.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
    "fields.slug": artistSlug,
  });

  return artist.items[0];
}
