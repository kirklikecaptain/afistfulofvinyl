import { contentful, type ClientOptions } from "~/contentful/client";
import type { VideoEntry, TypeVideoSkeleton } from "~/types";

export async function getAllVideos(options?: ClientOptions): Promise<VideoEntry[]> {
  const client = contentful(options);
  const entries = await client.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    limit: 1000,
    include: 2,
  });

  return entries.items;
}

export async function getLatestVideos(options?: ClientOptions): Promise<VideoEntry[]> {
  const client = contentful(options);
  const entries = await client.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["-fields.uploadDate"],
    include: 2,
    limit: 12,
  });

  return entries.items;
}

export type GetVideoParams = {
  artist: string;
  video: string;
};

export async function getVideoBySlugs(params: GetVideoParams, options?: ClientOptions): Promise<VideoEntry> {
  const { artist, video } = params;

  const client = contentful(options);
  const entries = await client.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    "fields.slug": video,
    "fields.artist.sys.contentType.sys.id": "artist",
    "fields.artist.fields.slug": artist,
  });

  return entries.items[0];
}

export async function getVideosByArtist(artistSlug: string, options?: ClientOptions) {
  const client = contentful(options);
  const entries = await client.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["fields.title"],
    include: 2,
    "fields.artist.sys.contentType.sys.id": "artist",
    "fields.artist.fields.slug": artistSlug,
  });

  return entries.items;
}
