import { contentfulClient, type ContentfulClientOptions } from "../utils/client";
import { TypeVideoSkeleton } from "../types/generated";
import { Slug } from "../types";

export async function getVideoBySlugs(
  artistSlug: Slug,
  videoSlug: Slug,
  clientOptions?: ContentfulClientOptions,
) {
  const contentful = contentfulClient(clientOptions);
  const artist = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    "fields.slug": videoSlug,
    "fields.artist.sys.contentType.sys.id": "artist",
    "fields.artist.fields.slug": artistSlug,
  });

  return artist.items[0];
}
