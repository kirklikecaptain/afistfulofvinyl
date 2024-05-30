import { contentful, type ClientOptions } from "~/contentful/client";
import type { ArtistEntry, TypeArtistSkeleton } from "~/types";

export async function getAllArtists(options?: ClientOptions): Promise<ArtistEntry[]> {
  const client = contentful(options);
  const entries = await client.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
    order: ["fields.name"],
    limit: 500,
    include: 2,
  });

  return entries.items;
}

export async function getArtistBySlug(slug: string, options?: ClientOptions): Promise<ArtistEntry> {
  const client = contentful(options);
  const artist = await client.getEntries<TypeArtistSkeleton>({
    content_type: "artist",
    "fields.slug": slug,
  });

  return artist.items[0];
}
