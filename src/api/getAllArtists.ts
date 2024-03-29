import { ContentfulClientOptions, contentfulClient } from "~/libs/contentful/client";
import { TypeArtistSkeleton } from "~/libs/contentful/types";

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
