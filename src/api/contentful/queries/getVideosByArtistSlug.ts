import { contentfulClient, type ContentfulClientOptions } from "../utils/client";
import { TypeVideoSkeleton } from "../types/generated";

export async function getVideosByArtistSlug(
  artistSlug: string,
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
