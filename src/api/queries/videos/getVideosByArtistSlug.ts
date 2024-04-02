import { ClientOptions, contentfulClient } from "~/api/client";
import { Slug, TypeVideoSkeleton } from "~/api/types";

export async function getVideosByArtistSlug(artistSlug: Slug, options?: ClientOptions) {
  const contentful = contentfulClient(options);
  const videos = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["fields.title"],
    include: 2,
    "fields.artist.sys.contentType.sys.id": "artist",
    "fields.artist.fields.slug": artistSlug,
  });

  return videos.items;
}
