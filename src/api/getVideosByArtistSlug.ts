import { ContentfulClientOptions, contentfulClient } from "~/libs/contentful/client";
import { Slug, TypeVideoSkeleton } from "~/libs/contentful/types";

export async function getVideosByArtistSlug(
  artistSlug: Slug,
  clientOptions?: ContentfulClientOptions,
) {
  const contentful = contentfulClient(clientOptions);
  const videos = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["fields.title"],
    include: 2,
    "fields.artist.sys.contentType.sys.id": "artist",
    "fields.artist.fields.slug": artistSlug,
  });

  return videos.items;
}
