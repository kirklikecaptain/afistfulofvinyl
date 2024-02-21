import { contentfulClient, type ContentfulClientOptions } from "../utils/client";
import { type TypeArtistSkeleton } from "../types/generated";

export async function getAllArtists(clientOptions?: ContentfulClientOptions) {
  const contentful = contentfulClient(clientOptions);
  const entries = await contentful.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
    order: ["fields.name"],
    limit: 500,
    include: 2,
  });

  return entries.items;
}
