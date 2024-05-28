import { TypeVideoSkeleton } from "~/contentful/types";
import { ClientOptions, contentful } from "~/contentful/client";

export async function getLatestVideos(options?: ClientOptions) {
  const client = contentful(options);
  const entries = await client.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["-fields.uploadDate"],
    include: 2,
    limit: 12,
  });

  return entries.items;
}
