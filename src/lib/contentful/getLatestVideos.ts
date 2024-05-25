import { ClientOptions, contentful } from "./client";
import { TypeVideoSkeleton } from "./types";

export async function getLatestVideos(options?: ClientOptions) {
  const client = contentful(options);
  const entries = await client.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["-fields.uploadDate"],
    limit: 12,
  });

  return entries.items;
}
