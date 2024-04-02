import { ClientOptions, contentfulClient } from "~/api/client";
import { TypeVideoSkeleton } from "~/api/types";

export async function getLatestVideos(options?: ClientOptions) {
  const contentful = contentfulClient(options);
  const entries = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["-fields.uploadDate"],
    include: 2,
    limit: 12,
  });

  return entries.items;
}
