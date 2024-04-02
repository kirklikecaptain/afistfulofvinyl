import { ClientOptions, contentfulClient } from "~/api/client";
import { Slug, TypeVideoSkeleton } from "~/api/types";

export async function getVideoBySlugs(artistSlug: Slug, videoSlug: Slug, options?: ClientOptions) {
  const contentful = contentfulClient(options);
  const artist = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    "fields.slug": videoSlug,
    "fields.artist.sys.contentType.sys.id": "artist",
    "fields.artist.fields.slug": artistSlug,
  });

  return artist.items[0];
}
