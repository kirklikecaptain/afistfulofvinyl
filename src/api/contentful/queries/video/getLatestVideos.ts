import { contentful } from "~/api/contentful/config/client";
import type { TypeVideoSkeleton } from "~/api/contentful/types/generated";

interface Options {
  limit?: number;
}

export async function getLatestVideos({ limit }: Options = { limit: 12 }) {
  const entries = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["-fields.uploadDate"],
    include: 4,
    limit,
  });

  return entries.items;
}
