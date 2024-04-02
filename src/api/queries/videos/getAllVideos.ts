import { contentfulClient, ClientOptions } from "~/api/client";
import { TypeVideoSkeleton } from "~/api/types";

export async function getAllVideos(options?: ClientOptions) {
  const contentful = contentfulClient(options);
  const entries = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    limit: 1000,
    include: 2,
  });

  return entries.items;
}
