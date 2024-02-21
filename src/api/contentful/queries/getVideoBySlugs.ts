import { contentfulClient, type ContentfulClientOptions } from "../utils/client";
import { TypeVideoSkeleton } from "../types/generated";

export async function getVideoBySlugs(
  artistSlug: string,
  videoSlug: string,
  clientOptions?: ContentfulClientOptions,
) {
  const contentful = contentfulClient(clientOptions);
  const artist = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    "fields.slug": videoSlug,
    "fields.artist.fields.slug": artistSlug,
  });

  return artist.items[0];
}
