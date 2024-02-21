import type { TypeVideoSkeleton } from "../types/generated";
import { contentfulClient, type ContentfulClientOptions } from "../utils/client";

export async function getLatestVideos(clientOptions?: ContentfulClientOptions) {
  const contentful = contentfulClient(clientOptions);
  const entries = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["-fields.uploadDate"],
    include: 2,
    limit: 12,
  });

  return entries.items;
}
