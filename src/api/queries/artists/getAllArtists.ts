import { ClientOptions, contentfulClient } from "~/api/client";
import { TypeArtistSkeleton } from "~/api/types";

export async function getAllArtists(options?: ClientOptions) {
  const contentful = contentfulClient(options);
  const entries = await contentful.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
    order: ["fields.name"],
    limit: 500,
    include: 2,
  });

  return entries.items;
}
