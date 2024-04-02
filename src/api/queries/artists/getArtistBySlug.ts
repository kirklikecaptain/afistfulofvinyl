import { ClientOptions, contentfulClient } from "~/api/client";
import { TypeArtistSkeleton, Slug } from "~/api/types";

export async function getArtistBySlug(artistSlug: Slug, options?: ClientOptions) {
  const contentful = contentfulClient(options);
  const artist = await contentful.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
    "fields.slug": artistSlug,
  });

  return artist.items[0];
}
